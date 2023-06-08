"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[4388],{6581:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(9496);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zm-504 68h200v200H412V278zm-68 468H144V546h200v200zm268 0H412V546h200v200zm268-268H680V278h200v200z"}}]},name:"build",theme:"outlined"};var o=n(750),i=function(e,t){return a.createElement(o.Z,Object.assign({},e,{ref:t,icon:r}))};i.displayName="BuildOutlined";const c=a.forwardRef(i)},9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2253:(e,t,n)=>{n.d(t,{ZP:()=>c});var a=n(6600),r=(n(9496),n(9613)),o=n(1480);const i={toc:[]};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,(0,a.Z)({},n,{mdxType:"NavCard"})))}c.isMDXComponent=!0},7861:(e,t,n)=>{n.d(t,{ga:()=>a});var a={};n.r(a),n.d(a,{CATEGORIES:()=>o,sendEvent:()=>r});const r=e=>{let{category:t,action:n,label:a,value:r}=e;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:n,eventLabel:a,eventValue:r})},o={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},1480:(e,t,n)=>{n.d(t,{J:()=>s,Z:()=>d});var a=n(9496),r=n(1626),o=n(2484),i=n(7861);const c={root:"root_GfON",rootDisabled:"rootDisabled_SFUB",details:"details_xxkR",detailsTags:"detailsTags_uTQx",icon:"icon_ciqP",title:"title_pSH5",description:"description__Fep",miniTheme:"miniTheme_ePfp",primaryTheme:"primaryTheme_CilO",defaultTheme:"defaultTheme_j3I8"},s=e=>{const{title:t,description:n,to:s,Icon:d,tags:u,className:m,disabled:p,theme:f="default"}=e,v=(0,a.useCallback)((()=>{i.ga.sendEvent({category:i.ga.CATEGORIES.full,action:"NavRow:Click",label:s})}),[s]);return a.createElement(o.Z,{className:(0,r.Z)(c.root,m,p&&c.rootDisabled,c[`${f}Theme`]),to:s,onClick:v},a.createElement(l,{Icon:d}),a.createElement("div",{className:c.details},a.createElement("div",{className:c.detailsMain},a.createElement("span",{className:c.title},t),a.createElement("p",{className:c.description},n)),u&&a.createElement("div",{className:c.detailsTags},u.join(" \u2022 "))))},l=e=>{let{Icon:t}=e;return t?"string"==typeof t?a.createElement("span",{className:c.icon},t):a.createElement(t,{className:c.icon}):null},d=s},6470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>w,frontMatter:()=>v,metadata:()=>h,toc:()=>b});var a=n(6600),r=n(9496),o=n(9613),i=n(2253);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z"}}]},name:"rocket",theme:"outlined"};var s=n(750),l=function(e,t){return r.createElement(s.Z,Object.assign({},e,{ref:t,icon:c}))};l.displayName="RocketOutlined";const d=r.forwardRef(l);const u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M442.3 677.6l199.4-156.7a11.3 11.3 0 000-17.7L442.3 346.4c-7.4-5.8-18.3-.6-18.3 8.8v313.5c0 9.4 10.9 14.7 18.3 8.9z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"play-square",theme:"outlined"};var m=function(e,t){return r.createElement(s.Z,Object.assign({},e,{ref:t,icon:u}))};m.displayName="PlaySquareOutlined";const p=r.forwardRef(m);var f=n(6581);const v={hide_table_of_contents:!0,pagination_prev:"intro"},g="\ud83d\ude80 Get Started",h={unversionedId:"get-started/index",id:"get-started/index",title:"\ud83d\ude80 Get Started",description:"LEARNING-ORIENTED",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/get-started/index.mdx",sourceDirName:"get-started",slug:"/get-started/",permalink:"/docs/get-started/",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/get-started/index.mdx",tags:[],version:"current",lastUpdatedAt:1686208035,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{hide_table_of_contents:!0,pagination_prev:"intro"},sidebar:"getstartedSidebar",previous:{title:"Documentation",permalink:"/docs/"},next:{title:"Overview",permalink:"/docs/get-started/overview"}},y={},b=[{value:"Main",id:"main",level:2}],O={toc:b};function w(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-get-started"},"\ud83d\ude80 Get Started"),(0,o.kt)("span",{class:"badge badge--success margin-bottom--md"},"LEARNING-ORIENTED"),(0,o.kt)("p",{class:"summary"},"Welcome! This section helps you to get acquainted with the application of Feature-Sliced Design and the basics of the methodology. You will also understand the key advantages of the methodology and the reasons for its creation."),(0,o.kt)("h2",{id:"main"},"Main"),(0,o.kt)(i.ZP,{title:"Overview",description:"Brief overview of methodology concepts and usage",to:"/docs/get-started/overview",Icon:d,mdxType:"NavCard"}),(0,o.kt)(i.ZP,{title:"Tutorial",description:"Introductory tutorial on the usage of the methodology",to:"/docs/get-started/tutorial",Icon:p,mdxType:"NavCard"}),(0,o.kt)(i.ZP,{title:"Decomposition cheatsheet",description:"A memo on the decomposition of logic with examples and criteria",to:"/docs/get-started/cheatsheet",Icon:f.Z,mdxType:"NavCard"}))}w.isMDXComponent=!0}}]);