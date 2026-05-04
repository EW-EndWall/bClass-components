# bClass components

`bClass components`, web geliştirme için hazır kullanımlık UI bileşenleri ve stiller sağlayan bir CSS kütüphanesidir. Bu dokümantasyon, mevcut tüm bileşenleri ve kullanım yöntemlerini açıklar.

## Gereksinimler

Bu kütüphane ile beraber `bClass theme css` ve `bClass theme js` kullanılması önerilir.

## Temel Bileşenler

### Sayfa Yükleyici Kaldırıma

- `#page-loader`

### Yükleyici Modelleri

- `.page-loader-m-1` - Animasyonlu sayfa yükleyici
- `.loader-m-1` - Döndürme ve animasyonlu yükleyici

#### örnek

```html
<div id="page-loader" class="page-loader-m-1">
  <img src="./loader/1.png" alt="page-loader" />
  <img src="./loader/2.png" alt="page-loader" />
</div>
```

#### örnek

```html
<div class="loader-m-1 w-rem-5 h-rem-5"></div>
```

### Çerez Onayı

- `#cookies-confirmation`
- `#cookies-confirmation-close`

#### örnek

[codepen](https://codepen.io/Endwall/pen/PoyxgXX)

### Model Hat Stilleri

- `.model-line` - Temel hat modeli
- `.solid .model-line` - Katı stil
- `.edge .model-line` - Kenarlık stil
- `.edged .model-line` - Kenarlıklı stil
- `.triangle-experimental-model-1 .model-line` - Üçgen deneysel model 1
- `.triangle-experimental-model-2 .model-line` - Üçgen deneysel model 2
- `.triangle-experimental-model-3 .model-line` - Üçgen deneysel model 3

#### örnek

[codepen](https://codepen.io/Endwall/pen/PoyVByG)

### Dinamik Sınır Yarıçapı Sınıfları

Farklı sınır yarıçapı değerleri (0.1rem'den 5rem'e kadar)

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

### İpucu Bileşenleri

Farklı konumlarda ipucu öğeleri

- `[data-title="example"]`
- `[data-title-bottom="example"]`
- `[data-title-top="example"]`
- `[data-title-left="example"]`
- `[data-title-right="example"]`

#### örnek

[codepen](https://codepen.io/Endwall/pen/GRwVgqj)

### Bildirim Rozeti

- `.notification-badge`

#### örnek

[codepen](https://codepen.io/Endwall/pen/ZEVKqvR)

### Liste Stilleri

#### Yatay ve dikey liste stilleri

- `.ul-li-x`
- `.ul-li-y`
- `.ul-li-x-list`
- `.ul-li-y-list`

#### Kaydırılabilir liste stilleri

- `.ul-li-x-scroll`
- `.ul-li-x-scroll-hide`
- `.ul-li-y-scroll`
- `.ul-li-y-scroll-hide`

#### Hat ayrılmış liste stilleri

- `.ul-li-x-line`
- `.ul-li-x-line-a`
- `.ul-li-y-line`
- `.ul-li-y-line-a`

#### örnek

[codepen](https://codepen.io/Endwall/pen/qBJQood)

### HR Etiketi Modelleri

- `.hr-m-1` - Gradyan arka planlı yatay çizgi

#### örnek

[codepen](https://codepen.io/Endwall/pen/poQMvPK)

### Düğme Stilleri

- `.btn` - Temel düğme stili

### Onay Kutusu Modelleri

- `.input-checkbox-m-1`
- `.input-checkbox-m-2`
- `.input-checkbox-m-3` - Kontrol işareti karakteri ile onay kutusu
- `.input-checkbox-m-4` - Font Awesome simgesi ile onay kutusu
- `.input-checkbox-m-5`
- `.input-checkbox-m-6`

#### örnek

[codepen](https://codepen.io/Endwall/details/dyQeJbp)

### Radyo Düğmesi Modelleri

- `.input-radio-m-1`
- `.input-radio-m-2`
- `.input-radio-m-3`
- `.input-radio-m-4`

#### örnek

[codepen](https://codepen.io/Endwall/pen/dygQMva)

### Giriş Bileşenleri

#### Metin ve şifre giriş alanları

- `.input-text-m-1`

#### örnek

[codepen](https://codepen.io/Endwall/pen/zYmmged)

- `.input-password-m-1`

#### örnek

[codepen](https://codepen.io/Endwall/pen/)

#### Sayı giriş bileşenleri

- `.input-number-m-1`
- `.input-number-m-2`
- `.input-number-m-3`
- `.input-number-m-4`

#### örnek

[codepen](https://codepen.io/Endwall/pen/)

#### Seçim açılır menüsü bileşeni

- `.input-sellect-m-1`

#### örnek

[codepen](https://codepen.io/Endwall/pen/poQXmGg)

#### Aralık kaydırıcı bileşeni

- `.input-range-m-1`

#### örnek

[codepen](https://codepen.io/Endwall/pen/LYMpzda)

### Dosya Girişi

- `.input-file-m-1`, `input-file-m-1-preview` - Önizleme ile dosya girişi

### örnek

[codepen](https://codepen.io/Endwall/pen/RNbNvrB)

### Alan Kümesi Modelleri

Farklı stillerde alan kümesi bileşenleri

- `.fieldset-m-1`
- `.fieldset-m-2`

#### örnek

[codepen](https://codepen.io/Endwall/pen/poQMvjL)

### Ayrıntı Modelleri

- `.details-m-1` - Daraltılabilir ayrıntı bileşeni

#### örnek

[codepen](https://codepen.io/Endwall/pen/rNQJRBP)

### Sohbet Balonu Modelleri

- `.chat-bubble-l-m-1` - Sol sohbet balonu
- `.chat-bubble-r-m-1` - Sağ sohbet balonu

#### örnek

[codepen](https://codepen.io/Endwall/pen/qBJLaLX)

### OR Modelleri

- `.or-m-1` - OR ayırıcı bileşeni

#### örnek

[codepen](https://codepen.io/Endwall/pen/poxMvog)

### Yol Haritası Modelleri

- `.roadmap-m-1`, `.unlimited:roadmap-m-1`
- `.roadmap-m-2`, `.roadmap-m-2-icon`, `.unlimited:roadmap-m-2`, `.unlimited:roadmap-m-2-icon`

#### örnek

[codepen](https://codepen.io/Endwall/pen/GRYPexq)

### Navigasyon için çeşitli ok stilleri

#### Sağ

- `.arrow-r-m-1`
- `.arrow-r-m-2`
- `.arrow-r-m-3`
- `.arrow-r-m-4`
- `.arrow-r-m-5`
- `.arrow-r-m-6`

#### Sol

- `.arrow-l-m-1`
- `.arrow-l-m-2`
- `.arrow-l-m-3`
- `.arrow-l-m-4`
- `.arrow-l-m-5`
- `.arrow-l-m-6`

#### Navigasyon için dinamik çeşitli ok stilleri

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

### Açılır Menü Modelleri

- `.dropdown-m-1`
- `.dropdown-m-1-btn`
- `.dropdown-m-2`
- `.dropdown-m-2-sub`
- `.dropdown-m-3`
- `.dropdown-m-3-hideable`, `dropdown-m-3-btn` , `visible` , `.dropdown-m-3-title`, `.dropdown-m-3-min`, `.dropdown-m-3-max`
- `.dropdown-m-3-hover` , `.dropdown-m-3-min` , `.dropdownm-3-max`

#### örnek

[codepen](https://codepen.io/Endwall/pen/abPJYKp)

### Giriş Modeli

- `.login-m-1`

#### örnek

[codepen](https://codepen.io/Endwall/pen/yLroeey)

### İçerik Liste Modelleri

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

### dinamic list

#### 2 3 4

- `.dynamic:content-list-col`
- `.dynamic:content-list-col-mobil`
- `.dynamic:content-list-col-tablet`
- `.dynamic:content-list-col-tablet-pc`
- `.dynamic:content-list-col-pc`

### örnek

[codepen](https://codepen.io/Endwall/pen/YzRJgmB)

# İtem sayısı

- `.item-count`
- `.item-count`, `.item` - Sayılacak itemler
- `.item-count-result`

## örnek

[codepen](https://codepen.io/Endwall/pen/dyQeJbp)

# Vanilla Components

## Content models

#### example

[codepen](https://codepen.io/Endwall/pen/YzRrjzY)

## Img pp

#### example

[codepen](https://codepen.io/Endwall/pen/MWPzZJg)

## Post models

#### exapmle

[codepen](https://codepen.io/Endwall/pen/vYVwNGr)

## Kullanım

bClass bileşenlerini projenizde kullanmak için:

1. CSS dosyasını HTML'inize ekleyin:

   ```html
   <link rel="stylesheet" href="bClass-components.css" />
   ```

2. HTML öğelerinize bileşen sınıflarını uygulayın:

   ```html
   <div class="btn">Tıkla</div>
   <input type="checkbox" class="input-checkbox-m-1" />
   ```

3. Dinamik sınıflar için: `dynamic:class-name` formatını kullanın.

## Özelleştirme

bClass, temalama için CSS değişkenlerini kullanır:

- `--plainBg` - Düz arka plan rengi
- `--contentBg` - İçerik arka plan rengi
- `--contentBgPrimary` - Birinci içerik arka planı
- `--contentBgSecondary` - İkinci içerik arka planı
- `--contentTextPrimary` - Birinci metin rengi
- `--contentTextSecondary` - İkinci metin rengi
- `--headerBg` - Başlık arka plan rengi

## Lisans

> Bik Public License 2.0 Lisansı kapsamında dağıtılmaktadır. Daha fazla bilgi için [LICENSE](./../../../LICENSE) dosyasına göz atın.
