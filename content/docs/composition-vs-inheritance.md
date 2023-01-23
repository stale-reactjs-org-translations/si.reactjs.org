---
id: composition-vs-inheritance
title: Composition vs Inheritance
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

<Contacts /> සහ <Chat /> වැනි React අංග වස්තූන් වේ, එනිසා වෙනත් ඕනෑම දත්ත මෙන් මෙහිදී ඔබට pops පාස් කල හැක. මෙම උපගමනය ඔබට "slots" මතක් කරනු ඇත අනෙකුත් පුස්තකාල වල මෙන්. නමුත් React වල props ඔබට පාස් කල හැකි දේ සීමා නොකරයි.

## විශේෂීකරණය (Specialization) {#specialization}

සමහර කොටස්(components) අපි වෙනත් කොටස්වල(components) "විශේෂ අවස්ථාවන්" ලෙස සලකති. උදාහරණයක් ලෙස, අපි කියමු `WelcomeDialog` එක `Dialog`හි විශේශිත කොම්පොනන්ට් එකක් ලෙස. React වලදී, මෙයත් සංයුතියෙන් (composition) තුලින් ඉෂ්ට කරගත හැකිය, වඩාත් "විශේෂිත" සංරචක වඩාත් "පොදු" එකක් බවට පරිවර්තනය වන අතර එය props මගින් හැඩගසයි.

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

## එසේනම් Inheritance යනු කුමක්ද? {#so-what-about-inheritance}

facebookහිදී, අපි React බාවිතා කරයි දහස් ගණනක components සදහා. නමුත් අපිට inheritance කවදාහෝ අවශයා ඌවේ නැත.

Props සහ composition ඔබට අවශ්ය නිදහස ලබාදේ component වල පෙනුම හා හැසිරීම පැහැදිලිව සහ ආරක්ෂිත ආකාරයකින් සැකසීමට. සිහිකරගන්න components අත්තනෝමතික props පිළිගත හැකිය, ප්රාථමික අගයන් ඇතුළත් වේ. ප්රාථමික අගයන්  සහ React elements, හෝ functions.

<<<<<<< HEAD
 අපි යෝජනා කරමු  එය වෙනම JavaScript module එකකට එපිටීමට. එමගින් components එක ආනයනය කර විස්තීරණයකින් තොරව භාවිතා කර හැක.
=======
If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or class, without extending it.
>>>>>>> 38bf76a4a7bec6072d086ce8efdeef9ebb7af227
