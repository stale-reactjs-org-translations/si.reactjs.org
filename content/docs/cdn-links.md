---
id: cdn-links
title: CDN Links
permalink: docs/cdn-links.html
prev: create-a-new-react-app.html
next: release-channels.html
---

React සහ ReactDOM යන දෙවර්ගයම CDN මඟින් ලබා ගත හැකිය.

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

ඉහත සංස්කරණයන් සියල්ල development අවධිය සදහා වඩාත් සුදුසු වන අතර, production අවධිය සදහාම වෙන් වූ  ( minified and optimized )  සංස්කරණයන් පහත links හරහා ලබා ගත හැකියි.

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```

<<<<<<< HEAD
react හා react-dom හි ඔබට අවශ්‍ය සංස්කරණය ( version ) ලබා ගැනීමට අවශ්‍ය නම්, ඉහත අංක 16 වෙනුවට ඔබට අවශ්‍ය සංස්කරණය ලබා දෙන්න. 
=======
To load a specific version of `react` and `react-dom`, replace `17` with the version number.
>>>>>>> 014f4890dc30a3946c63f83b06883241ddc9bc75


### `crossorigin` ගුණාංගය (attribute) හි අවශ්‍යතාව කුමක් සදහාද? {#why-the-crossorigin-attribute}

ඔබ React භාවිතා කරන්නේ CDN සේවාවක් හරහා නම් [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute එක පහත පරිදි සකසන ලෙස නිර්දේශ කරමු.


```html
<script crossorigin src="..."></script>
```
තවද,

`Access-Control-Allow-Origin: *` HTTP header:

භාවිතා කර, CDN සේවාව verify කලහොත් වඩාත් ඵලදායී වේ.


![Access-Control-Allow-Origin: *](../images/docs/cdn-cors-header.png)

මෙසේ කිරීමෙන් ඔබට හොද  [error handling](/blog/2017/07/26/error-handling-in-react-16.html) අත්දැකීමක් react 16 හා ඊට ඉහල සංස්කරණයන් හීදී ලබා ගත හැක.

