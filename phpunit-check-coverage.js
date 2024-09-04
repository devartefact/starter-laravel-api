/**
 * @package Phpunit Check Coverage
 * @description A nodejs module that allows you to check the coverage rate of your tests that are tested with phpunit
 * @author Don de Dieu Bolenge <dondedieubolenge@gmail.com><https://dondedieubolenge.com>
 */
const packageIdentity = {
    author: 'Don de Dieu Bolenge<dondedieubolenge@gmail.com><https://dondedieubolenge.com>',
    repo: 'https://github.com/bolenge/phpunit-check-coverage',
};

const fs = require('fs');
const path = require('path');
const startTime = performance.now();

/**
 * Parse and get the config
 * @returns {Object}
 */
const parseConfig = () => {
    const configPath = path.resolve('.checkcoveragerc.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    return config;
};

/**
 * Colors
 */
const offLogColor = '\x1b[0m';
const logColors = {
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    gray: '\x1b[90m',
    blue: '\x1b[34m',
};

/**
 * Allow to color the str parameter
 * @param {String} str
 * @param {String} color
 * @returns {String}
 */
const colorStr = (str, color) => {
    return `${logColors[color]}${str}${offLogColor}`;
};

/**
 * Show a message by type with color for this error
 * @param {String} message Error message
 * @param {String} type
 * @param {String} color
 * @returns {void}
 */
const logMessage = (message, type = 'error', color = 'red') => {
    console.error(`${colorStr(type, color)}`, message);
};

/**
 * Show a warning message when phpunit config is not correct
 * @returns {void}
 */
const warningPhpunitConfig = () => {
    console.error(
        `[${colorStr('warn', 'yellow')}]`,
        'Phpunit configuration for Phpunit-check-coverage'
    );
    logMessage(
        `Make sure you have properly configured and installed ${colorStr(
            'phpunit',
            'yellow'
        )} in your project`
    );
    logMessage(
        `Visit ${packageIdentity.repo} for documentation about this`,
        'info',
        'blue'
    );
};

const warningRC = () => {
    console.error(
        `[${colorStr('warn', 'yellow')}]`,
        '.checkcoveragerc.json for Phpunit-check-coverage'
    );
    logMessage(
        'Make sure you have .checkcoveragerc.json file in at the root of project and specify minimumCoverage > 0 and <= 100'
    );
    logMessage(
        `Visit ${packageIdentity.repo} for documentation about this`,
        'info',
        'blue'
    );
};

const { exec } = require('child_process');

/**
 * Execution script for to get app tests coverages
 */
exec('bash phpunit-check-coverage.sh', (error, stdout, _) => {
    if (error) {
        logMessage(`Coverage checking or test execution error : ${error}`);
        return;
    }

    const coveragePercentage = parseFloat(stdout.trim());

    if (isNaN(coveragePercentage)) {
        warningPhpunitConfig();
        return;
    }

    const config = parseConfig();

    if (
        !config.minimumCoverage ||
        config.minimumCoverage <= 0 ||
        config.minimumCoverage > 100
    ) {
        warningRC();
        return;
    }

    const MAX_RATE_COVERAGE = config.minimumCoverage;

    // Check rate coverage
    if (coveragePercentage >= MAX_RATE_COVERAGE) {
        const endTime = performance.now();
        const elapsedTime = (endTime - startTime) / 1000;

        console.log(`${logColors.gray}$ phpunit-check-coverage${offLogColor}`);
        console.log(
            `✅ All tests executed with ${colorStr(
                `${coveragePercentage}%`,
                'green'
            )} coverage on the ${colorStr(
                `${MAX_RATE_COVERAGE}%`,
                'green'
            )} of maximum`
        );

        console.log(`✨ Done in ${elapsedTime.toFixed(2)}s`);
    } else {
        console.error(
            `[${colorStr('warn', 'yellow')}]`,
            `Your test coverage rate is ${colorStr(
                `${coveragePercentage}%`,
                'yellow'
            )}, it must be equal to or greater than ${colorStr(
                `${MAX_RATE_COVERAGE}%`,
                'green'
            )}.`
        );

        logMessage('Command failed with exit code 1.');
        logMessage(
            `Visit ${packageIdentity.repo} for documentation about this`,
            'info',
            'blue'
        );

        process.exit(1); // Exit process with an error code (1)
    }
});
