---
id: conditional-rendering
title: Conditional Rendering
permalink: docs/conditional-rendering.html
prev: handling-events.html
next: lists-and-keys.html
redirect_from:
  - "tips/false-in-jsx.html"
---

React තුලදි ඔබට අවශ්ය වෙනස් behaviors සදහා වෙන වෙනම components සදා ගත හෑක. ඉන්පසු state එක මත එවායින් සමහරක් පමනක් render කරගත හෑක.

React තුලදි Conditional rendering වැඩ කරන්නේ javascript තුල සමාන්‍ය conditions වැඩකරන ආකරයටමය. [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) සහ [conditional operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) භාවිතා කර අපට අවශ්‍ය UI Components පමනක් පෙනෙන පරිදි state එකෙ values update කල හැකියි

පහත උදාහරන 2 බලන්න:

```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

දැන් අපි `Greeting` component එක create කර user log ඌවාද නැතිද condition එක මත ඉහත components 2න් එකක් display කරයි 

```javascript{3-7,11,12}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/ZpVxNq?editors=0011)

මෙහිදී `isLoggedIn` value එක මත වෙනස් component එකක් render වෙ‍යි

### Element Variables {#element-variables}

ඔබට variable එකක අදාල elements තබා ගෙන component එකකින් කොටසක් පමනක් render කල හැක.

පහත  Logout සහ Login buttons බලන්න:

```js
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```
මෙම උදාහරනයේදි අපි  `LoginControl` නම් [stateful component](/docs/state-and-lifecycle.html#adding-local-state-to-a-class)  එක සදාගන්නවා

එය වර්තමාන state එක මත `<LoginButton />` හෝ `<LogoutButton />` ද, පෙර උදහරනයෙන් `<Greeting />` component එකද render කරයි

```javascript{20-25,29,30}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/QKzAgB?editors=0010)

යම් variable එකක් declare කර සහ if එකක් භාවිතා කිරීම conditionally render කිරීම සඳහා කදිම ක්රමයකි, සමහර විට ඔබට කෙටි syntax එකක් භාවිතා කිරීමට අවශ්ය විය හැකිය. JSX හි inline conditions ලිවීම දැක්වෙන කරුණු පැහැදිලි කිරීම සඳහා ක්රම කිහිපයක් පහත ඇත.

### Inline If with Logical && Operator {#inline-if-with-logical--operator}

<<<<<<< HEAD
ඔබ සඟල වරහන් මගින් JSX හි ඕනෑම [expression](/docs/introducing-jsx.html#embedding-expressions-in-jsx) එකක් යෙදිය හැක. මේ සදහා javascript logical `&&` operator එක භාවිතා වේ. මූලද්රව්යයක් ඇතුළු conditionally පාවිච්චි කිරිමට එය ප්රයෝජනවත් විය හැකිය.
=======
You may [embed expressions in JSX](/docs/introducing-jsx.html#embedding-expressions-in-jsx) by wrapping them in curly braces. This includes the JavaScript logical `&&` operator. It can be handy for conditionally including an element:
>>>>>>> 25cc703d1f23f1782ff96c5c7882a806f8741ec4

```js{6-10}
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/ozJddz?editors=0010)

එය ක්රියාකරන්නේ JavaScript, `true && expression` සෑම විටම `expression` එක නිරාවරණය කරන අතර `false && expression` සෑම විටම  `false` වලින් නවතී

එබැවින් කොන්දේසිය සත්යය නම්, '&&' පසුව ඇති element එක output එක තුල දිස්වනු ඇත. එය අසත්ය නම්, React විසින් නොසලකා හරිනු ඇත.

### Inline If-Else with Conditional Operator {#inline-if-else-with-conditional-operator}

කොන්දේසි සහිතව අංගයන් render කිරීම සඳහා තවත් ක්රමයක් වන්නේ JavaScript conditional operator භාවිතා කිරීමයි [`condition ? true : false`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

පහත දැක්වෙන උදාහරණයේදී, අපි කුඩා text block එකක් කොන්දේසිගත ලෙස යොදා ගනිමු.

```javascript{5}
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

එය අවශ්‍ය තරමට පැහැදිලි නොවුනත් එය විශාල expressions සඳහා ද භාවිතා කළ හැකිය:

```js{5,7,9}
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}
```

JavaScript හි ඇති ආකාරයට, ඔබ වඩාත් හොඳින් කියවා ඇති පරිදි ඔබ සහ ඔබේ කණ්ඩායම පිළිබඳව ඔබ විසින් සහ ඔබේ කණ්ඩායම මත පදනම් වූ සුදුසු code style එකක් තෝරා ගැනීමට ඔබට තීරණය වේ. conditions සංකීර්ණ වූ විට එය [extract a component](/docs/components-and-props.html#extracting-components) භාවිතා කිරීමට හොඳ කාලයක් විය හැකිය.

### Preventing Component from Rendering {#preventing-component-from-rendering}

කලාතුරකින් component එකක් තවත් component එකකින් render වුවද එය සැඟවීමට අවශ්ය විය හැකිය. මෙම ආපසු පැමිණීම වෙනුවට එහි ප්රතිදානය වෙනුවට.මේ සදහා රෙන්ඩෙර් ඔඋට්පුට් එක වෙනුවට `null` return කරන්න.

පහත දැක්වෙන උදාහරණයේ, `WarningBanner` යනු warn prop එකේ අගය මත පදනම්ව render වන එකකි.එහි අගය false නම් `WarningBanner` එකක render නොවේ

```javascript{2-4,29}
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/Xjoqwm?editors=0010)

`null` return කල පසු component එකෙහි render මෙතොඩ් එකට react lifecycle methods වලින් බලපෑමක් නැත.නමුත් `componentDidUpdate` ක්‍රියා කරනු ඇත
