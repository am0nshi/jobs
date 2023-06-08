## Installation
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

## Development
### Get backend endpoints list
```php
php artisan route:list
```

## Links
### Project template demo
https://preview.themeforest.net/item/jobes-job-portal-html-template/full_screen_preview/43974301?_ga=2.49632869.233056005.1680321755-481381931.1650123710&_gac=1.153354826.1678999665.CjwKCAjw_MqgBhAGEiwAnYOAesO8ajpTzR5FXQLnPSMXO8PcdOIegHu9lpdOnGfMQmeaYvVAKWUQ5hoCmfQQAvD_BwE

### Inertia + Laravel + react demo
https://github.com/Landish/pingcrm-react

### Inertia modal example
https://medium.com/swlh/inertia-react-and-laravel-popup-modal-example-c82e48373895
https://github.com/inertiajs/inertia/pull/44

### Inertia websockets
https://laracasts.com/discuss/channels/general-discussion/real-time-notifications-with-pusher-echo-inertia-with-react
