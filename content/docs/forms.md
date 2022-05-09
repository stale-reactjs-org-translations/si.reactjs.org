---
id: forms
title: පෝරමයන්
permalink: docs/forms.html
prev: lists-and-keys.html
next: lifting-state-up.html
redirect_from:
  - "tips/controlled-input-null-value.html"
  - "docs/forms-zh-CN.html"
---

<<<<<<< HEAD
REACT හි HTML පෝ‍රමය ඇතුළත තිබෙන elements වල හැසිරීම වෙනත් DOM elements වලට වඩා වෙනස්වෙ. මෙයට 
හෙතුව, HTML පෝරමයේ elements ස්වාභාවයෙන්ම අභ්‍යන්තර අගයන් තබාගනු ඇත. උදාහරණයක් වශයෙන්, මෙම HTML පෝරමය තනි නමක් භාරගනු ඇත.
=======
HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:
>>>>>>> 26a870e1c6e232062b760d37620d85802750e985

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```
ඉහත HTML පෝරමයේ හැසිරීම වෙනත් සාමාන්‍ය HTML පෝරමයක් හා සමාන වේ. ඔබ පෝරමය submit කළහොත් එය Browserයේ අදාළ පිටුව වෙත ඔබව යොමු කරනු ලැබේ. නමුත් මේවැනි බොහෝ අවස්ථා වලදී ඔබට එම පෝරමයේ තිබෙන දත්තයන් අවශ්‍ය වේ. මේ සදහා javascript function එකක් ලිවීමෙන් ඔබට එම කාර්යය ඉතා පහසුවන් කරගත හැක. මෙය “පාලිත සංරචක” ක්‍රමය ලෙස හදුන්වා දී ඇත.

## පාලිත සංරචක {#controlled-component}

HTML හි, සාමාන්‍යයෙන් `<input>`, `<textarea>`, සහ `<select>` ආදී පෝරම් elements වලට ආරම්භයේදීම සමහර වටිනාකම් ඇත. එම වටිනාකම් පරිශීලක ආදාන අනුව වෙනස් වේ. නමුත් React වල සාමාන්‍යයෙන් එම වටිනාකම් තබාගනු ලබන්නේ, එම component එකේ  'state property' නමින් හදුන්වන variable එකක වේ. එම වටිනාකම් [`setState()`](/docs/react-component.html#setstate) මගින් වෙනස් කල හැකිවේ.

අපට මෙම සංකල්ප දෙක එකතු කර "පාලිත සංරචකයක්" සැදීය හැකිය. මේසදහා `single source of truth` යන ක්‍රමය භාවිතා කල යුතුය. මේයින් කරනු ලබන්නේ HTML පෝරමය නිරමාණය කරන code එකෙන්ම එම පෝරමයේ පරිශීලක ආදාන ලබාගැනීමයි. පෝරමයක element එකක value attribute, මේ ආකාරයට React මගින් පාලනය කිරීම `පාලිත සංරචක` ලෙස සැලකේ.

උදාහරණයක් වශයෙන්, ඉහත HTML code එක පාලිත සංරචකයක් ලෙස ලිවීමෙන්, පරිශීලකයා submit බටනය ක්ලික් කරනවිට අපට පරිශීලකයාගේ නම alert (log) කිරීමට හැකිවේ.

```javascript{4,10-12,21,24}
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
[**CodepPen මගින් උත්සාහකර බලන්න**](https://codepen.io/gaearon/pen/VmmPgp?editors=0010)

දැන් අපගේ පෝරම් element සඳහා value attribute එකක් දී තිබෙන නිසා, පෝරමය මගින් display කරන වටිනාකම සැමවිටම this.state.value එක වේ. මෙහි the source of truth වන්නේ React state variable එක වේ. දැන් `handleChange` මගින් සෑම keystroke එකක් සමගම React state variable එක යාවත්කාල වන බැවින් පෙන්වන අගය සැමවිටම යාවත්කාල වේ.

With a controlled component, the input's value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.

## The textarea Tag {#the-textarea-tag}

HTML හි, `<textarea>` එකේ වගන්ති ලියනු ලබන්නේ පහත ආකාරයට ළමා element ලෙසටවේ:

```html
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

නමුත් React වල, `<textarea>` මේසදහා භාවිතා කරනු ලබන්නේ `value` attribute වේ. මේආකාරයට ලිවීමෙන් `<textarea>` භාවිතා කරන පෝරමයක් අනෙකුත් තනි ආදානයක් භාවිතා කරන පෝරමයක් ලෙස ලිවිය හැකිවේ.

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

හොදින් බලන්න, අපි constructor මගින් ආරම්භයේදීම `this.state.value` එකට වටිනාකමක් (වගනිති) දුන් බැවින් text area එකේ එම වගනිති ආරම්භයේදීම පෙන්වනු ලබයි.

## තෝරන්න ටැගය {#the-select-tag}

HTML වල, `<select>` මගින් drop-down ලැයිස්තුවක් නිර්මාණය කරනු ලබයි. උදාහරණයක් වශයෙන්, පහල HTML මගින් රසකාරක drop-down ලැයිස්තුවක් නිර්මාණය කරනු ලබයි:

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

හොදින් බලන්න, `selected` attribute එක නිසා Coconut විකල්පය ආරම්භයේදීම තේරී ඇත. නමුත් React, `selected` attribute එක වෙනුවට `select` tag එකේ `value` attribute එක භාවිතා කරනු ලැබේ. පාලිත සංරචකයක මෙය ඉතා පහසුවේ මන්දයත් ඔබට එකම තැනකින් එය යාවත්කාල කිරීමට හැකිවේ. 

උදාහරණයක් වශයෙන්:

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

[**CodePen මත එය උත්සාහ කරන්න**](https://codepen.io/gaearon/pen/JbbEzX?editors=0010)

සමස්තයක් වශයෙන් `<input type="text">`, `<textarea>`, සහ `<select>` යන සියල්ලන්ගේම කර්තව්‍ය එකිනෙකට සමානවේ. එම සියල්ලටම `value` attribute එකක් ඇති බැවින්, මෙමගින් පාලිත සංරචකයක් සැදීමට පසුවේ.

> සටහන 
>
>`value` attribute එකට array එකක් යැවීමෙන්, ඔබට `select` tag එකේ බහු විකල්පයන් තෝරාගැනීමට හැකිවේ.
>
>```js
><select multiple={true} value={['B', 'C']}>
>```

## The file ආදාන ටැගය {#the-file-input-tag}

HTML හි, `<input type="file">` මගින් පරිශීලකයාට, පරිශීලකයාගේ storage device එකේ තිබෙන File එකක් හෝ කිහිපයක් තෝරාගෙන එය server එකට upload කිරීමට හෝ JavaScript [File API ](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) මගින් වෙනස් කිරීමට හැකිවේ.

```html
<input type="file" />
```

මෙහි value attribute එකේ වටිනාකම read-only බැවින් React හි මෙය  **පාලනය නොකළ** සංරචක ලෙස සැලකේ. මෙය පිළිබද වැඩිදුරට අනෙකුත් පාලනය නොකළ සංරචක සමග [පසුව](/docs/uncontrolled-components.html#the-file-input-tag) සාකච්ඡා කරනු ලැබේ.

## බහු යෙදවුම් හැසිරවීම {#handling-multiple-inputs}

සෑම පාලිත `ආදාන` elements එකකට `name` attribute එකක් යෙදීමෙන්, ඔබට පහසුවන් `event.target.name` Value එක අනුව බොහෝ පාලිත ආදාන හැසිරවීමට හැකිවේ.

උදාහරණයක් වශයෙන්:

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

[**CodePen මත එය උත්සාහ කරන්න**](https://codepen.io/gaearon/pen/wgedvV?editors=0010)


අපි ES6 භාවිතා කළ ආකාරය සැලකිල්ලට ගන්න. [computed property name](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names) මෙහි දී ඇති අනුරූප ආදාන අගය අනුව state key එක යාවත්කාල කිරීම සදහා අපි විසින් ES6 සින්ටැක්ස් භාවිතා කළෙමු.


```js{2}
this.setState({
  [name]: value
});
```

එය මෙම ES5 code එකට සමාන වේ:

```js{2}
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

තවද, `setState()` මගින් ස්වයංක්‍රීයව [අර්ධ state වත්මන් state එකට ඒකාබද්ධ කරන බැවින්](/docs/state-and-lifecycle.html#state-updates-are-merged), අපට `setState()` කතා කල යුත්තේ වෙනස් කළ කොටස් සමඟ පමණි.

## පාලිත ආදානය Null Value {#controlled-input-null-value}

<<<<<<< HEAD
[පාලිත සංරචකයක](/docs/forms.html#controlled-components) `value` property මත අගයක් සටහන් කිරීමෙන් ඔබ කැමති නැතිනම් පරිශීලකයාට ආදානය වෙනස් කිරීමට නොහැකිවේ. ඔබ අගයක් නියම කර ඇති නමුත් ආදානය තවමත් සංස්කරණය කළ හැකි නම්, ඔබ අහම්බෙන් වටිනාකම `undefined` හෝ `null` ලෙස සකසා ඇත.
=======
Specifying the `value` prop on a [controlled component](/docs/forms.html#controlled-components) prevents the user from changing the input unless you desire so. If you've specified a `value` but the input is still editable, you may have accidentally set `value` to `undefined` or `null`.
>>>>>>> 26a870e1c6e232062b760d37620d85802750e985

පහත codeය මගින් මෙය පෙන්නුම් කරයි. (ආදානය මුලින් සංස්කරණය නොකළ හැකි ඇති නමුත් කෙටි ප්‍රමාදයකින් පසුව එය සංස්කරණය කළ හැකිය.)

```javascript
ReactDOM.createRoot(mountNode).render(<input value="hi" />);

setTimeout(function() {
  ReactDOM.createRoot(mountNode).render(<input value={null} />);
}, 1000);

```

## පාලිත සංරචක සඳහා විකල්ප {#alternatives-to-controlled-components}


සෑම වෙනස් විය හැකි දත්ත සමග ඔබට event handler function එකක් ලිවීමට වෙන බැවින් සහ React component එකක් සමග ඒවායේ ආදාන state වෙනස් කිරීමට වෙන බැවින්, පාලිත සංරචක භාවිතා කිරීම සමහර විට වෙහෙසකර විය හැකිය. පෙර පැවති codebase එකක් REACT වලට පරිවර්තනය කිරීමේදී හෝ තිබෙන REACT Application එකක් non-react library එකක් සමග ඒකාබද්ධ කිරීමේදී මෙය ඉතාම කරදරකාරී වේ. මෙවන් අවස්තාවක කලයුතේ කුමක්දැයි [පාලනය නොකළ සංරචක](/docs/uncontrolled-components.html) මගින් විකල්ප ආකාරයක් විස්තර කර ඇත. 

## සම්පුර්ණ විසඳුම් {#fully-fledged-solutions}


ඔබ form validation,fields tracking සහ පෝරම් submission කිරීම ඇතුළුව සම්පූර්ණ විසඳුමක් සොයන්නේ නම් Formik ජනප්‍රිය තේරීම්වලින් එකකි. කෙසේ වෙතත්, එය ගොඩනඟා ඇත්තේ පාලිත සංරචක සහ managing state පිළිබඳ ඇති මූලධර්ම මතය — එබැවින් ඒවා ඉගෙනීම අතපසු නොකරන්න.