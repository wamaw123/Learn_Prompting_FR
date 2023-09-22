"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2155],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>f});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||l;return t?n.createElement(f,o(o({ref:a},u),{},{components:t})):n.createElement(f,o({ref:a},u))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},99518:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const l={sidebar_position:90},o="\ud83d\udcd9 Vocabulary Reference",i={unversionedId:"vocabulary",id:"vocabulary",title:"\ud83d\udcd9 Vocabulary Reference",description:"Please refer to this page for a list of terms and concepts that we will use throughout this course.",source:"@site/docs/vocabulary.md",sourceDirName:".",slug:"/vocabulary",permalink:"/ar/docs/vocabulary",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/vocabulary.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Music Generation",permalink:"/ar/docs/miscl/music"},next:{title:"\ud83d\udcda Bibliography",permalink:"/ar/docs/bibliography"}},s={},c=[{value:"Large Language Models (LLMs), Pretrained Language Models (PLMs)(@branch2022evaluating), Language Models (LMs), and foundation models",id:"large-language-models-llms-pretrained-language-models-plmsbranch2022evaluating-language-models-lms-and-foundation-models",level:4},{value:"Masked Language Models (MLMs)",id:"masked-language-models-mlms",level:4},{value:"Labels",id:"labels",level:4},{value:"Label Space",id:"label-space",level:4},{value:"Sentiment Analysis",id:"sentiment-analysis",level:4},{value:"&quot;Model&quot; vs. &quot;AI&quot; vs. &quot;LLM&quot;",id:"model-vs-ai-vs-llm",level:4},{value:"Machine Learning (ML)",id:"machine-learning-ml",level:4},{value:"Verbalizer",id:"verbalizer",level:4},{value:"Reinforcement Learning from Human Feedback (RLHF)",id:"reinforcement-learning-from-human-feedback-rlhf",level:4}],u={toc:c},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-vocabulary-reference"},"\ud83d\udcd9 Vocabulary Reference"),(0,r.kt)("p",null,"Please refer to this page for a list of terms and concepts that we will use throughout this course."),(0,r.kt)("h4",{id:"large-language-models-llms-pretrained-language-models-plmsbranch2022evaluating-language-models-lms-and-foundation-models"},"Large Language Models (LLMs), Pretrained Language Models (PLMs)",(0,r.kt)("sup",{parentName:"h4",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", Language Models (LMs), and foundation models"),(0,r.kt)("p",null,"These terms all refer more or less to the same thing: large AIs (neural networks), which have usually been trained\non a huge amount of text."),(0,r.kt)("h4",{id:"masked-language-models-mlms"},"Masked Language Models (MLMs)"),(0,r.kt)("p",null,"MLMs are a type of NLP model, which have a special token, usually ",(0,r.kt)("inlineCode",{parentName:"p"},"[MASK]"),', which is\nreplaced with a word from the vocabulary. The model then predicts the word that\nwas masked. For example, if the sentence is "The dog is ',"[MASK]",' the cat", the model\nwill predict "chasing" with high probability.'),(0,r.kt)("h4",{id:"labels"},"Labels"),(0,r.kt)("p",null,"The concept of labels is best understood with an example."),(0,r.kt)("p",null,"Say we want to classify some Tweets as mean or not mean. If we have a list of Tweets and\ntheir corresponding ",(0,r.kt)("em",{parentName:"p"},"label")," (mean or not mean), we can train a model to classify\nwhether tweets are mean or not. Labels are generally just possibilities for the\nclassification task."),(0,r.kt)("h4",{id:"label-space"},"Label Space"),(0,r.kt)("p",null,"All of the possible labels for a given task ('mean' and 'not mean' for the above example)."),(0,r.kt)("h4",{id:"sentiment-analysis"},"Sentiment Analysis"),(0,r.kt)("p",null,"Sentiment analysis is the task of classifying text into positive, negative, or other sentiments."),(0,r.kt)("h4",{id:"model-vs-ai-vs-llm"},'"Model" vs. "AI" vs. "LLM"'),(0,r.kt)("p",null,'These terms are used somewhat interchangeably throughout this course, but they do\nnot always mean the same thing. LLMs are a type of AI, as noted above, but not all AIs are LLMs.\nWhen we mentioned models in this course, we are referring to AI models. As such, in this course,\nyou can consider the terms "model" and "AI" to be interchangeable.'),(0,r.kt)("h4",{id:"machine-learning-ml"},"Machine Learning (ML)"),(0,r.kt)("p",null,"ML is a field of study that focuses on algorithms that\ncan learn from data. ML is a subfield of AI."),(0,r.kt)("h4",{id:"verbalizer"},"Verbalizer"),(0,r.kt)("p",null,"In the classification setting, verbalizers are mappings from labels to words in\na language model's vocabulary",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". For example, consider\nperforming sentiment classification with the following prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Tweet: \"I love hotpockets\"\nWhat is the sentiment of this tweet? Say 'pos' or 'neg'.\n")),(0,r.kt)("p",null,"Here, the verbalizer is the mapping from the conceptual labels of ",(0,r.kt)("inlineCode",{parentName:"p"},"positive")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"negative")," to the tokens ",(0,r.kt)("inlineCode",{parentName:"p"},"pos")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"neg"),"."),(0,r.kt)("h4",{id:"reinforcement-learning-from-human-feedback-rlhf"},"Reinforcement Learning from Human Feedback (RLHF)"),(0,r.kt)("p",null,"RLHF is a method for fine tuning LLMs according to human preference data."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Branch, H. J., Cefalu, J. R., McHugh, J., Hujer, L., Bahl, A., del Castillo Iglesias, D., Heichman, R., & Darwishi, R. (2022). Evaluating the Susceptibility of Pre-Trained Language Models via Handcrafted Adversarial Examples.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Schick, T., & Sch\xfctze, H. (2020). Exploiting Cloze Questions for Few Shot Text Classification and Natural Language Inference.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);