---
id: components-and-props
title: Components and Props
permalink: docs/components-and-props.html
redirect_from:
  - "docs/reusable-components.html"
  - "docs/reusable-components-zh-CN.html"
  - "docs/transferring-props.html"
  - "docs/transferring-props-it-IT.html"
  - "docs/transferring-props-ja-JP.html"
  - "docs/transferring-props-ko-KR.html"
  - "docs/transferring-props-zh-CN.html"
  - "tips/props-in-getInitialState-as-anti-pattern.html"
  - "tips/communicate-between-components.html"
prev: rendering-elements.html
next: state-and-lifecycle.html
---

Components ඔබට ඔබගේ UI එක, තනි තනි කොටසට ස්වාධීනව ක්‍රියා කල හැකි, නැවත භාවිතා කල හැකි සහ තනි කොටසක් ලෙස සිතිය හැකි කොටස් වලට කැඩීමට ඉඩ ලබාදේ. මෙම පිටුවේදී ඔබට components යන අදහසට අදුන්වා දීමක් සිදු කරයි. ඔබට [components වල සවිස්තරාත්මක විස්තරයක් API reference හිදී සොයාගත හැක](/docs/react-component.html).

සංකල්පයක් ලෙස ගත් කල, components, JavaScript වල function වලට සමානය. components (“props” නමැති) අභිමත ආදානයන් ලබා ගන්නා අතර, තිරයේ අන්තර්ගතය කෙසේ වියයුතු දැයි විස්තර කරන React elements ආපසු ලබා දෙයි.

## Function සහා Class Components {#function-and-class-components}

component අර්ථ දැක්විය හැකි පහසුම විදිය JavaScript function එකක් ලිවීමයි.
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

මෙම function එක වලංගු React component එකකි, මක්නිසාදයත් එය තනි, දත්ත සහිත "props" (properties සදහා කෙටි යෙදුමකි) object argument එකක් බාර ගන්නා අතර React element එකක් ආපසු ලබා දෙයි. අප එවැනි components සදහා "function components" යයි පවසයි. මක් නිසාදයත් ඒවා ඇත්ත වසයෙන්ම JavaScript functions. වන බැවිනි.

ඔබට  [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) භාවිතයෙන්ද component එකක් අර්ථ දැක්විය හැකිය.
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

ඉහතින් ඇති component දෙක React වලට අනුව බලන විට සමාන component දෙකකි.

Classes වලට අමතර ලක්ෂණ කිහිපයක් ඇත. අප ඒවා [ඊළඟ කාණ්ඩ](/docs/state-and-lifecycle.html) වලදී සාකච්ඡා කරනවා. ඒ වන තුරු අප function components භාවිතා කරමු, මක් නිසාද යත් ඒවා කෙටි බැවින්.

## Component එකක් Render කිරීම {#rendering-a-component}

මීට පෙර, අපට හමුවුනේ  DOM tags නියෝජනය කරන React elements පමණි:

```js
const element = <div />;
```

කෙසේ වෙතත්, elements වලටද අප විසින් අර්ථ  දක්වන ලද components නියෝජනය කළ හැකිය:

```js
const element = <Welcome name="Sara" />;
```

React විසින් පරිශීලක-අර්ථ දැක්වු(user-defined) component එකක් නිරීක්ෂණය කරන විට, එය එම component එකට තනි object ලෙස JSX attributes ලබාදේ. අප මෙම object එක "props" ලෙස හඳුන්වයි.

උදාහරණයක් ලෙස ගත්තොත්, පහත code එක "Hello, Sara" ලෙස වෙබ් පිටුවේ පෙන්නුම් කරයි.

```js{1,6}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/YGYmEG?editors=1010)**

අපි නැවත මේ උදාහරණයේ වෙන්නේ මොකක්ද කියලා බලමු:

<<<<<<< HEAD
1. අපි `ReactDOM.render()` method එක `<Welcome name="Sara" />` element සමග call කරනවා.
2. React විසින් `Welcome` component එක `{name: 'Sara'}` යන props object එකත් සමග call කරනවා.
3. අපගේ `Welcome` component එක `<h1>Hello, Sara</h1>` කියන element එක ප්‍රතිපලයක් ලෙස අපට ලබා දෙනවා.
4. React DOM විසින් කාර්යක්ෂම ලෙස  DOM එක `<h1>Hello, Sara</h1>` ට ගැලපෙන සේ යාවත්කාලින කරනවා.
=======
1. We call `root.render()` with the `<Welcome name="Sara" />` element.
2. React calls the `Welcome` component with `{name: 'Sara'}` as the props.
3. Our `Welcome` component returns a `<h1>Hello, Sara</h1>` element as the result.
4. React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`.
>>>>>>> 6d965422a4056bac5f93f92735364cb08bcffc6b

>**සැලකිය යුතුයි:** හැමවෙලේම  component එකක නම capital letter එකකින් අරඹන්න.
>
>React විසින් components නම් lowercase letters එකකින් පටන් ගන්නේ නම් එය DOM tags ලෙස සලකයි. උදාහරණයක් ලෙස ගතහොත් , `<div />` මගින් HTML div tag එක නියෝජනය වන අතර, `<Welcome />` මගින් component එකක් නියෝජනය වන අතර, එම `Welcome` component එක scope එකේ තිබීම අත්‍යවශ්‍ය වේ.
>
>මෙම නාම කරණය පිටිපස ඇති හේතුන් දැන ගැනීමට අවශ්‍යනම් කරුණාකර [JSX In Depth](/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized) කියවන්න.
## Components නිර්මාණය {#composing-components}

Components වලට ඒවායේ output ලබාදීමේදී වෙනත් components බාවිතා කල හැකිය.මෙම ලක්ෂණය හේතුවෙන් අපට ඕනෑම මට්ටමකදී එකම component එක abstract ලෙස බාවිතා කිරීමට අවස්ථාව ලබා දෙනවා. React App එකකදී, button එකක්, form එකක්, dialog එකක්, screen එකක්, යන සියල්ල පොදුවේ components ලෙස හදුන්වයි.

උදාහරණයක් ලෙස ගතහොත්, අපට `App` නැමති component එක තුල කිහිපවතාවක් render වන ලෙස `Welcome` නැමති component එකක් නිර්මාණය කල හැකිය.

```js{8-10}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/KgQKPr?editors=1010)**

සාමාන්යෙන්,  අලුත් React App වල ඉහලින්ම `App` නැමති තනි component එකක් ඇත. කෙසේවෙතත්, ඔබ React පවතින App එකකට අනුබද්ද කළහොත් ඔබ සමහරක් විට `Button` එකක් වැනි කුඩා component එකක බාවිතයෙන් App එකේ පහතම අවස්ථාවේ සිට view hierarchy එකේ ඉහලට ක්‍රමානුකුලව App එක නිර්මාණය කිරීමට සිදුවිය හැකිය.

## Components Extract කිරීම {#extracting-components}

Component තවත් කුඩා component බවට පත්කිරීමට බය වෙන්න එපා.

උදාහරණයක් ලෙස පහත ඇති `Comment` නැමති component එක සලකන්න:

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/VKQwEo?editors=1010)**


එය `author` (object  එකක්), `text` (string එකක් ) සහ `date` (දිනයක් ) props ලෙස බාර ගන්න අතර සමාජ මාධ්‍ය වෙබ් එකක comment එකක ආකාරය විස්තර කරනවා.

මෙම component එක වෙනස් කිරීම, එය තුල ඇති components nesting වී ඇති නිසා අපහසු විය හැකිය. තවද එහි ඇති තනි කොටස් නැවත භාවිතා කිරීමද අපහසුය. අපි දැන් එයින් components කිහිපයක් extract කරමු.

ප්‍රථමයෙන්, අපි `Avatar` extract කර ගනිමු:

```js{3-6}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

`Avatar` එය `Comment` එක තුල render වනබව දැනගැනීමට අවශ්‍යතාවයක් නොමැත. එහි prop සදහා `author` යන නමට වඩා  සමන්‍යකරණිය වූ නමක් වූ `user` දී ඇත්තේ එබැවින්ය.

component නාමකරණයේදී context එකට අනුව නම්කරනවට වඩා component එකට සාපේක්ෂව එය නම් කිරීම වඩාත් සුදුසුය.

දැන් අපට ස්වල්ප වශයෙන් `Comment` සරල කරන්න පුළුවනි.

```js{5}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

ඊළඟට, අපි user ගේ නමට එහායින් `Avatar` component එකක් render කරන `UserInfo` component එකක් extract කරන්නෙමු:

```js{3-8}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

මෙය අපට `Comment` තවදුරටත් සරලකිරීමට ඉඩ ලබාදෙනවා:

```js{4}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/rrJNJY?editors=1010)**

<<<<<<< HEAD
components extract කිරීම මුලින්ම පෙනෙනා විදියට අමිහිරි කාර්යක් මෙන් පෙනිය හැකිය, නමුත් විශාල app වලදී නැවත බාවිතා කළහැකි components රාශියක් පැවතීම වාසිදායකය. ඔබගේ UI එකේ කොටසක් කිහිප සැරයක් නැවත භාවිතා හොඳ රීතියකි. (`Button`, `Panel`, `Avatar`) නැතහොත් එය තමන්ගේම component එකක් වුවහොත් සැහෙන්න සංකීර්ණ වියහැකිය (`App`, `FeedStory`, `Comment`), එමනිසා නැවත භාවිත කළහැකි component එකක් හොඳ candidate කෙනෙක් ලෙස හදුනාගත හැකිය.
=======
Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (`Button`, `Panel`, `Avatar`), or is complex enough on its own (`App`, `FeedStory`, `Comment`), it is a good candidate to be extracted to a separate component.
>>>>>>> 6d965422a4056bac5f93f92735364cb08bcffc6b

## Props කියවීමට පමණක් හැකිය. {#props-are-read-only}

ඔබ component එකක් [function එකක් ලෙස හෝ class එකක් ලෙස](#function-and-class-components) declare කල විට, එය කවදාවත් තමන්ගේම props වෙනස් නොකළ යුතුය. මෙම `sum` නමැති function එක සලකන්න:

```js
function sum(a, b) {
  return a + b;
}
```

මෙවැනි functions ["pure"](https://en.wikipedia.org/wiki/Pure_function) ලෙස හදුන්වයි. මක්නිසාදයත් ඔවුන් තමන්ගේ inputs වෙනස් කිරීමට උත්සාහය නොදක්වයි තවද ඔවුන් නිතරම එකම input වලට එකම results ලබාදෙයි.

ඊට ප්‍රතිවිරුද්ද ලෙස, මෙම function එක impure වේ. මක්නිසාද යත් එම function එක තමන්ගේම input වෙනස් කරයි:


```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React ගොඩක් නම්යශීලී වේ. නමුත් එයට තනි දැඩි නීතියක් ඇත.

**සැම React component එකක්ම ඔවුන්ගේ props වලට සාපේක්ෂව pure function එකක් ලෙස ක්‍රියා කල යුතුය.**

ඇත්ත වශයෙන්ම, application එකක UIs ඒවා dynamic සහ කාලයත් සමඟ වෙනස් වේ. [ඊළඟ කොටසේදී](/docs/state-and-lifecycle.html) අපි "state" නමැති අලුත් සංකල්පයක් හදුන්වා දේ. State මගින් React component වල output, කාලයත් සමග user ගේ ක්‍රියාවන් වලට, network response සහ අනික් ඔනිමදෙයක් අනුරූපව ඉහත නිතිය උල්ලංනය නොකර වෙනස් කිරීමට ඉඩ ලබාදේ.