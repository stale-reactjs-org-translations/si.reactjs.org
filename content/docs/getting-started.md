---
id: getting-started
title: ආරම්භ කිරීම
permalink: docs/getting-started.html
next: add-react-to-a-website.html
redirect_from:
  - "docs/"
  - "docs/index.html"
  - "docs/getting-started-ko-KR.html"
  - "docs/getting-started-zh-CN.html"
  - "docs/installation.html"
  - "download.html"
  - "downloads.html"
  - "docs/try-react.html"
  - "docs/tooling-integration.html"
  - "docs/package-management.html"
  - "docs/language-tooling.html"
  - "docs/environments.html"
---

මෙම පිටුව React ප්‍රලේඛනයේ සහ ආශ්‍රිත ලේඛනවල සාරාංශයකි.

**React** යනු පරිශීලක අතුරුමුහුණත් නිර්මාණය කිරීම සඳහා වන JavaScript වලින් රචනා කරන ලද පුස්තකාලයකි. අපේ [මුල් පිටුවෙන්](/) හෝ [නිබන්ධනයෙන්](/tutorial/tutorial.html) React යනු සම්පුර්ණයෙන්ම කවරක්දැයි ඉගෙන ගන්න.

---

- [React අත්හදා බලන්න](#try-react)
- [React ඉගෙනගන්න](#learn-react)
- [දැනුම්වත් ව සිටින්න](#staying-informed)
- [පිටපත්කරණය කරන ලද ප්‍රලේඛනය](#versioned-documentation)
- [යමක් මඟහැරී ඇත්ද?](#something-missing)

## React අත්හදා බලන්න{#try-react}
React මුල සිටම සැලසුම් කර ඇත්තේ ක්‍රමික භාවිතය සඳහා වන අතර **ඔබට හැකිතරම් කුඩා හෝ හැකිතරම් විශාල ආකාරයකින්, ඔබේ අවශ්‍යතාව පරිදි එය භාවිත කළ හැකිය**. ඔබට React පිළිබඳ හුදෙක් අදහසක් ගැනීමට, සරල HTML පිටුවකට ක්‍රියාකාරීත්වයක් එක් කිරීමට හෝ සංකීර්ණ React වලින් බලගැන්වුණු යෙදුමක් ඇරඹීමට යන මේවායින් කවරක් හෝ සඳහා මෙම කොටසේ ඇති සබැඳීන් උපකාරී වනු ඇත. 

### මාර්ගගතව අත්හදා බැලීම {#online-playgrounds}

ඔබ React අත්හදා බැලීමට කැමති නම්, ඔබට මාර්ගගත ක්‍රමලේඛ වේදිකාවක් ඒ සඳහා භාවිත කළ හැකිය. 
[CodePen](codepen://hello-world), [CodeSandbox](https://codesandbox.io/s/new), [Glitch](https://glitch.com/edit/#!/remix/starter-react-template), හෝ [Stackblitz](https://stackblitz.com/fork/react). හි Hello World අච්චුව අත්හදා බලන්න

ඔබේම පෙළ සංස්කාරකයක අත්හදා බැලීමට කැමති නම්, ඔබට [මෙම HTML ලේඛනය](https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html) බාගත කර, සංස්කරණය කර ඔබේ අන්තර්ජාල ගවේෂකයේ විවෘත කර බැලීමටද හැකිය. මෙහිදී සිදු වන්නේ මන්දගාමී ධාවන කාල කේත පරිණාමනයකි, එමනිසා අප විසින් මෙය නිර්දේශ කරනු ලබන්නේ සරල ආදර්ශන සඳහා පමණි.

### වෙබ් අඩවියකට React එකතු කිරීම {#add-react-to-a-website}

ඔබට [HTML පිටුවකට මිනිත්තුවකින් React එක් කළ හැකිය](/docs/add-react-to-a-website.html). ඉන් පසුව ඔබට වෙබ් යෙදුම තුළ එහි භාවිතය ක්‍රමිකව ව්‍යාප්ත කිරීම හෝ සීමිත ගතික සංරචක කිහිපයකට පමණක් සීමා කිරීම කළ හැකිය.

### නව React යෙදුමක් නිර්මාණය කිරීම {#create-a-new-react-app}

React ව්‍යාපෘතියක් ඇරඹීමේදී, [<script> ටැග අන්තර්ගත සරල HTML පිටුවක්](/docs/add-react-to-a-website.html) ම හොඳම විකල්පය වනු ඇත. එය සකස් කර ගැනීමට ගත වන්නේ මිනිත්තුවක් පමණි!

නමුත් ඔබේ යෙදුම වර්ධනය වත්ම, ඔබට වඩාත් ඒකාබද්ධ ව්‍යාපෘති සැකසුමක් සලකා බැලීමට බොහෝ දුරට සිදුවනු ඇත. විශාල පරිමාණයේ යෙදුම් සඳහා අප විසින් නිර්දේශ කරන JavaScript උපාංග කට්ටල කිහිපයක්ම ඇත. එම සෑම කට්ටලයකටම අල්ප අමතර සැකසුමක් හෝ කිසිදු අමතර සැකසුමකින් තොරව ක්‍රියාත්මක විය හැකි අතර පොහොසත් React පද්ධතියේ උපරිම වාසිය ලබා ගැනීමට ද ඔබට ඉඩ සලසයි. [කෙසේදැයි ඉගෙනගන්න](/docs/create-a-new-react-app.html)

## React ඉගෙනගන්න {#learn-react}

React ඉගෙනීමට විවිධ පසුබිම් සහිත සහ විවිධ ඉගෙනුම් ආකාර අනුගමනය කරන පුද්ගලයන් පැමිණෙති. ඔබ වඩාත් ප්‍රිය කරන්නේ වඩා සෛද්ධාන්තික හෝ ප්‍රායෝගික ක්‍රමවේදයක්ද යන්න මත, මෙම කොටස ඔබට ප්‍රයෝජනවත් වනු ඇතැයි අපි විශ්වාස කරමු.

* ඔබ **ප්‍රායෝගික ඉගෙනීමකට** වඩාත් කැමති නම්, අපගේ [ප්‍රායෝගික නිබන්ධනය](/tutorial/tutorial.html) සමඟ ආරම්භ කරන්න.
* ඔබ **පියවරෙන් පියවර සංකල්ප ඉගෙනීමට** වඩාත් කැමති නම්, අපගේ [ප්‍රධාන සංකල්ප සඳහා මාර්ගෝපදේශනය](/docs/hello-world.html) සමඟ ආරම්භ කරන්න.

වෙනත් ඕනෑම නුපුරුදු තාක්ෂණයක් ඉගෙනීමේදී සේම, React හි ද යම් ඉගෙනුම් කාලයක් තිබේ. පුහුණුවීම් සහ යම් ඉවසීමක් තුළින් ඔබට එම කාලය පහසුවෙන් පසු කළ **හැකි වනු ඇත.**

### පළමු උදාහරණ {#first-examples}

React මුල් පිටුවෙහි සජීවී සංස්කාරකයක් සමඟ කුඩා React උදාහරණ කිහිපයක් අන්තර්ගත වේ. ඔබ තවමත් React පිළිබඳ කිසිවක් නොදන්නෙකු වුවත්, එම උදාහරණවල කේතයට වෙනස්කම් සිදුකර ඒවා අවසාන ප්‍රතිඵලයට බලපෑම් කරන්නේ කෙසේදැයි නිරීක්ෂණය කිරීමට උත්සහ කරන්න.

### ආධුනිකයන් සඳහා React {#react-for-beginners}

React ප්‍රලේඛනය ඔබට හුරුපුරුදු වේගයට වඩා වැඩි වේගයකින් කරුණු විස්තර කරන බව ඔබට හැඟේ නම්, [ටානියා රාශියාගේ මෙම React පිළිබඳ විශ්ලේෂණය](https://www.taniarascia.com/getting-started-with-react/) නරඹන්න. එය, විස්තරාත්මක සහ ආධුනිකයන්ට තේරුම් ගැනීමට පහසු ආකාරයකින්  වඩාත් වැදගත් React සංකල්ප හඳුන්වා දෙයි. එය නැරඹීමෙන් පසුව, නැවත වරක් ප්‍රලේඛනය අනුගමනය කිරීමට උත්සාහ කරන්න.

### නිර්මාණකරුවන් සඳහා React   {#react-for-designers}

ඔබ නිර්මාණකරණ පසුබිමකින් පැමිණෙන්නේ නම්, React ඉගෙනීම ඇරඹීමට මෙම [ඉගෙනුම් සම්පත්](https://reactfordesigners.com/) කදිමය.

### JavaScript සම්පත් {#javascript-resources}

The React documentation assumes some familiarity with programming in the JavaScript language. You don't have to be an expert, but it's harder to learn both React and JavaScript at the same time.

We recommend going through [this JavaScript overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.

>ඉඟිය
>
>Whenever you get confused by something in JavaScript, [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [javascript.info](https://javascript.info/) are great websites to check. There are also [community support forums](/community/support.html) where you can ask for help.

### ප්‍රයෝගික නිබන්ධනය {#practical-tutorial}

If you prefer to **learn by doing,** check out our [practical tutorial](/tutorial/tutorial.html). In this tutorial, we build a tic-tac-toe game in React. You might be tempted to skip it because you're not into building games -- but give it a chance. The techniques you'll learn in the tutorial are fundamental to building *any* React apps, and mastering it will give you a much deeper understanding.

### පියවරෙන් පියවර මාර්ගෝපදේශනය {#step-by-step-guide}

If you prefer to **learn concepts step by step,** our [guide to main concepts](/docs/hello-world.html) is the best place to start. Every next chapter in it builds on the knowledge introduced in the previous chapters so you won't miss anything as you go along.

### React වලින් සිතීම {#thinking-in-react}

Many React users credit reading [Thinking in React](/docs/thinking-in-react.html) as the moment React finally "clicked" for them. It's probably the oldest React walkthrough but it's still just as relevant.

### නිර්දේශිත පාඨමාලා {#recommended-courses}

සමහරෙකුට නිල ප්‍රලේඛනයට වඩා තෙවන පාර්ශ්වයක පොත් සහ වීඩියෝ පාඨමාලා උපකාරී වන අවස්ථා තිබේ. අපි [පොදුවේ නිර්දේශිත එවැනි ඉගෙනුම් සම්පත් ලැයිස්තුවක්](/community/courses.html) (සමහර නොමිල ඉගෙනුම් සම්පත් ද ඇතුළත්ව) නඩත්තු කරන්නෙමු

### උසස් සංකල්ප {#advanced-concepts}

ඔබ React හි [ප්‍රධාන සංකල්ප](/docs/hello-world.html) හොඳින් ප්‍රගුණ කර සහ React භාවිතයෙන් යම් තාක් දුරට වෙබ් සංවර්ධනය කර තිබේනම්, මේ වනවිට React හි වඩාත් උසස් සංකල්ප පිළිබඳ ඔබ කැමැත්තෙන් පසුවනු ඇත. මෙම කොටස විසින් ඔබට React හි බලවත්, එහෙත් නිතර භාවිත නොවන [context](/docs/context.html) සහ [refs](/docs/refs-and-the-dom.html)  වැනි විශේෂාංග හඳුන්වා දෙනු ඇත.

### යෙදුම් ක්‍රමලේඛ අතුරුමුහුණත් යොමුව{#api-reference}

This documentation section is useful when you want to learn more details about a particular React API. For example, [`React.Component` API reference](/docs/react-component.html) can provide you with details on how `setState()` works, and what different lifecycle methods are useful for.

### පාරිභාෂික පද මාලාව සහ නිතර අසන ප්‍රශ්න{#glossary-and-faq}

The [glossary](/docs/glossary.html) contains an overview of the most common terms you'll see in the React documentation. There is also a FAQ section dedicated to short questions and answers about common topics, including [making AJAX requests](/docs/faq-ajax.html), [component state](/docs/faq-state.html), and [file structure](/docs/faq-structure.html).

## නිතර දැනුවත්ව සිටීම {#staying-informed}

React කණ්ඩායමෙන් ලැබෙන යාවත්කාලීන කිරීම් වල නිල ප්‍රභවය වන්නේ [React බ්ලොග් අඩවිය](/blog/)යි. නිකුත් කිරීම් සහ යල්පැන යාමේ නිවේදන ද ඇතුළත්ව සියලු වැදගත් දෑ පළමුවෙන් පළකරනු ලබන්නේ එහිදීය.

ඔබට ට්වීටර් හි [@reactjs ගිණුම](https://twitter.com/reactjs) අනුගමනය කිරීමට ද හැකි නමුත්, ඔබ බ්ලොග් අඩවිය පමණක් කියවන්නෙකු වුවද කිසිදු අත්‍යවශ්‍ය නිවේදනයක් මඟ නොහැරෙනු ඇත. 

Not every React release deserves its own blog post, but you can find a detailed changelog for every release in the [`CHANGELOG.md` file in the React repository](https://github.com/facebook/react/blob/master/CHANGELOG.md), as well as on the [Releases](https://github.com/facebook/react/releases) page.

## පිටපත්කරණය කරන ලද ප්‍රලේඛනය {#versioned-documentation}

මෙම ප්‍රලේඛනය සැමවිටම React හි නවතම ස්ථාවර පිටපත නියෝජනය කරයි. React 16 සිට, පැරණි ප්‍රලේඛන පිටපත් [වෙනම පිටුවක](/versions)දී සොයාගත හැකිය.  පැරණි ප්‍රලේඛන පිටපත් එක් අවස්ථාවක් නිරූපණය වන පරිදි පිටපත් කොට ගබඩා කර ඇති බවත්, ඒවා දිගින් දිගටම යාවත්කාලීන නොවන බවත් සලකන්න.

## යමක් මඟහැරී ඇත්ද? {#something-missing}

ප්‍රලේඛනයෙන් කිසියම් දෙයක් මඟහැරී ඇත්නම් හෝ කිසියම් කොටසක් වටහා ගැනීමට අපහසු බව හැඟේ නම්, වැඩිදියුණු කිරීම සඳහා ඔබේ අදහස් ද සමඟ, කරුණාකර [ප්‍රලේඛන නිධියේහි](https://github.com/reactjs/reactjs.org/issues/new) ගැටළුවක් පළකරන්න. එසේත් නැත්නම් [@reactjs ගිණුම](https://twitter.com/reactjs) වෙත ට්වීට් කරන්න.අපි ඔබට සවන්දීමට කැමැත්තෙමු!
