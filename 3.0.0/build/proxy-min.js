/*!build time : 2015-04-22 3:26:18 PM*/
KISSY.add("gallery/storage/1.1/conf",function(){var a=location.href.indexOf("if-debug=1")>-1,b=location.href.indexOf("if-debug-log=1")>-1,c="//gm.mmstat.com",d="//log.mmstat.com/ued.1.1.2?type=9&_gm:id=storage&v=1.1",e={DEBUG:a,DEBUG_LOG:b,SAM_PV:.001,TIMEOUT_STORAGE:3e3,PROXY:"//www.tmall.com/go/act/stp-tm.php",PROXY_TMALL:"//www.tmall.com/go/act/stp-tm.php",PROXY_TAOBAO:"//www.taobao.com/go/act/stp-tb.php",XD_TOKEN:"__ga_xd_token",UID_FROM:"__ga_xd_from11",UID_TO:"__ga_xd_to11",M:{G:d+"&t=g",P:d+"&t=p"},ARR:{ST_SET:c+"/tmallbrand.999.5",ST_GET:c+"/tmallbrand.999.6",ST_RM:c+"/tmallbrand.999.7",ST_CL:c+"/tmallbrand.999.8"},K:{ONLOAD:"onload",PROXY:"proxy",PREFIX:"prefix",XD_TIMEOUT:"xdTimeout",IFRAME_TIMEOUT:"iframeTimeout",IFRAME:"iframe",TOKEN:"token",XD:"xd",CALLBACK_LIST:"callbackList",CACHED_ACTION_LIST:"cachedActionList",PROXY_READY:"proxyReady"}};return e}),KISSY.add("gallery/storage/1.1/util",function(a,b){var c={log:function(){b.DEBUG_LOG&&window.console&&window.console.log&&window.console.log.apply&&window.console.log.apply(window.console,arguments)},fm:function(){if(0==arguments.length)return"";if(1==arguments.length)return arguments[0];var a,b=arguments[0];for(a=1;a<arguments.length;++a){var c=new RegExp("\\{"+(a-1)+"\\}","g");b=b.replace(c,arguments[a])}return b}},d=c;d.sendLog=function(a){d.send(d.fm(b.M.G,encodeURIComponent(location.href))),d.send(a)},d.send=function(a){if(a){var b="__st_"+ +new Date+Math.random(),c=new Image;window[b]=c,c.src=d.fm("{0}{1}r{2}=1",a,a.indexOf("?")>-1?"&":"?",+new Date),c.onload=function(){window[b]=null}}};var e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return d.getRndStr=function(a){for(var b,c=[],d=e.length,f=0;a>f;++f)b=e.charAt(Math.floor(Math.random()*d)),c.push(b);return c.join("")},d},{requires:["./conf"]}),KISSY.add("gallery/storage/1.1/xd",function(a,b,c,d,e){function f(){s?r.addEventListener?addEventListener("message",g,!1):r.attachEvent&&attachEvent("onmessage",g):v.onMessage(g)}function g(b){var e={};try{e=c.parse(b.data)}catch(f){return}var g=e[d.XD_TOKEN];a.each(u,function(a){if(g===a.get(k)&&d.UID_FROM in e&&d.UID_TO in e){var b=e[d.UID_TO];if(b){var c=t[b];if(clearTimeout(c),t[b]=0,!c)return}a.get(j)(e)}})}function h(a){var b=this;b._opt=a,u.push(b)}var i=0,j="receive",k="token",l="target",m="timeout",n="iframeTimeout",o=10,p=10,q=3e3,r=window,s=r.postMessage,t={},u=[],v={uid:0,hid:-1,q:[],tm:0,postMessage:function(a,b,c){var d=++v.uid,e=v.q,f={name:+new Date+""+d+"^"+document.domain+"&"+b,uid:d,target:a};e.push(f),v.tm||(v.tm=setInterval(function(){var a=v.q;if(!(0===a.length||a[0].uid<=v.hid)){var b=a[0];v.hid=b.uid,b.target.name=b.name}},p))},onMessage:function(a){function b(){var b=r.name;if(b!==c){v.q.shift(),c=b;var e=d.exec(b);if(!e)return;var f={origin:e[2],data:e[3]};a&&a(f)}}var c="",d=/^(\d+?)\^(.+?)&(.*?)$/;setInterval(b,o)}};return f(),a.augment(h,{send:function(b,e,f){function h(){var a={};a.origin="*";var e={};e.c=b.c||"",e[d.XD_TOKEN]=b[d.XD_TOKEN]||"",e[d.UID_FROM]=0,e[d.UID_TO]=0,a.data=c.stringify(e),g(a)}if(a.isObject(b)){var j=this,o=j.get(l),p=j.get(m)||q,r=++i;e=e||"*",b[d.XD_TOKEN]=j.get(k),b[d.UID_TO]=b[d.UID_FROM]||0,b[d.UID_FROM]=r;var u=c.stringify(b);f||(t[r]=setTimeout(function(){t[r]=0,h()},p)),j.get(n)?h():s?o.postMessage(u,e):v.postMessage(o,u,e)}},get:function(a){return this._opt[a]},set:function(a,b){this._opt[a]=b}}),h},{requires:["event","json","./conf","./util"]}),KISSY.add("gallery/storage/1.1/basic",function(a,b){return window.JSON=window.JSON||b,function(a){function c(){try{return i in a&&a[i]}catch(b){return!1}}function d(a){return function(){try{var b=Array.prototype.slice.call(arguments,0);b.unshift(f),k.appendChild(f),f.addBehavior("#default#userData"),f.load(i);var c=a.apply(g,b);return k.removeChild(f),c}catch(d){}}}function e(a){return a.replace(n,"___")}var f,g={},h=a.document,i="localStorage",j="__storejs__";if(g.disabled=!1,g.set=function(a,b){},g.get=function(a){},g.remove=function(a){},g.clear=function(){},g.transact=function(a,b,c){var d=g.get(a);null==c&&(c=b,b=null),"undefined"==typeof d&&(d=b||{}),c(d),g.set(a,d)},g.getAll=function(){},g.serialize=function(a){return b.stringify(a)},g.deserialize=function(a){if("string"!=typeof a)return void 0;try{return b.parse(a)}catch(c){return a||void 0}},c())f=a[i],g.set=function(a,b){return void 0===b?g.remove(a):(f.setItem(a,g.serialize(b)),b)},g.get=function(a){return g.deserialize(f.getItem(a))},g.remove=function(a){f.removeItem(a)},g.clear=function(){f.clear()},g.getAll=function(){for(var a={},b=0;b<f.length;++b){var c=f.key(b);a[c]=g.get(c)}return a};else if(h.documentElement.addBehavior){var k,l;try{l=new ActiveXObject("htmlfile"),l.open(),l.write('<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'),l.close(),k=l.w.frames[0].document,f=k.createElement("div")}catch(m){f=h.createElement("div"),k=h.body}var n=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");g.set=d(function(a,b,c){return b=e(b),void 0===c?g.remove(b):(a.setAttribute(b,g.serialize(c)),a.save(i),c)}),g.get=d(function(a,b){return b=e(b),g.deserialize(a.getAttribute(b))}),g.remove=d(function(a,b){b=e(b),a.removeAttribute(b),a.save(i)}),g.clear=d(function(a){var b=a.XMLDocument.documentElement.attributes;try{a.load(i)}catch(c){}for(var d,e=0;d=b[e];e++)a.removeAttribute(d.name);a.save(i)}),g.getAll=d(function(a){for(var b,c=a.XMLDocument.documentElement.attributes,d={},f=0;b=c[f];++f){var h=e(b.name);d[b.name]=g.deserialize(a.getAttribute(h))}return d})}try{g.set(j,j),g.get(j)!=j&&(g.disabled=!0),g.remove(j)}catch(m){g.disabled=!0}g.enabled=!g.disabled,"undefined"!=typeof module&&module.exports?module.exports=g:"function"==typeof define&&define.amd?define(g):a.__storejs=g}(window),window.__storejs},{requires:["json"]}),KISSY.add("gallery/storage/1.1/proxy",function(a,b,c,d,e,f,g){var h={},i=location.href;return h.init=function(){var b=new d({target:parent,token:i.indexOf("?")>-1?a.unparam(i.substring(i.indexOf("?")+1))[f.XD_TOKEN]:"",receive:function(a){var c=(a.p?a.p+"/":"/")+(a.k||""),d=a.v||"",g=a.m?e[a.m]:0;if(g){var h={};h[f.UID_FROM]=a[f.UID_FROM]||0,h.c=a.c||"",h.v=g(c,d),b.send(h,"*",!0)}}});Math.random()<f.SAM_PV&&g.send(g.fm(f.M.P,encodeURIComponent(location.href)))},h},{requires:["event","json","./xd","./basic","./conf","./util"]});