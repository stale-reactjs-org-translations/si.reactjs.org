---
id: portals
title: ද්වාර
permalink: docs/portals.html
---

ද්වාර යනු parent සංරචකයේ DOM ධූරාවලියෙන් බාහිරව පිහිටන children සංරචක, එම DOM ධූරාවලියේ විදහා දැක්වීමට භාවිතා කරන පළමු පෙල ක්‍රමයකි.

```js
ReactDOM.createPortal(child, container)
```

පළමු පරාමිතිය (`child`) ලෙස ඕනෑම [විදහා දැක්විය හැකි React child සංරචකයක්](/docs/react-component.html#render), හෝ එවැනි මූලික කොටසක්, වාක්‍යක්, හෝ ඛණ්ඩයක් ආදානය කල යුතුය. දෙවන පරාමිතිය (`container`) ලෙස DOM සංරචකයක් ඇතුලත් කල යුතුය.

## භාවිතය {#usage}

සාමාන්‍යයෙන්, ඔබ සංරචකයේ render උපයෝගීතාව මගින් යමක් ප්‍රතිදානය කල විට, එය ළඟම ඇති parent සංරචකයෙහි child සංරචකයක් ලෙස DOM තුලට එක් වෙයි:

```js{4,6}
render() {
  // React mounts a new div and renders the children into it
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```

කෙසේ වෙතත්, සමහර අවස්ථාවන්හිදී DOM හි වෙනත් ස්ථානයකට child සංරචකයක් ඇතුළත් කිරීම ප්‍රයෝජනවත් වේ:

```js{6}
render() {
  // React does *not* create a new div. It renders the children into `domNode`.
  // `domNode` is any valid DOM node, regardless of its location in the DOM.
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

ද්වාර වල සාමාන්‍ය භාවිතය නම්, parent සංරචකයක `overflow: සැඟවුන` හෝ` z-index` ශෛලිය ඇති විට, එසේ උවද ඔබට දෘශ්‍යමය වශයෙන් child සංරචකයෙහි රැඳවුමක් "වෙන් කර දැක්වීමට" child සංරචකය අවශ්‍යය වූ විටදී. උදාහරණ ලෙස, විමසීම් කවුලු (modal), චලනය කල හැකි කාඩ්පත් සහ මෙවලම් ඉඟි දැක්විය හැක.

> සටහන:
>
>ද්වාර සමඟ වැඩ කරන විට, මතක තබා ගන්න [යතුරු පුවරුව නාභිගත කිරීම](/docs/accessibility.html#programmatically-managing-focus) ඉතා වැදගත් වන බව.
>
<<<<<<< HEAD
> විමසීම් කවුලු (modal) සඳහා [WAI-ARIA මාදිලියේ අනුමත කිරීමේ භාවිතයන්](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) සෑම කෙනෙකුටම එම කවුලු සමඟ අන්තර් ක්‍රියා කළ හැකි බවට වග බලා ගන්න.
=======
> For modal dialogs, ensure that everyone can interact with them by following the [WAI-ARIA Modal Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/).
>>>>>>> 38bf76a4a7bec6072d086ce8efdeef9ebb7af227

[**CodePen මගින් උත්සාහ කරන්න**](https://codepen.io/gaearon/pen/yzMaBd)

## ද්වාර හරහා සිදුවීම් බුබුලු {#event-bubbling-through-portals}

DOM ධූරාවලියේ ඕනෑම තැනක ද්වාරයක් තිබිය හැකි වුවද, එය අනෙක් සෑම ආකාරයකින්ම සාමාන්‍ය React child සංරචකයක් ලෙස හැසිරේ. Context වැනි විශේෂාංග child සංරචකය ද්වාරයක් වූවද ඉතාමත් සමාන ආකරයෙන්ම ක්‍රියා කරන්වා, මක්නිසාදයත් ද්වාරය තවමත් *React ධූරාවලිය* හි තිබෙන නිසා *DOM ධූරාවලිය* හි පිහිටීම කෙසේවුවත්.

සිදුවීම් බුබුලු මෙයට ඇතුළත්ය. ද්වාරයක් තුළ සිට ක්‍රියත්මක කරනු ලැබූ සිදුවීමක්, එම සිදුවීම *DOM ධූරාවලිය* මගින් පැවත එන්නක් නොවන විට දී වුවත්, *React ධූරාවලිය* අඩංගු පැවත එන්නන් වෙතට ප්‍රචාරණය කරනු ඇත. පහත දැක්වෙන HTML ව්යුහය උපකල්පනය කිරීම:

```html
<html>
  <body>
    <div id="app-root"></div>
    <div id="modal-root"></div>
  </body>
</html>
```

`#app-root` හි ඇති `Parent` සංරචකයට, අල්ලා නොගත් බුබුලු සිදුවීමක් `#modal-root` සහෝදර නෝඩය මගින් අල්ලා ගැනීමට හැකි වේ.

```js{28-31,42-49,53,61-63,70-71,74}
// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

const root = ReactDOM.createRoot(appRoot);
root.render(<Parent />);
```

[**CodePen මගින් උත්සාහ කරන්න**](https://codepen.io/gaearon/pen/jGBWpE)

Parent සංරචකයක් තුළ ද්වාරයකින් බුබුලු සිදුවීමක් අල්ලා ගැනීම ද්වාරයන් මත සහජයෙන්ම රඳා නොපවතින වඩාත් නම්‍යශීලී වියුක්ත කිරීම් වර්ධනය කිරීමට ඉඩ සලසයි. උදාහරණයක් වශයෙන්, ඔබ `<Modal />` සංරචකයක් ඉදිරිපත් කරන්නේ නම්, ද්වාරය භාවිතයෙන් එය නිර්මානය කළ ද යන්න නොසලකා Parent සංරචකයට එහි සිදුවීම් ග්‍රහණය කර ගත හැකිය.
