(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6103],{65203:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var s=n(67294),a=n(86010),r=n(1944),i=n(35281),o=n(9460),l=n(39058),c=n(40756),m=n(87462),d=n(95999),p=n(32244);function u(e){const{nextItem:t,prevItem:n}=e;return s.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&s.createElement(p.Z,(0,m.Z)({},n,{subLabel:s.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&s.createElement(p.Z,(0,m.Z)({},t,{subLabel:s.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function h(){const{assets:e,metadata:t}=(0,o.C)(),{title:n,description:a,date:i,tags:l,authors:c,frontMatter:m}=t,{keywords:d}=m,p=e.image??m.image;return s.createElement(r.d,{title:n,description:a,keywords:d,image:p},s.createElement("meta",{property:"og:type",content:"article"}),s.createElement("meta",{property:"article:published_time",content:i}),c.some((e=>e.url))&&s.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&s.createElement("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")}))}var g=n(39407);function f(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:r}=(0,o.C)(),{nextItem:i,prevItem:m,frontMatter:d}=a,{hide_table_of_contents:p,toc_min_heading_level:h,toc_max_heading_level:f}=d;return s.createElement(l.Z,{sidebar:t,toc:!p&&r.length>0?s.createElement(g.Z,{toc:r,minHeadingLevel:h,maxHeadingLevel:f}):void 0},s.createElement(c.Z,null,n),(i||m)&&s.createElement(u,{nextItem:i,prevItem:m}))}function j(e){const t=e.content;return s.createElement(o.n,{content:e.content,isBlogPostPage:!0},s.createElement(r.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},s.createElement(h,null),s.createElement(f,{sidebar:e.sidebar},s.createElement(t,null))))}},39407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var s=n(87462),a=n(67294),r=n(86010),i=n(93743);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},l="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(o.tableOfContents,"thin-scrollbar",t)},a.createElement(i.Z,(0,s.Z)({},n,{linkClassName:l,linkActiveClassName:c})))}},93743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var s=n(87462),a=n(67294),r=n(86668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),l=c(o,{anchorTopOffset:n.current}),m=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function p(e){let{toc:t,className:n,linkClassName:s,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:s}))))):null}const u=a.memo(p);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:p,...h}=e;const g=(0,r.L)(),f=m??g.tableOfContents.minHeadingLevel,j=p??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:f,maxHeadingLevel:j});return d((0,a.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:j}}),[l,c,f,j])),a.createElement(u,(0,s.Z)({toc:v,className:n,linkClassName:l},h))}},47083:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var s=n(67294),a=n(86010),r=n(35281),i=n(95999);const o={admonition:"admonition_WoCw",admonitionHeading:"admonitionHeading_TMsN",admonitionIcon:"admonitionIcon_Ibzs",admonitionContent:"admonitionContent_vXIg"};var l=n(67814),c=n(23636),m=n(59417);c.vI.add(m.OGB);const d={takeaways:{infimaClassName:"takeaways",iconComponent:function(){return s.createElement(l.G,{icon:m.OGB})},label:s.createElement(i.Z,{id:"theme.admonition.takeaways",description:"The default label used for the Takeaways admonition (:::takeaways)"},"takeaways")},note:{infimaClassName:"secondary",iconComponent:function(){return s.createElement("svg",{viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:s.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return s.createElement("svg",{viewBox:"0 0 12 16"},s.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:s.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return s.createElement("svg",{viewBox:"0 0 12 16"},s.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:s.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return s.createElement("svg",{viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:s.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return s.createElement("svg",{viewBox:"0 0 16 16"},s.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:s.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},p={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=s.createElement(s.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}function h(e){const{children:t,type:n,title:i,icon:l}=u(e),c=function(e){const t=p[e]??e,n=d[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),d.info)}(n),m=i??c.label,{iconComponent:h}=c,g=l??s.createElement(h,null);return s.createElement("div",{className:(0,a.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,o.admonition)},s.createElement("div",{className:o.admonitionHeading},s.createElement("span",{className:o.admonitionIcon},g),m),s.createElement("div",{className:o.admonitionContent},t))}},42181:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var s=n(38301),a=n(72679),r=n(67294);const i=n.p+"assets/images/robot-244ea8a938e934de5c58631895a33604.webp",o=n.p+"assets/images/astronaut-b4d726928955b9b8608b19be50cec798.webp";var l=n(74855),c=n(67814),m=n(59417);class d extends r.Component{constructor(){super(...arguments),this.state={copied:!1},this.handleCopy=()=>{this.setState({copied:!0},(()=>{setTimeout((()=>{this.setState({copied:!1})}),1e3)}))},this.processChildren=e=>Array.isArray(e)?e.flatMap(((t,n)=>{if(t.props&&t.props.children){let s;return s=Array.isArray(t.props.children)?t.props.children.join(""):t.props.children,n<e.length-1?[s,r.createElement("br",null),r.createElement("br",null)]:[s]}return n<e.length-1?[t,r.createElement("br",null),r.createElement("br",null)]:[t]})):[e],this.processChildrenForCopy=e=>Array.isArray(e)?e.map(((t,n)=>{if(t.props&&t.props.children){let s;return s=Array.isArray(t.props.children)?t.props.children.join(""):t.props.children,n<e.length-1?s+"  ":s}return n<e.length-1?t+"  ":t})).join(""):e}render(){const e=this.props.title||"Prompt",t=this.processChildren(this.props.children),n=this.processChildrenForCopy(this.props.children);return r.createElement("div",{className:"ai-input",style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px",borderRadius:"15px",margin:"20px 0",position:"relative"}},r.createElement(l.CopyToClipboard,{text:n,onCopy:this.handleCopy},r.createElement("button",{style:{position:"absolute",top:"10px",right:"10px"}},r.createElement(c.G,{className:"io-icon",icon:this.state.copied?m.LEp:m.kZ_,color:this.state.copied?"green":"initial"})," Copy")),r.createElement("div",{style:{display:"flex",alignItems:"center",gap:"10px"}},r.createElement("img",{src:o,alt:"Astronaut",style:{width:"20px",borderRadius:"50%"}}),r.createElement("h4",{style:{margin:"0"}},e)),r.createElement("hr",{style:{border:"none",height:"1px",backgroundColor:"darkgrey",margin:"0"}}),r.createElement("pre",{style:{borderRadius:"5px",padding:"10px",margin:"0"}},t))}}class p extends r.Component{constructor(){super(...arguments),this.state={copied:!1},this.handleCopy=()=>{this.setState({copied:!0},(()=>{setTimeout((()=>{this.setState({copied:!1})}),1e3)}))},this.processChildren=e=>Array.isArray(e)?e.flatMap(((t,n)=>{if(t.props&&t.props.children){let s;return s=Array.isArray(t.props.children)?t.props.children.join(""):t.props.children,n<e.length-1?[s,r.createElement("br",null),r.createElement("br",null)]:[s]}return n<e.length-1?[t,r.createElement("br",null),r.createElement("br",null)]:[t]})):[e],this.processChildrenForCopy=e=>Array.isArray(e)?e.map(((t,n)=>{if(t.props&&t.props.children){let s;return s=Array.isArray(t.props.children)?t.props.children.join(""):t.props.children,n<e.length-1?s+"  ":s}return n<e.length-1?t+"  ":t})).join(""):e}render(){const e=this.props.title||"AI Output",t=this.processChildren(this.props.children),n=this.processChildrenForCopy(this.props.children);return r.createElement("div",{className:"ai-output",style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px",borderRadius:"5px",margin:"20px 0",position:"relative"}},r.createElement(l.CopyToClipboard,{text:n,onCopy:this.handleCopy},r.createElement("button",{style:{position:"absolute",top:"10px",right:"10px"}},r.createElement(c.G,{className:"io-icon",icon:this.state.copied?m.LEp:m.kZ_,color:this.state.copied?"green":"initial"})," Copy")),r.createElement("div",{style:{display:"flex",alignItems:"center",gap:"10px"}},r.createElement("img",{src:i,alt:"Robot",style:{width:"20px",borderRadius:"50%"}}),r.createElement("h4",{style:{margin:"0"}},e)),r.createElement("hr",{style:{border:"none",height:"1px",backgroundColor:"darkgrey",margin:"0"}}),r.createElement("pre",{className:"output-highlight",style:{borderRadius:"5px",padding:"10px",margin:"0"}},t))}}const u={...s.Z,LazyLoadImage:a.LazyLoadImage,AIOutput:p,AIInput:d}},46700:(e,t,n)=>{var s={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=46700}}]);