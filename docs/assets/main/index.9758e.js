window.__require=function t(e,r,o){function n(i,a){if(!r[i]){if(!e[i]){var l=i.split("/");if(l=l[l.length-1],!e[l]){var p="function"==typeof __require&&__require;if(!a&&p)return p(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+i+"'")}i=l}var u=r[i]={exports:{}};e[i][0].call(u.exports,function(t){return n(e[i][1][t]||t)},u,u.exports,t,e,r,o)}return r[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<o.length;i++)n(o[i]);return n}({fruit:[function(t,e,r){"use strict";cc._RF.push(e,"fb0d7/l7KlGvYi8XM6D5r5x","fruit");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),n=this&&this.__decorate||function(t,e,r,o){var n,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,r,i):n(e,r))||i);return c>3&&i&&Object.defineProperty(e,r,i),i};Object.defineProperty(r,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,a=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cherryAtls=null,e.beansAtls=null,e.orangeAtls=null,e}return o(e,t),e.prototype.onLoad=function(){},e.prototype.randFruit=function(t){var e=[this.beansAtls,this.cherryAtls,this.orangeAtls];t>e.length&&(t=e.length);var r=Math.floor(Math.random()*t);this.node.getComponent(cc.Sprite).spriteFrame=e[r]},n([a(cc.SpriteFrame)],e.prototype,"cherryAtls",void 0),n([a(cc.SpriteFrame)],e.prototype,"beansAtls",void 0),n([a(cc.SpriteFrame)],e.prototype,"orangeAtls",void 0),e=n([i],e)}(cc.Component);r.default=l,cc._RF.pop()},{}],game:[function(t,e,r){"use strict";cc._RF.push(e,"dfc0dua3p1PW6Jp4Ty1ZtSj","game");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),n=this&&this.__decorate||function(t,e,r,o){var n,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,r,i):n(e,r))||i);return c>3&&i&&Object.defineProperty(e,r,i),i},c=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var o=Array(t),n=0;for(e=0;e<r;e++)for(var c=arguments[e],i=0,a=c.length;i<a;i++,n++)o[n]=c[i];return o};Object.defineProperty(r,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,l=i.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cherryAtls=null,e.beansAtls=null,e.orangeAtls=null,e.button1=null,e.fruitPrefab=null,e.ctrlAreaNode=null,e.hintlabel=null,e.Scores=0,e}return o(e,t),e.prototype.onLoad=function(){var t=this;this.initMap();var e=this.ctrlAreaNode.childrenCount;console.log(e),this.button1.node.on("click",function(){return t.nextFruit()}),this.node.getComponent(cc.Sprite)},e.prototype.initMap=function(){for(var t=0;t<15;t++){var e=cc.instantiate(this.fruitPrefab);e.getComponent("fruit").randFruit(15),this.ctrlAreaNode.addChild(e),console.log()}},e.prototype.nextFruit=function(){var t=c(new Array(15)).fill(!1);this.Scores-=10;var e=this.ctrlAreaNode,r=[this.beansAtls,this.cherryAtls,this.orangeAtls];e.children.forEach(function(t){return t.scale=1});for(var o=function(o){var c=0;n.schedule(function(){var n=this;this.button1.enabled=!1;var i=e.children[o].getComponent(cc.Sprite).spriteFrame.name;for(c++;i==e.children[o].getComponent(cc.Sprite).spriteFrame.name;)e.children[o].getComponent(cc.Sprite).spriteFrame=r[Math.floor(3*Math.random())];console.log(c),31==c&&14===o&&e.children.forEach(function(e,r){e.getComponent(cc.Sprite).spriteFrame.name===n.cherryAtls.name&&(n.Scores+=2,t[r]=!0,cc.tween(e).to(1,{scale:2}).call(function(){t[r]=!1,t.every(function(t){return!t})&&(n.button1.enabled=!0)}).start())})},.1,30)},n=this,i=0;i<15;++i)o(i)},e.prototype.update=function(){this.hintlabel.string="Scores: "+this.Scores},n([l(cc.SpriteFrame)],e.prototype,"cherryAtls",void 0),n([l(cc.SpriteFrame)],e.prototype,"beansAtls",void 0),n([l(cc.SpriteFrame)],e.prototype,"orangeAtls",void 0),n([l(cc.Button)],e.prototype,"button1",void 0),n([l(cc.Prefab)],e.prototype,"fruitPrefab",void 0),n([l(cc.Node)],e.prototype,"ctrlAreaNode",void 0),n([l(cc.Label)],e.prototype,"hintlabel",void 0),e=n([a],e)}(cc.Component);r.default=p,cc._RF.pop()},{}]},{},["fruit","game"]);