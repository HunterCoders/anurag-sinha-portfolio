(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[8,10],{150:function(e,t,l){},67:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l.n(n);l(69);t.default=function(e){const{title:t}=e;return a.a.createElement("div",{className:"header"},t)}},75:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l.n(n),i=l(144),c=l(121),o=l(162),r=l(15),s=l(52),m=l.n(s),u=l(67),d=l(21),p=l(25);l(150);const y={ulStyle:{listStylePosition:"outside",paddingLeft:20},subtitleContainerStyle:{marginTop:10,marginBottom:10},subtitleStyle:{display:"inline-block"},inlineChild:{display:"inline-block"},itemStyle:{marginBottom:10}};t.default=function(e){const t=Object(n.useContext)(r.a),{header:l}=e,[s,E]=Object(n.useState)(null);return Object(n.useEffect)(()=>{fetch(d.a.experiences,{method:"GET"}).then(e=>e.json()).then(e=>E(e.experiences)).catch(e=>e)},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(u.default,{title:l}),s?a.a.createElement("div",{className:"section-content-container"},a.a.createElement(c.a,null,a.a.createElement(i.Timeline,{lineColor:t.timelineLineColor},s.map(e=>a.a.createElement(m.a,null,a.a.createElement(i.TimelineItem,{key:e.title+e.dateText,dateText:e.dateText,dateInnerStyle:{background:t.accentColor},style:y.itemStyle,bodyContainerStyle:{color:t.color}},a.a.createElement("h2",{className:"item-title"},e.title),a.a.createElement("div",{style:y.subtitleContainerStyle},a.a.createElement("h4",{style:{...y.subtitleStyle,color:t.accentColor}},e.subtitle),e.workType&&a.a.createElement("h5",{style:y.inlineChild},"\xa0\xb7"," ",e.workType)),a.a.createElement("ul",{style:y.ulStyle},e.workDescription.map(e=>a.a.createElement("div",{key:e},a.a.createElement("li",null,a.a.createElement(o.a,{children:e,components:{p:"span"}})),a.a.createElement("br",null)))))))))):a.a.createElement(p.default,null))}}}]);
//# sourceMappingURL=8.d96db6d6.chunk.js.map