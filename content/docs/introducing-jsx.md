---
id: introducing-jsx
title: Introducing JSX
permalink: docs/introducing-jsx.html
prev: hello-world.html
next: rendering-elements.html
---

මෙම variable declaration එක සලකා බලන්න:

```js
const element = <h1>Hello, world!</h1>;
```

මෙම අමුතු tag syntax එක string හෝ HTML නොවේ.

එය JSX ලෙස හැඳින්වෙන අතර එම syntax එක JavaScript හි 
සංයෝජනයකි. ඔබගේ UI කෙබඳු විය යුතුද යන්න විස්තර කිරීමට මෙය භාවිතා කිරීම අපි නිර්දේශ කරමු.JSX ඔබට වෙනත් හුරුපුරුදු භාෂාවක් මතක් කර දෙනු ඇත, නමුත් එය JavaScript හි පූර්ණ බලය සමඟ ඔබට ලබාදී  ඇත.

JSX React “elements” සෑදීම යොදාගැනේ. අපි [ඊළඟ කොටසේදී](/docs/rendering-elements.html) ඒවා DOM වෙත යොමු කිරීම ගවේෂණය කරන්නෙමු. ඔබට JSX භාවිතය කිරීමට අවශ්‍ය  මූලික කරුණු පහතින් සොයාගත හැක.

### ඇයි JSX? {#why-jsx}

React භාවිත වෙනවිට ඔබගේ Rendering Logic හා UI Logic එකට සම්බන්ධ වේ : Component හි Events හසුරුවන ආකාරය ද, එහි State වෙනස් වන ආකාරය හා Data දිස්වෙන ආකාරයද යන සියල්ල එකට සම්බන්ධවී ඇත.

ඔබගේ markup හා logic වෙනම file වල තැන්පත් කිරීම වෙනුවට, React “components” යන නමින් [එකක වලට කඩා](https://en.wikipedia.org/wiki/Separation_of_concerns) markup හා logic යන දෙකම එකට සම්බන්ධකරයි . අපි [තවත් කොටසකදී](/docs/components-and-props.html)  “components” වෙත නැවත සාකච්චාවට පැමිණෙමු, ඔබට තවමත් markup හා logic එකට අන්තර්ගත කිරීමට පසුබට වේනම්, මෙම [කථාව](https://www.youtube.com/watch?v=x7cQ3mrcKaY) මගින් ඔබට එය කිරීමට ඒත්තු ගැන්විය හැකිය.

React භාවිතා කිරීමට JSX  [අවශ්‍ය නොවේ](/docs/react-without-jsx.html), නමුත් බොහෝ අය එයට JavaScript code තුළ UI සමඟ වැඩ කරන විට එය  දෘශ්‍ය ආධාරකයක් ලෙස උපකාරී වේ. එය වඩාත් ප්‍රයෝජනවත් වන්නේ Error  සහ Warning පණිවිඩ පෙන්වීමටයි.

එ සමඟ, අපි ආරම්භ කරමු!

### JSX හි ප්‍රකාශන කාවැද්දීම {#embedding-expressions-in-jsx}

පහත උදාහරණයේ දී, අපි `name` ලෙස හැඳින්වෙන variable එකක්  declare  කර එය JSX  තුළ curly braces වලින් wrap කර  භාවිතා කරමු:

```js{1,2}
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

ඔබට ඕනෑම වලංගු [JavaScript expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) යක් JSX හි curly braces තුළ තැබිය හැකිය. උදාහරණයක් ලෙස, `2 + 2`, `user.firstName`, හෝ `formatName(user)` සියල්ලම වලංගු JavaScript ප්‍රකාශන වේ.

පහත උදාහරණයේ දී, අපි JavaScript  function එකක් වන `formatName(user)`,  `<h1>` element හි, එමගින් එන result එක කාවැද්දුවෙමු.

```js{12}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

[CodePen](codepen://introducing-jsx) හි එය උත්සාහ කරන්න

කියවීමේ පහසුතාවය සඳහා අපි JSX විවිධ රේඛා ඔස්සේ බෙදුවෙමු. එය අවශ්‍ය නොවනද , මෙය සිදු කරන විට, [automatic semicolon](https://stackoverflow.com/q/2846283) ඇතුළු කිරීමේ අන්තරායන් වළක්වා ගැනීම සඳහා parentheses තුළ wrap කරම අපි නිර්දේශ කරමු.

### JSX යනු ප්‍රකාශණයකි {#jsx-is-an-expression-too}

compile කිරීමෙන් පසුව, JSX ප්‍රකාශන සාමාන්‍ය JavaScript function calls බවට පත් වන අතර JavaScript objects ලෙස ඇගයීමට ලක් කරයි.

මෙයින් අදහස් කරන්නේ ඔබට `if` සහ `for` loops ප්‍රකාශන සඳහා JSX භාවිතා කළ හැකි බවයි, එය variables හි assign කර , එහි arguments ඇතුල් කර function එකේ  ප්‍රතිපලය ගැනීමයි :

```js{3,5}
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### JSX සමඟ Attributes නියම කිරීම {#specifying-attributes-with-jsx}

ඔබට string  භාවිතා කිරීමට quotes භාවිතා කළ හැකිය:

```js
const element = <div tabIndex="0"></div>;
```

JavaScript ප්‍රකාශනයක් කාවැද්දීමට ඔබට curly braces භාවිතා කළ හැකිය:

```js
const element = <img src={user.avatarUrl}></img>;
```

JavaScript  ප්‍රකාශනයක් කාවැද්දීමේදී curly braces වටා quotes දැමීම  නොකරන්න. ඔබ එක්කෝ quotes (string අගයන් සඳහා) හෝ curly braces (ප්‍රකාශන සඳහා)භාවිතා කළ යුතුය, නමුත් දෙකම එකවර බාවිතා නොකරන්න.

>**අවවාදයයි:**
>
>HTML වලට වඩා JSX JavaScript වලට සමීප බැවින්, React DOM විසින් HTML attribute names `camelCase` නම් කිරීමේ සම්මුතිය භාවිතා කරයි.
>
> උදාහරණයක් ලෙස, `class` JSX හි [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) බවට පත්වන අතර `tabindex`,  [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex) බවට පත්වේ.

### JSX හි Children  නියම කිරීම {#specifying-children-with-jsx}

යම්කිසි tag එකක් හිස් නම්, ඔබට එය XML `/>` අර්කාරයෙන් වහාම වසා දැමිය හැකිය:

```js
const element = <img src={user.avatarUrl} />;
```

JSX tags තුල children අඩංගු විය හැකිය:

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX Injection Attacks වළක්වයි {#jsx-prevents-injection-attacks}

User input JSX තුළට කාවැද්දීම ආරක්ෂිතයි:

```js
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

පෙරනිමියෙන්, React DOM render කිරීමට පෙර JSX හි ඇතුළත් කර ඇති ඕනෑම අගයන්ගෙන් [ගැලවී යයි](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html). මේ අනුව, ඔබගේ code හි ලියා නැති කිසිවක් ඔබට කිසි විටෙකත් inject කළ නොහැකි බව සහතික කරයි. Render කිරීමට පෙර සෑම දෙයක්ම string බවට පරිවර්තනය වේ. මෙය [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) ප්‍රහාර වැළැක්වීමට උපකාරී වේ.

### JSX Objects නියෝජනය කරයි {#jsx-represents-objects}

Babel මගින් JSX `React.createElement()` calls වලට හරවයි compiles. 

මෙම උදාහරණ දෙක සමාන වේ:

```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement ()` දෝෂ රහිත code ලිවීමට ඔබට උදව් කිරීම සඳහා checks කිහිපයක් සිදු කරයි, නමුත් ඇත්තවශයෙන්ම  එය මෙවැනි object එකක් නිර්මාණය කරයි:

```js
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

මෙම objects  “React elements” ලෙස හැඳින්වේ. ඔබට ඒවා තිරය මත දැකීමට අවශ්‍ය දේ පිළිබඳ විස්තරයක් ලෙස සිතිය හැකිය. React  මඟින් මෙම objects කියවා ඒවා DOM එක සෑදීමට හා up to date තබා ගැනීමට භාවිතා කරයි.

අපි [ඊළඟ කොටසේදී](/docs/rendering-elements.html) React විසින් DOM හි render කිරීම සිදුවන ආකාරය ගවේෂණය කරන්නෙමු.

>**ඉඟිය:**
>
<<<<<<< HEAD
>ඔබේ editor හි තුල ["Babel" language definition](https://babeljs.io/docs/editors) භාවිතා කිරීම අපි නිර්දේශ කරමු,එවිට ES6 සහ JSX code දෙකම නිසි ලෙස ඉස්මතු වේ.
=======
>We recommend using the ["Babel" language definition](https://babeljs.io/docs/en/next/editors) for your editor of choice so that both ES6 and JSX code is properly highlighted.
>>>>>>> 16158f195a86fc2dbb59b3ea5a5c32ce161dccb9
