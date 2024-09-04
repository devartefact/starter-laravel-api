<?php
/**
 * We simulate the call to `artisan schedule:run`
 */
$_SERVER['argv'] = [
    'artisan',
    'schedule:run',
];

// Run artisan
require_once __DIR__.'/artisan';
