!function(){"use strict";var e=function(e){var r=!0,t=!1,l=void 0;try{for(var o,n=function(){var e=o.value;e.addEventListener("click",function(){e.classList.contains("block__btn-speed--active")||(i(e),e.classList.add("block__btn-speed--active"),c(e))})},a=e[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)n()}catch(e){t=!0,l=e}finally{try{r||null==a.return||a.return()}finally{if(t)throw l}}},c=function(e){var r=e.className,t=/--x(\d*)/gm.exec(r)[1],l=100*t,o=e.parentNode.parentNode,n=o.querySelector(".block__speed");n.className="block__speed block__speed--x".concat(t),n.querySelector("span").innerText=l,o.parentNode.parentNode.querySelector(".block__total span").innerText*=t},i=function(e){var r=e.parentNode.querySelectorAll(".block__btn-speed--active"),t=!0,l=!1,o=void 0;try{for(var n,a=r[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){n.value.classList.remove("block__btn-speed--active")}}catch(e){l=!0,o=e}finally{try{t||null==a.return||a.return()}finally{if(l)throw o}}};e(document.querySelectorAll(".block__btn-speed--x1")),e(document.querySelectorAll(".block__btn-speed--x3")),e(document.querySelectorAll(".block__btn-speed--x5")),e(document.querySelectorAll(".block__btn-speed--x10"));var r=document.querySelector(".modal-tarif--nexbox"),t=document.querySelector(".modal-tarif--router1gb"),l=document.querySelector(".modal-tarif-overlay"),o=document.querySelectorAll(".modal-tarif__close"),n=!0,a=!1,u=void 0;try{for(var d,y=o[Symbol.iterator]();!(n=(d=y.next()).done);n=!0){d.value.addEventListener("click",function(){r.classList.remove("modal-show"),t.classList.remove("modal-show"),l.classList.remove("modal-show")})}}catch(e){a=!0,u=e}finally{try{n||null==y.return||y.return()}finally{if(a)throw u}}var f=function(e,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:l;e.addEventListener("click",function(){r.classList.add("modal-show"),t.classList.add("modal-show")})},v=document.querySelectorAll(".block__icon__benefit--tv"),s=!0,b=!1,_=void 0;try{for(var m,S=v[Symbol.iterator]();!(s=(m=S.next()).done);s=!0){f(m.value,r)}}catch(e){b=!0,_=e}finally{try{s||null==S.return||S.return()}finally{if(b)throw _}}var h=document.querySelectorAll(".block__icon__benefit--router-100mb"),k=!0,x=!1,p=void 0;try{for(var q,w=h[Symbol.iterator]();!(k=(q=w.next()).done);k=!0){f(q.value,t)}}catch(e){x=!0,p=e}finally{try{k||null==w.return||w.return()}finally{if(x)throw p}}var A=document.querySelectorAll(".block__icon__benefit--router-1g"),L=!0,g=!1,N=void 0;try{for(var E,T=A[Symbol.iterator]();!(L=(E=T.next()).done);L=!0){f(E.value,t)}}catch(e){g=!0,N=e}finally{try{L||null==T.return||T.return()}finally{if(g)throw N}}var j=document.querySelectorAll(".block__icon__benefit--ip"),z=!0,B=!1,C=void 0;try{for(var D,F=j[Symbol.iterator]();!(z=(D=F.next()).done);z=!0){f(D.value,r)}}catch(e){B=!0,C=e}finally{try{z||null==F.return||F.return()}finally{if(B)throw C}}var G=document.querySelectorAll(".block__icon-bg--router-100mb"),H=!0,I=!1,J=void 0;try{for(var K,M=G[Symbol.iterator]();!(H=(K=M.next()).done);H=!0){f(K.value,t)}}catch(e){I=!0,J=e}finally{try{H||null==M.return||M.return()}finally{if(I)throw J}}var O=document.querySelectorAll(".block__icon-bg--router-1gb"),P=!0,Q=!1,R=void 0;try{for(var U,V=O[Symbol.iterator]();!(P=(U=V.next()).done);P=!0){f(U.value,t)}}catch(e){Q=!0,R=e}finally{try{P||null==V.return||V.return()}finally{if(Q)throw R}}var W=document.querySelectorAll(".block__points"),X=!0,Y=!1,Z=void 0;try{for(var $,ee=W[Symbol.iterator]();!(X=($=ee.next()).done);X=!0){f($.value,r)}}catch(e){Y=!0,Z=e}finally{try{X||null==ee.return||ee.return()}finally{if(Y)throw Z}}var re=document.querySelectorAll(".block__more-info"),te=!0,le=!1,oe=void 0;try{for(var ne,ae=re[Symbol.iterator]();!(te=(ne=ae.next()).done);te=!0){f(ne.value,t)}}catch(e){le=!0,oe=e}finally{try{te||null==ae.return||ae.return()}finally{if(le)throw oe}}}();
//# sourceMappingURL=scripts.js.map
