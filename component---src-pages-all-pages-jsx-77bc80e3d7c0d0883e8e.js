(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return c});n(52),n(199);var a=n(0),r=n.n(a),o=n(166),i=n(170);t.default=function(e){var t=e.data,n=e.location,a=t.allSitePage.edges.map(function(e){return e.node.path}).sort();return r.a.createElement(i.a,{location:n},r.a.createElement("h1",null,"Sitemap"),r.a.createElement("h2",null,"list of all pages"),r.a.createElement("ul",{style:{listStyleType:"none",marginLeft:0}},a.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(o.Link,{to:e},e))})))};var c="776107451"},166:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=n(165),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(167),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(38);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(e,t,n){var a;e.exports=(a=n(168))&&a.default||a},168:function(e,t,n){"use strict";n.r(t);n(27);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=n(55),l=n(3),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},169:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},170:function(e,t,n){"use strict";n(28),n(82),n(52);var a=n(0),r=n.n(a),o=n(172),i=n.n(o),c=n(169),l=n.n(c),u=(n(81),n(53),n(171),n(5)),s=n.n(u),d=n(166),m=n(175),p=(n(54),n(173),n(174),n(29)),f=Object(p.a)(!0),h=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)},y=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+h(t[1])+h(t[2])+h(t[3])},g=function(e){function t(t){var n;n=e.call(this,t)||this;var a="white";return"undefined"!=typeof window&&(a=document.body.className||a,document.body.className=a),n.state={theme:a},n}s()(t,e);var n=t.prototype;return n.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=y(window.getComputedStyle(document.body).getPropertyValue("background-color")),n=y(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(n,t),f("Theme: "+n+","+t)},n.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),n=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===n?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={expanded:!1},n}s()(t,e);var n=t.prototype;return n.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},n.render=function(){var e,t,n=this,a=this.props.location,o=this.state.expanded,i={Home:"/",Work:"/works/",Contact:"/contact/"},c=r.a.createElement("ul",null,Object.keys(i).map(function(e){var t=i[e];return r.a.createElement("li",{key:e},t===a.pathname?r.a.createElement("span",null,e):r.a.createElement(d.Link,{to:t},e))}));return o?(e=r.a.createElement(m.b,{className:"menu-toggle",onClick:function(){return n.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},c)):(e=r.a.createElement(m.a,{className:"menu-toggle",onClick:function(){return n.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},c)),r.a.createElement("div",{className:"navbar"},r.a.createElement(g,null),e,t)},t}(r.a.Component);t.a=function(e){var t=e.children,n=e.location,a=e.title,o=e.width,c=a;c||(c=n.pathname.slice(1,-1))&&(c=c.split("-").map(function(e){return e.replace(e[0],e[0].toUpperCase())}).join(" ")),c=c?c+" | "+l.a.title:l.a.title;var u=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," ",l.a.author)),s=o?{maxWidth:o+"px"}:{};return r.a.createElement("div",{className:"layout",style:s},r.a.createElement(i.a,{title:c},r.a.createElement("meta",{name:"description",content:l.a.description})),r.a.createElement(v,{location:n}),r.a.createElement("div",{className:"content"},t),u)}},199:function(e,t,n){"use strict";var a=n(6),r=n(14),o=n(31),i=n(18),c=[].sort,l=[1,2,3];a(a.P+a.F*(i(function(){l.sort(void 0)})||!i(function(){l.sort(null)})||!n(15)(c)),"Array",{sort:function(e){return void 0===e?c.call(o(this)):c.call(o(this),r(e))}})}}]);
//# sourceMappingURL=component---src-pages-all-pages-jsx-77bc80e3d7c0d0883e8e.js.map