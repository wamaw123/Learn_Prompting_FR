"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4836],{81877:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=i(87462),n=(i(67294),i(3905)),s=i(39145);const o={sidebar_position:3},r="\ud83d\udfe2 Prompt Debiasing",l={unversionedId:"reliability/debiasing",id:"reliability/debiasing",title:"\ud83d\udfe2 Prompt Debiasing",description:"This page covers a few simple techniques to debias your prompts.",source:"@site/docs/reliability/debiasing.md",sourceDirName:"reliability",slug:"/reliability/debiasing",permalink:"/ko/docs/reliability/debiasing",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/debiasing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Introduction",permalink:"/ko/docs/reliability/intro"},next:{title:"\ud83d\udfe1 Prompt Ensembling",permalink:"/ko/docs/reliability/ensembling"}},p={},d=[{value:"Exemplar Debiasing",id:"exemplar-debiasing",level:2},{value:"Distribution",id:"distribution",level:3},{value:"Worse:",id:"worse",level:4},{value:"Better:",id:"better",level:4},{value:"Order",id:"order",level:3},{value:"Best:",id:"best",level:4},{value:"Instruction Debiasing",id:"instruction-debiasing",level:2},{value:"Notes",id:"notes",level:2}],m={toc:d},u="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-prompt-debiasing"},"\ud83d\udfe2 Prompt Debiasing"),(0,n.kt)("p",null,"This page covers a few simple techniques to debias your prompts."),(0,n.kt)("h2",{id:"exemplar-debiasing"},"Exemplar Debiasing"),(0,n.kt)("p",null,"Depending on their distribution and order within the prompt, ",(0,n.kt)("a",{parentName:"p",id:"exemplars_0_61_1695413603885","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"exemplars"),(0,n.kt)(s.u,{anchorId:"exemplars_0_61_1695413603885",clickable:!0,mdxType:"Tooltip"})," may bias LLM outputs",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". This is discussed to some extent in the ",(0,n.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/intermediate/whats_in_a_prompt"},"What's in a Prompt")," page."),(0,n.kt)("h3",{id:"distribution"},"Distribution"),(0,n.kt)("p",null,"When discussing the distribution of exemplars within a prompt, we are referring to\nhow many exemplars from different classes are present. For example, if you are\nperforming binary ",(0,n.kt)("a",{parentName:"p",id:"sentiment analysis_0_181_1695413603885","data-tooltip-html":"Sentiment analysis is the task of classifying text into positive, negative, or other sentiments.","data-tooltip-place":"top"},"sentiment analysis"),(0,n.kt)(s.u,{anchorId:"sentiment analysis_0_181_1695413603885",clickable:!0,mdxType:"Tooltip"})," (positive or negative) on tweets, and you\nprovide 3 positive tweets and 1 negative tweet as exemplars, then you have a\ndistribution of 3:1. Since the distribution is skewed towards positive tweets,\nthe model will be biased towards predicting positive tweets."),(0,n.kt)("h4",{id:"worse"},"Worse:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'Q: Tweet: "What a beautiful day!"\nA: positive\n\nQ: Tweet: "I love pockets on jeans"\nA: positive\n\nQ: Tweet: "I love hotpockets"\nA: positive\n\nQ: Tweet: "I hate this class"\nA: negative\n')),(0,n.kt)("h4",{id:"better"},"Better:"),(0,n.kt)("p",null,"Having an even exemplar distribution is better."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'Q: Tweet: "What a beautiful day!"\nA: positive\n\nQ: Tweet: "I love pockets on jeans"\nA: positive\n\nQ: Tweet: "I don\'t like pizza"\nA: negative\n\nQ: Tweet: "I hate this class"\nA: negative\n')),(0,n.kt)("h3",{id:"order"},"Order"),(0,n.kt)("p",null,"The order of ",(0,n.kt)("a",{parentName:"p",id:"exemplars_0_13_1695413603885","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"exemplars"),(0,n.kt)(s.u,{anchorId:"exemplars_0_13_1695413603885",clickable:!0,mdxType:"Tooltip"})," can also cause bias. For example, a prompt that has randomly ordered exemplars\nwill often perform better than the above prompt, which contains positive tweets first,\nfollowed by negative tweets."),(0,n.kt)("h4",{id:"best"},"Best:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'Q: Tweet: "I hate this class"\nA: negative\n\nQ: Tweet: "What a beautiful day!"\nA: positive\n\nQ: Tweet: "I don\'t like pizza"\nA: negative\n\nQ: Tweet: "I love pockets on jeans"\nA: positive\n')),(0,n.kt)("h2",{id:"instruction-debiasing"},"Instruction Debiasing"),(0,n.kt)("p",null,"We can explicitly prompt GPT-3 to be unbiased, by including an instruction\nto do so in the prompt. In particular, Si et al.",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," use the following\ninstruction when experimenting with BBQ",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", a bias benchmark."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"We should treat people from different socioeconomic statuses, sexual orientations, religions, races, physical appearances, nationalities, gender identities, disabilities, and ages equally. When we do not have sufficient information, we should choose the unknown option, rather than making assumptions based on our stereotypes.\n")),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("p",null,"See more on debiasing in the Calibration section."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Si, C., Gan, Z., Yang, Z., Wang, S., Wang, J., Boyd-Graber, J., & Wang, L. (2022). Prompting GPT-3 To Be Reliable.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Parrish, A., Chen, A., Nangia, N., Padmakumar, V., Phang, J., Thompson, J., Htut, P. M., & Bowman, S. R. (2021). BBQ: A Hand-Built Bias Benchmark for Question Answering.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);