import{ac as k,aF as Q,k as A,r as p,M as w,ap as j,a9 as ee,p as te,aG as ne,w as H,l as ie,G as F,a as l,j as _,aq as ue,K as re,o as oe,t as ae,v as se}from"./index-BnB9npJL.js";const Ye=Object.assign,ce=typeof window<"u",M=e=>e!==null&&typeof e=="object",B=e=>e!=null,le=e=>typeof e=="function",W=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),de=()=>ce?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function O(e,t){const n=t.split(".");let i=e;return n.forEach(u=>{var o;i=M(i)&&(o=i[u])!=null?o:""}),i}function Ze(e,t,n){return t.reduce((i,u)=>(i[u]=e[u],i),{})}const qe=null,m=[Number,String],y={type:Boolean,default:!0},C=e=>({type:String,default:e});var G=typeof window<"u";function P(e){return G?requestAnimationFrame(e):-1}function Xe(e){P(()=>P(e))}var fe=e=>e===window,T=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),ge=e=>{const t=te(e);if(fe(t)){const n=t.innerWidth,i=t.innerHeight;return T(n,i)}return t!=null&&t.getBoundingClientRect?t.getBoundingClientRect():T(0,0)};function Je(e){const t=k(e,null);if(t){const n=j(),{link:i,unlink:u,internalChildren:o}=t;i(n),Q(()=>u(n));const c=A(()=>o.indexOf(n));return{parent:t,index:c}}return{parent:null,index:p(-1)}}function he(e){const t=[],n=i=>{Array.isArray(i)&&i.forEach(u=>{var o;ne(u)&&(t.push(u),(o=u.component)!=null&&o.subTree&&(t.push(u.component.subTree),n(u.component.subTree.children)),u.children&&n(u.children))})};return n(e),t}var R=(e,t)=>{const n=e.indexOf(t);return n===-1?e.findIndex(i=>t.key!==void 0&&t.key!==null&&i.type===t.type&&i.key===t.key):n};function ve(e,t,n){const i=he(e.subTree.children);n.sort((o,c)=>R(i,o.vnode)-R(i,c.vnode));const u=n.map(o=>o.proxy);t.sort((o,c)=>{const r=u.indexOf(o),a=u.indexOf(c);return r-a})}function Qe(e){const t=w([]),n=w([]),i=j();return{children:t,linkChildren:o=>{ee(e,Object.assign({link:a=>{a.proxy&&(n.push(a),t.push(a.proxy),ve(i,t,n))},unlink:a=>{const s=n.indexOf(a);t.splice(s,1),n.splice(s,1)},children:t,internalChildren:n},o))}}}var E,x;function pe(){if(!E&&(E=p(0),x=p(0),G)){const e=()=>{E.value=window.innerWidth,x.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:E,height:x}}de();const{width:me,height:Ee}=pe();function h(e){if(B(e))return W(e)?`${e}px`:String(e)}function Be(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const be=/-(\w)/g,K=e=>e.replace(be,(t,n)=>n.toUpperCase()),{hasOwnProperty:xe}=Object.prototype;function we(e,t,n){const i=t[n];B(i)&&(!xe.call(e,n)||!M(i)?e[n]=i:e[n]=U(Object(e[n]),i))}function U(e,t){return Object.keys(t).forEach(n=>{we(e,t,n)}),e}var ye={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const S=p("zh-CN"),I=w({"zh-CN":ye}),Ce={messages(){return I[S.value]},use(e,t){S.value=e,this.add({[e]:t})},add(e={}){U(I,e)}};var De=Ce;function ke(e){const t=K(e)+".";return(n,...i)=>{const u=De.messages(),o=O(u,t+n)||O(u,n);return le(o)?o(...i):o}}function D(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,i)=>n+D(e,i),""):Object.keys(t).reduce((n,i)=>n+(t[i]?D(e,i):""),""):""}function Ae(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${D(t,n)}`)}function b(e){const t=`van-${e}`;return[t,Ae(t),ke(t)]}const V="van-hairline",_e=`${V}--bottom`,et=`${V}--top-bottom`,L="van-haptics-feedback";function $(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(K(`-${n}`),e))},e}const $e=Symbol();function Fe(e){const t=k($e,null);t&&H(t,n=>{n&&e()})}const Oe=(e,t)=>{const n=p(),i=()=>{n.value=ge(e).height};return ie(()=>{F(i);for(let u=1;u<=3;u++)setTimeout(i,100*u)}),Fe(()=>F(i)),H([me,Ee],i),n};function Pe(e,t){const n=Oe(e);return i=>l("div",{class:t("placeholder"),style:{height:n.value?`${n.value}px`:void 0}},[i()])}const[Te,N]=b("badge"),Re={dot:Boolean,max:m,tag:C("div"),color:String,offset:Array,content:m,showZero:y,position:C("top-right")};var Se=_({name:Te,props:Re,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:r,showZero:a}=e;return B(r)&&r!==""&&(a||r!==0&&r!=="0")},i=()=>{const{dot:r,max:a,content:s}=e;if(!r&&n())return t.content?t.content():B(a)&&W(s)&&+s>+a?`${a}+`:s},u=r=>r.startsWith("-")?r.replace("-",""):`-${r}`,o=A(()=>{const r={background:e.color};if(e.offset){const[a,s]=e.offset,{position:d}=e,[f,v]=d.split("-");t.default?(typeof s=="number"?r[f]=h(f==="top"?s:-s):r[f]=f==="top"?h(s):u(s),typeof a=="number"?r[v]=h(v==="left"?a:-a):r[v]=v==="left"?h(a):u(a)):(r.marginTop=h(s),r.marginLeft=h(a))}return r}),c=()=>{if(n()||e.dot)return l("div",{class:N([e.position,{dot:e.dot,fixed:!!t.default}]),style:o.value},[i()])};return()=>{if(t.default){const{tag:r}=e;return l(r,{class:N("wrapper")},{default:()=>[t.default(),c()]})}return c()}}});const Ie=$(Se),[Le,tt]=b("config-provider"),Ne=Symbol(Le),[ze,z]=b("icon"),je=e=>e==null?void 0:e.includes("/"),He={dot:Boolean,tag:C("i"),name:String,size:m,badge:m,color:String,badgeProps:Object,classPrefix:String};var Me=_({name:ze,props:He,setup(e,{slots:t}){const n=k(Ne,null),i=A(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||z());return()=>{const{tag:u,dot:o,name:c,size:r,badge:a,color:s}=e,d=je(c);return l(Ie,ue({dot:o,tag:u,class:[i.value,d?"":`${i.value}-${c}`],style:{color:s,fontSize:h(r)},content:a},e.badgeProps),{default:()=>{var f;return[(f=t.default)==null?void 0:f.call(t),d&&l("img",{class:z("image"),src:c},null)]}})}}});const Y=$(Me),[We,g]=b("nav-bar"),Ge={title:String,fixed:Boolean,zIndex:m,border:y,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:y};var Ke=_({name:We,props:Ge,emits:["clickLeft","clickRight"],setup(e,{emit:t,slots:n}){const i=p(),u=Pe(i,g),o=d=>{e.leftDisabled||t("clickLeft",d)},c=d=>{e.rightDisabled||t("clickRight",d)},r=()=>n.left?n.left():[e.leftArrow&&l(Y,{class:g("arrow"),name:"arrow-left"},null),e.leftText&&l("span",{class:g("text")},[e.leftText])],a=()=>n.right?n.right():l("span",{class:g("text")},[e.rightText]),s=()=>{const{title:d,fixed:f,border:v,zIndex:Z}=e,q=Be(Z),X=e.leftArrow||e.leftText||n.left,J=e.rightText||n.right;return l("div",{ref:i,style:q,class:[g({fixed:f}),{[_e]:v,"van-safe-area-top":e.safeAreaInsetTop}]},[l("div",{class:g("content")},[X&&l("div",{class:[g("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?L:""],onClick:o},[r()]),l("div",{class:[g("title"),"van-ellipsis"]},[n.title?n.title():d]),J&&l("div",{class:[g("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?L:""],onClick:c},[a()])])])};return()=>e.fixed&&e.placeholder?u(s):s()}});const Ue=$(Ke),nt={__name:"HeaderBar",props:{title:{type:String,default:""},leftShow:{type:Boolean,default:!0}},setup(e){const t=re(),n=e,i=()=>{t.push("/mine")},u=()=>history.back();return(o,c)=>{const r=Y,a=Ue;return oe(),ae(a,{title:n.title,fixed:"",placeholder:"","left-arrow":n.leftShow,onClickRight:i,onClickLeft:u},{right:se(()=>[l(r,{name:"wap-home-o",size:"20"})]),_:1},8,["title","left-arrow"])}}};export{et as B,Y as I,nt as _,Qe as a,Je as b,b as c,Xe as d,Ye as e,B as i,C as m,m as n,Ze as p,P as r,y as t,qe as u,$ as w};
