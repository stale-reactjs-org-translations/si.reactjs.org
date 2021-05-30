---
id: react-dom-server
title: ReactDOMServer
layout: docs
category: Reference
permalink: docs/react-dom-server.html
---

`ReactDOMServer` වස්තුව මගින් ඔබට සංරචක ස්ථිතික සලකුණු බවට විදැහුම්කරණය කිරීම හැකියාව ලබාදෙයි. සමාන්‍යයෙන් එය Node සර්වරය භාවිතයට ගනි:

```js
// ES modules
import ReactDOMServer from 'react-dom/server';
// CommonJS
var ReactDOMServer = require('react-dom/server');
```

## Overview {#overview}

පහත දැක්වෙන ක්‍රම සර්වර පරිසරයේ මෙන්ම බ්‍රව්සර් පරිසරයේද භවිතයට ගත හැකිය:

- [`renderToString()`](#rendertostring)
- [`renderToStaticMarkup()`](#rendertostaticmarkup)

මෙම අතිරේක ක්‍රම (`stream`) පැකේජයක් මත රඳා පවති , එමනිසා මෙය **සර්වරයේ පමණක් භවිතයට ගත හැකිය** , බ්‍රව්සරයේ ක්‍රියා නොකරනු ඇත.

- [`renderToNodeStream()`](#rendertonodestream)
- [`renderToStaticNodeStream()`](#rendertostaticnodestream)

* * *

## Reference {#reference}

### `renderToString()` {#rendertostring}

```javascript
ReactDOMServer.renderToString(element)
```

React අංගයක් ආරම්භක HTML බවට විදැහුම්කරණය කරයි . React මගින් නැවත HTML ස්ට්‍රින්ග් එකක් ලබා දෙනු ඇත .ඔබට මෙම ක්‍රමය මගින් සර්වරයේදී HTML ජනනය කර ආරම්භක ඉල්ලීමේදිම සලකුණු කිරීම් යැවිය හැකිය .එමගින් වේගවත් පිටු නැම්වීමක් ලබාදෙන අතර SEO අරමුණු සඳහා ඔබේ පිටු සෙවීමට සෙවුම් යන්ත්‍රවලට ඉඩ ලබාදෙයි.

ඔබ දැනටමත් මෙම සර්වරය විසින් විදැහුම්කරණය කරන ලද සලකුණක් ඇති නෝඩයක් [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) අමතන්නේ නම් , React මගින් එය සංරක්ෂණය කර සිදුවීම් හසුරුවන්නන් ඇමිණීම පමණක් සිදුකරයි , එමගින් ඔබට ඉතා ඉහළ කර්ය සධනයක් සහිත පළමු නැම්වීමේ අත්දැකීමක් ලබ ගත හැකිය.

* * *

### `renderToStaticMarkup()` {#rendertostaticmarkup}

```javascript
ReactDOMServer.renderToStaticMarkup(element)
```

[`renderToString`](#rendertostring) සමානය , නමුත් මෙය මගින් React අභ්‍යන්තරව භාවිතා කරන `data-reactroot` වැනි අමතර DOM ලක්ෂණ සැදිම වැළැකේ .ඔබට සරල ස්ථිතික පිටු උත්පාදකයක් ලෙස React භාවිතා කිරීමට අවශ්‍යවෙනම් මෙය වදගත් වේ , මන්ද මෙය මගින් අමතර ලක්ෂණ ඉවත් කිරීම නිසා බයිට් කිහිපයක් ඉතිරි කරගනීමට ඇති හැකියවයි.

ඔබ සේවාදායකයාගේ සලකුණු කිරීම අන්තර්ක්‍රියාකාරී කිරීමට සළසුම් කරන්නේ නම් මෙම ක්‍රමය භවිතා කිරිමෙන් වළකින්න.ඒ වෙනුවට [`renderToString`](#rendertostring) 
සර්වරයේ භවිතා කර සේවාදායකයාගේ [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) භවිතා කරන්න.


* * *

### `renderToNodeStream()` {#rendertonodestream}

```javascript
ReactDOMServer.renderToNodeStream(element)
```

React අංගයක් ආරම්භක HTML බවට විදැහුම්කරණය කරයි .HTML ස්ට්‍රින්ග් එකක් ප්‍රතිදානය කරන [කියවිය හැකි ප්‍රවාහයක්](https://nodejs.org/api/stream.html#stream_readable_streams) ලබා දෙයි.මෙම ප්‍රවාහයේ HTML ප්‍රතිදානය [`ReactDOMServer.renderToString`](#rendertostring) මගින් ආපසු ලබාදෙන්නට සර්වසමය.ඔබට මෙම ක්‍රමය මගින් සර්වරයේදී HTML ජනනය කර ආරම්භක ඉල්ලීමේදිම සලකුණු කිරීම් යැවිය හැකිය .එමගින් වේගවත් පිටු නැම්වීමක් ලබාදෙන අතර SEO අරමුණු සඳහා ඔබේ පිටු සෙවීමට සෙවුම් යන්ත්‍රවලට ඉඩ ලබාදෙයි.

ඔබ දැනටමත් මෙම සර්වරය විසින් විදැහුම්කරණය කරන ලද සලකුණක් ඇති නෝඩයක් [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) අමතන්නේ නම් , React මගින් එය සංරක්ෂණය කර සිදුවීම් හසුරුවන්නන් ඇමිණීම පමණක් සිදුකරයි , එමගින් ඔබට ඉතා ඉහළ කර්ය සධනයක් සහිත පළමු නැම්වීමේ අත්දැකීමක් ලබ ගත හැකිය.

> සටහන:
>
> සර්වරයේ භවිතයට පමණයි.මෙම ක්‍රමලේඛ අතුරු මුහුණත බ්‍රව්සරයේ භවිතා කර නොහැක.
>
> මෙම ක්‍රමයෙන් ආපසු එන ප්‍රවාහය utf-8 මගින් කේතනය කර ඇති බයිට් ප්‍රවාහයක් ලබා දෙනු ඇත.ඔබට වෙනත් කේතන ක්‍රමයක ප්‍රවාහයක් අවශ්‍ය නම් [iconv-lite](https://www.npmjs.com/package/iconv-lite) වැනි පෙළ ට්‍රාන්ස්කෝඩින් සලසන ප්‍රවාහ පරිණාමන ව්‍යාපෘතියක් සලකා බලන්න .

* * *

### `renderToStaticNodeStream()` {#rendertostaticnodestream}

```javascript
ReactDOMServer.renderToStaticNodeStream(element)
```

[`renderToNodeStream`](#rendertonodestream) සමානය , නමුත් මෙය මගින් React අභ්‍යන්තරව භාවිතා කරන `data-reactroot` වැනි අමතර DOM ලක්ෂණ සැදිම වැළැකේ . 
ඔබට සරල ස්ථිතික පිටු උත්පාදකයක් ලෙස React භාවිතා කිරීමට අවශ්‍යවෙනම් මෙය වදගත් වේ , මන්ද මෙය මගින් අමතර ලක්ෂණ ඉවත් කිරීම නිසා බයිට් කිහිපයක් ඉතිරි කරගනීමට ඇති හැකියවයි.

මෙම ප්‍රවාහයේ HTML ප්‍රතිදානය [`ReactDOMServer.renderToStaticMarkup`](#rendertostaticmarkup) මගින් ආපසු ලබාදෙන්නට සර්වසමය

ඔබ සේවාදායකයාගේ සලකුණු කිරීම් අන්තර්ක්‍රියාකාරී කිරීමට සළසුම් කරන්නේ නම් මෙම ක්‍රමය භවිතා කිරිමෙන් වළකින්න.ඒ වෙනුවට [`renderToNodeStream`](#rendertonodestream)
සර්වරයේ භවිතා කර සේවාදායකයාගේ [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) භවිතා කරන්න.

> සටහන:
>
> සර්වරයේ භවිතයට පමණයි.මෙම ක්‍රමලේඛ අතුරු මුහුණත බ්‍රව්සරයේ භවිතා කර නොහැක.
>
> මෙම ක්‍රමයෙන් ආපසු එන ප්‍රවාහය utf-8 මගින් කේතනය කර ඇති බයිට් ප්‍රවාහයක් ලබා දෙනු ඇත.ඔබට වෙනත් කේතන ක්‍රමයක ප්‍රවාහයක් අවශ්‍ය නම් [iconv-lite](https://www.npmjs.com/package/iconv-lite) වැනි පෙළ ට්‍රාන්ස්කෝඩින් සලසන ප්‍රවාහ පරිණාමන ව්‍යාපෘතියක් සලකා බලන්න .
