/*! For license information please see component---src-pages-index-js-e0d40884de1d98d468b3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"82gj":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var r=function(){},a=function(){}},"9uj6":function(e,t,n){"use strict";n.r(t);var r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return r.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.default=a},Ibe6:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return M})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return E})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return v})),n.d(t,"n",(function(){return g}));var r=n("mrSG"),a=function(e,t){return function(n){return Math.max(Math.min(n,t),e)}},o=function(e){return e%1?Number(e.toFixed(5)):e},i=/(-)?(\d[\d\.]*)/g,u=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,c=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,s={test:function(e){return"number"==typeof e},parse:parseFloat,transform:function(e){return e}},l=Object(r.__assign)(Object(r.__assign)({},s),{transform:a(0,1)}),f=Object(r.__assign)(Object(r.__assign)({},s),{default:1}),d=function(e){return{test:function(t){return"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length},parse:parseFloat,transform:function(t){return""+t+e}}},p=d("deg"),m=d("%"),h=d("px"),v=d("vh"),g=d("vw"),y=Object(r.__assign)(Object(r.__assign)({},m),{parse:function(e){return m.parse(e)/100},transform:function(e){return m.transform(100*e)}}),b=a(0,255),w=function(e){return void 0!==e.red},_=function(e){return void 0!==e.hue};var x=function(e){return function(t){if("string"!=typeof t)return t;for(var n={},r=function(e){return e.substring(e.indexOf("(")+1,e.lastIndexOf(")"))}(t).replace(/(,|\/)/g," ").split(/ \s*/),a=0;a<4;a++)n[e[a]]=void 0!==r[a]?parseFloat(r[a]):1;return n}},j=Object(r.__assign)(Object(r.__assign)({},s),{transform:function(e){return Math.round(b(e))}});function O(e,t){return e.startsWith(t)&&c.test(e)}var E={test:function(e){return"string"==typeof e?O(e,"rgb"):w(e)},parse:x(["red","green","blue","alpha"]),transform:function(e){var t=e.red,n=e.green,r=e.blue,a=e.alpha,i=void 0===a?1:a;return function(e){var t=e.red,n=e.green,r=e.blue,a=e.alpha;return"rgba("+t+", "+n+", "+r+", "+(void 0===a?1:a)+")"}({red:j.transform(t),green:j.transform(n),blue:j.transform(r),alpha:o(l.transform(i))})}},S={test:function(e){return"string"==typeof e?O(e,"hsl"):_(e)},parse:x(["hue","saturation","lightness","alpha"]),transform:function(e){var t=e.hue,n=e.saturation,r=e.lightness,a=e.alpha,i=void 0===a?1:a;return function(e){var t=e.hue,n=e.saturation,r=e.lightness,a=e.alpha;return"hsla("+t+", "+n+", "+r+", "+(void 0===a?1:a)+")"}({hue:Math.round(t),saturation:m.transform(o(n)),lightness:m.transform(o(r)),alpha:o(l.transform(i))})}},M=Object(r.__assign)(Object(r.__assign)({},E),{test:function(e){return"string"==typeof e&&O(e,"#")},parse:function(e){var t="",n="",r="";return e.length>4?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),t+=t,n+=n,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:1}}}),k={test:function(e){return"string"==typeof e&&c.test(e)||w(e)||_(e)},parse:function(e){return E.test(e)?E.parse(e):S.test(e)?S.parse(e):M.test(e)?M.parse(e):e},transform:function(e){return w(e)?E.transform(e):_(e)?S.transform(e):e}},P=function(e){return"number"==typeof e?0:e},T={test:function(e){if("string"!=typeof e||!isNaN(e))return!1;var t=0,n=e.match(i),r=e.match(u);return n&&(t+=n.length),r&&(t+=r.length),t>0},parse:function(e){var t=e,n=[],r=t.match(u);r&&(t=t.replace(u,"${c}"),n.push.apply(n,r.map(k.parse)));var a=t.match(i);return a&&n.push.apply(n,a.map(s.parse)),n},createTransformer:function(e){var t=e,n=0,r=e.match(u),a=r?r.length:0;if(r)for(var c=0;c<a;c++)t=t.replace(r[c],"${c}"),n++;var s=t.match(i),l=s?s.length:0;if(s)for(c=0;c<l;c++)t=t.replace(s[c],"${n}"),n++;return function(e){for(var r=t,i=0;i<n;i++)r=r.replace(i<a?"${c}":"${n}",i<a?k.transform(e[i]):o(e[i]));return r}},getAnimatableNone:function(e){var t=T.parse(e);return T.createTransformer(e)(t.map(P))}}},Neuu:function(e,t,n){"use strict";n.d(t,"a",(function(){return ne})),n.d(t,"b",(function(){return X})),n.d(t,"c",(function(){return G})),n.d(t,"d",(function(){return W})),n.d(t,"e",(function(){return V})),n.d(t,"f",(function(){return Y})),n.d(t,"g",(function(){return J})),n.d(t,"h",(function(){return $})),n.d(t,"i",(function(){return L})),n.d(t,"j",(function(){return B})),n.d(t,"k",(function(){return z})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return ge})),n.d(t,"n",(function(){return le})),n.d(t,"o",(function(){return F})),n.d(t,"p",(function(){return q})),n.d(t,"q",(function(){return U})),n.d(t,"r",(function(){return ae})),n.d(t,"s",(function(){return R})),n.d(t,"t",(function(){return H})),n.d(t,"u",(function(){return v})),n.d(t,"v",(function(){return O})),n.d(t,"w",(function(){return h})),n.d(t,"x",(function(){return re})),n.d(t,"y",(function(){return fe}));var r=n("mrSG"),a=n("82gj"),o=n("Ibe6"),i=n("eUsl"),u=function(e,t,n){return Math.min(Math.max(n,e),t)};function c(e){var t,n,r=e.duration,o=void 0===r?800:r,i=e.bounce,c=void 0===i?.25:i,l=e.velocity,f=void 0===l?0:l,d=e.mass,p=void 0===d?1:d;Object(a.b)(o<=1e4,"Spring duration must be 10 seconds or less");var m=1-c;m=u(.05,1,m),o=u(.01,10,o/1e3),m<1?(t=function(e){var t=e*m,n=t*o;return.001-(t-f)/s(e,m)*Math.exp(-n)},n=function(e){var n=e*m*o,r=n*f+f,a=Math.pow(m,2)*Math.pow(e,2)*o,i=Math.exp(-n),u=s(Math.pow(e,2),m);return(.001-t(e)>0?-1:1)*((r-a)*i)/u}):(t=function(e){return Math.exp(-e*o)*((e-f)*o+1)-.001},n=function(e){return Math.exp(-e*o)*(o*o*(f-e))});var h=function(e,t,n){for(var r=n,a=1;a<12;a++)r-=e(r)/t(r);return r}(t,n,5/o);if(isNaN(h))return{stiffness:100,damping:10};var v=Math.pow(h,2)*p;return{stiffness:v,damping:2*m*Math.sqrt(p*v)}}function s(e,t){return e*Math.sqrt(1-t*t)}var l=["duration","bounce"],f=["stiffness","damping","mass"];function d(e,t){return t.some((function(t){return void 0!==e[t]}))}function p(e){var t=e.from,n=void 0===t?0:t,a=e.to,o=void 0===a?1:a,i=e.restSpeed,u=void 0===i?2:i,p=e.restDelta,h=Object(r.__rest)(e,["from","to","restSpeed","restDelta"]),v={done:!1,value:n},g=function(e){var t=Object(r.__assign)({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!d(e,f)&&d(e,l)){var n=c(e);(t=Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({},t),n),{velocity:0,mass:1})).isResolvedFromDuration=!0}return t}(h),y=g.stiffness,b=g.damping,w=g.mass,_=g.velocity,x=g.isResolvedFromDuration,j=m,O=m;function E(){var e=_?-_/1e3:0,t=o-n,r=b/(2*Math.sqrt(y*w)),a=Math.sqrt(y/w)/1e3;if(null!=p||(p=Math.abs(o-n)<=1?.01:.4),r<1){var i=s(a,r);j=function(n){var u=Math.exp(-r*a*n);return o-u*((e+r*a*t)/i*Math.sin(i*n)+t*Math.cos(i*n))},O=function(n){var o=Math.exp(-r*a*n);return r*a*o*(Math.sin(i*n)*(e+r*a*t)/i+t*Math.cos(i*n))-o*(Math.cos(i*n)*(e+r*a*t)-i*t*Math.sin(i*n))}}else if(1===r)j=function(n){return o-Math.exp(-a*n)*(t+(e+a*t)*n)};else{var u=a*Math.sqrt(r*r-1);j=function(n){var i=Math.exp(-r*a*n),c=Math.min(u*n,300);return o-i*((e+r*a*t)*Math.sinh(c)+u*t*Math.cosh(c))/u}}}return E(),{next:function(e){var t=j(e);if(x)v.done=e>=h.duration;else{var n=1e3*O(e),r=Math.abs(n)<=u,a=Math.abs(o-t)<=p;v.done=r&&a}return v.value=v.done?o:t,v},flipTarget:function(){var e;_=-_,n=(e=[o,n])[0],o=e[1],E()}}}p.needsInterpolation=function(e,t){return"string"==typeof e||"string"==typeof t};var m=function(e){return 0},h=function(e,t,n){var r=t-e;return 0===r?1:(n-e)/r},v=function(e,t,n){return-n*e+n*t+e},g=function(e,t,n){var r=e*e,a=t*t;return Math.sqrt(Math.max(0,n*(a-r)+r))},y=[o.e,o.k,o.f],b=function(e){return y.find((function(t){return t.test(e)}))},w=function(e){return"'"+e+"' is not an animatable color. Use the equivalent color code instead."},_=function(e,t){var n=b(e),i=b(t);Object(a.a)(!!n,w(e)),Object(a.a)(!!i,w(t)),Object(a.a)(n.transform===i.transform,"Both colors must be hex/RGBA, OR both must be HSLA.");var u=n.parse(e),c=i.parse(t),s=Object(r.__assign)({},u),l=n===o.f?v:g;return function(e){for(var t in s)"alpha"!==t&&(s[t]=l(u[t],c[t],e));return s.alpha=v(u.alpha,c.alpha,e),n.transform(s)}},x=function(e){return"number"==typeof e},j=function(e,t){return function(n){return t(e(n))}},O=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce(j)};function E(e,t){return x(e)?function(n){return v(e,t,n)}:o.b.test(e)?_(e,t):P(e,t)}var S=function(e,t){var n=Object(r.__spreadArrays)(e),a=n.length,o=e.map((function(e,n){return E(e,t[n])}));return function(e){for(var t=0;t<a;t++)n[t]=o[t](e);return n}},M=function(e,t){var n=Object(r.__assign)(Object(r.__assign)({},e),t),a={};for(var o in n)void 0!==e[o]&&void 0!==t[o]&&(a[o]=E(e[o],t[o]));return function(e){for(var t in a)n[t]=a[t](e);return n}};function k(e){for(var t=o.c.parse(e),n=t.length,r=0,a=0,i=0,u=0;u<n;u++)r||"number"==typeof t[u]?r++:void 0!==t[u].hue?i++:a++;return{parsed:t,numNumbers:r,numRGB:a,numHSL:i}}var P=function(e,t){var n=o.c.createTransformer(t),r=k(e),i=k(t);return Object(a.a)(r.numHSL===i.numHSL&&r.numRGB===i.numRGB&&r.numNumbers>=i.numNumbers,"Complex values '"+e+"' and '"+t+"' too different to mix. Ensure all colors are of the same type."),O(S(r.parsed,i.parsed),n)},T=function(e,t){return function(n){return v(e,t,n)}};function A(e,t,n){for(var r,a=[],i=n||("number"==typeof(r=e[0])?T:"string"==typeof r?o.b.test(r)?_:P:Array.isArray(r)?S:"object"==typeof r?M:void 0),u=e.length-1,c=0;c<u;c++){var s=i(e[c],e[c+1]);if(t){var l=Array.isArray(t)?t[c]:t;s=O(l,s)}a.push(s)}return a}function R(e,t,n){var r=void 0===n?{}:n,o=r.clamp,i=void 0===o||o,c=r.ease,s=r.mixer,l=e.length;Object(a.a)(l===t.length,"Both input and output ranges must be the same length"),Object(a.a)(!c||!Array.isArray(c)||c.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());var f=A(t,c,s),d=2===l?function(e,t){var n=e[0],r=e[1],a=t[0];return function(e){return a(h(n,r,e))}}(e,f):function(e,t){var n=e.length,r=n-1;return function(a){var o=0,i=!1;if(a<=e[0]?i=!0:a>=e[r]&&(o=r-1,i=!0),!i){for(var u=1;u<n&&!(e[u]>a||u===r);u++);o=u-1}var c=h(e[o],e[o+1],a);return t[o](c)}}(e,f);return i?function(t){return d(u(e[0],e[l-1],t))}:d}var I=function(e){return function(t){return 1-e(1-t)}},D=function(e){return function(t){return t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2}},C=function(e){return function(t){return t*t*((e+1)*t-e)}},N=function(e){var t=C(e);return function(e){return(e*=2)<1?.5*t(e):.5*(2-Math.pow(2,-10*(e-1)))}},H=function(e){return e},F=function(e){return function(t){return Math.pow(t,e)}}(2),U=I(F),q=D(F),L=function(e){return 1-Math.sin(Math.acos(e))},z=I(L),B=D(z),G=C(1.525),V=I(G),W=D(G),X=N(1.525),$=function(e){if(1===e||0===e)return e;var t=e*e;return e<4/11?7.5625*t:e<8/11?9.075*t-9.9*e+3.4:e<.9?4356/361*t-35442/1805*e+16061/1805:10.8*e*e-20.52*e+10.72},Y=I($),J=function(e){return e<.5?.5*(1-$(1-2*e)):.5*$(2*e-1)+.5};function K(e,t){return e.map((function(){return t||q})).splice(0,e.length-1)}function Z(e){var t=e.from,n=void 0===t?0:t,r=e.to,a=void 0===r?1:r,o=e.ease,i=e.offset,u=e.duration,c=void 0===u?300:u,s={done:!1,value:n},l=Array.isArray(a)?a:[n,a],f=function(e,t){return e.map((function(e){return e*t}))}(i&&i.length===l.length?i:function(e){var t=e.length;return e.map((function(e,n){return 0!==n?n/(t-1):0}))}(l),c);function d(){return R(f,l,{ease:Array.isArray(o)?o:K(l,o)})}var p=d();return{next:function(e){return s.value=p(e),s.done=e>=c,s},flipTarget:function(){l.reverse(),p=d()}}}var Q={keyframes:Z,spring:p,decay:function(e){var t=e.velocity,n=void 0===t?0:t,r=e.from,a=void 0===r?0:r,o=e.power,i=void 0===o?.8:o,u=e.timeConstant,c=void 0===u?350:u,s=e.restDelta,l=void 0===s?.5:s,f=e.modifyTarget,d={done:!1,value:a},p=i*n,m=a+p,h=void 0===f?m:f(m);return h!==m&&(p=h-a),{next:function(e){var t=-p*Math.exp(-e/c);return d.done=!(t>l||t<-l),d.value=d.done?h:h+t,d},flipTarget:function(){}}}};function ee(e,t,n){return void 0===n&&(n=0),e-t-n}var te=function(e){var t=function(t){var n=t.delta;return e(n)};return{start:function(){return i.b.update(t,!0,!0)},stop:function(){return i.a.update(t)}}};function ne(e){var t,n,a,o,i,u=e.from,c=e.autoplay,s=void 0===c||c,l=e.driver,f=void 0===l?te:l,d=e.elapsed,m=void 0===d?0:d,h=e.repeat,v=void 0===h?0:h,g=e.repeatType,y=void 0===g?"loop":g,b=e.repeatDelay,w=void 0===b?0:b,_=e.onPlay,x=e.onStop,j=e.onComplete,O=e.onRepeat,E=e.onUpdate,S=Object(r.__rest)(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]),M=S.to,k=0,P=S.duration,T=!1,A=!0,I=function(e){if(Array.isArray(e.to))return Z;if(Q[e.type])return Q[e.type];var t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Z:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?p:Z}(S);(null===(n=(t=I).needsInterpolation)||void 0===n?void 0:n.call(t,u,M))&&(i=R([0,100],[u,M],{clamp:!1}),u=0,M=100);var D=I(Object(r.__assign)(Object(r.__assign)({},S),{from:u,to:M}));function C(){k++,"reverse"===y?m=function(e,t,n,r){return void 0===n&&(n=0),void 0===r&&(r=!0),r?ee(t+-e,t,n):t-(e-t)+n}(m,P,w,A=k%2==0):(m=ee(m,P,w),"mirror"===y&&D.flipTarget()),T=!1,O&&O()}function N(e){if(A||(e=-e),m+=e,!T){var t=D.next(Math.max(0,m));o=t.value,i&&(o=i(o)),T=A?t.done:m<=0}null==E||E(o),T&&(0===k&&(null!=P||(P=m)),k<v?function(e,t,n,r){return r?e>=t+n:e<=-n}(m,P,w,A)&&C():(a.stop(),j&&j()))}return s&&(null==_||_(),(a=f(N)).start()),{stop:function(){null==x||x(),a.stop()}}}function re(e,t){return t?e*(1e3/t):0}function ae(e){var t,n=e.from,a=void 0===n?0:n,o=e.velocity,u=void 0===o?0:o,c=e.min,s=e.max,l=e.power,f=void 0===l?.8:l,d=e.timeConstant,p=void 0===d?750:d,m=e.bounceStiffness,h=void 0===m?500:m,v=e.bounceDamping,g=void 0===v?10:v,y=e.restDelta,b=void 0===y?1:y,w=e.modifyTarget,_=e.driver,x=e.onUpdate,j=e.onComplete;function O(e){return void 0!==c&&e<c||void 0!==s&&e>s}function E(e){return void 0===c?s:void 0===s||Math.abs(c-e)<Math.abs(s-e)?c:s}function S(e){null==t||t.stop(),t=ne(Object(r.__assign)(Object(r.__assign)({},e),{driver:_,onUpdate:function(t){var n;null==x||x(t),null===(n=e.onUpdate)||void 0===n||n.call(e,t)},onComplete:j}))}function M(e){S(Object(r.__assign)({type:"spring",stiffness:h,damping:g,restDelta:b},e))}if(O(a))M({from:a,velocity:u,to:E(a)});else{var k=f*u+a;void 0!==w&&(k=w(k));var P,T,A=E(k),R=A===c?-1:1;S({type:"decay",from:a,velocity:u,timeConstant:p,power:f,restDelta:b,modifyTarget:w,onUpdate:O(k)?function(e){P=T,T=e,u=re(e-P,Object(i.c)().delta),(1===R&&e>A||-1===R&&e<A)&&M({from:e,to:A,velocity:u})}:void 0})}return{stop:function(){return null==t?void 0:t.stop()}}}var oe=function(e){return e},ie=function(e){return void 0===e&&(e=oe),function(t,n,r){var a=n-r,o=-(0-t+1)*(0-e(Math.abs(a)));return a<=0?n+o:n-o}},ue=(Math.sqrt,function(e){return e.hasOwnProperty("x")&&e.hasOwnProperty("y")}),ce=function(e){return ue(e)&&e.hasOwnProperty("z")},se=function(e,t){return Math.abs(e-t)};function le(e,t){if(x(e)&&x(t))return se(e,t);if(ue(e)&&ue(t)){var n=se(e.x,t.x),r=se(e.y,t.y),a=ce(e)&&ce(t)?se(e.z,t.z):0;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2)+Math.pow(a,2))}}var fe=function(e,t,n){var r=t-e;return((n-e)%r+r)%r+e},de=function(e,t){return 1-3*t+3*e},pe=function(e,t){return 3*t-6*e},me=function(e){return 3*e},he=function(e,t,n){return((de(t,n)*e+pe(t,n))*e+me(t))*e},ve=function(e,t,n){return 3*de(t,n)*e*e+2*pe(t,n)*e+me(t)};function ge(e,t,n,r){if(e===t&&n===r)return H;for(var a=new Float32Array(11),o=0;o<11;++o)a[o]=he(.1*o,e,n);function i(t){for(var r=0,o=1;10!==o&&a[o]<=t;++o)r+=.1;--o;var i=r+.1*((t-a[o])/(a[o+1]-a[o])),u=ve(i,e,n);return u>=.001?function(e,t,n,r){for(var a=0;a<8;++a){var o=ve(t,n,r);if(0===o)return t;t-=(he(t,n,r)-e)/o}return t}(t,i,e,n):0===u?i:function(e,t,n,r,a){var o,i,u=0;do{(o=he(i=t+(n-t)/2,r,a)-e)>0?n=i:t=i}while(Math.abs(o)>1e-7&&++u<10);return i}(t,r,r+.1,e,n)}return function(e){return 0===e||1===e?e:he(i(e),t,r)}}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return d}));var r=n("q1tI"),a=n.n(r),o=n("Bl7J"),i=n("9eSz"),u=n.n(i),c=n("qhky"),s=n("kOA+"),l=n.n(s),f=n("ZMKu");t.default=function(e){var t=e.data;return a.a.createElement(o.a,null,a.a.createElement(c.a,null,a.a.createElement("body",{className:"home"})),a.a.createElement("div",{className:"hero"},a.a.createElement("div",{className:"hero-content"},a.a.createElement("h1",null,"I design & code products on the web."),a.a.createElement("div",null,a.a.createElement("h2",null,"👋 Hi, I'm Pouria, an interaction designer who loves to create digital products and improve people's experiences on the web. When there's time, I also visualize data on my"," ",a.a.createElement("a",{href:"https://observablehq.com/@pdelfan"},"Observable")," ","notebook. I enjoy picking up new tools and skills. These are the ones I'm most comfortable with:"),a.a.createElement("h2",null,a.a.createElement("span",{className:"design"},"Design")," — Figma, Photoshop, AfterEffects"," "),a.a.createElement("h2",null,a.a.createElement("span",{className:"development"},"Development")," — HTML/CSS, JavaScript (React, D3, Gatsby, Vega), PHP, MySQL"),a.a.createElement("a",{className:"get-in-touch",href:"mailto:pdelfana@sfu.ca"},"Get in touch")))),a.a.createElement("div",{className:"divider"}),a.a.createElement("div",{className:"selected-projects"},a.a.createElement("h2",null,"Selected Projects"),a.a.createElement("div",{className:"projects"},a.a.createElement(f.a.div,{whileHover:{scale:1.02},whileTap:{scale:.9}},a.a.createElement("div",{className:"project-card"},a.a.createElement(l.a,{cover:!0,to:"/taskat/",direction:"down"},a.a.createElement(u.a,{fluid:t.taskatProjectCard.childImageSharp.fluid,alt:"TasKat project card",imgStyle:{objectFit:"none",objectPosition:"50% 50%"}}),a.a.createElement("div",{className:"card-text"},a.a.createElement("h3",null,"TasKat"),a.a.createElement("h4",null,"Helping parents and children manage tasks"),a.a.createElement("h5",null,"UI/UX Design, Research"))))),a.a.createElement(f.a.div,{whileHover:{scale:1.02},whileTap:{scale:.9}},a.a.createElement("div",{className:"project-card"},a.a.createElement(l.a,{cover:!0,to:"/seeda/",direction:"down"},a.a.createElement(u.a,{fluid:t.seedaProjectCard.childImageSharp.fluid,alt:"seeda project card",imgStyle:{objectFit:"none",objectPosition:"50% 50%"}}),a.a.createElement("div",{className:"card-text"},a.a.createElement("h3",null,"SEEDA"),a.a.createElement("h4",null,"Re-imagining SEEDA's online identity"),a.a.createElement("h5",null,"Branding, Web design and Development"))))),a.a.createElement(f.a.div,{whileHover:{scale:1.02},whileTap:{scale:.9}},a.a.createElement("div",{className:"project-card"},a.a.createElement(l.a,{cover:!0,to:"/covid-in-us/",direction:"down",bg:"#d11b5f"},a.a.createElement(u.a,{fluid:t.covidProjectCard.childImageSharp.fluid,alt:"covid project card",imgStyle:{objectFit:"none",objectPosition:"50% 50%"}}),a.a.createElement("div",{className:"card-text"},a.a.createElement("h3",null,"COVID-19 in the US"),a.a.createElement("h4",null,"Tracking the spread of COVID-19 in the United States"),a.a.createElement("h5",null,"Data Visualization, Web Design and Development"))))),a.a.createElement(f.a.div,{whileHover:{scale:1.02},whileTap:{scale:.9}},a.a.createElement("div",{className:"project-card"},a.a.createElement(l.a,{cover:!0,to:"/visuals/",direction:"down",bg:"#d11b5f"},a.a.createElement(u.a,{fluid:t.visualsProjectCard.childImageSharp.fluid,alt:"visuals project card",imgStyle:{objectFit:"none",objectPosition:"50% 50%"}}),a.a.createElement("div",{className:"card-text"},a.a.createElement("h3",null,"Visuals"),a.a.createElement("h4",null,"Curated collection of my miscellaneous graphic design work"),a.a.createElement("h5",null,"Graphic Design"))))),a.a.createElement(f.a.div,{whileHover:{scale:1.02},whileTap:{scale:.9}},a.a.createElement("div",{className:"project-card"},a.a.createElement(l.a,{cover:!0,to:"https://observablehq.com/@pdelfan/final-project",direction:"down",bg:"#d11b5f"},a.a.createElement(u.a,{fluid:t.HomeFinderProjectCard.childImageSharp.fluid,alt:"Home finder project card",imgStyle:{objectFit:"none",objectPosition:"50% 50%"}}),a.a.createElement("div",{className:"card-text"},a.a.createElement("h3",null,"Home Finder"),a.a.createElement("h4",null,"Helping Toronto citizens find the perfect retirement home"),a.a.createElement("h5",null,"Data Visualization"))))))))};var d="3609548799"},eUsl:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h}));var r="undefined"!=typeof window?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout((function(){return e(performance.now())}),1/60*1e3)};var a=!0,o=!1,i=!1,u={delta:0,timestamp:0},c=["read","update","preRender","render","postRender"],s=c.reduce((function(e,t){return e[t]=function(e){var t=[],n=[],r=0,a=!1,o=new WeakSet,i={schedule:function(e,i,u){void 0===i&&(i=!1),void 0===u&&(u=!1);var c=u&&a,s=c?t:n;return i&&o.add(e),-1===s.indexOf(e)&&(s.push(e),c&&a&&(r=t.length)),e},cancel:function(e){var t=n.indexOf(e);-1!==t&&n.splice(t,1),o.delete(e)},process:function(u){var c;if(a=!0,t=(c=[n,t])[0],(n=c[1]).length=0,r=t.length)for(var s=0;s<r;s++){var l=t[s];l(u),o.has(l)&&(i.schedule(l),e())}a=!1}};return i}((function(){return o=!0})),e}),{}),l=c.reduce((function(e,t){var n=s[t];return e[t]=function(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=!1),o||m(),n.schedule(e,t,r)},e}),{}),f=c.reduce((function(e,t){return e[t]=s[t].cancel,e}),{}),d=function(e){return s[e].process(u)},p=function e(t){o=!1,u.delta=a?1/60*1e3:Math.max(Math.min(t-u.timestamp,40),1),u.timestamp=t,i=!0,c.forEach(d),i=!1,o&&(a=!1,r(e))},m=function(){o=!0,a=!0,i||r(p)},h=function(){return u};t.b=l},mrSG:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return a})),n.d(t,"__assign",(function(){return o})),n.d(t,"__rest",(function(){return i})),n.d(t,"__decorate",(function(){return u})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return s})),n.d(t,"__awaiter",(function(){return l})),n.d(t,"__generator",(function(){return f})),n.d(t,"__createBinding",(function(){return d})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return m})),n.d(t,"__read",(function(){return h})),n.d(t,"__spread",(function(){return v})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return y})),n.d(t,"__asyncGenerator",(function(){return b})),n.d(t,"__asyncDelegator",(function(){return w})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return x})),n.d(t,"__importStar",(function(){return j})),n.d(t,"__importDefault",(function(){return O})),n.d(t,"__classPrivateFieldGet",(function(){return E})),n.d(t,"__classPrivateFieldSet",(function(){return S}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function u(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}function c(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(u){o=[6,u],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function d(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function p(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(u){a={error:u}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,u=o.length;i<u;i++,a++)r[a]=o[i];return r}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,a=n.apply(e,t||[]),o=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){a[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||u(e,t)}))})}function u(e,t){try{(n=a[e](t)).value instanceof y?Promise.resolve(n.value.v).then(c,s):l(o[0][2],n)}catch(r){l(o[0][3],r)}var n}function c(e){u("next",e)}function s(e){u("throw",e)}function l(e,t){e(t),o.shift(),o.length&&u(o[0][0],o[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,a){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:a?a(t):t}:a}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=m(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,a){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,a,(t=e[n](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function O(e){return e&&e.__esModule?e:{default:e}}function E(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function S(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}}}]);
//# sourceMappingURL=component---src-pages-index-js-e0d40884de1d98d468b3.js.map