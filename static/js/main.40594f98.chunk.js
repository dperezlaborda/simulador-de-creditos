(this.webpackJsonpslider=this.webpackJsonpslider||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(10),c=n.n(r),o=(n(56),n(57),n(38)),s=n(96),u=n(98),i=n(91),d=n(95),j=n(6),b=function(e){var t=e.cuota,n=e.marksCuotas,a=e.sliderChangeC,l=e.handlerInputCuota,r=e.handleBlurCuota;return Object(j.jsxs)(i.a,{children:[Object(j.jsxs)(s.a,{pt:4,display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(j.jsx)("h4",{children:"Cuotas"}),Object(j.jsx)(d.a,{type:"currency",onChange:l,onBlur:r,value:t})]}),Object(j.jsx)(u.a,{value:"number"===typeof t?t:3,min:3,max:24,step:3,defaultValue:3,marks:n,onChange:a})]})},h=function(e){var t=e.monto,n=e.marksMonto,a=e.sliderChangeM,l=e.handlerInputM,r=e.handleBlurMonto;return Object(j.jsxs)(i.a,{children:[Object(j.jsxs)(s.a,{pt:2,display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(j.jsx)("h4",{children:"Monto Total"}),Object(j.jsx)(d.a,{type:"currency",onChange:l,onBlur:r,value:"$"+t})]}),Object(j.jsx)(u.a,{value:"number"===typeof t?t:5e3,min:5e3,max:5e4,step:500,defaultValue:5e3,marks:n,onChange:a})]})},x=n(94),O=n(97),p=function(e){var t=e.cuota,n=e.monto,a=Object(x.a)({root:{background:"linear-gradient(45deg, #000000 30%, #00010 90%)",textAlign:"justified",fontSize:12,borderRadius:3,border:0,color:"white",height:60,width:140,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(0, 50, 135, .3)"},label:{textTransform:"capitalize"}})();return Object(j.jsxs)("div",{children:[Object(j.jsxs)(s.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(j.jsx)("h4",{children:"CUOTA FIJA POR MES"}),Object(j.jsxs)("h4",{children:["$ ",(1.9798*n/t).toFixed(2)]})]}),Object(j.jsxs)(s.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(j.jsx)(O.a,{classes:{root:a.root,label:a.label},onClick:function(){return console.log("Obten\xe9 tu Cr\xe9dito")},children:"OBTEN\xc9 CR\xc9DITO"}),Object(j.jsx)(O.a,{classes:{root:a.root,label:a.label},onClick:function(){return console.log("Ver el detalle de tus Cuotas")},children:"VER DETALLE DE CUOTAS"})]})]})},f=[{value:3,label:"3"},{value:24,label:"24"}],C=[{value:5e3,label:"$5.000"},{value:5e4,label:"$50.000"}],g=function(){var e=Object(a.useState)(5e3),t=Object(o.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(3),c=Object(o.a)(r,2),u=c[0],i=c[1];return Object(j.jsxs)(s.a,{className:"card border-purple",children:[Object(j.jsx)("h4",{className:"title",children:" SIMUL\xc1 TU CR\xc9DITO "}),Object(j.jsx)(h,{monto:n,marksMonto:C,sliderChangeM:function(e,t){l(t)},handlerInputM:function(e){l(""===e.target.value?"":Number(e.target.value))},handleBlurMonto:function(){n<5e3?l(5e3):n>5e4&&l(5e4)}}),Object(j.jsx)(b,{cuota:u,marksCuotas:f,sliderChangeC:function(e,t){i(t)},handlerInputCuota:function(e){i(""===e.target.value?"":Number(e.target.value))},handleBlurCuota:function(){u<3?i(3):u>24&&i(24)}}),Object(j.jsx)(p,{cuota:u,monto:n})]})};var m=function(){return Object(j.jsx)("div",{className:"App on-dark",children:Object(j.jsx)(g,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),l(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.40594f98.chunk.js.map