(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{179:function(e,t,a){"use strict";a.r(t),a(85);var n=a(0),r=a.n(n),i=a(186),o=(a(87),a(88),a(57),a(55),a(187),a(86),a(214),a(56),a(9)),c=a.n(o),l=a(194),u=["featured","hidden"],s=function(e){function t(){var t;return(t=e.call(this)||this).state={category:"graphics"},t}return c()(t,e),t.prototype.render=function(){var e=this,t=this.props.items,a=this.state.category,n=t.reduce(function(e,t){return t.tags.forEach(function(t){e[t]=!0}),e},{all:!0});u.forEach(function(e){delete n[e]});var i=[];return Object.keys(n).forEach(function(t,n){n>0&&i.push(", "),t===a?i.push(r.a.createElement("span",{key:t,className:"category selected"},t)):i.push(r.a.createElement("span",{key:t,className:"category",onClick:function(){e.setState(function(e){return{category:t}})}},t))}),t=(t=t.filter(function(e){return!e.tags.includes("hidden")})).filter(function(e){return"all"===a||e.tags.includes(a)}),r.a.createElement("div",null,r.a.createElement("p",{className:"work-list"},r.a.createElement("b",null,"Categories: "),i),r.a.createElement("div",{className:"works"},t.map(function(e){return r.a.createElement(l.a,{key:e.title,title:e.title,slug:e.fields.slug,image:e.images[0]})})))},t}(r.a.Component);a.d(t,"pageQuery",function(){return d}),t.default=function(e){var t=e.location,a=e.data.allWorksJson.edges.map(function(e){return e.node});return r.a.createElement(i.a,{location:t,width:900},r.a.createElement("h1",null,"Work"),r.a.createElement("h2",null,"what ","I've"," been working on"),r.a.createElement(s,{items:a}))};var d="2201809215"},182:function(e,t,a){var n;e.exports=(n=a(184))&&n.default||n},183:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=a(181),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(182),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=a(35),l=a(1),u=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:a})};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},185:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(188),o=a.n(i),c=a(185),l=a.n(c),u=(a(86),a(55),a(187),a(85),a(9)),s=a.n(u),d=a(183),m=a(192),p=(a(189),a(190),a(191),a(27)),f=Object(p.a)(!0),h=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)},g=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+h(t[1])+h(t[2])+h(t[3])},y=function(e){function t(t){var a;a=e.call(this,t)||this;var n="white";return"undefined"!=typeof window&&(n=document.body.className||n,document.body.className=n),a.state={theme:n},a}s()(t,e);var a=t.prototype;return a.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=g(window.getComputedStyle(document.body).getPropertyValue("background-color")),a=g(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(a,t),f("Theme: "+a+","+t)},a.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),a=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===a?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={expanded:!1},a}s()(t,e);var a=t.prototype;return a.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},a.render=function(){var e,t,a=this,n=this.props.location,i=this.state.expanded,o={Home:"/",Work:"/works/",Contact:"/contact/"},c=r.a.createElement("ul",null,Object.keys(o).map(function(e){var t=o[e];return r.a.createElement("li",{key:e},t===n.pathname?r.a.createElement("span",null,e):r.a.createElement(d.Link,{to:t},e))}));return i?(e=r.a.createElement(m.GoX,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},c)):(e=r.a.createElement(m.GoThreeBars,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},c)),r.a.createElement("div",{className:"navbar"},r.a.createElement(y,null),e,t)},t}(r.a.Component);t.a=function(e){var t,a=e.children,n=e.location,i=e.title,c=e.width,u=i;u||(u=(u=n.pathname).charAt(1).toUpperCase()+u.slice(2,-1)),t=u?u+" | "+l.a.title:l.a.title;var s=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Nop Jiarathanakul")),d=c?{maxWidth:c+"px"}:{};return r.a.createElement("div",{className:"layout",style:d},r.a.createElement(o.a,{title:t}),r.a.createElement(v,{location:n}),r.a.createElement("div",{className:"content"},a),s)}},194:function(e,t,a){"use strict";a(87),a(88);var n=a(0),r=a.n(n),i=a(183);t.a=function(e){var t,a=e.title,n=e.slug,o=e.image;return r.a.createElement(i.Link,{className:"item",to:n},r.a.createElement("div",{className:"image-wrap"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url("+(t=o,t.includes("http")?t:"/portfolio/"+t)+")"}})),r.a.createElement("div",null,a))}},214:function(e,t,a){"use strict";var n=a(4),r=a(29)(0),i=a(17)([].forEach,!0);n(n.P+n.F*!i,"Array",{forEach:function(e){return r(this,e,arguments[1])}})}}]);
//# sourceMappingURL=component---src-pages-works-jsx-caecd9c6275437070278.js.map