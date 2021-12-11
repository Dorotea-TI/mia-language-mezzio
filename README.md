# mia-language-mezzio

1. Incluir librerias:

2. Incluir rutas:
```php
$app->route('/mia-language/fetch/{id}', [Mia\Language\Handler\FetchHandler::class], ['GET', 'OPTIONS', 'HEAD'], 'mia_language.fetch');
$app->route('/mia-language/list', [Mia\Language\Handler\ListHandler::class], ['POST', 'OPTIONS', 'HEAD'], 'mia_language.list');
$app->route('/mia-language/remove/{id}', [\Mia\Auth\Handler\AuthHandler::class, new \Mia\Auth\Middleware\MiaRoleAuthMiddleware([MIAUser::ROLE_ADMIN]), Mia\Language\Handler\RemoveHandler::class], ['GET', 'DELETE', 'OPTIONS', 'HEAD'], 'mia_language.remove');
$app->route('/mia-language/save', [\Mia\Auth\Handler\AuthHandler::class, new \Mia\Auth\Middleware\MiaRoleAuthMiddleware([MIAUser::ROLE_ADMIN]), Mia\Language\Handler\SaveHandler::class], ['POST', 'OPTIONS', 'HEAD'], 'mia_language.save');
```