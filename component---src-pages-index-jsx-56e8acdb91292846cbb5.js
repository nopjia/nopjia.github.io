(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s}),a(85);var n=a(0),r=a.n(n),l=a(183),o=a(186),i=a(193),c=a(194);t.default=function(e){var t=e.location,a=e.data,n=a.allMarkdownRemark.edges,s=a.allWorksJson.edges,u=r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Nop Jiarathanakul"),r.a.createElement("div",{className:"layout23"},r.a.createElement("div",null,r.a.createElement("h2",null,"creative coder"),r.a.createElement("p",null,"Hello! I","'","m 75% technologist, 25% artist, and 100% perfectionist. I love making things, especially pretty 3D things with code!"),r.a.createElement("p",null,"My background is in computer graphics, games, and animation. I graduated from the"," ",r.a.createElement("a",{href:"http://www.upenn.edu/"},"University of Pennsylvania")," in"," ",r.a.createElement("a",{href:"http://cg.cis.upenn.edu/"},"computer graphics"),". Then I went on to work in animation and gaming for a while at various places. Now I","'","m at"," ",r.a.createElement("a",{href:"http://www.autodesk.com/"},"Autodesk")," working on an exciting ",r.a.createElement("a",{href:"http://lmv.rocks/"},"new web viewer"),".")),r.a.createElement("div",null,r.a.createElement("h2",null,"I like..."),r.a.createElement("p",null,"webgl",r.a.createElement("br",null),"shaders",r.a.createElement("br",null),"three.js",r.a.createElement("br",null),"typography",r.a.createElement("br",null),"indie rock")))),m=r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Featured"),r.a.createElement("h2",null,"recent projects"),r.a.createElement("div",{className:"works narrow"},s.map(function(e){var t=e.node;return r.a.createElement(c.a,{key:t.title,title:t.title,slug:t.fields.slug,image:t.images[0]})})),r.a.createElement("p",null,r.a.createElement(l.Link,{to:"/works/"},"see more projects →"))),d=r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Recent Articles"),r.a.createElement("h2",null,"what","'","s been on my mind"),r.a.createElement(i.a,{edges:n}),r.a.createElement("p",null,r.a.createElement(l.Link,{to:"/posts/"},"see all posts →"))),p=r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Hire Me"),r.a.createElement("div",{className:"layout23"},r.a.createElement("div",null,r.a.createElement("h2",null,"need a graphics guy?"),r.a.createElement("p",null,"Looking for hand-crafted, high-end, interactive 3D experiences for your website or product? I","'","m available for consulting, freelance, and contract work."),r.a.createElement("p",null,r.a.createElement(l.Link,{to:"/hire/"},"read more →"))),r.a.createElement("div",null,r.a.createElement("h2",null,"download"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.iamnop.com/jiarathanakul.pdf"},"resume"))))),h=r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Further Reading"),r.a.createElement("div",{className:"layout23"},r.a.createElement("div",null,r.a.createElement("h2",null,"some older stuff"),r.a.createElement("p",null,"If you","'","re feeling curious, you can look around my"," ",r.a.createElement("a",{href:"http://old.iamnop.com/"},"old website"),", when I was still in college and jQuery was all the rage. In my defense, it was a decent website for 2010. It even got featured"," ",r.a.createElement("a",{href:"http://www.instantshift.com/2011/02/17/70-fresh-and-creative-single-page-website-designs/"},"here"),","," ",r.a.createElement("a",{href:"http://designm.ag/design/35-nice-single-page-web-designs/"},"here"),", and ",r.a.createElement("a",{href:"https://onepagelove.com/nop-jiarathanakul"},"here"),". Feel free to look around at my older stuff—just don","'","t tease me about them later!")),r.a.createElement("div",null,r.a.createElement("h2",null,"see also"),r.a.createElement("p",null,r.a.createElement("a",{href:"http://nopjia.blogspot.com/"},"old blog")))));return r.a.createElement(o.a,{location:t},u,m,d,p,h)};var s="3342346831"},182:function(e,t,a){var n;e.exports=(n=a(184))&&n.default||n},183:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=a(181),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(182),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=a(35),c=a(1),s=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(i.a,{location:t,pageResources:a})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},185:function(e,t){e.exports={title:"Nop Jiarathanakul",author:"Nop Jiarathanakul",description:"Nop Jiarathanakul online portfolio. I love making things, especially beautiful 3D applications. I like WebGL, shaders, three.js, typography, and indie rock. My background is in computer graphics, games, and animation.",siteUrl:"https://www.iamnop.com/"}},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(188),o=a.n(l),i=a(185),c=a.n(i),s=(a(86),a(55),a(187),a(85),a(9)),u=a.n(s),m=a(183),d=a(192),p=(a(189),a(190),a(191),a(27)),h=Object(p.a)(!0),f=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)},g=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+f(t[1])+f(t[2])+f(t[3])},E=function(e){function t(t){var a;a=e.call(this,t)||this;var n="white";return"undefined"!=typeof window&&(n=document.body.className||n,document.body.className=n),a.state={theme:n},a}u()(t,e);var a=t.prototype;return a.setTheme=function(e){this.setState({theme:e}),document.body.className=e;var t=g(window.getComputedStyle(document.body).getPropertyValue("background-color")),a=g(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(a,t),h("Theme: "+a+","+t)},a.render=function(){var e=this,t=["white","dark","sepia","dos"].reverse(),a=this.state.theme;return r.a.createElement("div",{className:"theme-palette"},t.map(function(t){return t===a?r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)},className:"selected"}):r.a.createElement("div",{key:t,"data-palette":t,onClick:function(){return e.setTheme(t)}})}))},t}(r.a.Component),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={expanded:!1},a}u()(t,e);var a=t.prototype;return a.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},a.render=function(){var e,t,a=this,n=this.props.location,l=this.state.expanded,o={Home:"/",Work:"/works/",Contact:"/contact/"},i=r.a.createElement("ul",null,Object.keys(o).map(function(e){var t=o[e];return r.a.createElement("li",{key:e},t===n.pathname?r.a.createElement("span",null,e):r.a.createElement(m.Link,{to:t},e))}));return l?(e=r.a.createElement(d.GoX,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container expanded"},i)):(e=r.a.createElement(d.GoThreeBars,{className:"menu-toggle",onClick:function(){return a.toggle()}}),t=r.a.createElement("div",{className:"menu-container"},i)),r.a.createElement("div",{className:"navbar"},r.a.createElement(E,null),e,t)},t}(r.a.Component);t.a=function(e){var t,a=e.children,n=e.location,l=e.title,i=e.width,s=l;s||(s=(s=n.pathname).charAt(1).toUpperCase()+s.slice(2,-1)),t=s?s+" | "+c.a.title:c.a.title;var u=r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Nop Jiarathanakul")),m=i?{maxWidth:i+"px"}:{};return r.a.createElement("div",{className:"layout",style:m},r.a.createElement(o.a,{title:t}),r.a.createElement(v,{location:n}),r.a.createElement("div",{className:"content"},a),u)}},193:function(e,t,a){"use strict";a(85);var n=a(0),r=a.n(n),l=a(183);t.a=function(e){var t=e.edges;return r.a.createElement("div",{className:"posts"},t.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug,n=t.excerpt;return r.a.createElement("div",{key:t.fields.slug},r.a.createElement(l.Link,{style:{boxShadow:"none"},to:t.fields.slug},a),r.a.createElement("span",{className:"secondary"}," - ",t.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}))}))}},194:function(e,t,a){"use strict";a(87),a(88);var n=a(0),r=a.n(n),l=a(183);t.a=function(e){var t,a=e.title,n=e.slug,o=e.image;return r.a.createElement(l.Link,{className:"item",to:n},r.a.createElement("div",{className:"image-wrap"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url("+(t=o,t.includes("http")?t:"/portfolio/"+t)+")"}})),r.a.createElement("div",null,a))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-56e8acdb91292846cbb5.js.map