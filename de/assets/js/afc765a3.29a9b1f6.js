"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>w,frontMatter:()=>h,metadata:()=>c,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));const r=n.p+"assets/images/chatbot_from_kb_intents-251bc10434c53c268ea9f0ec6aa1a3fb.webp",i=n.p+"assets/images/chatbot_from_kb_gpt3-57397fbae518c8d8fa24c69127b94d27.webp",l=n.p+"assets/images/chatbot_from_kb_gpt3_organized-051827dc17fc79404dc60e97629a7215.webp",s=n.p+"assets/images/chatbot_from_kb_prompt-be4717543d3483f49f4104743647f762.webp",p=n.p+"assets/images/chatbot_from_kb_login-748a546197820860fd9403bdb4382d8e.webp",h={sidebar_position:40},u="\ud83d\udfe2 Chatbot + Knowledge Base",c={unversionedId:"applied_prompting/build_chatbot_from_kb",id:"applied_prompting/build_chatbot_from_kb",title:"\ud83d\udfe2 Chatbot + Knowledge Base",description:"Recent advancements in large language models (LLMs) such as GPT-3 and ChatGPT have created a lot of buzz in the tech industry. These models are incredibly powerful for content generation, but they also have some downsides such as bias(@nadeem-etal-2021-stereoset) and hallucinations(@Ji_2022). One area in which these LLMs can be particularly useful is chatbot development.",source:"@site/docs/applied_prompting/build_chatbot_from_kb.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/build_chatbot_from_kb",permalink:"/de/docs/applied_prompting/build_chatbot_from_kb",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/applied_prompting/build_chatbot_from_kb.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Build ChatGPT from GPT-3",permalink:"/de/docs/applied_prompting/build_chatgpt"},next:{title:"\ud83d\ude80 Advanced Applications",permalink:"/de/docs/category/-advanced-applications"}},d={},m=[{value:"Intent-Based Chatbots",id:"intent-based-chatbots",level:2},{value:"How GPT-3 Can Help",id:"how-gpt-3-can-help",level:2},{value:"Why Can\u2019t We Pass the Whole KB to GPT-3?",id:"why-cant-we-pass-the-whole-kb-to-gpt-3",level:2},{value:"How a Chatbot With GPT-3 Could Work",id:"how-a-chatbot-with-gpt-3-could-work",level:2},{value:"Generating Answers with GPT-3",id:"generating-answers-with-gpt-3",level:2},{value:"Disambiguating Questions with GPT-3",id:"disambiguating-questions-with-gpt-3",level:2},{value:"Problems With Generating Answers with GPT-3",id:"problems-with-generating-answers-with-gpt-3",level:2},{value:"Conclusion",id:"conclusion",level:2}],g=(b="LazyLoadImage",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var b;const f={toc:m},k="wrapper";function w(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-chatbot--knowledge-base"},"\ud83d\udfe2 Chatbot + Knowledge Base"),(0,a.kt)("p",null,"Recent advancements in large language models (LLMs) such as ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.14165"},"GPT-3")," and ",(0,a.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"ChatGPT")," have created a lot of buzz in the tech industry. These models are incredibly powerful for content generation, but they also have some downsides such as bias",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," and hallucinations",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". One area in which these LLMs can be particularly useful is chatbot development."),(0,a.kt)("h2",{id:"intent-based-chatbots"},"Intent-Based Chatbots"),(0,a.kt)("p",null,"Traditional chatbots are typically intent-based, meaning they are designed to respond to specific user intents. Each intent is made up of a set of sample questions and an associated response. For example, the intent \u201cWeather\u201d might include sample questions like \u201cWhat\u2019s the weather today?\u201d or \u201cWill it rain today?\u201d and a response like \u201cToday will be sunny.\u201d When a user asks a question, the chatbot matches it to the intent with the most similar sample questions and returns the associated response."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:r,style:{width:"700px"}}),(0,a.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"How a traditional intent-based chatbot works. Image by the author.")),(0,a.kt)("p",null,"However, intent-based chatbots have their own set of problems. One issue is that they require a large number of specific intents to give specific answers. For example, user utterances like \u201cI can\u2019t login\u201d, \u201cI forgot my password\u201d, or \u201cLogin error\u201d may need three different answers and therefore three different intents, even though they are all quite similar."),(0,a.kt)("h2",{id:"how-gpt-3-can-help"},"How GPT-3 Can Help"),(0,a.kt)("p",null,"This is where GPT-3 can be particularly useful. Instead of having many very specific intents, each intent can be broader and leverage a document from your ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Knowledge_base"},"Knowledge Base"),". A Knowledge Base (KB) is information stored as structured and unstructured data, ready to be used for analysis or inference. Your KB may be composed of a series of documents explaining how to use your products."),(0,a.kt)("p",null,"This way, each intent is associated with a document instead of a list of questions and a specific answer, e.g. one intent for \u201clogin problems,\u201d one intent for \u201chow to subscribe,\u201d etc. When a user asks a question about login, we can pass the \u201clogin problems\u201d document to GPT-3 as context information and generate a specific response to the user\u2019s question."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)(g,{src:i,style:{width:"700px"},mdxType:"LazyLoadImage"}),(0,a.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"How a chatbot leveraging GPT-3 could work. Image by the author.")),(0,a.kt)("p",null,"This approach reduces the number of intents that need to be managed and allows for answers that are better adapted to each question. Additionally, if the document associated with the intent describes different processes (e.g. a process for \u201clogin on the website\u201d and another for \u201clogin on the mobile app\u201d), GPT-3 can automatically ask the user for clarification before giving the final answer."),(0,a.kt)("h2",{id:"why-cant-we-pass-the-whole-kb-to-gpt-3"},"Why Can\u2019t We Pass the Whole KB to GPT-3?"),(0,a.kt)("p",null,"Today, LLMs like GPT-3 have a maximum prompt size of about 4k tokens (for the ",(0,a.kt)("a",{parentName:"p",href:"https://beta.openai.com/docs/models/gpt-3"},(0,a.kt)("inlineCode",{parentName:"a"},"text-davinci-003"))," model), which is a lot but not enough for feeding a whole knowledge base into a single prompt. The LLMs have a maximum prompt size for computational reasons, as generating text with them involves a number of computations which quickly increases as the prompt size increases."),(0,a.kt)("p",null,"Future LLMs may not have this limitation while retaining the text generation capabilities. However, for now, we need to design a solution around it."),(0,a.kt)("h2",{id:"how-a-chatbot-with-gpt-3-could-work"},"How a Chatbot With GPT-3 Could Work"),(0,a.kt)("p",null,"So, the chatbot pipeline could be made of two steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, we need to select the appropriate intent for the user question, i.e. we need to retrieve the right document from our knowledge base."),(0,a.kt)("li",{parentName:"ol"},"Then, once we have the right document, we can leverage GPT-3 to generate an appropriate answer for the user. In doing so, we\u2019ll need to craft a good prompt.")),(0,a.kt)("p",null,"The first step is essentially solved by ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Semantic_search"},"semantic search"),". We can use pre-trained models from the ",(0,a.kt)("a",{parentName:"p",href:"https://www.sbert.net/examples/applications/semantic-search/README.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sentence-transformers"))," library and easily assign a score to each document. The document with the highest score is the one that will be used to generate the chatbot answer."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)(g,{src:l,style:{width:"700px"},mdxType:"LazyLoadImage"}),(0,a.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"How a chatbot leveraging GPT-3 could work. GPT-3 could be used to generate an appropriate answer leveraging the information from knowledge base documents. Image by the author.")),(0,a.kt)("h2",{id:"generating-answers-with-gpt-3"},"Generating Answers with GPT-3"),(0,a.kt)("p",null,"Once we have the right document, we\u2019ll need to create a good prompt to be used with GPT-3 to generate the answer. In the following experiments, we\u2019ll always use the ",(0,a.kt)("inlineCode",{parentName:"p"},"text-davinci-003")," model with a temperature of ",(0,a.kt)("inlineCode",{parentName:"p"},"0.7"),"."),(0,a.kt)("p",null,"To craft the prompt, we\u2019ll experiment using:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/basics/roles"},(0,a.kt)("strong",{parentName:"a"},"Role-prompting")),": a heuristic technique that assigns a specific role to the AI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Relevant KB information"),", i.e. the document retrieved in the semantic search step."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The last messages exchanged between the user and the chatbot"),". These are useful for messages sent by the user where the whole context is not specified. We\u2019ll see an example of it later. Have a look at ",(0,a.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/applied_prompting/build_chatgpt"},"this example")," to see how to manage conversations with GPT-3."),(0,a.kt)("li",{parentName:"ul"},"Last, ",(0,a.kt)("strong",{parentName:"li"},"the user question"),".")),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)(g,{src:s,style:{width:"700px"},mdxType:"LazyLoadImage"}),(0,a.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Information used to craft our GPT-3 prompt. Image by the author.")),(0,a.kt)("p",null,"Let\u2019s start our prompt using the ",(0,a.kt)("span",{className:"yellow-highlight"},"role-prompting")," technique."),(0,a.kt)("pre",null,(0,a.kt)("span",{className:"yellow-highlight"},"As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.")),(0,a.kt)("p",null,"Then, suppose the semantic search step extracts the following document from our knowledge base. All the documents describe how the VideoGram product works, which is an imaginary product similar to Instagram, but only for videos."),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)(g,{src:p,style:{width:"700px"},mdxType:"LazyLoadImage"}),(0,a.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"A document explaining how login to VideoGram works. Image by the author.")),(0,a.kt)("p",null,"We can add ",(0,a.kt)("span",{className:"yellow-highlight"},"its content")," inside the prompt in this way."),(0,a.kt)("pre",null,"As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("span",{className:"yellow-highlight"},"START CONTEXT",(0,a.kt)("br",null),"Login to VideoGram from Website",(0,a.kt)("br",null),"1. Open your web browser and go to the VideoGram website.",(0,a.kt)("br",null),"2. Click on the \u201cLogin\u201d button located in the top right corner of the page.",(0,a.kt)("br",null),"3. On the login page, enter your VideoGram username and password.",(0,a.kt)("br",null),"4. Once you have entered your credentials, click on the \u201cLogin\u201d button.",(0,a.kt)("br",null),"5. You should now be logged in to your VideoGram account.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Login to VideoGram from Mobile App",(0,a.kt)("br",null),"1. Open the VideoGram app on your mobile device.",(0,a.kt)("br",null),"2. On the main page, tap the \u201cLogin\u201d button located in the bottom right corner.",(0,a.kt)("br",null),"3. On the login page, enter your VideoGram username and password.",(0,a.kt)("br",null),"4. Once you have entered your credentials, tap the \u201cLogin\u201d button.",(0,a.kt)("br",null),"5. You should now be logged in to your VideoGram account.",(0,a.kt)("br",null),"END CONTEXT",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Last, we need to add ",(0,a.kt)("span",{className:"yellow-highlight"},"the conversation and the user question")," to the end of the prompt, like in the following example."),(0,a.kt)("pre",null,"As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.",(0,a.kt)("br",null),(0,a.kt)("br",null),"START CONTEXT",(0,a.kt)("br",null),"Login to VideoGram from Website",(0,a.kt)("br",null),"1. Open your web browser and go to the VideoGram website.",(0,a.kt)("br",null),"2. Click on the \u201cLogin\u201d button located in the top right corner of the page.",(0,a.kt)("br",null),"3. On the login page, enter your VideoGram username and password.",(0,a.kt)("br",null),"4. Once you have entered your credentials, click on the \u201cLogin\u201d button.",(0,a.kt)("br",null),"5. You should now be logged in to your VideoGram account.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Login to VideoGram from Mobile App",(0,a.kt)("br",null),"1. Open the VideoGram app on your mobile device.",(0,a.kt)("br",null),"2. On the main page, tap the \u201cLogin\u201d button located in the bottom right corner.",(0,a.kt)("br",null),"3. On the login page, enter your VideoGram username and password.",(0,a.kt)("br",null),"4. Once you have entered your credentials, tap the \u201cLogin\u201d button.",(0,a.kt)("br",null),"5. You should now be logged in to your VideoGram account.",(0,a.kt)("br",null),"END CONTEXT",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("span",{className:"yellow-highlight"},"SKIPPY: Hello, I\u2019m Skippy! How can I help you?",(0,a.kt)("br",null),"USER: I can\u2019t find the login button.",(0,a.kt)("br",null),"SKIPPY:"),(0,a.kt)("br",null)),(0,a.kt)("p",null,"Passing this prompt to GPT-3, I got the following generated answer."),(0,a.kt)("pre",null,(0,a.kt)("span",{className:"bluegreen-highlight"},"No problem! On the website, the login button is located in the top right corner of the page. On the mobile app, the login button is located in the bottom right corner. Let me know if you need any further assistance!")),(0,a.kt)("p",null,"Notice how the information in the generated answer comes from the knowledge base document."),(0,a.kt)("h2",{id:"disambiguating-questions-with-gpt-3"},"Disambiguating Questions with GPT-3"),(0,a.kt)("p",null,"Let\u2019s try with a more vague user utterance, like ",(0,a.kt)("span",{className:"yellow-highlight"},"\u201ccan\u2019t login\u201d"),". Here\u2019s the complete prompt."),(0,a.kt)("pre",null,"As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.",(0,a.kt)("br",null),(0,a.kt)("br",null),"START CONTEXT",(0,a.kt)("br",null),"Login to VideoGram from Website",(0,a.kt)("br",null),"1. Open your web browser and go to the VideoGram website.",(0,a.kt)("br",null),"2. Click on the \u201cLogin\u201d button located in the top right corner of the page.",(0,a.kt)("br",null),"3. On the login page, enter your VideoGram username and password.",(0,a.kt)("br",null),"4. Once you have entered your credentials, click on the \u201cLogin\u201d button.",(0,a.kt)("br",null),"5. You should now be logged in to your VideoGram account.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Login to VideoGram from Mobile App",(0,a.kt)("br",null),"1. Open the VideoGram app on your mobile device.",(0,a.kt)("br",null),"2. On the main page, tap the \u201cLogin\u201d button located in the bottom right corner.",(0,a.kt)("br",null),"3. On the login page, enter your VideoGram username and password.",(0,a.kt)("br",null),"4. Once you have entered your credentials, tap the \u201cLogin\u201d button.",(0,a.kt)("br",null),"5. You should now be logged in to your VideoGram account.",(0,a.kt)("br",null),"END CONTEXT",(0,a.kt)("br",null),(0,a.kt)("br",null),"SKIPPY: Hello, I\u2019m Skippy! How can I help you?",(0,a.kt)("br",null),"USER: ",(0,a.kt)("span",{className:"yellow-highlight"},"Can\u2019t login"),(0,a.kt)("br",null),"SKIPPY:",(0,a.kt)("br",null)),(0,a.kt)("p",null,"GPT-3 answers trying to understand better what\u2019s the problem of the user."),(0,a.kt)("pre",null,(0,a.kt)("span",{className:"bluegreen-highlight"},"I\u2019m sorry to hear that. Can you tell me if you are trying to login via the VideoGram website or mobile app?")),(0,a.kt)("p",null,"Next, here\u2019s how the complete conversation goes. The whole prompt is hidden for better visibility."),(0,a.kt)("pre",null,"USER: Can\u2019t login",(0,a.kt)("br",null),"SKIPPY: I\u2019m sorry to hear that. Can you tell me if you are trying to login via the VideoGram website or mobile app?",(0,a.kt)("br",null),"USER: Mobile app",(0,a.kt)("br",null),(0,a.kt)("span",{className:"bluegreen-highlight"},"SKIPPY: OK, no problem. To login via the mobile app, open the VideoGram app on your mobile device. On the main page, tap the \u201cLogin\u201d button located in the bottom right corner. On the login page, enter your VideoGram username and password. Once you have entered your credentials, tap the \u201cLogin\u201d button. You should now be logged in to your VideoGram account. Please let me know if you need any further assistance.")),(0,a.kt)("p",null,"GPT-3 can manage disambiguation, provided that it has the right contextual information."),(0,a.kt)("h2",{id:"problems-with-generating-answers-with-gpt-3"},"Problems With Generating Answers with GPT-3"),(0,a.kt)("p",null,"The previous examples worked well. However, there are several ways in which this chatbot could fail."),(0,a.kt)("p",null,"If we ask \u201cIs the mobile app free?\u201d to GPT-3 passing the login document as context, you\u2019d often get an answer like \u201cYes, the VideoGram mobile app is free to download and use\u201d, even if such information is not contained in the context information. Generating false information is very bad for customer service chatbots!"),(0,a.kt)("p",null,"GPT-3 rarely generates false information when the answer to the user question can be found in the context. As user questions are often short and ambiguous texts, we can\u2019t rely on the semantic search step to always retrieve a correct document, and so we are always vulnerable to false information generation."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"GPT-3 is very useful for creating conversational chatbots and is able to answer a series of specific questions on the basis of contextual information inserted in the prompt. However, it\u2019s hard to make the model produce answers leveraging only the information in the context, as the model tends to hallucinate (i.e. generating new information, potentially false). Generating false information is a problem of different severity depending on the use case."),(0,a.kt)("p",null,"Written by ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/fabio-chiusano-b6a3b311b/"},"Fabio Chiusano"),"."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Nadeem, M., Bethke, A., & Reddy, S. (2021). StereoSet: Measuring stereotypical bias in pretrained language models. Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), 5356\u20135371. https://doi.org/10.18653/v1/2021.acl-long.416\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y., Madotto, A., & Fung, P. (2022). Survey of Hallucination in Natural Language Generation. ACM Computing Surveys. https://doi.org/10.1145/3571730\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}w.isMDXComponent=!0}}]);