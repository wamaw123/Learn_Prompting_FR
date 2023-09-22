"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5506],{84127:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>h,toc:()=>c});var i=o(87462),n=(o(67294),o(3905));const a=o.p+"assets/images/zero_shot-2fcfd390293eb7bf9f7d8371c2f6f5a7.webp",s=o.p+"assets/images/zero_shot_example-f98e34cb8ed72c5520cfd08c3c1c2f44.webp";var r=o(39145);const l={sidebar_position:4},p="\ud83d\udfe2 Zero Shot Chain of Thought",h={unversionedId:"intermediate/zero_shot_cot",id:"intermediate/zero_shot_cot",title:"\ud83d\udfe2 Zero Shot Chain of Thought",description:"Zero Shot Chain of Thought (Zero-shot-CoT) prompting (@kojima2022large) is a",source:"@site/docs/intermediate/zero_shot_cot.md",sourceDirName:"intermediate",slug:"/intermediate/zero_shot_cot",permalink:"/ru/docs/intermediate/zero_shot_cot",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/zero_shot_cot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Chain of Thought Prompting",permalink:"/ru/docs/intermediate/chain_of_thought"},next:{title:"\ud83d\udfe1 Self-Consistency",permalink:"/ru/docs/intermediate/self_consistency"}},m={},c=[{value:"Example",id:"example",level:2},{value:"Incorrect",id:"incorrect",level:4},{value:"Correct",id:"correct",level:4},{value:"Results",id:"results",level:2},{value:"Ablations of Interest",id:"ablations-of-interest",level:2},{value:"Notes",id:"notes",level:2}],d=(g="LazyLoadImage",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var g;const f={toc:c},u="wrapper";function b(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,i.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-zero-shot-chain-of-thought"},"\ud83d\udfe2 Zero Shot Chain of Thought"),(0,n.kt)("p",null,"Zero Shot Chain of Thought (Zero-shot-CoT) prompting",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is a\nfollow up to ",(0,n.kt)("a",{parentName:"p",id:"CoT prompting_2_20_1695413978465","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT prompting"),(0,n.kt)(r.u,{anchorId:"CoT prompting_2_20_1695413978465",clickable:!0,mdxType:"Tooltip"}),(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),', which introduces an incredibly\nsimple zero shot prompt. They find that by appending the words "',(0,n.kt)("strong",{parentName:"p"},"Let's think step\nby step."),'" to the end of a question, LLMs are able to generate a chain of\nthought that answers the question. From this chain of thought, they are able to\nextract more accurate answers.'),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:a,style:{width:"500px"}})),(0,n.kt)("div",{style:{textAlign:"center"}},"Zero Shot CoT (Kojima et al.)"),(0,n.kt)("p",null,"Technically, the full Zero-shot-CoT process involves two separate prompts/completions.\nIn the below image, the top bubble on the left generates a chain of thought, while the top bubble on\nthe right takes in the output from the first prompt (including the first prompt itself),\nand extracts the answer from the chain of thought. This second prompt is a ",(0,n.kt)("em",{parentName:"p"},"self augmented")," prompt."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)(d,{src:s,style:{width:"500px"},mdxType:"LazyLoadImage"})),(0,n.kt)("div",{style:{textAlign:"center"}},"Full Zero Shot CoT Process (Kojima et al.)"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Here are a few demos (which only perform reasoning extraction). This first\ndemo shows GPT-3 (davinci-003) failing a simple math question, while the second demo uses a\nZero-shot-CoT prompt and successfully solves the problem. Feel free to enter your\nOpenAI API key (Click Generate) and play around with the examples. Note how much simpler\nthe Zero-shot-CoT prompt is compared to the CoT prompt."),(0,n.kt)("h4",{id:"incorrect"},"Incorrect"),(0,n.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("h4",{id:"correct"},"Correct"),(0,n.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("h2",{id:"results"},"Results"),(0,n.kt)("p",null,"Zero-shot-CoT was also effective in improving results on arithmetic, commonsense,\nand symbolic reasoning tasks. However, unsurprisingly, it was usually not as\neffective as CoT prompting. An important use case for Zero-shot-CoT is when obtaining\nfew shot examples for CoT prompting is difficult. "),(0,n.kt)("h2",{id:"ablations-of-interest"},"Ablations of Interest"),(0,n.kt)("p",null,'Kojima et al. experiment with a number of different Zero-shot-CoT prompts\n(e.g. "Let\u2019s solve this problem by splitting it into steps." or "Let\u2019s think about this logically."), but they find that "Let\'s think step by step" is most effective for their\nchosen tasks.'),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("p",null,"The extraction step often must be task specific, making Zero-Shot-CoT less\ngeneralizable than it appears at first."),(0,n.kt)("p",null,"Anecdotally, I've found that Zero-shot-CoT style prompts are sometimes effective\nin improving the length of completions for generative tasks. For example, consider\nthe standard prompt ",(0,n.kt)("inlineCode",{parentName:"p"},"Write a story about a frog and a mushroom who become friends."),"\nAppending the words ",(0,n.kt)("inlineCode",{parentName:"p"},"Let's think step by step.")," to the end of this prompt leads to\na much longer completion."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0}}]);