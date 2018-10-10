(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(e,t,n){"use strict";n.r(t);n(52),n(184),n(176),n(177);var a=n(0),r=n.n(a),i=n(166),o=n(170),c=function(e){var t=e.image,n=e.title,a=e.link;return r.a.createElement("a",{className:"image",href:a||t},r.a.createElement("img",{src:t,alt:n}))};n.d(t,"pageQuery",function(){return u});var l=function(e){return e.includes("http")?e:"/portfolio/"+e},u=(t.default=function(e){var t,n,a,u=e.data,s=e.location,m=u.worksJson,d=r.a.createElement(c,{link:m.link,image:l(m.images[0]),title:m.title}),p=m.images.slice(1);m.youtube&&(t=r.a.createElement("div",{className:"iframewrap"},r.a.createElement("iframe",{title:"Youtube",src:"https://www.youtube.com/embed/"+m.youtube+"?rel=0&showinfo=0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))),m.link&&(n=r.a.createElement("p",null,r.a.createElement("a",{href:m.link},"launch →"))),m.blog&&(a=r.a.createElement("p",null,m.blog.includes("http")?r.a.createElement("a",{href:m.blog},"read more →"):r.a.createElement(i.Link,{to:"/posts/"+m.blog},"read more →")));var f=r.a.createElement("div",{className:"detail"},r.a.createElement("h1",null,m.title),r.a.createElement("p",{className:"secondary"},m.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:m.desc}}),a,n,r.a.createElement("h4",null,"Tools"),r.a.createElement("p",null,m.tools),r.a.createElement("h4",null,"Tags"),r.a.createElement("p",null,m.tags.join(", ")));return r.a.createElement(o.a,{location:s,title:m.title,width:900},r.a.createElement("div",{className:"work"},r.a.createElement("div",null,d,f,t,p.map(function(e){return r.a.createElement("a",{className:"image",href:l(e),key:e},r.a.createElement("img",{src:l(e),alt:m.title}))})),f))},"4201305853")},166:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(165),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(167),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var m=n(38);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},167:function(e,t,n){var a;e.exports=(a=n(168))&&a.default||a},168:function(e,t,n){"use strict";n.r(t);n(27);var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(55),l=n(3),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},169:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},170:function(e,t,n){"use strict";n(28),n(82),n(52);var a=n(0),r=n.n(a),i=n(172),o=n.n(i),c=n(169),l=n.n(c),u=(n(81),n(53),n(171),n(5)),s=n.n(u),m=n(166),d=n(175),p=(n(54),n(173),n(174),n(29)),f=Object(p.a)(!0),h=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)},g=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+h(t[1])+h(t[2])+h(t[3])},v=function(e){function t(t){var n;n=e.call(this,t)||this;var a="white";return"undefined"!=typeof window&&(a=document.body.className||a,document.body.className=a),n.state={theme:a},n}s()(t,e);var n=t.prototype;return n.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=g(window.getComputedStyle(document.body).getPropertyValue("background-color")),n=g(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(n,t),f("Theme: "+n+","+t)},n.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),n=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===n?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={expanded:!1},n}s()(t,e);var n=t.prototype;return n.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},n.render=function(){var e,t,n=this,a=this.props.location,i=this.state.expanded,o={Home:"/",Work:"/works/",Contact:"/contact/"},c=r.a.createElement("ul",null,Object.keys(o).map(function(e){var t=o[e];return r.a.createElement("li",{key:e},t===a.pathname?r.a.createElement("span",null,e):r.a.createElement(m.Link,{to:t},e))}));return i?(e=r.a.createElement(d.b,{className:"menu-toggle",onClick:function(){return n.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},c)):(e=r.a.createElement(d.a,{className:"menu-toggle",onClick:function(){return n.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},c)),r.a.createElement("div",{className:"navbar"},r.a.createElement(v,null),e,t)},t}(r.a.Component);t.a=function(e){var t=e.children,n=e.location,a=e.title,i=e.width,c=a;c||(c=n.pathname.slice(1,-1))&&(c=c.split("-").map(function(e){return e.replace(e[0],e[0].toUpperCase())}).join(" ")),c=c?c+" | "+l.a.title:l.a.title;var u=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," ",l.a.author)),s=i?{maxWidth:i+"px"}:{};return r.a.createElement("div",{className:"layout",style:s},r.a.createElement(o.a,{title:c},r.a.createElement("meta",{name:"description",content:l.a.description})),r.a.createElement(y,{location:n}),r.a.createElement("div",{className:"content"},t),u)}},176:function(e,t,n){"use strict";var a=n(6),r=n(56)(!0);a(a.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(57)("includes")},177:function(e,t,n){"use strict";var a=n(6),r=n(178);a(a.P+a.F*n(179)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},178:function(e,t,n){var a=n(83),r=n(30);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},179:function(e,t,n){var a=n(4)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(e){}}return!0}},184:function(e,t,n){"use strict";n(198)("link",function(e){return function(t){return e(this,"a","href",t)}})},198:function(e,t,n){var a=n(6),r=n(18),i=n(30),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-templates-work-jsx-7215165f6070cb512356.js.map