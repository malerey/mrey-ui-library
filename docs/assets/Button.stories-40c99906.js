import{j as D}from"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const n=({disabled:o=!1,variant:S="primary",children:x})=>D("button",{className:`button button__${S}`,disabled:o,children:x});try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'},{value:'"ghost"'}]}}}}}catch{}const q={title:"Example/Button",component:n,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},e={args:{disabled:!1,variant:"primary",children:"Button"}},a={args:{disabled:!1,variant:"secondary",children:"Button"}},r={args:{disabled:!1,variant:"outline",children:"Button"}},s={args:{disabled:!1,variant:"ghost",children:"Button"}},t={args:{disabled:!0,children:"Button"}};var d,i,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'primary',
    children: 'Button'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'secondary',
    children: 'Button'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'outline',
    children: 'Button'
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,v,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'ghost',
    children: 'Button'
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,B,_;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Button'
  }
}`,...(_=(B=t.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const E=["Default","Secondary","Outline","Ghost","Disabled"];export{e as Default,t as Disabled,s as Ghost,r as Outline,a as Secondary,E as __namedExportsOrder,q as default};
