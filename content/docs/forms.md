---
id: forms
title: Forms
permalink: docs/forms.html
prev: lists-and-keys.html
next: lifting-state-up.html
redirect_from:
  - "tips/controlled-input-null-value.html"
  - "docs/forms-zh-CN.html"
---

REACT වල HTML පෝ‍රමය ඇතුළත තිබෙන elements වල හැසිරීම වෙනත් DOM elements වලට වඩා වෙනස්වෙ. මෙයට 
හෙතුව, HTML පෝරමයේ elements ස්වාභාවයෙන්ම අභ්‍යන්තර වටිනකම් තබාගනු ඇත. උදාහරණයක් වශයෙන්, මෙම HTML පෝරමය තනි නමක් භාරගනු ඇත.

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```
ඉහත HTML පෝරමයේ හැසිරීම වෙනත් සාමාන්‍ය HTML පෝරමයක් හා සමාන වේ. ඔබ පෝරමය submit කළහොත් එය browser යේ අදාළ පිටුව වෙත  ඔබව යොමු කරනු ලැබේ. නමුත් මේවැනි බොහෝ අවස්ථා වලදී ඔබට එම පෝරමයේ තිබෙන දත්තයන් අවශ්‍ය වේ. මේ සදහා javascript function එකක් ලිවීමෙන් ඔබට එම කාර්යය ඉතා පහසුවන් කරගත හැක. මෙය “controlled components” ක්‍රමය ලෙස හදුන්වා දී ඇත.

## Controlled Components {#controlled-components}

HTML වල, සාමාන්‍යයෙන් `<input>`, `<textarea>`, සහ `<select>` ආදී පෝරම් elements වලට ආරම්භයේදීම සමහර වටිනාකම් ඇත. එම වටිනාකම් user input අනුව වෙනස් වේ. නමුත් React වල සාමාන්‍යයෙන් එම වටිනාකම් තබාගනු ලබන්නේ, එම component එකේ  'state property' නමින් හදුන්වන variable එකක වේ. එම වටිනාකම් [`setState()`](/docs/react-component.html#setstate) මගින් වෙනස් කල හැකිවේ.

අපට මෙම සංකල්ප දෙක එකතු කර "controlled component" එකක් සැදීය හැකිය. මේසදහා `single source of truth` යන ක්‍රමය භාවිතා  කල යුතුය. මේයින් කරනු ලබන්නේ HTML පෝරමය නිරමාණය කරන code එකෙන්න්ම එම පෝරමයේ user input ලබාගැනීමයි. පෝරමයක element එකක value attribute, මේ ආකාරයට react මගින් පාලනය කිරීම `controlled component` ලෙස සැලකේ.

උදාහරණයක් වශයෙන්, ඉහත HTML code එක controlled component ලෙස ලිවීමෙන්, user submit බටනය ක්ලික් කරනවිට අපට userගේ නම alert (log) කිරීමට හැකිවේ.

```javascript{4,10-12,24}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
[**CodepPen එක මගින් උත්සාහකර බලන්න**](https://codepen.io/gaearon/pen/VmmPgp?editors=0010)

දැන් අපගේ පොරම් element එකට value attribute එකක් දී තිබෙන නිසා, පෝරමය මගින් display කරන වටිනාකම සැමවිටම this.state.value එක වේ. මෙහි the source of truth වන්නේ React state variable එක වේ. දැන් `handleChange` මගින් සෑම keystroke එකක් සමගම React state variable එක යාවත්කාල වන බැවින් the displayed value සැමවිටම යාවත්කාල වේ.

controlled component එකක් සමග සෑම state වෙනස්වීමකට එයට සංගමි handler function එකක් ඇත, එමනිසා ඔබට සරලව හා ඉතා පහසුවෙන් user input වෙනස් කීරීමට හෝ වලංගු කිරීමට හැකිවේ. උදාහරණයක් වශයෙන්, ඔබට user input සියල්ල ලොකු අකුරෙන් අවශ නම් අපට `handleChange` පහත ආකාරයට ලිවිය හැක.

```javascript{2}
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()});
}
```

## The textarea Tag {#the-textarea-tag}

In HTML, a `<textarea>` element defines its text by its children:

HTML වල `<textarea>` එකේ වගන්ති ලියනු ලබන්නේ පහත ආකාරයට ළමා සංරචකයක් ලෙසටවේ:

```html
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

In React, a `<textarea>` uses a `value` attribute instead. This way, a form using a `<textarea>` can be written very similarly to a form that uses a single-line input:

නමුත් React වල `<textarea>` මේසදහා බාවිතා කරනු ලබන්නේ `value` attribute වේ. මේආකාරයට ලිවීමෙන් `<textarea>` බාවිතා කරන ෆෝරමයක්  අනෙකුත් තනි input එකක් බාවිතා කරන ෆෝරමයක් ලෙස ලිවිය හැකිවේ.

```javascript{4-6,12-14,26}
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Notice that `this.state.value` is initialized in the constructor, so that the text area starts off with some text in it.
හොදින් බලන්න, අපි constructor මගින් ආරම්බයෙදීම `this.state.value` එකට වටිනාකමක් (වගනිති) දුන් බැවින් text area එකේ එම වගනිති අරමයෙදීම පෙන්වනු ලබයි.

## The select Tag {#the-select-tag}

In HTML, `<select>` creates a drop-down list. For example, this HTML creates a drop-down list of flavors:

HTML වල, `<select>` මගින් drop-down ලැයිස්තුවක් නිර්මාණය කරනු ලබයි. උදාහරණයක් වශයෙන්, පහල HTML මගින් ෆ්ලේවර් drop-down ලැයිස්තුවක් නිර්මාණය කරනු ලබයි:

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

Note that the Coconut option is initially selected, because of the `selected` attribute. React, instead of using this `selected` attribute, uses a `value` attribute on the root `select` tag. This is more convenient in a controlled component because you only need to update it in one place. For example:

හොදින් බලන්න, `selected` attribute එක නිසා Coconut විකල්පය ආරම්බයේදීම තේරී ඇත. නමුත් React, `selected` attribute එක වෙනුවට `select` tag එකේ `value` attribute එක බාවිතා කරනු ලැබේ.  controlled component එකක මෙය ඉතා පහසුවේ මන්දයත් ඔබට එකම තැනකින් එය යාවත්කාල කිරීමට හැකිවේ. උදාහරණයක් වශයෙන්:

```javascript{4,10-12,24}
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/JbbEzX?editors=0010)

Overall, this makes it so that `<input type="text">`, `<textarea>`, and `<select>` all work very similarly - they all accept a `value` attribute that you can use to implement a controlled component.

සමස්තයක් වශයෙන් `<input type="text">`, `<textarea>`, සහ `<select>` යන සියල්ලන්ගේම කර්තව්‍ය එකිනෙකට සමානවේ. එම සියල්ලටම `value` attribute එකක් ඇති බැවින්, මෙමගින් controlled component සැදීමට පසුවේ.

> Note
>
> You can pass an array into the `value` attribute, allowing you to select multiple options in a `select` tag:
>
>```js
><select multiple={true} value={['B', 'C']}>
>```

## The file input Tag {#the-file-input-tag}

In HTML, an `<input type="file">` lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications).

```html
<input type="file" />
```

Because its value is read-only, it is an **uncontrolled** component in React. It is discussed together with other uncontrolled components [later in the documentation](/docs/uncontrolled-components.html#the-file-input-tag).

## Handling Multiple Inputs {#handling-multiple-inputs}

When you need to handle multiple controlled `input` elements, you can add a `name` attribute to each element and let the handler function choose what to do based on the value of `event.target.name`.

For example:

```javascript{15,18,28,37}
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/wgedvV?editors=0010)

Note how we used the ES6 [computed property name](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names) syntax to update the state key corresponding to the given input name:

```js{2}
this.setState({
  [name]: value
});
```

It is equivalent to this ES5 code:

```js{2}
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

Also, since `setState()` automatically [merges a partial state into the current state](/docs/state-and-lifecycle.html#state-updates-are-merged), we only needed to call it with the changed parts.

## Controlled Input Null Value {#controlled-input-null-value}

Specifying the value prop on a [controlled component](/docs/forms.html#controlled-components) prevents the user from changing the input unless you desire so. If you've specified a `value` but the input is still editable, you may have accidentally set `value` to `undefined` or `null`.

The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)

```javascript
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);

```

## Alternatives to Controlled Components {#alternatives-to-controlled-components}

It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out [uncontrolled components](/docs/uncontrolled-components.html), an alternative technique for implementing input forms.

## Fully-Fledged Solutions {#fully-fledged-solutions}

If you're looking for a complete solution including validation, keeping track of the visited fields, and handling form submission, [Formik](https://jaredpalmer.com/formik) is one of the popular choices. However, it is built on the same principles of controlled components and managing state — so don't neglect to learn them.
