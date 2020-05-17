(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),c=n.n(a),i=n(6),s=n(1),l=n(15),u=n(16),d=n(4),h=n(5),f=n(7),b=n(8),p=function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,r)))},g=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(p,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},m=function(e){e.searchField;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},E=function(e){var t=e.children;return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},t)},v=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(o.a.Component),w=o.a.memo((function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends"))})),O=(n(27),function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));return a?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement(w,null),o.a.createElement(m,{searchChange:n}),o.a.createElement(E,null,o.a.createElement(v,null,o.a.createElement(g,{robots:c}),";")))}}]),n}(o.a.Component)),y=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(O),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=n(2),C={searchField:""},k={robots:[],isPending:!1,error:""},_=(n(28),n(29),Object(l.createLogger)(),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(j.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(j.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(j.a)({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object(j.a)({},e,{isPending:!1,error:t.payload});default:return e}}})),T=Object(s.d)(_,Object(s.a)(u.a));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:T},o.a.createElement(y,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.06c5f61d.chunk.js.map