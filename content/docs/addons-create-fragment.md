---
id: create-fragment
title: Keyed Fragments
permalink: docs/create-fragment.html
layout: docs
category: Add-Ons
---

> Note:
>
> `React.addons` React v15.5 අනුව entry point අවලංගු කර ඇත. ඔබට කියවිය හැකි fragments සඳහා දැන් අපට පළමු පන්තියේ ආධාර ඇත [මෙතන](/docs/fragments.html).


## ඇතුලත් කිරීම {#importing}

```javascript
import createFragment from 'react-addons-create-fragment'; // ES6
var createFragment = require('react-addons-create-fragment'); // ES5 with npm
```

## දළ විශ්ලේෂණය {#overview}

බොහෝ අවස්ථාවන්හීදී, ඔබ `render` ආපසු එන elementsවල keys නියම කිරීමට ඔබට `key` prop භාවිතා කළ හැකිය. කෙසේ වෙතත්, මෙය එක් අවස්ථාවක බිඳ වැටේ: ඔබට නැවත සකස් කිරීමට අවශ්‍ය ළමා කුල දෙකක් තිබේ නම්, wrapper element එකතු නොකර සෑම කට්ටලයකම key දැමීමට ක්‍රමයක් නොමැත.


එනම්, ඔබට එවැනි componentක් තිබේ නම්:

```js
function Swapper(props) {
  let children;
  if (props.swapped) {
    children = [props.rightChildren, props.leftChildren];
  } else {
    children = [props.leftChildren, props.rightChildren];
  }
  return <div>{children}</div>;
}
```

children sets දෙකේ keys සලකුණු කර නොමැති නිසා ඔබ මා`swapped` prop මාරු කරන විට children unmount කර නැවත remount කරනු ඇත.

මෙම ගැටළුව විසඳීම සඳහා, children sets සඳහා keys ලබා දීම සඳහා ඔබට `createFragment` add-on භාවිතා කළ හැකිය.

#### `Array<ReactNode> createFragment(object children)` {#arrayreactnode-createfragmentobject-children}

arrays සෑදීම වෙනුවට අපි ලියන්නෙමු:

```javascript
import createFragment from 'react-addons-create-fragment';

function Swapper(props) {
  let children;
  if (props.swapped) {
    children = createFragment({
      right: props.rightChildren,
      left: props.leftChildren
    });
  } else {
    children = createFragment({
      left: props.leftChildren,
      right: props.rightChildren
    });
  }
  return <div>{children}</div>;
}
```

passed කරන ලද object keys (එනම් `left` සහ `right`) සමස්ත children set සඳහාම keys ලෙස භාවිතා කරන අතර, rendered children අනුපිළිවෙල තීරණය කිරීම සඳහා object keys අනුපිළිවෙල භාවිතා කෙරේ. මෙම වෙනස සමඟ, children sets දෙක, ඉවත් කිරීමකින් තොරව DOM හි නිසි පරිදි නැවත සකස් කරනු ඇත.

`CreateFragment` හි return අගය opaque object ලෙස සැලකිය යුතුය; ඔබට loop through a fragment [`React.Children`](/docs/react-api.html#react.children) සහායකයින් භාවිතා කළ හැකි නමුත් එයට directly ප්‍රවේශ විය නොහැක. අපි මෙහි JavaScript එන්ජිම ආරක්‍ෂා කරන object enumeration අනුපිළිවෙල මත විශ්වාසය තබන බව මතක තබා ගන්න, එය spec සහතික නොවන නමුත් non-numeric keys ඇති objects සඳහා සියලුම ප්‍රධාන බ්‍රව්සර් සහ VMs මඟින් ක්‍රියාත්මක කෙරේ.
