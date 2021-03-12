"use strict";var disableButton=function(){localStorage.removeItem("contentstackButtonEnabled")},closeModal=function(){document.getElementById("form-cs-btn-modal").remove()},addStyle=function(t){var o=0<arguments.length&&void 0!==t?t:"",e=document.createElement("style");e.innerHTML=o,document.body.appendChild(e)},showModal=function(t){var o='<div id="form-cs-btn-modal" class="cs-button-setup-modal"><div id="popup" class="cs-button-setup-content"> <span title="close" class="cs-button-setup-modal-close" onclick="closeModal();">&times;</span><form name="config_form" onsubmit="event.preventDefault();installButton();" class="cs-button-setup-modal-form"> <span class="cs-button-setup-modal-form-header">Configure Your Button</span><div class="cs-button-setup-form-field"> <label class="cs-field-label" for="api_key">Api Key</label> <input value="'.concat(0<arguments.length&&void 0!==t?t:"",'" required class="cs-text-box" id="api_key" type="text" name="api_key"></div><div class="cs-button-setup-form-field"> <label class="cs-field-label" for="button_position">Button Position</label> <select id="position-select" class="cs-position-select" name="button_position"><option value="bottom_right">Bottom Right</option><option value="bottom_left">Bottom Left</option><option value="top_right">Top Right</option><option value="top_left">Top Left</option> </select></div><div class="cs-button-setup-form-field cs-position-select-wrap"> <label class="cs-field-label" for="button_color">Select Button Color</label> <input type="color" id="button_color" class="cs-color-picker" name="button_color" value="#e44952"></div><div class="cs-button-setup-form-button-wrap"> <button class="cs-button-setup-form-button-submit">Enable</button></div></form></div></div>'),e=document.createElement("div");addStyle(".cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-message{display:block;font-size:16px;line-height:17px;text-align:center;color:#25c2a3;padding:10px 15px}.cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-svg-box{display:inline-block;position:relative;width:100%;margin:5% 0}.cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-svg-box .cs-button-setup-green-stroke{stroke:#25c2a3;width:100%}.cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-svg-box>.cs-button-setup-circular circle.path{stroke-dasharray:438;stroke-dashoffset:0;stroke-linecap:round;opacity:.4;animation:.7s draw-circle ease-out}.cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-svg-box>.cs-button-setup-success-checkmark{stroke-width:6.25;stroke-linecap:round;position:absolute;top:56px;left:40%}.cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-svg-box>.cs-button-setup-success-checkmark path{animation:1s draw-check ease-out}@keyframes draw-circle{0%{stroke-dasharray:0,438;stroke-dashoffset:0;opacity:1}80%{stroke-dasharray:438,438;stroke-dashoffset:0;opacity:1}100%{opacity:.4}}@keyframes draw-check{0%{stroke-dasharray:49,80;stroke-dashoffset:48;opacity:0}50%{stroke-dasharray:49,80;stroke-dashoffset:48;opacity:1}100%{stroke-dasharray:130,80;stroke-dashoffset:48}}.cs-button-setup-modal{font-family:sans-serif;display:block;position:fixed;z-index:1;padding-top:10%;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.cs-button-setup-modal>.cs-button-setup-content{background-color:#fefefe;margin:auto;border:1px solid #888;width:265px}.cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-modal-close{color:#aaa;float:right;font-size:28px;font-weight:700;margin-right:6px}.cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-modal-close:focus,.cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-modal-close:hover{color:#000;text-decoration:none;cursor:pointer}.cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-modal-form{padding:20px 0 0 0;margin:0 auto;width:220px}.cs-button-setup-modal>.cs-button-setup-content>.cs-button-setup-modal-form>.cs-button-setup-modal-form-header{color:#787981;font-size:20px;font-weight:600}.cs-button-setup-form-field.cs-position-select-wrap{width:fit-content;margin-bottom:20px}.cs-button-setup-form-field>.cs-field-label{display:block;margin-top:8px;font-size:14px;line-height:1.5;color:#748590;font-weight:600}.cs-button-setup-form-field>.cs-text-box{width:218px;height:35px;font-size:16px;border:1px solid #e6eced;color:#748590;background-color:#f7fbfc;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-clip:padding-box}.cs-button-setup-form-field>.cs-color-picker{z-index:1;position:relative;width:29px;height:29px}.cs-button-setup-form-field>.cs-position-select{width:220px;font-size:14px;border:1px solid #e6eced;height:40px;color:#748590;padding:0 4px}.cs-button-setup-form-button-wrap{float:right;margin-top:5%}.cs-button-setup-form-button-wrap>.cs-button-setup-form-button-submit{background-color:#25c2a3;color:#fff;padding:12px 10px;font-size:14px;display:inline-block;margin-bottom:0;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;vertical-align:middle;position:relative;top:-79px}"),e.innerHTML=o.trim(),document.body.appendChild(e.firstChild)},getParams=function(t){var o={},e=document.createElement("a");e.href=t;for(var n=e.search.substring(1).split("&"),s=0;s<n.length;s+=1){var c=n[s].split("=");o[c[0]]=decodeURIComponent(c[1])}return o},buttonAlignementMap={top_right:{horizontalAlignment:"right",verticalAlignment:"top"},top_left:{horizontalAlignment:"left",verticalAlignment:"top"},bottom_right:{horizontalAlignment:"right",verticalAlignment:"bottom"},bottom_left:{horizontalAlignment:"left",verticalAlignment:"bottom"}},loadButton=function(t,o){var e=o.apiKey,n=o.buttonColor,s=void 0===n?"#e44952":n,c=o.buttonPosition,a=void 0===c?"bottom_right":c;if(t&&e){var i=t.getAttribute("data-entry"),r=t.getAttribute("data-contenttype"),l=t.getAttribute("data-locale")||"en-us",u=document.getElementById("_contentstack_eidt_btn"),p=buttonAlignementMap[a],d=p.horizontalAlignment,b=p.verticalAlignment;if(u&&u.remove(),r&&i){var m="background-color:".concat(s,";position:fixed;").concat(d,":30px;").concat(b,":30px;width:60px;height:60px;border-radius:30px;-webkit-box-shadow:0 0 20px 0 rgba(255,255,255,1);-moz-box-shadow:0 0 20px 0 rgba(255,255,255,1);box-shadow:0 0 20px 0 rgba(255,255,255,1);text-indent:-9999px;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3e%3cpath d='M17.6 35.8l16.2-16.2 6.3 6.3C34.8 31.3 29.4 36.7 24 42.1c-2.1-2-4.3-4.2-6.4-6.3zM41.9 24.3l-6.4-6.4.9-.9c.7-.6 1.3-1.3 2-1.9 1.1-1 2.7-1 3.8 0 1 1 2.1 2 3.1 3.1.8.9.8 2.1-.1 3-1.1 1-2.1 2-3.3 3.1.1-.1.1-.1 0 0zM15.8 37.6l6.4 6.4c-.5.1-1.1.3-1.6.4-1.8.4-3.5.9-5.3 1.3-.7.2-1.2-.2-1-1 .5-2.4 1-4.7 1.5-7.1 0 .1 0 0 0 0z' fill='%23fff'/%3e%3c/svg%3e\");background-size:50px 50px;background-position:center center"),f=document.createElement("a");f.id="_contentstack_eidt_btn",f.innerHTML="Edit",f.setAttribute("style",m),f.setAttribute("target","blank"),f.href="https://app.contentstack.com/#!/stack/".concat(e,"/content-type/").concat(r,"/").concat(l,"/entry/").concat(i,"/edit"),document.body.appendChild(f)}}},installButton=function(){var t=document.forms.config_form.api_key.value,o=document.forms.config_form.button_color.value,e=document.forms.config_form.button_position.value;localStorage.setItem("contentstackButtonConfig",JSON.stringify({apiKey:t,buttonColor:o,buttonPosition:e})),localStorage.setItem("contentstackButtonEnabled",!0),loadButton(document.body,{apiKey:t,buttonColor:o,buttonPosition:e}),document.getElementById("popup").innerHTML='<div class="cs-button-setup-svg-box"> <svg class="cs-button-setup-circular cs-button-setup-green-stroke"> <circle class="path" cx="50%" cy="75" r="70" fill="none" stroke-width="5" stroke-miterlimit="10"/> </svg> <svg class="cs-button-setup-success-checkmark cs-button-setup-green-stroke"> <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)"> <path class="cs-button-setup-success-checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53"/> </g> </svg></div><div class="cs-button-setup-message"> <span>You have successfully configured your Contentstack button.</span></div>',setTimeout(closeModal,2200)};document.addEventListener("DOMContentLoaded",function(){var t=getParams(window.location.href),o="true"===t.enable_my_contentstack_button,e="true"===t.disable_my_contentstack_button,n=t.api_key;if(o)return showModal(n);e&&disableButton();var s=localStorage.getItem("contentstackButtonEnabled")||!1;if(document.body&&s){var c=JSON.parse(localStorage.getItem("contentstackButtonConfig")||"{}");loadButton(document.body,c),window.addEventListener("popstate",loadButton.bind(null,[document.body,c]))}return null},!1);