!function(e){function t(t){for(var s,a,n=t[0],u=t[1],c=t[2],d=0,p=[];d<n.length;d++)a=n[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,n=1;n<r.length;n++){var u=r[n];0!==o[u]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var s={},o={main:0},i=[];function a(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=s,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://logroid.github.io/blogger/tools/lastorigin_unit_production_checker/";var n=window.webpackJsonpLastoriginUnitProductionChecker=window.webpackJsonpLastoriginUnitProductionChecker||[],u=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var l=u;i.push([0,"chunk-vendors"]),r()}({0:function(e,t,r){e.exports=r("cd49")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"8bbf":function(e,t){e.exports=Vue},"9c0c":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var s=r("8bbf"),o=r.n(s),i=r("9ab4"),a=r("60a3"),n=function(){function e(){}return e.STRING_MAP={ss:"SS",s:"S",a:"A",light:"軽装",heavy:"重装",flying:"機動",attacker:"攻撃",defender:"保護",suppoter:"支援"},e.RARITY=["SS","S","A","B"],e}(),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.loading=!0,t.parts=90,t.nutrients=90,t.power=90,t.advancedModule=10,t.production="normal",t}return Object(i.b)(t,e),Object.defineProperty(t.prototype,"resourceParts",{get:function(){return this.resourceValue(this.parts)},set:function(e){this.parts=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"resourceNutrients",{get:function(){return this.resourceValue(this.nutrients)},set:function(e){this.nutrients=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"resourcePower",{get:function(){return this.resourceValue(this.power)},set:function(e){this.power=e},enumerable:!0,configurable:!0}),t.prototype.resourceValue=function(e){var t=e%this.resourceStep;return 0!=t&&(e-=t),e>=this.resourceMin&&e<=this.resourceMax?e:e>this.resourceMax?this.resourceMax:e<this.resourceMin?this.resourceMin:e},Object.defineProperty(t.prototype,"resourceMin",{get:function(){return this.isSpecial?900:90},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"resourceStep",{get:function(){return this.isSpecial?100:10},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"resourceMax",{get:function(){return this.isSpecial?9900:990},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSpecial",{get:function(){return"special"==this.production},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"total",{get:function(){return this.resourceParts+this.resourceNutrients+this.resourcePower},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rateData",{get:function(){var e=this,t=[];return this.isSpecial?n.RARITY.forEach((function(r){"B"!=r&&t.push({rank:r,rate:e.getSpecialRate(r),memo:e.getSpecialMemo()})})):n.RARITY.forEach((function(r){t.push({rank:r,rate:e.getNormalRate(r),memo:e.getNormalMemo()})})),t},enumerable:!0,configurable:!0}),t.prototype.rowClass=function(e){return 0==e.rate?"none":""},t.prototype.getSpecialRate=function(e){return"A"==e?20==this.advancedModule?55:50==this.advancedModule?35:100==this.advancedModule?0:65:"S"==e?20==this.advancedModule?35:50==this.advancedModule?50:100==this.advancedModule?80:30:"SS"==e?20==this.advancedModule?10:50==this.advancedModule?15:100==this.advancedModule?20:5:0},t.prototype.getNormalRate=function(e){return"B"==e?this.total<=300?95:this.total<=600?70:this.total<=999?60:this.total<=1999?50:40:"A"==e?this.total<=300?5:this.total<=600?28:this.total<=999?35:this.total<=1999?40:45:"S"==e?this.total<=300?0:this.total<=600?2:this.total<=999?5:this.total<=1999?8:12:"SS"==e?this.total<1e3?0:this.total>=1e3&&this.total<=1999?2:3:0},t.prototype.getNormalMemo=function(){var e=[];return this.resourceParts+this.resourcePower>=1400?e.push("支援排除"):e.push("支援排出条件OK"),this.resourceParts<400?e.push("保護排除"):e.push("保護排出条件OK"),this.resourceParts<this.resourceNutrients&&this.resourcePower<this.resourceNutrients?this.resourceParts+this.resourcePower<1400?e.push("軽装支援優遇"):this.resourceParts>=400&&this.resourcePower<this.resourceParts?e.push("軽装保護優遇"):this.resourcePower>this.resourceParts?e.push("軽装攻撃優遇"):e.push("軽装優遇"):this.resourceParts<this.resourcePower&&this.resourceNutrients<this.resourcePower&&(this.resourceParts+this.resourcePower<1400?e.push("機動支援優遇"):this.resourceParts>=400&&this.resourcePower<this.resourceParts?e.push("機動保護優遇"):this.resourcePower>this.resourceParts?e.push("機動攻撃優遇"):e.push("機動優遇")),e},t.prototype.getSpecialMemo=function(){var e=[];return this.resourceParts+this.resourcePower>=14e3?e.push("支援排除"):e.push("支援排出条件OK"),this.resourceParts<4e3?e.push("保護排除"):e.push("保護排出条件OK"),this.resourceParts<this.resourceNutrients&&this.resourcePower<this.resourceNutrients?this.resourceParts+this.resourcePower<14e3?e.push("軽装支援優遇"):this.resourceParts>=4e3&&this.resourcePower<this.resourceParts?e.push("軽装保護優遇"):this.resourcePower>this.resourceParts?e.push("軽装攻撃優遇"):e.push("軽装優遇"):this.resourceParts<this.resourcePower&&this.resourceNutrients<this.resourcePower?this.resourceParts+this.resourcePower<14e3?e.push("機動支援優遇"):this.resourceParts>=4e3&&this.resourcePower<this.resourceParts?e.push("機動保護優遇"):this.resourcePower>this.resourceParts?e.push("機動攻撃優遇"):e.push("機動優遇"):this.resourceParts+this.resourcePower<14e3?e.push("重装支援優遇"):this.resourceParts>=4e3&&this.resourcePower<this.resourceParts?e.push("重装保護優遇"):this.resourcePower>this.resourceParts&&e.push("重装攻撃優遇"),e},t.prototype.created=function(){this.clear()},t.prototype.mounted=function(){this.loading=!1},t.prototype.clear=function(){this.production="normal",this.resourceParts=90,this.resourceNutrients=90,this.resourcePower=90,this.advancedModule=10},t=Object(i.a)([a.a],t)}(a.b),c=(r("5c0b"),r("2877")),l=Object(c.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"lastorigin_unit_production_checker"}},[r("b-loading",{attrs:{active:e.loading},on:{"update:active":function(t){e.loading=t}}}),r("div",{staticClass:"subtitle is-4"},[e._v("製造")]),r("section",[r("div",{staticClass:"columns is-vcentered is-mobile"},[r("div",{staticClass:"column is-narrow"},[r("b-radio",{attrs:{name:"production","native-value":"normal"},on:{input:e.updateProduction},model:{value:e.production,callback:function(t){e.production=t},expression:"production"}},[e._v("一般")])],1),r("div",{staticClass:"column is-narrow"},[r("b-radio",{attrs:{name:"production","native-value":"special"},on:{input:e.updateProduction},model:{value:e.production,callback:function(t){e.production=t},expression:"production"}},[e._v("特殊")])],1)])]),r("div",{staticClass:"subtitle is-4"},[e._v("投入資源")]),r("section",[r("div",{staticClass:"columns is-vcentered"},[r("div",{staticClass:"column is-narrow"},[r("b-field",{staticClass:"resource parts",attrs:{label:"部品"}},[r("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:e.resourceMin,step:e.resourceStep,max:e.resourceMax},model:{value:e.resourceParts,callback:function(t){e.resourceParts=t},expression:"resourceParts"}})],1)],1),r("div",{staticClass:"column is-narrow"},[r("b-field",{staticClass:"resource nutrients",attrs:{label:"栄養"}},[r("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:e.resourceMin,step:e.resourceStep,max:e.resourceMax},model:{value:e.resourceNutrients,callback:function(t){e.resourceNutrients=t},expression:"resourceNutrients"}})],1)],1),r("div",{staticClass:"column is-narrow"},[r("b-field",{staticClass:"resource power",attrs:{label:"電力"}},[r("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:e.resourceMin,step:e.resourceStep,max:e.resourceMax},model:{value:e.resourcePower,callback:function(t){e.resourcePower=t},expression:"resourcePower"}})],1)],1),e.isSpecial?r("div",{staticClass:"column is-narrow"},[r("b-field",{staticClass:"resource advanced-module",attrs:{label:"高級モジュール"}},[r("b-radio",{attrs:{name:"advanced-module","native-value":"10"},model:{value:e.advancedModule,callback:function(t){e.advancedModule=t},expression:"advancedModule"}},[e._v("10")]),r("b-radio",{attrs:{name:"advanced-module","native-value":"20"},model:{value:e.advancedModule,callback:function(t){e.advancedModule=t},expression:"advancedModule"}},[e._v("20")]),r("b-radio",{attrs:{name:"advanced-module","native-value":"50"},model:{value:e.advancedModule,callback:function(t){e.advancedModule=t},expression:"advancedModule"}},[e._v("50")]),r("b-radio",{attrs:{name:"advanced-module","native-value":"100"},model:{value:e.advancedModule,callback:function(t){e.advancedModule=t},expression:"advancedModule"}},[e._v("100")])],1)],1):e._e()])]),r("div",{staticClass:"subtitle is-4"},[e._v("合計資源")]),r("section",[r("div",{staticClass:"columns is-vcentered"},[r("div",{staticClass:"column is-narrow"},[r("span",{staticClass:"total-resource"},[e._v(e._s(e.total.toLocaleString()))])])])]),r("div",{staticClass:"subtitle is-4"},[e._v("確率")]),r("section",[r("b-table",{attrs:{data:e.rateData,"row-class":e.rowClass}},[r("b-table-column",{attrs:{label:"レアリティ"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"rarity",class:t.row.rank},[e._v(e._s(t.row.rank))])]}}])}),r("b-table-column",{attrs:{label:"確率"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.rate)+"%")]}}])}),r("b-table-column",{attrs:{label:"備考"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rate>0?r("ul",{staticClass:"memo"},e._l(t.row.memo,(function(t,s){return r("li",{key:t},[e._v(e._s(t))])})),0):e._e()]}}])})],1)],1),r("section",[r("div",{staticClass:"columns is-centered"},[r("div",{staticClass:"column is-half"},[r("b-button",{attrs:{type:"is-danger",expanded:"true"},on:{click:function(t){return t.preventDefault(),e.clear(t)}}},[e._v("クリア")])],1)])])],1)}),[],!1,null,null,null).exports;o.a.config.productionTip=!1,new o.a({render:function(e){return e(l)}}).$mount("#lastorigin_unit_production_checker")}});