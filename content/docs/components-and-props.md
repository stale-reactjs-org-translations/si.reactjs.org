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

Components ඔබට ඔබගේ  UI එක, තනි තනි කොටසට ස්වාධීනව ක්‍රියා කල හැකි, නැවත භාවිතා කල හැකි කොටස් වලට කැඩීමට ඉඩ ලබාදේ. මෙම  පිටුවේදී ඔබට components යන අදහසට අදුන්වා දීමක් සිදු කරයි. ඔබට [components වල සවිස්තරාත්මක විස්තරයක් API reference හිදී සොයාගත හැක](/docs/react-component.html).

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

## Rendering a Component {#rendering-a-component}

මීට පෙර, අපට හමුවුනේ  DOM tags නියෝජනය කරන React elements පමණි:

```js
const element = <div />;
```

කෙසේ වෙතත්, elements වලටද අප විසින් අර්ථ  දක්වන ලද components නියෝජනය කළ හැකිය:

```js
const element = <Welcome name="Sara" />;
```

React විසින් පරිශීලක-අර්ථ දැක්වු(user-defined) component එකක් නිරීක්ෂණය කරන විට, එය එම component එකට තනි object ලෙස JSX attributes ලබාදේ.  අප මෙම object එක "props" ලෙස හඳුන්වයි.

උදාහරණයක් ලෙස ගත්තොත්, පහත code එක "Hello, Sara" ලෙස වෙබ් පිටුවේ පෙන්නුම් කරයි.

```js{1,5}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

[](codepen://components-and-props/rendering-a-component)

අපි නැවත මේ උදාහරණයේ වෙන්නේ මොකක්ද කියලා බලමු:

1. අපි `ReactDOM.render()` method එක `<Welcome name="Sara" />` element සමග call කරනවා.
2. React විසින් `Welcome` component එක `{name: 'Sara'}` යන props object එකත් සමග call කරනවා.
3. අපගේ `Welcome` component එක `<h1>Hello, Sara</h1>` කියන element එක ප්‍රතිපලයක් ලෙස අපට ලබා දෙනවා.
4. React DOM විසින් කාර්යක්ෂම ලෙස  DOM එක `<h1>Hello, Sara</h1>` ට ගැලපෙන සේ යාවත්කාලින කරනවා.

>**සැලකිය යුතුයි:** හැමවෙලේම  component එකක නම capital letter එකකින් අරඹන්න.
>
>React විසින් components නම් lowercase letters එකකින් පටන් ගන්නේ නම් එය DOM tags ලෙස සලකයි. උදාහරණයක් ලෙස ගතහොත් , `<div />` මගින් HTML div tag එක නියෝජනය වන අතර, `<Welcome />` මගින් component එකක් නියෝජනය වන අතර, එම `Welcome` component එක scope එකේ තිබීම අත්‍යවශ්‍ය වේ.
>
>මෙම නාම කරණය පිටිපස ඇති හේතුන් දැන ගැනීමට අවශ්‍යනම් කරුණාකර [JSX In Depth](/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized) කියවන්න.
## Composing Components {#composing-components}

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

For example, we can create an `App` component that renders `Welcome` many times:

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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

[](codepen://components-and-props/composing-components)

Typically, new React apps have a single `App` component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like `Button` and gradually work your way to the top of the view hierarchy.

## Extracting Components {#extracting-components}

Don't be afraid to split components into smaller components.

For example, consider this `Comment` component:

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

[](codepen://components-and-props/extracting-components)

It accepts `author` (an object), `text` (a string), and `date` (a date) as props, and describes a comment on a social media website.

This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let's extract a few components from it.

First, we will extract `Avatar`:

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

The `Avatar` doesn't need to know that it is being rendered inside a `Comment`. This is why we have given its prop a more generic name: `user` rather than `author`.

We recommend naming props from the component's own point of view rather than the context in which it is being used.

We can now simplify `Comment` a tiny bit:

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

Next, we will extract a `UserInfo` component that renders an `Avatar` next to the user's name:

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

This lets us simplify `Comment` even further:

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

[](codepen://components-and-props/extracting-components-continued)

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (`Button`, `Panel`, `Avatar`), or is complex enough on its own (`App`, `FeedStory`, `Comment`), it is a good candidate to be a reusable component.

## Props are Read-Only {#props-are-read-only}

Whether you declare a component [as a function or a class](#function-and-class-components), it must never modify its own props. Consider this `sum` function:

```js
function sum(a, b) {
  return a + b;
}
```

Such functions are called ["pure"](https://en.wikipedia.org/wiki/Pure_function) because they do not attempt to change their inputs, and always return the same result for the same inputs.

In contrast, this function is impure because it changes its own input:

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React is pretty flexible but it has a single strict rule:

**All React components must act like pure functions with respect to their props.**

Of course, application UIs are dynamic and change over time. In the [next section](/docs/state-and-lifecycle.html), we will introduce a new concept of "state". State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.
