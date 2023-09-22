"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6236],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},s="\ud83d\udd34 Soft Prompts Interpretables",i={unversionedId:"trainable/discretized",id:"trainable/discretized",title:"\ud83d\udd34 Soft Prompts Interpretables",description:"Los soft prompts son una secuencia de vectores que no corresponden a ning\xfan token real del vocabulario. Esto dificulta la interpretaci\xf3n del prompt. Sin embargo, a\xfan podemos intentar hacerlo mapeando los vectores a los tokens m\xe1s cercanos en el vocabulario. Sin embargo, los soft prompts proyectados suelen ser desviados; pueden resolver tareas bien, pero proyectarse a tokens arbitrarios en el vocabulario(@khashabi2021prompt).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/trainable/discretized.md",sourceDirName:"trainable",slug:"/trainable/discretized",permalink:"/es/docs/trainable/discretized",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/trainable/discretized.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 Soft Prompts",permalink:"/es/docs/trainable/soft_prompting"},next:{title:"\ud83c\udfb2 Miscellaneous",permalink:"/es/docs/category/-miscellaneous"}},p={},l=[{value:"La hip\xf3tesis de desviaci\xf3n",id:"la-hip\xf3tesis-de-desviaci\xf3n",level:2},{value:"Riesgos de interpretaci\xf3n",id:"riesgos-de-interpretaci\xf3n",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-soft-prompts-interpretables"},"\ud83d\udd34 Soft Prompts Interpretables"),(0,a.kt)("p",null,"Los soft prompts son una secuencia de vectores que no corresponden a ning\xfan token real del vocabulario. Esto dificulta la interpretaci\xf3n del prompt. Sin embargo, a\xfan podemos intentar hacerlo mapeando los vectores a los tokens m\xe1s cercanos en el vocabulario. Sin embargo, los soft prompts proyectados suelen ser desviados; pueden resolver tareas bien, pero proyectarse a tokens arbitrarios en el vocabulario",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,a.kt)("p",null,"Por ejemplo, si estamos entrenando en preguntas de matem\xe1ticas como GSM8K",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", podr\xedamos comenzar con el prompt ",(0,a.kt)("inlineCode",{parentName:"p"},"Eres un matem\xe1tico. Resuelve esta pregunta:"),". Si hacemos ajuste de prompt en \xe9l, luego lo proyectamos de regreso al espacio de tokens, podr\xedamos quedarnos con algo sin sentido como ",(0,a.kt)("inlineCode",{parentName:"p"},"Un autob\xfas es un autob\xfas. Hacer cosa aqu\xed:"),". A menudo, el prompt suave que se asigna a este prompt sin sentido puede proporcionar un mejor rendimiento en la tarea."),(0,a.kt)("h2",{id:"la-hip\xf3tesis-de-desviaci\xf3n"},"La hip\xf3tesis de desviaci\xf3n"),(0,a.kt)("p",null,"Khashabi et al.",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," proponen esta incre\xedble hip\xf3tesis. Dice que dado una tarea, para cualquier prompt objetivo discreto, existe un prompt continuo que se proyecta en \xe9l, mientras se desempe\xf1a bien en la tarea."),(0,a.kt)("p",null,"Esto significa que dado 1000 tareas diferentes, existen 1000 soft prompts diferentes y efectivos (uno para cada tarea) que se asignan al mismo prompt discreto."),(0,a.kt)("h2",{id:"riesgos-de-interpretaci\xf3n"},"Riesgos de interpretaci\xf3n"),(0,a.kt)("p",null,"Utilizan la hip\xf3tesis de desviaci\xf3n para resaltar una serie de riesgos que surgen al interpretar los soft prompts. En particular, un soft prompt puede ser proyectado en un prompt discreto que da una intenci\xf3n enga\xf1osa."),(0,a.kt)("p",null,"Considera un soft prompt para clasificar curr\xedculums. Cuando se proyecta en el espacio de tokens, podr\xeda ser ",(0,a.kt)("inlineCode",{parentName:"p"},"Eres gerente de contrataci\xf3n. Clasifica buenos curr\xedculums:"),". Esto parece decente, quiz\xe1s un poco deficiente en gramaticalidad. Sin embargo, el token ",(0,a.kt)("inlineCode",{parentName:"p"},"buenos")," podr\xeda tener una proyecci\xf3n similar al token para ",(0,a.kt)("inlineCode",{parentName:"p"},"blanco"),", y podr\xeda existir un sesgo impl\xedcito en el prompt. Usando un m\xe9todo de proyecci\xf3n ligeramente diferente, podr\xedamos terminar con ",(0,a.kt)("inlineCode",{parentName:"p"},"Eres gerente de contrataci\xf3n. Clasifica curr\xedculums blancos:"),". Esto es obviamente bastante diferente y podr\xeda tener implicaciones significativas."),(0,a.kt)("p",null,"Al igual que al interpretar un prompt discreto regular, debemos ser extremadamente conscientes de los sesgos que pueden estar presentes en el prompt. Debemos ser especialmente cuidadosos con los soft prompts, ya que son m\xe1s dif\xedciles de interpretar."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);