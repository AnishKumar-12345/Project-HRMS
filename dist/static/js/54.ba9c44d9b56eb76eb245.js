webpackJsonp([54],{OvQW:function(e,t,n){
/*! @license DOMPurify 2.3.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.4/LICENSE */var r;r=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,l=Object.create,c="undefined"!=typeof Reflect&&Reflect,s=c.apply,u=c.construct;s||(s=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var m,f=A(Array.prototype.forEach),p=A(Array.prototype.pop),d=A(Array.prototype.push),h=A(String.prototype.toLowerCase),g=A(String.prototype.match),y=A(String.prototype.replace),v=A(String.prototype.indexOf),b=A(String.prototype.trim),T=A(RegExp.prototype.test),N=(m=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(m,t)});function A(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return s(e,t,r)}}function E(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=h(i);a!==i&&(n(r)||(r[o]=a),i=a)}e[i]=!0}return e}function x(t){var n=l(null),r=void 0;for(r in t)s(e,t,[r])&&(n[r]=t[r]);return n}function k(e,t){for(;null!==e;){var n=o(e,t);if(n){if(n.get)return A(n.get);if("function"==typeof n.value)return A(n.value)}e=r(e)}return function(e){return console.warn("fallback value for",e),null}}var S=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),w=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),_=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),O=i(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),C=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),D=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=i(["#text"]),L=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),R=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),F=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),H=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),U=a(/<%[\s\S]*|[\s\S]*%>/gm),z=a(/^data-[\-\w.\u00B7-\uFFFF]/),B=a(/^aria-[\-\w]+$/),j=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),G=a(/^(?:\w+script|data):/i),P=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var Y=function(){return"undefined"==typeof window?null:window},K=function(e,t){if("object"!==(void 0===e?"undefined":W(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y(),n=function(t){return e(t)};if(n.version="2.3.4",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,m=t.NamedNodeMap,A=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,V=t.HTMLFormElement,X=t.DOMParser,$=t.trustedTypes,J=s.prototype,Q=k(J,"cloneNode"),Z=k(J,"nextSibling"),ee=k(J,"childNodes"),te=k(J,"parentNode");if("function"==typeof l){var ne=o.createElement("template");ne.content&&ne.content.ownerDocument&&(o=ne.content.ownerDocument)}var re=K($,r),oe=re&&Fe?re.createHTML(""):"",ie=o,ae=ie.implementation,le=ie.createNodeIterator,ce=ie.createDocumentFragment,se=ie.getElementsByTagName,ue=r.importNode,me={};try{me=x(o).documentMode?o.documentMode:{}}catch(e){}var fe={};n.isSupported="function"==typeof te&&ae&&void 0!==ae.createHTMLDocument&&9!==me;var pe=H,de=U,he=z,ge=B,ye=G,ve=P,be=j,Te=null,Ne=E({},[].concat(q(S),q(w),q(_),q(C),q(M))),Ae=null,Ee=E({},[].concat(q(L),q(R),q(I),q(F))),xe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ke=null,Se=null,we=!0,_e=!0,Oe=!1,Ce=!1,De=!1,Me=!1,Le=!1,Re=!1,Ie=!1,Fe=!1,He=!0,Ue=!0,ze=!1,Be={},je=null,Ge=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Pe=null,We=E({},["audio","video","img","source","image","track"]),qe=null,Ye=E({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ke="http://www.w3.org/1998/Math/MathML",Ve="http://www.w3.org/2000/svg",Xe="http://www.w3.org/1999/xhtml",$e=Xe,Je=!1,Qe=void 0,Ze=["application/xhtml+xml","text/html"],et=void 0,tt=null,nt=o.createElement("form"),rt=function(e){return e instanceof RegExp||e instanceof Function},ot=function(e){tt&&tt===e||(e&&"object"===(void 0===e?"undefined":W(e))||(e={}),e=x(e),Te="ALLOWED_TAGS"in e?E({},e.ALLOWED_TAGS):Ne,Ae="ALLOWED_ATTR"in e?E({},e.ALLOWED_ATTR):Ee,qe="ADD_URI_SAFE_ATTR"in e?E(x(Ye),e.ADD_URI_SAFE_ATTR):Ye,Pe="ADD_DATA_URI_TAGS"in e?E(x(We),e.ADD_DATA_URI_TAGS):We,je="FORBID_CONTENTS"in e?E({},e.FORBID_CONTENTS):Ge,ke="FORBID_TAGS"in e?E({},e.FORBID_TAGS):{},Se="FORBID_ATTR"in e?E({},e.FORBID_ATTR):{},Be="USE_PROFILES"in e&&e.USE_PROFILES,we=!1!==e.ALLOW_ARIA_ATTR,_e=!1!==e.ALLOW_DATA_ATTR,Oe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ce=e.SAFE_FOR_TEMPLATES||!1,De=e.WHOLE_DOCUMENT||!1,Re=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,Fe=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,Ue=!1!==e.KEEP_CONTENT,ze=e.IN_PLACE||!1,be=e.ALLOWED_URI_REGEXP||be,$e=e.NAMESPACE||Xe,e.CUSTOM_ELEMENT_HANDLING&&rt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(xe.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&rt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(xe.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(xe.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Qe=Qe=-1===Ze.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,et="application/xhtml+xml"===Qe?function(e){return e}:h,Ce&&(_e=!1),Ie&&(Re=!0),Be&&(Te=E({},[].concat(q(M))),Ae=[],!0===Be.html&&(E(Te,S),E(Ae,L)),!0===Be.svg&&(E(Te,w),E(Ae,R),E(Ae,F)),!0===Be.svgFilters&&(E(Te,_),E(Ae,R),E(Ae,F)),!0===Be.mathMl&&(E(Te,C),E(Ae,I),E(Ae,F))),e.ADD_TAGS&&(Te===Ne&&(Te=x(Te)),E(Te,e.ADD_TAGS)),e.ADD_ATTR&&(Ae===Ee&&(Ae=x(Ae)),E(Ae,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&E(qe,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(je===Ge&&(je=x(je)),E(je,e.FORBID_CONTENTS)),Ue&&(Te["#text"]=!0),De&&E(Te,["html","head","body"]),Te.table&&(E(Te,["tbody"]),delete ke.tbody),i&&i(e),tt=e)},it=E({},["mi","mo","mn","ms","mtext"]),at=E({},["foreignobject","desc","title","annotation-xml"]),lt=E({},w);E(lt,_),E(lt,O);var ct=E({},C);E(ct,D);var st=function(e){d(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=oe}catch(t){e.remove()}}},ut=function(e,t){try{d(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){d(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Ae[e])if(Re||Ie)try{st(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},mt=function(e){var t=void 0,n=void 0;if(Le)e="<remove></remove>"+e;else{var r=g(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===Qe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=re?re.createHTML(e):e;if($e===Xe)try{t=(new X).parseFromString(i,Qe)}catch(e){}if(!t||!t.documentElement){t=ae.createDocument($e,"template",null);try{t.documentElement.innerHTML=Je?"":i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),$e===Xe?se.call(t,De?"html":"body")[0]:De?t.documentElement:a},ft=function(e){return le.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},pt=function(e){return"object"===(void 0===c?"undefined":W(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":W(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},dt=function(e,t,r){fe[e]&&f(fe[e],function(e){e.call(n,t,r,tt)})},ht=function(e){var t,r=void 0;if(dt("beforeSanitizeElements",e,null),(t=e)instanceof V&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof A)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore))return st(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return st(e),!0;var o=et(e.nodeName);if(dt("uponSanitizeElement",e,{tagName:o,allowedTags:Te}),!pt(e.firstElementChild)&&(!pt(e.content)||!pt(e.content.firstElementChild))&&T(/<[/\w]/g,e.innerHTML)&&T(/<[/\w]/g,e.textContent))return st(e),!0;if("select"===o&&T(/<template/i,e.innerHTML))return st(e),!0;if(!Te[o]||ke[o]){if(Ue&&!je[o]){var i=te(e)||e.parentNode,a=ee(e)||e.childNodes;if(a&&i)for(var l=a.length-1;l>=0;--l)i.insertBefore(Q(a[l],!0),Z(e))}if(!ke[o]&&yt(o)){if(xe.tagNameCheck instanceof RegExp&&T(xe.tagNameCheck,o))return!1;if(xe.tagNameCheck instanceof Function&&xe.tagNameCheck(o))return!1}return st(e),!0}return e instanceof s&&!function(e){var t=te(e);t&&t.tagName||(t={namespaceURI:Xe,tagName:"template"});var n=h(e.tagName),r=h(t.tagName);if(e.namespaceURI===Ve)return t.namespaceURI===Xe?"svg"===n:t.namespaceURI===Ke?"svg"===n&&("annotation-xml"===r||it[r]):Boolean(lt[n]);if(e.namespaceURI===Ke)return t.namespaceURI===Xe?"math"===n:t.namespaceURI===Ve?"math"===n&&at[r]:Boolean(ct[n]);if(e.namespaceURI===Xe){if(t.namespaceURI===Ve&&!at[r])return!1;if(t.namespaceURI===Ke&&!it[r])return!1;var o=E({},["title","style","font","a","script"]);return!ct[n]&&(o[n]||!lt[n])}return!1}(e)?(st(e),!0):"noscript"!==o&&"noembed"!==o||!T(/<\/no(script|embed)/i,e.innerHTML)?(Ce&&3===e.nodeType&&(r=e.textContent,r=y(r,pe," "),r=y(r,de," "),e.textContent!==r&&(d(n.removed,{element:e.cloneNode()}),e.textContent=r)),dt("afterSanitizeElements",e,null),!1):(st(e),!0)},gt=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in o||n in nt))return!1;if(_e&&!Se[t]&&T(he,t));else if(we&&T(ge,t));else if(!Ae[t]||Se[t]){if(!(yt(e)&&(xe.tagNameCheck instanceof RegExp&&T(xe.tagNameCheck,e)||xe.tagNameCheck instanceof Function&&xe.tagNameCheck(e))&&(xe.attributeNameCheck instanceof RegExp&&T(xe.attributeNameCheck,t)||xe.attributeNameCheck instanceof Function&&xe.attributeNameCheck(t))||"is"===t&&xe.allowCustomizedBuiltInElements&&(xe.tagNameCheck instanceof RegExp&&T(xe.tagNameCheck,n)||xe.tagNameCheck instanceof Function&&xe.tagNameCheck(n))))return!1}else if(qe[t]);else if(T(be,y(n,ve,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!Pe[e])if(Oe&&!T(ye,y(n,ve,"")));else if(n)return!1;return!0},yt=function(e){return e.indexOf("-")>0},vt=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;dt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ae};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r=b(t.value),o=et(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,dt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(ut(s,e),l.keepAttr))if(T(/\/>/i,r))ut(s,e);else{Ce&&(r=y(r,pe," "),r=y(r,de," "));var m=et(e.nodeName);if(gt(m,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),p(n.removed)}catch(e){}}}dt("afterSanitizeAttributes",e,null)}},bt=function e(t){var n=void 0,r=ft(t);for(dt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)dt("uponSanitizeShadowNode",n,null),ht(n)||(n.content instanceof a&&e(n.content),vt(n));dt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,o){var i=void 0,l=void 0,s=void 0,u=void 0,m=void 0;if((Je=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!pt(e)){if("function"!=typeof e.toString)throw N("toString is not a function");if("string"!=typeof(e=e.toString()))throw N("dirty is not a string, aborting")}if(!n.isSupported){if("object"===W(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(pt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Me||ot(o),n.removed=[],"string"==typeof e&&(ze=!1),ze);else if(e instanceof c)1===(l=(i=mt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName?i=l:"HTML"===l.nodeName?i=l:i.appendChild(l);else{if(!Re&&!Ce&&!De&&-1===e.indexOf("<"))return re&&Fe?re.createHTML(e):e;if(!(i=mt(e)))return Re?null:oe}i&&Le&&st(i.firstChild);for(var f=ft(ze?e:i);s=f.nextNode();)3===s.nodeType&&s===u||ht(s)||(s.content instanceof a&&bt(s.content),vt(s),u=s);if(u=null,ze)return e;if(Re){if(Ie)for(m=ce.call(i.ownerDocument);i.firstChild;)m.appendChild(i.firstChild);else m=i;return Ae.shadowroot&&(m=ue.call(r,m,!0)),m}var p=De?i.outerHTML:i.innerHTML;return Ce&&(p=y(p,pe," "),p=y(p,de," ")),re&&Fe?re.createHTML(p):p},n.setConfig=function(e){ot(e),Me=!0},n.clearConfig=function(){tt=null,Me=!1},n.isValidAttribute=function(e,t,n){tt||ot({});var r=et(e),o=et(t);return gt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(fe[e]=fe[e]||[],d(fe[e],t))},n.removeHook=function(e){fe[e]&&p(fe[e])},n.removeHooks=function(e){fe[e]&&(fe[e]=[])},n.removeAllHooks=function(){fe={}},n}()},e.exports=r()}});
//# sourceMappingURL=54.ba9c44d9b56eb76eb245.js.map