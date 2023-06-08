"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5867],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(6600),r=(n(9496),n(9613));const i={title:"Slices and segments",sidebar_position:2,pagination_next:"reference/public-api"},s="Slices and segments",l={unversionedId:"reference/slices-segments",id:"reference/slices-segments",title:"Slices and segments",description:"Slices",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/slices-segments.mdx",sourceDirName:"reference",slug:"/reference/slices-segments",permalink:"/docs/reference/slices-segments",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/slices-segments.mdx",tags:[],version:"current",lastUpdatedAt:1686208035,formattedLastUpdatedAt:"Jun 8, 2023",sidebarPosition:2,frontMatter:{title:"Slices and segments",sidebar_position:2,pagination_next:"reference/public-api"},sidebar:"referenceSidebar",previous:{title:"Layers",permalink:"/docs/reference/layers"},next:{title:"Public API",permalink:"/docs/reference/public-api"}},o={},c=[{value:"Slices",id:"slices",level:2},{value:"Public API rule on slices",id:"public-api-rule-on-slices",level:3},{value:"Segments",id:"segments",level:2},{value:"Examples",id:"examples",level:3}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"slices-and-segments"},"Slices and segments"),(0,r.kt)("h2",{id:"slices"},"Slices"),(0,r.kt)("p",null,"Slices are the second level in the organizational hierarchy of Feature-Sliced Design. Their main purpose is to group code by its meaning for the product, business or just the application."),(0,r.kt)("p",null,"The names of slices are not standardized because they are directly determined by the business domain of your application. For example, a photo gallery might have slices ",(0,r.kt)("inlineCode",{parentName:"p"},"photo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create-album"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gallery-page"),". A social network would require different slices, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"add-user-to-friends"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"news-feed"),"."),(0,r.kt)("p",null,"Closely related slices can be structurally grouped in a directory, but they should exercise the same isolation rules as other slices \u2014 there should be ",(0,r.kt)("strong",{parentName:"p"},"no code sharing")," in that directory."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Features &quot;compose&quot;, &quot;like&quot; and &quot;delete&quot; grouped in a directory &quot;post&quot;. In that directory there is also a file &quot;some-shared-code.ts&quot; that is crossed out to imply that it&#39;s not allowed.",src:n(1759).Z,width:"365",height:"236"})),(0,r.kt)("p",null,"The layers Shared and App don't contain slices. That is because Shared should contain no business logic at all, hence has no meaning for the product, and App should contain only code that concerns the entire application, so no splitting is necessary."),(0,r.kt)("h3",{id:"public-api-rule-on-slices"},"Public API rule on slices"),(0,r.kt)("p",null,"Inside a slice, the code could be organized very liberally, and that doesn't pose any issues as long as the slice provides a good public API. This is enforced with the ",(0,r.kt)("strong",{parentName:"p"},"public API rule on slices"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Every slice (and segment on layers that don't have slices) must contain a public API definition.")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Modules outside of this slice/segment can only reference the public API, not the internal file structure of the slice/segment."))),(0,r.kt)("p",null,"Read more about the rationale of public APIs and the best practices on creating one in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/public-api"},"Public API reference"),"."),(0,r.kt)("h2",{id:"segments"},"Segments"),(0,r.kt)("p",null,"Segments are the third and final level in the organizational hierarchy, and their purpose is to group code by its technical nature."),(0,r.kt)("p",null,"There a few standardized segment names:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ui")," \u2014 UI components, data formatting functions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"model")," \u2014 business logic and data storage, as well as functions to manipulate this data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lib")," \u2014 auxiliary and infrastructural code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"api")," \u2014 communication with external APIs, backend API methods")),(0,r.kt)("p",null,"Custom segments are permitted, but should be created sparingly. The most common places for custom segments are the App layer and the Shared layer, where slices don't make sense."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Layer"),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"ui")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"model")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"lib")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"api")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Shared"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UI kit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Usually not used"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Utility modules of several related files. ",(0,r.kt)("br",null),"If you need to use individual helpers, consider using utility libraries such as ",(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/lodash-es"},(0,r.kt)("inlineCode",{parentName:"a"},"lodash-es")),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Rudimentary API client with additional features like authentication or caching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Entities"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Skeleton of a business entity with slots for interactive elements"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data storage of instances of this entity as well as functions for manipulating that data. ",(0,r.kt)("br",null)," This segment is most fit for storing server-side data. If you use ",(0,r.kt)("a",{parentName:"td",href:"https://tanstack.com/query/latest"},"TanStack Query")," or other methods of implicit storage, you may choose to omit this segment."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Functions for manipulating instances of this entity that aren't related to storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"API methods using the API client from Shared for easy communication with the backend")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Features"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Interactive elements that enable users to use this feature"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Business logic and infrastructure data storage, if needed (e.g., current app theme). This is the code that actually produces value for the user."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Infrastructural code that helps to concisely describe the business logic in the ",(0,r.kt)("inlineCode",{parentName:"td"},"model")," segment"),(0,r.kt)("td",{parentName:"tr",align:"left"},"API methods that represent this feature on the backend. ",(0,r.kt)("br",null)," May compose API methods from Entities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Widgets"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Composition of Entities and Features into self-contained UI blocks. ",(0,r.kt)("br",null)," Can also contain error boundaries and loading states."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Infrastructure data storage, if needed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Non-business interactions (e.g., gestures) and other necessary code for the block to function on a page"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Usually not used, but can contain data loaders in nested routing contexts (e.g., ",(0,r.kt)("a",{parentName:"td",href:"https://remix.run"},"Remix"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pages"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Composition of Entities, Features and Widgets into complete pages. ",(0,r.kt)("br",null)," Can also contain error boundaries and loading states."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Usually not used"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Non-business interactions (e.g., gestures) and other necessary code for the page to deliver a complete user experience"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data loaders for SSR-oriented frameworks")))))}p.isMDXComponent=!0},1759:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphic-nested-slices-b9c44e6cc55ecdbf3e50bf40a61e5a27.svg"}}]);