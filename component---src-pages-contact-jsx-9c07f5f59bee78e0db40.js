(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(200),o=a(170);t.default=function(e){var t=e.location;return r.a.createElement(o.a,{location:t},r.a.createElement("h1",null,"Contact"),r.a.createElement("div",{className:"layout23"},r.a.createElement("div",null,r.a.createElement("h2",null,"other ways to connect"),r.a.createElement("ul",{className:"contact"},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:nop@iamnop.com"},r.a.createElement(l.b,null),"nop@iamnop.com")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://twitter.com/nopjia"},r.a.createElement(l.f,null),"twitter.com/nopjia")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://github.com/nopjia/"},r.a.createElement(l.d,null),"github.com/nopjia")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://nopjia.blogspot.com/"},r.a.createElement(l.a,null),"nopjia.blogspot.com")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.linkedin.com/in/nopjia"},r.a.createElement(l.e,null),"linkedin.com/in/nopjia")),r.a.createElement("li",null,r.a.createElement("a",{href:"/jiarathanakul.pdf"},r.a.createElement(l.c,null),"download resume")))),r.a.createElement("div",null,r.a.createElement("h2",null,"see also"),r.a.createElement("p",null,r.a.createElement("a",{href:"http://old.iamnop.com/"},"old website")))))}},166:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(2),o=a.n(l),i=a(165),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var u=a(167),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},167:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},168:function(e,t,a){"use strict";a.r(t);a(27);var n=a(0),r=a.n(n),l=a(2),o=a.n(l),i=a(55),c=a(3),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},169:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},170:function(e,t,a){"use strict";a(28),a(82),a(52);var n=a(0),r=a.n(n),l=a(172),o=a.n(l),i=a(169),c=a.n(i),u=(a(81),a(53),a(171),a(5)),s=a.n(u),m=a(166),d=a(175),p=(a(54),a(173),a(174),a(29)),h=Object(p.a)(!0),f=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)},E=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+f(t[1])+f(t[2])+f(t[3])},g=function(e){function t(t){var a;a=e.call(this,t)||this;var n="white";return"undefined"!=typeof window&&(n=document.body.className||n,document.body.className=n),a.state={theme:n},a}s()(t,e);var a=t.prototype;return a.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=E(window.getComputedStyle(document.body).getPropertyValue("background-color")),a=E(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(a,t),h("Theme: "+a+","+t)},a.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),a=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===a?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={expanded:!1},a}s()(t,e);var a=t.prototype;return a.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},a.render=function(){var e,t,a=this,n=this.props.location,l=this.state.expanded,o={Home:"/",Work:"/works/",Contact:"/contact/"},i=r.a.createElement("ul",null,Object.keys(o).map(function(e){var t=o[e];return r.a.createElement("li",{key:e},t===n.pathname?r.a.createElement("span",null,e):r.a.createElement(m.Link,{to:t},e))}));return l?(e=r.a.createElement(d.b,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},i)):(e=r.a.createElement(d.a,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},i)),r.a.createElement("div",{className:"navbar"},r.a.createElement(g,null),e,t)},t}(r.a.Component);t.a=function(e){var t=e.children,a=e.location,n=e.title,l=e.width,i=n;i||(i=a.pathname.slice(1,-1))&&(i=i.split("-").map(function(e){return e.replace(e[0],e[0].toUpperCase())}).join(" ")),i=i?i+" | "+c.a.title:c.a.title;var u=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," ",c.a.author)),s=l?{maxWidth:l+"px"}:{};return r.a.createElement("div",{className:"layout",style:s},r.a.createElement(o.a,{title:i},r.a.createElement("meta",{name:"description",content:c.a.description})),r.a.createElement(y,{location:a}),r.a.createElement("div",{className:"content"},t),u)}}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-9c07f5f59bee78e0db40.js.map