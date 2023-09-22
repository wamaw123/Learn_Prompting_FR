"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),g=a,k=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},o="Welcome",p={unversionedId:"intro",id:"intro",title:"Welcome",description:"\u0db4\u0dca\u200d\u0dbb\u0ddc\u0db8\u0dca\u0db4\u0dca\u0da7\u0dca \u0d89\u0d82\u0da2\u0dd2\u0db1\u0dda\u0dbb\u0dd4 \u0dc0\u0dd2\u0daf\u0dca\u200d\u0dba\u0dcf\u0dc0 (prompt engineering) \u0db4\u0dd2\u0dc5\u0dd2\u0db6\u0db3 \u0db8\u0dd9\u0db8 \u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0\u0da7 \u0d94\u0db6\u0dc0 \u0dc3\u0dcf\u0daf\u0dbb\u0dba\u0dd9\u0db1\u0dca \u0db4\u0dd2\u0dbd\u0dd2\u0d9c\u0db1\u0dca\u0db1\u0dc0\u0dcf!",source:"@site/i18n/si/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/si/docs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83d\ude03 Basics",permalink:"/si/docs/category/-basics"}},l={},s=[{value:"\u0db8\u0dd9\u0db8 \u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0 \u0dc4\u0daf\u0dcf\u0dbb\u0db1 \u0d94\u0db6\u0dda \u0db4\u0dca\u200d\u0dbb\u0dad\u0dd2\u0da0\u0dcf\u0dbb \u0d85\u0db4\u0dd2 \u0d85\u0d9c\u0dba \u0d9a\u0dbb\u0db1\u0dc0\u0dcf,",id:"\u0db8\u0dd9\u0db8-\u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0-\u0dc4\u0daf\u0dcf\u0dbb\u0db1-\u0d94\u0db6\u0dda-\u0db4\u0dca\u0dbb\u0dad\u0dd2\u0da0\u0dcf\u0dbb-\u0d85\u0db4\u0dd2-\u0d85\u0d9c\u0dba-\u0d9a\u0dbb\u0db1\u0dc0\u0dcf",level:2},{value:"\u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0\u0dda \u0dbd\u0d9a\u0dca\u0dc2\u0dab",id:"\u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0\u0dda-\u0dbd\u0d9a\u0dca\u0dc2\u0dab",level:2},{value:"\u0d9a\u0ddc\u0dc4\u0ddc\u0db8\u0daf \u0db8\u0dda \u0db4\u0dcf\u0da9\u0db8\u0dca \u0d9a\u0dd2\u0dba\u0dc0\u0db1\u0dca\u0db1 \u0d95\u0db1\u0dda?",id:"\u0d9a\u0ddc\u0dc4\u0ddc\u0db8\u0daf-\u0db8\u0dda-\u0db4\u0dcf\u0da9\u0db8\u0dca-\u0d9a\u0dd2\u0dba\u0dc0\u0db1\u0dca\u0db1-\u0d95\u0db1\u0dda",level:2},{value:"\u0db4\u0dbb\u0dd2\u0da0\u0dca\u0da1\u0dda\u0daf",id:"\u0db4\u0dbb\u0dd2\u0da0\u0dca\u0da1\u0dda\u0daf",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome"},"Welcome"),(0,a.kt)("p",null,"\u0db4\u0dca\u200d\u0dbb\u0ddc\u0db8\u0dca\u0db4\u0dca\u0da7\u0dca \u0d89\u0d82\u0da2\u0dd2\u0db1\u0dda\u0dbb\u0dd4 \u0dc0\u0dd2\u0daf\u0dca\u200d\u0dba\u0dcf\u0dc0 (prompt engineering) \u0db4\u0dd2\u0dc5\u0dd2\u0db6\u0db3 \u0db8\u0dd9\u0db8 \u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0\u0da7 \u0d94\u0db6\u0dc0 \u0dc3\u0dcf\u0daf\u0dbb\u0dba\u0dd9\u0db1\u0dca \u0db4\u0dd2\u0dbd\u0dd2\u0d9c\u0db1\u0dca\u0db1\u0dc0\u0dcf!"),(0,a.kt)("p",null,"\u0db8\u0db8 \u0db4\u0dca\u200d\u0dbb\u0ddc\u0db8\u0dca\u0db4\u0dca\u0da7\u0dca \u0d89\u0d82\u0da2\u0dd2\u0db1\u0dda\u0dbb\u0dd4 \u0dc0\u0dd2\u0daf\u0dca\u200d\u0dba\u0dcf\u0dc0 (PE) \u0d9c\u0dd0\u0db1 \u0dc3\u0dd2\u0dad\u0db1\u0dca\u0db1\u0da7 \u0d9a\u0dd0\u0db8\u0dad\u0dd2 \u0db8\u0dda \u0dc0\u0dd2\u0daf\u0dd2\u0dc4\u0da7 : ",(0,a.kt)("strong",{parentName:"p"},"\u0d94\u0db6\u0da7 \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0daf\u0dda \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dbd\u0dd9\u0dc3 \u0dbd\u0db6\u0dcf \u0d9c\u0dd0\u0db1\u0dd3\u0db8\u0da7 \u0d9a\u0dd8\u0dad\u0dd3\u0db8 \u0db6\u0dd4\u0daf\u0dca\u0db0\u0dd2\u0dba (AI) \u0dc3\u0db8\u0d9f \u0d9a\u0dad\u0dcf \u0d9a\u0dbb\u0db1\u0dca\u0db1\u0dda \u0d9a\u0dd9\u0dc3\u0dda\u0daf?"),"."),(0,a.kt)("p",null,"\u0d9a\u0dd8\u0dad\u0dd2\u0db8 \u0db6\u0dd4\u0daf\u0dca\u0db0\u0dd2\u0dba\u0dda (AI) \u0db8\u0dd1\u0dad \u0d9a\u0dcf\u0dbd\u0dd3\u0db1 \u0daf\u0dd2\u0dba\u0dd4\u0dab\u0dd4\u0dc0 \u0dc3\u0db8\u0d9f, \u0db4\u0dca\u200d\u0dbb\u0ddc\u0db8\u0dca\u0db4\u0dca\u0da7\u0dca \u0d89\u0d82\u0da2\u0dd2\u0db1\u0dda\u0dbb\u0dd4 \u0dc0\u0dd2\u0daf\u0dca\u200d\u0dba\u0dcf\u0dc0 \u0d94\u0db6\u0da7 \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0d9a\u0dcf\u0dbb\u0dca\u0dba\u0db1\u0dca \u0d9a\u0dd8\u0dad\u0dd3\u0db8 \u0db6\u0dd4\u0daf\u0dca\u0db0\u0dd2\u0dba (\u0db6\u0dd4\u0daf\u0dca\u0db0\u0dd2\u0db8\u0dba \u0dba\u0db1\u0dca\u0dad\u0dca\u200d\u0dbb \u0dc0\u0dd2\u0daf\u0dca\u200d\u0dba\u0dcf\u0dc0) \u0dc4\u0dbb\u0dc4\u0dcf \u0d9a\u0dbb\u0dc0\u0dcf \u0d9c\u0dd0\u0db1\u0dd3\u0db8\u0da7 \u0db8\u0d9c \u0dc3\u0dbd\u0dc3\u0db1 \u0dc0\u0da7\u0dd2\u0db1\u0dcf \u0d9a\u0dd4\u0dc3\u0dbd\u0dad\u0dcf\u0dc0\u0d9a\u0dca \u0db6\u0dc0\u0da7 \u0db4\u0dad\u0dca\u0dc0 \u0dad\u0dd2\u0dba\u0db1\u0dc0\u0dcf."),(0,a.kt)("p",null,"\u0db8\u0dd9\u0db8 \u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0 \u0dc0\u0dca\u200d\u0dba\u0dc0\u0dc4\u0dcf\u0dbb\u0dd2\u0d9a (Applied) PE \u0dc1\u0dd2\u0dbd\u0dca\u0db4\u0dd3\u0dba \u0d9a\u0dca\u200d\u0dbb\u0db8 \u0d9a\u0dd9\u0dbb\u0dd9\u0dc4\u0dd2 \u0d85\u0dc0\u0db0\u0dcf\u0db1\u0dba \u0dba\u0ddc\u0db8\u0dd4 \u0d9a\u0dbb\u0db1 \u0d85\u0dad\u0dbb, \u0d94\u0db6 \u0dc3\u0dad\u0dd4\u0dc0 machine learning \u0db4\u0dd2\u0dc5\u0dd2\u0db6\u0db3 \u0d85\u0dc0\u0db8 \u0daf\u0dd0\u0db1\u0dd4\u0db8\u0d9a\u0dca \u0dc4\u0ddd \u0dad\u0dd2\u0db6\u0dd3\u0db8 \u0d85\u0db4\u0dd2 \u0d85\u0db4\u0dda\u0d9a\u0dca\u0dc2\u0dcf \u0d9a\u0dbb\u0db1\u0dc0\u0dcf. \u0d94\u0db6 \u0db8\u0dd9\u0db8 \u0dc3\u0d82\u0d9a\u0dbd\u0dca\u0db4\u0dc0\u0dbd\u0da7 \u0d85\u0dbd\u0dd4\u0dad\u0dca \u0db1\u0db8\u0dca (AI, machine learning, programming \u0d86\u0daf\u0dd2\u0dba) \u0db8\u0db8 \u0db1\u0dd2\u0dbb\u0dca\u0daf\u0dda\u0dc1 \u0d9a\u0dbb\u0db1\u0dc0\u0dcf \u0db4\u0dc5\u0db8\u0dd4\u0dc0 ",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/-basics"},"\u0db8\u0dd6\u0dbd\u0dd2\u0d9a")," \u0d9a\u0ddc\u0da7\u0dc3\u0dd2\u0db1\u0dca \u0d86\u0dbb\u0db8\u0dca\u0db7 \u0d9a\u0dbb \u0db4\u0dc3\u0dd4\u0dc0 ",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/intro"},"\u0d8b\u0db4\u0daf\u0dd9\u0dc3\u0dca")," \u0d9a\u0dd2\u0dba\u0dc0\u0db1 \u0dbd\u0dd9\u0dc3\u0da7."),(0,a.kt)("h2",{id:"\u0db8\u0dd9\u0db8-\u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0-\u0dc4\u0daf\u0dcf\u0dbb\u0db1-\u0d94\u0db6\u0dda-\u0db4\u0dca\u0dbb\u0dad\u0dd2\u0da0\u0dcf\u0dbb-\u0d85\u0db4\u0dd2-\u0d85\u0d9c\u0dba-\u0d9a\u0dbb\u0db1\u0dc0\u0dcf"},"\u0db8\u0dd9\u0db8 \u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0 \u0dc4\u0daf\u0dcf\u0dbb\u0db1 \u0d94\u0db6\u0dda \u0db4\u0dca\u200d\u0dbb\u0dad\u0dd2\u0da0\u0dcf\u0dbb \u0d85\u0db4\u0dd2 \u0d85\u0d9c\u0dba \u0d9a\u0dbb\u0db1\u0dc0\u0dcf,"),(0,a.kt)("p",null,"\u0d94\u0db6\u0da7 \u0d9a\u0dd2\u0dc3\u0dd2\u0dba\u0db8\u0dca \u0db4\u0dca\u200d\u0dbb\u0dc1\u0dca\u0db1, \u0d85\u0daf\u0dc4\u0dc3\u0dca \u0dc4\u0ddd \u0dba\u0ddd\u0da2\u0db1\u0dcf \u0dad\u0dd2\u0db6\u0dda \u0db1\u0db8\u0dca:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"GitHub"))," \u0dc4\u0dbb\u0dc4\u0dcf \u0dba\u0ddc\u0db8\u0dd4 \u0d9a\u0dbb\u0db1\u0dca\u0db1."),(0,a.kt)("li",{parentName:"ul"},"\u0d85\u0db4\u0dd2\u0da7 email \u0d9a\u0dbb\u0db1\u0dca\u0db1 ",(0,a.kt)("a",{parentName:"li",href:"mailto:learnprompting@gmail.com"},"learnprompting@gmail.com")),(0,a.kt)("li",{parentName:"ul"},"\u0d85\u0db4\u0d9c\u0dda ",(0,a.kt)("a",{parentName:"li",href:"https://learnprompting.org/discord"},"Discord")," \u0dc3\u0db8\u0dd4\u0dc4\u0dba \u0dc3\u0db8\u0d9c \u0d91\u0d9a \u0dc0\u0db1\u0dca\u0db1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/learnprompting"},"Twitter")," \u0dc4\u0dbb\u0dc4\u0dcf \u0d85\u0db4 \u0dc4\u0dcf \u0dc3\u0db8\u0dca\u0db6\u0db1\u0dca\u0daf \u0dc0\u0db1\u0dca\u0db1"),(0,a.kt)("li",{parentName:"ul"},"\u0d85\u0db4\u0d9c\u0dd9\u0db1\u0dca ",(0,a.kt)("a",{parentName:"li",href:"https://learnprompting.org/consulting"},"\u0d8b\u0db4\u0daf\u0dd9\u0dc3\u0dca")," \u0dbd\u0db6\u0dcf \u0d9c\u0dd0\u0db1\u0dd3\u0db8 \u0dc3\u0db3\u0dc4\u0dcf \u0dc0\u0dd2\u0db8\u0dc3\u0db1\u0dca\u0db1")),(0,a.kt)("p",null,"\u0d94\u0db6\u0d9c\u0dda \u0d9a\u0dd4\u0da9\u0dcf \u0db4\u0dca\u200d\u0dbb\u0dad\u0dd2\u0da0\u0dcf\u0dbb\u0dba \u0db4\u0dc0\u0dcf \u0d85\u0db4\u0dd2 \u0d89\u0dc4\u0dbd\u0dd2\u0db1\u0dca\u0db8 \u0d85\u0d9c\u0dba \u0d9a\u0dbb\u0db1\u0dc0\u0dcf."),(0,a.kt)("h2",{id:"\u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0\u0dda-\u0dbd\u0d9a\u0dca\u0dc2\u0dab"},"\u0db4\u0dcf\u0da8\u0db8\u0dcf\u0dbd\u0dcf\u0dc0\u0dda \u0dbd\u0d9a\u0dca\u0dc2\u0dab"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0d89\u0d9a\u0dca\u0db8\u0db1\u0dca \u0dc0\u0dd9\u0db1\u0dc3\u0dca\u0dc0\u0dd3\u0db8\u0dca (Quick Iterations)")," - \u0daf\u0dd2\u0db1\u0db4\u0dad\u0dcf \u0db8\u0dda \u0dc0\u0dd2\u0dc2\u0dba \u0db4\u0dd2\u0dc5\u0dd2\u0db6\u0db3\u0dc0 \u0d85\u0dbd\u0dd4\u0dad\u0dca \u0d9a\u0dbb\u0dd4\u0dab\u0dd4 \u0d91\u0d9a\u0dad\u0dd4 \u0dc0\u0db1 \u0db1\u0dd2\u0dc3\u0dcf, \u0db8\u0dda \u0db4\u0dcf\u0da9\u0db8\u0dca \u0db8\u0dcf\u0dbd\u0dcf\u0dc0 \u0db1\u0dd2\u0dad\u0dbb \u0db1\u0dd2\u0dad\u0dbb \u0d85\u0dbd\u0dd4\u0dad\u0dca \u0d9a\u0dbb\u0db1\u0dca\u0db1\u0da7 \u0d85\u0db4\u0dd2 \u0d8b\u0dad\u0dca\u0dc3\u0dc4 \u0d9a\u0dbb\u0db1\u0dc0\u0dcf.\n\u0d94\u0db6\u0da7 \u0d9c\u0dd0\u0db9\u0dd4\u0dbb\u0dd2\u0db1\u0dca \u0d89\u0d9c\u0dd9\u0db1 \u0d9c\u0db1\u0dca\u0db1 \u0d9a\u0dd0\u0db8\u0dad\u0dd2 \u0daf\u0dda \u0d9c\u0dd0\u0db1 \u0d85\u0db4\u0dd2\u0dc0 \u0daf\u0dd0\u0db1\u0dd4\u0dc0\u0dad\u0dca \u0d9a\u0dbb\u0db1\u0dca\u0db1!"),(0,a.kt)("p",null,"\u0d85\u0db4\u0dd2 \u0dc0\u0dd2\u0dc3\u0dca\u0dc0\u0dcf\u0dc3 \u0d9a\u0dbb\u0db1 \u0dad\u0dc0\u0dad\u0dca \u0daf\u0dd9\u0dba\u0d9a\u0dca \u0dad\u0db8\u0dba\u0dd2 ",(0,a.kt)("strong",{parentName:"p"},"\u0dc0\u0dd0\u0dbb\u0daf\u0dd2 \u0dc3\u0d9a\u0dc3\u0db8\u0dd2\u0db1\u0dca \u0d89\u0daf\u0dd2\u0dbb\u0dd2\u0dba\u0da7 \u0dba\u0dcf\u0db8 (error iteration)"),". \u0d94\u0db6\u0da7 \u0db4\u0dd0\u0dc4\u0dd0\u0daf\u0dd2\u0dbd\u0dd2 \u0db1\u0dd0\u0dad\u0dd2 \u0dba\u0db8\u0dca \u0daf\u0dd9\u0dba\u0d9a\u0dca \u0dad\u0dd2\u0dba\u0db1\u0dc0\u0db1\u0db8\u0dca, \u0d91\u0d9a \u0d85\u0db4\u0dda \u0dc0\u0dbb\u0daf\u0d9a\u0dca \u0dc0\u0dd2\u0dba \u0dc4\u0dd0\u0d9a\u0dd2.\n\u0d91\u0dc0\u0dd0\u0db1\u0dd2 \u0daf\u0dd9\u0dba\u0d9a\u0dca \u0dad\u0dd2\u0db6\u0dda\u0db1\u0db8\u0dca \u0db8\u0dd9\u0dc4\u0dd2 \u0dc3\u0db3\u0dc4\u0db1\u0dca \u0d9a\u0dbb\u0db1\u0dca\u0db1.\n",(0,a.kt)("strong",{parentName:"p"},"Please make an ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue on GitHub")),"!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0db4\u0dca\u200d\u0dbb\u0dba\u0ddd\u0d9c\u0dd2\u0d9a \u0db6\u0dcf\u0dc0\u0dd2\u0dad\u0dba \u0db8\u0dd4\u0dbd\u0dd2\u0d9a \u0d9a\u0dbb \u0d9c\u0dd0\u0db1\u0dd3\u0db8 (Focus on Practicality)")," - \u0d85\u0db4\u0dd2 \u0db8\u0dd9\u0dc4\u0dd2 \u0db8\u0dd4\u0dbd\u0dd2\u0d9a \u0dc0\u0dc1\u0dba\u0dd9\u0db1\u0dca \u0d85\u0dc0\u0db0\u0dcf\u0db1\u0dba \u0dba\u0ddc\u0db8\u0dd4 \u0d9a\u0dbb\u0db1\u0dca\u0db1\u0dda \u0db4\u0dca\u200d\u0dbb\u0dba\u0ddd\u0d9c\u0dd2\u0d9a \u0db7\u0dcf\u0dc0\u0dd2\u0dad\u0dba \u0d9c\u0dd0\u0db1. \u0d94\u0db6\u0da7 \u0db8\u0dd9\u0dc4\u0dd2 \u0d87\u0dad\u0dd2 \u0d9a\u0dbb\u0dd4\u0dab\u0dd4 \u0d91\u0dc3\u0dd0\u0db1\u0dd2\u0db1\u0dca \u0d94\u0db6\u0dda \u0d9a\u0dcf\u0dbb\u0dca\u0dba\u0db1\u0dca \u0dc3\u0db3\u0dc4\u0dcf \u0db7\u0dcf\u0dc0\u0dd2\u0dad \u0d9a\u0dbd \u0dc4\u0dd0\u0d9a\u0dd2."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0dc4\u0dd0\u0d9a\u0dd2 \u0d89\u0d9a\u0dca\u0db8\u0db1\u0dd2\u0db1\u0dca \u0d8b\u0daf\u0dcf\u0dc4\u0dbb\u0dab (Examples ASAP)")," - \u0d85\u0db4\u0dd2 \u0dc3\u0dd1\u0db8 \u0db4\u0dcf\u0da9\u0db8\u0d9a\u0da7\u0db8 \u0dc4\u0dd0\u0d9a\u0dd2 \u0d89\u0d9a\u0dca\u0db8\u0db1\u0dd2\u0db1\u0dca \u0d8b\u0daf\u0dcf\u0dc4\u0dbb\u0dab \u0dc3\u0db4\u0dba\u0db1\u0dca\u0db1 \u0dc4\u0dd0\u0d9a\u0dd2 \u0d89\u0d9a\u0dca\u0db8\u0db1\u0dd2\u0db1\u0dca \u0d8b\u0dad\u0dca\u0dc3\u0dc4 \u0d9a\u0dbb\u0db1\u0dc0\u0dcf, \u0d91\u0db1\u0dd2\u0dc3\u0dcf \u0d94\u0db6\u0da7 \u0db8\u0dd9\u0db8 \u0dc3\u0d82\u0d9a\u0dbd\u0dca\u0db4 \u0dc4\u0dcf \u0dc0\u0dd2\u0db0\u0dd2 \u0db7\u0dcf\u0dc0\u0dd2\u0dad\u0dba \u0d9c\u0dd0\u0db1 \u0d89\u0d9a\u0dca\u0db8\u0db1\u0dd2\u0db1\u0dca \u0d85\u0daf\u0dc4\u0dc3\u0d9a\u0dca \u0d9c\u0dad \u0dc4\u0dd0\u0d9a\u0dd2."),(0,a.kt)("p",null,"\u0dad\u0dc0\u0dad\u0dca \u0d9a\u0dbb\u0dd4\u0dab\u0dd4 \u0d89\u0daf\u0dd2\u0dbb\u0dd2\u0dba\u0da7 \ud83d\ude0a"),(0,a.kt)("h2",{id:"\u0d9a\u0ddc\u0dc4\u0ddc\u0db8\u0daf-\u0db8\u0dda-\u0db4\u0dcf\u0da9\u0db8\u0dca-\u0d9a\u0dd2\u0dba\u0dc0\u0db1\u0dca\u0db1-\u0d95\u0db1\u0dda"},"\u0d9a\u0ddc\u0dc4\u0ddc\u0db8\u0daf \u0db8\u0dda \u0db4\u0dcf\u0da9\u0db8\u0dca \u0d9a\u0dd2\u0dba\u0dc0\u0db1\u0dca\u0db1 \u0d95\u0db1\u0dda?"),(0,a.kt)("p",null,"\u0db8\u0dd9\u0db8 \u0db4\u0dcf\u0da9\u0db8\u0dca \u0dad\u0dd2\u0db6\u0dd9\u0db1 \u0db4\u0dd2\u0dbd\u0dd2\u0dc0\u0dbd\u0da7 \u0d9a\u0dd2\u0dba\u0dc0\u0dd3\u0db8 \u0d85\u0db1\u0dd2\u0dc0\u0dcf\u0dbb\u0dca\u0dba \u0db1\u0dd0\u0dc4\u0dd0. \u0d94\u0db6\u0dda \u0d9a\u0dd0\u0db8\u0dd0\u0dad\u0dca\u0dad \u0d85\u0db1\u0dd4\u0dc0 \u0d9a\u0dd2\u0dba\u0dc0\u0db1\u0dca\u0db1."),(0,a.kt)("p",null,"\u0db1\u0db8\u0dd4\u0dad\u0dca, \u0d94\u0db6\u0da7 artificial intelligence (AI) \u0dc4\u0dcf prompt engineering (PE) \u0dba\u0db1\u0dd4 \u0db1\u0dc0\u0dad\u0db8 \u0dc0\u0dd2\u0dc2\u0dba\u0db1\u0dca \u0daf\u0dd9\u0d9a\u0d9a\u0dca \u0db1\u0db8\u0dca, ",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/-basics"},"\u0db8\u0dd4\u0dbd\u0dd2\u0d9a")," \u0d9a\u0dbb\u0dd4\u0dab\u0dd4 \u0dc0\u0dbd\u0dd2\u0db1\u0dca \u0db4\u0da7\u0db1\u0dca \u0d9c\u0db1\u0dca\u0db1. \u0d94\u0db6 \u0daf\u0dd0\u0db1\u0da7\u0db8\u0dad\u0dca \u0db8\u0dda \u0dc0\u0dd2\u0dc2\u0dba\u0db1\u0dca \u0db4\u0dd2\u0dc5\u0dd2\u0db6\u0db3\u0dc0 \u0dba\u0db8\u0dca \u0dc4\u0dd0\u0daf\u0dd1\u0dbb\u0dd3\u0db8\u0d9a\u0dca \u0d9a\u0dbb \u0d87\u0dad\u0dca\u0db1\u0db8\u0dca ",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/%EF%B8%8F-intermediate"},"\u0db8\u0db0\u0dca\u0dba\u0dc3\u0dca\u0dae")," \u0d9a\u0dbb\u0dd4\u0dab\u0dd4 \u0dc0\u0dbd\u0dd2\u0db1\u0dca \u0db4\u0da7\u0db1\u0dca \u0d9c\u0db1\u0dca\u0db1."),(0,a.kt)("p",null,"Articles have a rating system based on the difficulty of a topic and if programming knowledge is required:\n\u0db8\u0dd9\u0dc4\u0dd2 \u0d87\u0dad\u0dd2 \u0db4\u0dcf\u0da9\u0db8\u0dca \u0dc3\u0db3\u0dc4\u0dcf, \u0d91\u0db8 \u0db4\u0dcf\u0da9\u0db8\u0dca \u0db8\u0dcf\u0dad\u0dd8\u0d9a\u0dcf\u0dc0\u0dda \u0d87\u0dad\u0dd2 \u0d9c\u0dd0\u0db9\u0dd4\u0dbb\u0dd4 \u0dc3\u0dca\u0dc0\u0db7\u0dcf\u0dc0\u0dba \u0dc4\u0dcf \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba programming \u0daf\u0dd0\u0db1\u0dd4\u0db8 \u0d85\u0db1\u0dd4\u0dc0 \u0dc1\u0dca\u200d\u0dbb\u0dda\u0dab\u0dd2 \u0d9c\u0dad \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0d9a\u0dca \u0d9a\u0dbb\u0dbd\u0dcf \u0dad\u0dd2\u0dba\u0db1\u0dc0\u0dcf:"),(0,a.kt)("p",null,"\ud83d\udfe2 Very easy; programming \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0db1\u0ddc\u0dc0\u0dda"),(0,a.kt)("p",null,"\ud83d\udfe1 Easy; \u0dba\u0db8\u0dca \u0dc3\u0dbb\u0dbd programming \u0daf\u0dd0\u0db1\u0dd4\u0db8\u0d9a\u0dca \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dc0\u0dda, \u0db1\u0db8\u0dd4\u0dad\u0dca \u0dc0\u0dd2\u0dc2\u0dba \u0db4\u0dd2\u0dbd\u0dd2\u0db6\u0db3 \u0daf\u0dd0\u0db1\u0dd4\u0db8\u0d9a\u0dca \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0db1\u0dd0\u0dad."),(0,a.kt)("p",null,"\ud83d\udd34 Medium; programming \u0daf\u0dd0\u0db1\u0dd4\u0db8 \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dc0\u0dda, \u0dc0\u0dd2\u0dc2\u0dba \u0db4\u0dd2\u0dc5\u0dd2\u0db6\u0db3\u0dc0\u0daf \u0dba\u0db8\u0dca \u0daf\u0dd0\u0db1\u0dd4\u0db8\u0d9a\u0dca \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dc0\u0dda. (e.g. calculating logarithmic probabilities)"),(0,a.kt)("p",null,"\ud83d\udfe3 Hard; programming \u0daf\u0dd0\u0db1\u0dd4\u0db8 \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dc0\u0dda, \u0dc0\u0dd2\u0dc2\u0dba \u0db4\u0dd2\u0dc5\u0dd2\u0db6\u0db3\u0dc0 \u0db4\u0dbb\u0dd2\u0db1\u0dad \u0daf\u0dd0\u0db1\u0dd4\u0db8\u0d9a\u0dca \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dc0\u0dda. (e.g. reinforcement learning approaches)"),(0,a.kt)("p",null,"Note: \ud83d\udd34\ud83d\udfe3 \u0db8\u0dd9\u0db8 \u0dc1\u0dca\u200d\u0dbb\u0dda\u0dab\u0dd2 \u0dc3\u0db3\u0dc4\u0dcf \u0dc0\u0dd2\u0dc2\u0dba \u0daf\u0dd0\u0db1\u0dd4\u0db8 \u0dad\u0dd2\u0db6\u0dd3\u0db8 \u0d8b\u0db4\u0d9a\u0dcf\u0dbb\u0dd3 \u0d8b\u0dc0\u0dad\u0dca, \u0d94\u0db6\u0da7 \u0db4\u0dcf\u0da9\u0db8 \u0d9a\u0dd2\u0dba\u0dc0 \u0dad\u0dda\u0dbb\u0dd4\u0db8\u0dca \u0d9c\u0dd0\u0db1\u0dd3\u0db8\u0da7 \u0dc0\u0dd2\u0dc2\u0dba \u0daf\u0dd0\u0db1\u0dd4\u0db8 \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba\u0db8 \u0db1\u0ddc\u0dc0\u0dda, \u0db1\u0db8\u0dd4\u0dad\u0dca \u0db4\u0dca\u200d\u0dbb\u0dba\u0ddd\u0d9c\u0dd2\u0d9a \u0db7\u0dcf\u0dc0\u0dd2\u0dad\u0dba\u0da7 \u0dc4\u0dcf  \u0d9a\u0dca\u0dbb\u0dd2\u0dba\u0dcf\u0dad\u0dca\u0db8\u0d9a \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0da7 (implementation) \u0dc0\u0dd2\u0dc2\u0dba \u0daf\u0dd0\u0db1\u0dd4\u0db8 \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dc0\u0dda."),(0,a.kt)("h2",{id:"\u0db4\u0dbb\u0dd2\u0da0\u0dca\u0da1\u0dda\u0daf"},"\u0db4\u0dbb\u0dd2\u0da0\u0dca\u0da1\u0dda\u0daf"),(0,a.kt)("p",null,"\u0db8\u0dd9\u0dc4\u0dd2 \u0d87\u0dad\u0dd2 \u0db4\u0dbb\u0dd2\u0da0\u0dca\u0da1\u0dda\u0daf \u0db4\u0dd2\u0dbd\u0dd2\u0db6\u0db3 \u0d9a\u0dd9\u0da7\u0dd2\u0dba\u0dd9\u0db1\u0dca:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Basics"),": PE \u0dc4\u0dd0\u0db3\u0dd2\u0db1\u0dca\u0dc0\u0dd3\u0db8 \u0dc4\u0dcf \u0dc3\u0dbb\u0dbd PE \u0dad\u0dcf\u0d9a\u0dca\u0dc2\u0dab\u0dd2\u0d9a \u0d9a\u0dca\u200d\u0dbb\u0db8"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Intermediate"),": \u0dad\u0dbb\u0db8\u0d9a\u0dca \u0daf\u0dd4\u0dbb\u0da7 \u0dc3\u0d82\u0d9a\u0dd3\u0dbb\u0dca\u0dab, \u0db4\u0dbb\u0dca\u0dba\u0dda\u0dc2\u0dab \u0dc0\u0dbd\u0dd2\u0db1\u0dca \u0dc3\u0db1\u0dcf\u0dae \u0dc0\u0dd6 PE \u0dad\u0dcf\u0d9a\u0dca\u0dc2\u0dab\u0dd2\u0d9a \u0d9a\u0dca\u200d\u0dbb\u0db8"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Applied Prompting"),": \u0db4\u0dca\u200d\u0dbb\u0da2\u0dcf \u0dc3\u0dcf\u0db8\u0dcf\u0da2\u0dd2\u0d9a\u0dba\u0dd2\u0db1\u0dca (community members) \u0dc0\u0dd2\u0dc3\u0dd2\u0db1\u0dca \u0dbd\u0dd2\u0dba\u0db1 \u0dbd\u0daf PE \u0d9a\u0dca\u200d\u0dbb\u0dd2\u0dba\u0dcf\u0dc0\u0dbd\u0dd2\u0dba\u0dda \u0dc3\u0db8\u0dc4\u0dbb \u0dc3\u0db8\u0dca\u0db4\u0dd6\u0dbb\u0dca\u0dab \u0db8\u0d9c \u0db4\u0dd9\u0db1\u0dca\u0dc0\u0dd3\u0db8\u0dca"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Advanced Applications"),": \u0d89\u0dad\u0dcf \u0db6\u0dbd\u0dc3\u0db8\u0dca\u0db4\u0db1\u0dca\u0db1, \u0d89\u0dad\u0dcf \u0d9c\u0dd0\u0db9\u0dd4\u0dbb\u0dd4 PE \u0d86\u0d9a\u0dd8\u0dad\u0dd2 \u0dc4\u0dcf \u0dba\u0dd9\u0daf\u0dd4\u0db8\u0dca"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reliability"),": LLMs \u0dc0\u0da9\u0dcf\u0dad\u0dca \u0dc0\u0dd2\u0dc1\u0dca\u0dc0\u0dcf\u0dc3\u0daf\u0dcf\u0dba\u0d9a \u0d9a\u0dbb\u0db1\u0dca\u0db1\u0dda \u0d9a\u0dd9\u0dc3\u0dda\u0daf"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Images"),": DALLE \u0dc4\u0dcf Stable Diffusion \u0dc0\u0dd0\u0db1\u0dd2 text to image models \u0dc3\u0db3\u0dc4\u0dcf PE"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prompt Injection"),": Hacking, \u0db1\u0db8\u0dd4\u0dad\u0dca PE \u0dc3\u0db3\u0dc4\u0dcf"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prompting IDEs"),": \u0dc0\u0dd2\u0dc0\u0dd2\u0db0 PE \u0db8\u0dd9\u0dc0\u0dbd\u0db8\u0dca"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prompt Tuning"),": gradients \u0db7\u0dcf\u0dc0\u0dd2\u0dad\u0dba\u0dd9\u0db1\u0dca prompts fine tune \u0d9a\u0dd2\u0dbb\u0dd3\u0db8"))}u.isMDXComponent=!0}}]);