.PHONY: helpers
helpers:
	php artisan ide-helper:generate
	php artisan ide-helper:models -F app/Models/IdeHelperModels.php -M
	php artisan ide-helper:meta
