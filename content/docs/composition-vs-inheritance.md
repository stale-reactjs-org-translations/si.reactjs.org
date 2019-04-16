---
id: composition-vs-inheritance
title: සංයුතිය එදිරිව ආවේණිකය
permalink: docs/composition-vs-inheritance.html
redirect_from:
  - "docs/multiple-components.html"
prev: lifting-state-up.html
next: thinking-in-react.html
---

React ප්රබල සංයුති ආකෘතියක් සමඟ පැමිණේ, එනිසා අපි නිර්දේශ කරනව සංයුතිය(composition) භාවිතා කිරීමට ආවේණිකය(inheritance) වෙනුවට components තුල නැවත භාවිතය සඳහා.

මෙම කොටසින්, ප්රශ්න කිහිපයක් අපි සලකා බලමු React වලට අලුත් developers බොහෝ විට ආවේණිකය (inheritance) භාවිතා කරන්නව, එනිසා අපි බලමු කොහොමද එවා විසදන්නෙ සංයුතියcomposition බාවිතා කර.

## 	සීමා කිරීම (Containment) {#containment}

සමහර කොටස් (components) ඔවුන්ගේ දරුවන්(children) කලින් නොදැන සිටිති. මෙය විශේෂයෙන්ම පොදු වේ `Sidebar` හෝ `Dialog`  "පෙට්ටි" නිරූපණය වන කොටස් (components) සඳහා.

අපි නිර්දේශ කරනව විශේෂය `children` prop භාවිතා කරන කොටස්(components) දරුවන්ගේ(children) මූලද්රව්ය නිශ්පාදනයට කෙලින්ම ලබා දෙන ලෙස:

```js{4}
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

මෙය වෙනත් අත්යවශ්ය අංගයන් JSX සවිකිරීම මඟින් අත්තනෝමතික ලෙස දරුවන්ට (to children) ලබා දෙයි.

```js{4-9}
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

**[CodePen මත එය උත්සාහ කරන්න](https://codepen.io/gaearon/pen/ozqNOV?editors=0010)**

`<FancyBorder>` ඇතුලත තිබෙන ඕනම JSX ටැග් එකක් `FancyBorder` තුලට යනව  `children` prop එකක් ලෙස. `FancyBorder` එක `{props.children}`  `<div>` එකක් තුල ඉදිරිපත් කරන්න නිසා, ලැබුනු elements අවසන් ප්රතිඵලය තුල දක්නට ලැබේ.

මෙය සාමාන්යයෙන් අඩු වේ, ඔබට එකකට වඩා වැඩි කුහර අවශය විය හැක සමහර කොම්පොනන්ට් වලට. එවැනි අවස්තා වලදී ඔබට ඔබගේම සම්මතය බාවිතා කල හැකිය චිල්ඩ්‍රන්ස් භාවිතා කිරීමට අමතරව:

```js{5,8,18,21}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

[**CodePen මත එය උත්සාහ කරන්න**](https://codepen.io/gaearon/pen/gwZOJp?editors=0010)

React elements like `<Contacts />` and `<Chat />` are just objects, so you can pass them as props like any other data. This approach may remind you of "slots" in other libraries but there are no limitations on what you can pass as props in React.

## Specialization {#specialization}

Sometimes we think about components as being "special cases" of other components. For example, we might say that a `WelcomeDialog` is a special case of `Dialog`.

In React, this is also achieved by composition, where a more "specific" component renders a more "generic" one and configures it with props:

```js{5,8,16-18}
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```

[**CodePen මත එය උත්සාහ කරන්න**](https://codepen.io/gaearon/pen/kkEaOZ?editors=0010)

සංයුතිය(Composition) class ලෙස අර්ථ දක්වා ඇති components සඳහාද හොඳින් ක්රියා කරයි:

```js{10,27-31}
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
```

[**CodePen මත එය උත්සාහ කරන්න**](https://codepen.io/gaearon/pen/gwZbYa?editors=0010)

## So What About Inheritance? {#so-what-about-inheritance}

At Facebook, we use React in thousands of components, and we haven't found any use cases where we would recommend creating component inheritance hierarchies.

Props and composition give you all the flexibility you need to customize a component's look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.
