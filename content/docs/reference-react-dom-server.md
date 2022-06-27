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
import * as ReactDOMServer from 'react-dom/server';
// CommonJS
var ReactDOMServer = require('react-dom/server');
```

## Overview {#overview}

<<<<<<< HEAD
පහත දැක්වෙන ක්‍රම සර්වර පරිසරයේ මෙන්ම බ්‍රව්සර් පරිසරයේද භවිතයට ගත හැකිය:
=======
These methods are only available in the **environments with [Node.js Streams](https://nodejs.dev/learn/nodejs-streams):**

- [`renderToPipeableStream()`](#rendertopipeablestream)
- [`renderToNodeStream()`](#rendertonodestream) (Deprecated)
- [`renderToStaticNodeStream()`](#rendertostaticnodestream)

These methods are only available in the **environments with [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)** (this includes browsers, Deno, and some modern edge runtimes):

- [`renderToReadableStream()`](#rendertoreadablestream)

The following methods can be used in the environments that don't support streams:
>>>>>>> 26caa649827e8f8cadd24dfc420ea802dcbee246

- [`renderToString()`](#rendertostring)
- [`renderToStaticMarkup()`](#rendertostaticmarkup)

<<<<<<< HEAD
මෙම අතිරේක ක්‍රම (`stream`) පැකේජයක් මත රඳා පවති , එමනිසා මෙය **සර්වරයේ පමණක් භවිතයට ගත හැකිය** , බ්‍රව්සරයේ ක්‍රියා නොකරනු ඇත.

- [`renderToNodeStream()`](#rendertonodestream)
- [`renderToStaticNodeStream()`](#rendertostaticnodestream)

* * *

=======
>>>>>>> 26caa649827e8f8cadd24dfc420ea802dcbee246
## Reference {#reference}

### `renderToPipeableStream()` {#rendertopipeablestream}

```javascript
ReactDOMServer.renderToPipeableStream(element, options)
```

<<<<<<< HEAD
React අංගයක් ආරම්භක HTML බවට විදැහුම්කරණය කරයි . React මගින් නැවත HTML ස්ට්‍රින්ග් එකක් ලබා දෙනු ඇත .ඔබට මෙම ක්‍රමය මගින් සර්වරයේදී HTML ජනනය කර ආරම්භක ඉල්ලීමේදිම සලකුණු කිරීම් යැවිය හැකිය .එමගින් වේගවත් පිටු නැම්වීමක් ලබාදෙන අතර SEO අරමුණු සඳහා ඔබේ පිටු සෙවීමට සෙවුම් යන්ත්‍රවලට ඉඩ ලබාදෙයි.

ඔබ දැනටමත් මෙම සර්වරය විසින් විදැහුම්කරණය කරන ලද සලකුණක් ඇති නෝඩයක් [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) අමතන්නේ නම් , React මගින් එය සංරක්ෂණය කර සිදුවීම් හසුරුවන්නන් ඇමිණීම පමණක් සිදුකරයි , එමගින් ඔබට ඉතා ඉහළ කර්ය සධනයක් සහිත පළමු නැම්වීමේ අත්දැකීමක් ලබ ගත හැකිය.
=======
Render a React element to its initial HTML. Returns a stream with a `pipe(res)` method to pipe the output and `abort()` to abort the request. Fully supports Suspense and streaming of HTML with "delayed" content blocks "popping in" via inline `<script>` tags later. [Read more](https://github.com/reactwg/react-18/discussions/37)

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

```javascript
let didError = false;
const stream = renderToPipeableStream(
  <App />,
  {
    onShellReady() {
      // The content above all Suspense boundaries is ready.
      // If something errored before we started streaming, we set the error code appropriately.
      res.statusCode = didError ? 500 : 200;
      res.setHeader('Content-type', 'text/html');
      stream.pipe(res);
    },
    onShellError(error) {
      // Something errored before we could complete the shell so we emit an alternative shell.
      res.statusCode = 500;
      res.send(
        '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
      );
    },
    onAllReady() {
      // If you don't want streaming, use this instead of onShellReady.
      // This will fire after the entire page content is ready.
      // You can use this for crawlers or static generation.

      // res.statusCode = didError ? 500 : 200;
      // res.setHeader('Content-type', 'text/html');
      // stream.pipe(res);
    },
    onError(err) {
      didError = true;
      console.error(err);
    },
  }
);
```

See the [full list of options](https://github.com/facebook/react/blob/14c2be8dac2d5482fda8a0906a31d239df8551fc/packages/react-dom/src/server/ReactDOMFizzServerNode.js#L36-L46).

> Note:
>
> This is a Node.js-specific API. Environments with [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API), like Deno and modern edge runtimes, should use [`renderToReadableStream`](#rendertoreadablestream) instead.
>
>>>>>>> 26caa649827e8f8cadd24dfc420ea802dcbee246

* * *

### `renderToReadableStream()` {#rendertoreadablestream}

```javascript
ReactDOMServer.renderToReadableStream(element, options);
```

<<<<<<< HEAD
[`renderToString`](#rendertostring) සමානය , නමුත් මෙය මගින් React අභ්‍යන්තරව භාවිතා කරන `data-reactroot` වැනි අමතර DOM ලක්ෂණ සැදිම වැළැකේ .ඔබට සරල ස්ථිතික පිටු උත්පාදකයක් ලෙස React භාවිතා කිරීමට අවශ්‍යවෙනම් මෙය වදගත් වේ , මන්ද මෙය මගින් අමතර ලක්ෂණ ඉවත් කිරීම නිසා බයිට් කිහිපයක් ඉතිරි කරගනීමට ඇති හැකියවයි.

ඔබ සේවාදායකයාගේ සලකුණු කිරීම අන්තර්ක්‍රියාකාරී කිරීමට සළසුම් කරන්නේ නම් මෙම ක්‍රමය භවිතා කිරිමෙන් වළකින්න.ඒ වෙනුවට [`renderToString`](#rendertostring) 
සර්වරයේ භවිතා කර සේවාදායකයාගේ [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) භවිතා කරන්න.

=======
Streams a React element to its initial HTML. Returns a Promise that resolves to a [Readable Stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream). Fully supports Suspense and streaming of HTML. [Read more](https://github.com/reactwg/react-18/discussions/127)

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

```javascript
let controller = new AbortController();
let didError = false;
try {
  let stream = await renderToReadableStream(
    <html>
      <body>Success</body>
    </html>,
    {
      signal: controller.signal,
      onError(error) {
        didError = true;
        console.error(error);
      }
    }
  );
  
  // This is to wait for all Suspense boundaries to be ready. You can uncomment
  // this line if you want to buffer the entire HTML instead of streaming it.
  // You can use this for crawlers or static generation:

  // await stream.allReady;

  return new Response(stream, {
    status: didError ? 500 : 200,
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

See the [full list of options](https://github.com/facebook/react/blob/14c2be8dac2d5482fda8a0906a31d239df8551fc/packages/react-dom/src/server/ReactDOMFizzServerBrowser.js#L27-L35).

> Note:
>
> This API depends on [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API). For Node.js, use [`renderToPipeableStream`](#rendertopipeablestream) instead.
>
>>>>>>> 26caa649827e8f8cadd24dfc420ea802dcbee246

* * *

### `renderToNodeStream()`  (Deprecated) {#rendertonodestream}

```javascript
ReactDOMServer.renderToNodeStream(element)
```

<<<<<<< HEAD
React අංගයක් ආරම්භක HTML බවට විදැහුම්කරණය කරයි .HTML ස්ට්‍රින්ග් එකක් ප්‍රතිදානය කරන [කියවිය හැකි ප්‍රවාහයක්](https://nodejs.org/api/stream.html#stream_readable_streams) ලබා දෙයි.මෙම ප්‍රවාහයේ HTML ප්‍රතිදානය [`ReactDOMServer.renderToString`](#rendertostring) මගින් ආපසු ලබාදෙන්නට සර්වසමය.ඔබට මෙම ක්‍රමය මගින් සර්වරයේදී HTML ජනනය කර ආරම්භක ඉල්ලීමේදිම සලකුණු කිරීම් යැවිය හැකිය .එමගින් වේගවත් පිටු නැම්වීමක් ලබාදෙන අතර SEO අරමුණු සඳහා ඔබේ පිටු සෙවීමට සෙවුම් යන්ත්‍රවලට ඉඩ ලබාදෙයි.

ඔබ දැනටමත් මෙම සර්වරය විසින් විදැහුම්කරණය කරන ලද සලකුණක් ඇති නෝඩයක් [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate) අමතන්නේ නම් , React මගින් එය සංරක්ෂණය කර සිදුවීම් හසුරුවන්නන් ඇමිණීම පමණක් සිදුකරයි , එමගින් ඔබට ඉතා ඉහළ කර්ය සධනයක් සහිත පළමු නැම්වීමේ අත්දැකීමක් ලබ ගත හැකිය.
=======
Render a React element to its initial HTML. Returns a [Node.js Readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) that outputs an HTML string. The HTML output by this stream is exactly equal to what [`ReactDOMServer.renderToString`](#rendertostring) would return. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.
>>>>>>> 26caa649827e8f8cadd24dfc420ea802dcbee246

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
>>>>>>> 26caa649827e8f8cadd24dfc420ea802dcbee246

> සටහන:
>
> සර්වරයේ භවිතයට පමණයි.මෙම ක්‍රමලේඛ අතුරු මුහුණත බ්‍රව්සරයේ භවිතා කර නොහැක.
>
<<<<<<< HEAD
> මෙම ක්‍රමයෙන් ආපසු එන ප්‍රවාහය utf-8 මගින් කේතනය කර ඇති බයිට් ප්‍රවාහයක් ලබා දෙනු ඇත.ඔබට වෙනත් කේතන ක්‍රමයක ප්‍රවාහයක් අවශ්‍ය නම් [iconv-lite](https://www.npmjs.com/package/iconv-lite) වැනි පෙළ ට්‍රාන්ස්කෝඩින් සලසන ප්‍රවාහ පරිණාමන ව්‍යාපෘතියක් සලකා බලන්න .
=======
> The stream returned from this method will return a byte stream encoded in utf-8. If you need a stream in another encoding, take a look at a project like [iconv-lite](https://www.npmjs.com/package/iconv-lite), which provides transform streams for transcoding text.

* * *

### `renderToString()` {#rendertostring}

```javascript
ReactDOMServer.renderToString(element)
```

Render a React element to its initial HTML. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

> Note
>
> This API has limited Suspense support and does not support streaming.
>
> On the server, it is recommended to use either [`renderToPipeableStream`](#rendertopipeablestream) (for Node.js) or [`renderToReadableStream`](#rendertoreadablestream) (for Web Streams) instead.

* * *

### `renderToStaticMarkup()` {#rendertostaticmarkup}

```javascript
ReactDOMServer.renderToStaticMarkup(element)
```

Similar to [`renderToString`](#rendertostring), except this doesn't create extra DOM attributes that React uses internally, such as `data-reactroot`. This is useful if you want to use React as a simple static page generator, as stripping away the extra attributes can save some bytes.

If you plan to use React on the client to make the markup interactive, do not use this method. Instead, use [`renderToString`](#rendertostring) on the server and [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on the client.
>>>>>>> 26caa649827e8f8cadd24dfc420ea802dcbee246
