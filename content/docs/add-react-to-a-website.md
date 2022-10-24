---
id: add-react-to-a-website
title: වෙබ් අඩවියකට React එකතු කිරීම
permalink: docs/add-react-to-a-website.html
redirect_from:
  - "docs/add-react-to-an-existing-app.html"
prev: getting-started.html
next: create-a-new-react-app.html
---

ඔබට අවශ්‍ය පරිදි හැකිතාක් කුඩා හෝ විශාල ප්‍රමාණයෙන් React භාවිත කරන්න. 

React මුල සිටම සැලසුම් කර ඇත්තේ ක්‍රමික භාවිතය සඳහා වන අතර ඔබට **හැකිතරම් කුඩා හෝ හැකිතරම් විශාල ආකාරයකින්, ඔබේ අවශ්‍යතාව පරිදි එය භාවිත කළ හැකිය**. සමහර විට ඔබට අවශ්‍ය වී ඇත්තේ දැනටමත් පවතින පිටුවකට කුඩා අන්තර් ක්‍රියාකාරීත්වයක් එක් කිරීමට පමණක් විය හැකිය. React සංරචක යනු ඒ සඳහා කදිම මාර්ගයකි.

වෙබ් අඩවි බහුතරයක් තනි-පිටුවේ යෙදුම් නොවන අතර එසේ වීමට අවශ්‍ය ද නොවේ. **ඉතා කුඩා කේත පේළි කිහිපයක් සහ ගොඩනැගීම් උපාංග කිසිවකින් තොරව**, ඔබේ වෙබ් අඩවියේ කුඩා කොටසක React අත්හදා බලන්න. ඉන් පසුව ඔබට එහි පැවැත්ම ක්‍රමිකව ව්‍යාප්ත කිරීමට හෝ කුඩා ගතික සංරචක කීපයකට සීමා කිරීමට පුළුවන.

---

- [මිනිත්තුවකින් React එකතු කරන්න](#add-react-in-one-minute)
- [අභිමත: JSX සමඟ React අත්හදා බලන්න](#optional-try-react-with-jsx) ( කිසිදු පොදි සැකසුමක් අවශ්‍ය නොවේ!)

## මිනිත්තුවකින් React එකතු කරන්න {#add-react-in-one-minute}

මෙම කොටසේදී, පවතින HTML පිටුවකට React සංරචකයක් එකතු කරන්නේ කෙසේදැයි අපි ඔබට පෙන්වන්නෙමු. ඔබට ඔබේම වෙබ් අඩවියේ මෙය අත්හදා බැලිය හැකිය, නැත්නම් පුහුණුවීම සඳහා හිස් HTML පිටුවක් නිර්මාණය කරගන්න.

**මෙම කොටස සම්පූර්ණ කිරීම සඳහා ඔබට අවශ්‍ය වන්නේ අන්තර්ජාල සම්බන්ධතාවක් සහ ඔබේ කාලයෙන් මිනිත්තුවක් පමණි**. වෙනත් කිසිදු සංකීර්ණ උපාංගයක් හෝ ස්ථාපනය කරගත යුතු කිසිවක් අවශ්‍ය නොවේ.

<<<<<<< HEAD
අභිමත: [සම්පූර්ණ උදාහරණය බාගත කරගන්න (2KB අසුරන ලද)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)
=======
Optional: [Download the full example (2KB zipped)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/87f0b6f34238595b44308acfb86df6ea43669c08.zip)
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

### පියවර 1: HTML වලට DOM රැඳවුමක් එක් කරන්න. {#step-1-add-a-dom-container-to-the-html}

පළමුව, ඔබට සංස්කරණය කිරීමට අවශ්‍ය HTML පිටුව විවෘත කරගන්න. ඔබට React වලින් යමක් පෙන්විය යුතු ස්ථානයට හිස් ටැගයක් එකතු කරන්න. උදාහරණයක් ලෙස:

```html{3}
<!-- ... පවතින HTML ... -->

<div id="like_button_container"></div>

<!-- ... පවතින HTML ... -->
```

අපි මෙම `<div>` ට, `id` භාවිතයෙන් අනන්‍ය හැඳින්වීමක් ලබා දුන්නෙමු. මෙය අපිට පසුව JavaScript කේතය තුළින් එය සොයා ගැනීමට සහ එතුළ React සංරචකයක් ප්‍රදර්ශනය කිරීමට ඉඩ සලසයි

>ඉඟිය
>
>ඔබට මෙවැනි `<div>` “රැඳවුමක්”, `<body>` ටැගය තුළ **ඕනෑම ස්ථානයක** ස්ථාපනය කළ හැකිය. ඔබට එක පිටුවක් තුළ ඔබේ අවශ්‍යතාව පරිදි ඕනෑ තරම් ස්වාධීන DOM රැඳවුම් ප්‍රමාණයක් රැඳවිය හැක. ඒවා  සාමාන්‍යයෙන් හිස්ය  -- React විසින් DOM රැඳවුම් තුළ පවතින කිසියම් අන්තර්ගතයක් ප්‍රතිස්ථාපනය කෙරෙනු ඇත. 

### පියවර 2: Script ටැග එකතු කරන්න {#step-2-add-the-script-tags}

මීළඟට , වැසෙන `</body>` ටැගයට පෙර `<script>` ටැග තුනක් එකතු කරන්න:

```html{5,6,9}
  <!-- ... වෙනත් HTML ... -->

<<<<<<< HEAD
  <!-- React නංවන්න. -->
  <!-- සටහන: (ප්‍රායෝගික) යෙදවීමේදී, "development.js" යන්න "production.min.js" මඟින් ප්‍රතිස්ථාපනය කරන්න. -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
=======
  <!-- Load React. -->
  <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

  <!-- අපගේ React සංරචකය නංවන්න. -->
  <script src="like_button.js"></script>

</body>
```

පළමු ටැගයන් දෙක React නංවයි. තුන්වැන්න ඔබේ  සංරචකයේ කේතය නංවනු ඇත.

### පියවර 3: React සංරචකයක් නිර්මාණය කරන්න {#step-3-create-a-react-component}

ඔබේ HTML පිටුවට යාබදව `like_button.js` නම් ලේඛනයක් නිර්මාණය කරන්න.
 **[මෙම ආරම්භක කේතය](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)** විවෘත කර ඔබ නිර්මාණය කළ ලේඛනයට පිටපත් කර ගන්න.

>ඉඟිය 
>
>මෙම කේතය `LikeButton` නම් React සංරචකයක් අර්ථ දක්වයි. ඔබට එය තවම වටහා ගත නොහැකි නම් වික්ෂිප්ත නොවන්න -- අපි, React හි මූලිකාංග, අපගේ [ප්‍රායෝගික නිබන්ධනයේ](/tutorial/tutorial.html) සහ [ප්‍රධාන සංකල්ප මාර්ගෝපදේශයේ](/docs/hello-world.html) දී  පසුව ආවරණය කරන්නෙමු. දැනට අපි තිරයේ දිස්වන දේ එයාකාරයෙන් පිළිගනිමු!

<<<<<<< HEAD
**[ආරම්භක කේතයෙන් ](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)** පසුව, `like_button.js` හි අවසානයට පහත කේත දෙපෙළ එක් කරන්න:

```js{3,4}
// ... ඔබ පිටපත් කළ ආරම්භක කේතය ...
=======
After **[the starter code](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)**, add three lines to the bottom of `like_button.js`:

```js{3,4,5}
// ... the starter code you pasted ...
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
```

<<<<<<< HEAD
මෙම කේත දෙපෙළ, පළමු පියවරේදී, අපි HTML වලට එකතු කළ `<div>` සොයාගෙන, අපගේ "Like" බොත්තම නම්  React සංරචකය එතුළ දර්ශනය කරනු ලබයි. 
=======
These three lines of code find the `<div>` we added to our HTML in the first step, create a React app with it, and then display our "Like" button React component inside of it.
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

### එපමණයි! {#thats-it}

හතරවන පියවරක් නැත. **ඔබ පළමු React සංරචකය ඔබේ වෙබ් පිටුවට එකතු කර තිබේ.**

React ඒකාබද්ධ කිරීම පිළිබඳ වැඩිදුර ඉඟි සඳහා මීළග කොටස් පරිශීලනය කරන්න

**[සම්පූර්ණ උදාහරණයේ කේතය බලන්න](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605)**

<<<<<<< HEAD
**[සමපුර්ණ උදාහරණය බාගත කරගන්න (2KB අසුරන ලද)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)**
=======
**[Download the full example (2KB zipped)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/87f0b6f34238595b44308acfb86df6ea43669c08.zip)**
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

### ඉඟිය: සංරචකයක් නැවත නැවත භාවිත කරන්න {#tip-reuse-a-component}

සාමාන්‍යයෙන්, ඔබට React සංරචකයන් HTML පිටුවේ විවිධ ස්ථානවල ප්‍රදර්ශනය කිරීමට ද අවශ්‍ය වනු ඇත. පහත දැක්වෙන්නේ "Like" බොත්තම තෙවරක් ප්‍රදර්ශනය කර එයට යම් දත්ත සපයන අයුරු නිදර්ශනය කෙරෙන උදාහරණයකි:

[සම්පූර්ණ උදාහරණයේ කේතය බලන්න](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda)

<<<<<<< HEAD
[සමපුර්ණ උදාහරණය බාගත කරගන්න (2KB අසුරන ලද)](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda/archive/9d0dd0ee941fea05fd1357502e5aa348abb84c12.zip)
=======
[Download the full example (2KB zipped)](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda/archive/279839cb9891bd41802ebebc5365e9dec08eeb9f.zip)
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

>සටහන
>
>React අන්තර්ගත කොටස් එකිනෙකින් වෙන්වූ පිටුවල ඇති විට මෙම උපාය වඩාත් ප්‍රයෝජනවත් වේ. ඒ වෙනුවට, React කේතය තුළ [සංරචක සංයුතිකරණය](/docs/components-and-props.html#composing-components) භාවිත කිරීම වඩා පහසුය.

### ඉඟිය: නිකුත් කිරීම සඳහා JavaScript කුඩා කර අසුරන්න. {#tip-minify-javascript-for-production}

ඔබේ වෙබ් අඩවිය නිකුත් කිරීමට පෙර, කුඩා කර නොඅසුරන ලද JavaScript මඟින් ඔබේ පරිශීලකයන් සඳහා පිටුව සැලකිය යුතු ලෙස මන්දගාමී විය හැකි බවට කල්පනාකාරී වන්න.

ඔබ දැනටමත් යෙදුම් පිටපත් කුඩා කොට අසුරන්නේ නම් සහ ඔබේ නිකුත් කළ වෙබ් අඩවියේ `production.min.js` න් අවසන් වන React පිටපත් නැංවෙන බව සහතික නම්, **ඔබේ වෙබ්අඩවිය නිකුත් කිරීමට සූදානම් තත්වයේ පවතී**:

```js
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
```

ඔබේ යෙදුම් ක්‍රමාවලිය සඳහා ඔබ කුඩා කර ඇසිරීම අනුගමනය නොකරන්නේ නම්, [එය සකස් කර ගැනීම සඳහා ක්‍රමයක් ඇත.](https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3)

## අභිමත: JSX සමඟ React අත්හදා බලන්න {#optional-try-react-with-jsx}

<<<<<<< HEAD
ඉහත උදාහරණයන්හිදී, අපි ගවේෂකයන් විසින් මූලිකව සහය දක්වන විශේෂාංග මත පමණක් රැඳුණෙමු. අපි React ට කුමක් ප්‍රදර්ශනය කළ යුතුදැයි පැවසීම සඳහා JavaScript කෘත්‍යයක් භාවිත කළේ එනිසාය:
=======
In the examples above, we only relied on features that are natively supported by browsers. This is why we used a JavaScript function call to tell React what to display:
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

```js
const e = React.createElement;

// Display a "Like" <button>
return e(
  'button',
  { onClick: () => this.setState({ liked: true }) },
  'Like'
);
```

කෙසේ නමුත්, React විසින් [JSX](/docs/introducing-jsx.html) භාවිත කිරීමට ද පහසුකම් සලසයි

```js
//  "Like" <බොත්තම> පෙන්වන්න
return (
  <button onClick={() => this.setState({ liked: true })}>
    Like
  </button>
);
```

මෙම කේත කොටස් දෙක සමානය. JSX **[සම්පූර්ණයෙන් අභිමත](/docs/react-without-jsx.html)** වුවත්, බොහෝ දෙනා එය React සමඟ සහ වෙනත් එවැනි පුස්තකාල සමඟ පරිශීලක අතුරුමුහුණත් නිර්මාණය කිරීමට සහය කරගනී.  

<<<<<<< HEAD
ඔබට [මෙම මාර්ගගත පරිවර්තකය](https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.3) භාවිතයෙන් JSX සමඟ ක්‍රීඩා කළ හැකිය.
=======
You can play with JSX using [this online converter](https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.15.7).
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

### ක්ෂණිකව JSX අත්හදා බලන්න{#quickly-try-jsx}

ඔබේ ව්‍යාපෘතියේ JSX උත්සාහ කිරීමට වේගවත් ම ක්‍රමය නම් මෙම `<script>` ටැගය ඔබේ පිටුවට එකතු කිරීමයි:

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

<<<<<<< HEAD
දැන් ඔබට ඕනෑම `<script>` ටැගයකට `type="text/babel"` ලක්ෂණය එක් කිරීමෙන් එතුළ JSX භාවිත කළ හැකිය. මෙහි ඇත්තේ ඔබට බාගත කරගෙන අත්හදා බැලිය හැකි [JSX සහිත උදාහරණ HTML ලේඛනයකි](https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html).
=======
Now you can use JSX in any `<script>` tag by adding `type="text/babel"` attribute to it. Here is [an example HTML file with JSX](https://raw.githubusercontent.com/reactjs/reactjs.org/main/static/html/single-file-example.html) that you can download and play with.
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

ඉගෙනීමට සහ සරල ආදර්ශන සැකසීමට මෙම අවතීර්ණය ප්‍රමාණවත් ය. කෙසේ නමුත්, එය ඔබේ වෙබ් අඩවිය මන්දගාමී සහ **නිකුත් කිරීමට නුසුදුසු භාවයට පත් කරයි**. ඔබ ඉදිරියට යාමට සූදානම් විට මෙම නව `<script>` ටැග සහ එකතු කළ `type="text/babel"` ලක්ෂණ ඉවත් කරන්න. ඒ වෙනුවට මීළග කොටසේදී ඔබේ සියලුම `<script>`ටැග ස්වයංක්‍රීය ව පරිවර්තනය කිරීම සඳහා JSX පෙර සකසනයක් සකස් කරගනු ඇත.

### ව්‍යාපෘතියකට JSX එකතු කරන්න {#add-jsx-to-a-project}

ව්‍යාපෘතියකට JSX එකතු කිරීම සඳහා පොදි සකසනයක් හෝ සංවර්ධන සර්වරයක් වැනි සංකීර්ණ උපාංග අවශ්‍ය නොවේ. අත්‍යවශයෙන්ම, JSX එක් කිරීම, **බොහෝ දුරට CSS පෙරසකසනයක් එක් කිරීමට සමානය**. එකම අවශ්‍යතාව වන්නේ ඔබේ පරිගණකයෙහි [Node.js](https://nodejs.org/) ස්ථාපනය කොට තිබීමයි

අග්‍රස්ථයෙන් ඔබේ ව්‍යාපෘති ගොනුව වෙත ගොස්, පහත විධාන දෙක පිටපත් කරගන්න:

1. **පියවර 1:** `npm init -y` දුවවන්න (එය අසාර්ථක වේ නම්, [මෙහි විසඳුමක් තිබේ](https://gist.github.com/gaearon/246f6380610e262f8a648e3e51cad40d))
2. **පියවර 2:** `npm install babel-cli@6 babel-preset-react-app@3` දුවවන්න.

>ඉඟිය
>
>අප මෙහි npm භාවිත කරන්නේ **JSX පෙරසකසනය ස්ථාපනය කරගැනීම සඳහාය.** 
ඔබට අන් කිසිවක් සඳහා එය අවශ්‍ය නොවනු ඇත. React සහ යෙදුම් කේතය යන දෙකටම `<script >` ටැග ලෙස කිසිදු වෙනසකින් තොරව  පවතිනු ඇත.

සුබ පැතුම්! ඔබ **නිකුත් කිරීමට ගැළපෙන JSX සැලසුමක්** ඔබේ ව්‍යාපෘතියට එකතු කළෙහිය.

### JSX පෙරසකසනය දුවවන්න {#run-jsx-preprocessor}

`src` නම් ගොනුවක් නිර්මාණය කර පහත අග්‍රස්ථ විධානය දුවවන්න:	

```console
npx babel --watch src --out-dir . --presets react-app/prod
```

>සටහන
>
>`npx` යනු අක්ෂර වින්‍යාස දෝෂයක් නොවේ -- එය [npm 5.2+ සමඟ පැමිණෙන පැකේජ දිවවුම් උපාංගයකි](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).
>
>ඔබ "ඔබ අතපසුවීමකින් `babel` පැකේජය ස්ථාපනය කරගෙන ඇත" යයි කියැවෙන දෝෂ පණිවිඩයක් දකින්නේ නම්, ඔබ බොහෝ විට [පෙර පියවර](#add-jsx-to-a-project) මඟහැර ඇත. එම පියවර එම ගොනුව තුළම සිදුකර නැවත උත්සාහ කරන්න.

එය සම්පූර්ණ වන තුරු බලා නොසිටින්න -- මෙම විධානය JSX සඳහා ස්වංක්‍රීය නිරීක්ෂකයක් ආරම්භ කරයි. 

ඔබ දැන් **[JSX ආරම්භක කේතය](https://gist.github.com/gaearon/c8e112dc74ac44aac4f673f2c39d19d1/raw/09b951c86c1bf1116af741fa4664511f2f179f0a/like_button.js)** භාවිතයෙන්  `src/like_button.js` නම් ලේඛනයක් නිර්මාණය කරයි නම්, නිරීක්ෂකය විසින්  ගවේශකය සඳහා සුදුසු කේතය සහිත පෙර  සැකසූ `src/like_button.js` ලේඛනයක් නිර්මාණය කෙරෙනු ඇත. ඔබ එම ලේඛනය JSX වලින් සංස්කරණය කිරීමේදී, පරිණාමනය ස්වයංක්‍රීය ව දිවවෙනු ඇත. 

අමතරව, මෙය ඔබට පැරණි ගවේෂකවලදී බිඳවැටීම් සිදු නොවන පරිදි, පන්ති වැනි නවීන JavaScript වින්‍යාස විශේෂාංග ද භාවිතයට ද ඉඩ සලසයි. අප භාවිත කළ උපාංගය නම් වන අතර [එහි ප්‍රලේඛනයෙන්](https://babeljs.io/docs/en/babel-cli/) ඔබට ඒ පිළිබඳ වැඩිදුර ඉගෙන ගත හැකි වනු ඇත.

ඔබ ගොඩනැංවුම් උපාංග වලට හුරුවන බව සහ ඒවා වැඩිදුර භාවිත කිරීමට අවශ්‍ය බව, ඔබට හැඟෙන්නේ නම්, [මීළඟ කොටසේ](/docs/create-a-new-react-app.html) සමහර ජනප්‍රිය සහ භාවිතයට පහසු උපාංග කට්ටල කිහිපයක් විස්තර කෙරේ.ඒවා අවශ්‍ය නොවේ නම් -- script ටැග වුවද ප්‍රමාණවත් ය!
