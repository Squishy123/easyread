(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(180),o=a(178);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},172:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(1),o=a.n(i),c=a(39),s=a.n(c);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return c.navigate});a(174);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},173:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"d",function(){return o}),a.d(t,"e",function(){return c}),a.d(t,"f",function(){return s}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return u}),a.d(t,"g",function(){return d});var n=a(11),r=a(10);function i(e){return r.set("bgColor",e),{type:n.a,bgColor:e}}function o(e){return r.set("readerBgColor",e),{type:n.d,readerBgColor:e}}function c(e){return r.set("readerColor",e),{type:n.e,readerColor:e}}function s(e){return r.set("readerFont",e),{type:n.f,readerFont:e}}function l(e){return r.set("lineHeight",e),{type:n.c,lineHeight:e}}function u(e){return r.set("letterSpacing",e),{type:n.b,letterSpacing:e}}function d(e){r.set("ttsToken",e);var t=new Date;return r.set("tokenTimestamp",t),{type:n.g,ttsToken:e,tokenTimestamp:t}}},174:function(e,t,a){var n;e.exports=(n=a(176))&&n.default||n},175:function(e){e.exports={data:{site:{siteMetadata:{title:"EasyRead"}}}}},176:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),c=a(63),s=a(3),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},177:function(e,t,a){e.exports=a.p+"static/reading-profile-667bb35fe9e05f79fe62d06332339c07.png"},178:function(e,t,a){"use strict";var n=a(179),r=a(0),i=a.n(r),o=a(1),c=a.n(o),s=a(188),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)},i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/all.css",integrity:"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",crossorigin:"anonymous"}))}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},179:function(e){e.exports={data:{site:{siteMetadata:{title:"EasyRead",description:"Make reading easier",author:"@squishy123"}}}}},180:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),o=a(1),c=a.n(o),s=a(172),l=(a(184),a(40)),u=a.n(l),d=a(8),m=a.n(d),p=a(62),g=a(173),f=a(185),h=a.n(f),b=(a(186),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isCollapse:!1},a.toggleNav=a.toggleNav.bind(u()(a)),a}m()(t,e);var n=t.prototype;return n.toggleNav=function(){this.setState({isCollapse:!this.state.isCollapse})},n.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:h.a.menuToggle+" hamburger hamburger--spin "+(this.state.isCollapse?"is-active":""),onClick:this.toggleNav,type:"button"},i.a.createElement("span",{className:"hamburger-box"},i.a.createElement("span",{className:"hamburger-inner "+("black"==this.props.bgColor?h.a.dark:h.a.light)}))),i.a.createElement("div",{className:h.a.navContainer+" "+(this.state.isCollapse?h.a.isActive:"")},i.a.createElement("div",{className:h.a.nav},i.a.createElement("div",{className:h.a.profile},i.a.createElement("img",{src:a(177)}),i.a.createElement("h1",null,"Easyread"),i.a.createElement("p",null,"Welcome back!")),i.a.createElement("hr",null),i.a.createElement("ul",{className:h.a.pages},[{name:"Clipboard",url:"/clipboard"},{name:"Gallery",url:"/gallery"},{name:"Settings",url:"/settings"},{name:"Progress Tracker",url:"/tracker"}].map(function(t){return i.a.createElement("li",{key:t.url,onClick:e.toggleNav},i.a.createElement(s.a,{className:h.a.page,activeClassName:h.a.pageActive,to:t.url},i.a.createElement("i",{className:"fas fa-heart fa-2x"}),i.a.createElement("p",null,t.name)))})))))},t}(i.a.Component)),y=Object(p.b)(function(e){return{bgColor:e.bgColor}},function(e){return{changeBG:function(t){return e(Object(g.a)(t))}}})(b),v=(a(187),function(e){var t=e.bgColor,a=(e.changeBG,e.children);return i.a.createElement(s.b,{query:"2924840780",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,null),i.a.createElement("div",{className:"main",style:{backgroundColor:t}},i.a.createElement("main",null,a),i.a.createElement("footer",null)))},data:n})});v.propTypes={children:c.a.node.isRequired};t.a=Object(p.b)(function(e){return{bgColor:e.bgColor}},function(e){return{changeBG:function(t){return e(Object(g.a)(t))}}})(v)}}]);
//# sourceMappingURL=component---src-pages-404-js-b43071efc4033c848b4a.js.map