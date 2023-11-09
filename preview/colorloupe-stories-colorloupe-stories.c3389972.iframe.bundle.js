/*! For license information please see colorloupe-stories-colorloupe-stories.c3389972.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_spectrum_css_preview=globalThis.webpackChunk_spectrum_css_preview||[]).push([[6647],{"../components/colorloupe/stories/colorloupe.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>colorloupe_stories});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),colorloupe=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/colorloupe/index.css"),colorloupe_default=__webpack_require__.n(colorloupe),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(colorloupe_default(),options);const colorloupe_stories={title:"Components/Color loupe",description:"The Color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.",component:"Colorloupe",argTypes:{isOpen:{description:"Apply `is-open` to display the component",defaultValue:!0,name:"Open",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"}},args:{rootClass:"spectrum-ColorLoupe",isOpen:!0},parameters:{chromatic:{diffThreshold:.2},actions:{handles:[]},status:{type:["accordion","actionbar","actionbutton","actiongroup","actionmenu","alertbanner","alertdialog","assetcard","assetlist","avatar","badge","breadcrumb","button","buttongroup","calendar","card","checkbox","clearbutton","closebutton","colorarea","colorhandle","colorloupe","colorslider","colorwheel","combobox","contextualhelp","datepicker","dial","divider","dropindicator","dropzone","fieldgroup","fieldlabel","floatingactionbutton","helptext","illustratedmessage","infieldbutton","inlinealert","link","logicbutton","menu","miller","modal","opacitycheckerboard","page","pagination","picker","pickerbutton","popover","progressbar","progresscircle","radio","rating","search","sidenav","slider","splitview","steplist","stepper","swatch","swatchgroup","switch","table","tabs","tag","taggroup","textfield","thumbnail","toast","tooltip","tray","treeview","typography","underlay","well"].includes("colorloupe")?"migrated":void 0}}},Default=(({rootClass="spectrum-ColorLoupe",isOpen,customStyles={"--spectrum-picked-color":"rgba(255, 0, 0, 0.5)","inset-block-start":"5px","inset-inline-start":"5px"},customClasses=[]})=>lit.YP`
    <svg
      class=${(0,class_map.$)({[rootClass]:!0,"is-open":isOpen,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
      style=${(0,if_defined.o)((0,style_map.V)(customStyles))}
    >
      <defs>
        <path
          id="loupe-path"
          d="M 22 60 C 18.2 56 14.6 51.7 11.3 47.2 C 8.3 43.3 5.7 39.1 3.5 34.7 C 1.2 30 0 25.9 0 22.4 C 0 17.2 1.8 12.2 5 8.2 C 8.2 4.2 12.7 1.5 17.6 0.4 C 22.6 -0.6 27.8 0.2 32.3 2.6 C 36.8 5 40.3 8.9 42.3 13.7 C 43.4 16.4 44 19.4 44 22.4 C 44 25.9 42.8 30 40.5 34.7 C 38.3 39.1 35.7 43.3 32.7 47.3 C 29.4 51.7 25.8 56 22 60 Z"
          transform="translate(2, 2)" />
        <mask id="loupe-mask">
          <rect x="0" y="0" height="100" width="100" fill="white"/>
          <use xlink:href="#loupe-path" fill="black" />
        </mask>
        <pattern id="checkerboard-primary" patternUnits="userSpaceOnUse" width="16" height="16" class="spectrum-ColorLoupe-checkerboard-pattern">
          <rect x="0" y="0" width="8" height="8"/>
          <rect x="8" y="8" width="8" height="8"/>
        </pattern>
        <pattern id="checkerboard-secondary" patternUnits="userSpaceOnUse" width="20" height="20" class="spectrum-ColorLoupe-checkerboard-pattern">
          <rect x="0" y="0" width="10" height="10"/>
          <rect x="10" y="10" width="10" height="10"/>
        </pattern>
      </defs>
      <g>
        <use xlink:href="#loupe-path" class="spectrum-ColorLoupe-checkerboard-background" />
        <use xlink:href="#loupe-path" class="spectrum-ColorLoupe-checkerboard-fill" />
        <use xlink:href="#loupe-path" class="spectrum-ColorLoupe-inner-border" />
        <use xlink:href="#loupe-path" mask="url(#loupe-mask)" class="spectrum-ColorLoupe-outer-border" />
      </g>
    </svg>
  `).bind({});Default.args={};const __namedExportsOrder=["Default"]},"../node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XM:()=>e,Xe:()=>i,pX:()=>t});var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>function(){for(var _len=arguments.length,e=new Array(_len),_key=0;_key<_len;_key++)e[_key]=arguments[_key];return{_$litDirective$:t,values:e}};class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"../node_modules/lit/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>o});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),directive=__webpack_require__("../node_modules/lit-html/directive.js"),o=(0,directive.XM)(class extends directive.Xe{constructor(t){var i;if(super(t),t.type!==directive.pX.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,_ref){var r,o,[s]=_ref;if(void 0===this.it){for(var _t in this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t)))),s)s[_t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(_t))&&this.it.add(_t);return this.render(s)}var e=i.element.classList;for(var _t2 in this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t))})),s){var _i=!!s[_t2];_i===this.it.has(_t2)||(null===(o=this.nt)||void 0===o?void 0:o.has(_t2))||(_i?(e.add(_t2),this.it.add(_t2)):(e.remove(_t2),this.it.delete(_t2)))}return lit_html.Jb}})},"../node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>l});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),l=l=>null!=l?l:lit_html.Ld},"../node_modules/lit/directives/style-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>o});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),directive=__webpack_require__("../node_modules/lit-html/directive.js"),i="important",n=" !"+i,o=(0,directive.XM)(class extends directive.Xe{constructor(t){var e;if(super(t),t.type!==directive.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{var s=t[r];return null==s?e:e+"".concat(r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),":").concat(s,";")}),"")}update(e,_ref){var[r]=_ref,{style:s}=e.element;if(void 0===this.ht){for(var _t in this.ht=new Set,r)this.ht.add(_t);return this.render(r)}for(var _t2 in this.ht.forEach((t=>{null==r[t]&&(this.ht.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")})),r){var _e=r[_t2];if(null!=_e){this.ht.add(_t2);var _r="string"==typeof _e&&_e.endsWith(n);_t2.includes("-")||_r?s.setProperty(_t2,_r?_e.slice(0,-11):_e,_r?i:""):s[_t2]=_e}}return lit_html.Jb}})},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!../components/colorloupe/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/colorloupe/index.css"}}]);
//# sourceMappingURL=colorloupe-stories-colorloupe-stories.c3389972.iframe.bundle.js.map