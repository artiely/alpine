import{u as m}from"./BfLu_Bn3.js";import{M as c,I as p,d as i,aa as l,r as u,N as e,l as d}from"./1GubBomY.js";import f from"./4tyL0aIA.js";import y from"./CTBRAfJY.js";import"./CB-FAqGd.js";import"./EbMXP8Pe.js";import"./DmGh9nBw.js";import"./D7fFALjI.js";import"./Bqxha4hz.js";import"./CVNGhmoM.js";import"./GcBUatSE.js";import"./DKCFVBNn.js";import"./Dhq6VkNL.js";import"./Bty1VO-q.js";import"./DpLLJG7x.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-a8081ec9"]]);export{V as default};
