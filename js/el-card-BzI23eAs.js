import{d as p,e as y,j as f,u,o as r,c as t,q as o,p as a,B as d,y as l,n as c,C as h,F as m,N as n,z as i,J as v}from"./index-BnB9npJL.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),C=f({name:"ElCard"}),b=f({...C,props:S,setup(w){const s=u("card");return(e,$)=>(r(),t("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(a(s).e("header"))},[d(e.$slots,"header",{},()=>[n(i(e.header),1)])],2)):l("v-if",!0),c("div",{class:o([a(s).e("body"),e.bodyClass]),style:h(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(a(s).e("footer"))},[d(e.$slots,"footer",{},()=>[n(i(e.footer),1)])],2)):l("v-if",!0)],2))}});var g=m(b,[["__file","card.vue"]]);const k=v(g);export{k as E};
