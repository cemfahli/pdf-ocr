var PDF_OCR=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let g;function b(t){g=t}const $=[],x=[],w=[],j=[],y=Promise.resolve();let v=!1;function _(t){w.push(t)}let k=!1;const C=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];b(e),A(e.$$)}for(b(null),$.length=0;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];C.has(e)||(C.add(e),e())}w.length=0}while($.length);for(;j.length;)j.pop()();v=!1,k=!1,C.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const T=new Set;const N="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function R(t,e){-1===t.$$.dirty[0]&&($.push(t),v||(v=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(s,c,i,a,u,d,f=[-1]){const p=g;b(s);const h=c.props||{},m=s.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:f,skip_bound:!1};let $=!1;if(m.ctx=i?i(s,h,((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),$&&R(s,t)),e})):[],m.update(),$=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();c.intro&&((x=s.$$.fragment)&&x.i&&(T.delete(x),x.i(w))),function(t,n,s){const{fragment:c,on_mount:i,on_destroy:l,after_update:a}=t.$$;c&&c.m(n,s),_((()=>{const n=i.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(_)}(s,c.target,c.anchor),E()}var x,w;b(p)}const{document:F}=N;function P(e){let n,o,r,s;return{c(){n=a("script"),n.src!==(o="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js")&&p(n,"src","https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js"),p(n,"crossorigin","anonymous")},m(t,o){i(t,n,o),r||(s=f(n,"load",e[8]),r=!0)},p:t,d(t){t&&l(n),r=!1,s()}}}function S(t){let e,n,r,s,g,b,$,x,w,j,y,v,_,k,C,E,A=t[5]&&t[5].length>0&&D(t),T=t[3]&&t[3].length>0&&L(t);return{c(){e=a("div"),n=u("Accuracy: (Higher is Slower) "),r=a("br"),s=d(),g=u(t[2]),b=d(),$=a("br"),x=d(),w=a("input"),j=d(),y=a("button"),y.textContent="Recognize!",v=d(),A&&A.c(),_=d(),T&&T.c(),k=u(""),p(w,"type","range"),p(w,"min","1"),p(w,"max","10")},m(o,l){i(o,e,l),c(e,n),c(e,r),c(e,s),c(e,g),c(e,b),c(e,$),c(e,x),c(e,w),m(w,t[2]),i(o,j,l),i(o,y,l),i(o,v,l),A&&A.m(o,l),i(o,_,l),T&&T.m(o,l),i(o,k,l),C||(E=[f(w,"change",t[11]),f(w,"input",t[11]),f(y,"click",t[6])],C=!0)},p(t,e){4&e&&h(g,t[2]),4&e&&m(w,t[2]),t[5]&&t[5].length>0?A?A.p(t,e):(A=D(t),A.c(),A.m(_.parentNode,_)):A&&(A.d(1),A=null),t[3]&&t[3].length>0?T?T.p(t,e):(T=L(t),T.c(),T.m(k.parentNode,k)):T&&(T.d(1),T=null)},d(t){t&&l(e),t&&l(j),t&&l(y),t&&l(v),A&&A.d(t),t&&l(_),T&&T.d(t),t&&l(k),C=!1,o(E)}}}function D(t){let e,n,o,r;return{c(){e=u("Page #"),n=u(t[4]),o=u(", "),r=u(t[5])},m(t,s){i(t,e,s),i(t,n,s),i(t,o,s),i(t,r,s)},p(t,e){16&e&&h(n,t[4]),32&e&&h(r,t[5])},d(t){t&&l(e),t&&l(n),t&&l(o),t&&l(r)}}}function L(t){let e,n,o,r,s,h,g;return{c(){e=u("RESULT "),n=a("br"),o=d(),r=a("div"),s=a("textarea"),p(s,"class","svelte-5h9iw6"),p(r,"id","result"),p(r,"class","svelte-5h9iw6")},m(l,a){i(l,e,a),i(l,n,a),i(l,o,a),i(l,r,a),c(r,s),m(s,t[3]),h||(g=f(s,"input",t[12]),h=!0)},p(t,e){8&e&&m(s,t[3])},d(t){t&&l(e),t&&l(n),t&&l(o),t&&l(r),h=!1,g()}}}function W(e){let n,r,s,u,h,m,g,b,$,x,w,j,y,v,_=e[0]&&P(e),k=e[1]&&e[1][0]&&S(e);return{c(){n=a("script"),_&&_.c(),s=a("script"),h=d(),m=a("main"),g=a("h1"),g.textContent="PDF OCR",b=d(),$=a("p"),$.textContent="Using PDF.js and Tesseract.js to Recognize Text in PDFs",x=d(),w=a("input"),j=d(),k&&k.c(),n.src!==(r="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js")&&p(n,"src","https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js"),p(n,"crossorigin","anonymous"),s.src!==(u="https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/2.1.4/tesseract.min.js")&&p(s,"src","https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/2.1.4/tesseract.min.js"),p(s,"integrity","sha512-He62YiiTWJ8AGZLwlCulGxr0wOMteFAIkyZuylghbNxxwACqWVNj3xUMJWxfzvRi5+oLvLu0VEEZsE2/eKastA=="),p(s,"crossorigin","anonymous"),p(g,"class","svelte-5h9iw6"),p(w,"type","file"),p(w,"accept",".pdf"),p(m,"class","svelte-5h9iw6")},m(t,o){c(F.head,n),_&&_.m(F.head,null),c(F.head,s),i(t,h,o),i(t,m,o),c(m,g),c(m,b),c(m,$),c(m,x),c(m,w),c(m,j),k&&k.m(m,null),y||(v=[f(n,"load",e[7]),f(s,"load",e[9]),f(w,"change",e[10])],y=!0)},p(t,[e]){t[0]?_?_.p(t,e):(_=P(t),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null),t[1]&&t[1][0]?k?k.p(t,e):(k=S(t),k.c(),k.m(m,null)):k&&(k.d(1),k=null)},i:t,o:t,d(t){l(n),_&&_.d(t),l(s),t&&l(h),t&&l(m),k&&k.d(),y=!1,o(v)}}}function z(t,e,n){let o,r,s,c=document.createElement("canvas"),i=2,l="",a="",u="";return[o,s,i,l,a,u,function(){if(n(3,l=""),s&&s[0]){let t=s[0],e=new FileReader;e.onload=t=>{o.getDocument(e.result).promise.then((t=>{!async function(t,e,o){for(let s=1;s<=t.numPages;s++)n(4,a=s),await t.getPage(s).then((t=>{const n=t.getViewport({scale:o,rotation:360}),r=e.getContext("2d");e.height=n.height,e.width=n.width;const s={canvasContext:r,viewport:n,dontFlip:!0};return t.render(s).promise})).then((()=>(console.log("STARTING OCR"),r.recognize(e,"eng",{logger:t=>n(5,u=t.status+" ("+Math.round(100*t.progress)+"%)")})))).then((({data:{text:t}})=>n(3,l+=t))),n(4,a=""),n(5,u=""),console.log("FINISHED OCR")}(t,c,i)}))},e.readAsArrayBuffer(t)}},()=>{n(0,o=window["pdfjs-dist/build/pdf"])},()=>{n(0,o.GlobalWorkerOptions.workerSrc=window.pdfjsWorker,o)},()=>{r=window.Tesseract},function(){s=this.files,n(1,s)},function(){var t;t=this.value,i=""===t?null:+t,n(2,i)},function(){l=this.value,n(3,l)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,z,W,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map