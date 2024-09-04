#!/bin/bash

export XDEBUG_MODE=coverage

# Run phpunit command and get value in variable
result_coverage=$(vendor/bin/phpunit --coverage-text)

coverage_line=$(echo "$result_coverage" | grep -oE 'Lines:[[:space:]]+[0-9]+\.[0-9]+%')
coverage_percentage=$(echo "$coverage_line" | awk '{print $2}')
cleaned_percentage=$(echo "$coverage_percentage" | sed 's/%$//')
total_line_percentage=$(echo "$cleaned_percentage" | awk 'NR==1{print}')

echo "$total_line_percentage"
