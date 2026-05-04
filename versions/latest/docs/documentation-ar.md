# bClass components

`bClass components` هي مكتبة CSS توفر مكونات واجهة مستخدم (UI) وأنماط جاهزة للاستخدام في تطوير الويب. يوضح هذا التوثيق جميع المكونات المتاğiحة وطرق استخدامها.

## المتطلبات

يُوصى باستخدام `bClass theme css` و `bClass theme js` مع هذه المكتبة.

## المكونات الأساسية

### شاشة تحميل الصفحة

- `#page-loader`

### نماذج التحميل

- `.page-loader-m-1` - شاشة تحميل صفحة متحركة
- `.loader-m-1` - شاشة تحميل دوارة ومتحركة

#### مثال

```html
<div id="page-loader" class="page-loader-m-1">
  <img src="./loader/1.png" alt="page-loader" />
  <img src="./loader/2.png" alt="page-loader" />
</div>
```

#### مثال

```html
<div class="loader-m-1 w-rem-5 h-rem-5"></div>
```

### تأكيد ملفات تعريف الارتبا

- `#cookies-confirmation`
- `#cookies-confirmation-close`

#### مثال

[codepen](https://codepen.io/Endwall/pen/PoyxgXX)

### أنماط خطوط النماذ

- `.model-line` - نموذج الخط الأساسي
- `.solid .model-line` - نمط صلب (Solid)
- `.edge .model/ine` - نمط الحواف (Edge)
- `.edged .model-line` - نمط الإطار (Edged)
- `.triangle-experimental-model-1 .model-line` - نموذج مثلث تجريبي 1
- `.triangle-experimental-model-2 .model-line` - نموذج مثلث تجريبي 2
- `.triangle-experimental-model-3 .model-line` - نموذج مثلث تجربي 3

#### مثال

[codepen](https://codepen.io/Endwall/pen/PoyVByG)

### فئات نصف قطر الحدود الديناميكية

قيم مختلفة لنصف قطر الحدود (من 0.1rem إلى 5rem)

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

### مكونات التلميحات

عناصر تلميح في مواضع مختلفة

- `[data-title="example"]`
- `[data</strong>data-title-bottom="example"]`
- `[data-title-top="example"]`
- `[data-title-left="example"]`
- `[data-title-right="example"]`

#### مثال

[codepen](https://codepen.io/Endwall/pen/GRwVgqj)

### شارة الإشعارات

- `.notification-badge`

#### مثال

[codepen](https://codepen.io/Endwall/pen/ZEVKqvR)

### أنماط القوائم

#### أنماط القوائم الأفقية والعمودية

- `.ul-li-x`
- `.ul-li-y`
- `.ul-li-x-list`
- `.ul-li-y-list`

#### أنماط القوائم القابلة للتمرير

- `.ul-li-x-scroll`
- `.ul-li-x-scroll-hide`
- `.ul-li-y-scroll`
- `.ul-li-y-scroll-hide`

#### أنماط القوائم المفصولة بخطوط

- `.ul-li-x-line`
- `.ulli-x-line-a`
- `.ul-li-y-line`
- `.ul-li-y-line-a`

#### مثال

[codepen](https://codepen.io/Endwall/pen/qBJQood)

### نماذج وسم

- `.hr-m-1` - خط أفقي بخلفية متدرجة (Gradient)

#### مثال

[codepen](https://codepen.io/Endwall/pen/poQMvPK)

### أنماط الأزرار

- `.btn` - نمط الزر الأساسي

### نماذج مربعات الاختيار

- `.input-checkbox-m-1`
- `.input-checkbox-m-2`
- `.input-checkbox-m-3` - مربع اختيار مع رمز علامة الصح
- `.input-checkbox-m-4` - مربع اختيار مع أيقونة Font Awesome
- `.input-schema-m-5`
- `.input-checkbox-m-6`

#### مثال

[codepen](https://codepen.io/Endwall/details/dyQeJbp)

### نماذج أزرار الراديو

- `.input-radio-m-1`
- `.input-radio-m-2`
- `.input-radio-m-3`
- `.input-radio-m-4`

#### مثال

[codepen](https://codepen.io/Endwall/pen/dygQMva)

### مكونات الإدخال

#### حقول إدخال النص وكلمة المرور

- `.input-text-m-1`

#### مثال

[codepen](https://codepen.io/Endwall/pen/zYmmged)

- `.input-password-m-1`

#### مثال

[codepen](https://codepen.io/Endwall/pen/)

#### مكونات إدخال الأرقام

- `.input-number-m-1`
- `.input-number-m-2`
- `.input-number-m-3`
- `.input-number-m-4`

#### مثال

[codepen](https://codepen.io/Endwall/pen/)

#### مكون القائمة المنسدلة للاختيار

- `.input-sellect-m-1`

#### مثال

[codেরpen](https://codepen.io/Endwall/pen/poQXmGg)

#### مكون شريط التمري

- `.input-range-m-1`

#### مثال

[codepen](https://codepen.io/Endwall/pen/LYMpzda)

### إدخال الملفات

- `.input-file-m-1`, `input-file-m-1-preview` - إدخال ملف مع معاينة

#### مثال

[codepen](https://codepen.io/Endwall/pen/RNbNvrB)

### نماذج مجموعات الحقول

مكونات مجموعات حقول بأنماط مختلفة

- `.fieldset-m-1`
- `.fieldset-m-2`

#### مثال

[codepen](https://codepen.io/Endwall/pen/poQMvjL)

### نماذج التفاصيل

- `.details-m-1` - مكون تفاصيل قابل للطي

#### مثال

[codepen](https://codepen.io/Endwall/pen/rNQJRBP)

### نماذج فقاعات الدردشة

- `.chat-bubble-l-m-1` - فقاعة دردشة يسار
- `.chat-bubble-r-m-1` - فقاعة دردشة يمين

#### مثال

[codepen](https://codepen.io/Endwall/pen/qBJLaLX)

### نماذج

- `.or-m-1` - مكون فاصل OR

#### مثال

[codepen](https://codেরpen.io/Endwall/pen/poxMvog)

### نماذج خارطة الطريق

- `.roadmap-m-1`, `.unlimited:roadmap-m-1`
- `.roadmap-m-2`, `.roadmap-m-2-icon`, `.unlimited:roadmap-m-2`, `.unlimited:roadmap-m-2-icon`

#### مثال

[codepen](https://codepen.io/Endwall/pen/GRYPexq)

### أنماط أسهم متنوعة للملاحة

#### يمين

- `.arrow-r-m-1`
- `.arrow-r-m-2`
- `.arrow-r-m-3`
- `.arrow-r-m-4`
- `.arrow-r-m-5`
- `.arrow-r-m-6`

#### غادر

- `.arrow-l-m-1`
- `.arrow-l-m-2`
- `.arrow-l-m-3`
- `.arrow-l-m-4`
- `.arrow-l-m-5`
- `.arrow-l-m-6`

#### أنماط أسهم ديناميكية متنوعة للملاحة

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

### نماذج القائمة المنسدلة

- `.dropdown-m-1`
- `.dropdown-m-1-btn`
- `.dropdown-m-2`
- `.dropdown-m-2-sub`
- `.dropdown-m-3`
- `.dropdown-m-3-hideable`, `dropdown-m-3-btn` , `visible` , `.dropdown-m-3-title`, `.dropdown-m-3-min`, `.dropdown-m-3-max`
- `.dropdown-m-3-hover` , `.dropdown-m-3-min` , `.dropdownm-3-max`

#### مثال

[codepen](https://codepen.io/Endwall/pen/abPJYKp)

### نموذج تسجيل الدخول

- `.login-m-1`

#### مثال

[codepen](https://codepen.io/Endwall/pen/yLroeey)

### نماذج قوائم المحتوى

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

### القائمة الديناميكية

#### 2 3 4

- `.dynamic:content-list-col`
- `.dynamic:content-list-col-mobil`
- `.dynamic:content-list-col-tablet`
- `.dynamic:content-list-col-tablet-pc`
- `.dynamic:content-list-col-pc`

#### مثال

[codepen](https://codepen.io/Endwall/pen/YzRJgmB)

# عدد العناصر

- `.item-count`
- `.item-count`, `.item` - العناصر المراد عدها
- `.item-count-result`

#### مثال

[codepen](https://codepen.io/Endwall/pen/dyQeJbp)

# مكونات Vanilla (Vanilla Components)

## نماذج المحتوى

#### مثال

[codepen](https://codepen.io/Endwall/pen/YzRrjzY)

## Img pp

#### مثال

[codepen](https://codepen.io/Endwall/pen/MWPzZJg)

## نماذج المنشورات

#### مثال

[codepen](https://codepen.io/Endwall/pen/vYVwNGr)

## الاستخدام

لاستخدام مكونات `bClass` في مشروعك:

1. أضف ملف CSS إلى ملف HTML الخاص بك:

   ```html
   <link rel="stylesheet" href="bClass-components.css" />
   ```

2. قم بتطبيق فئات المكونات على عناصر HTML الخاصة بك:

   ```html
   <div class="btn">اضغط هنا</div>
   <input type="checkbox" class="input-checkbox-m-1" />
   ```

3. للفئات الديناميكية، استخدم التنسيق التالي: `dynamic:class-name`

## التخصيص

تستخدم `bClass` متغيرات CSS للتحكم في المظهر (Theming):

- `--plainBg` - لون الخلفية السادة
- `--contentBg` - لون خلفية المحتوى
- `--contentBgPrimary` - خلفية المحتوى الأساسية
- `--contentBgSecondary` - خلفية المحتوى الثانوية
- `--contentTextPrimary` - لون النص الأساسي
- `--contentTextSecondary` - لون النص الثانوي
- `--headerBg` - لون خلفية الرأس (Header)

## الترخيص

> يتم التوزيع بموجب ترخيص Bik Public License 2.0. راجع ملف [LICENSE](./../../../LICENSE) لمزيد من المعلومات.
