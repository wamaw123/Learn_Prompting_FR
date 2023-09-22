"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7682],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(o),u=r,g=m["".concat(s,".").concat(u)]||m[u]||p[u]||n;return o?a.createElement(g,i(i({ref:t},d),{},{components:o})):a.createElement(g,i({ref:t},d))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},82515:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=o(87462),r=(o(67294),o(3905));const n={sidebar_position:7},i="\ud83d\udfe1 Revisiting Roles",l={unversionedId:"intermediate/revisiting_roles",id:"intermediate/revisiting_roles",title:"\ud83d\udfe1 Revisiting Roles",description:"Accuracy Boost in Newer Models",source:"@site/docs/intermediate/revisiting_roles.md",sourceDirName:"intermediate",slug:"/intermediate/revisiting_roles",permalink:"/si/docs/intermediate/revisiting_roles",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/revisiting_roles.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Dealing With Long Form Content",permalink:"/si/docs/intermediate/long_form_content"},next:{title:"\ud83d\udfe2 What's in a Prompt?",permalink:"/si/docs/intermediate/whats_in_a_prompt"}},s={},c=[{value:"Accuracy Boost in Newer Models",id:"accuracy-boost-in-newer-models",level:3},{value:"More on Roles",id:"more-on-roles",level:2},{value:"Automatically Create a Role",id:"automatically-create-a-role",level:3},{value:"Multiple Personas Working Together",id:"multiple-personas-working-together",level:3}],d={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-revisiting-roles"},"\ud83d\udfe1 Revisiting Roles"),(0,r.kt)("h3",{id:"accuracy-boost-in-newer-models"},"Accuracy Boost in Newer Models"),(0,r.kt)("p",null,"While older models like GPT-3 davinci-002 reaped significant benefits from role prompting, the efficacy of this strategy appears to have diminished with newer models such as GPT-3.5 or GPT-4. This observation is largely anecdotal and is based on practical usage rather than rigorous systematic testing."),(0,r.kt)("p",null,'To illustrate, assigning the role of "a doctor" or "a lawyer" amplified the relevance and depth of answers in health or legal contexts respectively in previous versions of AI models. This indicates that role-prompts contributed to raising the model\'s comprehension of the subject matter at hand.'),(0,r.kt)("p",null,"However, this level of enhancement seems to be less evident in more recent versions. These advanced models already have a sophisticated understanding and are often sufficiently accurate without the need for role-based reinforcement."),(0,r.kt)("h2",{id:"more-on-roles"},"More on Roles"),(0,r.kt)("p",null,"Roles can be much longer than a sentence. They can ask the AI the complete specific tasks. See a few examples from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/f/awesome-chatgpt-prompts#prompts"},"Awesome ChatGPT Prompts")," below ",(0,r.kt)("sup",{parentName:"p",id:"fnref-b"},(0,r.kt)("a",{parentName:"sup",href:"#fn-b",className:"footnote-ref"},"b")),". "),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"act-as-an-etymologist"},"Act as an Etymologist"),(0,r.kt)("p",{parentName:"blockquote"},"I want you to act as an etymologist. I will give you a word and you will research the origin of that word, tracing it\nback to its ancient roots. You should also provide information on how the meaning of the word has changed over time,\nif applicable. My first request is \"I want to trace the origins of the word 'pizza'\".")),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"act-as-an-absurdist"},"Act as an Absurdist"),(0,r.kt)("p",{parentName:"blockquote"},'I want you to act as an absurdist. The absurdist\'s sentences are meaningless. The words used by an absurdist are completely\nridiculous. The absurdist does not make commonplace sentences in any way. My first suggestion request is "I need help\ncreating absurdist sentences for my new series called Hot Skull, so write 10 sentences for me".')),(0,r.kt)("h3",{id:"automatically-create-a-role"},"Automatically Create a Role"),(0,r.kt)("p",null,"You can ask the AI to create a role for you! You can then use this role as part of another prompt. Try it out here:"),(0,r.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MSwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkxlYWggR3JlZW53b29kIGlzIGEgZmljdGlvbiB3cml0ZXIgZnJvbSBMb3MgQW5nZWxlcywgQ2FsaWZvcm5pYSB3aG8gaGFzIGEgcGFzc2lvbiBmb3IgZXhwbG9yaW5nIHRoZSBkZXB0aHMgb2YgdGhlIGh1bWFuIGNvbmRpdGlvbiB0aHJvdWdoIGhlciB3cml0aW5nLiBTaGUgd2FzIGJvcm4gaW50byBhIGZhbWlseSBvZiBjcmVhdGl2ZSBwZW9wbGU7IGhlciBmYXRoZXIgaXMgYSBzY3VscHRvciwgaGVyIG1vdGhlciBpcyBhIHBhaW50ZXIsIGFuZCBoZXIgYnJvdGhlciBpcyBhIGZpbG1tYWtlci4gQWZ0ZXIgZ2V0dGluZyBoZXIgQkEgaW4gRW5nbGlzaCwgTGVhaCBiZWdhbiB3cml0aW5nIHNob3J0IHN0b3JpZXMgdGhhdCB3ZXJlIGV2ZW50dWFsbHkgcHVibGlzaGVkIGluIHZhcmlvdXMgYW50aG9sb2dpZXMuIFNoZSB0aGVuIHdlbnQgb24gdG8gd3JpdGUgaGVyIGZpcnN0IG5vdmVsIHdoaWNoIGVhcm5lZCBoZXIgYSBub21pbmF0aW9uIGZvciBhIHByZXN0aWdpb3VzIGxpdGVyYXJ5IGF3YXJkLlxuXG5MZWFoIGhhcyBhIGRlZXAgbG92ZSBmb3IgbGl0ZXJhdHVyZSB0aGF0IGhhcyBiZWVuIGEgcGFydCBvZiBoZXIgbGlmZSBmb3IgYXMgbG9uZyBhcyBzaGUgY2FuIHJlbWVtYmVyLiBTaGUgY29tZXMgZnJvbSBhIGRpdmVyc2UgYmFja2dyb3VuZCBhbmQgbGl2ZXMgaW4gYSB2aWJyYW50IGNpdHksIHdoaWNoIHByb3ZpZGVzIGFuIGV2ZXItY2hhbmdpbmcgc291cmNlIG9mIGluc3BpcmF0aW9uIGZvciBoZXIgd3JpdGluZy4gTGVhaOKAmXMgc3RvcmllcyBvZnRlbiBmb2N1cyBvbiBjaGFyYWN0ZXJzIHdobyBhcmUgc2VhcmNoaW5nIGZvciBhY2NlcHRhbmNlLCB0cnV0aCwgYW5kIG1lYW5pbmcgaW4gYSB3b3JsZCB0aGF0IGlzIG9mdGVuIGNvbmZ1c2luZyBhbmQgdW5wcmVkaWN0YWJsZS4gU2hlIHN0cm9uZ2x5IGJlbGlldmVzIHRoYXQgc3RvcmllcyBjYW4gb3BlbiBvdXIgaGVhcnRzIGFuZCBtaW5kcyB0byBuZXcgcGVyc3BlY3RpdmVzLCBhbmQgdGhhdCB0aGV5IGNhbiBoYXZlIHRoZSBwb3dlciB0byB0cmFuc2Zvcm0gbGl2ZXMgaW4gcmVtYXJrYWJsZSB3YXlzLiIsInByb21wdCI6IldyaXRlIGEgYmFja2dyb3VuZCByb2xlL2JpbyBhYm91dCBhIGZpY3Rpb24gd3JpdGVyOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("h3",{id:"multiple-personas-working-together"},"Multiple Personas Working Together"),(0,r.kt)("p",null,"A final anecdote is that you can use multiple role prompted LLMs to work together",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". This can often lead to improvements in both accuracy and quality of text generation. "),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-b"},"These were built for ",(0,r.kt)("em",{parentName:"li"},"ChatGPT"),", but they likely work with other AIs, and you can also use them as inspiration to build your own prompts.",(0,r.kt)("a",{parentName:"li",href:"#fnref-b",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, Z., Mao, S., Wu, W., Ge, T., Wei, F., & Ji, H. (2023). Unleashing Cognitive Synergy in Large Language Models: A Task-Solving Agent through Multi-Persona Self-Collaboration.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);