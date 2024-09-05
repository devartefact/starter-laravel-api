<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>
        {{ config('app.name') }} API
    </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="/assets/images/startert-api-laravel-10.png" />
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin-top: 80px;
        }
        .codes {
            background: rgb(244, 245, 247);
            text-align: left !important;
            padding: 5px 10px;
            margin-bottom: 20px;
        }
        .codes code {
            margin-bottom: 0 !important;
            color: #333333 !important;

        }
        .bg-info-subtle {
            background-color: #cff4fc;
        }
        .rounded-lg {
            border-radius: 1rem;
        }
        .min-vh-80 {
            min-height: 80vh;
        }
    </style>
</head>
<body>
    <div class="container d-flex justify-content-center align-items-center min-vh-80">
        <div class="p-3 mb-4 bg-info-subtle text-center rounded-lg">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold mb-3">{{ __('messages.welcome') }}</h1>
                <p class="col-md-8 mx-auto mb-4">
                    {{ __('This is a starter for anyone looking to build a web application with Laravel, MySQL, and other Database Management Systems.') }}
                </p>
                <a href="#" class="btn btn-primary btn-lg" type="button">
                    {{ __('Documentation') }}
                </a>
            </div>
        </div>
    </div>
</body>
</html>
