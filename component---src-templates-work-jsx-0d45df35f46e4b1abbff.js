(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{178:function(e,t,a){"use strict";a.r(t),a(85),a(209),a(87),a(88);var n=a(0),r=a.n(n),i=a(180),o=a(184),l=function(e){var t=e.image,a=e.title;return r.a.createElement("a",{className:"image",href:t},r.a.createElement("img",{src:t,alt:a}))};a.d(t,"pageQuery",function(){return u});var c=function(e){return e.includes("http")?e:"/portfolio/"+e},u=(t.default=function(e){var t,a,n,u=e.data,s=e.location,m=u.worksJson,d=r.a.createElement(l,{image:c(m.images[0]),title:m.title}),p=m.images.slice(1);m.youtube&&(t=r.a.createElement("div",{className:"iframewrap"},r.a.createElement("iframe",{title:"Youtube",src:"https://www.youtube.com/embed/"+m.youtube+"?rel=0&showinfo=0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))),m.link&&(a=r.a.createElement("p",null,r.a.createElement("a",{href:m.link},"launch →"))),m.blog&&(n=r.a.createElement("p",null,m.blog.includes("http")?r.a.createElement("a",{href:m.blog},"read more →"):r.a.createElement(i.Link,{to:"/posts/"+m.blog},"read more →")));var h=r.a.createElement("div",{className:"detail"},r.a.createElement("h1",null,m.title),r.a.createElement("p",{className:"secondary"},m.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:m.desc}}),n,a,r.a.createElement("h4",null,"Tools"),r.a.createElement("p",null,m.tools),r.a.createElement("h4",null,"Tags"),r.a.createElement("p",null,m.tags.join(", ")));return r.a.createElement(o.a,{location:s,title:m.title,width:900},r.a.createElement("div",{className:"work"},r.a.createElement("div",null,d,h,t,p.map(function(e){return r.a.createElement("a",{className:"image",href:c(e),key:e},r.a.createElement("img",{src:c(e),alt:m.title}))})),h))},"4201305853")},180:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=a(179),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(181),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},181:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=a(35),c=a(1),u=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:a})};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},183:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},184:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(186),o=a.n(i),l=a(183),c=a.n(l),u=(a(86),a(55),a(185),a(85),a(9)),s=a.n(u),m=a(180),d=a(190),p=(a(187),a(188),a(189),a(27)),h=Object(p.a)(!0),f=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)},g=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+f(t[1])+f(t[2])+f(t[3])},v=function(e){function t(t){var a;a=e.call(this,t)||this;var n="white";return"undefined"!=typeof window&&(n=document.body.className||n,document.body.className=n),a.state={theme:n},a}s()(t,e);var a=t.prototype;return a.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=g(window.getComputedStyle(document.body).getPropertyValue("background-color")),a=g(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(a,t),h("Theme: "+a+","+t)},a.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),a=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===a?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={expanded:!1},a}s()(t,e);var a=t.prototype;return a.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},a.render=function(){var e,t,a=this,n=this.props.location,i=this.state.expanded,o={Home:"/",Work:"/works/",Contact:"/contact/"},l=r.a.createElement("ul",null,Object.keys(o).map(function(e){var t=o[e];return r.a.createElement("li",{key:e},t===n.pathname?r.a.createElement("span",null,e):r.a.createElement(m.Link,{to:t},e))}));return i?(e=r.a.createElement(d.GoX,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},l)):(e=r.a.createElement(d.GoThreeBars,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},l)),r.a.createElement("div",{className:"navbar"},r.a.createElement(v,null),e,t)},t}(r.a.Component);t.a=function(e){var t,a=e.children,n=e.location,i=e.title,l=e.width,u=i;u||(u=(u=n.pathname).charAt(1).toUpperCase()+u.slice(2,-1)),t=u?u+" | "+c.a.title:c.a.title;var s=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Nop Jiarathanakul")),m=l?{maxWidth:l+"px"}:{};return r.a.createElement("div",{className:"layout",style:m},r.a.createElement(o.a,{title:t},r.a.createElement("meta",{name:"description",content:c.a.description})),r.a.createElement(y,{location:n}),r.a.createElement("div",{className:"content"},a),s)}},209:function(e,t,a){"use strict";a(210)("link",function(e){return function(t){return e(this,"a","href",t)}})},210:function(e,t,a){var n=a(4),r=a(16),i=a(22),o=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-work-jsx-0d45df35f46e4b1abbff.js.map