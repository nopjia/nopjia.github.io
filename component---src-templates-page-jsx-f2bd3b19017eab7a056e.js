(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return i});var n=a(0),r=a.n(n),o=a(186);t.default=function(e){var t=e.data,a=e.location,n=t.markdownRemark;return r.a.createElement(o.a,{location:a,title:n.frontmatter.title},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))};var i="1783663217"},182:function(e,t,a){var n;e.exports=(n=a(184))&&n.default||n},183:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=a(181),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(182),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=a(35),u=a(1),l=function(e){var t=e.location,a=u.a.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:a})};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},185:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(188),i=a.n(o),c=a(185),u=a.n(c),l=(a(86),a(55),a(187),a(85),a(9)),s=a.n(l),d=a(183),m=a(192),p=(a(189),a(190),a(191),a(27)),h=Object(p.a)(!0),f=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)},g=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+f(t[1])+f(t[2])+f(t[3])},y=function(e){function t(t){var a;a=e.call(this,t)||this;var n="white";return"undefined"!=typeof window&&(n=document.body.className||n,document.body.className=n),a.state={theme:n},a}s()(t,e);var a=t.prototype;return a.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=g(window.getComputedStyle(document.body).getPropertyValue("background-color")),a=g(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(a,t),h("Theme: "+a+","+t)},a.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),a=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===a?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={expanded:!1},a}s()(t,e);var a=t.prototype;return a.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},a.render=function(){var e,t,a=this,n=this.props.location,o=this.state.expanded,i={Home:"/",Work:"/works/",Contact:"/contact/"},c=r.a.createElement("ul",null,Object.keys(i).map(function(e){var t=i[e];return r.a.createElement("li",{key:e},t===n.pathname?r.a.createElement("span",null,e):r.a.createElement(d.Link,{to:t},e))}));return o?(e=r.a.createElement(m.GoX,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},c)):(e=r.a.createElement(m.GoThreeBars,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},c)),r.a.createElement("div",{className:"navbar"},r.a.createElement(y,null),e,t)},t}(r.a.Component);t.a=function(e){var t,a=e.children,n=e.location,o=e.title,c=e.width,l=o;l||(l=(l=n.pathname).charAt(1).toUpperCase()+l.slice(2,-1)),t=l?l+" | "+u.a.title:u.a.title;var s=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Nop Jiarathanakul")),d=c?{maxWidth:c+"px"}:{};return r.a.createElement("div",{className:"layout",style:d},r.a.createElement(i.a,{title:t}),r.a.createElement(v,{location:n}),r.a.createElement("div",{className:"content"},a),s)}}}]);
//# sourceMappingURL=component---src-templates-page-jsx-f2bd3b19017eab7a056e.js.map