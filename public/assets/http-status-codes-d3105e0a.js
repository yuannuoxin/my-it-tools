import{d as k,n as b,a7 as B,ah as d,b as w,o as t,f as o,k as F,i as p,v as C,F as m,h,x as S,g as c,t as a,c as z,w as N,y as R}from"./index-b80aa63d.js";const T={"mb-2":"","text-xl":""},V={"text-lg":"","font-bold":""},D={"op-70":""},L=k({__name:"http-status-codes",setup(E){const e=b(""),{searchResult:f}=B({search:e,data:d.flatMap(({codes:u,category:s})=>u.map(n=>({...n,category:s}))),options:{keys:[{name:"code",weight:3},{name:"name",weight:2},"description","category"]}}),v=w(()=>e.value?[{category:"Search results",codes:f.value}]:d);return(u,s)=>{const n=S,g=R;return t(),o("div",null,[F(n,{value:p(e),"onUpdate:value":s[0]||(s[0]=r=>C(e)?e.value=r:null),placeholder:"Search http status...",autofocus:"","raw-text":"","mb-10":""},null,8,["value"]),(t(!0),o(m,null,h(p(v),({codes:r,category:l})=>(t(),o("div",{key:l,"mb-8":""},[c("div",T,a(l),1),(t(!0),o(m,null,h(r,({code:i,description:x,name:y,type:_})=>(t(),z(g,{key:i,"mb-2":""},{default:N(()=>[c("div",V,a(i)+" "+a(y),1),c("div",D,a(x)+" "+a(_!=="HTTP"?`For ${_}.`:""),1)]),_:2},1024))),128))]))),128))])}}});export{L as default};
