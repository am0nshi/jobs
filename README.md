### Installation
php 8.2 & composer required
```php
composer i
cp .env.example .env
php artisan key:generate

npm run build && php artisan inertia:start-ssr &
OR
npm run dev

php artisan serve
```
now you have you env setted up on localhost:8000

### Development
## Get backend endpoints list
```php
php artisan route:list
```