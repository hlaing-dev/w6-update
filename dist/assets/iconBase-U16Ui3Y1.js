import{a as h,R as o,j as a,P as k}from"./index-BbxsmTX7.js";const v="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.828%207.00017H16V9.00017H3.828L9.192%2014.3642L7.778%2015.7782L0%208.00017L7.778%200.222168L9.192%201.63617L3.828%207.00017Z'%20fill='black'/%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.7503%204.3335H15.167'%20stroke='black'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8333%204.3335H3.25'%20stroke='black'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.75%2013H13'%20stroke='black'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.66667%2013H3.25'%20stroke='black'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.7497%2021.6665H17.333'%20stroke='black'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13%2021.6665H3.25'%20stroke='black'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.167%202.1665V6.49984'%20stroke='black'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.66699%2010.8335V15.1668'%20stroke='black'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.333%2019.5V23.8333'%20stroke='black'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",N=({title:e,showMenuIcon:t})=>{const r=h(),[n,i]=o.useState(!1),[l]=o.useState(["All"]),p=o.useMemo(()=>[[{label:"All",value:"All"},{label:"Pending",value:"Pending"},{label:"Success",value:"Success"},{label:"Failed",value:"Failed"}]],[]);return a.jsxs("div",{className:"flex justify-between items-center py-[8px] sticky top-0 z-50 bg-white shadow-sm px-[20px]",children:[a.jsx("img",{src:v,onClick:()=>r(-1),alt:"back"}),a.jsx("h3",{className:"font-semibold text-[18px]",children:e}),t?a.jsx("img",{onClick:()=>{i(!0)},src:w,alt:"menu"}):a.jsx("div",{}),a.jsx(a.Fragment,{children:a.jsx(k,{visible:n,cascade:!1,data:p,maskClosable:!0,onHide:()=>{i(!1)},onOk:(c,s)=>{console.log("------demo onOk",c,s)},value:l})})]})};var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=o.createContext&&o.createContext(g),j=["attr","size","title"];function O(e,t){if(e==null)return{};var r=y(e,t),n,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(n){x(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function x(e,t,r){return t=P(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){var t=S(e,"string");return typeof t=="symbol"?t:t+""}function S(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b(e){return e&&e.map((t,r)=>o.createElement(t.tag,d({key:r},t.attr),b(t.child)))}function C(e){return t=>o.createElement(E,u({attr:d({},e.attr)},t),b(e.child))}function E(e){var t=r=>{var{attr:n,size:i,title:l}=e,p=O(e,j),c=i||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),o.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,p,{className:s,style:d(d({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&o.createElement("title",null,l),e.children)};return f!==void 0?o.createElement(f.Consumer,null,r=>t(r)):t(g)}export{C as G,N as T};
