---
id: faq-ajax
title: AJAX and APIs
permalink: docs/faq-ajax.html
layout: docs
category: FAQ
---

### මම කොහොමද AJAX call එකක් යවන්නේ? {#how-can-i-make-an-ajax-call}

ඔබට පුළුවන් ඔබ කැමති ඕනෙම AJAX library එකක් React සමග පාවිචි කරන්න. සමහර ප්‍රසිද්ධ ඒවා නම් [Axios](https://github.com/axios/axios), [jQuery AJAX](https://api.jquery.com/jQuery.ajax/), සහ browser තුල ඉදිකර ඇති  [window.fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### component lifecycle ඒකේ කොතනදිද මම AJAX call එකක් යැවිය යුත්තේ? {#where-in-the-component-lifecycle-should-i-make-an-ajax-call}

ඔබ AJAX calls එකක් සමග දත්ත ලබා ගත යුත්තේ [`componentDidMount`](/docs/react-component.html#mounting) lifecycle method එක තුලය. මෙම නිසා ඔබට දත්ත ලැබුනු පසුව `setState` මගින් component එක යාවත්කාලීන කල හැකිය.

### උදාහරණය: AJAX ප්‍රතිපල මගින් local state එක සැකසීම. {#example-using-ajax-results-to-set-local-state}

`componentDidMount` එක තුල සිට AJAX call එකක් මගින් local component state එකේ දත්ත සැකසීම පහල component එකෙන් පෙන්වා දෙයි. 

උදාහරණයට දී ඇති API එක තුලින් මේවැනි JSON object එකක් ලබා ගත හැක:

```
{
  "items": [
    { "id": 1, "name": "Apples",  "price": "$2" },
    { "id": 2, "name": "Peaches", "price": "$5" }
  ] 
}
```

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
```

Here is the equivalent with [Hooks](https://reactjs.org/docs/hooks-intro.html): 

```js
function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.name}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}
```
