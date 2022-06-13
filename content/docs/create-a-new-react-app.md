---
id: create-a-new-react-app
title: නව React යෙදුමක් නිර්මාණය කරන්න
permalink: docs/create-a-new-react-app.html
redirect_from:
  - "docs/add-react-to-a-new-app.html"
prev: add-react-to-a-website.html
next: cdn-links.html
---

හොඳ ම පරිශීලක සහ සංවර්ධක අත්දැකීමක් සඳහා ඒකාබද්ධ උපාංග කට්ටලයක් භාවිත කරන්න.

මෙම පිටුවේ පහත ආකාරයේ කාර්යයන් සඳහා සහය වන React උපාංග කට්ටල කිහිපයක් විස්තර කෙරේ:

* ලේඛන සහ ගොනු විශාල සංඛ්‍යාවක් දක්වා ව්‍යාප්ත කිරීම
* npm හි තෙවන පාර්ශව පුස්තකාල භාවිත කිරීම.
* පොදු අත්වැරදීම් කලින් හඳුනා ගැනීම.
* සංවර්ධනයේදී CSS සහ JS සජීවී සංස්කරණය.
* නිකුත් කිරීම සඳහා ප්‍රතිදානය ප්‍රශස්තකරණය කිරීම.

මෙම පිටුවේ නිර්දේශ කර ඇති උපාංග කට්ටල **භාවිතය ඇරඹීම සඳහා කිසිදු වින්‍යාසකරණයක් අවශ්‍ය නොවේ.**

## ඔබට උපාංග කට්ටලයක් අවශ්‍ය නොවනු ඇත {#you-might-not-need-a-toolchain}

ඔබ ඉහත විස්තර කර ඇති ගැටළු අත් නොදකින්නේ නම් හෝ තවම උපාංග භාවිතයට නුහුරු නම්, කැමති නම් [JSX සමඟ](/docs/add-react-to-a-website.html#optional-try-react-with-jsx), [HTML පිටුවකට `<script>` ටැගයක් ලෙස React එකතු කළ හැකිය](/docs/add-react-to-a-website.html).

මෙය **පවතින වෙබ් අඩවියකට React ඒකාබද්ධ කිරීමේ පහසුම ක්‍රමය** ද වේ. ඔබට පහසු යයි හැඟේ නම්, ඔබට සෑමවිටම වඩා විශාල උපාංග කට්ටලයක් එකතු කරගත හැකිය .

##  නිර්දේශිත උපාංග කට්ටල  {#recommended-toolchains}

React කණ්ඩායම මූලිකව පහත විසඳුම් නිර්දේශ කරයි:

- ඔබ **React ඉගෙනගන්නේ නම්** හෝ **[තනි පිටුවේ](/docs/glossary.html#single-page-application) යෙදුමක්  නිර්මාණය කරන්නේ නම්,**[Create React App](#create-react-app) භාවිත කරන්න..
- ඔබ **Node.js භාවිතයෙන් සර්වරයේ විදැහුම්කරණය වන වෙබ් අඩවියක්** ගොඩනගන්නේ නම්, [Next.js](#nextjs) උත්සාහ කරන්න.
-  ඔබ ගොඩනගන්නේ **ස්ථිතික අන්තර්ගත-කේන්ද්‍රීය වෙබ් අඩවියක්** නම්, [Gatsby](#gatsby) උත්සාහ කරන්න.
- ඔබ ගොඩනගන්නේ **සංරචක පුස්තකාලයක්** හෝ **පවතින කේත පදනම සමඟ ඒකාබද්ධතාවක් නම්**,  [වඩා නම්‍යශීලී උපාංග කට්ටල](#more-flexible-toolchains) උත්සාහ කරන්න.

### Create React App {#create-react-app}

[Create React App](https://github.com/facebookincubator/create-react-app) යනු **React ඉගෙනීම** සඳහා පහසු පරිසරයකි, සහ **නව [තනි පිටුවේ](/docs/glossary.html#single-page-application) React යෙදුමක්** ගොඩනැගීම ඇරඹීමට හොඳම මාර්ගයයි.

<<<<<<< HEAD
එය ඔබට නවතම විශේෂාංග භාවිත කිරීමට, හොඳ සංවර්ධක අත්දැකීමක් ලබා ගැනීමට සහ ඔබේ යෙදුම නිකුත් කිරීම සඳහා ප්‍රශස්තකරණය කිරීමට හැකි වන පරිදි සංවර්ධන පරිසරයක් සකසා දෙයි. මේ සඳහා [Node >= 8.10 සහ npm >= 5.6](https://nodejs.org/en/) ඔබේ පරිගණකයේ තිබිය යුතුය. ව්‍යාපෘතියක් නිර්මාණය කිරීමට දුවවන්න:
=======
It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have [Node >= 14.0.0 and npm >= 5.6](https://nodejs.org/en/) on your machine. To create a project, run:
>>>>>>> 6d965422a4056bac5f93f92735364cb08bcffc6b

```bash
npx create-react-app my-app
cd my-app
npm start
```

>සටහන
>
>පළමු පෙළෙහි `npx` යනු අක්ෂර වින්‍යාස දෝෂයක් නොවේ -- එය [npm 5.2+ සමඟ පැමිණෙන පැකේජ දිවවුම් උපාංගයකි](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

Create React App, පසු අන්තයේ තර්කයන් හෝ දත්ත ගබඩා නොහසුරුවයි; එය හුදෙක් ඕනෑම පසු අන්තයක් සමඟ භාවිත කළ හැකි පරිදි ඉදිරි අන්තයේ ගොඩනැංවුම් මාර්ගයක් නිර්මාණය කරයි. තිරයට යටින්, එය [Babel](https://babeljs.io/) සහ [webpack](https://webpack.js.org/) භාවිත කරන නමුත්, ඔබ ඒවා ගැන කිසිවක් දැනගැනීම අවශ්‍ය නොවේ.

ඔබ නිකුත් කිරීමට සූදානම් විට, `npm run build` දුවවීම මඟින් `build` ගොනුවේ ඔබේ යෙදුමේ ප්‍රශස්ත ගොඩ නැගීමක් නිර්මාණය කෙරෙනු ඇත.වැඩිදුර තොරතුරු එහි [කියවුම් පිටුවෙන්](https://github.com/facebookincubator/create-react-app#create-react-app--) සහ [පරිශීලක මාර්ගෝපදේශයෙන්](https://facebook.github.io/create-react-app/) ඉගෙන ගත හැකිය. 

### Next.js {#nextjs}

[Next.js](https://nextjs.org/) යනු React වලින් නිර්මාණය කෙරෙන **ස්ථිතික සහ සර්වරයේ විදැහුම්කරණය වන යෙදුම්** සඳහා වන ජනප්‍රිය සහ සැහැල්ලු රාමුවකි. එහි, **වහා භාවිතයට සුදානම් අලංකරණ සහ මාර්ග ස්ථානගත කිරීමේ විසඳුම්** අන්තර්ගත වන අතර,ඔබ සර්වර පරිසරය ලෙස [Node.js](https://nodejs.org/) භාවිත කරන බව උපකල්පනය කරයි.

[Next.js හි නිල මාර්ගොපදේශයෙන්](https://nextjs.org/learn/) ඉගෙන ගන්න.

### Gatsby {#gatsby}

[Gatsby](https://www.gatsbyjs.org/) යනු React සමඟ **ස්ථිතික වෙබ් අඩවි** නිර්මාණය කිරීමට ඇති හොඳම ක්‍රමයයි. එය ඔබට සංරචක භාවිත කිරීමට ඉඩදෙන අතර, පූර්ව විදැහුම්කරණය වූ HTML සහ CSS ප්‍රතිදානය කරමින් වේගවත්ම නැංවුම් කාලයක් සහතික කරයි.

[ඔවුන්ගේ නිල මාර්ගෝපදේශයෙන්](https://www.gatsbyjs.org/docs/) සහ [ ආරම්භක කට්ටල සමූහයකින්](https://www.gatsbyjs.org/docs/gatsby-starters/) Gatsby ඉගෙනගත හැකිය.

### වඩා නම්‍යශීලී උපාංග කට්ටල {#more-flexible-toolchains}

පහත උපාංග කට්ටල වැඩිදුර නම්‍යශීලතාව  සහ තේරීමේ හැකියාවන් පිරිනමයි. අපි මේවා වඩාත් අත්දැකීම සහිත පරිශීලකයන්ට නිර්දේශ කරන්නෙමු: 

- **[Neutrino](https://neutrinojs.org/)** පූර්ව සැකසුම් වල සරලත්වය සමඟ [webpack](https://webpack.js.org/)හි බලය සංයුක්ත කර, [React යෙදුම්](https://neutrinojs.org/packages/react/) සහ [React සංරචක](https://neutrinojs.org/packages/react-components/). සඳහා පූර්ව සැකසුමක් අන්තර්ගත කරයි.

- **[Nx](https://nx.dev/react)** යනු React, Next.js, [Express](https://expressjs.com/) සහ තවත් ඒවා සඳහා නිසග සහය දක්වන, පූර්ණ අන්ත තනි කේත නිධි සංවර්ධනය සඳහා  වන උපාංග කට්ටලයකි.

<<<<<<< HEAD
- **[Parcel](https://parceljs.org/)** යනු [React සමඟ ක්‍රියාත්මක වන](https://parceljs.org/recipes.html#react), වේගවත්, ශුන්‍ය වින්‍යාසකරණ වෙබ් යෙදුම් ගොනු කරණයකි.
=======
- **[Parcel](https://parceljs.org/)** is a fast, zero configuration web application bundler that [works with React](https://parceljs.org/recipes/react/).
>>>>>>> 6d965422a4056bac5f93f92735364cb08bcffc6b

- **[Razzle](https://github.com/jaredpalmer/razzle)** යනු කිසිදු වින්‍යාසකරණයක් අවශ්‍ය නොවන, නමුත් Next.js ට වඩා නම්‍යශීලී  සර්වර විදැහුම්කරණ ක්‍රමලේඛ රාමුවකි.

## මුල සිට උපාංග කට්ටලයක් නිර්මාණය කිරීම {#creating-a-toolchain-from-scratch}

JavaScript නිමැවුම් උපාංග කට්ටලයක් පහත ඒවායින් සමන්විත වේ:

* **පැකේජ කළමනාකාරකයක්**, උදා: [Yarn](https://yarnpkg.com/) හෝ [npm](https://www.npmjs.com/). එය ඔබට අති විශාල තෙවන පාර්ශයීය පැකේජවලින් වාසි ලබා ගැනීමට, ඒවා පහසුවෙන් ස්ථාපනය කිරීමට සහ යාවත්කාලීන කිරීමට ඉඩ සලසයි.

* **පොදි සකසනය**ක්, උදාහරණ: [webpack](https://webpack.js.org/) හෝ [Parcel](https://parceljs.org/). එය ඔබට මොඩියුල ආකාරයෙන් කේත ලිවීමට සහ නැංවුම් කාලය ප්‍රශස්තකරණය කිරීම සඳහා කේතය කුඩා පැකේජවලට බෙදා ගොනු කිරීමට ඉඩ දේ.

* **සම්පාදකය**ක්. උදාහරණ: [Babel](https://babeljs.io/). එය ඔබට නවීන ආරයට රචිත කේතය පැරණි ගවේෂකවල ද දුවවීමට ඉඩ සලසයි. 

ඔබ විසින් ඔබගේම උපාංග කට්ටලයක් මුල සිට සකසා ගැනීමට ඔබ වඩාත් කැමති නම්, Create React App හි සමහර විශේෂාංග ප්‍රතිනිර්මාණය කරන [මෙම මාර්ගෝපදේශය පරීක්ෂා කරන්න.](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)

ඔබේ අභිරුචි උපාංග කට්ටලය [අවසන් නිෂ්පාදනය සඳහා නිවැරදිව සකසා ඇති බවට](/docs/optimizing-performance.html#use-the-production-build) සහතික වීමට අමතක නොකරන්න.
