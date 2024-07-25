"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53649],{61132:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(24246),s=(n(27378),n(40624));const i={tabItem:"tabItem_pnkT"};function o({children:e,hidden:t,className:n}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,n),hidden:t,children:e})}},97555:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(24246),s=n(27378),i=n(40624),o=n(75527),c=n(3620),a=n(44479),l=n(62821),u=n(52196),p=n(53589);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function f(e){var t,n;return null!==(n=null===(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function m(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return f(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,u.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g({value:e,tabValues:t}){return t.some((t=>t.value===e))}function y({queryString:e=!1,groupId:t}){const n=(0,c.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),i=(0,l._X)(r),o=(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(h(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[r,n]);return[i,o]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=m(e),[o,c]=(0,s.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=y({queryString:n,groupId:r}),[d,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,p.Nk)(t);return[n,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),f=(()=>{const e=null!=l?l:d;return g({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var j=n(29088);const x={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function S(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function O({className:e,block:t,selectedValue:n,selectValue:s,tabValues:c}){const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=e=>{const t=e.currentTarget,r=a.indexOf(t),i=c[r].value;i!==n&&(l(t),s(i))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;var n;t=null!==(n=a[r])&&void 0!==n?n:a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;var r;t=null!==(r=a[n])&&void 0!==r?r:a[a.length-1];break}}null==t||t.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e),children:c.map((({value:e,label:t,attributes:s})=>(0,r.jsx)("li",S(w({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>a.push(e),onKeyDown:p,onClick:u},s),{className:(0,i.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===e}),children:null!=t?t:e}),e)))})}function T({lazy:e,children:t,selectedValue:n}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=b(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,r.jsx)(O,w({},t,e)),(0,r.jsx)(T,w({},t,e))]})}function D(e){const t=(0,j.Z)();return(0,r.jsx)(k,S(w({},e),{children:f(e.children)}),String(t))}},5375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(24246),s=n(71670),i=n(97555),o=n(61132);const c={description:"Docusaurus is written in TypeScript and provides first-class TypeScript support."},a="TypeScript Support",l={id:"typescript-support",title:"TypeScript Support",description:"Docusaurus is written in TypeScript and provides first-class TypeScript support.",source:"@site/docs/typescript-support.mdx",sourceDirName:".",slug:"/typescript-support",permalink:"/docs/typescript-support",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/typescript-support.mdx",tags:[],version:"current",lastUpdatedBy:"Julian V",lastUpdatedAt:172189988e4,frontMatter:{description:"Docusaurus is written in TypeScript and provides first-class TypeScript support."},sidebar:"docs",previous:{title:"Playground",permalink:"/docs/playground"},next:{title:"Guides",permalink:"/docs/category/guides"}},u={},p=[{value:"Initialization",id:"initialization",level:2},{value:"Setup",id:"setup",level:2},{value:"Typing the config file",id:"typing-config",level:2},{value:"Swizzling TypeScript theme components",id:"swizzling-typescript-theme-components",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"typescript-support",children:"TypeScript Support"}),"\n",(0,r.jsx)(t.p,{children:"Docusaurus is written in TypeScript and provides first-class TypeScript support."}),"\n",(0,r.jsxs)(t.p,{children:["The minimum required version is ",(0,r.jsx)(t.strong,{children:"TypeScript 5.1"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"initialization",children:"Initialization"}),"\n",(0,r.jsxs)(t.p,{children:["Docusaurus supports writing and using TypeScript theme components. If the init template provides a TypeScript variant, you can directly initialize a site with full TypeScript support by using the ",(0,r.jsx)(t.code,{children:"--typescript"})," flag."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website classic --typescript\n"})}),"\n",(0,r.jsx)(t.p,{children:"Below are some guides on how to migrate an existing project to TypeScript."}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(t.p,{children:"Add the following packages to your project:"}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add --dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Then add ",(0,r.jsx)(t.code,{children:"tsconfig.json"})," to your project root with the following content:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "extends": "@docusaurus/tsconfig",\n  "compilerOptions": {\n    "baseUrl": "."\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Docusaurus doesn't use this ",(0,r.jsx)(t.code,{children:"tsconfig.json"})," to compile your project. It is added just for a nicer Editor experience, although you can choose to run ",(0,r.jsx)(t.code,{children:"tsc"})," to type check your code for yourself or on CI."]}),"\n",(0,r.jsx)(t.p,{children:"Now you can start writing TypeScript theme components."}),"\n",(0,r.jsx)(t.h2,{id:"typing-config",children:"Typing the config file"}),"\n",(0,r.jsx)(t.p,{children:"It is possible to use a TypeScript config file in Docusaurus."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"import type {Config} from '@docusaurus/types';\nimport type * as Preset from '@docusaurus/preset-classic';\n\n// highlight-next-line\nconst config: Config = {\n  title: 'My Site',\n  favicon: 'img/favicon.ico',\n\n  /* Your site config here */\n\n  presets: [\n    [\n      'classic',\n      {\n        /* Your preset config here */\n        // highlight-next-line\n      } satisfies Preset.Options,\n    ],\n  ],\n\n  themeConfig: {\n    /* Your theme config here */\n    // highlight-next-line\n  } satisfies Preset.ThemeConfig,\n};\n\nexport default config;\n"})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:["It is also possible to use ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html",children:"JSDoc type annotations"})," within a ",(0,r.jsx)(t.code,{children:".js"})," file:"]}),(0,r.jsx)(t.p,{children:"By default, the Docusaurus TypeScript config does not type-check JavaScript files."}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"// @ts-check"})," comment ensures the config file is properly type-checked when running ",(0,r.jsx)(t.code,{children:"npx tsc"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-next-line\n// @ts-check\n\n// highlight-next-line\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  tagline: 'Dinosaurs are cool',\n  favicon: 'img/favicon.ico',\n\n  /* Your site config here */\n\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      // highlight-next-line\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      (\n        {\n          /* Your preset config here */\n        }\n      ),\n    ],\n  ],\n  themeConfig:\n    // highlight-next-line\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    (\n      {\n        /* Your theme config here */\n      }\n    ),\n};\n\nexport default config;\n"})})]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"Type annotations are very useful and help your IDE understand the type of config objects!"}),(0,r.jsx)(t.p,{children:"The best IDEs (VS Code, WebStorm, IntelliJ...) will provide a nice auto-completion experience."})]}),"\n",(0,r.jsx)(t.h2,{id:"swizzling-typescript-theme-components",children:"Swizzling TypeScript theme components"}),"\n",(0,r.jsxs)(t.p,{children:["For themes that support TypeScript theme components, you can add the ",(0,r.jsx)(t.code,{children:"--typescript"})," flag to the end of the ",(0,r.jsx)(t.code,{children:"swizzle"})," command to get TypeScript source code. For example, the following command will generate ",(0,r.jsx)(t.code,{children:"index.tsx"})," and ",(0,r.jsx)(t.code,{children:"styles.module.css"})," into ",(0,r.jsx)(t.code,{children:"src/theme/Footer"}),"."]}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic Footer -- --typescript\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-classic Footer --typescript\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-classic Footer --typescript\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["All official Docusaurus themes support TypeScript theme components, including ",(0,r.jsx)(t.a,{href:"/docs/api/themes/@docusaurus/theme-classic",children:(0,r.jsx)(t.code,{children:"theme-classic"})}),", ",(0,r.jsx)(t.a,{href:"/docs/api/themes/@docusaurus/theme-live-codeblock",children:(0,r.jsx)(t.code,{children:"theme-live-codeblock"})}),", and ",(0,r.jsx)(t.a,{href:"/docs/api/themes/@docusaurus/theme-search-algolia",children:(0,r.jsx)(t.code,{children:"theme-search-algolia"})}),". If you are a Docusaurus theme package author who wants to add TypeScript support, see the ",(0,r.jsx)(t.a,{href:"/docs/api/plugin-methods/extend-infrastructure#getTypeScriptThemePath",children:"Lifecycle APIs docs"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(27378);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);