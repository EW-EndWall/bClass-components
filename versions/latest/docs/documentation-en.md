# bClass Components Documentation

bClass is a CSS library that provides ready-to-use UI components and styles for web development. This documentation explains all existing components and their usage methods.

## Requirements

It is recommended to use `bClass theme css` and `bClass theme js` along with this library.

## Basic Components

### Page Loader Removal

- `#page-loader`

### Loader Models

- `.page-loader-m-1` - Animated page loader
- `.loader-m-1` - Rotating and animated loader

#### Example

```html
<div id="page-loader" class="page-loader-m-1">
  <img src="./loader/1.png" alt="page-loader" />
  <img src="./loader/2.png" alt="page-loader" />
</div>
```

#### Example

```html
<div class="loader-m-1 w-rem-5 h-rem-5"></div>
```

### Cookies Confirmation

- `#cookies-confirmation`
- `#cookies-confirmation-close`

#### Example

[codepen](https://codepen.io/Endwall/pen/PoyxgXX)

### Model Line Styles

- `.model-line` - Basic line model
- `.solid .model-line` - Solid style
- `.edge .model/ine` - Edge style
- `.edged .model-line` - Bordered style
- `.triangle-experimental-model-1 .model-line` - Triangle experimental model 1
- `.triangle-experimental-model-2 .model-line` - Triangle experimental model 2
- `.triangle-experimental-model-3 .model-line` - Triangle experimental model 3

#### Example

[codepen](https://codepen.io/Endwall/pen/PoyVByG)

### Dynamic Border Radius Classes

Various border radius values (from 0.1rem to 5rem):

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

### Tooltip Components

Tooltip elements in different positions:

- `[data-title="example"]`
- `[data-title-bottom="example"]`
- `[data-title-top="example"]`
- `[data-title-left="example"]`
- `[data-title-right="example"]`

#### Example

[codepen](https://codepen.io/Endwall/pen/GRwVgqj)

### Notification Badge

- `.notification-badge`

#### Example

[codepen](https://codepen.io/Endwall/pen/ZEVKqvR)

### List Styles

#### Horizontal and Vertical List Styles

- `.ul-li-x`
- `.ul-li-y`
- `.ul-li-x-list`
- `.ul-li-y-list`

#### Scrollable List Styles

- `.ul-li-x-scroll`
- `.ul-li-x-scroll-hide`
- `.ul-li-y-scroll`
- `.ul-li-y-scroll-hide`

#### Line-Separated List Styles

- `.ul-li-x-line`
- `.ul-li-x-line-a`
- `.lin-li-y-line`
- `.ul-li-y-line-a`

#### Example

[codepen](https://codepen.io/Endwall/pen/qBJQood)

### HR Tag Models

- `.hr-m-1` - Horizontal line with gradient background

#### Example

[codepen](https://codepen.io/Endwall/pen/poQMvPK)

### Button Styles

- `.btn` - Basic button style

### Checkbox Models

- `.input-checkbox-m-1`
- `.input-checkbox-m-2`
- `.input-checkbox-m-3` - Checkbox with checkmark character
- `.input-checkbox-m-4` - Checkbox with Font Awesome icon
- `.input-checkbox-m-5`
- `.input-checkbox-m-6`

#### Example

[codepen](https://codepen.io/Endwall/details/dyQeJbp)

### Radio Button Models

- `.input-radio-m-1`
- `.input-radio-m-2`
- `.input-radio-m-3`
- `.input-radio-m-4`

#### Example

[codepen](https://codepen.io/Endwall/pen/dygQMva)

### Input Components

#### Text and Password Input Fields

- `.input-text-m-1`

#### Example

[codepen](https://codepen.io/Endwall/pen/zYmmged)

- `.input-password-m-1`

#### Example

[codepen](https://codepen.io/Endwall/pen/)

#### Number Input Components

- `.input-number-m-1`
- `.input-number-m-2`
- `.input-number-m-3`
- `.input-number-m-4`

#### Example

[codepen](https://codepen.io/Endwall/pen/)

#### Select Dropdown Component

- `.input-sellect-m-1`

#### Example

[codepen](https://codepen.io/Endwall/pen/poQXmGg)

#### Range Slider Component

- `.input-range-m-1`

#### Example

[codepen](https://codepen.io/Endwall/pen/LYMpzda)

### File Input

- `.input-file-m-1`, `input-file-m-1-preview` - File input with preview

#### Example

[codepen](https://codepen.io/Endwall/pen/RNbNvrB)

### Fieldset Models

Various fieldset component styles:

- `.fieldset-m-1`
- `.fieldset-m-2`

#### Example

[codepen](https://codepen.io/Endwall/pen/poQMvjL)

### Details Models

- `.details-m-1` - Collapsible details component

#### Example

[codepen](https://codepen.io/Endwall/pen/rNQJRBP)

### Chat Bubble Models

- `.chat-bubble-l-m-1` - Left chat bubble
- `.chat-bubble-r-m-1` - Right chat bubble

#### Example

[codepen](https://codepen.io/Endwall/pen/qBJLaLX)

### OR Models

- `.or-m-1` - OR separator component

#### Example

[codepen](https://codepen.io/Endwall/pen/poxMvog)

### Roadmap Models

- `.roadmap-m-1`, `.unlimited:roadmap-m-1`
- `.roadmap-m-2`, `.roadmap-m-2-icon`, `.unlimited:roadmap-m-2`, `.unlimited:roadmap-m-2-icon`

#### Example

[codepen](https://codepen.io/Endwall/pen/GRYPexq)

### Various arrow styles for navigation

#### Right

- `.arrow-r-m-1`
- `.arrow-r-m-2`
- `.arrow-r-m-3`
- `.arrow-r-m-4`
- `.arrow-r-m-5`
- `.arrow-r-m-6`

#### Left

- `.arrow-l-m-1`
- `.arrow-l-m-2`
- `.arrow-l-m-3`
- `.arrow-l-m-4`
- `.arrow-l-m-5`
- `.arrow-l-m-6`

#### Dynamic various arrow styles for navigation

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

### Dropdown Models

- `.dropdown-m-1`
- `.dropdown-m-1-btn`
- `.dropdown-m-2`
- `.dropdown-m-2-sub`
- `.dropdown-m-3`
- `.dropdown-m-3-hideable`, `dropdown-m-3-btn`, `visible`, `.dropdown-m-3-title`, `.dropdown-m-3-min`, `.dropdown-m-3-max`
- `.dropdown-m-3-hover`, `.dropdown-m-3-min`, `.dropdownm-3-max`

#### Example

[codepen](https://codepen.io/Endwall/pen/abPJYKp)

### Login Model

- `.login-m-1`

#### Example

[codepen](https://cododen.io/Endwall/pen/yLroeey)

### Content List Models

#### 1 Column

- `.content-list-col-1`

#### 2 Columns

- `.content-list-col-2`
- `.content-list-col-2-mobile`
- `.content-list-col-2-tablet`
- `.content-list-col-2-tablet-pc`

#### 3 Columns

- `.content-list-col-3`
- `.content-list-col-3-tablet`
- `.content-list-col-3-tablet-pc`

#### 4 Columns

- `.content-list-col-4`
- `.content-list-col-4-tablet`
- `.content-list-col-4-tablet-pc`

#### 5 Columns

- `.content-list-col-5`
- `.content-list-col-5-tablet-pc`
- `.content-list-col-5-pc`

### Dynamic List

#### 2, 3, 4 Column Variants

- `.dynamic:content-list-col`
- `.dynamic:content-list-col-mobile`
- `.dynamic:content-list-col-tablet`
- `.dynamic:content-list-col-tablet-pc`
- `.dynamic:content-list-col-pc`

#### Example

[codepen](https://codepen.io/Endwall/pen/YzRJgmB)

# Item Count

- `.item-count`
- `.item-count`, `.item` - Items to be counted
- `.item-count-result`

#### Example

[codepen](https://codepen.io/Endwall/pen/dyQeJbp)

# Vanilla Components

## Content models

#### Example

[codepen](https://codepen.io/Endwall/pen/YzRrjzY)

## Img pp

#### Example

[codepen](https://codepen.io/Endwall/pen/MWPzZJg)

## Post models

#### Example

[codepen](https://codepen.io/Endwall/pen/vYVwNGr)

## Usage

To use bClass components in your project:

1. Add the CSS file to your HTML:

   ```html
   <link rel="stylesheet" href="bClass-components.css" />
   ```

2. Apply component classes to your HTML elements:

   ```html
   <div class="btn">Click Me</div>
   <input type="checkbox" class="input-checkbox-m-1" />
   ```

3. For dynamic classes, use the `dynamic:class-name` format.

## Customization

bClass uses CSS variables for theming:

- `--plainBg` - Plain background color
- `--contentBg` - Content background color
- `--contentBgPrimary` - Primary content background
- `--contentBgSecondary` - Secondary content background
- `--contentTextPrimary` - Primary text color
- `--contentTextSecondary` - Secondary text color
- `--headerBg` - Header background color
