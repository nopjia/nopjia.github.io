(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DGRl:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return o}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),c=a("L6Je"),i=function(e){var t=e.image,a=e.title,l=e.link;return n.a.createElement("a",{className:"image",href:l||t},n.a.createElement("img",{src:t,alt:a}))},m=function(e){return e.includes("http")?e:"/portfolio/"+e},o=(t.default=function(e){var t,a,l,o=e.data,s=e.location,u=o.worksJson,E=n.a.createElement(i,{link:u.link,image:m(u.images[0]),title:u.title}),d=u.images.slice(1);u.youtube&&(t=n.a.createElement("div",{className:"iframewrap"},n.a.createElement("iframe",{title:"Youtube",src:"https://www.youtube.com/embed/"+u.youtube+"?rel=0&showinfo=0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))),u.link&&(a=n.a.createElement("p",null,n.a.createElement("a",{href:u.link},"launch →"))),u.blog&&(l=n.a.createElement("p",null,u.blog.includes("http")?n.a.createElement("a",{href:u.blog},"read more →"):n.a.createElement(r.a,{to:"/posts/"+u.blog},"read more →")));var p=n.a.createElement("div",{className:"detail"},n.a.createElement("h1",null,u.title),n.a.createElement("p",{className:"secondary"},u.date),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:u.desc}}),l,a,n.a.createElement("h4",null,"Tools"),n.a.createElement("p",null,u.tools),n.a.createElement("h4",null,"Tags"),n.a.createElement("p",null,u.tags.join(", ")));return n.a.createElement(c.a,{location:s,title:u.title,width:900},n.a.createElement("div",{className:"work"},n.a.createElement("div",null,E,p,t,d.map((function(e){return n.a.createElement("a",{className:"image",href:m(e),key:e},n.a.createElement("img",{src:m(e),alt:u.title}))}))),p))},"3578547522")}}]);
//# sourceMappingURL=component---src-templates-work-jsx-cf663fda36dbd0f55493.js.map