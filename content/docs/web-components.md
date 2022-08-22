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
> වෙබ් සංරචක බොහෝ විට අත්‍යවශ්‍ය API එකක් නිරාවරණය කරයි. උදා., a `video` Web Component නිරාවරණය කල හැකිය `play()` and `pause()` functions. Web Component හි අත්යවශ්ය APIs තුලට ප්‍රවේශ වීමට , DOM නෝඩ් සමඟ කෙලින්ම අන්තර් ක්‍රියා කිරීමට ඔබට ref එකක් භාවිතා කිරීමට අවශ්‍ය වනු ඇත. ඔබ third-party Web Components භාවිතා කරන්නේනම්, හොඳම විසඳුම  ඔබගේ Web Component මත ආවරණයක් ලෙස ක්‍රියා කරන React component ලිවීමයි.
>
> Web Component මගින් විමෝචනය කල Events  නිසි ලෙස React render tree මගින් ප්‍රචාරය නොකෙරේ.
> ඔබට එම සිද්දීන් manually අමිණිය යුතුය ඔබගේ React components තුලට.

එක් පොදු ව්යාකූල දෙයක් වන්නෙ Web Components "className"  වෙනුවට "class" භාවිතා කරයි.

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

## Web Components තුල  React භාවිතය {#using-react-in-your-web-components}

```javascript
class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<a href={url}>{name}</a>);
  }
}
customElements.define('x-search', XSearch);
```

>සටහන:
>
>This code **will not** work if you transform classes with Babel. See [this issue](https://github.com/w3c/webcomponents/issues/587) for the discussion.
>Include the [custom-elements-es5-adapter](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs#custom-elements-es5-adapterjs) before you load your web components to fix this issue.
