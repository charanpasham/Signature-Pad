(this.webpackJsonpconvasapp=this.webpackJsonpconvasapp||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},16:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(2),r=t.n(i),c=(t(14),t(3)),s=t(4),l=t(7),g=t(5),u=t(8),f=(t(15),t(16),t(6)),d=t.n(f),h=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(o)))).state={image:null},t.sigPad={},t.clear=function(){t.sigPad.clear(),t.setState({image:null})},t.trim=function(){var e=t.sigPad.getTrimmedCanvas().toDataURL("image/png");t.setState({image:e})},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("p",null,"Sign below"),o.a.createElement(d.a,{ref:function(n){e.sigPad=n},penColor:"green",canvasProps:{width:500,height:200,className:"sigCanvas"}}),o.a.createElement("button",{className:"clearBtn",onClick:this.clear},"Clear"),o.a.createElement("button",{onClick:this.trim},"Generate .png image below"),o.a.createElement("img",{className:"image",src:this.state.image,alt:"image"}))}}]),n}(a.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(h,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Signature-Pad",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Signature-Pad","/service-worker.js");m?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):v(e)}))}}()},9:function(e,n,t){e.exports=t(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.0c05a4d7.chunk.js.map