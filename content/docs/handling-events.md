---
id: handling-events
title: Handling Events
permalink: docs/handling-events.html
prev: state-and-lifecycle.html
next: conditional-rendering.html
redirect_from:
  - "docs/events-ko-KR.html"
---

React elements එක්ක events හැසිරවීමත් DOM elements වලින් events හැසිරවීමට ගොඩක් සමානයි. Syntax වල පොඩි පොඩි වෙනස්කම් ටිකක් තියෙනවා.

* React events නම් කරන්න භාවිතා කරන්නේ lowercase නෙමෙයි camelCase.
* JSX වලදි event handler එක විදිහට යවන්නේ string එකක් නෙමෙයි function එකක්.

උදාහරණයක් විදිහට පහල තියෙන HTML code එක බලන්න.

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

ඒකම React වලන් ලියද්දි ටිකක් වෙනස් වෙනවා මේ වගේ.

```js{1}
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

තවත් වෙනස්කමක් තමයි React වලදි ඔයාට element එකක default behavior එක නවත්තන්න return `false` භාවිතා කරන්න බැහැ. ඔයා අනිවාර්යෙන්ම `preventDefault` භාවිතා කරන්න ඕනි.
උදාහරණයක් විදිහට plain HTML වලින් link එකක සාමාන්‍ය හැසිරීම (default behavior) නවත්තන්න ඒ කියන්නෙ link එක click කලාම  අලුත් page එකක් open වෙන එක නවත්තන්න පහල තියෙන code එකෙන් පුලුවන් වුනත්:

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

React වලින් link එකක default behavior නවත්තන්න නම් මේ වගෙ code එකක් ලියන්න ඕනි:

```js{2-5,8}
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

<<<<<<< HEAD
මෙතනදි `e` කියල කියන්නෙ synthetic event  එකක්. React වල synthetic event define කරල තියෙන්නෙ [W3C spec](https://www.w3.org/TR/DOM-Level-3-Events/) වලට අනුකූලව හින්ද ඔයා cross browser compatibility ගැන වද වෙන්න ඕනි නැහැ. ඔයාට මේ ගැන තව විස්තර දැනගන්න ඕනි නම් [`SyntheticEvent` reference guide](/docs/events.html) එක කියවල බලන්න.
=======
Here, `e` is a synthetic event. React defines these synthetic events according to the [W3C spec](https://www.w3.org/TR/DOM-Level-3-Events/), so you don't need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the [`SyntheticEvent`](/docs/events.html) reference guide to learn more.
>>>>>>> abcf0358d43caa0772e599949458df9e6578489a

React වලදි ඔයාට පුලුවන් element එකක් හදල පස්සෙ `addEventListener` method එක call කරල Event Listener එකක් add කරනව වෙනුවට element එක initially render වෙන තැනින්ම Event Listener එකක් add කරන්න.

[ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) වලින් component එකක් define කරද්දි පොදු සම්මතයක් විදිහට event handler එකත් class එකේ method එකක් විදිහට ලියනව. උදාහරණයක් විදිහට පහල තියෙන “ ON” සහ “OFF” state මාරුකරන්න පුලුවන් button එකක් තියෙන `Toggle` component එක බලන්න:

```js{6,7,10-14,18}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/xEmzGg?editors=0010)

JSX callbacks වලදි `this` කියන keyword එකේ භාවිතය සම්බන්ධයෙන් ඔයා ගොඩක් සැලකිලිමත් වෙන්න ඕනි. මොකද JavaScript වලදි class වල methods කිසිම එකක් default [bind](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) වෙලා නැහැ. ඒ කියන්නේ බැරිවෙලාවත් ඔයා `this.handleClick` කියන method එක bind කරන්නෙ නැතුව `onClick` එකට pass කලොත්  `onClick` function එක call වෙන වෙලාවෙදි `this` වල value එක `undefined` විදිහට තමයි තියෙන්නේ.

මේක React වලට ආවේණික behavior එකක් නෙමෙයි. මේ තමයි [JavaScript වල functions වැඩ කරන විදිහ](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/). JavaScript වලදි ඔයා method call එකට පස්සෙ `()` නැතුව method එකක් refer කරනවනම්, ඒ කියන්නේ `onClick={this.handleClick}` code එකේදි වගේ; ඔයා අනිවාර්යෙන්ම ඒ method එක bind කරල තියෙන්න ඕනි.

ඔයා `bind`  method එක call කරන්න වැඩි කැමැත්තක් නැතිනම් ඔයාට මේ වැඩේ කරගන්න තව ක්‍රම දෙකක් තියෙනව. ඔයාට පුලුවන් තාම පර්යේෂණ මට්ටමේ තියෙන [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/)  එකේ විදිහට class fields භාවිතා කරල callbacks bind කරන්න.

```js{2-6}
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

මේ ක්‍රමය තමයි [Create React App](https://github.com/facebookincubator/create-react-app) වල by default භාවිතා කරන්නේ.

ඔයා class fields syntax එක භාවිතා කරන්නත් කැමති නැති කෙනෙක්නම් ඔයාට පුලුවන් callback එකේදි [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) එකක් භාවිතා කරල මේ වැඩේ කරගන්න.

```js{7-9}
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

මේ ක්‍රමයේ තියෙන අවුල තමයි `LogginButton` එක render වෙන හැමවෙලාවකම අලුත් callback එකක් create වෙන එක. ගොඩක් වෙලාවට මේක ඔයාට ගැටලුවක් වෙන්නෙ නෑ. හැබැයි මේ callback එක prop එකක් විදිහට lower component වලට pass කලොත් ඒ component වල අනවශ්‍ය re-rendering ටිකක් කරන්න වෙනවා. ඔයාට මේ වගේ performance ගැටලු මගහැරගන්න අවශ්‍ය නම් අපි ඉහත සදහන් කරපු අනිත් ක්‍රම 2 වන constructor එකේ bind කරන ක්‍රමය හෝ class fields syntax  ක්‍රමය පාවිච්චි  කරන්න පුලුවන්.

## Event Handlers වලට Arguments pass කිරීම{#passing-arguments-to-event-handlers}

loop එකක් අතුලෙදි event handler එකකට extra parameter එකක් pass කරන්න වෙන වෙලාවන් තියෙනවා. උදාහරණයක් විදිහට `id` කියන්නෙ row ID එකනම් පහල තියෙන code line දෙකම හරියට වැඩ කරන්න ඕනි.

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

පළවෙනි line එකේ [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) භාවිතා කරල, දෙවෙනි line එකේ [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) භාවිතා කරල තිබුන වුනත් මේ තියෙන line දෙකෙන්ම වෙන්නෙ එකම වැඩේ.

ඉහත අවස්ථා දෙකේදිම ID එකට පස්සේ argument එකක් විදිහට `e` කියන නමින් React event එක function එකට pass කරනව.  අපිට arrow function භාවිතයෙදි `e` වෙනමම pass කරන්න වුනත් `bind` method භාවිතා කරනවනම් එහෙම කරන්න අවශ්‍ය නැහැ. 
