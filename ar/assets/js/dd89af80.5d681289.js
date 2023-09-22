"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,g=u["".concat(p,".").concat(m)]||u[m]||h[m]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:20},a="\ud83d\udfe2 Prompt Engineering",s={unversionedId:"basics/prompt_engineering",id:"basics/prompt_engineering",title:"\ud83d\udfe2 Prompt Engineering",description:"- What is prompt engineering?",source:"@site/docs/basics/prompt_engineering.md",sourceDirName:"basics",slug:"/basics/prompt_engineering",permalink:"/ar/docs/basics/prompt_engineering",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/prompt_engineering.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Prompting With ChatGPT",permalink:"/ar/docs/basics/prompting"},next:{title:"\ud83d\udfe2 Learn Prompting Embeds",permalink:"/ar/docs/basics/embeds"}},p={},l=[{value:"What Happens When a Prompt Doesn&#39;t Work?",id:"what-happens-when-a-prompt-doesnt-work",level:2},{value:"ArchaeologistAI Example",id:"archaeologistai-example",level:3},{value:"Conclusion",id:"conclusion",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=c("AIInput"),h=c("AIOutput"),m={toc:l},g="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-prompt-engineering"},"\ud83d\udfe2 Prompt Engineering"),(0,o.kt)("admonition",{type:"takeaways"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"What is prompt engineering?"))),(0,o.kt)("h2",{id:"what-happens-when-a-prompt-doesnt-work"},"What Happens When a Prompt Doesn't Work?"),(0,o.kt)("p",null,"Sometimes Gen AIs give incorrect outputs to prompts. For example, they are not very good at multiplying numbers, and will often confidently give you an incorrect answer. Try giving the following prompt to ChatGPT:"),(0,o.kt)(u,{mdxType:"AIInput"},"What is 923 * 99?"),(0,o.kt)(h,{mdxType:"AIOutput"},"923 * 99 equals 91,677."),(0,o.kt)("p",null,"ChatGPT gave an incorrect answer (the correct answer is 91,377). We can modify our prompt, and tell ChatGPT to think through its steps."),(0,o.kt)(u,{mdxType:"AIInput"},"What is 923 * 99? Let's go step by step. Always write out the full number of 0s for each term."),(0,o.kt)(h,{mdxType:"AIOutput"},"To multiply 923 by 99, we can break it down into smaller steps:",(0,o.kt)("p",null,"Step 1: Write out the full number of 0s for each term:\n923 ","*"," 99 = 923 ","*"," 990"),(0,o.kt)("p",null,"Step 2: Multiply the first term by 9:\n923 ","*"," 9 = 8307"),(0,o.kt)("p",null,"Step 3: Multiply the first term by 90 (adding one 0):\n923 ","*"," 90 = 83070"),(0,o.kt)("p",null,"Step 4: Add the results from step 2 and step 3:\n8307 + 83070 = 91377"),(0,o.kt)("p",null,"Therefore, 923 multiplied by 99 is equal to 91,377.")),(0,o.kt)("p",null,"Surprisingly, these additional instructions, ChatGPT is able to solve the problem. This worked because ChatGPT wrote out all of its work, and thus did not make mistakes. Gen AI's mathematical abilities can be improved by prompt engineering. Now, let's try a different example. "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Since ChatGPT is ",(0,o.kt)("a",{href:"https://learnprompting.org/docs/basics/configuration_hyperparameters"},"non-deterministic"),", even this prompt sometimes won't work. You may see answers like 91,177 or 91,077.")),(0,o.kt)("h3",{id:"archaeologistai-example"},"ArchaeologistAI Example"),(0,o.kt)("p",null,"This time, we will ask ChatGPT to write a marketing tweet about a new, fictional AI product we are thinking of creating: ArchaeologistAI. ArchaeologistAI tells stories about famous archaeologists."),(0,o.kt)(u,{mdxType:"AIInput"},"Write a tweet about ArchaeologistAI"),(0,o.kt)(h,{mdxType:"AIOutput"},'"\ud83d\udd0d Exciting times ahead with #ArchaeologistAI! This cutting-edge technology is revolutionizing the field of archaeology, helping us uncover ancient mysteries and piece together our past like never before. Can\'t wait to see what hidden treasures and insights it unveils! #AI #Archaeology"'),(0,o.kt)("p",null,"This Tweet is not accurate, since ArchaeologistAI only tells stories, and does not discover new things. However, this is not ChatGPT's fault! It did not know anything about ArchaeologistAI. Let's include relevant information in the prompt."),(0,o.kt)(u,{mdxType:"AIInput"},"Write a tweet about ArchaeologistAI: ArchaeologistAI tells stories about famous archaeologists."),(0,o.kt)(h,{mdxType:"AIOutput"},'"\ud83d\udd0d Unearth the captivating tales of legendary archaeologists with #ArchaeologistAI! From Indiana Jones to Mary Leakey, this AI-powered storyteller brings their adventures to life, shedding light on their groundbreaking discoveries and inspiring the next generation of explorers. \ud83c\udf0d #Archaeology"'),(0,o.kt)("p",null,"This is much better! Now let's try to make ChatGPT write the Tweet in the style of Indiana Jones."),(0,o.kt)(u,{mdxType:"AIInput"},"Write a tweet about ArchaeologistAI, in the style of Indiana Jones: ArchaeologistAI tells stories about famous archaeologists."),(0,o.kt)(h,{mdxType:"AIOutput"},'"Grab your fedora and whip, folks! \ud83c\udfa9\ud83d\udd25 ArchaeologistAI is like having a personal Sallah by your side, sharing captivating tales of legendary archaeologists who\'ve braved ancient tombs and unearthed hidden treasures! \ud83d\uddfa\ufe0f\ud83d\udc8e Get ready to embark on a digital adventure through history! #ArchaeologistAI #UnearthTheLegends"'),(0,o.kt)("p",null,"Alright, that may be the message we need to target archaeology fans! By testing multiple prompts, we can see which one gives the best output. "),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This process of refining our prompt over time is known as prompt engineering. You will never write the perfect prompt on your first try, so it is important to get good at refining your prompt. Being good at prompt engineering mostly comes from lots of practice (trial and error). The rest of the articles in this section will introduce you to different prompting strategies which you can use in your prompt engineering process."))}d.isMDXComponent=!0}}]);