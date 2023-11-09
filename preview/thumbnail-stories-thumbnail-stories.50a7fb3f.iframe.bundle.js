/*! For license information please see thumbnail-stories-thumbnail-stories.50a7fb3f.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_spectrum_css_preview=globalThis.webpackChunk_spectrum_css_preview||[]).push([[1745,1738],{"../components/opacitycheckerboard/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),opacitycheckerboard=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/opacitycheckerboard/index.css"),opacitycheckerboard_default=__webpack_require__.n(opacitycheckerboard),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(opacitycheckerboard_default(),options);const Template=({rootClass="spectrum-OpacityCheckerboard",backgroundPosition="top left",customClasses=[],customStyles={},id,content=[],role})=>lit.dy`
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
	`}},"../components/thumbnail/stories/thumbnail.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Layer:()=>Layer,WithBackground:()=>WithBackground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _template__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../components/thumbnail/stories/template.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Thumbnail",description:"A thumbnail is used to display a preview of an image, layer, or effect.",component:"Thumbnail",argTypes:{reduceMotion:{table:{disable:!0}},size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["50","75","100","200","300","400","500","600","700","800","900","1000"],control:"select"},imageURL:{name:"Image URL",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"file",accept:".svg,.png,.jpg,.jpeg,.webc"}},svg:{table:{disable:!0}},altText:{name:"Descriptive text for the image",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:"text"},backgroundColor:{name:"Background color",description:"Optional value for `background-color` style property.",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:"color"},isCover:{name:"Cover",description:"Images will maintain their aspect ratio while filling the entire content box.",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isLayer:{name:"Layer",description:"When used in layer management (such as the Compact or Detail Layers panels).",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isSelected:{name:"Selected",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean",if:{arg:"isLayer"}},isFocused:{name:"Focused",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"}},args:{rootClass:"spectrum-Thumbnail",size:"1000",isCover:!1,isLayer:!1,isDisabled:!1,isSelected:!1,isFocused:!1,imageURL:"example-card-landscape.png",altText:"Landscape with mountains and lake"},parameters:{actions:{handles:[]},status:{type:["accordion","actionbar","actionbutton","actiongroup","actionmenu","alertbanner","alertdialog","assetcard","assetlist","avatar","badge","breadcrumb","button","buttongroup","calendar","card","checkbox","clearbutton","closebutton","colorarea","colorhandle","colorloupe","colorslider","colorwheel","combobox","contextualhelp","datepicker","dial","divider","dropindicator","dropzone","fieldgroup","fieldlabel","floatingactionbutton","helptext","illustratedmessage","infieldbutton","inlinealert","link","logicbutton","menu","miller","modal","opacitycheckerboard","page","pagination","picker","pickerbutton","popover","progressbar","progresscircle","radio","rating","search","sidenav","slider","splitview","steplist","stepper","swatch","swatchgroup","switch","table","tabs","tag","taggroup","textfield","thumbnail","toast","tooltip","tray","treeview","typography","underlay","well"].includes("thumbnail")?"migrated":void 0}}},Default=_template__WEBPACK_IMPORTED_MODULE_0__.Y.bind({});Default.args={};const Layer=_template__WEBPACK_IMPORTED_MODULE_0__.Y.bind({});Layer.args={isLayer:!0,isSelected:!1};const WithBackground=_template__WEBPACK_IMPORTED_MODULE_0__.Y.bind({});WithBackground.args={backgroundColor:"orange"};const __namedExportsOrder=["Default","Layer","WithBackground"]},"../node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XM:()=>e,Xe:()=>i,pX:()=>t});var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>function(){for(var _len=arguments.length,e=new Array(_len),_key=0;_key<_len;_key++)e[_key]=arguments[_key];return{_$litDirective$:t,values:e}};class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"../node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,o,r){return n?o():null==r?void 0:r()}__webpack_require__.d(__webpack_exports__,{g:()=>n})},"../node_modules/lit/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>o});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),directive=__webpack_require__("../node_modules/lit-html/directive.js"),o=(0,directive.XM)(class extends directive.Xe{constructor(t){var i;if(super(t),t.type!==directive.pX.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,_ref){var r,o,[s]=_ref;if(void 0===this.it){for(var _t in this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t)))),s)s[_t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(_t))&&this.it.add(_t);return this.render(s)}var e=i.element.classList;for(var _t2 in this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t))})),s){var _i=!!s[_t2];_i===this.it.has(_t2)||(null===(o=this.nt)||void 0===o?void 0:o.has(_t2))||(_i?(e.add(_t2),this.it.add(_t2)):(e.remove(_t2),this.it.delete(_t2)))}return lit_html.Jb}})},"../node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>l});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),l=l=>null!=l?l:lit_html.Ld},"../node_modules/lit/directives/style-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>o});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),directive=__webpack_require__("../node_modules/lit-html/directive.js"),i="important",n=" !"+i,o=(0,directive.XM)(class extends directive.Xe{constructor(t){var e;if(super(t),t.type!==directive.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{var s=t[r];return null==s?e:e+"".concat(r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),":").concat(s,";")}),"")}update(e,_ref){var[r]=_ref,{style:s}=e.element;if(void 0===this.ht){for(var _t in this.ht=new Set,r)this.ht.add(_t);return this.render(r)}for(var _t2 in this.ht.forEach((t=>{null==r[t]&&(this.ht.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")})),r){var _e=r[_t2];if(null!=_e){this.ht.add(_t2);var _r="string"==typeof _e&&_e.endsWith(n);_t2.includes("-")||_r?s.setProperty(_t2,_r?_e.slice(0,-11):_e,_r?i:""):s[_t2]=_e}}return lit_html.Jb}})},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/opacitycheckerboard/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/opacitycheckerboard/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/thumbnail/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/thumbnail/index.css"}}]);
//# sourceMappingURL=thumbnail-stories-thumbnail-stories.50a7fb3f.iframe.bundle.js.map