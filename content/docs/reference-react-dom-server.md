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

- [`renderToPipeableStream()`](#rendertopipeablestream)
- [`renderToReadableStream()`](#rendertoreadablestream)
- [`renderToNodeStream()`](#rendertonodestream) (Deprecated)
- [`renderToStaticNodeStream()`](#rendertostaticnodestream)

* * *

## Reference {#reference}

### `renderToString()` {#rendertostring}

```javascript
ReactDOMServer.renderToString(element)
```

React අංගයක් ආරම්භක HTML බවට විදැහුම්කරණය කරයි . React මගින් නැවත HTML ස්ට්‍රින්ග් එකක් ලබා දෙනු ඇත .ඔබට මෙම ක්‍රමය මගින් සර්වරයේදී HTML ජනනය කර ආරම්භක ඉල්ලීමේදිම සලකුණු කිරීම් යැවිය හැකිය .එමගින් වේගවත් පිටු නැම්වීමක් ලබාදෙන අතර SEO අරමුණු සඳහා ඔබේ පිටු සෙවීමට සෙවුම් යන්ත්‍රවලට ඉඩ ලබාදෙයි.

<<<<<<< HEAD
ඔබ දැනටමත් මෙම සර්වරය විසින් විදැහුම්කරණය කරන ලද සලකුණක් ඇති නෝඩයක් [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) අමතන්නේ නම් , React මගින් එය සංරක්ෂණය කර සිදුවීම් හසුරුවන්නන් ඇමිණීම පමණක් සිදුකරයි , එමගින් ඔබට ඉතා ඉහළ කර්ය සධනයක් සහිත පළමු නැම්වීමේ අත්දැකීමක් ලබ ගත හැකිය.
=======
If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

* * *

### `renderToStaticMarkup()` {#rendertostaticmarkup}

```javascript
ReactDOMServer.renderToStaticMarkup(element)
```

[`renderToString`](#rendertostring) සමානය , නමුත් මෙය මගින් React අභ්‍යන්තරව භාවිතා කරන `data-reactroot` වැනි අමතර DOM ලක්ෂණ සැදිම වැළැකේ .ඔබට සරල ස්ථිතික පිටු උත්පාදකයක් ලෙස React භාවිතා කිරීමට අවශ්‍යවෙනම් මෙය වදගත් වේ , මන්ද මෙය මගින් අමතර ලක්ෂණ ඉවත් කිරීම නිසා බයිට් කිහිපයක් ඉතිරි කරගනීමට ඇති හැකියවයි.

ඔබ සේවාදායකයාගේ සලකුණු කිරීම අන්තර්ක්‍රියාකාරී කිරීමට සළසුම් කරන්නේ නම් මෙම ක්‍රමය භවිතා කිරිමෙන් වළකින්න.ඒ වෙනුවට [`renderToString`](#rendertostring) 
සර්වරයේ භවිතා කර සේවාදායකයාගේ [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) භවිතා කරන්න.

<<<<<<< HEAD
=======
If you plan to use React on the client to make the markup interactive, do not use this method. Instead, use [`renderToString`](#rendertostring) on the server and [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on the client.
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

* * *

### `renderToPipeableStream()` {#rendertopipeablestream}

```javascript
ReactDOMServer.renderToPipeableStream(element, options)
```

Render a React element to its initial HTML. Returns a [Control object](https://github.com/facebook/react/blob/3f8990898309c61c817fbf663f5221d9a00d0eaa/packages/react-dom/src/server/ReactDOMFizzServerNode.js#L49-L54) that allows you to pipe the output or abort the request. Fully supports Suspense and streaming of HTML with "delayed" content blocks "popping in" later through javascript execution. [Read more](https://github.com/reactwg/react-18/discussions/37)

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

> Note:
>
> This is a Node.js specific API and modern server environments should use renderToReadableStream instead.
>

```
const {pipe, abort} = renderToPipeableStream(
  <App />,
  {
    onAllReady() {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      pipe(res);
    },
    onShellError(x) {
      res.statusCode = 500;
      res.send(
        '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
      );
    }
  }
);
```

* * *

### `renderToReadableStream()` {#rendertoreadablestream}

```javascript
    ReactDOMServer.renderToReadableStream(element, options);
```

Streams a React element to its initial HTML. Returns a [Readable Stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream). Fully supports Suspense and streaming of HTML. [Read more](https://github.com/reactwg/react-18/discussions/127)

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

```
let controller = new AbortController();
try {
  let stream = await renderToReadableStream(
    <html>
      <body>Success</body>
    </html>,
    {
      signal: controller.signal,
    }
  );
  
  // This is to wait for all suspense boundaries to be ready. You can uncomment
  // this line if you don't want to stream to the client
  // await stream.allReady;

  return new Response(stream, {
    headers: {'Content-Type': 'text/html'},
  });
} catch (error) {
  return new Response(
    '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>',
    {
      status: 500,
      headers: {'Content-Type': 'text/html'},
    }
  );
}
```
* * *

### `renderToNodeStream()` {#rendertonodestream} (Deprecated)

```javascript
ReactDOMServer.renderToNodeStream(element)
```

React අංගයක් ආරම්භක HTML බවට විදැහුම්කරණය කරයි .HTML ස්ට්‍රින්ග් එකක් ප්‍රතිදානය කරන [කියවිය හැකි ප්‍රවාහයක්](https://nodejs.org/api/stream.html#stream_readable_streams) ලබා දෙයි.මෙම ප්‍රවාහයේ HTML ප්‍රතිදානය [`ReactDOMServer.renderToString`](#rendertostring) මගින් ආපසු ලබාදෙන්නට සර්වසමය.ඔබට මෙම ක්‍රමය මගින් සර්වරයේදී HTML ජනනය කර ආරම්භක ඉල්ලීමේදිම සලකුණු කිරීම් යැවිය හැකිය .එමගින් වේගවත් පිටු නැම්වීමක් ලබාදෙන අතර SEO අරමුණු සඳහා ඔබේ පිටු සෙවීමට සෙවුම් යන්ත්‍රවලට ඉඩ ලබාදෙයි.

<<<<<<< HEAD
ඔබ දැනටමත් මෙම සර්වරය විසින් විදැහුම්කරණය කරන ලද සලකුණක් ඇති නෝඩයක් [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) අමතන්නේ නම් , React මගින් එය සංරක්ෂණය කර සිදුවීම් හසුරුවන්නන් ඇමිණීම පමණක් සිදුකරයි , එමගින් ඔබට ඉතා ඉහළ කර්ය සධනයක් සහිත පළමු නැම්වීමේ අත්දැකීමක් ලබ ගත හැකිය.
=======
If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

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

මෙම ප්‍රවාහයේ HTML ප්‍රතිදානය [`ReactDOMServer.renderToStaticMarkup`](#rendertostaticmarkup) මගින් ආපසු ලබාදෙන්නට සර්වසමය.

<<<<<<< HEAD
ඔබ සේවාදායකයාගේ සලකුණු කිරීම් අන්තර්ක්‍රියාකාරී කිරීමට සළසුම් කරන්නේ නම් මෙම ක්‍රමය භවිතා කිරිමෙන් වළකින්න.ඒ වෙනුවට [`renderToNodeStream`](#rendertonodestream)
සර්වරයේ භවිතා කර සේවාදායකයාගේ [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) භවිතා කරන්න.
=======
If you plan to use React on the client to make the markup interactive, do not use this method. Instead, use [`renderToNodeStream`](#rendertonodestream) on the server and [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on the client.
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

> සටහන:
>
> සර්වරයේ භවිතයට පමණයි.මෙම ක්‍රමලේඛ අතුරු මුහුණත බ්‍රව්සරයේ භවිතා කර නොහැක.
>
> මෙම ක්‍රමයෙන් ආපසු එන ප්‍රවාහය utf-8 මගින් කේතනය කර ඇති බයිට් ප්‍රවාහයක් ලබා දෙනු ඇත.ඔබට වෙනත් කේතන ක්‍රමයක ප්‍රවාහයක් අවශ්‍ය නම් [iconv-lite](https://www.npmjs.com/package/iconv-lite) වැනි පෙළ ට්‍රාන්ස්කෝඩින් සලසන ප්‍රවාහ පරිණාමන ව්‍යාපෘතියක් සලකා බලන්න .
