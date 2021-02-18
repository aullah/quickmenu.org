(()=>{"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function n(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}var s=function(){function t(){e(this,t)}return n(t,[{key:"createNode",value:function(e,t,n){n=n||!1;var s=document.createElement(e);return s.className=t,n&&(s.innerHTML=n),s}},{key:"exists",value:function(e){return void 0!==e&&null!=e}},{key:"wrap",value:function(e,t){e.parentNode.insertBefore(t,e),t.appendChild(e)}}]),t}();new(function(){function t(){return e(this,t),this.helper=new s,this.elements={},this.elements.overlay,this.elements.container,this.elements.nav,this.elements.menu,this.elements.btnOpen,this.elements.btnClose,this.init()}return n(t,[{key:"init",value:function(){return this.helper.exists(document.querySelector(".quick-menu.overlay"))||document.querySelector("body").prepend(this.helper.createNode("div","quick-menu overlay")),this.elements.overlay=document.getElementsByClassName("quick-menu overlay").item(0),this.elements.nav=document.getElementsByClassName("quick-menu navigation").item(0),"NAV"==this.elements.nav.nodeName&&(this.helper.wrap(this.elements.nav,this.helper.createNode("div",this.elements.nav.className)),this.elements.nav.removeAttribute("class")),this.elements.container=document.getElementsByClassName("quick-menu navigation").item(0),this.elements.nav=this.elements.container.querySelector("nav"),this.helper.exists(this.elements.container.querySelector(".menu"))||this.helper.wrap(this.elements.nav,this.helper.createNode("div","menu")),this.elements.menu=this.elements.container.querySelector(".menu"),this.helper.exists(this.elements.container.querySelector(".button"))||this.elements.container.prepend(this.helper.createNode("div","button","Quick Menu")),this.elements.btnOpen=this.elements.container.querySelector(".button"),this.helper.exists(this.elements.menu.querySelector(".menu-close"))||this.elements.menu.append(this.helper.createNode("div","menu-close","Close")),this.elements.btnClose=this.elements.menu.querySelector(".menu-close"),this.listen()}},{key:"listen",value:function(){var e=this;return this.elements.btnOpen.addEventListener("click",(function(){e.open()})),this.elements.btnClose.addEventListener("click",(function(){e.close()})),this.elements.overlay.addEventListener("click",(function(){e.close()})),this.elements.nav.querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(){e.close()}))})),this}},{key:"open",value:function(){return this.elements.btnOpen.classList.add("hide"),this.elements.btnOpen.classList.remove("show"),this.elements.menu.classList.add("show"),this.elements.overlay.classList.add("active"),this}},{key:"close",value:function(){return this.elements.btnOpen.classList.remove("hide"),this.elements.btnOpen.classList.add("show"),this.elements.menu.classList.remove("show"),this.elements.overlay.classList.remove("active"),this}},{key:"theme",value:function(){return this}}]),t}()),document.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(function(e){let t=e.target.getAttribute("href");"#"==t.charAt(0)&&(e.preventDefault(),1==t.length?window.scroll({top:0,left:0,behavior:"smooth"}):document.querySelector(t).scrollIntoView({behavior:"smooth"}))}))}))})();