import{b as j}from"./chunk-3PC4UD63.js";import"./chunk-5DY23JTE.js";import{e as q,f as P,g as R,j as U,k as Y}from"./chunk-YBF2TWEV.js";import{J as k,K as $,a as B,j as F,v as g,z as Q}from"./chunk-MIPPZD3I.js";import"./chunk-XSSXK7EZ.js";import"./chunk-Q26KJI4S.js";import{J as O,K as D}from"./chunk-LAQJW4FS.js";import{q as N,r as V}from"./chunk-2XHDTA27.js";import"./chunk-6HBPSAEV.js";import{$b as S,Bb as d,Ca as c,Cb as l,Da as s,Mb as _,Ob as I,Tb as w,Xa as m,_b as A,jb as C,la as T,mb as f,pb as x,qb as y,ra as v,rb as b,sb as E,tb as a,ub as u,vb as M,zb as h}from"./chunk-GPTLXEAQ.js";function W(t,n){if(t&1){let r=h();a(0,"div",1),M(1,"app-card-product",5),a(2,"div",6)(3,"p-inputNumber",7),d("onInput",function(i){let o=c(r).$implicit,p=l(3);return s(p.handleQuantityChange(i,o.ITEM))}),u(),a(4,"p-button",8),d("onClick",function(){let i=c(r).$implicit,o=l(3);return s(o.handleRemoveItem(i.ITEM))}),u()()()}if(t&2){let r=n.$implicit;m(),f("product",r.ITEM),m(2),f("ngModel",r.QUANTITY)("showButtons",!0)("min",1)("max",100)}}function z(t,n){if(t&1){let r=h();a(0,"div",0),b(1,W,5,5,"div",1,y),u(),a(3,"p",2),_(4," \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: "),a(5,"span",3),_(6),u()(),a(7,"p-button",4),d("onClick",function(){c(r);let i=l(),o=l();return s(o.handleCreateOrder(i))}),u()}if(t&2){let r=l(),e=l();m(),E(r),m(5),I(" ",e.totalQuantity()," ")}}function G(t,n){t&1&&_(0),t&2&&I(" ","\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430"," ")}function H(t,n){t&1&&C(0,z,8,1)(1,G,1,1),t&2&&x(n.length!==0?0:1)}var pt=(()=>{let n=class n{constructor(){this.store=T(F);let e=this.store.select(k);this.totalQuantity=B(e,{initialValue:0})}ngOnInit(){this.cart$=this.store.select($)}handleQuantityChange(e,i){let o=e.value;o&&this.store.dispatch(g.quantityItemChange({ITEM:i,QUANTITY:+o}))}handleRemoveItem(e){e&&this.store.dispatch(g.removeItemFromCart({ITEM:e}))}handleCreateOrder(e){this.store.dispatch(Q.createOrder({order:{cart:e,id:1,status:"NEW",uid:"123"}}))}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=v({type:n,selectors:[["app-cart"]],standalone:!0,features:[w],decls:2,vars:3,consts:[[1,"catalog"],[1,"card","flex","flex-column","mb-4"],[1,"font-bold","mb-4"],[1,"font-normal"],["label","\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C",3,"onClick"],[1,"mb-4","align-self-center",3,"product"],[1,"flex","flex-column","align-items-center"],["mode","decimal","inputId","minmax-buttons",1,"mb-4",3,"onInput","ngModel","showButtons","min","max"],["label","\u0423\u0434\u0430\u043B\u0438\u0442\u044C","severity","danger",3,"onClick"]],template:function(i,o){if(i&1&&(C(0,H,2,1),A(1,"async")),i&2){let p;x((p=S(1,1,o.cart$))?0:-1,p)}},dependencies:[V,N,D,O,Y,U,R,q,P,j]});let t=n;return t})();export{pt as CartComponent};
