(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(t,e,a){"use strict";a.r(e);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(156);var s=function(){return o.a.createElement("span",null,"Hi, I'm ",o.a.createElement("b",null,"Natalie"),". I'm a web developer. I write HTML, CSS and JavaScript. I post my study notes here.")},c=a(159),u=a(160),p=a(157);a.d(e,"pageQuery",function(){return d});var m=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(u.a,{title:"All posts"}),o.a.createElement(s,null),a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return o.a.createElement("div",{style:{margin:Object(p.a)(2)+" 0 "+Object(p.a)(2)+" 0"},key:e.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},o.a.createElement(l.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),o.a.createElement("small",null,e.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},e}(o.a.Component),d=(e.default=m,"2785444898")},155:function(t,e,a){var n;t.exports=(n=a(158))&&n.default||n},156:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),s=a.n(l);a.d(e,"a",function(){return s.a});a(155),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},157:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return c});var n=a(162),r=a.n(n),i=a(163),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new r.a(o.a);var s=l.rhythm,c=l.scale},158:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),s=a(2),c=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},159:function(t,e,a){"use strict";a(34);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(156),s=a(157),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(25),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},o.a.createElement("header",null,t),o.a.createElement("main",null,r),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),", by Natalie"))},e}(o.a.Component);e.a=c},160:function(t,e,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(164),c=a.n(s);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,l=n.data.site,s=e||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},e.a=u},161:function(t){t.exports={data:{site:{siteMetadata:{title:"Natalie's Blog",description:"A blog by nataliekate, built with Gatsby.js",author:"nataliekate"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-90879524e856dc9243ab.js.map