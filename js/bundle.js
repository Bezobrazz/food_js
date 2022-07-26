(()=>{"use strict";function t(t,e){document.querySelector(t).style.display="block",console.log(e),e&&clearInterval(e)}function e(t){document.querySelector(t).style.display="none"}window.addEventListener("DOMContentLoaded",(function(){const n=setTimeout((()=>t(".modal",n)),5e4);(function(t,e,n,o){const r=document.querySelectorAll(t),a=document.querySelectorAll(e),s=document.querySelector(n);function c(){a.forEach((t=>{t.style.display="none"})),r.forEach((t=>{t.classList.remove(o)}))}function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;a[t].style.display="block",r[t].classList.add(o)}c(),l(),s.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t,slice(1))&&r.forEach(((t,e)=>{n==t&&(c(),l(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,r){const a=document.querySelectorAll(n),s=document.querySelector(o);a.forEach((n=>{n.addEventListener("click",(()=>{t(o,r),document.body.style.overflow="hidden"})),s.addEventListener("click",(t=>{t.target!==s&&""!=t.target.getAttribute("data-close")||e(o)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&e(o)&&e(o)}))})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(t(o,r),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(t,e){function n(t){return t>=0&&t<10?"0"+t:t}!function(t,e){const o=document.querySelector(t),r=o.querySelector("#days"),a=o.querySelector("#hours"),s=o.querySelector("#minutes"),c=o.querySelector("#seconds"),l=setInterval(i,1e3);function i(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date),n=Math.floor(e/864e5),o=Math.floor(e/1e3%60),r=Math.floor(e/1e3/60%60);return{total:e,days:n,hours:Math.floor(e/36e5%24),minutes:r,seconds:o}}(e);r.innerHTML=n(t.days),a.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&clearInterval(l)}i()}(t,e)}(".timer","2022-07-25"),function(){class t{constructor(t,e,n,o,r,a){this.src=t,this.alt=e,this.title=n,this.descr=o,this.price=r;for(var s=arguments.length,c=new Array(s>6?s-6:0),l=6;l<s;l++)c[l-6]=arguments[l];this.classes=c,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.classes="menu__item",t.classList.add(this.classes)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n\t\t\t\t\t\t\t<img src=${this.src} alt=${this.alt}>\n\t\t\t\t\t\t\t<h3 class="menu__item-subtitle">${this.title}</h3>\n\t\t\t\t\t\t\t<div class="menu__item-descr">${this.descr}</div>\n\t\t\t\t\t\t\t<div class="menu__item-divider"></div>\n\t\t\t\t\t\t\t<div class="menu__item-price">\n\t\t\t\t\t\t\t\t\t<div class="menu__item-cost">Цена:</div>\n\t\t\t\t\t\t\t\t\t<div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t`,this.parent.append(t)}}(async t=>{const e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((e=>{let{img:n,altimg:o,title:r,descr:a,price:s}=e;new t(n,o,r,a,s,".menu .container").render()}))}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,o,r,a;function s(){t.textContent=e&&n&&o&&r&&a?"female"===e?Math.round((447.6+9.2*o+3.1*n-4.3*r)*a):Math.round((88.36+13.4*o+4.8*n-5.7*r)*a):"____"}function c(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function l(t,n){const o=document.querySelectorAll(t);o.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(a=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),o.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),s()}))}))}function i(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":r=+e.value}s()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),s(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#gender div","calculating__choose-item_active"),l(".calculating__choose_big div","calculating__choose-item_active"),i("#height"),i("#weight"),i("#age")}(),function(n,o){function r(n){const r=document.querySelector(".modal__dialog");r.style.display="none",t(".modal",o);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n\t\t <div class="modal__content">\n\t\t <div class="modal__close" data-close>x</div>\n\t\t <div class="modal__title">${n}</div>\n\t\t </div>\n\t `,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),r.style.display="block",r.style.display="none",e(".modal")}),4e3)}document.querySelectorAll(n).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n\t\t\t display: block;\n\t\t\t margin: 0 auto;\n\t\t ",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{console.log(t),r("Спасибо, скоро мы с вами свяжемся"),n.remove()})).catch((()=>{r("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))})),fetch("http://localhost:3000/menu").then((t=>t.json())).then((t=>console.log(t)))}("form",n),function(t){let{container:e,slide:n,nextArrow:o,prevArrow:r,totalCounter:a,currentCounter:s,wrapper:c,field:l}=t,i=0,d=1;const u=document.querySelectorAll(n),m=document.querySelector(e),h=document.querySelector(r),g=document.querySelector(o),f=document.querySelector(a),y=document.querySelector(s),p=document.querySelector(c),_=window.getComputedStyle(p).width,v=document.querySelector(l);u.length<10?(f.textContent=`0${u.length}`,y.textContent=`0${d}`):(f.textContent=u.length,y.textContent=d),v.style.width=100*u.length+"%",v.style.display="flex",v.style.transition="0.5s all",p.style.overflow="hidden",u.forEach((t=>{t.style.width=_})),m.style.position="relative";const S=document.createElement("ol"),b=[];S.classList.add("carousel-indicators"),S.style.cssText="\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\tz-index: 15;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tmargin-right: 15%;\n\t\t\tmargin-left: 15%;\n\t\t\tlist-style: none;\n\t",m.append(S);for(let t=0;t<u.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n\t\t\t\t\tbox-sizing: content-box;\n\t\t\t\t\tflex: 0 1 auto;\n\t\t\t\t\twidth: 30px;\n\t\t\t\t\theight: 6px;\n\t\t\t\t\tmargin-right: 3px;\n\t\t\t\t\tmargin-left: 3px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t\tbackground-clip: padding-box;\n\t\t\t\t\tborder-top: 10px solid transparent;\n\t\t\t\t\tborder-bottom: 10px solid transparent;\n\t\t\t\t\topacity: .5;\n\t\t\t\t\ttransition: opacity .6s ease;\n\t\t\t",0==t&&(e.style.opacity=1),S.append(e),b.push(e)}function x(t){return+t.replace(/\D/g,"")}g.addEventListener("click",(()=>{i==x(_)*(u.length-1)?i=0:i+=x(_),v.style.transform=`translateX(-${i}px)`,d==u.length?d=1:d++,u.length<10?y.textContent=`0${d}`:y.textContent=d,b.forEach((t=>t.style.opacity=".5")),b[d-1].style.opacity=1})),h.addEventListener("click",(()=>{0==i?i=x(_)*(u.length-1):i-=x(_),v.style.transform=`translateX(-${i}px)`,1==d?d=u.length:d--,u.length<10?y.textContent=`0${d}`:y.textContent=d,b.forEach((t=>t.style.opacity=".5")),b[d-1].style.opacity=1})),b.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");d=e,i=x(_)*(e-1),v.style.transform=`translateX(-${i}px)`,u.length<10?y.textContent=`0${d}`:y.textContent=d,b.forEach((t=>t.style.opacity=".5")),b[d-1].style.opacity=1}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))})();
//# sourceMappingURL=bundle.js.map