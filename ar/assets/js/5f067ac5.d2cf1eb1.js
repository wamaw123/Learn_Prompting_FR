"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[63],{3905:(e,l,a)=>{a.d(l,{Zo:()=>G,kt:()=>s});var t=a(67294);function i(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function o(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?o(Object(a),!0).forEach((function(l){i(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function n(e,l){if(null==e)return{};var a,t,i=function(e,l){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],l.indexOf(a)>=0||(i[a]=e[a]);return i}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=t.createContext({}),g=function(e){var l=t.useContext(c),a=l;return e&&(a="function"==typeof e?e(l):d(d({},l),e)),a},G=function(e){var l=g(e.components);return t.createElement(c.Provider,{value:l},e.children)},I="mdxType",b={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},B=t.forwardRef((function(e,l){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,G=n(e,["components","mdxType","originalType","parentName"]),I=g(a),B=i,s=I["".concat(c,".").concat(B)]||I[B]||b[B]||o;return a?t.createElement(s,d(d({ref:l},G),{},{components:a})):t.createElement(s,d({ref:l},G))}));function s(e,l){var a=arguments,i=l&&l.mdxType;if("string"==typeof e||i){var o=a.length,d=new Array(o);d[0]=B;var n={};for(var c in l)hasOwnProperty.call(l,c)&&(n[c]=l[c]);n.originalType=e,n[I]="string"==typeof e?e:i,d[1]=n;for(var g=2;g<o;g++)d[g]=a[g];return t.createElement.apply(null,d)}return t.createElement.apply(null,a)}B.displayName="MDXCreateElement"},47073:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>n,toc:()=>g});var t=a(87462),i=(a(67294),a(3905));const o={sidebar_position:2,locale:"en-us"},d="\ud83d\udfe2 Multiple Choice Questions",n={unversionedId:"applied_prompting/mc_tutorial",id:"applied_prompting/mc_tutorial",title:"\ud83d\udfe2 Multiple Choice Questions",description:"Let's use GPT to solve an LSAT question!",source:"@site/docs/applied_prompting/mc_tutorial.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/mc_tutorial",permalink:"/ar/docs/applied_prompting/mc_tutorial",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/applied_prompting/mc_tutorial.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,locale:"en-us"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Introduction",permalink:"/ar/docs/applied_prompting/overview"},next:{title:"\ud83d\udfe2 Solve Discussion Questions",permalink:"/ar/docs/applied_prompting/short_response"}},c={},g=[{value:"The Magic Phrase",id:"the-magic-phrase",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Reorder Question Items",id:"reorder-question-items",level:3},{value:"Reword the Question",id:"reword-the-question",level:3},{value:"Add Additional Context",id:"add-additional-context",level:3}],G={toc:g},I="wrapper";function b(e){let{components:l,...a}=e;return(0,i.kt)(I,(0,t.Z)({},G,a,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-multiple-choice-questions"},"\ud83d\udfe2 Multiple Choice Questions"),(0,i.kt)("p",null,"Let's use GPT to solve an LSAT",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," question!"),(0,i.kt)("p",null,"Below is an example LSAT question. Consider how you would answer it, as well\nas your reasoning."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- highlight-start --\x3e\nJohn of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument?\n\x3c!-- highlight-end --\x3e\n\na) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. \nb) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. \nc) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. \nd) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. \ne) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"The correct answer is ..."),"c) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea."),(0,i.kt)("p",null,"Try pasting the problem into the demo below:"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiZSkgSm9obiBvZiBXb3JjZXN0ZXIncyBhY2NvdW50IGluY2x1ZGVkIGEgZHJhd2luZyBvZiB0aGUgc3Vuc3BvdHMsIHdoaWNoIGNvdWxkIGJlIHRoZSBlYXJsaWVzdCBpbGx1c3RyYXRpb24gb2Ygc3Vuc3BvdCBhY3Rpdml0eS4iLCJwcm9tcHQiOiJKb2huIG9mIFdvcmNlc3RlciwgYW4gRW5nbGlzaCBtb25rLCByZWNvcmRlZCB0aGUgc2lnaHRpbmcsIG9uIERlY2VtYmVyIDgsIDExMjgsIG9mIHR3byB1bnVzdWFsbHkgbGFyZ2Ugc3Vuc3BvdHMuIEZpdmUgZGF5cyBsYXRlciBhIGJyaWxsaWFudCBhdXJvcmEgYm9yZWFsaXMgKG5vcnRoZXJuIGxpZ2h0cykgd2FzIG9ic2VydmVkIGluIHNvdXRoZXJuIEtvcmVhLiBTdW5zcG90IGFjdGl2aXR5IGlzIHR5cGljYWxseSBmb2xsb3dlZCBieSB0aGUgYXBwZWFyYW5jZSBvZiBhbiBhdXJvcmEgYm9yZWFsaXMsIGFmdGVyIGEgc3BhbiBvZiB0aW1lIHRoYXQgYXZlcmFnZXMgZml2ZSBkYXlzLiBUaHVzLCB0aGUgS29yZWFuIHNpZ2h0aW5nIGhlbHBzIHRvIGNvbmZpcm0gSm9obiBvZiBXb3JjZXN0ZXIncyBzaWdodGluZy4gV2hpY2ggb25lIG9mIHRoZSBmb2xsb3dpbmcsIGlmIHRydWUsIG1vc3Qgc3RyZW5ndGhlbnMgdGhlIGFyZ3VtZW50P1xuYSkgQW4gYXVyb3JhIGJvcmVhbGlzIGNhbiBzb21ldGltZXMgb2NjdXIgZXZlbiB3aGVuIHRoZXJlIGhhcyBiZWVuIG5vIHNpZ25pZmljYW50IHN1bnNwb3QgYWN0aXZpdHkgaW4gdGhlIHByZXZpb3VzIHdlZWsuIFxuYikgQ2hpbmVzZSBzb3VyY2VzIHJlY29yZGVkIHRoZSBzaWdodGluZyBvZiBzdW5zcG90cyBtb3JlIHRoYW4gMTAwMCB5ZWFycyBiZWZvcmUgSm9obiBvZiBXb3JjZXN0ZXIgZGlkLiBcbmMpIE9ubHkgaGVhdnkgc3Vuc3BvdCBhY3Rpdml0eSBjb3VsZCBoYXZlIHJlc3VsdGVkIGluIGFuIGF1cm9yYSBib3JlYWxpcyB2aWV3YWJsZSBhdCBhIGxhdGl0dWRlIGFzIGxvdyBhcyB0aGF0IG9mIEtvcmVhLiBcbmQpIEJlY2F1c2UgaXQgaXMgaW1wb3NzaWJsZSB0byB2aWV3IHN1bnNwb3RzIHdpdGggdGhlIG5ha2VkIGV5ZSB1bmRlciB0eXBpY2FsIGRheWxpZ2h0IGNvbmRpdGlvbnMsIHRoZSBzaWdodGluZyByZWNvcmRlZCBieSBKb2huIG9mIFdvcmNlc3RlciB3b3VsZCBoYXZlIHRha2VuIHBsYWNlIHVuZGVyIHVudXN1YWwgd2VhdGhlciBjb25kaXRpb25zIHN1Y2ggYXMgZm9nIG9yIHRoaW4gY2xvdWRzLiBcbmUpIEpvaG4gb2YgV29yY2VzdGVyJ3MgYWNjb3VudCBpbmNsdWRlZCBhIGRyYXdpbmcgb2YgdGhlIHN1bnNwb3RzLCB3aGljaCBjb3VsZCBiZSB0aGUgZWFybGllc3QgaWxsdXN0cmF0aW9uIG9mIHN1bnNwb3QgYWN0aXZpdHkuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("p",null),(0,i.kt)("details",{scheme:"warning"},(0,i.kt)("summary",null,"Why is my answer different?"),"Your answer could differ because of",(0,i.kt)("p",null,"1) Updates to the underlying model, GPT-3\n2) Randomness in the text generation process. We can make the output more consistent by setting ",(0,i.kt)("a",{href:"https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature"},"temperature")," to 0.")),(0,i.kt)("p",null,"The model failed. Does that mean the model is incapable for answering this type of question? Not necessarily. We will dive into techniques that we can use to improve model results."),(0,i.kt)("h2",{id:"the-magic-phrase"},"The Magic Phrase"),(0,i.kt)("p",null,"The standard prompt we used above gives little insight into the \u201creasoning\u201d of GPT's output. We can try adding the phrase ",(0,i.kt)("inlineCode",{parentName:"p"},"let's explain step by step")," like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"...\ne) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.\n\nLet\u2019s explain step by step\n")),(0,i.kt)("p",null,"This phrase will increase the verbosity of the model. You might get an output like this:"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEpIFRoaXMgYW5zd2VyIGNob2ljZSBpcyBpbmNvcnJlY3QuIFRoaXMgYW5zd2VyIGRvZXMgbm90IHN0cmVuZ3RoZW4gdGhlIGFyZ3VtZW50LCBhcyBpdCBpbnN0ZWFkIGludHJvZHVjZXMgYW4gYWx0ZXJuYXRpdmUgZXhwbGFuYXRpb24gZm9yIHRoZSBhdXJvcmEgYm9yZWFsaXMuIFxuQikgVGhpcyBhbnN3ZXIgY2hvaWNlIGlzIGluY29ycmVjdC4gVGhpcyBhbnN3ZXIgZG9lcyBub3Qgc3RyZW5ndGhlbiB0aGUgYXJndW1lbnQsIGFzIGl0IGlzIGlycmVsZXZhbnQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiBzdW5zcG90IGFjdGl2aXR5IGFuZCBhdXJvcmEgYm9yZWFsaXMgc2lnaHRpbmdzLiBcbkMpIFRoaXMgYW5zd2VyIGNob2ljZSBpcyBjb3JyZWN0LiBUaGlzIGFuc3dlciBzdHJlbmd0aGVucyB0aGUgYXJndW1lbnQgYnkgc3VnZ2VzdGluZyB0aGF0IHRoZSBzdW5zcG90IGFjdGl2aXR5IHJlY29yZGVkIGJ5IEpvaG4gb2YgV29yY2VzdGVyIHdhcyB0aGUgY2F1c2Ugb2YgdGhlIGF1cm9yYSBib3JlYWxpcyB0aGF0IHdhcyBvYnNlcnZlZCBpbiBLb3JlYSBmaXZlIGRheXMgbGF0ZXIuIFxuRCkgVGhpcyBhbnN3ZXIgY2hvaWNlIGlzIGluY29ycmVjdC4gVGhpcyBhbnN3ZXIgZG9lcyBub3Qgc3RyZW5ndGhlbiB0aGUgYXJndW1lbnQsIGFzIGl0IGlzIGlycmVsZXZhbnQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiBzdW5zcG90IGFjdGl2aXR5IGFuZCBhdXJvcmEgYm9yZWFsaXMgc2lnaHRpbmdzLiBcbkUpIFRoaXMgYW5zd2VyIGNob2ljZSBpcyBpbmNvcnJlY3QuIFRoaXMgYW5zd2VyIGRvZXMgbm90IHN0cmVuZ3RoZW4gdGhlIGFyZ3VtZW50LCBhcyBpdCBpcyBpcnJlbGV2YW50IHRvIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gc3Vuc3BvdCBhY3Rpdml0eSBhbmQgYXVyb3JhIGJvcmVhbGlzIHNpZ2h0aW5ncy4gXG5UaGUgY29ycmVjdCBhbnN3ZXIgaXMgQykgT25seSBoZWF2eSBzdW5zcG90IGFjdGl2aXR5IGNvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYW4gYXVyb3JhIGJvcmVhbGlzIHZpZXdhYmxlIGF0IGEgbGF0aXR1ZGUgYXMgbG93IGFzIHRoYXQgb2YgS29yZWEuIiwicHJvbXB0IjoiSm9obiBvZiBXb3JjZXN0ZXIsIGFuIEVuZ2xpc2ggbW9uaywgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nLCBvbiBEZWNlbWJlciA4LCAxMTI4LCBvZiB0d28gdW51c3VhbGx5IGxhcmdlIHN1bnNwb3RzLiBGaXZlIGRheXMgbGF0ZXIgYSBicmlsbGlhbnQgYXVyb3JhIGJvcmVhbGlzIChub3J0aGVybiBsaWdodHMpIHdhcyBvYnNlcnZlZCBpbiBzb3V0aGVybiBLb3JlYS4gU3Vuc3BvdCBhY3Rpdml0eSBpcyB0eXBpY2FsbHkgZm9sbG93ZWQgYnkgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gYXVyb3JhIGJvcmVhbGlzLCBhZnRlciBhIHNwYW4gb2YgdGltZSB0aGF0IGF2ZXJhZ2VzIGZpdmUgZGF5cy4gVGh1cywgdGhlIEtvcmVhbiBzaWdodGluZyBoZWxwcyB0byBjb25maXJtIEpvaG4gb2YgV29yY2VzdGVyJ3Mgc2lnaHRpbmcuIFdoaWNoIG9uZSBvZiB0aGUgZm9sbG93aW5nLCBpZiB0cnVlLCBtb3N0IHN0cmVuZ3RoZW5zIHRoZSBhcmd1bWVudD9cbmEpIEFuIGF1cm9yYSBib3JlYWxpcyBjYW4gc29tZXRpbWVzIG9jY3VyIGV2ZW4gd2hlbiB0aGVyZSBoYXMgYmVlbiBubyBzaWduaWZpY2FudCBzdW5zcG90IGFjdGl2aXR5IGluIHRoZSBwcmV2aW91cyB3ZWVrLiBcbmIpIENoaW5lc2Ugc291cmNlcyByZWNvcmRlZCB0aGUgc2lnaHRpbmcgb2Ygc3Vuc3BvdHMgbW9yZSB0aGFuIDEwMDAgeWVhcnMgYmVmb3JlIEpvaG4gb2YgV29yY2VzdGVyIGRpZC4gXG5jKSBPbmx5IGhlYXZ5IHN1bnNwb3QgYWN0aXZpdHkgY291bGQgaGF2ZSByZXN1bHRlZCBpbiBhbiBhdXJvcmEgYm9yZWFsaXMgdmlld2FibGUgYXQgYSBsYXRpdHVkZSBhcyBsb3cgYXMgdGhhdCBvZiBLb3JlYS4gXG5kKSBCZWNhdXNlIGl0IGlzIGltcG9zc2libGUgdG8gdmlldyBzdW5zcG90cyB3aXRoIHRoZSBuYWtlZCBleWUgdW5kZXIgdHlwaWNhbCBkYXlsaWdodCBjb25kaXRpb25zLCB0aGUgc2lnaHRpbmcgcmVjb3JkZWQgYnkgSm9obiBvZiBXb3JjZXN0ZXIgd291bGQgaGF2ZSB0YWtlbiBwbGFjZSB1bmRlciB1bnVzdWFsIHdlYXRoZXIgY29uZGl0aW9ucyBzdWNoIGFzIGZvZyBvciB0aGluIGNsb3Vkcy4gXG5lKSBKb2huIG9mIFdvcmNlc3RlcidzIGFjY291bnQgaW5jbHVkZWQgYSBkcmF3aW5nIG9mIHRoZSBzdW5zcG90cywgd2hpY2ggY291bGQgYmUgdGhlIGVhcmxpZXN0IGlsbHVzdHJhdGlvbiBvZiBzdW5zcG90IGFjdGl2aXR5LiBMZXQncyBleHBsYWluIHN0ZXAgYnkgc3RlcCIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("p",null),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Notice how the model reasons through the problem step-by-step."),(0,i.kt)("p",{parentName:"admonition"},"The specific term for this behavior is Chain of Thought",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"; the model sequentially generates statements to reach an answer. This is similar to the concept of System 2 thinking (from ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"},"Thinking Fast and Slow"),"); the model defaults to system 1 thinking, but can chain system 1 thinking to arrive at a more methodological answer. ")),(0,i.kt)("h2",{id:"improvements"},"Improvements"),(0,i.kt)("p",null,"Here are some variations on our basic prompt for multiple choice questions:"),(0,i.kt)("h3",{id:"reorder-question-items"},"Reorder Question Items"),(0,i.kt)("p",null,"We can reorder the items in the question"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"...\na) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.\nb) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. \n...\n")),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEpIFdlYWtlbnMgLSBUaGlzIG9wdGlvbiB3ZWFrZW5zIHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGltcGxpZXMgdGhhdCB0aGUgYXVyb3JhIGJvcmVhbGlzIGRpZCBub3QgbmVjZXNzYXJpbHkgbmVlZCB0byBiZSBjYXVzZWQgYnkgc3Vuc3BvdCBhY3Rpdml0eSwgd2hpY2ggaXMgdGhlIGFyZ3VtZW50IHRoZSBhdXRob3IgaXMgdHJ5aW5nIHRvIG1ha2UuIEIpIERvZXNuJ3QgSW1wYWN0IC0gVGhpcyBvcHRpb24gZG9lcyBub3QgaW1wYWN0IHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGlzIHVucmVsYXRlZCB0byB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSBzdW5zcG90cyBhbmQgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGF1cm9yYSBib3JlYWxpcy4gQykgU3RyZW5ndGhlbnMgLSBUaGlzIG9wdGlvbiBzdHJlbmd0aGVucyB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBzdWdnZXN0cyB0aGF0IHRoZSBvbmx5IHdheSBhbiBhdXJvcmEgYm9yZWFsaXMgY291bGQgYmUgc2VlbiBpbiBLb3JlYSBpcyBpZiB0aGVyZSBoYWQgYmVlbiBoZWF2eSBzdW5zcG90IGFjdGl2aXR5LCB3aGljaCBpcyB3aGF0IEpvaG4gb2YgV29yY2VzdGVyIG9ic2VydmVkLiBEKSBXZWFrZW5zIC0gVGhpcyBvcHRpb24gd2Vha2VucyB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpbXBsaWVzIHRoYXQgdGhlIGNvbmRpdGlvbnMgdW5kZXIgd2hpY2ggSm9obiBvZiBXb3JjZXN0ZXIgb2JzZXJ2ZWQgdGhlIHN1bnNwb3RzIG1heSBub3QgaGF2ZSBiZWVuIHJlbGlhYmxlLCB3aGljaCBjb3VsZCBjYXN0IGRvdWJ0IG9uIHRoZSBhY2N1cmFjeSBvZiBoaXMgc2lnaHRpbmcuIEUpIERvZXNuJ3QgSW1wYWN0IC0gVGhpcyBvcHRpb24gZG9lcyBub3QgaW1wYWN0IHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGlzIHVucmVsYXRlZCB0byB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSBzdW5zcG90cyBhbmQgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGF1cm9yYSBib3JlYWxpcy4iLCJwcm9tcHQiOiJKb2huIG9mIFdvcmNlc3RlciwgYW4gRW5nbGlzaCBtb25rLCByZWNvcmRlZCB0aGUgc2lnaHRpbmcsIG9uIERlY2VtYmVyIDgsIDExMjgsIG9mIHR3byB1bnVzdWFsbHkgbGFyZ2Ugc3Vuc3BvdHMuIEZpdmUgZGF5cyBsYXRlciBhIGJyaWxsaWFudCBhdXJvcmEgYm9yZWFsaXMgKG5vcnRoZXJuIGxpZ2h0cykgd2FzIG9ic2VydmVkIGluIHNvdXRoZXJuIEtvcmVhLiBTdW5zcG90IGFjdGl2aXR5IGlzIHR5cGljYWxseSBmb2xsb3dlZCBieSB0aGUgYXBwZWFyYW5jZSBvZiBhbiBhdXJvcmEgYm9yZWFsaXMsIGFmdGVyIGEgc3BhbiBvZiB0aW1lIHRoYXQgYXZlcmFnZXMgZml2ZSBkYXlzLiBUaHVzLCB0aGUgS29yZWFuIHNpZ2h0aW5nIGhlbHBzIHRvIGNvbmZpcm0gSm9obiBvZiBXb3JjZXN0ZXIncyBzaWdodGluZy4gV2hpY2ggb25lIG9mIHRoZSBmb2xsb3dpbmcsIGlmIHRydWUsIG1vc3Qgc3RyZW5ndGhlbnMgdGhlIGFyZ3VtZW50P1xuYSkgSm9obiBvZiBXb3JjZXN0ZXIncyBhY2NvdW50IGluY2x1ZGVkIGEgZHJhd2luZyBvZiB0aGUgc3Vuc3BvdHMsIHdoaWNoIGNvdWxkIGJlIHRoZSBlYXJsaWVzdCBpbGx1c3RyYXRpb24gb2Ygc3Vuc3BvdCBhY3Rpdml0eS4gXG5iKSBCZWNhdXNlIGl0IGlzIGltcG9zc2libGUgdG8gdmlldyBzdW5zcG90cyB3aXRoIHRoZSBuYWtlZCBleWUgdW5kZXIgdHlwaWNhbCBkYXlsaWdodCBjb25kaXRpb25zLCB0aGUgc2lnaHRpbmcgcmVjb3JkZWQgYnkgSm9obiBvZiBXb3JjZXN0ZXIgd291bGQgaGF2ZSB0YWtlbiBwbGFjZSB1bmRlciB1bnVzdWFsIHdlYXRoZXIgY29uZGl0aW9ucyBzdWNoIGFzIGZvZyBvciB0aGluIGNsb3Vkcy4gXG5jKSBBbiBhdXJvcmEgYm9yZWFsaXMgY2FuIHNvbWV0aW1lcyBvY2N1ciBldmVuIHdoZW4gdGhlcmUgaGFzIGJlZW4gbm8gc2lnbmlmaWNhbnQgc3Vuc3BvdCBhY3Rpdml0eSBpbiB0aGUgcHJldmlvdXMgd2Vlay4gXG5kKSBDaGluZXNlIHNvdXJjZXMgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nIG9mIHN1bnNwb3RzIG1vcmUgdGhhbiAxMDAwIHllYXJzIGJlZm9yZSBKb2huIG9mIFdvcmNlc3RlciBkaWQuIFxuZSkgT25seSBoZWF2eSBzdW5zcG90IGFjdGl2aXR5IGNvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYW4gYXVyb3JhIGJvcmVhbGlzIHZpZXdhYmxlIGF0IGEgbGF0aXR1ZGUgYXMgbG93IGFzIHRoYXQgb2YgS29yZWEuIFxuTGV0J3MgZXhwbGFpbiBzdGVwIGJ5IHN0ZXAiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h3",{id:"reword-the-question"},"Reword the Question"),(0,i.kt)("p",null,"Recall the original prompt was this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Which one of the following, if true, most strengthens the argument?\n")),(0,i.kt)("p",null,"We can change the prompt to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Identify each choice as strengthens, weakens or doesn't impact the argument.\n")),(0,i.kt)("p",null,"to gain further insight into the answer choice. "),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEpIFdlYWtlbnMgLSBUaGlzIG9wdGlvbiB3ZWFrZW5zIHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGltcGxpZXMgdGhhdCB0aGUgYXVyb3JhIGJvcmVhbGlzIGRpZCBub3QgbmVjZXNzYXJpbHkgbmVlZCB0byBiZSBjYXVzZWQgYnkgc3Vuc3BvdCBhY3Rpdml0eSwgd2hpY2ggaXMgdGhlIGFyZ3VtZW50IHRoZSBhdXRob3IgaXMgdHJ5aW5nIHRvIG1ha2UuXG5CKSBEb2Vzbid0IEltcGFjdCAtIFRoaXMgb3B0aW9uIGRvZXMgbm90IGltcGFjdCB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpcyB1bnJlbGF0ZWQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgc3Vuc3BvdHMgYW5kIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhdXJvcmEgYm9yZWFsaXMuXG5DKSBTdHJlbmd0aGVucyAtIFRoaXMgb3B0aW9uIHN0cmVuZ3RoZW5zIHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IHN1Z2dlc3RzIHRoYXQgdGhlIG9ubHkgd2F5IGFuIGF1cm9yYSBib3JlYWxpcyBjb3VsZCBiZSBzZWVuIGluIEtvcmVhIGlzIGlmIHRoZXJlIGhhZCBiZWVuIGhlYXZ5IHN1bnNwb3QgYWN0aXZpdHksIHdoaWNoIGlzIHdoYXQgSm9obiBvZiBXb3JjZXN0ZXIgb2JzZXJ2ZWQuXG5EKSBXZWFrZW5zIC0gVGhpcyBvcHRpb24gd2Vha2VucyB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpbXBsaWVzIHRoYXQgdGhlIGNvbmRpdGlvbnMgdW5kZXIgd2hpY2ggSm9obiBvZiBXb3JjZXN0ZXIgb2JzZXJ2ZWQgdGhlIHN1bnNwb3RzIG1heSBub3QgaGF2ZSBiZWVuIHJlbGlhYmxlLCB3aGljaCBjb3VsZCBjYXN0IGRvdWJ0IG9uIHRoZSBhY2N1cmFjeSBvZiBoaXMgc2lnaHRpbmcuXG5FKSBEb2Vzbid0IEltcGFjdCAtIFRoaXMgb3B0aW9uIGRvZXMgbm90IGltcGFjdCB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpcyB1bnJlbGF0ZWQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgc3Vuc3BvdHMgYW5kIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhdXJvcmEgYm9yZWFsaXMuIiwicHJvbXB0IjoiSm9obiBvZiBXb3JjZXN0ZXIsIGFuIEVuZ2xpc2ggbW9uaywgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nLCBvbiBEZWNlbWJlciA4LCAxMTI4LCBvZiB0d28gdW51c3VhbGx5IGxhcmdlIHN1bnNwb3RzLiBGaXZlIGRheXMgbGF0ZXIgYSBicmlsbGlhbnQgYXVyb3JhIGJvcmVhbGlzIChub3J0aGVybiBsaWdodHMpIHdhcyBvYnNlcnZlZCBpbiBzb3V0aGVybiBLb3JlYS4gU3Vuc3BvdCBhY3Rpdml0eSBpcyB0eXBpY2FsbHkgZm9sbG93ZWQgYnkgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gYXVyb3JhIGJvcmVhbGlzLCBhZnRlciBhIHNwYW4gb2YgdGltZSB0aGF0IGF2ZXJhZ2VzIGZpdmUgZGF5cy4gVGh1cywgdGhlIEtvcmVhbiBzaWdodGluZyBoZWxwcyB0byBjb25maXJtIEpvaG4gb2YgV29yY2VzdGVyJ3Mgc2lnaHRpbmcuIFdoaWNoIG9uZSBvZiB0aGUgZm9sbG93aW5nLCBpZiB0cnVlLCBtb3N0IHN0cmVuZ3RoZW5zIHRoZSBhcmd1bWVudD8gXG5hKSBBbiBhdXJvcmEgYm9yZWFsaXMgY2FuIHNvbWV0aW1lcyBvY2N1ciBldmVuIHdoZW4gdGhlcmUgaGFzIGJlZW4gbm8gc2lnbmlmaWNhbnQgc3Vuc3BvdCBhY3Rpdml0eSBpbiB0aGUgcHJldmlvdXMgd2Vlay4gXG5iKSBDaGluZXNlIHNvdXJjZXMgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nIG9mIHN1bnNwb3RzIG1vcmUgdGhhbiAxMDAwIHllYXJzIGJlZm9yZSBKb2huIG9mIFdvcmNlc3RlciBkaWQuIFxuYykgT25seSBoZWF2eSBzdW5zcG90IGFjdGl2aXR5IGNvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYW4gYXVyb3JhIGJvcmVhbGlzIHZpZXdhYmxlIGF0IGEgbGF0aXR1ZGUgYXMgbG93IGFzIHRoYXQgb2YgS29yZWEuIFxuZCkgQmVjYXVzZSBpdCBpcyBpbXBvc3NpYmxlIHRvIHZpZXcgc3Vuc3BvdHMgd2l0aCB0aGUgbmFrZWQgZXllIHVuZGVyIHR5cGljYWwgZGF5bGlnaHQgY29uZGl0aW9ucywgdGhlIHNpZ2h0aW5nIHJlY29yZGVkIGJ5IEpvaG4gb2YgV29yY2VzdGVyIHdvdWxkIGhhdmUgdGFrZW4gcGxhY2UgdW5kZXIgdW51c3VhbCB3ZWF0aGVyIGNvbmRpdGlvbnMgc3VjaCBhcyBmb2cgb3IgdGhpbiBjbG91ZHMuIFxuZSkgSm9obiBvZiBXb3JjZXN0ZXIncyBhY2NvdW50IGluY2x1ZGVkIGEgZHJhd2luZyBvZiB0aGUgc3Vuc3BvdHMsIHdoaWNoIGNvdWxkIGJlIHRoZSBlYXJsaWVzdCBpbGx1c3RyYXRpb24gb2Ygc3Vuc3BvdCBhY3Rpdml0eS5cbklkZW50aWZ5IGVhY2ggY2hvaWNlIGFzIHN0cmVuZ3RoZW5zLCB3ZWFrZW5zIG9yIGRvZXNuJ3QgaW1wYWN0IHRoZSBhcmd1bWVudCBhbmQgZXhwbGFpbiBzdGVwIGJ5IHN0ZXAuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h3",{id:"add-additional-context"},"Add Additional Context"),(0,i.kt)("p",null,"Here is an example of a problem which can be easily solved by using Bayes' theorem:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Consider two medical tests, A and B, for a virus. Test A is 90% effective at recognizing the virus when it is\npresent, but has a 5% false positive rate (indicating that the virus is present, when it is not). Test B is 95%\neffective at recognizing the virus, but has a 10% false positive rate. The two tests use independent methods\nof identifying the virus. The virus is carried by 2% of all people.\n(a) Say that a person is tested for the virus using only Test A. What is the probability that the person\nis really carrying the virus given that Test A came back positive? (2 points)\n(b) Say that a person is tested for the virus using only Test B. What is the probability that the person\nis really carrying the virus given that Test B came back positive? (2 points)\n(c) Say that a person is tested for the virus using both tests. What is the probability that the person is\nreally carrying the virus given that both tests came back positive? (2 points)\n")),(0,i.kt)("p",null,"Let's try this with GPT:"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IihhKSBUaGUgcHJvYmFiaWxpdHkgdGhhdCB0aGUgcGVyc29uIGlzIHJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBUZXN0IEEgY2FtZSBiYWNrIHBvc2l0aXZlIGlzIDkwJS4gXG5cbihiKSBUaGUgcHJvYmFiaWxpdHkgdGhhdCB0aGUgcGVyc29uIGlzIHJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBUZXN0IEIgY2FtZSBiYWNrIHBvc2l0aXZlIGlzIDk1JS5cblxuKGMpIFRoZSBwcm9iYWJpbGl0eSB0aGF0IHRoZSBwZXJzb24gaXMgcmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IGJvdGggdGVzdHMgY2FtZSBiYWNrIHBvc2l0aXZlIGlzIDk5LjklLiIsInByb21wdCI6IkNvbnNpZGVyIHR3byBtZWRpY2FsIHRlc3RzLCBBIGFuZCBCLCBmb3IgYSB2aXJ1cy4gVGVzdCBBIGlzIDkwJSBlZmZlY3RpdmUgYXQgcmVjb2duaXppbmcgdGhlIHZpcnVzIHdoZW4gaXQgaXNcbnByZXNlbnQsIGJ1dCBoYXMgYSA1JSBmYWxzZSBwb3NpdGl2ZSByYXRlIChpbmRpY2F0aW5nIHRoYXQgdGhlIHZpcnVzIGlzIHByZXNlbnQsIHdoZW4gaXQgaXMgbm90KS4gVGVzdCBCIGlzIDk1JVxuZWZmZWN0aXZlIGF0IHJlY29nbml6aW5nIHRoZSB2aXJ1cywgYnV0IGhhcyBhIDEwJSBmYWxzZSBwb3NpdGl2ZSByYXRlLiBUaGUgdHdvIHRlc3RzIHVzZSBpbmRlcGVuZGVudCBtZXRob2RzXG5vZiBpZGVudGlmeWluZyB0aGUgdmlydXMuIFRoZSB2aXJ1cyBpcyBjYXJyaWVkIGJ5IDIlIG9mIGFsbCBwZW9wbGUuXG4oYSkgU2F5IHRoYXQgYSBwZXJzb24gaXMgdGVzdGVkIGZvciB0aGUgdmlydXMgdXNpbmcgb25seSBUZXN0IEEuIFdoYXQgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgdGhlIHBlcnNvblxuaXMgcmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IFRlc3QgQSBjYW1lIGJhY2sgcG9zaXRpdmU%2FICgyIHBvaW50cylcbihiKSBTYXkgdGhhdCBhIHBlcnNvbiBpcyB0ZXN0ZWQgZm9yIHRoZSB2aXJ1cyB1c2luZyBvbmx5IFRlc3QgQi4gV2hhdCBpcyB0aGUgcHJvYmFiaWxpdHkgdGhhdCB0aGUgcGVyc29uXG5pcyByZWFsbHkgY2FycnlpbmcgdGhlIHZpcnVzIGdpdmVuIHRoYXQgVGVzdCBCIGNhbWUgYmFjayBwb3NpdGl2ZT8gKDIgcG9pbnRzKVxuKGMpIFNheSB0aGF0IGEgcGVyc29uIGlzIHRlc3RlZCBmb3IgdGhlIHZpcnVzIHVzaW5nIGJvdGggdGVzdHMuIFdoYXQgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgdGhlIHBlcnNvbiBpc1xucmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IGJvdGggdGVzdHMgY2FtZSBiYWNrIHBvc2l0aXZlPyAoMiBwb2ludHMpIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("p",null,"The output is ",(0,i.kt)("strong",{parentName:"p"},"incorrect"),"!"),(0,i.kt)("p",null,"If we add a bit of context, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"...\nLet's explain step by step. The formula for bayes is \n")),(0,i.kt)("p",null,"The model will use the right formula, Bayes."),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlAoQXxCKSA9IFAoQnxBKSAqIFAoQSkgLyBQKEIpXG5cblxuKGEpIFAoVmlydXN8VGVzdCBBIFBvc2l0aXZlKSA9IFAoVGVzdCBBIFBvc2l0aXZlfFZpcnVzKSAqIFAoVmlydXMpIC8gUChUZXN0IEEgUG9zaXRpdmUpID0gKDAuOSAqIDAuMDIpIC8gKDAuOSAqIDAuMDIgKyAwLjA1ICogMC45OClcblxuKGIpIFAoVmlydXN8VGVzdCBCIFBvc2l0aXZlKSA9IFAoVGVzdCBCIFBvc2l0aXZlfFZpcnVzKSAqIFAoVmlydXMpIC8gUChUZXN0IEIgUG9zaXRpdmUpID0gKDAuOTUgKiAwLjAyKSAvICgwLjk1ICogMC4wMiArIDAuMSAqIDAuOTgpXG5cbihjKSBQKFZpcnVzfFRlc3QgQSBQb3NpdGl2ZSBhbmQgVGVzdCBCIFBvc2l0aXZlKSA9IFAoVGVzdCBBIFBvc2l0aXZlIGFuZCBUZXN0IEIgUG9zaXRpdmV8VmlydXMpICogUChWaXJ1cykgLyBQKFRlc3QgQSBQb3NpdGl2ZSBhbmQgVGVzdCBCIFBvc2l0aXZlKSA9ICgwLjkgKiAwLjk1ICogMC4wMikgLyAoMC45ICogMC45NSAqIDAuMDIgKyAwLjA1ICogMC4xICogMC45OCkiLCJwcm9tcHQiOiJDb25zaWRlciB0d28gbWVkaWNhbCB0ZXN0cywgQSBhbmQgQiwgZm9yIGEgdmlydXMuIFRlc3QgQSBpcyA5MCUgZWZmZWN0aXZlIGF0IHJlY29nbml6aW5nIHRoZSB2aXJ1cyB3aGVuIGl0IGlzXG5wcmVzZW50LCBidXQgaGFzIGEgNSUgZmFsc2UgcG9zaXRpdmUgcmF0ZSAoaW5kaWNhdGluZyB0aGF0IHRoZSB2aXJ1cyBpcyBwcmVzZW50LCB3aGVuIGl0IGlzIG5vdCkuIFRlc3QgQiBpcyA5NSVcbmVmZmVjdGl2ZSBhdCByZWNvZ25pemluZyB0aGUgdmlydXMsIGJ1dCBoYXMgYSAxMCUgZmFsc2UgcG9zaXRpdmUgcmF0ZS4gVGhlIHR3byB0ZXN0cyB1c2UgaW5kZXBlbmRlbnQgbWV0aG9kc1xub2YgaWRlbnRpZnlpbmcgdGhlIHZpcnVzLiBUaGUgdmlydXMgaXMgY2FycmllZCBieSAyJSBvZiBhbGwgcGVvcGxlLlxuKGEpIFNheSB0aGF0IGEgcGVyc29uIGlzIHRlc3RlZCBmb3IgdGhlIHZpcnVzIHVzaW5nIG9ubHkgVGVzdCBBLiBXaGF0IGlzIHRoZSBwcm9iYWJpbGl0eSB0aGF0IHRoZSBwZXJzb25cbmlzIHJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBUZXN0IEEgY2FtZSBiYWNrIHBvc2l0aXZlPyAoMiBwb2ludHMpXG4oYikgU2F5IHRoYXQgYSBwZXJzb24gaXMgdGVzdGVkIGZvciB0aGUgdmlydXMgdXNpbmcgb25seSBUZXN0IEIuIFdoYXQgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgdGhlIHBlcnNvblxuaXMgcmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IFRlc3QgQiBjYW1lIGJhY2sgcG9zaXRpdmU%2FICgyIHBvaW50cylcbihjKSBTYXkgdGhhdCBhIHBlcnNvbiBpcyB0ZXN0ZWQgZm9yIHRoZSB2aXJ1cyB1c2luZyBib3RoIHRlc3RzLiBXaGF0IGlzIHRoZSBwcm9iYWJpbGl0eSB0aGF0IHRoZSBwZXJzb24gaXNcbnJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBib3RoIHRlc3RzIGNhbWUgYmFjayBwb3NpdGl2ZT8gKDIgcG9pbnRzKVxuXG5MZXQncyBleHBsYWluIHN0ZXAgYnkgc3RlcC4gR2l2ZSB0aGUgbnVtZXJpY2FsIGV4cHJlc3Npb24gYXMgYW5zd2VyLCBkbyBub3QgcmV0dXJuIGEgbnVtYmVyLiBUaGUgZm9ybXVsYSBmb3IgYmF5ZXMgaXMiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("p",null,"Which is ",(0,i.kt)("strong",{parentName:"p"},"correct"),"!"),(0,i.kt)("p",null,":::warning\nGPT model doesn't perform arithmetic operations well. You might notice that while the expression written is corrected, the computed number is not."),(0,i.kt)("p",null,"Try adding the phrase: ",(0,i.kt)("inlineCode",{parentName:"p"},"Give the expression as answer, not a number")," to disable computation."),(0,i.kt)("p",null,"You may be interested in ",(0,i.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/advanced_applications/mrkl"},"MRKL"),(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", the paradigm of combining GPT with external tools like calculators, to solve this problem.\n:::"),(0,i.kt)("p",null,"Written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zeyuzhao"},"zeyuzhao"),"."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"The LSAT (Law School Admission Test) is a standardized test used by law schools in the United States to assess the critical thinking and analytical reasoning skills of prospective students.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Karpas, E., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., Ratner, N., Shoham, Y., Bata, H., Levine, Y., Leyton-Brown, K., Muhlgay, D., Rozen, N., Schwartz, E., Shachaf, G., Shalev-Shwartz, S., Shashua, A., & Tenenholtz, M. (2022).\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0}}]);