# Page новых тарифов

## Перед началом работы

Для работы необходимо установить `nodejs` (вместе с `npm`)

- [Установка Nodejs](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager "Installing Node.js via package manager")

## Установка зависимостей

```
$ npm install
```

По окончанию выполнения будут установлены все необходимые пакеты.

### Главные задачи Gulp

- `$ gulp clean` - очистка каталога `build/`

- `$ gulp build` - полная сборка проекта
- `$ gulp start` - запуск задачи `build` и `serve` и отслеживания изменений в реальном времени

## Общая концепция

- `src/` - каталог для размещения рабочих файлов (html, sass, js, изображения)
- `build/` - каталог для размещения готовой верстки

Вся работа осуществляется в каталоге `src/`.

## Концепции работы

### Очистка каталога сборки

Задача `$ gulp clean`

При выполнении задачи полностью удаляется содержимое каталога `build/`

### Полная сборка проекта

Задача `$ gulp build`

При запуске задачи последовательно выполняются задачи `clean`, `copy`, `css`, `images`, `sprite`, `js`, `html`.

В итоге выполнения в каталоге `build/` формируется полная сборка проекта.

### Livereload и синхронизация между браузерами

Задача `$ gulp serve`

При выполнении задачи запускается локальный веб-сервер BrowserSync и открыватся index.html проекта, затем при изменении или добавлении в каталоге `src/` каких  
либо файлов, автоматически запускается соответсвующая задача по их обработке.

[Подробнее о BrowserSync](http://www.browsersync.io/ "Подробнее о BrowserSync")

Сервер использует каталог `build/` в качестве корня проекта.
