(()=>{"use strict";var e={607:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(601),l=t.n(o),r=t(314),a=t.n(r)()(l());a.push([e.id,'body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    background-color: rgb(36, 36, 36);\n}\n\nh2 {\n    color: #d4d4d4;\n}\n\nheader {\n    background-color: #3b3b3b;\n    color: white;\n    padding: 1rem;\n    text-align: center;\n    position: sticky;\n    top: 0;\n    z-index: 1000;\n}\n\nmain {\n    display: flex;\n    flex: 1;\n    overflow: hidden;\n}\n\n.checkbox-list {\n    flex: 2;\n    margin-right: 1rem;\n    overflow-y: auto;\n    max-height: calc(100vh - 80px);\n    padding: 1rem;\n    border: 1px solid #1a1a1a;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.checkbox-list ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n.checkbox-list li {\n    margin: 0.5rem 0;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 0.5rem;\n    border: 1px solid rgb(78, 78, 78);\n    border-radius: 5px;\n    background-color: rgb(49, 49, 49);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\n}\n\n.checkbox-list li img {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    object-fit: cover;\n}\n\n.checkbox-list li label {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.checkbox-list li label .username {\n    font-weight: bold;\n    color: #d4d4d4;\n}\n\n.checkbox-list li label .fullname {\n    font-size: 0.9rem;\n    color: #d4d4d4;\n}\n\n.menu {\n    flex: 1;\n    background-color: rgb(49, 49, 49);\n    padding: 1rem;\n    border: 1px solid rgb(44, 44, 44);\n    height: calc(100vh - 80px);\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n    position: sticky;\n    top: 80px;\n}\n\n.menu ul {\n    list-style-type: none;\n    padding: 0;\n}\n\n.menu ul li {\n    margin: 0.5rem 0;\n}\n\n.menu ul li a {\n    text-decoration: none;\n    color: #d4d4d4;\n    transition: color 0.3s;\n}\n\n.menu ul li a:hover {\n    color: #cf3ca3;\n}\n\n.elemento-usuario {\n    flex-direction: row;\n\n}\n\np {\n    color: #d4d4d4;\n}\n\n.div-li-names {\n    align-items: center;\n    align-content: center;\n}\n\n.username-text {\n    font-size: 25px;\n}\n\n.fullname-text {\n    font-size: 20px;\n}\n\ninput[type="file"] {\n    display: none;\n}\n\n.custom-button {\n    width: 100%;\n    background: linear-gradient(135deg, #ff7eb3, #ff758c);\n    border: none;\n    border-radius: 8px;\n    color: #fff;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    padding: 12px 24px;\n    letter-spacing: 1px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(255, 117, 140, 0.4);\n}\n\n.custom-button:hover {\n    background: linear-gradient(135deg, #ff758c, #ff7eb3);\n    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3), 0 3px 6px rgba(255, 117, 140, 0.6);\n    transform: translateY(-2px);\n}\n\n.custom-button:active {\n    transform: translateY(0);\n    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(255, 117, 140, 0.4);\n}\n\n/* \n.unfollow-button{\n    background: linear-gradient(135deg, #eb4f69, #ff3636);\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(255, 117, 117, 0.4);\n}\n\n.unfollow-button:hover{\n    background: linear-gradient(135deg, #ec657b, #ff6363);\n}\n\n.unfollow-button:active{\n    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(255, 117, 117, 0.4);\n} */\n\n.menu-index {\n    width: 80%;\n    margin: 0 auto; \n    padding: 20px; \n    border-radius: 12px; \n    display: flex; \n    flex-direction: column; \n    gap: 16px; \n}\n\n\n.menu-index ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 16px; \n}\n\n\n.menu-index li {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n\n',""]);const i=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,l,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),l&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=l):d[4]="".concat(l)),n.push(d))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},a=[],i=0;i<e.length;i++){var s=e[i],c=o.base?s[0]+o.base:s[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=l(f,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function l(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,l){var r=o(e=e||[],l=l||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var i=t(r[a]);n[i].references--}for(var s=o(e,l),c=0;c<r.length;c++){var d=t(r[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=s}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var l=void 0!==t.layer;l&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,l&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var l=n[o];if(void 0!==l)return l.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}function o(e,n){const t=JSON.stringify(e,null,2),o=new Blob([t],{type:"application/json"}),l=URL.createObjectURL(o),r=document.createElement("a");r.href=l,r.download=n,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(l)}async function l(e,n){try{const t=await fetch("https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables="+encodeURIComponent(JSON.stringify({id:e,include_reel:!0,fetch_mutual:!0,first:50,after:n}))),o=await t.json(),l=o.data.user.edge_followed_by.page_info.has_next_page,r=o.data.user.edge_followed_by.page_info.end_cursor;return{followers_page:o.data.user.edge_followed_by.edges.map((({node:e})=>({id:e.id,username:e.username,followed_by_viewer:e.followed_by_viewer,full_name:e.full_name,profile_pic_url:e.profile_pic_url}))),has_next:l,after:r}}catch(e){return console.error("Error fetching followers page:",e),{followers_page:[],has_next:!1,after:null}}}function r(e){return e.forEach((e=>{if(!("id"in e&&"username"in e&&"full_name"in e&&"profile_pic_url"in e))return console.log("LISTA NO VÁLIDA"),!1})),console.log("LISTA VALIDADA CORRECTAMENTE"),!0}function a(e){const n=e.target.files[0];return n?new Promise(((e,t)=>{const o=new FileReader;o.onload=function(n){try{const t=JSON.parse(n.target.result);console.log(t),e(t)}catch(e){t("Error al procesar el archivo JSON: "+e.message)}},o.onerror=function(){t("Error al leer el archivo.")},o.readAsText(n)})):Promise.reject("No se seleccionó ningún archivo.")}function i(){const e=new Date;return`date-${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}_${String(e.getHours()).padStart(2,"0")}hs-${String(e.getMinutes()).padStart(2,"0")}min-${String(e.getSeconds()).padStart(2,"0")}s`}async function s(e){try{const n=function(){const e=`; ${document.cookie}`.split("; ds_user_id=");return 2!==e.length?null:e.pop().split(";").shift()}();if(!n)return void console.error("User ID not found in cookies");let t=null,o=!0,r=0;for(;o;){const{followers_page:a,has_next:i,after:s}=await l(n,t);e.actualFollowers=e.actualFollowers.concat(a),o=i,t=s,r>=5&&o?(r=0,console.log("Esperando 10 segundos antes de continuar"),await new Promise((e=>setTimeout(e,1e4)))):o&&(r+=1,await new Promise((e=>setTimeout(e,500))))}}catch(e){console.log({err:e})}}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var c=t(72),d=t.n(c),u=t(825),p=t.n(u),f=t(659),m=t.n(f),h=t(56),g=t.n(h),b=t(540),w=t.n(b),x=t(113),y=t.n(x),v=t(607),_={};_.styleTagTransform=y(),_.setAttributes=g(),_.insert=m().bind(null,"head"),_.domAPI=p(),_.insertStyleElement=w(),d()(v.A,_),v.A&&v.A.locals&&v.A.locals;const E=new class{constructor(e){this.interfaz=e,this.actualFollowers=[],this.oldFollowers=[],this.newFollowers=[],this.leftFollowers=[]}buscar_left_followers(){let e=!1;for(let n=0;n<this.oldFollowers.length;n++){const t=this.oldFollowers[n];e=!1;for(let n=0;n<this.actualFollowers.length;n++)if(this.actualFollowers[n].id===t.id){e=!0;break}e||this.leftFollowers.push(t)}}buscar_new_followers(){let e=!1;for(let n=0;n<this.actualFollowers.length;n++){const t=this.actualFollowers[n];e=!1;for(let n=0;n<this.oldFollowers.length;n++){const o=this.oldFollowers[n];if(t.id===o.id){e=!0;break}}e||this.newFollowers.push(t)}}}(new class{constructor(e){console.log("ENTRA A INTERFAZ CONSTRUCTOR"),document.body.innerHTML=e}render_comparacion_followers(e,n){const t=e.length>0,o=n.length>0,l=document.getElementById("user-list"),r=document.getElementById("menu-buttons-list");document.getElementById("h1-list").textContent="New and Left Followers";let a="There are no left followers";t&&(a="Left Followers");const i=document.createElement("h2");i.textContent=a,l.appendChild(i),t&&this.add_users_to_list(e,"user-list"),a="There are no new followers",o&&(a="New Followers");const s=document.createElement("h2");s.textContent=a,l.appendChild(s),o&&this.add_users_to_list(n,"user-list");const c=document.createElement("button");c.id="button-download-all-followers",c.textContent="Download Actual Followers",c.classList.add("custom-button");const d=document.createElement("button");d.id="button-download-left-followers",d.textContent="Download Left Followers",d.classList.add("custom-button");const u=document.createElement("button");u.id="button-download-new-followers",u.textContent="Download New Followers",u.classList.add("custom-button");const p=document.createElement("li"),f=document.createElement("li"),m=document.createElement("li");p.appendChild(d),f.appendChild(u),m.appendChild(c),r.appendChild(p),r.appendChild(f),r.appendChild(m)}render_actual_followers(e){console.log("Entra a Render Actual Followers"),document.getElementById("h1-list").textContent="Actual Followers";const n=e.length>0,t=document.getElementById("menu-buttons-list");if(n)this.add_users_to_list(e,"user-list");else{const e=document.getElementById("user-list"),n=document.createElement("h2");n.textContent="No users found",e.appendChild(n)}const o=document.createElement("button");o.id="button-download-all-followers",o.textContent="Download Actual Followers",o.classList.add("custom-button");const l=document.createElement("li");l.appendChild(o),t.appendChild(l)}render_uploaded_list(e){document.getElementById("h1-list").textContent="Uploaded Users";const n=e.length>0;if(document.getElementById("menu-buttons-list"),n)this.add_users_to_list(e,"user-list");else{const e=document.getElementById("user-list"),n=document.createElement("h2");n.textContent="No users found",e.appendChild(n)}}insertarListHTML(){document.body.innerHTML='\n            <div id="list-html">\n                <header>\n                    <h1 id="h1-list">Loading Users List... This may take a few seconds</h1>\n                </header>\n                <main>\n                    <section class="checkbox-list" id="checkbox-list-base">\n                        <ul id="user-list">\n                        </ul>\n                    </section>\n                    <aside class="menu">\n                        <h2>Actions</h2>\n                        <ul id="menu-buttons-list">\n                        </ul>\n                    </aside>\n                </main>\n            </div>\n        '}add_users_to_list(e,n){const t=document.getElementById(n);e.forEach((e=>{const n=document.createElement("li"),o=document.createElement("input");o.type="checkbox",o.id=`user-${e.id}`;const l=document.createElement("label");l.setAttribute("for",`user-${e.id}`),l.className="elemento-usuario";const r=document.createElement("img");r.src=e.profile_pic_url,r.alt=`${e.username}`;const a=document.createElement("div");a.className="div-li-names";const i=document.createElement("p");i.className="username-text",i.textContent=`@${e.username}`;const s=document.createElement("p");s.className="fullname",s.textContent=e.full_name,l.appendChild(r),a.appendChild(i),a.appendChild(s),l.appendChild(a),n.appendChild(o),n.appendChild(l),t.appendChild(n)}))}eliminarElemento(e){const n=document.getElementById(e);n&&n.remove()}}('<!DOCTYPE html> <html lang="es"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <title>Follower Tracker</title> </head> <body> <div id="index-html"> <header> <h1>Follower Tracker</h1> </header> <div class="menu-index"> <ul> <li> <button id="solo-listar" class="custom-button">List Current Followers</button> </li> <li> <label for="file-input-listar-y-comparar" class="custom-button"> <span>Compare Current Followers with Existing List</span> </label> <input id="file-input-listar-y-comparar" type="file" accept=".json"/> </li> <li> <label for="file-input-only-lista" class="custom-button"> <span>Only Upload Existing List</span> </label> <input id="file-input-only-lista" type="file" accept=".json"/> </li> </ul> </div> </div> </body> </html>'));document.body.addEventListener("change",(async e=>{if(e.target&&"file-input-listar-y-comparar"===e.target.id){async function n(){let n=!0,t=null;try{t=await a(e)}catch{n=!1}n&&t&&r(t)&&(E.interfaz.insertarListHTML(),await s(E),E.oldFollowers=t,E.buscar_left_followers(),E.buscar_new_followers(),E.interfaz.render_comparacion_followers(E.leftFollowers,E.newFollowers))}n()}if(e.target&&"file-input-only-lista"===e.target.id){async function t(){let n=!0,t=null;try{t=await a(e)}catch{n=!1}n&&t&&r(t)&&(E.interfaz.insertarListHTML(),E.interfaz.render_uploaded_list(t))}t()}})),document.addEventListener("click",(e=>{if("solo-listar"===e.target.id){async function n(){E.interfaz.insertarListHTML(),await s(E),E.interfaz.render_actual_followers(E.actualFollowers)}n()}if("button-download-all-followers"===e.target.id){const t=i();o(E.actualFollowers,`actual_followers_${t}.json`)}if("button-download-left-followers"===e.target.id){const l=i();o(E.leftFollowers,`left_followers_${l}.json`)}if("button-download-new-followers"===e.target.id){const r=i();o(E.newFollowers,`new_followers_${r}.json`)}}))})();