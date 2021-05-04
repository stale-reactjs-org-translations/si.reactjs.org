---
id: faq-internals
title: Virtual DOM සහ Internals
permalink: docs/faq-internals.html
layout: docs
category: FAQ
---

<!-- ### What is the Virtual DOM? {#what-is-the-virtual-dom} -->
### Virtual Dom යනු කුමක්ද? {#what-is-the-virtual-dom}

Virtual Dom යනු programming සංකල්පයක් වන අතර එය ideal හෝ "virtual", UI නිරූපණයක් මතකයේ තබාගෙන ReactDOM වැනි පුස්තකාලයක් මගින් “සැබෑ” DOM සමඟ ඒකාබද්ධ කරයි. මෙම ක්‍රියාවලිය [ප්‍රතිසන්ධානය (Reconciliation)](/docs/reconciliation.html) ලෙස හැඳින්වේ. 
 

මෙම ප්‍රවේශය ප්‍රකාශන React API වලට ඉඩ සපයනු ලබයි:UI හි සිටිය යුත්තේ කුමන තත්වයටදැයි ඔබ React වලට පවසන අතර, එමඟින් ඩොම් එම තත්වයට ගැලපෙන බව සහතික කරයි. මෙය ඔබගේ යෙදුම තැනීම සඳහා වෙනත් ආකාරයකින් භාවිතා කිරීමට සිදුවන ගුණාංග හැසිරවීම, සිදුවීම් හැසිරවීම සහ අතින් DOM යාවත්කාලීන කිරීම සාරාංශ කරයි.


“virtual DOM” යනු විශේෂිත තාක්‍ෂණයකට හෝ රටාවකට වඩා වැඩි දෙයක් බැවින් මිනිසුන්  එය විවිදකාරයෙන් අදහස් කරයි. React ලෝකයේ, “virtual DOM” යන පදය සාමාන්‍යයෙන් React සංරචකය [(React elements)](/docs/rendering-elements.html) සමඟ සම්බන්ධ වන්නේ ඒවා පරිශීලක අතුරුමුහුණත නියෝජනය කරන වස්තු වන බැවිනි. කෙසේ වෙතත්, React, component tree පිළිබඳ අමතර තොරතුරු රඳවා ගැනීමට "fibers" යනුවෙන් හැඳින්වෙන අභ්‍යන්තර වස්තූන් ද භාවිතා කරයි. ඒවා ප්‍රතික්‍රියා වලදී “virtual DOM” ක්‍රියාත්මක කිරීමේ කොටසක් ලෙස ද සැලකිය හැකිය.

### Shadow DOM සහ Virtual DOM  සමානද? {#is-the-shadow-dom-the-same-as-the-virtual-dom}

නැත, ඒවා වෙනස් ය. Shadow DOM යනු browser තාක්‍ෂණයකි. ඒවා මූලික වශයෙන් වෙබ් සංරචකවල scoping variables සහ CSS සඳහා නිර්මාණය කර ඇත.
Virtual DOM යනු browser API මත ජාවාස්ක්‍රිප්ට් හි පුස්තකාල විසින් ක්‍රියාත්මක කරන ලද සංකල්පයකි.

###  "React Fiber" යනු කුමක්ද? {#what-is-react-fiber}

Fiber යනු React 16 හි නව ප්‍රතිසන්ධාන (reconciliation) එන්ජිමයි. එහි ප්‍රධාන ඉලක්කය වන්නේ virtual DOM හි විදැහුම්කරණය (rendering) සක්‍රීය කිරීමයි. [තවත් කියවන්න](https://github.com/acdlite/react-fiber-architecture).


