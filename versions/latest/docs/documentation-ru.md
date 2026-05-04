# bClass components

`bClass components` — это CSS-библиотека, предоставляющая готовые к использованию UI-компоненı и стили для веб-разработки. Данная документация описывает все существующие компоненты и способы их использования.

## Требования

Для работы с данной библиотекой рекомендуется использовать `bClass theme css` и `bClass theme js`.

## Базовые компоненты

### Экран загрузки страницы

- `#page-loader`

### Модели загрузчиков

- `.page-loader-m-1` — Анимированный загрузчик страницы
- `.loader-m-1` — Вращающийся анимированный загрузчик

#### Пример

```html
<div id="page-loader" class="page-loader-m-1">
  <img src="./loader/1.png" alt="page-loader" />
  <img src="./loader/2.png" alt="page-loader" />
</div>
```

#### Пример

```html
<div class="loader-m-1 w-rem-5 h-rem-5"></div>
```

### Подтверждение использования файлов Cookie

- `#cookies-confirmation`
- `#cookies-confirmation-close`

#### Пример

[codepen](https://codepen.io/Endwall/pen/PoyxgXX)

### Стили линий моделей

- `.model-line` — Базовая модель линии
- `.solid .model-line` — Сплошной стиль
- `.edge .model/line` — Стиль с рамкой (edge)
- `.edged .model-line` — Окантованный стиль
- `.triangle-experimental-model-1 .model-line` — Треугольная экспериментальная модель 1
- `.triangle-experimental-model-2 .model-line` — Треугольная экспериментальная модель 2
- `.triangle-experimental-model-3 .model-line` — Треугольная экспериментальная модель 3

#### Пример

[codepen](https://codepen.io/Endwall/pen/PoyVByG)

### Классы динамического радиуса границ

Различные значения радиуса границы (от 0.1rem до 5rem):

- `.dynamic:rounded-0.1`
- `.dynamic:rounded-0.2`
- `.dynamic:rounded-0.3`
- `.dynamic:rounded-0.4`
- `.dynamic:rounded-0.5`
- `.dynamic:rounded-0.6`
- `.dynamic:rounded-0.7`
- `.dynamic:rounded-0.8`
- `.dynamic:rounded-0.9`
- `.dynamic:rounded-1`
- `.dynamic:rounded-1.5`
- `.dynamic:rounded-2`
- `.dynamic:rounded-2.5`
- `.dynamic:rounded-3`
- `.dynamic:rounded-3.5`
- `.dynamic:rounded-4`
- `.dynamic:rounded-4.5`
- `.dynamic:rounded-5`

### Компоненты подсказок

Элементы подсказок в различных позициях:

- `[data-title="example"]`
- `[data/title-bottom="example"]`
- `[data-title-top="example"]`
- `[data-title-left="example"]`
- `[data-title-right="example"]`

#### Пример

[codepen](https://codepen.io/Endwall/pen/GRwVgqj)

### Бейдж уведомления

- `.notification-badge`

#### Пример

[codepen](https://codepen.io/Endwall/ZEVKqvR)

### Стили списков

#### Горизонтальные и вертикальные стили списков

- `.ul-li-x`
- `.ul-li-y`
- `.ul-li-x-list`
- `.ul-li-y-list`

#### Прокручиваемые (скролл) стили списков

- `.ul-li-x-scroll`
- `.ul-li-x-scroll-hide`
- `.ul-li-y-scroll`
- `.ul/li-y-scroll-hide`

#### Стили списков с разделительными линиями

- `.ul-li-x-line`
- `.ul-li-x-line-a`
- `.ul-li-y-line`
- `.ul-li-y-line-a`

#### Пример

[codepen](https://codepen.io/Endwall/pen/qBJQood)

### Модели тега HR

- `.hr-m-1` — Горизонтальная линия с градиентным фоном

#### Пример

[codepen](https://codepen.io/Endwall/pen/poQMvPK)

### Стили кнопок

- `.btn` — Базовый стиль кнопки

### Модели чекбоксов

- `.input-checkbox-m-1`
- `.input-checkbox-m-2`
- `.input-checkbox-m-3` — Чекбокс с символом галочки
- `.input-checkbox-m-4` — Чекбокс с иконкой Font Awesome
- `.input-checkbox-m-5`
- `.input-checkbox-m-6`

#### Пример

[codepen](https://codepen.io/Endwall/details/dyQeJbp)

### Модели радиокнопок

- `.input-radio-m-1`
- `.input-radio-m-2`
- `.input-radio-m-3`
- `.input-radio-m-4`

#### Пример

[[codepen](https://codepen.io/Endwall/pen/dygQMva)

### Компоненты ввода

#### Поля ввода текста и пароля

- `.input-text-m-1`

#### Пример

[codepen](https://codepen.io/Endwall/pen/zYmmged)

- `.input-password-m-1`

#### Пример

[codepen](https://codepen.io/Endwall/pen/)

#### Компоненты числового ввода

- `.input-number-m-1`
- `.input-number-m-2`
- `.input-number-m-3`
- `.input-number-m-4`

#### Пример

[codepen](https://codepen.io/Endwall/pen/)

#### Компонент выпадающего списка

- `.input-sellect-m-1`

#### Пример

[codepen](https://codepen.io/Endwall/pen/poQXmGg)

#### Компонент слайдера диапазона

- `.input-range-m-1`

#### Пример

[codepen](https://codepen.io/Endwall/pen/LYMpzda)

### Ввод файлов

- `.input-file-m-1`, `input-file-m-1-preview` — Ввод файла с предварительным просмотром

#### Пример

[codepen](https://codepen.io/Endwall/pen/RNbNvrB)

### Модели групп полей

Компоненты групп полей в различных стилях:

- `.fieldset-m-1`
- `.fieldset-m-2`

#### Пример

[codepen](https://codepen.io/Endwall/pen/poQMvjL)

### Модели деталей

- `.details-m-1` — Сворачиваемый компонент деталей

#### Пример

[codepen](https://codepen.io/Endwall/pen/rNQJRBP)

### Модели текстовых облаков

- `.chat-bubble-l-m-1` — Левое облако чата
- `.chat-bubble-r-m-1` — Правое облако чата

#### Пример

[codepen](https://codepen.io/Endwall/pen/qBJLaLX)

### Модели OR (Разделитель "ИЛИ")

- `.or-m-1` — Компонент разделителя OR

#### Пример

[codepen](https://codepen.io/Endwall/pen/poxMvog)

### Модели дорожной карты

- `.roadmap-m-1`, `.unlimited:roadmap-m-1`
- `.roadmap-m-2`, `.roadmap-m-2-icon`, `.unlimited:roadmap-m-2`, `.unlimited:roadmap-m-2-icon`

#### Пример

[codepen](https://codepen.io/Endwall/pen/GRYPexq)

### Различные стили стрелок для навигации

#### Верно

- `.arrow-r-m-1`
- `.arrow-r-m-2`
- `.arrow-r-m-3`
- `.arrow-r-m-4`
- `.arrow-r-m-5`
- `.arrow-r-m-6`

#### левый

- `.arrow-l-m-1`
- `.arrow-l-m-2`
- `.arrow-l-m-3`
- `.arrow-l-m-4`
- `.arrow-l-m-5`
- `.arrow-l-m-6`

#### Динамические стили стрелок для навигации

- `.dynamic:arrow-l-m-1`, `.active`
- `.dynamic:arrow-r-m-1`, `.active`
- `.dynamic:arrow-l-m-2`, `.active`
- `.dynamic:arrow-r-m-2`, `.active`
- `.dynamic:arrow-l-m-3`, `.active`
- `.dynamic:arrow-r-m-3`, `.active`
- `.dynamic:arrow-l-m-4`, `.active`
- `.dynamic:arrow-r-m-4`, `.active`
- `.dynamic:arrow-l-m-5`, `.active`
- `.dynamic:arrow-r-m-5`, `.active`
- `.dynamic:arrow-l-m-6`, `.active`
- `.dynamic:arrow-r-m-6`, `.active`

### Модели выпадающих меню

- `.dropdown-m-1`
- `.dropdown-m-1-btn`
- `.dropdown-m-2`
- `.dropdown-m-2-sub`
- `.dropdown-m-3`
- `.dropdown-m-3-hideable`, `dropdown-m-3-btn`, `visible`, `.dropdown-m-3-title`, `.dropdown-m-3-min`, `.dropdown-m-3-max`
- `.dropdown-m-3-hover`, `.dropdown-m-3-min`, `.dropdown-m-3-max`

#### Пример

[codepen](https://codepen.io/Endwall/pen/abPJYKp)

### Модель входа

- `.login-m-1`

#### Пример

[codepen](https://codেরpen.io/Endwall/pen/yLroeey)

### Модели списков контента

#### 1 Колонна

- `.content-list-col-1`

#### 2 Колонны

- `.content-list-col-2`
- `.content-list-col-2-mobil`
- `.content-list-col-2-tablet`
- `.content-list-col-2-tablet-pc`

#### 3 Колонны

- `.content-list-col-3`
- `.content-list-col-3-tablet`
- `.content-list-col-3-tablet-pc`

#### 4 Колонны

- `.content-list-col-4`
- `.content-list-col-4-tablet`
- `.content-list-col-4-tablet-pc`

#### 5 Колонн

- `.content-list-col-5`
- `.content-list-col-5-tablet-pc`
- `.content-list-col-5-pc`

### Динамические списки

#### 2, 3, 4 колонки

- `.dynamic:content-list-col`
- `.dynamic:content-list-col-mobil`
- `.dynamic:content-list-col-tablet`
- `.dynamic:content-list-col-tablet-pc`
- `.dynamic:content-list-col-pc`

#### Пример

[codepen](https://codepen.io/Endwall/pen/YzRJgmB)

# Счетчик элементов

- `.item-count`
- `.item-count`, `.item` — Элементы для подсчета
- `.item-count-result`

#### Пример

[codepen](https://codepen.io/Endwall/pen/dyQeJbp)

# Ванильные компоненты

## Модели контента

#### Пример

[codepen](https://codepen.io/Endwall/pen/YzRrjzY)

## Изображение стр.

#### Пример

[codepen](https://codepen.io/Endwall/pen/MWPzZJg)

## Пост-модели

#### Пример

[codepen](https://codepen.io/Endwall/pen/vYVwNGr)

## Использование

Чтобы использовать компоненты bClass в своем проекте:

1. Добавьте CSS файл в ваш HTML:

   ```html
   <link rel="stylesheet" href="bClass-components.css" />
   ```

2. Примените классы компонентов к вашим HTML элементам:

   ```html
   <div class="btn">Нажмите</div>
   <input type="checkbox" class="input-checkbox-m-1" />
   ```

3. Для динамических классов используйте формат: `dynamic:class-name`.

## Кастомизация

bClass использует CSS-переменные для темизации:

- `--plainBg` — Простой цвет фона
- `--contentBg` — Цвет фона контента
- `--contentBgPrimary` — Основной цвет фона контента
- `--contentBgSecondary` — Вторичный цвет фона контента
- `--contentTextPrimary` — Основной цвет текста
- `--contentTextSecondary` — Вторичный цвет текста
- `--headerBg` — Цвет фона заголовка

## Лицензия

> Распространяется по лицензии Bik Public License 2.0. Дополнительную информацию см. в файле [LICENSE](./../../../LICENSE).
