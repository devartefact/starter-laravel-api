# Starter Laravel App

## About

This is a Starter, developed with Laravel framework and MySQL.

## Installation

After cloning the project, you must use the package manager <a href="https://getcomposer.org/" target="_blank">Composer</a> to install all dependencies.

We use <a href="https://nodejs.org/" target="_blank">Node.js</a> and <a href="https://docs.npmjs.com/about-npm">npm</a> as the package manager for frontend libraries and some automated actions.

-   Cloning project

```sh
git clone https://github.com/devartefact/starter-laravel-app.git
```

-   Installation dependencies

```sh
composer install
```

-   Installation Node.js dependencies

```sh
npm install
```

#### Initialization

-   Rename file .env.example to .env
-   Update database and other informations

*   Generate app key (If you don't have APP_KEY value in .env)

```sh
php artisan key:generate
```

-   JWT token

> This is optional, just if you use jwt

```sh
php artisan jwt:secret
```

-   Run Migrations

```sh
php artisan migrate
```

-   Generate Storage link

```sh
php artisan storage:link
```

-   Initialize seeds

```sh
php artisan db:seed
```

-   Run tests

```sh
php artisan test
```

-   Start server

```sh
php artisan serve
```

-   Coverage HTML

```sh
XDEBUG_MODE=coverage ./vendor/bin/phpunit --coverage-html reports/coverage/html
```

-   Jobs
    > Some action are in queue, for example sms and mail message. You could run schedule command or queue

```sh
php artisan schedule:work
```

```sh
php artisan queue:work -v
```

### Code Formatting

-   **Eslint**

The project uses [Eslint](https://eslint.org/) to identify errors in the code and ensure a minimum level of code quality.

Run the linter:

```sh
npm run lint
```

_After running this command, you need to fix the detected errors (issues) and rerun it to ensure everything is clean_ 😉

-   **Prettier**

[Prettier](https://prettier.io/) formats the code according to the common standards configured, ensuring that the entire team or anyone working on the project follows the same source code format.

Check for improperly formatted code:

```sh
npm run check-format
```

Format the code:

```sh
npm run format
```

### Commitlint

[Commitlint](https://commitlint.js.org/guides/getting-started.html) is a module that allows configuring commit message patterns and formats to ensure that commit messages are clear, facilitating better collaboration and adherence to recommended standards for writing good commit messages, as suggested by [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

A valid commit message consists of three parts: **the header**, **the body**, and **the footer**.

```sh
git commit -m "build(core): init project"
```

For a better understanding of commit message formatting, the links below might be helpful:

-   [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
-   [Understanding Semantic Commit Messages Using Git and Angular](https://nitayneeman.com/posts/understanding-semantic-commit-messages-using-git-and-angular/)
-   [How to Build Scalable Architecture for your Next.js Project](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7)

### Git Hooks (Husky)

Git Hooks allow you to run custom scripts when certain important actions occur.

[Husky](https://typicode.github.io/husky/) enables you to configure and automate certain actions before every commit, push, etc.

For example, in our project, we have configured it to run eslint and prettier to format the code before each commit.

## App Home Page

-   e.g : [localhost:8000](http://localhost:8000)

## Contributing

-   [@bolenge](https://github.com/bolenge)
-   [@devartefact](https://github.com/devartefact)

## License
