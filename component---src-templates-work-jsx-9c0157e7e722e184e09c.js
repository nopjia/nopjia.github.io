(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{261:function(e,t,a){"use strict";a.r(t),a(123),a(311),a(126);var n=a(0),r=a.n(n),i=a(267),o=function(e){var t=e.image,a=e.title;return r.a.createElement("a",{className:"image",href:t},r.a.createElement("img",{src:t,alt:a}))};a.d(t,"pageQuery",function(){return c});var l=function(e){return-1===e.indexOf("http")?"/portfolio/"+e:e},c=(t.default=function(e){var t,a=e.data,n=e.location,c=a.worksJson;c.link&&(t=r.a.createElement("div",null,r.a.createElement("h4",null,"Link"),r.a.createElement("p",null,r.a.createElement("a",{href:c.link},c.link))));var u,s=r.a.createElement(o,{image:l(c.images[0]),title:c.title}),m=c.images.slice(1);c.youtube&&(u=r.a.createElement("div",{className:"iframewrap"},r.a.createElement("iframe",{title:"Youtube",src:"https://www.youtube.com/embed/"+c.youtube+"?rel=0&showinfo=0",allow:"autoplay; encrypted-media",allowFullScreen:!0})));var d=r.a.createElement("div",{className:"detail"},r.a.createElement("h1",null,c.title),r.a.createElement("p",{className:"secondary"},c.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:c.desc}}),t,r.a.createElement("h4",null,"Tools"),r.a.createElement("p",null,c.tools),r.a.createElement("h4",null,"Tags"),r.a.createElement("p",null,c.tags.join(", ")));return r.a.createElement(i.a,{location:n,title:c.title,width:900},r.a.createElement("div",{className:"work"},r.a.createElement("div",null,s,d,u,m.map(function(e){return r.a.createElement("a",{className:"image",href:l(e),key:e},r.a.createElement("img",{src:l(e),alt:c.title}))})),d))},"3604908049")},263:function(e,t,a){var n;e.exports=(n=a(266))&&n.default||n},264:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=a(262),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(263),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(48);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},265:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},266:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=a(49),c=a(1),u=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:a})};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},267:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(269),o=a.n(i),l=a(265),c=a.n(l),u=(a(124),a(76),a(268),a(123),a(12)),s=a.n(u),m=a(264),d=a(273),p=(a(270),a(271),a(272),function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)}),h=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+p(t[1])+p(t[2])+p(t[3])},f=function(e){function t(t){var a;a=e.call(this,t)||this;var n="white";return"undefined"!=typeof window&&(n=document.body.className||n,document.body.className=n),a.state={theme:n},a}s()(t,e);var a=t.prototype;return a.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=h(window.getComputedStyle(document.body).getPropertyValue("background-color")),a=h(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(a,t),console.log("Theme: "+a+","+t)},a.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),a=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===a?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={expanded:!1},a}s()(t,e);var a=t.prototype;return a.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},a.render=function(){var e,t,a=this,n=this.props.location,i=this.state.expanded,o={Home:"/",Work:"/work/",Hire:"/hire/",Contact:"/contact/"},l=r.a.createElement("ul",null,Object.keys(o).map(function(e){var t=o[e];return r.a.createElement("li",{key:e},t===n.pathname?r.a.createElement("span",null,e):r.a.createElement(m.Link,{to:t},e))}));return i?(e=r.a.createElement(d.GoX,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},l)):(e=r.a.createElement(d.GoThreeBars,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},l)),r.a.createElement("div",{className:"navbar"},r.a.createElement(f,null),e,t)},t}(r.a.Component);t.a=function(e){var t,a=e.children,n=e.location,i=e.title,l=e.width,u=i;u||(u=(u=n.pathname).charAt(1).toUpperCase()+u.slice(2,-1)),t=u?u+" | "+c.a.title:c.a.title;var s=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Nop Jiarathanakul")),m=l?{maxWidth:l+"px"}:{};return r.a.createElement("div",{className:"layout",style:m},r.a.createElement(o.a,{title:t}),r.a.createElement(g,{location:n}),r.a.createElement("div",{className:"content"},a),s)}},311:function(e,t,a){"use strict";a(312)("link",function(e){return function(t){return e(this,"a","href",t)}})},312:function(e,t,a){var n=a(4),r=a(20),i=a(32),o=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-work-jsx-9c0157e7e722e184e09c.js.map