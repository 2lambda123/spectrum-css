/*! For license information please see treeview-stories-treeview-stories.0579179b.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_spectrum_css_preview=globalThis.webpackChunk_spectrum_css_preview||[]).push([[5124,1738],{"../components/opacitycheckerboard/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),opacitycheckerboard=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/opacitycheckerboard/index.css"),opacitycheckerboard_default=__webpack_require__.n(opacitycheckerboard),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(opacitycheckerboard_default(),options);const Template=({rootClass="spectrum-OpacityCheckerboard",backgroundPosition="top left",customClasses=[],customStyles={},id,content=[],role})=>lit.dy`
		<div
			class=${(0,class_map.$)({[rootClass]:!0,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
			style=${(0,if_defined.o)((0,style_map.V)({"--mod-opacity-checkerboard-position":backgroundPosition,...customStyles}))}
			role=${(0,if_defined.o)(role)}
			id=${(0,if_defined.o)(id)}
		>
			${content}
		</div>`},"../components/thumbnail/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Template});var template=__webpack_require__("../components/opacitycheckerboard/stories/template.js"),lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),when=__webpack_require__("../node_modules/lit-html/directives/when.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),thumbnail=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/thumbnail/index.css"),thumbnail_default=__webpack_require__.n(thumbnail),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(thumbnail_default(),options);const Template=({rootClass="spectrum-Thumbnail",size="500",imageURL,svg,altText,isCover=!1,isDisabled=!1,isFocused=!1,isLayer=!1,isSelected=!1,backgroundColor,onclick,customClasses=[],customStyles={},id})=>{const image=imageURL?lit.dy`<img class="${rootClass}-image" src=${imageURL} alt=${(0,if_defined.o)(altText)}/>`:svg?lit.dy`${svg}`:"",checkerboardContent=lit.dy`
			<div class="${rootClass}-image-wrapper">
			${imageURL?lit.dy`<img
						class="${rootClass}-image"
						src=${imageURL}
						alt=${altText}
					/>`:""}
			${svg?lit.dy`${svg}`:""}
		</div>
	`;return isLayer?lit.dy`
			<div
				class=${(0,class_map.$)({[rootClass]:!0,[`${rootClass}--cover`]:isCover,[`${rootClass}-layer`]:isLayer,"is-selected":isSelected,"is-disabled":isDisabled,"is-focused":isFocused,[`${rootClass}--size${size}`]:void 0!==size,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
				id=${(0,if_defined.o)(id)}
				@click=${onclick}
			>
				${(0,template.Y)({componentOnly:!0,customClasses:[`${rootClass}-layer-inner`],content:checkerboardContent})}
			</div>
		`:backgroundColor?lit.dy`
			<div
				class=${(0,class_map.$)({[rootClass]:!0,[`${rootClass}--cover`]:isCover,[`${rootClass}-layer`]:isLayer,"is-selected":isSelected,"is-disabled":isDisabled,"is-focused":isFocused,[`${rootClass}--size${size}`]:void 0!==size,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
				id=${(0,if_defined.o)(id)}
				@click=${onclick}
			>
				<div class="${rootClass}-background" style=${(0,style_map.V)({backgroundColor})}></div>
				<div class="${rootClass}-image-wrapper">
					${imageURL?lit.dy`<img
								class="${rootClass}-image"
								src=${imageURL}
								alt=${altText}
						  />`:""}
				</div>
			</div>
		`:lit.dy`
		<div
			class=${(0,class_map.$)({[rootClass]:!0,[`${rootClass}--cover`]:isCover,[`${rootClass}-layer`]:isLayer,"is-selected":isSelected,"is-disabled":isDisabled,"is-focused":isFocused,[`${rootClass}--size${size}`]:void 0!==size,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
		style=${(0,if_defined.o)((0,style_map.V)({...customStyles}))}
		id=${(0,if_defined.o)(id)}
		@click=${onclick}
	>
			${(0,when.g)(backgroundColor,(()=>lit.dy`<div class="${rootClass}-background" style=${(0,if_defined.o)((0,style_map.V)({backgroundColor}))}></div>`))}
			${(0,template.Y)({rootClass:backgroundColor?`${rootClass}-image-wrapper`:void 0,customClasses:isLayer?[`${rootClass}-layer-inner`]:backgroundColor?[]:[`${rootClass}-image-wrapper`],content:image?[image]:[]})}
		</div>
	`}},"../components/treeview/stories/treeview.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Flat:()=>Flat,FoldersAndFiles:()=>FoldersAndFiles,Thumbnails:()=>Thumbnails,WithDropTarget:()=>WithDropTarget,WithSections:()=>WithSections,__namedExportsOrder:()=>__namedExportsOrder,default:()=>treeview_stories});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),repeat=__webpack_require__("../node_modules/lit/directives/repeat.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),template=__webpack_require__("../components/icon/stories/template.js"),stories_template=__webpack_require__("../components/thumbnail/stories/template.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),treeview=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/treeview/index.css"),treeview_default=__webpack_require__.n(treeview),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(treeview_default(),options);const Template=({rootClass="spectrum-TreeView",customClasses=[],customStyles={},size="m",variant,isQuiet,items,...globals})=>lit.dy`
		<ul
			class=${(0,class_map.$)({[rootClass]:!0,[`${rootClass}--size${size?.toUpperCase()}`]:void 0!==size,[`${rootClass}--${variant}`]:void 0!==variant,[`${rootClass}--quiet`]:isQuiet,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
			style=${(0,style_map.V)(customStyles)}
		>
			${(0,repeat.r)(items,(item=>item.id),(item=>(({rootClass="spectrum-TreeView",size="m",type,id,link,label,isSelected,isDisabled,isOpen,isDropTarget,icon,thumbnail,items,customClasses=[],...globals})=>"heading"===type?lit.dy`
			<li
				id=${id}
				class=${(0,class_map.$)({[`${rootClass}-section`]:!0,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
			>
				<div class="${rootClass}-heading">
					<span class="${rootClass}-itemLabel">${label}</span>
				</div>
				${void 0!==items&&items.length>0?Template({...globals,items,size,rootClass:"spectrum-TreeView",customClasses:["is-opened"]}):""}
			</li>
		`:lit.dy`
		<li
			id=${id}
			class=${(0,class_map.$)({[`${rootClass}-item`]:!0,"is-selected":isSelected,"is-disabled":isDisabled,"is-open":isOpen,"is-drop-target":isDropTarget,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
		>
			<a
				href=${link}
				target="_self"
				class="${rootClass}-itemLink"
				@click=${onclick??function(evt){if(isDisabled||!evt||!evt.target||void 0===items)return;evt.preventDefault();const closest=evt.target.closest(`.${rootClass}-item`);closest&&closest.classList.toggle("is-open")}}
			>
				${void 0!==items?(0,template.Y)({...globals,size,iconName:"ChevronRight",customClasses:[`${rootClass}-itemIndicator`]}):""}
				${icon?(0,template.Y)({...globals,size,iconName:icon,customClasses:[`${rootClass}-itemIcon`]}):""}
				${thumbnail?(0,stories_template.Y)({...globals,...thumbnail,size:"s"==size||"m"==size?"200":"l"==size?"400":"xl"==size?"600":"300",isLayer:!0,isSelected,customClasses:[`${rootClass}-itemThumbnail`]}):""}
				<span class="${rootClass}-itemLabel">${label}</span>
			</a>
			${void 0!==items&&items.length>0?Template({...globals,items,size,rootClass:"spectrum-TreeView",customClasses:["is-opened"]}):""}
		</li>
	`)({...globals,...item,size})))}
		</ul>
	`,treeview_stories={title:"Components/Tree view",description:"The typical usage of a treeview involves nesting a .spectrum-Treeview element within the .spectrum-TreeView-item parent element.",component:"Treeview",argTypes:{items:{table:{disable:!0}},variant:{table:{disable:!0}},size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},isQuiet:{name:"Quiet",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},customStyles:{name:"Custom styles",description:"Storybook only styles for testing the story, applied to the parent element.",table:{type:{summary:"object"},category:"Advanced"},if:{arg:"customStyles"}}},args:{rootClass:"spectrum-TreeView",size:"m",isQuiet:!1,customStyles:{"max-inline-size":"600px"}},parameters:{actions:{handles:["click .spectrum-TreeView-itemLink"]},status:{type:["accordion","actionbar","actionbutton","actiongroup","actionmenu","alertbanner","alertdialog","assetcard","assetlist","avatar","badge","breadcrumb","button","buttongroup","calendar","card","checkbox","clearbutton","closebutton","colorarea","colorhandle","colorloupe","colorslider","colorwheel","combobox","contextualhelp","datepicker","dial","divider","dropindicator","dropzone","fieldgroup","fieldlabel","floatingactionbutton","helptext","illustratedmessage","infieldbutton","inlinealert","link","logicbutton","menu","miller","modal","opacitycheckerboard","page","pagination","picker","pickerbutton","popover","progressbar","progresscircle","radio","rating","search","sidenav","slider","splitview","steplist","stepper","swatch","swatchgroup","switch","table","tabs","tag","taggroup","textfield","thumbnail","toast","tooltip","tray","treeview","typography","underlay","well"].includes("treeview")?"migrated":void 0}}},Default=Template.bind({});Default.args={items:[{id:"label1",label:"Label 1",link:"#",isSelected:!0},{id:"group1",label:"Group 1",link:"#",isOpen:!0,items:[{id:"label2",label:"Label 2",link:"#",isDisabled:!0},{id:"label3",label:"Label 3",link:"#"}]},{id:"group2",label:"Group 2",link:"#",items:[{id:"label3",label:"Label 3",link:"#"},{id:"group3",label:"Group 3",link:"#",items:[{id:"label4",label:"Label 4",link:"#"},{id:"group4",label:"Group 4 (Empty)",link:"#",items:[]}]}]}]};const FoldersAndFiles=Template.bind({});FoldersAndFiles.args={items:[{id:"label1",label:"Label 1",link:"#",icon:"Document"},{id:"group1",label:"Group 1",link:"#",isOpen:!0,isSelected:!0,icon:"Folder",items:[{id:"label2",label:"Label 2",link:"#",icon:"Document"},{id:"label3",label:"Label 3",link:"#",icon:"Document"},{id:"label4",label:"This example has longer text. Per the guidelines, long text will truncate with an ellipsis, and the full text should be available in a tooltip.",link:"#",icon:"Document"}]},{id:"group2",label:"Group 2",link:"#",icon:"Folder",items:[{id:"label3",label:"Label 3",link:"#",icon:"Document"},{id:"group3",label:"Group 3",link:"#",icon:"Folder",items:[{id:"label4",label:"Label 4",link:"#",icon:"Document"}]}]}]};const Thumbnails=Template.bind({});Thumbnails.args={variant:"thumbnail",items:[{id:"group1",label:"Group 1",link:"#",isOpen:!0,thumbnail:{imageURL:"thumbnail.png",altText:"Woman crouching"},items:[{id:"label2",label:"Label 2",link:"#",isSelected:!0,thumbnail:{imageURL:"thumbnail.png",altText:"Woman crouching"}},{id:"label3",label:"Label 3",link:"#",thumbnail:{imageURL:"flowers.png",altText:"Flowers"}}]}]};const WithSections=Template.bind({});WithSections.args={items:[{type:"heading",label:"Section 1",items:[{id:"group1",label:"Group 1",link:"#",isOpen:!0,items:[{id:"label2",label:"Label 2",link:"#"},{id:"label3",label:"Label 3",link:"#"}]}]},{type:"heading",label:"Section 2",items:[{id:"label4",label:"Label 4",link:"#"}]}]};const WithDropTarget=Template.bind({});WithDropTarget.args={items:[{id:"label2",label:"Label 2",link:"#",isDropTarget:!0},{id:"label3",label:"Label 3",link:"#"}]};const Flat=Template.bind({});Flat.storyName="Flat Markup",Flat.args={items:[{id:"label1",label:"Label 1. This example has longer text. Per the guidelines, long text will truncate with an ellipsis, and the full text should be available in a tooltip.",link:"#",isSelected:!0},{id:"group1",label:"Group 1",link:"#",isOpen:!0,items:[]},{id:"label2",label:"Label 2",link:"#",isDisabled:!0,customClasses:["spectrum-TreeView-item--indent1"]},{id:"label3",label:"Label 3",link:"#",customClasses:["spectrum-TreeView-item--indent1"]},{id:"label4",label:"Label 4",link:"#"},{id:"group2",label:"Group 2",link:"#",isOpen:!0,items:[]},{id:"label5",label:"Label 5",link:"#",customClasses:["spectrum-TreeView-item--indent1"]},{id:"group3",label:"Group 3",link:"#",isOpen:!0,items:[],customClasses:["spectrum-TreeView-item--indent1"]},{id:"label6",label:"Label 6",link:"#",customClasses:["spectrum-TreeView-item--indent2"]}]};const __namedExportsOrder=["Default","FoldersAndFiles","Thumbnails","WithSections","WithDropTarget","Flat"]},"../node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,o,r){return n?o():null==r?void 0:r()}__webpack_require__.d(__webpack_exports__,{g:()=>n})},"../node_modules/lit/directives/repeat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>c});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),directive=__webpack_require__("../node_modules/lit-html/directive.js"),directive_helpers=__webpack_require__("../node_modules/lit-html/directive-helpers.js"),u=(e,s,t)=>{for(var r=new Map,_l=s;_l<=t;_l++)r.set(e[_l],_l);return r},c=(0,directive.XM)(class extends directive.Xe{constructor(e){if(super(e),e.type!==directive.pX.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,s,t){var r;void 0===t?t=s:void 0!==s&&(r=s);var l=[],o=[],i=0;for(var _s of e)l[i]=r?r(_s,i):i,o[i]=t(_s,i),i++;return{values:o,keys:l}}render(e,s,t){return this.ct(e,s,t).values}update(s,_ref){var d,[t,r,c]=_ref,a=(0,directive_helpers.i9)(s),{values:p,keys:v}=this.ct(t,r,c);if(!Array.isArray(a))return this.ut=v,p;for(var y,x,h=null!==(d=this.ut)&&void 0!==d?d:this.ut=[],m=[],j=0,k=a.length-1,w=0,A=p.length-1;j<=k&&w<=A;)if(null===a[j])j++;else if(null===a[k])k--;else if(h[j]===v[w])m[w]=(0,directive_helpers.fk)(a[j],p[w]),j++,w++;else if(h[k]===v[A])m[A]=(0,directive_helpers.fk)(a[k],p[A]),k--,A--;else if(h[j]===v[A])m[A]=(0,directive_helpers.fk)(a[j],p[A]),(0,directive_helpers._Y)(s,m[A+1],a[j]),j++,A--;else if(h[k]===v[w])m[w]=(0,directive_helpers.fk)(a[k],p[w]),(0,directive_helpers._Y)(s,a[j],a[k]),k--,w++;else if(void 0===y&&(y=u(v,w,A),x=u(h,j,k)),y.has(h[j]))if(y.has(h[k])){var _e=x.get(v[w]),_t=void 0!==_e?a[_e]:null;if(null===_t){var _e2=(0,directive_helpers._Y)(s,a[j]);(0,directive_helpers.fk)(_e2,p[w]),m[w]=_e2}else m[w]=(0,directive_helpers.fk)(_t,p[w]),(0,directive_helpers._Y)(s,a[j],_t),a[_e]=null;w++}else(0,directive_helpers.ws)(a[k]),k--;else(0,directive_helpers.ws)(a[j]),j++;for(;w<=A;){var _e3=(0,directive_helpers._Y)(s,m[A+1]);(0,directive_helpers.fk)(_e3,p[w]),m[w++]=_e3}for(;j<=k;){var _e4=a[j++];null!==_e4&&(0,directive_helpers.ws)(_e4)}return this.ut=v,(0,directive_helpers.hl)(s,m),lit_html.Jb}})},"../node_modules/lit/directives/style-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>o});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),directive=__webpack_require__("../node_modules/lit-html/directive.js"),i="important",n=" !"+i,o=(0,directive.XM)(class extends directive.Xe{constructor(t){var e;if(super(t),t.type!==directive.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{var s=t[r];return null==s?e:e+"".concat(r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),":").concat(s,";")}),"")}update(e,_ref){var[r]=_ref,{style:s}=e.element;if(void 0===this.ht){for(var _t in this.ht=new Set,r)this.ht.add(_t);return this.render(r)}for(var _t2 in this.ht.forEach((t=>{null==r[t]&&(this.ht.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")})),r){var _e=r[_t2];if(null!=_e){this.ht.add(_t2);var _r="string"==typeof _e&&_e.endsWith(n);_t2.includes("-")||_r?s.setProperty(_t2,_r?_e.slice(0,-11):_e,_r?i:""):s[_t2]=_e}}return lit_html.Jb}})},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/opacitycheckerboard/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/opacitycheckerboard/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/thumbnail/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/thumbnail/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/treeview/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/treeview/index.css"}}]);
//# sourceMappingURL=treeview-stories-treeview-stories.0579179b.iframe.bundle.js.map