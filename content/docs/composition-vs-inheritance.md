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

සමහර කොටස් (components) ඔවුන්ගේ දරුවන්(children) කලින් නොදැන සිටිති. මෙය විශේෂයෙන්ම පොදු වේ `Sidebar` or `Dialog`  "පෙට්ටි" නිරූපණය වන කොටස් (components) සඳහා.

We recommend that such components use the special `children` prop to pass children elements directly into their output:

```js{4}
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

This lets other components pass arbitrary children to them by nesting the JSX:

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

**[Try it on CodePen](https://codepen.io/gaearon/pen/ozqNOV?editors=0010)**

Anything inside the `<FancyBorder>` JSX tag gets passed into the `FancyBorder` component as a `children` prop. Since `FancyBorder` renders `{props.children}` inside a `<div>`, the passed elements appear in the final output.

While this is less common, sometimes you might need multiple "holes" in a component. In such cases you may come up with your own convention instead of using `children`:

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

[**Try it on CodePen**](https://codepen.io/gaearon/pen/gwZOJp?editors=0010)

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

[**Try it on CodePen**](https://codepen.io/gaearon/pen/kkEaOZ?editors=0010)

Composition works equally well for components defined as classes:

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

[**Try it on CodePen**](https://codepen.io/gaearon/pen/gwZbYa?editors=0010)

## So What About Inheritance? {#so-what-about-inheritance}

At Facebook, we use React in thousands of components, and we haven't found any use cases where we would recommend creating component inheritance hierarchies.

Props and composition give you all the flexibility you need to customize a component's look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.
