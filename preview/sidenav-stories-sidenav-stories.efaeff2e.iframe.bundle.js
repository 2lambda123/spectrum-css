/*! For license information please see sidenav-stories-sidenav-stories.efaeff2e.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_spectrum_css_preview=globalThis.webpackChunk_spectrum_css_preview||[]).push([[2350,1738],{"../components/sidenav/stories/sidenav.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Multilevel:()=>Multilevel,WithHeading:()=>WithHeading,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>sidenav_stories});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),repeat=__webpack_require__("../node_modules/lit/directives/repeat.js"),when=__webpack_require__("../node_modules/lit-html/directives/when.js"),template=__webpack_require__("../components/icon/stories/template.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),sidenav=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/sidenav/index.css"),sidenav_default=__webpack_require__.n(sidenav),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(sidenav_default(),options);const Template=({rootClass="spectrum-SideNav",customClasses=[],variant,hasIcon,iconName,items=[],...globals})=>lit.dy`
    <nav>
      <ul class=${(0,class_map.$)({[rootClass]:!0,[`${rootClass}--${variant}`]:void 0!==variant,[`${rootClass}--hasIcon`]:hasIcon,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}>
        ${(0,repeat.r)(items,(item=>item.id),(item=>void 0!==item.levelTwoItems?lit.dy`
              <li class=${(0,class_map.$)({[`${rootClass}-item`]:!0,"is-selected":item.isSelected,"is-disabled":item.isDisabled})}>
              ${item.heading?lit.dy`<h2 class="${rootClass}-heading" id="${item.id}-heading">${item.heading}</h2>`:lit.dy`
                <a class="${rootClass}-itemLink">
                ${(0,when.g)(hasIcon,(()=>(0,template.Y)({...globals,iconName})))}
                  <span class="${rootClass}-link-text">${item.title}</span>
                </a>
                `}
              <ul class=${(0,class_map.$)({[rootClass]:!0,[`${rootClass}--hasIcon`]:hasIcon,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
              aria-labelledby=${(0,if_defined.o)(item.heading)?`${item.id}-heading`:""}>
                  ${(0,repeat.r)(item.levelTwoItems,(item=>item.id),(item=>SideNavItem({variant,hasIcon,iconName,...globals,...item})))}
                </ul>
              </li>
            `:SideNavItem({hasIcon,iconName,...globals,...item})))}
      </ul>
  </nav>
  `,SideNavItem=({rootClass="spectrum-SideNav",variant,levelThreeItems,link,title,isSelected,isDisabled,id,hasIcon,iconName,customClasses=[],...globals})=>{const displayIcon=!(hasIcon&"multiLevel"===variant);return lit.dy`
    <li id=${id} class=${(0,class_map.$)({[`${rootClass}-item`]:!0,"is-selected":isSelected,"is-disabled":isDisabled,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}>
      <a href=${link} class="${rootClass}-itemLink">
        ${displayIcon?(0,template.Y)({...globals,iconName}):""}
        <span class="${rootClass}-link-text">${title}</span>
      </a>
      ${(0,when.g)(levelThreeItems,(()=>lit.dy`
        <ul class=${rootClass}>
          ${(0,repeat.r)(levelThreeItems,(item=>item.id),(item=>SideNavItem({...globals,...item})))}
        </ul>`))}
    </li>
  `},sidenav_stories={title:"Components/Side nav",description:"SideNav lets users navigate the entire content of a product or a section. These can be used for a single level or a multi-level navigation.",component:"Sidenav",argTypes:{hasIcon:{name:"Has Icon",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},iconName:{name:"Icon Name",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["Image","Folder","Star"],control:"select",if:{arg:"hasIcon",truthy:!0}},items:{table:{disable:!0}},variant:{table:{disable:!0}}},args:{rootClass:"spectrum-SideNav",hasIcon:!1,iconName:"Folder"},parameters:{actions:{handles:[]},status:{type:["accordion","actionbar","actionbutton","actiongroup","actionmenu","alertbanner","alertdialog","assetcard","assetlist","avatar","badge","breadcrumb","button","buttongroup","calendar","card","checkbox","clearbutton","closebutton","colorarea","colorhandle","colorloupe","colorslider","colorwheel","combobox","contextualhelp","datepicker","dial","divider","dropindicator","dropzone","fieldgroup","fieldlabel","floatingactionbutton","helptext","illustratedmessage","infieldbutton","inlinealert","link","logicbutton","menu","miller","modal","opacitycheckerboard","page","pagination","picker","pickerbutton","popover","progressbar","progresscircle","radio","rating","search","sidenav","slider","splitview","steplist","stepper","swatch","swatchgroup","switch","table","tabs","tag","taggroup","textfield","thumbnail","toast","tooltip","tray","treeview","typography","underlay","well"].includes("sidenav")?"migrated":void 0}}},Default=Template.bind({});Default.args={items:[{id:"1",title:"Section Title 1",link:"#",isSelected:!0},{id:"2",title:"Section Title 2",link:"#",isDisabled:!0},{id:"3",title:"Section Title 3",link:"#"}]};const Multilevel=Template.bind({});Multilevel.args={variant:"multiLevel",items:[{id:"1",title:"Section Title 1",link:"#"},{id:"2",title:"Section Title 2",link:"#",levelTwoItems:[{id:"2.1",title:"Section Title 1",link:"#"},{id:"2.2",title:"Section Title 2",link:"#",levelThreeItems:[{id:"3.1",title:"Section Title 1",link:"#"},{id:"3.2",title:"Section Title 2",link:"#"},{id:"3.3",title:"Section Title 3",link:"#"}]}]},{id:"3",title:"Section Title 3",link:"#"}]};const WithHeading=Template.bind({});WithHeading.args={items:[{id:"1",title:"Section 1",link:"#"},{id:"2",heading:"Heading 1",link:"#",levelTwoItems:[{id:"2.1",title:"Section 1",link:"#"},{id:"2.2",title:"Section 2",link:"#"}]}]};const WithIcons=Template.bind({});WithIcons.args={variant:"multiLevel",hasIcon:!0,items:[{id:"1",title:"Section 1",link:"#"},{id:"2",title:"Section 2",link:"#",levelTwoItems:[{id:"2.1",title:"Section 1",link:"#"},{id:"2.2",title:"Section 2",link:"#",levelThreeItems:[{id:"3.1",title:"Section 1",link:"#"}]}]},{id:"3",title:"Section 3",link:"#"}]};const __namedExportsOrder=["Default","Multilevel","WithHeading","WithIcons"]},"../node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,o,r){return n?o():null==r?void 0:r()}__webpack_require__.d(__webpack_exports__,{g:()=>n})},"../node_modules/lit/directives/repeat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>c});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),directive=__webpack_require__("../node_modules/lit-html/directive.js"),directive_helpers=__webpack_require__("../node_modules/lit-html/directive-helpers.js"),u=(e,s,t)=>{for(var r=new Map,_l=s;_l<=t;_l++)r.set(e[_l],_l);return r},c=(0,directive.XM)(class extends directive.Xe{constructor(e){if(super(e),e.type!==directive.pX.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,s,t){var r;void 0===t?t=s:void 0!==s&&(r=s);var l=[],o=[],i=0;for(var _s of e)l[i]=r?r(_s,i):i,o[i]=t(_s,i),i++;return{values:o,keys:l}}render(e,s,t){return this.ct(e,s,t).values}update(s,_ref){var d,[t,r,c]=_ref,a=(0,directive_helpers.i9)(s),{values:p,keys:v}=this.ct(t,r,c);if(!Array.isArray(a))return this.ut=v,p;for(var y,x,h=null!==(d=this.ut)&&void 0!==d?d:this.ut=[],m=[],j=0,k=a.length-1,w=0,A=p.length-1;j<=k&&w<=A;)if(null===a[j])j++;else if(null===a[k])k--;else if(h[j]===v[w])m[w]=(0,directive_helpers.fk)(a[j],p[w]),j++,w++;else if(h[k]===v[A])m[A]=(0,directive_helpers.fk)(a[k],p[A]),k--,A--;else if(h[j]===v[A])m[A]=(0,directive_helpers.fk)(a[j],p[A]),(0,directive_helpers._Y)(s,m[A+1],a[j]),j++,A--;else if(h[k]===v[w])m[w]=(0,directive_helpers.fk)(a[k],p[w]),(0,directive_helpers._Y)(s,a[j],a[k]),k--,w++;else if(void 0===y&&(y=u(v,w,A),x=u(h,j,k)),y.has(h[j]))if(y.has(h[k])){var _e=x.get(v[w]),_t=void 0!==_e?a[_e]:null;if(null===_t){var _e2=(0,directive_helpers._Y)(s,a[j]);(0,directive_helpers.fk)(_e2,p[w]),m[w]=_e2}else m[w]=(0,directive_helpers.fk)(_t,p[w]),(0,directive_helpers._Y)(s,a[j],_t),a[_e]=null;w++}else(0,directive_helpers.ws)(a[k]),k--;else(0,directive_helpers.ws)(a[j]),j++;for(;w<=A;){var _e3=(0,directive_helpers._Y)(s,m[A+1]);(0,directive_helpers.fk)(_e3,p[w]),m[w++]=_e3}for(;j<=k;){var _e4=a[j++];null!==_e4&&(0,directive_helpers.ws)(_e4)}return this.ut=v,(0,directive_helpers.hl)(s,m),lit_html.Jb}})},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/sidenav/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/sidenav/index.css"}}]);
//# sourceMappingURL=sidenav-stories-sidenav-stories.efaeff2e.iframe.bundle.js.map