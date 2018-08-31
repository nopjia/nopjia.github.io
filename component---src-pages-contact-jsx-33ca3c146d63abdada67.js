(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(212),o=a(185);t.default=function(e){var t=e.location;return r.a.createElement(o.a,{location:t},r.a.createElement("h1",null,"Contact"),r.a.createElement("div",{className:"layout23"},r.a.createElement("div",null,r.a.createElement("h2",null,"other ways to connect"),r.a.createElement("ul",{className:"contact"},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:nop@iamnop.com"},r.a.createElement(l.FaEnvelope,null),"nop@iamnop.com")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://twitter.com/nopjia"},r.a.createElement(l.FaTwitter,null),"twitter.com/nopjia")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://github.com/nopjia/"},r.a.createElement(l.FaGithub,null),"github.com/nopjia")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://nopjia.blogspot.com/"},r.a.createElement(l.FaBlogger,null),"nopjia.blogspot.com")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.linkedin.com/in/nopjia"},r.a.createElement(l.FaLinkedin,null),"linkedin.com/in/nopjia")),r.a.createElement("li",null,r.a.createElement("a",{href:"/jiarathanakul.pdf"},r.a.createElement(l.FaFileAlt,null),"download resume")))),r.a.createElement("div",null,r.a.createElement("h2",null,"see also"),r.a.createElement("p",null,r.a.createElement("a",{href:"http://old.iamnop.com/"},"old website")))))}},181:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=a(180),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var u=a(182),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},182:function(e,t,a){var n;e.exports=(n=a(183))&&n.default||n},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=a(36),c=a(1),u=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(i.a,{location:t,pageResources:a})};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},184:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},185:function(e,t,a){"use strict";a(35),a(87),a(85);var n=a(0),r=a.n(n),l=a(187),o=a.n(l),i=a(184),c=a.n(i),u=(a(86),a(55),a(186),a(9)),s=a.n(u),m=a(181),d=a(191),p=(a(188),a(189),a(190),a(27)),h=Object(p.a)(!0),f=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)},E=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+f(t[1])+f(t[2])+f(t[3])},g=function(e){function t(t){var a;a=e.call(this,t)||this;var n="white";return"undefined"!=typeof window&&(n=document.body.className||n,document.body.className=n),a.state={theme:n},a}s()(t,e);var a=t.prototype;return a.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=E(window.getComputedStyle(document.body).getPropertyValue("background-color")),a=E(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(a,t),h("Theme: "+a+","+t)},a.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),a=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===a?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={expanded:!1},a}s()(t,e);var a=t.prototype;return a.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},a.render=function(){var e,t,a=this,n=this.props.location,l=this.state.expanded,o={Home:"/",Work:"/works/",Contact:"/contact/"},i=r.a.createElement("ul",null,Object.keys(o).map(function(e){var t=o[e];return r.a.createElement("li",{key:e},t===n.pathname?r.a.createElement("span",null,e):r.a.createElement(m.Link,{to:t},e))}));return l?(e=r.a.createElement(d.GoX,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},i)):(e=r.a.createElement(d.GoThreeBars,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},i)),r.a.createElement("div",{className:"navbar"},r.a.createElement(g,null),e,t)},t}(r.a.Component);t.a=function(e){var t=e.children,a=e.location,n=e.title,l=e.width,i=n;i||(i=a.pathname.slice(1,-1)),i&&(i=i.split("-").map(function(e){return e.replace(e[0],e[0].toUpperCase())}).join(" ")),i=i?i+" | "+c.a.title:c.a.title;var u=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," ",c.a.author)),s=l?{maxWidth:l+"px"}:{};return r.a.createElement("div",{className:"layout",style:s},r.a.createElement(o.a,{title:i},r.a.createElement("meta",{name:"description",content:c.a.description})),r.a.createElement(v,{location:a}),r.a.createElement("div",{className:"content"},t),u)}}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-33ca3c146d63abdada67.js.map