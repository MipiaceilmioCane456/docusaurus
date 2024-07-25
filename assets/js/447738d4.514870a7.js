"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90088],{61132:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(24246),i=(t(27378),t(40624));const a={tabItem:"tabItem_pnkT"};function s({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,t),hidden:n,children:e})}},97555:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(24246),i=t(27378),a=t(40624),s=t(75527),o=t(3620),d=t(44479),l=t(62821),c=t(52196),u=t(53589);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function g(e){var n,t;return null!==(t=null===(n=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return g(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,c.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b({value:e,tabValues:n}){return n.some((n=>n.value===e))}function f({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),a=(0,l._X)(r),s=(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(m(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[a,s]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[s,o]=(0,i.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,c]=f({queryString:t,groupId:r}),[h,m]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,u.Nk)(n);return[t,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),g=(()=>{const e=null!=l?l:h;return b({value:e,tabValues:a})?e:null})();(0,d.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),m(e)}),[c,m,a]),tabValues:a}}var y=t(29088);const j={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function k(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function I({className:e,block:n,selectedValue:t,selectValue:i,tabValues:o}){const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),a=o[r].value;a!==t&&(l(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;var t;n=null!==(t=d[r])&&void 0!==t?t:d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;var r;n=null!==(r=d[t])&&void 0!==r?r:d[d.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e),children:o.map((({value:e,label:n,attributes:i})=>(0,r.jsx)("li",k(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>d.push(e),onKeyDown:u,onClick:c},i),{className:(0,a.Z)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function O({lazy:e,children:n,selectedValue:t}){const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function N(e){const n=x(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,r.jsx)(I,w({},n,e)),(0,r.jsx)(O,w({},n,e))]})}function T(e){const n=(0,y.Z)();return(0,r.jsx)(N,k(w({},e),{children:g(e.children)}),String(n))}},37176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(24246),i=t(71670),a=t(97555),s=t(61132);const o={slug:"/sidebar/autogenerated"},d="Autogenerated",l={id:"guides/docs/sidebar/autogenerated",title:"Autogenerated",description:"Docusaurus can create a sidebar automatically from your filesystem structure: each folder creates a sidebar category, and each file creates a doc link.",source:"@site/docs/guides/docs/sidebar/autogenerated.mdx",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/autogenerated",permalink:"/docs/sidebar/autogenerated",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/autogenerated.mdx",tags:[],version:"current",lastUpdatedBy:"Julian V",lastUpdatedAt:172189988e4,frontMatter:{slug:"/sidebar/autogenerated"},sidebar:"docs",previous:{title:"Sidebar items",permalink:"/docs/sidebar/items"},next:{title:"Using multiple sidebars",permalink:"/docs/sidebar/multiple-sidebars"}},c={},u=[{value:"Category index convention",id:"category-index-convention",level:2},{value:"Autogenerated sidebar metadata",id:"autogenerated-sidebar-metadata",level:2},{value:"Doc item metadata",id:"doc-item-metadata",level:3},{value:"Category item metadata",id:"category-item-metadata",level:3},{value:"Using number prefixes",id:"using-number-prefixes",level:2},{value:"Customize the sidebar items generator",id:"customize-the-sidebar-items-generator",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"autogenerated",children:"Autogenerated"}),"\n","\n",(0,r.jsxs)(n.p,{children:["Docusaurus can ",(0,r.jsx)(n.strong,{children:"create a sidebar automatically"})," from your ",(0,r.jsx)(n.strong,{children:"filesystem structure"}),": each folder creates a sidebar category, and each file creates a doc link."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SidebarItemAutogenerated = {\n  type: 'autogenerated';\n  dirName: string; // Source folder to generate the sidebar slice from (relative to docs)\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Docusaurus can generate a full sidebar from your docs folder:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myAutogeneratedSidebar: [\n    // highlight-start\n    {\n      type: 'autogenerated',\n      dirName: '.', // '.' means the current docs folder\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)(n.code,{children:"autogenerated"})," item is converted by Docusaurus to a ",(0,r.jsx)(n.strong,{children:"sidebar slice"})," (also discussed in ",(0,r.jsx)(n.a,{href:"/docs/sidebar/items#category-shorthand",children:"category shorthands"}),"): a list of items of type ",(0,r.jsx)(n.code,{children:"doc"})," or ",(0,r.jsx)(n.code,{children:"category"}),", so you can splice ",(0,r.jsxs)(n.strong,{children:["multiple ",(0,r.jsx)(n.code,{children:"autogenerated"})," items"]})," from multiple directories, interleaving them with regular sidebar items, in one sidebar level."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"A real-world example"}),(0,r.jsx)(n.p,{children:"Consider this file structure:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docs\n\u251c\u2500\u2500 api\n\u2502   \u251c\u2500\u2500 product1-api\n\u2502   \u2502   \u2514\u2500\u2500 api.md\n\u2502   \u2514\u2500\u2500 product2-api\n\u2502       \u251c\u2500\u2500 basic-api.md\n\u2502       \u2514\u2500\u2500 pro-api.md\n\u251c\u2500\u2500 intro.md\n\u2514\u2500\u2500 tutorials\n    \u251c\u2500\u2500 advanced\n    \u2502   \u251c\u2500\u2500 advanced1.md\n    \u2502   \u251c\u2500\u2500 advanced2.md\n    \u2502   \u2514\u2500\u2500 read-more\n    \u2502       \u251c\u2500\u2500 resource1.md\n    \u2502       \u2514\u2500\u2500 resource2.md\n    \u251c\u2500\u2500 easy\n    \u2502   \u251c\u2500\u2500 easy1.md\n    \u2502   \u2514\u2500\u2500 easy2.md\n    \u251c\u2500\u2500 tutorial-end.md\n    \u251c\u2500\u2500 tutorial-intro.md\n    \u2514\u2500\u2500 tutorial-medium.md\n"})}),(0,r.jsx)(n.p,{children:"And assume every doc's ID is just its file name. If you define an autogenerated sidebar like this:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    'intro',\n    {\n      type: 'category',\n      label: 'Tutorials',\n      items: [\n        'tutorial-intro',\n        // highlight-start\n        {\n          type: 'autogenerated',\n          dirName: 'tutorials/easy', // Generate sidebar slice from docs/tutorials/easy\n        },\n        // highlight-end\n        'tutorial-medium',\n        // highlight-start\n        {\n          type: 'autogenerated',\n          dirName: 'tutorials/advanced', // Generate sidebar slice from docs/tutorials/advanced\n        },\n        // highlight-end\n        'tutorial-end',\n      ],\n    },\n    // highlight-start\n    {\n      type: 'autogenerated',\n      dirName: 'api', // Generate sidebar slice from docs/api\n    },\n    // highlight-end\n    {\n      type: 'category',\n      label: 'Community',\n      items: ['team', 'chat'],\n    },\n  ],\n};\n"})}),(0,r.jsx)(n.p,{children:"It would be resolved as:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    'intro',\n    {\n      type: 'category',\n      label: 'Tutorials',\n      items: [\n        'tutorial-intro',\n        // highlight-start\n        // Two files in docs/tutorials/easy\n        'easy1',\n        'easy2',\n        // highlight-end\n        'tutorial-medium',\n        // highlight-start\n        // Two files and a folder in docs/tutorials/advanced\n        'advanced1',\n        'advanced2',\n        {\n          type: 'category',\n          label: 'read-more',\n          items: ['resource1', 'resource2'],\n        },\n        // highlight-end\n        'tutorial-end',\n      ],\n    },\n    // highlight-start\n    // Two folders in docs/api\n    {\n      type: 'category',\n      label: 'product1-api',\n      items: ['api'],\n    },\n    {\n      type: 'category',\n      label: 'product2-api',\n      items: ['basic-api', 'pro-api'],\n    },\n    // highlight-end\n    {\n      type: 'category',\n      label: 'Community',\n      items: ['team', 'chat'],\n    },\n  ],\n};\n"})}),(0,r.jsx)(n.p,{children:'Note how the autogenerate source directories themselves don\'t become categories: only the items they contain do. This is what we mean by "sidebar slice".'})]}),"\n",(0,r.jsx)(n.h2,{id:"category-index-convention",children:"Category index convention"}),"\n",(0,r.jsx)(n.p,{children:"Docusaurus can automatically link a category to its index document."}),"\n",(0,r.jsx)(n.p,{children:"A category index document is a document following one of those filename conventions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Named as ",(0,r.jsx)(n.code,{children:"index"})," (case-insensitive): ",(0,r.jsx)(n.code,{children:"docs/Guides/index.md"})]}),"\n",(0,r.jsxs)(n.li,{children:["Named as ",(0,r.jsx)(n.code,{children:"README"})," (case-insensitive): ",(0,r.jsx)(n.code,{children:"docs/Guides/README.mdx"})]}),"\n",(0,r.jsxs)(n.li,{children:["Same name as parent folder: ",(0,r.jsx)(n.code,{children:"docs/Guides/Guides.md"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This is equivalent to using a category with a ",(0,r.jsx)(n.a,{href:"/docs/sidebar/items#category-doc-link",children:"doc link"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    // highlight-start\n    {\n      type: 'category',\n      label: 'Guides',\n      link: {type: 'doc', id: 'Guides/index'},\n      items: [],\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Naming your introductory document ",(0,r.jsx)(n.code,{children:"README.md"})," makes it show up when browsing the folder using the GitHub interface, while using ",(0,r.jsx)(n.code,{children:"index.md"})," makes the behavior more in line with how HTML files are served."]})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If a folder only has one index page, it will be turned into a link instead of a category. This is useful for ",(0,r.jsx)(n.strong,{children:"asset collocation"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"some-doc\n\u251c\u2500\u2500 index.md\n\u251c\u2500\u2500 img1.png\n\u2514\u2500\u2500 img2.png\n"})})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Customizing category index matching"}),(0,r.jsxs)(n.p,{children:["It is possible to opt out any of the category index conventions, or define even more conventions. You can inject your own ",(0,r.jsx)(n.code,{children:"isCategoryIndex"})," matcher through the ",(0,r.jsx)(n.a,{href:"#customize-the-sidebar-items-generator",children:(0,r.jsx)(n.code,{children:"sidebarItemsGenerator"})})," callback. For example, you can also pick ",(0,r.jsx)(n.code,{children:"intro"})," as another file name eligible for automatically becoming the category index."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        async sidebarItemsGenerator({\n          ...args,\n          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below\n          defaultSidebarItemsGenerator,\n        }) {\n          return defaultSidebarItemsGenerator({\n            ...args,\n            // highlight-start\n            isCategoryIndex(doc) {\n              return (\n                // Also pick intro.md in addition to the default ones\n                doc.fileName.toLowerCase() === 'intro' ||\n                defaultCategoryIndexMatcher(doc)\n              );\n            },\n            // highlight-end\n          });\n        },\n      },\n    ],\n  ],\n};\n"})}),(0,r.jsx)(n.p,{children:"Or choose to not have any category index convention."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        async sidebarItemsGenerator({\n          ...args,\n          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below\n          defaultSidebarItemsGenerator,\n        }) {\n          return defaultSidebarItemsGenerator({\n            ...args,\n            // highlight-start\n            isCategoryIndex() {\n              // No doc will be automatically picked as category index\n              return false;\n            },\n            // highlight-end\n          });\n        },\n      },\n    ],\n  ],\n};\n"})}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"isCategoryIndex"})," matcher will be provided with three fields:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fileName"}),", the file's name without extension and with casing preserved"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"directories"}),", the list of directory names ",(0,r.jsx)(n.em,{children:"from the lowest level to the highest level"}),", relative to the docs root directory"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"extension"}),", the file's extension, with a leading dot."]}),"\n"]}),(0,r.jsxs)(n.p,{children:["For example, for a doc file at ",(0,r.jsx)(n.code,{children:"guides/sidebar/autogenerated.md"}),", the props the matcher receives are"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const props = {\n  fileName: 'autogenerated',\n  directories: ['sidebar', 'guides'],\n  extension: '.md',\n};\n"})}),(0,r.jsx)(n.p,{children:"The default implementation is:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function isCategoryIndex({fileName, directories}) {\n  const eligibleDocIndexNames = [\n    'index',\n    'readme',\n    directories[0].toLowerCase(),\n  ];\n  return eligibleDocIndexNames.includes(fileName.toLowerCase());\n}\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"autogenerated-sidebar-metadata",children:"Autogenerated sidebar metadata"}),"\n",(0,r.jsxs)(n.p,{children:["For handwritten sidebar definitions, you would provide metadata to sidebar items through ",(0,r.jsx)(n.code,{children:"sidebars.js"}),"; for autogenerated, Docusaurus would read them from the item's respective file. In addition, you may want to adjust the relative position of each item because, by default, items within a sidebar slice will be generated in ",(0,r.jsx)(n.strong,{children:"alphabetical order"})," (using file and folder names)."]}),"\n",(0,r.jsx)(n.h3,{id:"doc-item-metadata",children:"Doc item metadata"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"label"}),", ",(0,r.jsx)(n.code,{children:"className"}),", and ",(0,r.jsx)(n.code,{children:"customProps"})," attributes are declared in front matter as ",(0,r.jsx)(n.code,{children:"sidebar_label"}),", ",(0,r.jsx)(n.code,{children:"sidebar_class_name"}),", and ",(0,r.jsx)(n.code,{children:"sidebar_custom_props"}),", respectively. Position can be specified in the same way, via ",(0,r.jsx)(n.code,{children:"sidebar_position"})," front matter."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",metastring:'title="docs/tutorials/tutorial-easy.md"',children:"---\n# highlight-start\nsidebar_position: 2\nsidebar_label: Easy\nsidebar_class_name: green\n# highlight-end\n---\n\n# Easy Tutorial\n\nThis is the easy tutorial!\n"})}),"\n",(0,r.jsx)(n.h3,{id:"category-item-metadata",children:"Category item metadata"}),"\n",(0,r.jsxs)(n.p,{children:["Add a ",(0,r.jsx)(n.code,{children:"_category_.json"})," or ",(0,r.jsx)(n.code,{children:"_category_.yml"})," file in the respective folder. You can specify any category metadata and also the ",(0,r.jsx)(n.code,{children:"position"})," metadata. ",(0,r.jsx)(n.code,{children:"label"}),", ",(0,r.jsx)(n.code,{children:"className"}),", ",(0,r.jsx)(n.code,{children:"position"}),", and ",(0,r.jsx)(n.code,{children:"customProps"})," will default to the respective values of the category's linked doc, if there is one."]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="docs/tutorials/_category_.json"',children:'{\n  "position": 2.5,\n  "label": "Tutorial",\n  "collapsible": true,\n  "collapsed": false,\n  "className": "red",\n  "link": {\n    "type": "generated-index",\n    "title": "Tutorial overview"\n  },\n  "customProps": {\n    "description": "This description can be used in the swizzled DocCard"\n  }\n}\n'})})}),(0,r.jsx)(s.Z,{value:"YAML",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",metastring:'title="docs/tutorials/_category_.yml"',children:"position: 2.5 # float position is supported\nlabel: 'Tutorial'\ncollapsible: true # make the category collapsible\ncollapsed: false # keep the category open by default\nclassName: red\nlink:\n  type: generated-index\n  title: Tutorial overview\ncustomProps:\n  description: This description can be used in the swizzled DocCard\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"link"})," is explicitly specified, Docusaurus will not apply any ",(0,r.jsx)(n.a,{href:"#category-index-convention",children:"default conventions"}),"."]}),(0,r.jsxs)(n.p,{children:["The doc links can be specified relatively, e.g. if the category is generated with the ",(0,r.jsx)(n.code,{children:"guides"})," directory, ",(0,r.jsx)(n.code,{children:'"link": {"type": "doc", "id": "intro"}'})," will be resolved to the ID ",(0,r.jsx)(n.code,{children:"guides/intro"}),", only falling back to ",(0,r.jsx)(n.code,{children:"intro"})," if a doc with the former ID doesn't exist."]}),(0,r.jsxs)(n.p,{children:["You can also use ",(0,r.jsx)(n.code,{children:"link: null"})," to opt out of default conventions and not generate any category index page."]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The position metadata is only used ",(0,r.jsx)(n.strong,{children:"within a sidebar slice"}),": Docusaurus does not re-order other items of your sidebar."]})}),"\n",(0,r.jsx)(n.h2,{id:"using-number-prefixes",children:"Using number prefixes"}),"\n",(0,r.jsx)(n.p,{children:"A simple way to order an autogenerated sidebar is to prefix docs and folders by number prefixes, which also makes them appear in the file system in the same order when sorted by file name:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docs\n\u251c\u2500\u2500 01-Intro.md\n\u251c\u2500\u2500 02-Tutorial Easy\n\u2502   \u251c\u2500\u2500 01-First Part.md\n\u2502   \u251c\u2500\u2500 02-Second Part.md\n\u2502   \u2514\u2500\u2500 03-End.md\n\u251c\u2500\u2500 03-Tutorial Advanced\n\u2502   \u251c\u2500\u2500 01-First Part.md\n\u2502   \u251c\u2500\u2500 02-Second Part.md\n\u2502   \u251c\u2500\u2500 03-Third Part.md\n\u2502   \u2514\u2500\u2500 04-End.md\n\u2514\u2500\u2500 04-End.md\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To make it ",(0,r.jsx)(n.strong,{children:"easier to adopt"}),", Docusaurus supports ",(0,r.jsx)(n.strong,{children:"multiple number prefix patterns"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, Docusaurus will ",(0,r.jsx)(n.strong,{children:"remove the number prefix"})," from the doc id, title, label, and URL paths."]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Prefer using ",(0,r.jsx)(n.a,{href:"#autogenerated-sidebar-metadata",children:"additional metadata"})]}),"."]}),(0,r.jsxs)(n.p,{children:["Updating a number prefix can be annoying, as it can require ",(0,r.jsx)(n.strong,{children:"updating multiple existing Markdown links"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",metastring:'title="docs/02-Tutorial Easy/01-First Part.md"',children:"- Check the [Tutorial End](../04-End.mdx);\n+ Check the [Tutorial End](../05-End.mdx);\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"customize-the-sidebar-items-generator",children:"Customize the sidebar items generator"}),"\n",(0,r.jsxs)(n.p,{children:["You can provide a custom ",(0,r.jsx)(n.code,{children:"sidebarItemsGenerator"})," function in the docs plugin (or preset) config:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        async sidebarItemsGenerator({\n          defaultSidebarItemsGenerator,\n          numberPrefixParser,\n          item,\n          version,\n          docs,\n          categoriesMetadata,\n          isCategoryIndex,\n        }) {\n          // Example: return an hardcoded list of static sidebar items\n          return [\n            {type: 'doc', id: 'doc1'},\n            {type: 'doc', id: 'doc2'},\n          ];\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Re-use and enhance the default generator"})," instead of writing a generator from scratch: ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-plugin-content-docs/src/sidebars/generator.ts",children:"the default generator we provide"})," is 250 lines long."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Add, update, filter, re-order"})," the sidebar items according to your use case:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\n// Reverse the sidebar items ordering (including nested category items)\nfunction reverseSidebarItems(items) {\n  // Reverse items in categories\n  const result = items.map((item) => {\n    if (item.type === 'category') {\n      return {...item, items: reverseSidebarItems(item.items)};\n    }\n    return item;\n  });\n  // Reverse items at current level\n  result.reverse();\n  return result;\n}\n// highlight-end\n\nexport default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {\n          const sidebarItems = await defaultSidebarItemsGenerator(args);\n          return reverseSidebarItems(sidebarItems);\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n"})})]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(27378);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);