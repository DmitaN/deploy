import{a as U,b as Y}from"./chunk-JSKF3OIN.js";import"./chunk-SMSVGNIQ.js";import"./chunk-5DY23JTE.js";import{d as Q,e as $,f as O}from"./chunk-AQYYFZDX.js";import{G as I,J as D,O as q,P as R,a as V,j as k}from"./chunk-KGF5TQCZ.js";import"./chunk-NJC4F6AZ.js";import"./chunk-C2WEBDJN.js";import{u as B,v as F}from"./chunk-QAZ4GNVJ.js";import{q as S,r as N}from"./chunk-2XHDTA27.js";import"./chunk-EETEBSGF.js";import{$b as A,Bb as _,Ca as p,Cb as l,Da as c,Mb as m,Ob as C,Tb as M,Xa as d,_b as w,jb as f,la as T,mb as b,pb as x,qb as E,ra as y,rb as g,sb as v,tb as a,ub as u,zb as h}from"./chunk-GPTLXEAQ.js";function j(t,n){if(t&1){let r=h();a(0,"div",0)(1,"p",4),m(2),u(),a(3,"div")(4,"p-inputNumber",5),_("onInput",function(i){let o=p(r).$implicit,s=l(3);return c(s.handleQuantityChange(i,o.ITEM))}),u(),a(5,"p-button",6),_("onClick",function(){let i=p(r).$implicit,o=l(3);return c(o.handleRemoveItem(i.ITEM))}),u()()()}if(t&2){let r=n.$implicit;d(2),C(" ",r.ITEM.mark," "),d(2),b("ngModel",r.QUANTITY)("showButtons",!0)("min",1)("max",100)}}function P(t,n){if(t&1){let r=h();g(0,j,6,5,"div",0,E),a(2,"p",1),m(3," \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: "),a(4,"span",2),m(5),u()(),a(6,"p-button",3),_("onClick",function(){p(r);let i=l(),o=l();return c(o.handleCreateOrder(i))}),u()}if(t&2){let r=l(),e=l();v(r),d(5),C(" ",e.totalQuantity()," ")}}function W(t,n){t&1&&m(0),t&2&&C(" ","\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430"," ")}function z(t,n){t&1&&f(0,P,7,1)(1,W,1,1),t&2&&x(n.length!==0?0:1)}var lt=(()=>{let n=class n{constructor(){this.store=T(k);let e=this.store.select(q);this.totalQuantity=V(e,{initialValue:0})}ngOnInit(){this.cart$=this.store.select(R)}handleQuantityChange(e,i){let o=e.value;o&&this.store.dispatch(I.quantityItemChange({ITEM:i,QUANTITY:+o}))}handleRemoveItem(e){e&&this.store.dispatch(I.removeItemFromCart({ITEM:e}))}handleCreateOrder(e){this.store.dispatch(D.createOrder({order:{cart:e,id:1,status:"NEW",uid:"123"}}))}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=y({type:n,selectors:[["app-cart"]],standalone:!0,features:[M],decls:2,vars:3,consts:[[1,"card"],[1,"font-bold","mb-4"],[1,"font-normal"],["label","\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C",3,"onClick"],[1,"font-bold"],["mode","decimal","inputId","minmax-buttons","styleClass","w-full",1,"mb-4","w-full",3,"onInput","ngModel","showButtons","min","max"],["label","\u0423\u0434\u0430\u043B\u0438\u0442\u044C",3,"onClick"]],template:function(i,o){if(i&1&&(f(0,z,2,1),w(1,"async")),i&2){let s;x((s=A(1,1,o.cart$))?0:-1,s)}},dependencies:[N,S,F,B,Y,U,O,Q,$]});let t=n;return t})();export{lt as CartComponent};
