(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},9413:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var o=r(n(7154)),i=r(n(7316)),a=r(n(5354)),s=r(n(7294)),l=r(n(5697)),d=n(9462),u=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="marcingladkowski",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.className,r=e.placeholder,a=(0,i.default)(e,["config","className","placeholder"]),l="disqus-comment-count"+(n?" "+n:"");return s.default.createElement("span",(0,o.default)({className:l,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},a),r)},t}(s.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string,className:l.default.string}},6748:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var o=r(n(7154)),i=r(n(7316)),a=r(n(5354)),s=r(n(7294)),l=r(n(5697)),d=function(e){function t(){return e.apply(this,arguments)||this}(0,a.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,i.default)(e,["commentId","showMedia","showParentComment"]));return s.default.createElement("iframe",(0,o.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(s.default.Component);t.default=d,d.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},d.propTypes={commentId:l.default.oneOfType([l.default.number,l.default.string]).isRequired,width:l.default.number,height:l.default.number,showMedia:l.default.bool,showParentComment:l.default.bool}},4838:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var o=r(n(7154)),i=r(n(7316)),a=r(n(5354)),s=r(n(7294)),l=r(n(5697)),d=n(9462),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="marcingladkowski",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,d.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,d.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(r){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var n=window.document.getElementById(t.id);n.parentNode.removeChild(n)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,o.default)({id:"disqus_thread"},t))},t}(s.default.Component);t.default=u,u.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},4332:function(e,t,n){"use strict";var r=n(5318);var o=r(n(4838));t.h$=o.default;var i=r(n(9413));t.dS=i.default,r(n(6748)).default,o.default},9462:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=this,l=function(){r=null,n||e.apply(s,i)},d=n&&!r;window.clearTimeout(r),r=setTimeout(l,t),d&&e.apply(s,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var r,i=new Set(Object.keys(t).concat(Object.keys(n))),s=(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!a(t[r]))return!0;return!1}));return 0!==s.length};var o=r(n(319)),i=r(n(7294));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},9535:function(e,t,n){"use strict";var r=n(7294),o=n(5444),i=n(6125);t.Z=function(){var e,t,a=(0,o.useStaticQuery)("4135132960"),s=null===(e=a.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=a.site.siteMetadata)||void 0===t||t.social;return r.createElement("div",{className:"bio"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:n(3309)}),(null==s?void 0:s.name)&&r.createElement("div",null,r.createElement("p",null,"Written by ",r.createElement("strong",null,s.name)),r.createElement("p",null,(null==s?void 0:s.summary)||null)))}},4870:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(5444),i=n(9535),a=n(7198),s=n(3751),l=n(4332);t.default=function(e){var t,n=e.data,d=e.location,u=n.markdownRemark,c=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=n.previous,p=n.next,m={url:""+(n.site.siteMetadata.siteUrl+d.pathname),identifier:u.id};return r.createElement(a.Z,{location:d,title:c},r.createElement(s.Z,{title:u.frontmatter.title,description:u.frontmatter.description||u.excerpt}),r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},u.frontmatter.title),r.createElement("p",null,u.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:u.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement("footer",null,r.createElement(i.Z,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,f&&r.createElement(o.Link,{to:f.fields.slug,rel:"prev"},"← ",f.frontmatter.title)),r.createElement("li",null,p&&r.createElement(o.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))),r.createElement(l.dS,{config:m,placeholder:"..."}),r.createElement(l.h$,{config:m}))}},3309:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/57d2d064e8c07555752bfa64bd1f1a70/e5610/profile.png","srcSet":"/static/57d2d064e8c07555752bfa64bd1f1a70/e5610/profile.png 50w,\\n/static/57d2d064e8c07555752bfa64bd1f1a70/e9b55/profile.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/57d2d064e8c07555752bfa64bd1f1a70/d4bf4/profile.avif 50w,\\n/static/57d2d064e8c07555752bfa64bd1f1a70/ee81f/profile.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/57d2d064e8c07555752bfa64bd1f1a70/3faea/profile.webp 50w,\\n/static/57d2d064e8c07555752bfa64bd1f1a70/6a679/profile.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3853d02118d7e4b2d58f.js.map