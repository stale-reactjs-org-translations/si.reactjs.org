---
id: hello-world
title: Hello World
permalink: docs/hello-world.html
prev: cdn-links.html
next: introducing-jsx.html
---

කුඩාම React උදාහරණය පහළින්:

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

ඉහත උදාහරණය "Hello, world!" ලෙස Heading එකක් page එකෙහි පෙන්වයි.

[](codepen://hello-world)

ඉහලින් ඇති link එක මගින් online editor එක open කරගන්න.එයට වෙනස්කම් සිදුකරන්න, එම වෙනස්කම් output එකට බලපාන ආකාරය නිරීක්ෂණය කරන්න. මෙම උපදේශන මාලාවේ බොහෝ පිටුවල ඉහත ආකාරයේ  වෙනස්කම් කර නිරීක්ෂණය කළ හැකි උදාහරණ පවතී.


## මෙම උපදේශන මාලාව කියවන්නේ කෙසේද {#how-to-read-this-guide}

මෙම උපදෙස් මාලාවේදි අප විසින් React App එකක ඇති කොටස් පරීක්ෂා කරනවා: elements and components. ඒවා හොඳින් පුහුණු වුනු පසුව එම කුඩා Reusable කොටස් භාවිතයෙන් ඔබටත් සංකීර්ණ App එකක් නිර්මාණය කරගන්න පුළුවන්.

>ඉඟිය
>
>මෙම උපදෙස් මාලාව සකසා ඇත්ත **මෙහි ඇති සංකල්ප පියවරෙන් පියවර ඉගෙනගැනීමට කැමති අය සඳහායි**. ඔබ අත්හදා බලා ඉගෙනගැනීමට කැමති කෙනෙක්නම් අපගේ [ප්‍රායෝගික පාඩම් මාලාව](/tutorial/tutorial.html) පරීක්ෂා කරන්න. මෙම ප්‍රායෝගික පාඩම් මාලාවේ සහ උපදෙස් මාලාව යන දෙකෙහිම  වැදගත්කම් ඔබට හමුවේවි.

මෙය ප්‍රධාන React සංකල්ප උපදෙස් මාලාවේ පලමු කොටසයි. මෙහි සියළුම කොටස් navigation sidebar එකෙන් හොයාගන්න පුළුවන්. ඔබ මෙය කියවන්නේ ජංගම දුරකථනයකින් නම් navigation sidebar එක ලබාගැනීමට තිරයේ දකුණුපස පහල කෙලවරේ ඇති button එක තදකරන්න.

මෙම උපදෙස් මාලාවේ කොටස් එකිනෙකට සම්බන්ධයි. **ඔබට මෙහි ඇති “Main Concepts” කොටසෙහි ඇති උප කොටස් කියවීමෙන් React පිළිබඳ බොහෝදේ ඉගෙනගන්න පුළුවන්.** උදාහරණ, [“JSX හඳුන්වාදීම”](/docs/introducing-jsx.html) මීලඟ කොටසයි.

## ඔබසතුවිය යුතු දැනුම මට්ටම {#knowledge-level-assumptions}

React යනු JavaScript library කි, එම නිසා JavaScript  පිළිබඳ මූලික දැනුම ඔබ සතුව ඇති බව අපි උපකල්පනය කරමු. **ඒ  පිළිබඳ ඔබ සෑහීමට පත් නොවේනම් , ඔබගේ දැනුම පරීක්ෂා කර්ගැනීමට අප විසින් මෙම [JavaScript පාඩම් මාළාව](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) නිර්දේශ කරනවා** එමෙන්ම මෙම උපදෙස් මාලාව කිසිඳු ප්‍රශ්ණයකින් තොරව කරගෙන යෑමට එය උපකාරී වනු ඇත. මෙය සඳහා පැය එකයි විනාඩි 30ක කාලයක් වැය කිරීමට සිදුවේ, එහෙත් මෙය හැදෑරීමෙන් පසු ඔබට උපදෙස් මාලාව තේරුම් ගැනීම පහසු වනු ඇත.

>සටහන
>
<<<<<<< HEAD
>මෙම උපදෙස් මාළාවේ යම් අවස්ථාවලදී නව JavaScript Syntax උදාහරණ සඳහා භාවිතා කර ඇත. ඔබ පසුගිය අවුරුදු කිහිපය තුල JavaScript භාවිතා නොකළ කෙනෙක් නම්, [මෙම කරුණු තුන](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c) බොහෝසේ වැදගත්වනු ඇත.
=======
>This guide occasionally uses some newer JavaScript syntax in the examples. If you haven't worked with JavaScript in the last few years, [these three points](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c) should get you most of the way.
>>>>>>> 95e15d063b205007a92c52efb5311f76ad5a0b6c


## ආරම්භ කරමු! {#lets-get-started}

පහලට Scroll කරන්න. [උපදෙස් මාළාවේ මීලඟ කොටස](/docs/introducing-jsx.html) සඳහා Link එක වෙබ් අඩවියේ Footer එකට ඉහලින් හමුවේවි.


