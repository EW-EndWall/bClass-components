# bClass components

`bClass components` ist eine CSS-Bibliothek, die gebrauchsfertige UI-Komponenten und Stile für die Webentwicklung bereitstellt. Diese Dokumentation erläutert alle vorhandenen Komponenten und deren Anwendungsmethoden.

## Anforderungen

Es wird empfohlen, `bClass theme css` und `bClass theme js` zusammen mit dieser Bibliothek zu verwenden.

## Basiskomponenten

### Seiten-Ladebildschirm

- `#page-loader`

### Lade-Modelle

- `.page-loader-m-1` - Animierter Seiten-Lader
- `.loader-m-1` - Rotierender und animierter Lader

#### Beispiel

```html
<div id="page-loader" class="page-loader-m-1">
  <img src="./loader/1.png" alt="page-loader" />
  <img src="./loader/2.png" alt="page-loader" />
</div>
```

#### Beispiel

```html
<div class="loader-m-1 w-rem-5 h-rem-5"></div>
```

### Cookie-Zustimmung

- `#cookies-confirmation`
- `#cookies-confirmation-close`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/PoyxgXX)

### Modell-Linien-Stile

- `.model-line` - Basis-Linienmodell
- `.solid .model-line` - Massiver Stil (Solid)
- `.edge .model-line` - Randstil (Edge)
- `.edged .model-line` - Umrandeter Stil (Edged)
- `.triangle-experimental-model-1 .model-line` - Dreiecksmodell experimentell 1
- `.triangle-experimental-model-2 .model-line` - Dreiecksmodell experimentell 2
- `.triangle-experimental-model-3 .model-line` - Dreiecksmodell experimentell 3

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/PoyVByG)

### Dynamische Eckradius-Klassen

Verschiedene Eckradius-Werte (von 0,1rem bis 5rem):

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

### Tooltip-Komponenten

Tooltip-Elemente an verschiedenen Positionen:

- `[data-title="example"]`
- `[data-title-bottom="example"]`
- `[data-title-top="example"]`
- `[data-title-left="example"]`
- `[data-title-right="example"]`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/GRwVgqj)

### Benachrichtigungs-Badge

- `.notification-badge`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/ZEVKqvR)

### Listen-Stile

#### Horizontale und vertikale Listenstile

- `.ul-li-x`
- `.ul-li-y`
- `.ul-li-x-list`
- `.ul-li-y-list`

#### Scrollbare Listenstile

- `.ul-li-x-scroll`
- `.ul-li-x-scroll-hide`
- `.ul-li-y-scroll`
- `.ul-li-y-scroll-hide`

#### Linien-getrennte Listenstile

- `.ul-li-x-line`
- `.ul-li-x-line-a`
- `.ul-li-y-line`
- `.ul-li-y-line-a`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/qBJQood)

### HR-Tag-Modelle

- `.hr-m-1` - Horizontale Linie mit Gradient-Hintergrund

#### Beispiel

[codepen](https://cododen.io/Endwall/pen/poQMvPK)

### Button-Stile

- `.btn` - Basis-Button-Stil

### Checkbox-Modelle

- `.input-checkbox-m-1`
- `.input-checkbox-m-2`
- `.input-checkbox-m-3` - Checkbox mit Häkchen-Zeichen
- `.input-checkbox-m-4` - Checkbox mit Font Awesome Icon
- `.input-checkbox-m-5`
- `.input-checkbox-m-6`

#### Beispiel

[codepen](https://codepen.io/Endwall/details/dyQeJbp)

### Radio-Button-Modelle

- `.input-radio-m-1`
- `.input-radio-m-2`
- `.input-radio-m-3`
- `.input-radio-m-4`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/dygQMva)

### Eingabekomponenten

#### Text- und Passwort-Eingabefelder

- `.input-text-m-1`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/zYmmged)

- `.input-password-m-1`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/)

#### Zahleneingabe-Komponenten

- `.input-number-m-1`
- `.input-number-m-2`
- `.input-number-m-3`
- `.input-number-m-4`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/)

#### Dropdown-Auswahlkomponente

- `.input-sellect-m-1`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/poQXmGg)

#### Range-Slider-Komponente

- `.input-range-m-1`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/LYMpzda)

### Datei-Eingabe

- `.input-file-m-1`, `input-file-m-1-preview` - Datei-Eingabe mit Vorschau

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/RNbNvrB)

### Fieldset-Modelle

Fieldset-Komponenten in verschiedenen Stilen:

- `.fieldset-m-1`
- `.fieldset-m-2`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/poQMvjL)

### Details-Modelle

- `.details-m-1` - Einklappbares Details-Element

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/rNQJRBP)

### Chat-Bubble-Modelle

- `.chat-bubble-l-m-1` - Linke Chat-Blase
- `.chat-bubble-r-m-1` - Rechte Chat-Blase

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/qBJLaLX)

### OR-Modelle

- `.or-m-1` - OR-Trennzeichen-Komponente

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/poxMvog)

### Roadmap-Modelle

- `.roadmap-m-1`, `.unlimited:roadmap-m-1`
- `.roadmap-m-2`, `.roadmap-m-2-icon`, `.unlimited:roadmap-m-2`, `.unlimited:roadmap-m-2-icon`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/GRYPexq)

### Verschiedene Pfeilstile für die Navigation

#### Rechts

- `.arrow-r-m-1`
- `.arrow-r-m-2`
- `.arrow-r-m-3`
- `.arrow-r-m-4`
- `.arrow-r-m-5`
- `.arrow-r-m-6`

#### Links

- `.arrow-l-m-1`
- `.arrow-l-m-2`
- `.arrow-l-m-3`
- `.arrow-l-m-4`
- `.arrow-l-m-5`
- `.arrow-l-m-6`

#### Dynamische Pfeilstile für die Navigation

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

### Dropdown-Modelle

- `.dropdown-m-1`
- `.dropdown-m-1-btn`
- `.dropdown-m-2`
- `.dropdown-m-2-sub`
- `.dropdown-m-3`
- `.dropdown-m-3-hideable`, `dropdown-m-3-btn` , `visible` , `.dropdown-m-3-title`, `.dropdown-m-3-min`, `.dropdown-m-3-max`
- `.dropdown-m-3-hover` , `.dropdown-m-3-min` , `.dropdownm-3-max`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/abPJYKp)

### Login-Modell

- `.login-m-1`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/yLroeey)

### Content-Listen-Modelle

#### 1

- `.content-list-col-1`

#### 2

- `.content-list-col-2`
- `.content-list-col-2-mobil`
- `.content-list-col-2-tablet`
- `.content-list-col-2-tablet-pc`

#### 3

- `.content-list-col-3`
- `.content-list-col-3-tablet`
- `.content-list-col-3-tablet-pc`

#### 4

- `.content-list-col-4`
- `.content-list-col-4-tablet`
- `.content-list-col-4-tablet-pc`

#### 5

- `.content-list-col-5`
- `.content-list-col-5-tablet-pc`
- `.content-list-col-5-pc`

### Dynamische Liste

#### 2, 3, 4

- `.dynamic:content-list-col`
- `.dynamic:content-list-col-mobil`
- `.dynamic:content-list-col-tablet`
- `.dynamic:content-list-col-tablet-pc`
- `.dynamic:content-list-col-pc`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/YzRJgmB)

# Element-Anzahl

- `.item-count`
- `.item-count`, `.item` - Zu zählende Elemente
- `.item-count-result`

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/dyQeJbp)

# Vanilla-Komponenten

## Inhaltsmodelle

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/YzRrjzY)

## Img pp

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/MWPzZJg)

## Beitragsmodelle

#### Beispiel

[codepen](https://codepen.io/Endwall/pen/vYVwNGr)

## Verwendung

Um bClass-Komponenten in Ihrem Projekt zu verwenden:

1. Fügen Sie die CSS-Datei zu Ihrem HTML hinzu:

   ```html
   <link rel="stylesheet" href="bClass-components.css" />
   ```

2. Wenden Sie die Komponenten-Klassen auf Ihre HTML-Elemente an:

   ```html
   <div class="btn">Klicken</div>
   <input type="checkbox" class="input-checkbox-m-1" />
   ```

3. Für dynamische Klassen: Verwenden Sie das Format `dynamic:class-name`.

## Anpassung (Customization)

bClass verwendet CSS-Variablen für das Theming:

- `--plainBg` - Einfarbiger Hintergrund
- `--contentBg` - Inhalts-Hintergrund
- `--contentBgPrimary` - Primärer Inhalts-Hintergrund
- `--contentBgSecondary` - Sekundärer Inhalts-Hintergrund
- `--contentTextPrimary` - Primäre Textfarbe
- `--contentTextSecondary` - Sekundäre Textfarbe
- `--headerBg` - Header-Hintergrundfarbe

## Lizenz

> Veröffentlicht unter der Bik Public License 2.0. Weitere Informationen finden Sie in der [LICENSE](./../../../LICENSE).
