(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return l});var n=a(0),r=a.n(n),o=a(183),i=a(186);t.default=function(e){var t=e.data,a=e.pageContext,n=e.location,l=t.markdownRemark,c=a.previous,u=a.next;return r.a.createElement(i.a,{location:n,title:l.frontmatter.title},r.a.createElement("h1",null,l.frontmatter.title),r.a.createElement("p",{className:"secondary"},l.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l.html}}),r.a.createElement("ul",{className:"postnav"},u&&r.a.createElement("li",null,r.a.createElement(o.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →")),c&&r.a.createElement("li",null,r.a.createElement(o.Link,{to:c.fields.slug,rel:"prev"},"← ",c.frontmatter.title))))};var l="3901583612"},182:function(e,t,a){var n;e.exports=(n=a(184))&&n.default||n},183:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=a(181),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(182),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=a(35),c=a(1),u=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:a})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},185:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(188),i=a.n(o),l=a(185),c=a.n(l),u=(a(86),a(55),a(187),a(85),a(9)),s=a.n(u),d=a(183),m=a(192),p=(a(189),a(190),a(191),a(27)),f=Object(p.a)(!0),h=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)},g=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+h(t[1])+h(t[2])+h(t[3])},v=function(e){function t(t){var a;a=e.call(this,t)||this;var n="white";return"undefined"!=typeof window&&(n=document.body.className||n,document.body.className=n),a.state={theme:n},a}s()(t,e);var a=t.prototype;return a.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=g(window.getComputedStyle(document.body).getPropertyValue("background-color")),a=g(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(a,t),f("Theme: "+a+","+t)},a.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),a=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===a?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={expanded:!1},a}s()(t,e);var a=t.prototype;return a.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},a.render=function(){var e,t,a=this,n=this.props.location,o=this.state.expanded,i={Home:"/",Work:"/works/",Contact:"/contact/"},l=r.a.createElement("ul",null,Object.keys(i).map(function(e){var t=i[e];return r.a.createElement("li",{key:e},t===n.pathname?r.a.createElement("span",null,e):r.a.createElement(d.Link,{to:t},e))}));return o?(e=r.a.createElement(m.GoX,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},l)):(e=r.a.createElement(m.GoThreeBars,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},l)),r.a.createElement("div",{className:"navbar"},r.a.createElement(v,null),e,t)},t}(r.a.Component);t.a=function(e){var t,a=e.children,n=e.location,o=e.title,l=e.width,u=o;u||(u=(u=n.pathname).charAt(1).toUpperCase()+u.slice(2,-1)),t=u?u+" | "+c.a.title:c.a.title;var s=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Nop Jiarathanakul")),d=l?{maxWidth:l+"px"}:{};return r.a.createElement("div",{className:"layout",style:d},r.a.createElement(i.a,{title:t}),r.a.createElement(y,{location:n}),r.a.createElement("div",{className:"content"},a),s)}}}]);
//# sourceMappingURL=component---src-templates-post-jsx-d8171eda637020e214a9.js.map