---
id: web-components
title: Web Components
permalink: docs/web-components.html
redirect_from:
  - "docs/webcomponents.html"
---

React සහ [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) විවිධ ගැටළු විසඳීමට නිමවා ඇත. නැවත භාවිතා කර හැකි component සදහා Web Components ශක්තිමත් ආවරනයක්  සපයනු ඇත, React මඟින් ඔබගේ දත්ත සමඟ සමමුහුර්ත කිරීම තබා ඇති ප්රකාශිත පුස්තකාලයක් සපයයි. මෙම ඉලක්ක දෙක එකිනෙකට අනුපූරක වේ. Developer කෙනෙකු ලෙස, ඔබේ Web Components තුළ React භාවිතා කිරීමට ඔබට නිදහස තිබේ, නැතහොත් React භාවිතා කිරීමට Web Components තුළ, හෝ දෙකම.

React භාවිතා නොකරන බොහොමයක් Web Components භාවිතා නොකරයි. නමුත් ඔබට අවශ්‍ය විය හැකිය, විශේෂයෙන්ම ඔබ Web Components  මගින් ලියා ඇති third-party UI component භාවිතා කරන්නේ නම්.

## React තුල Web Components භාවිතය {#using-web-components-in-react}

```javascript
class HelloMessage extends React.Component {
  render() {
    return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
  }
}
```

>සටහන:
>
> වෙබ් සංරචක බොහෝ විට අත්‍යවශ්‍ය API එකක් නිරාවරණය කරයි. උදා., a `video` Web Component might expose `play()` and `pause()` functions. To access the imperative APIs of a Web Component, you will need to use a ref to interact with the DOM node directly. If you are using third-party Web Components, the best solution is to write a React component that behaves as a wrapper for your Web Component.
>
> Events emitted by a Web Component may not properly propagate through a React render tree.
> You will need to manually attach event handlers to handle these events within your React components.

One common confusion is that Web Components use "class" instead of "className".

```javascript
function BrickFlipbox() {
  return (
    <brick-flipbox class="demo">
      <div>front</div>
      <div>back</div>
    </brick-flipbox>
  );
}
```

## Using React in your Web Components {#using-react-in-your-web-components}

```javascript
class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}
customElements.define('x-search', XSearch);
```

>සටහන:
>
>This code **will not** work if you transform classes with Babel. See [this issue](https://github.com/w3c/webcomponents/issues/587) for the discussion.
>Include the [custom-elements-es5-adapter](https://github.com/webcomponents/webcomponentsjs#custom-elements-es5-adapterjs) before you load your web components to fix this issue.
