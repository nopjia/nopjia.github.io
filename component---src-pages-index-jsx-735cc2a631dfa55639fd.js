(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(185);t.default=function(e){var t=e.location;return r.a.createElement(l.a,{location:t},r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Nop Jiarathanakul"),r.a.createElement("div",{className:"layout23"},r.a.createElement("div",null,r.a.createElement("h2",null,"creative coder"),r.a.createElement("p",null,"Hello! I","'","m 75% technologist, 25% artist, and 100% perfectionist. I love making things, especially pretty 3D things with code!"),r.a.createElement("p",null,"My background is in computer graphics, games, and animation. I graduated from the"," ",r.a.createElement("a",{href:"http://www.upenn.edu/"},"University of Pennsylvania")," in"," ",r.a.createElement("a",{href:"http://cg.cis.upenn.edu/"},"computer graphics"),". Then I went on to work in animation and gaming for a while at various places. Now I","'","m at"," ",r.a.createElement("a",{href:"http://www.autodesk.com/"},"Autodesk")," working on an exciting ",r.a.createElement("a",{href:"http://lmv.rocks/"},"new web viewer"),".")),r.a.createElement("div",null,r.a.createElement("h2",null,"I like..."),r.a.createElement("p",null,"webgl",r.a.createElement("br",null),"shaders",r.a.createElement("br",null),"three.js",r.a.createElement("br",null),"typography",r.a.createElement("br",null),"indie rock")))),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Recent Articles"),r.a.createElement("h2",null,"what","'","s been on my mind"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet ante tristique, consequat ante id, mattis risus. Vivamus nulla leo, rhoncus eu ligula vel, vestibulum viverra tortor. Sed placerat erat eu bibendum fringilla.")),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Further Reading"),r.a.createElement("div",{className:"layout23"},r.a.createElement("div",null,r.a.createElement("h2",null,"there","'","s more older stuff"),r.a.createElement("p",null,"If you","'","re feeling curious, you can look around my"," ",r.a.createElement("a",{href:"http://old.iamnop.com/"},"old website"),", when I was still in college and jQuery was all the rage. In my defense, it was a decent website for 2010. It even got featured"," ",r.a.createElement("a",{href:"http://www.instantshift.com/2011/02/17/70-fresh-and-creative-single-page-website-designs/"},"here"),","," ",r.a.createElement("a",{href:"http://designm.ag/design/35-nice-single-page-web-designs/"},"here"),", and ",r.a.createElement("a",{href:"https://onepagelove.com/nop-jiarathanakul"},"here"),". Feel free to look around at my older stuff—just don","'","t tease me about them later!")),r.a.createElement("div",null,r.a.createElement("h2",null,"see also"),r.a.createElement("p",null,r.a.createElement("a",{href:"http://old.iamnop.com/"},"old website"))))))}},181:function(e,t,a){var n;e.exports=(n=a(184))&&n.default||n},182:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=a(180),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(181),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},183:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=a(34),c=a(1),s=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:a})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},185:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(187),i=a.n(l),o=a(183),c=a.n(o),s=(a(85),a(54),a(186),a(84),a(9)),u=a.n(s),m=a(182),d=a(191),p=(a(188),a(189),a(190),function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)}),h=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+p(t[1])+p(t[2])+p(t[3])},f=function(e){function t(t){var a;a=e.call(this,t)||this;var n="white";return"undefined"!=typeof window&&(n=document.body.className||n,document.body.className=n),a.state={theme:n},a}u()(t,e);var a=t.prototype;return a.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=h(window.getComputedStyle(document.body).getPropertyValue("background-color")),a=h(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(a,t),console.log("Theme: "+a+","+t)},a.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),a=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===a?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={expanded:!1},a}u()(t,e);var a=t.prototype;return a.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},a.render=function(){var e,t,a=this,n=this.props.location,l=this.state.expanded,i={Home:"/",Work:"/work/",Hire:"/hire/",Contact:"/contact/"},o=r.a.createElement("ul",null,Object.keys(i).map(function(e){var t=i[e];return r.a.createElement("li",{key:e},t===n.pathname?r.a.createElement("span",null,e):r.a.createElement(m.Link,{to:t},e))}));return l?(e=r.a.createElement(d.GoX,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},o)):(e=r.a.createElement(d.GoThreeBars,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},o)),r.a.createElement("div",{className:"navbar"},r.a.createElement(f,null),e,t)},t}(r.a.Component);t.a=function(e){var t,a=e.children,n=e.location,l=e.title,o=e.width,s=l;s||(s=(s=n.pathname).charAt(1).toUpperCase()+s.slice(2,-1)),t=s?s+" | "+c.a.title:c.a.title;var u=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Nop Jiarathanakul")),m=o?{maxWidth:o+"px"}:{};return r.a.createElement("div",{className:"layout",style:m},r.a.createElement(i.a,{title:t}),r.a.createElement(g,{location:n}),r.a.createElement("div",{className:"content"},a),u)}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-735cc2a631dfa55639fd.js.map