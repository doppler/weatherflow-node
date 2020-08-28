/*! For license information please see module.js.LICENSE.txt */
define(["react","emotion","@grafana/ui","@grafana/data"],(function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t);var r=n(3);function a(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l}function o(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var l,i,s,c,f,m,u,h,d,p,y,x,g,b,E=n(0),w=n.n(E),k=n(1),v=n(2),O=function(e){return e>=25?-82.5:230-12.5*Number(e)},j=Object(v.stylesFactory)((function(e){return{wrapper:Object(k.css)(s||(s=o(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(k.css)(c||(c=o(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),hashmark:Object(k.css)(f||(f=o(["\n      fill: grey;\n    "],["\n      fill: grey;\n    "]))),face:Object(k.css)(m||(m=o(["\n      fill: none;\n      stroke: ",";\n      stroke-width: 32px;\n    "],["\n      fill: none;\n      stroke: ",";\n      stroke-width: 32px;\n    "])),e.palette.yellow),centerCircle:Object(k.css)(u||(u=o(["\n      fill: ",";\n      fill-opacity: 0.5;\n    "],["\n      fill: ",";\n      fill-opacity: 0.5;\n    "])),e.colors.bg1),velocityText:Object(k.css)(h||(h=o(["\n      stroke-width: 3;\n      font-size: 9rem;\n      font-weight: bold;\n      text-anchor: middle;\n      dominant-baseline: middle;\n    "],["\n      stroke-width: 3;\n      font-size: 9rem;\n      font-weight: bold;\n      text-anchor: middle;\n      dominant-baseline: middle;\n    "]))),velocityLegend:Object(k.css)(d||(d=o(["\n      fill: ",";\n      font-size: 1.5em;\n      font-weight: bold;\n      text-anchor: middle;\n    "],["\n      fill: ",";\n      font-size: 1.5em;\n      font-weight: bold;\n      text-anchor: middle;\n    "])),e.palette.orange),text:Object(k.css)(p||(p=o(["\n      fill: grey;\n      font-weight: bold;\n      font-family: 'Courier New', Courier, monospace;\n      font-size: 3rem;\n    "],["\n      fill: grey;\n      font-weight: bold;\n      font-family: 'Courier New', Courier, monospace;\n      font-size: 3rem;\n    "]))),line:Object(k.css)(y||(y=o(["\n      stroke: grey;\n      stroke-width: 1px;\n    "],["\n      stroke: grey;\n      stroke-width: 1px;\n    "]))),ring:Object(k.css)(x||(x=o(["\n      fill: transparent;\n      stroke: ",";\n      stroke-width: 1;\n    "],["\n      fill: transparent;\n      stroke: ",";\n      stroke-width: 1;\n    "])),e.palette.yellow),speedLegend:Object(k.css)(g||(g=o(["\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      display: flex;\n    "],["\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      display: flex;\n    "]))),directionIndicator:Object(k.css)(b||(b=o(["\n      fill: transparent;\n      stroke: ",";\n      stroke-width: 3px;\n      transform-origin: 256px 256px;\n      transform: rotate(0deg);\n    "],["\n      fill: transparent;\n      stroke: ",";\n      stroke-width: 3px;\n      transform-origin: 256px 256px;\n      transform: rotate(0deg);\n    "])),e.palette.orange)}}));n.d(t,"plugin",(function(){return N}));var N=new r.PanelPlugin((function(e){e.options;var t,n,r=e.data,s=e.width,c=e.height,f=Object(v.useTheme)(),m=j(f),u=[],h=[],d=0,p=0,y=5,x=[];try{u=null===(t=r.series.map((function(e){return e.fields.find((function(e){return"dir"===e.name}))}))[0])||void 0===t?void 0:t.values.toArray(),p=(h=null===(n=r.series.map((function(e){return e.fields.find((function(e){return"mps"===e.name}))}))[0])||void 0===n?void 0:n.values.toArray().map((function(e){return Number((2.237*e).toFixed(1))})))&&h[0]||0,d=u&&u[0]||0,y=h&&Math.max.apply(Math,function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e}(h))||5,x=Array.from({length:Math.ceil(y)}).map((function(e,t){return t%5==0?t:-1})).filter((function(e){return-1!==e})).slice(1)}catch(e){console.log(e)}return w.a.createElement("div",{className:Object(k.cx)(m.wrapper,Object(k.css)(l||(l=o(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),s,c))},w.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",height:c,width:s},w.a.createElement("defs",null,w.a.createElement("path",{id:"hashmark",d:"M 250 3 L 256 29 L 262 3 Z",className:m.hashmark}),w.a.createElement("line",{id:"line",x1:"256",y1:"32",x2:"256",y2:"480",className:m.line})),w.a.createElement("g",{className:m.text},w.a.createElement("text",{x:"243",y:"30"},"N"),w.a.createElement("text",{x:"483",y:"269"},"E"),w.a.createElement("text",{x:"243",y:"509"},"S"),w.a.createElement("text",{x:"4",y:"269"},"W")),w.a.createElement("g",null,w.a.createElement("use",{href:"#hashmark",transform:"rotate(22.5, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(45, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(67.5, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(112.5, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(135, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(157.5, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(202.5, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(225, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(247.5, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(292.5, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(315, 256, 256)"}),w.a.createElement("use",{href:"#hashmark",transform:"rotate(337.5, 256, 256)"})),w.a.createElement("use",{href:"#line",transform:"rotate(22.5, 256, 256)"}),w.a.createElement("use",{href:"#line",transform:"rotate(67.5, 256, 256)"}),w.a.createElement("use",{href:"#line",transform:"rotate(112.5, 256, 256)"}),w.a.createElement("use",{href:"#line",transform:"rotate(157.5, 256, 256)"}),w.a.createElement("circle",{cx:256,cy:256,r:220,style:{fill:"transparent",stroke:"grey",strokeWidth:1}}),!u&&w.a.createElement("text",{id:"no-data",x:"256",y:"256",textAnchor:"middle",dominantBaseline:"middle",fontSize:"3em",fill:"white"},"No Data"),w.a.createElement("g",null,x.map((function(e){return w.a.createElement("circle",{cx:256,cy:256,r:220/y*e,style:{fill:"transparent",stroke:"hsl("+O(e)+", 100%, 50%)",strokeWidth:1}})}))),w.a.createElement("g",null,u&&h&&u.map((function(e,t){return w.a.createElement("circle",{cx:256+220/y*h[t]*Math.cos((e-90)*(Math.PI/180))||256,cy:256+220/y*h[t]*Math.sin((e-90)*(Math.PI/180))||256,r:3,style:{fill:"hsla(\n                    "+O(h[t])+",\n                    "+(100-100/u.length*t)+"%,\n                    50%,\n                    "+(1-1/u.length*t)+")"}})}))),p>0&&w.a.createElement("g",null,w.a.createElement("path",{className:m.directionIndicator,id:"directionIndicator",d:"M 258 35 L 260 256 L 314 314 L 256 480 L 197 314 L 252 256 L 254 35 Z",style:{transform:"rotate("+d+"deg)"}}),w.a.createElement("circle",{className:Object(k.cx)(m.centerCircle,Object(k.css)(i||(i=o(["\n                  opacity: 0.85;\n                "],["\n                  opacity: 0.85;\n                "])))),id:"centerCircle",cx:"256",cy:"256",r:"82.9"}),w.a.createElement("text",{className:m.velocityText,style:{stroke:"hsl("+O(p)+", 100%, 50%)",fill:"hsla("+O(p)+", 100%, 50%, 0.25)"},id:"velocityText",x:"256",y:"266"},Math.round(p)),w.a.createElement("text",{className:m.velocityLegend,x:"256",y:"325"},d,"°"))),w.a.createElement("div",{className:m.speedLegend},[0,5,10,15,20,25].map((function(e){return w.a.createElement("span",{style:{color:"hsl("+O(e)+", 100%, 50%)",flexGrow:1,textAlign:"center"}},e)})),w.a.createElement("p",null,y)))})).setPanelOptions((function(e){return e}))}])}));
//# sourceMappingURL=module.js.map