import{d as e,t as o,r as a,o as l,Q as r,h as n,c as t,a as i,b as d,e as s,f as u,g as c}from"./vendor.2fc0b0b4.js";var v=e({name:"richTextEditor",props:{modelValue:String,toolBarConfig:Array},emits:["update:modelValue"],setup:(e,{emit:t})=>{const{modelValue:i,toolBarConfig:d}=o(e),s=a(),u=a();return l((()=>{s.value=new r(u.value,{modules:{toolbar:null==d?void 0:d.value},theme:"snow"}),s.value.root.innerHTML=null==i?void 0:i.value,null==s||s.value.on("text-change",(()=>{t("update:modelValue",s.value.root.innerHTML)}))})),()=>n("div",{ref:u})}}),m=e({name:"App",components:{richTextEditor:v},setup:()=>({rawHTML:a(""),toolBarConfig:[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],["bold","italic","underline","strike"],[{align:[]}],["clean"]]})});const p={class:"background"},T=i("div",{class:"title"},"raw HTML:",-1),g=i("div",{class:"title"},"HTML preview:",-1),f=i("div",{class:"title"},"Editor:",-1);m.render=function(e,o,a,l,r,n){const c=s("richTextEditor");return u(),t("div",p,[T,i("div",null,d(e.rawHTML),1),g,i("div",{class:"ql-editor content",innerHTML:e.rawHTML},null,8,["innerHTML"]),f,i(c,{toolBarConfig:e.toolBarConfig,modelValue:e.rawHTML,"onUpdate:modelValue":o[1]||(o[1]=o=>e.rawHTML=o)},null,8,["toolBarConfig","modelValue"])])},c(m).mount("#app");
