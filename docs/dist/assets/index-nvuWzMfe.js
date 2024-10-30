import{j as e,L as _,c as s,a as b,b as P,R as H,d as y,T as l,C as m,u as f}from"./index-CD6P7Mgz.js";var N="vocs_Button_button",L="vocs_Button_button_accent";function C({children:t,className:n,href:i,variant:p}){return e.jsx(_,{className:s(n,N,p==="accent"&&L),href:i,variant:"styleless",children:t})}var M="vocs_HomePage_button",B="vocs_HomePage_buttons",k="vocs_HomePage_description",R="vocs_HomePage_logo",u="vocs_HomePage_packageManager",w="vocs_HomePage",D="vocs_HomePage_tabs",d="vocs_HomePage_tabsContent",T="vocs_HomePage_tabsList",$="vocs_HomePage_tagline",S="vocs_HomePage_title";function g({children:t,className:n}){return e.jsx("div",{className:s(n,w),children:t})}function h({className:t}){const{logoUrl:n,title:i}=b();return n?e.jsx("div",{className:s(t,R),children:e.jsx(P,{})}):e.jsx("h1",{className:s(t,S),children:i})}function j({children:t,className:n}){return e.jsx("div",{className:s(n,$),children:t})}function x({children:t,className:n}){return e.jsx("div",{className:s(n,k),children:t})}function r({children:t,className:n}){return e.jsx("div",{className:s(n,B),children:t})}function o(t){return e.jsx(C,{...t,className:s(M,t.className)})}function c({name:t,type:n="install"}){return e.jsxs(H,{className:D,defaultValue:"npm",children:[e.jsxs(y,{className:T,children:[e.jsx(l,{value:"npm",children:"npm"}),e.jsx(l,{value:"pnpm",children:"pnpm"}),e.jsx(l,{value:"yarn",children:"yarn"})]}),e.jsxs(m,{className:d,value:"npm",children:[e.jsx("span",{className:u,children:"npm"})," ",n==="init"?"init":"install"," ",t]}),e.jsxs(m,{className:d,value:"pnpm",children:[e.jsx("span",{className:u,children:"pnpm"})," ",n==="init"?"create":"install"," ",t]}),e.jsxs(m,{className:d,value:"yarn",children:[e.jsx("span",{className:u,children:"yarn"})," ",n==="init"?"create":"install"," ",t]})]})}const E=Object.freeze(Object.defineProperty({__proto__:null,Button:o,Buttons:r,Description:x,InstallPackage:c,Logo:h,Root:g,Tagline:j},Symbol.toStringTag,{value:"Module"})),X={layout:"landing",showLogo:!1};function v(t){const n={a:"a",em:"em",...f(),...t.components};return E||a("HomePage",!1),o||a("HomePage.Button",!0),r||a("HomePage.Buttons",!0),x||a("HomePage.Description",!0),c||a("HomePage.InstallPackage",!0),h||a("HomePage.Logo",!0),g||a("HomePage.Root",!0),j||a("HomePage.Tagline",!0),e.jsxs(g,{children:[e.jsx(h,{}),e.jsxs(j,{children:["Minimal TypeScript SDK for interacting with ",e.jsx(n.a,{href:"https://abstract.money",children:"Abstract"})," apps."]}),e.jsxs(x,{children:["Bootstrap your frontend development with ",e.jsx(n.em,{children:"abstract.js"}),"."]}),e.jsxs(r,{children:[e.jsx(o,{href:"/getting-started",variant:"accent",children:"Get started"}),e.jsx(o,{href:"https://github.com/abstractsdk/abstract.js",children:"GitHub"})]}),e.jsx(c,{name:"@abstract-money/react",type:"install"}),e.jsx(r,{children:e.jsx(o,{href:"/getting-started",variant:"accent",children:"React docs"})}),e.jsx(c,{name:"@abstract-money/core",type:"install"}),e.jsx(r,{children:e.jsx(o,{href:"/core/introduction",variant:"accent",children:"Core docs"})}),e.jsx(c,{name:"@abstract-money/cli",type:"install"}),e.jsx(r,{children:e.jsx(o,{href:"/cli/introduction",variant:"accent",children:"CLI docs"})})]})}function G(t={}){const{wrapper:n}={...f(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(v,{...t})}):v(t)}function a(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{G as default,X as frontmatter};
