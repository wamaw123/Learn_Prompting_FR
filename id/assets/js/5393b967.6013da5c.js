"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4663],{44418:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var t=n(87462),i=(n(67294),n(3905)),r=n(39145);const o={sidebar_position:1},s="\ud83d\udfe2 Pendahuluan",l={unversionedId:"reliability/intro",id:"reliability/intro",title:"\ud83d\udfe2 Pendahuluan",description:"Bab ini membahas bagaimana membuat penyelesaian lebih dapat diandalkan, serta bagaimana mengimplementasikan pemeriksaan untuk memastikan outputnya dapat diandalkan.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/reliability/intro.md",sourceDirName:"reliability",slug:"/reliability/intro",permalink:"/id/docs/reliability/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u2696\ufe0f Reliability",permalink:"/id/docs/category/\ufe0f-reliability"},next:{title:"\ud83d\udfe2 Mengurangi Bias pada Prompt",permalink:"/id/docs/reliability/debiasing"}},p={},m=[],k={toc:m},d="wrapper";function u(a){let{components:e,...n}=a;return(0,i.kt)(d,(0,t.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-pendahuluan"},"\ud83d\udfe2 Pendahuluan"),(0,i.kt)("p",null,"Bab ini membahas bagaimana membuat penyelesaian lebih dapat diandalkan, serta bagaimana mengimplementasikan pemeriksaan untuk memastikan outputnya dapat diandalkan."),(0,i.kt)("p",null,"Secara tertentu, kebanyakan teknik sebelumnya yang dibahas berhubungan dengan peningkatan akurasi penyelesaian, dan karenanya keandalan, terutama konsistensi diri",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Namun, ada sejumlah teknik lain yang dapat digunakan untuk meningkatkan keandalan, di luar strategi dasar untuk pemberian instruksi."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",id:"LLM_0_0_1695414755826","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLMs"),(0,i.kt)(r.u,{anchorId:"LLM_0_0_1695414755826",clickable:!0,mdxType:"Tooltip"})," telah dikenali lebih dapat diandalkan daripada yang kita harapkan dalam menginterpretasikan ",(0,i.kt)("em",{parentName:"p"},"apa yang dimaksud")," oleh instruksi yang salah eja, kurang bersifat formal, atau bahkan menyesatkan",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Meskipun memiliki kemampuan ini, Llm masih menunjukkan berbagai masalah termasuk halusinasi",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),", penjelasan yang cacat dengan metode ",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_8_38_1695414755826","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,i.kt)(r.u,{anchorId:"CoT prompting_8_38_1695414755826",clickable:!0,mdxType:"Tooltip"}),(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),", dan beberapa bias termasuk mayoritas label bias, recency bias, dan common token bias",(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),". Selain itu, CoT tanpa tembakan nol bisa sangat bias ketika berurusan dengan topik sensitif",(0,i.kt)("sup",{parentName:"p",id:"fnref-5"},(0,i.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5")),"."),(0,i.kt)("p",null,"Solusi umum untuk beberapa masalah ini termasuk kalibrator untuk menghilangkan ",(0,i.kt)("em",{parentName:"p"},"bias a priori"),", dan pemeriksa untuk menghitung kelengkapan, serta mempromosikan keberagaman dalam kelengkapan."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Webson, A., Loo, A. M., Yu, Q., & Pavlick, E. (2023). Are Language Models Worse than Humans at Following Prompts? It\u2019s Complicated. arXiv:2301.07085v1 [Cs.CL].\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4"},"Zhao, T. Z., Wallace, E., Feng, S., Klein, D., & Singh, S. (2021). Calibrate Before Use: Improving Few-Shot Performance of Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-5"},"Shaikh, O., Zhang, H., Held, W., Bernstein, M., & Yang, D. (2022). On Second Thought, Let\u2019s Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);