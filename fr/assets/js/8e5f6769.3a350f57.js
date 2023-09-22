"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1861],{33626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=a(87462),n=(a(67294),a(3905));const o=a.p+"assets/images/self_consistency-b0397f2f058a64fe8ceceeb2ffc5b0c4.webp";var i=a(39145);const r={sidebar_position:5},l="\ud83d\udfe1 Self-Consistency",c={unversionedId:"intermediate/self_consistency",id:"intermediate/self_consistency",title:"\ud83d\udfe1 Self-Consistency",description:"Self-consistency(@wang2022selfconsistency) is an approach that simply asks a model the same prompt multiple times and takes the majority result as the final answer. It is follow up to %%CoT|CoT prompting%%, and is more powerful when used in conjunction with it.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/intermediate/self_consistency.md",sourceDirName:"intermediate",slug:"/intermediate/self_consistency",permalink:"/fr/docs/intermediate/self_consistency",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/self_consistency.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Zero Shot Chain of Thought",permalink:"/fr/docs/intermediate/zero_shot_cot"},next:{title:"\ud83d\udfe1 Generated Knowledge",permalink:"/fr/docs/intermediate/generated_knowledge"}},p={},h=[{value:"Example",id:"example",level:2},{value:"Results",id:"results",level:2},{value:"Notes",id:"notes",level:2}],m={toc:h},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-self-consistency"},"\ud83d\udfe1 Self-Consistency"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:o,style:{width:"500px"}})),(0,n.kt)("p",null,"Self-consistency",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is an approach that simply asks a model the same prompt multiple times and takes the majority result as the final answer. It is follow up to ",(0,n.kt)("a",{parentName:"p",id:"CoT prompting_2_142_1695412844397","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,n.kt)(i.u,{anchorId:"CoT prompting_2_142_1695412844397",clickable:!0,mdxType:"Tooltip"}),", and is more powerful when used in conjunction with it."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Let's consider a simple example of analyzing emails. Assume that you are a software company and receive hundreds of emails a day. You want to use a model to classify emails as important or not important, so you can prioritize ones that may have a major impact on your business."),(0,n.kt)("p",null,"Here is an example of an email that you might receive:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Hello,\n\nI have discovered a major security vulnerability in your system. Although it is not\neasy to use, it is possible to gain access to all of your users' data. I have attached\na proof of concept. Please fix this issue as soon as possible.\n\nCheers,\n\nDonny\n")),(0,n.kt)("p",null,"Let's put that into a prompt:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Hello,\n\nI have discovered a major security vulnerability in your system. Although it is not\neasy to use, it is possible to gain access to all of your users' data. I have attached\na proof of concept. Please fix this issue as soon as possible.\n\nCheers,\n\nDonny\n\nClassify the above email as IMPORTANT or NOT IMPORTANT as it relates to a software company. Let's think step by step.\n")),(0,n.kt)("p",null,"Now, we will use the above prompt to generate multiple separate completions/chains of thought. Here are a few examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nThe sender has discovered a major security vulnerability in the system. \nThis is important because it could lead to a data breach. \nI would classify this email as IMPORTANT\n\x3c!-- highlight-end --\x3e\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nThe sender has discovered a major security vulnerability in the system, but they have not provided any proof of concept and it is not easy to use. \nI would classify this email as NOT IMPORTANT\n\x3c!-- highlight-end --\x3e\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nThe sender is likely a hacker and may have access to the system. \nThis is important because it could lead to a data breach. \nI would classify this email as IMPORTANT\n\x3c!-- highlight-end --\x3e\n")),(0,n.kt)("p",null,"By generating many chains of thought, and taking the most commonly occurring answer (",(0,n.kt)("inlineCode",{parentName:"p"},"IMPORTANT"),"), we can get a more consistently correct answer from GPT-3."),(0,n.kt)("h2",{id:"results"},"Results"),(0,n.kt)("p",null,"Self-consistency has been shown to improve results on arithmetic, commonsense and symbolic reasoning tasks. Even when regular CoT was found to be ineffective",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", self-consistency\nwas still able to improve results."),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Wang et al. discuss a more complex method for selecting the final answer,\nwhich deals with the LLM generated probabilities for each chain of thought. However, they\ndo not use this method in their experiments, and majority voting seems to usually\nhave the same or better performance.")),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);