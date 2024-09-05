<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="description" content="{{ __('Welcome to the official platform for registering talents with :appName.', ['appName' => config('app.name')]) }}">
    <meta name="keywords" content="maajabu,talent">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://maajabutalent.com">
    <meta name="author" content="startert-api-laravel-10">
    <meta name="language" content="Français, English">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Balises Open Graph (OG) -->
    <meta property="og:title" content="{{ __('Welcome to :appName', ['appName' => config('app.name')]) }}">
    <meta property="og:description" content="{{ __('Welcome to the official platform for registering talents with :appName.', ['appName' => config('app.name')]) }}">
    <meta property="og:image" content="/assets/images/logo-maajabu-talent.png">
    <meta property="og:url" content="https://maajabutalent.com">

    <title>
        @yield('title') | {{ config('app.name') }}
    </title>
    <!-- Fonts -->
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
    <link rel="icon" type="image/png" href="/assets/images/logo-maajabu-talent.png" />
    @yield('script')
</head>
<body>

@yield('content')

</body>
</html>
