import{cl as l,d as i,s as u,o as m,c as f,w as e,g as r,t as g,i as t,k as a,l as _,m as x,y,A as v}from"./index-b80aa63d.js";import{c as C}from"./computedRefreshable-0ad0da68.js";const h=()=>l(1024,65535),k={class:"port"},b={flex:"","justify-center":"","gap-3":""},P=i({__name:"random-port-generator",setup(B){const[o,c]=C(()=>String(h())),{copy:p}=u({source:o,text:"Port copied to the clipboard"});return(I,n)=>{const s=x,d=y;return m(),f(d,null,{default:e(()=>[r("div",k,g(t(o)),1),r("div",b,[a(s,{onClick:n[0]||(n[0]=N=>t(p)())},{default:e(()=>[_(" Copy ")]),_:1}),a(s,{onClick:t(c)},{default:e(()=>[_(" Refresh ")]),_:1},8,["onClick"])])]),_:1})}}});const G=v(P,[["__scopeId","data-v-97db8e1e"]]);export{G as default};
