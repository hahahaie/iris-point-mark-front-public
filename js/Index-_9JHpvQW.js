import{E as g,f as b}from"./request-Cs-5J-qA.js";import{E as V,a as x}from"./el-input-ZzuqlYaP.js";/* empty css                  */import{u as E}from"./user-CwqoNLhH.js";import{_ as y,r as s,R as k,K as w,M as F,c as I,a as o,v as u,o as h,N as A,Q as i}from"./index-BnB9npJL.js";const B={class:"page-wrapper"},R={__name:"Index",setup(q){let d=s("");d.value=k.getAccount();const p=w(),c=F({vd_uid:[{required:!0,message:"不能为空喔",trigger:"blur"}],phone_num:[{required:!0,message:"不能为空喔",trigger:"blur"}]}),m=s(),t=s({account:d.value,vd_uid:"",phone_num:""}),_=async r=>{r&&await r.validate(async(e,n)=>{if(e){const l=await E.bind(t.value);l.code===200?(i.success("绑定成功"),p.go(-1)):i.error(l.msg)}})};return(r,e)=>{const n=g,l=x,v=b,f=V;return h(),I("div",B,[o(f,{ref_key:"bindFormRef",ref:m,model:t.value,rules:c,"status-icon":""},{default:u(()=>[o(l,{label:"账号",prop:"account",required:""},{default:u(()=>[o(n,{modelValue:t.value.account,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value.account=a),disabled:""},null,8,["modelValue"])]),_:1}),o(l,{label:"微店uid",prop:"vd_uid"},{default:u(()=>[o(n,{modelValue:t.value.vd_uid,"onUpdate:modelValue":e[1]||(e[1]=a=>t.value.vd_uid=a),oninput:"v=>(v=v.replace(/[^\\d]/g,''))"},null,8,["modelValue"])]),_:1}),o(l,{label:"手机号后4位",prop:"phone_num"},{default:u(()=>[o(n,{modelValue:t.value.phone_num,"onUpdate:modelValue":e[2]||(e[2]=a=>t.value.phone_num=a),oninput:"v=>(v=v.replace(/[^\\d]/g,''))",maxlength:"4"},null,8,["modelValue"])]),_:1}),o(l,null,{default:u(()=>[o(v,{style:{width:"100%"},type:"primary",onClick:e[3]||(e[3]=a=>_(m.value))},{default:u(()=>[A(" 绑定 ")]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}},Q=y(R,[["__scopeId","data-v-f7a7819e"]]);export{Q as default};
