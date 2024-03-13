import{e as m,d as N,n as c,b as S,o as B,f as V,k as a,w as p,i as e,v,c as A,l as h,t as D,S as E,aS as u,g as O,x as U,y as H,A as T}from"./index-b80aa63d.js";import{_ as i}from"./InputCopyable.vue_vue_type_script_setup_true_lang-e6a08767.js";import{c as x}from"./integer-base-converter.model-81b950ae.js";import{_ as j}from"./InputNumber-959388f3.js";import{_ as M}from"./FormItem-c57016c1.js";import{_ as R}from"./Alert-d1d127be.js";import{_ as W}from"./Divider-22147e65.js";import{_ as q}from"./InputGroupLabel-b4c6fc6d.js";import{_ as z}from"./InputGroup-6d40e726.js";import"./use-locale-124fa3de.js";import"./use-form-item-1962e7ba.js";import"./Button-208d0346.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-a87405a3.js";function F(f){try{f();return}catch(l){return m.isString(l)?l:m.isError(l)||m.isObject(l)&&m.has(l,"message")?l.message:"An error as occurred."}}const G={flex:"","items-baseline":""},J=N({__name:"integer-base-converter",setup(f){const l={labelPosition:"left",labelWidth:"170px",labelAlign:"right",readonly:!0,"mb-2":""},n=c("42"),o=c(10),r=c(42);function s(...b){try{return x(...b)}catch{return""}}const d=S(()=>F(()=>x({value:n.value,fromBase:o.value,toBase:r.value})));return(b,t)=>{const y=U,g=j,w=M,C=R,k=W,$=q,P=z,I=H;return B(),V("div",null,[a(I,null,{default:p(()=>[a(y,{value:e(n),"onUpdate:value":t[0]||(t[0]=_=>v(n)?n.value=_:null),label:"Input number",placeholder:"Put your number here (ex: 42)","label-position":"left","label-width":"110px","mb-2":"","label-align":"right"},null,8,["value"]),a(w,{label:"Input base","label-placement":"left","label-width":"110","show-feedback":!1},{default:p(()=>[a(g,{value:e(o),"onUpdate:value":t[1]||(t[1]=_=>v(o)?o.value=_:null),max:"64",min:"2",placeholder:"Put your input base here (ex: 10)","w-full":""},null,8,["value"])]),_:1}),e(d)?(B(),A(C,{key:0,style:{"margin-top":"25px"},type:"error"},{default:p(()=>[h(D(e(d)),1)]),_:1})):E("",!0),a(k),a(i,u({label:"Binary (2)"},l,{value:s({value:e(n),fromBase:e(o),toBase:2}),placeholder:"Binary version will be here..."}),null,16,["value"]),a(i,u({label:"Octal (8)"},l,{value:s({value:e(n),fromBase:e(o),toBase:8}),placeholder:"Octal version will be here..."}),null,16,["value"]),a(i,u({label:"Decimal (10)"},l,{value:s({value:e(n),fromBase:e(o),toBase:10}),placeholder:"Decimal version will be here..."}),null,16,["value"]),a(i,u({label:"Hexadecimal (16)"},l,{value:s({value:e(n),fromBase:e(o),toBase:16}),placeholder:"Hexadecimal version will be here..."}),null,16,["value"]),a(i,u({label:"Base64 (64)"},l,{value:s({value:e(n),fromBase:e(o),toBase:64}),placeholder:"Base64 version will be here..."}),null,16,["value"]),O("div",G,[a(P,{style:{width:"160px","margin-right":"10px"}},{default:p(()=>[a($,null,{default:p(()=>[h(" Custom: ")]),_:1}),a(g,{value:e(r),"onUpdate:value":t[2]||(t[2]=_=>v(r)?r.value=_:null),max:"64",min:"2"},null,8,["value"])]),_:1}),a(i,u({"flex-1":""},l,{value:s({value:e(n),fromBase:e(o),toBase:e(r)}),placeholder:`Base ${e(r)} will be here...`}),null,16,["value","placeholder"])])]),_:1})])}}});const ie=T(J,[["__scopeId","data-v-7bfa5c15"]]);export{ie as default};
