!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("BlipWebSDK",[],factory):"object"==typeof exports?exports.BlipWebSDK=factory():root.BlipWebSDK=factory()}(this,function(){return function(modules){function hotDownloadUpdateChunk(chunkId){var head=document.getElementsByTagName("head")[0],script=document.createElement("script");script.type="text/javascript",script.charset="utf-8",script.src=__webpack_require__.p+""+chunkId+"."+hotCurrentHash+".hot-update.js",head.appendChild(script)}function hotDownloadManifest(callback){if("undefined"==typeof XMLHttpRequest)return callback(new Error("No browser support"));try{var request=new XMLHttpRequest,requestPath=__webpack_require__.p+""+hotCurrentHash+".hot-update.json";request.open("GET",requestPath,!0),request.timeout=1e4,request.send(null)}catch(err){return callback(err)}request.onreadystatechange=function(){if(4===request.readyState)if(0===request.status)callback(new Error("Manifest request to "+requestPath+" timed out."));else if(404===request.status)callback();else if(200!==request.status&&304!==request.status)callback(new Error("Manifest request to "+requestPath+" failed."));else{try{var update=JSON.parse(request.responseText)}catch(e){return void callback(e)}callback(null,update)}}}function hotCreateRequire(moduleId){function ensure(chunkId,callback){"ready"===hotStatus&&hotSetStatus("prepare"),hotChunksLoading++,__webpack_require__.e(chunkId,function(){function finishChunkLoading(){hotChunksLoading--,"prepare"===hotStatus&&(hotWaitingFilesMap[chunkId]||hotEnsureUpdateChunk(chunkId),0===hotChunksLoading&&0===hotWaitingFiles&&hotUpdateDownloaded())}try{callback.call(null,fn)}finally{finishChunkLoading()}})}var me=installedModules[moduleId];if(!me)return __webpack_require__;var fn=function(request){return me.hot.active?installedModules[request]?(installedModules[request].parents.indexOf(moduleId)<0&&installedModules[request].parents.push(moduleId),me.children.indexOf(request)<0&&me.children.push(request)):hotCurrentParents=[moduleId]:(console.warn("[HMR] unexpected require("+request+") from disposed module "+moduleId),hotCurrentParents=[]),__webpack_require__(request)};for(var name in __webpack_require__)Object.prototype.hasOwnProperty.call(__webpack_require__,name)&&(canDefineProperty?Object.defineProperty(fn,name,function(name){return{configurable:!0,enumerable:!0,get:function(){return __webpack_require__[name]},set:function(value){__webpack_require__[name]=value}}}(name)):fn[name]=__webpack_require__[name]);return canDefineProperty?Object.defineProperty(fn,"e",{enumerable:!0,value:ensure}):fn.e=ensure,fn}function hotCreateModule(moduleId){var hot={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(dep,callback){if("undefined"==typeof dep)hot._selfAccepted=!0;else if("function"==typeof dep)hot._selfAccepted=dep;else if("object"==typeof dep)for(var i=0;i<dep.length;i++)hot._acceptedDependencies[dep[i]]=callback;else hot._acceptedDependencies[dep]=callback},decline:function(dep){if("undefined"==typeof dep)hot._selfDeclined=!0;else if("number"==typeof dep)hot._declinedDependencies[dep]=!0;else for(var i=0;i<dep.length;i++)hot._declinedDependencies[dep[i]]=!0},dispose:function(callback){hot._disposeHandlers.push(callback)},addDisposeHandler:function(callback){hot._disposeHandlers.push(callback)},removeDisposeHandler:function(callback){var idx=hot._disposeHandlers.indexOf(callback);idx>=0&&hot._disposeHandlers.splice(idx,1)},check:hotCheck,apply:hotApply,status:function(l){return l?void hotStatusHandlers.push(l):hotStatus},addStatusHandler:function(l){hotStatusHandlers.push(l)},removeStatusHandler:function(l){var idx=hotStatusHandlers.indexOf(l);idx>=0&&hotStatusHandlers.splice(idx,1)},data:hotCurrentModuleData[moduleId]};return hot}function hotSetStatus(newStatus){hotStatus=newStatus;for(var i=0;i<hotStatusHandlers.length;i++)hotStatusHandlers[i].call(null,newStatus)}function toModuleId(id){var isNumber=+id+""===id;return isNumber?+id:id}function hotCheck(apply,callback){if("idle"!==hotStatus)throw new Error("check() is only allowed in idle status");"function"==typeof apply?(hotApplyOnUpdate=!1,callback=apply):(hotApplyOnUpdate=apply,callback=callback||function(err){if(err)throw err}),hotSetStatus("check"),hotDownloadManifest(function(err,update){if(err)return callback(err);if(!update)return hotSetStatus("idle"),void callback(null,null);hotRequestedFilesMap={},hotAvailibleFilesMap={},hotWaitingFilesMap={};for(var i=0;i<update.c.length;i++)hotAvailibleFilesMap[update.c[i]]=!0;hotUpdateNewHash=update.h,hotSetStatus("prepare"),hotCallback=callback,hotUpdate={};var chunkId=0;hotEnsureUpdateChunk(chunkId),"prepare"===hotStatus&&0===hotChunksLoading&&0===hotWaitingFiles&&hotUpdateDownloaded()})}function hotAddUpdateChunk(chunkId,moreModules){if(hotAvailibleFilesMap[chunkId]&&hotRequestedFilesMap[chunkId]){hotRequestedFilesMap[chunkId]=!1;for(var moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(hotUpdate[moduleId]=moreModules[moduleId]);0===--hotWaitingFiles&&0===hotChunksLoading&&hotUpdateDownloaded()}}function hotEnsureUpdateChunk(chunkId){hotAvailibleFilesMap[chunkId]?(hotRequestedFilesMap[chunkId]=!0,hotWaitingFiles++,hotDownloadUpdateChunk(chunkId)):hotWaitingFilesMap[chunkId]=!0}function hotUpdateDownloaded(){hotSetStatus("ready");var callback=hotCallback;if(hotCallback=null,callback)if(hotApplyOnUpdate)hotApply(hotApplyOnUpdate,callback);else{var outdatedModules=[];for(var id in hotUpdate)Object.prototype.hasOwnProperty.call(hotUpdate,id)&&outdatedModules.push(toModuleId(id));callback(null,outdatedModules)}}function hotApply(options,callback){function getAffectedStuff(module){for(var outdatedModules=[module],outdatedDependencies={},queue=outdatedModules.slice();queue.length>0;){var moduleId=queue.pop(),module=installedModules[moduleId];if(module&&!module.hot._selfAccepted){if(module.hot._selfDeclined)return new Error("Aborted because of self decline: "+moduleId);if(0===moduleId)return;for(var i=0;i<module.parents.length;i++){var parentId=module.parents[i],parent=installedModules[parentId];if(parent.hot._declinedDependencies[moduleId])return new Error("Aborted because of declined dependency: "+moduleId+" in "+parentId);outdatedModules.indexOf(parentId)>=0||(parent.hot._acceptedDependencies[moduleId]?(outdatedDependencies[parentId]||(outdatedDependencies[parentId]=[]),addAllToSet(outdatedDependencies[parentId],[moduleId])):(delete outdatedDependencies[parentId],outdatedModules.push(parentId),queue.push(parentId)))}}}return[outdatedModules,outdatedDependencies]}function addAllToSet(a,b){for(var i=0;i<b.length;i++){var item=b[i];a.indexOf(item)<0&&a.push(item)}}if("ready"!==hotStatus)throw new Error("apply() is only allowed in ready status");"function"==typeof options?(callback=options,options={}):options&&"object"==typeof options?callback=callback||function(err){if(err)throw err}:(options={},callback=callback||function(err){if(err)throw err});var outdatedDependencies={},outdatedModules=[],appliedUpdate={};for(var id in hotUpdate)if(Object.prototype.hasOwnProperty.call(hotUpdate,id)){var moduleId=toModuleId(id),result=getAffectedStuff(moduleId);if(!result){if(options.ignoreUnaccepted)continue;return hotSetStatus("abort"),callback(new Error("Aborted because "+moduleId+" is not accepted"))}if(result instanceof Error)return hotSetStatus("abort"),callback(result);appliedUpdate[moduleId]=hotUpdate[moduleId],addAllToSet(outdatedModules,result[0]);for(var moduleId in result[1])Object.prototype.hasOwnProperty.call(result[1],moduleId)&&(outdatedDependencies[moduleId]||(outdatedDependencies[moduleId]=[]),addAllToSet(outdatedDependencies[moduleId],result[1][moduleId]))}for(var outdatedSelfAcceptedModules=[],i=0;i<outdatedModules.length;i++){var moduleId=outdatedModules[i];installedModules[moduleId]&&installedModules[moduleId].hot._selfAccepted&&outdatedSelfAcceptedModules.push({module:moduleId,errorHandler:installedModules[moduleId].hot._selfAccepted})}hotSetStatus("dispose");for(var queue=outdatedModules.slice();queue.length>0;){var moduleId=queue.pop(),module=installedModules[moduleId];if(module){for(var data={},disposeHandlers=module.hot._disposeHandlers,j=0;j<disposeHandlers.length;j++){var cb=disposeHandlers[j];cb(data)}hotCurrentModuleData[moduleId]=data,module.hot.active=!1,delete installedModules[moduleId];for(var j=0;j<module.children.length;j++){var child=installedModules[module.children[j]];if(child){var idx=child.parents.indexOf(moduleId);idx>=0&&child.parents.splice(idx,1)}}}}for(var moduleId in outdatedDependencies)if(Object.prototype.hasOwnProperty.call(outdatedDependencies,moduleId))for(var module=installedModules[moduleId],moduleOutdatedDependencies=outdatedDependencies[moduleId],j=0;j<moduleOutdatedDependencies.length;j++){var dependency=moduleOutdatedDependencies[j],idx=module.children.indexOf(dependency);idx>=0&&module.children.splice(idx,1)}hotSetStatus("apply"),hotCurrentHash=hotUpdateNewHash;for(var moduleId in appliedUpdate)Object.prototype.hasOwnProperty.call(appliedUpdate,moduleId)&&(modules[moduleId]=appliedUpdate[moduleId]);var error=null;for(var moduleId in outdatedDependencies)if(Object.prototype.hasOwnProperty.call(outdatedDependencies,moduleId)){for(var module=installedModules[moduleId],moduleOutdatedDependencies=outdatedDependencies[moduleId],callbacks=[],i=0;i<moduleOutdatedDependencies.length;i++){var dependency=moduleOutdatedDependencies[i],cb=module.hot._acceptedDependencies[dependency];callbacks.indexOf(cb)>=0||callbacks.push(cb)}for(var i=0;i<callbacks.length;i++){var cb=callbacks[i];try{cb(outdatedDependencies)}catch(err){error||(error=err)}}}for(var i=0;i<outdatedSelfAcceptedModules.length;i++){var item=outdatedSelfAcceptedModules[i],moduleId=item.module;hotCurrentParents=[moduleId];try{__webpack_require__(moduleId)}catch(err){if("function"==typeof item.errorHandler)try{item.errorHandler(err)}catch(err){error||(error=err)}else error||(error=err)}}return error?(hotSetStatus("fail"),callback(error)):(hotSetStatus("idle"),void callback(null,outdatedModules))}function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1,hot:hotCreateModule(moduleId),parents:hotCurrentParents,children:[]};return modules[moduleId].call(module.exports,module,module.exports,hotCreateRequire(moduleId)),module.loaded=!0,module.exports}var parentHotUpdateCallback=this.webpackHotUpdateBlipWebSDK;this.webpackHotUpdateBlipWebSDK=function(chunkId,moreModules){hotAddUpdateChunk(chunkId,moreModules),parentHotUpdateCallback&&parentHotUpdateCallback(chunkId,moreModules)};var canDefineProperty=!1;try{Object.defineProperty({},"x",{get:function(){}}),canDefineProperty=!0}catch(x){}var hotCallback,hotUpdate,hotUpdateNewHash,hotApplyOnUpdate=!0,hotCurrentHash="14131cc4bc90d44935a2",hotCurrentModuleData={},hotCurrentParents=[],hotStatusHandlers=[],hotStatus="idle",hotWaitingFiles=0,hotChunksLoading=0,hotWaitingFilesMap={},hotRequestedFilesMap={},hotAvailibleFilesMap={},installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__.h=function(){return hotCurrentHash},hotCreateRequire(0)(0)}([function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _ChatBuilder=__webpack_require__(2);Object.defineProperty(exports,"ChatBuilder",{enumerable:!0,get:function(){return _interopRequireDefault(_ChatBuilder).default}});var _AuthType=__webpack_require__(11);Object.defineProperty(exports,"AuthType",{enumerable:!0,get:function(){return _interopRequireDefault(_AuthType).default}})},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Application=__webpack_require__(3),_Application2=_interopRequireDefault(_Application),ChatBuilder=function(){function ChatBuilder(){_classCallCheck(this,ChatBuilder),this._application=new _Application2.default}return _createClass(ChatBuilder,[{key:"withApiKey",value:function(apiKey){return this._application._apiKey=apiKey,this}},{key:"build",value:function(opts){this._application.openBlipThread(opts)}},{key:"destroy",value:function(){this._application&&(this._application.destroy(),this._application=null)}},{key:"sendMessage",value:function(message){this._application._sendMessage(message)}}]),ChatBuilder}();exports.default=ChatBuilder},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _parseOldOptionsFormat(opts,defaultOpts){return opts?opts.config||opts.window||opts.events?opts:{config:{authType:opts.authType||defaultOpts.config.authType,user:opts.user||defaultOpts.config.user},window:{target:opts.target||defaultOpts.window.target,title:opts.title||defaultOpts.window.title,iconPath:opts.iconPath||defaultOpts.window.iconPath,zIndex:opts.zIndex||defaultOpts.window.zIndex,widgetColor:opts.widgetColor||defaultOpts.window.widgetColor},events:{onEnter:opts.onEnter||defaultOpts.events.onEnter,onLeave:opts.onLeave||defaultOpts.events.onLeave}}:defaultOpts}function _getFromLocalStorage(name){return supportsLocalStorage()?localStorage.getItem(name):null}function _setToLocalStorage(name,value){supportsLocalStorage()&&localStorage.setItem(name,value)}function _receiveUserFromCommon(event){var origin=event.origin||event.originalEvent.origin;if(Application.IFRAMEURL.indexOf(origin)!==-1)if(event.data.code===_Constants2.default.COOKIE_DATA_CODE)_setToLocalStorage(_Constants2.default.USER_ACCOUNT_KEY,event.data.userAccount);else if(event.data.code===_Constants2.default.REQUEST_POST_MESSAGE_CODE){var iframe=document.getElementById("iframe-chat"),account=_getFromLocalStorage(_Constants2.default.USER_ACCOUNT_KEY),message={code:_Constants2.default.COOKIE_DATA_CODE,userAccount:account};iframe.contentWindow.postMessage(message,Application.IFRAMEURL),message={code:_Constants2.default.MENU_VISIBILITY_CODE,hideMenu:Application.options.window.hideMenu||_Constants2.default.SDK_DEFAULT_HIDE_MENU},iframe.contentWindow.postMessage(message,Application.IFRAMEURL)}}function supportsLocalStorage(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}function _isMobile(a){return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))}function _isIOS(a){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_style=__webpack_require__(4),_chatHeader=(_interopRequireDefault(_style),__webpack_require__(8)),_chatHeader2=_interopRequireDefault(_chatHeader),_chatFooter=__webpack_require__(9),_chatFooter2=_interopRequireDefault(_chatFooter),_Constants=__webpack_require__(10),_Constants2=_interopRequireDefault(_Constants),_AuthType=__webpack_require__(11),_AuthType2=_interopRequireDefault(_AuthType),Application=function(){function Application(){_classCallCheck(this,Application);var config=void 0,window=void 0,events=void 0;config={authType:_AuthType2.default.GUEST,user:{}},window={target:void 0,title:_Constants2.default.SDK_DEFAULT_TITLE,iconPath:_Constants2.default.SDK_DEFAULT_ICON_PATH,zIndex:_Constants2.default.SDK_DEFAULT_Z_INDEX,widgetColor:_Constants2.default.SDK_DEFAULT_WIDGET_COLOR,hideMenu:_Constants2.default.SDK_DEFAULT_HIDE_MENU},events={onEnter:function(){},onLeave:function(){}},Application.options={config:config,window:window,events:events},Application.IFRAMEURL=_Constants2.default.IFRAMEURL_LOCAL,Application.IFRAMEURL=_Constants2.default.IFRAMEURL_PRD;var chatEl=document.createElement("div");chatEl.id="take-chat",this.chatEl=chatEl}return _createClass(Application,[{key:"openBlipThread",value:function(opts){opts=_parseOldOptionsFormat(opts,Application.options);var chatOpts=_extends({},Application.options,opts);Application.options=chatOpts,this.buildChat(chatOpts)}},{key:"buildChat",value:function(opts){var _this=this,params="apikey="+this._apiKey+"&authType="+opts.config.authType;if(opts.config.authType===_AuthType2.default.DEV){if(!opts.config.user||!opts.config.user.id||!opts.config.user.password)return void console.error("User id and passoword must be defined when on DEV auth type");var userAccount={userIdentity:this._apiKey+"_"+opts.config.user.id,userPassword:btoa(opts.config.user.password),userName:opts.config.user.name,userEmail:opts.config.user.email,authType:opts.config.authType};_setToLocalStorage(_Constants2.default.USER_ACCOUNT_KEY,btoa(JSON.stringify(userAccount)),_Constants2.default.COOKIES_EXPIRATION)}this.chatIframe=document.createElement("iframe"),this.chatIframe.id="iframe-chat",this.chatIframe.src=Application.IFRAMEURL+"?"+params,window.addEventListener("message",_receiveUserFromCommon);var widgetMode=void 0===opts.window.target;if(widgetMode)!function(){_this.chatEl.innerHTML=_chatHeader2.default,_this.chatEl.innerHTML+=_chatFooter2.default,_this.chatEl.appendChild(_this.chatIframe),_this.chatEl.className="blip-hidden-chat",_this.chatEl.className+=" fixed-window";var isMobile=_isMobile(navigator.userAgent||navigator.vendor||window.opera);isMobile?(_this.chatIframe.width=window.innerWidth,_this.chatIframe.height=window.innerHeight-60,_this.chatEl.setAttribute("class","blip-hidden-chat mobile-closed-fixed-window")):(_this.chatIframe.width=300,_this.chatIframe.height=460),_this._setWindowOptions(opts.window);var body=document.getElementsByTagName("body")[0];body.appendChild(_this.chatEl);var closeBtn=document.getElementById("blip-close-btn");closeBtn.addEventListener("click",function(){if(0==_this.chatEl.getAttribute("class").indexOf("blip-hidden-chat")){if(isMobile){_this.chatEl.setAttribute("class","blip-show-chat mobile-open-fixed-window"),document.getElementsByClassName("blip-minimize")[0].style.visibility="visible";var html=document.getElementsByTagName("html")[0],_body=document.getElementsByTagName("body")[0];html.style.overflow=_body.style.overflow="hidden",html.style.height=_body.style.height="0",_isIOS()&&(_this.chatEl.style.position="absolute")}else _this.chatEl.setAttribute("class","blip-show-chat fixed-window");setTimeout(function(){opts.events.onEnter()},500)}else{if(isMobile){_this.chatEl.setAttribute("class","blip-hidden-chat mobile-closed-fixed-window"),document.getElementsByClassName("blip-minimize")[0].style.visibility="hidden";var _html=document.getElementsByTagName("html")[0],_body2=document.getElementsByTagName("body")[0];_html.style.overflow=_body2.style.overflow="",_html.style.height=_body2.style.height="",_isIOS()&&(_this.chatEl.style.position="fixed")}else _this.chatEl.setAttribute("class","blip-hidden-chat fixed-window");setTimeout(function(){opts.events.onLeave()},500)}})}();else{this.chatEl.className="target-window",this.chatEl.appendChild(this.chatIframe),this.chatIframe.className+=" target-window";var chatTarget=document.getElementById(opts.window.target);chatTarget.appendChild(this.chatEl)}}},{key:"destroy",value:function(){if(void 0!==Application.options.window.target){var element=document.getElementById(Application.options.window.target);element.removeChild(this.chatEl)}else{var body=document.getElementsByTagName("body")[0];body.removeChild(this.chatEl)}}},{key:"_setWindowOptions",value:function(windowOpts){this._setChatTitle(windowOpts.title),this._setChatIcon(windowOpts.iconPath),this._setZIndex(windowOpts.zIndex),this._setWidgetColor(windowOpts.widgetColor)}},{key:"_setChatTitle",value:function(title){var chatTitle=title||_Constants2.default.SDK_DEFAULT_TITLE;this.chatEl.querySelector("#chat-header-text").innerHTML=chatTitle}},{key:"_setChatIcon",value:function(iconPath){var chatIconPath=iconPath||_Constants2.default.SDK_DEFAULT_ICON_PATH;this.chatEl.querySelector("#chat-header-icon").src=chatIconPath}},{key:"_setZIndex",value:function(value){var zIndex=value||_Constants2.default.SDK_DEFAULT_Z_INDEX;this.chatEl.style.zIndex=zIndex}},{key:"_setWidgetColor",value:function(color){color||_Constants2.default.SDK_DEFAULT_WIDGET_COLOR;this.chatEl.style.backgroundColor=color}},{key:"_sendMessage",value:function(message){({code:_Constants2.default.SEND_MESSAGE_CODE,content:message});document.getElementById("iframe-chat").contentWindow.postMessage(message,Application.IFRAMEURL)}}]),Application}();exports.default=Application},function(module,exports,__webpack_require__){var content=__webpack_require__(5);"string"==typeof content&&(content=[[module.id,content,""]]);var update=__webpack_require__(7)(content,{});content.locals&&(module.exports=content.locals),content.locals||module.hot.accept(5,function(){var newContent=__webpack_require__(5);"string"==typeof newContent&&(newContent=[[module.id,newContent,""]]),update(newContent)}),module.hot.dispose(function(){update()})},function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(6)(),exports.push([module.id,"#take-chat{background:#546e7a;color:#fff;overflow:hidden;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.42857143}#take-chat iframe{border:0;width:100%}.fixed-window{padding:40px 0 14px;right:30px}.fixed-window,.mobile-closed-fixed-window{border-radius:10px 10px 0 0;box-shadow:0 0 20px 1px rgba(0,0,0,.26);position:fixed;bottom:0;width:300px;transition:.7s}.mobile-closed-fixed-window{padding:40px 0 0;right:0}.mobile-open-fixed-window{border-radius:0;box-shadow:0 0 20px 1px rgba(0,0,0,.26);padding:40px 0 0;position:fixed;bottom:0;right:0;width:100%;height:calc(100% - 40px);transition:.7s}.target-window{position:relative;width:100%;height:100%}#blip-close-btn{padding-top:5px;position:absolute;top:6px;left:10px;width:100%;font-size:12px;font-weight:700;cursor:pointer}#blip-close-btn .blip-logo{max-width:18px;width:18px;margin-right:5px;vertical-align:middle}.blip-footer{position:absolute;bottom:1px;right:5px;font-size:12px;font-weight:700;color:#fff}.blip-hidden-chat.mobile-closed-fixed-window{transform:translateY(calc(100% - 40px));height:100%}.mobile-closed-fixed-window #iframe-chat,.mobile-open-fixed-window #iframe-chat{height:100%}.mobile-closed-fixed-window .blip-footer,.mobile-open-fixed-window .blip-footer{display:none}.blip-hidden-chat.fixed-window{transform:translateY(480px)}.blip-show-chat{bottom:0}.blip-minimize{visibility:hidden;float:right;margin-right:25px;width:18px}",""])},function(module,exports){module.exports=function(){var list=[];return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,styleElement){var head=getHeadElement(),lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling):head.appendChild(styleElement):head.insertBefore(styleElement,head.firstChild),styleElementsInsertedAtTop.push(styleElement);else{if("bottom"!==options.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");head.appendChild(styleElement)}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);idx>=0&&styleElementsInsertedAtTop.splice(idx,1)}function createStyleElement(options){var styleElement=document.createElement("style");return styleElement.type="text/css",insertStyleElement(options,styleElement),styleElement}function createLinkElement(options){var linkElement=document.createElement("link");return linkElement.rel="stylesheet",insertStyleElement(options,linkElement),linkElement}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options)),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(styleElement=createLinkElement(options),update=updateLink.bind(null,styleElement),remove=function(){removeStyleElement(styleElement),styleElement.href&&URL.revokeObjectURL(styleElement.href)}):(styleElement=createStyleElement(options),update=applyToTag.bind(null,styleElement),remove=function(){removeStyleElement(styleElement)});return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media;if(media&&styleElement.setAttribute("media",media),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}function updateLink(linkElement,obj){var css=obj.css,sourceMap=obj.sourceMap;sourceMap&&(css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */");var blob=new Blob([css],{type:"text/css"}),oldSrc=linkElement.href;linkElement.href=URL.createObjectURL(blob),oldSrc&&URL.revokeObjectURL(oldSrc)}var stylesInDom={},memoize=function(fn){var memo;return function(){return"undefined"==typeof memo&&(memo=fn.apply(this,arguments)),memo}},isOldIE=memoize(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0]}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){options=options||{},"undefined"==typeof options.singleton&&(options.singleton=isOldIE()),"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){
var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},function(module,exports){module.exports="<div id=blip-close-btn> <img id=chat-header-icon class=blip-logo src=https://takenetomni.blob.core.windows.net/media-db/blip-app-white.png> <span id=chat-header-text></span> <img class=blip-minimize src=https://takenetomni.blob.core.windows.net/media-db/window-minimize.png> </div> "},function(module,exports){module.exports="<span class=blip-footer>Powered by blip.ai</span> "},function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Constants=function(){function Constants(){_classCallCheck(this,Constants)}return _createClass(Constants,null,[{key:"USER_ACCOUNT_KEY",get:function(){return btoa("blipSdkUAccount")}},{key:"IFRAMEURL_LOCAL",get:function(){return"http://localhost:3000/"}},{key:"IFRAMEURL_HMG",get:function(){return"https://hmg-sdkcommon.blip.ai/"}},{key:"IFRAMEURL_PRD",get:function(){return"https://sdkcommon.blip.ai/"}},{key:"COOKIE_DATA_CODE",get:function(){return"BlipSdkCookieData"}},{key:"SEND_MESSAGE_CODE",get:function(){return"SendMessage"}},{key:"SDK_DEFAULT_TITLE",get:function(){return"Estamos online"}},{key:"SDK_DEFAULT_ICON_PATH",get:function(){return"https://takenetomni.blob.core.windows.net/media-db/blip-app-white.png"}},{key:"SDK_DEFAULT_WIDGET_COLOR",get:function(){return"#546E7A"}},{key:"SDK_DEFAULT_Z_INDEX",get:function(){return 16000001}},{key:"SDK_DEFAULT_HIDE_MENU",get:function(){return!1}},{key:"REQUEST_POST_MESSAGE_CODE",get:function(){return"RequestCookie"}},{key:"COOKIES_EXPIRATION",get:function(){return 365}},{key:"MENU_VISIBILITY_CODE",get:function(){return"BlipSdkMenuVisibility"}}]),Constants}();exports.default=Constants},function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),AuthType=function(){function AuthType(){_classCallCheck(this,AuthType)}return _createClass(AuthType,null,[{key:"GUEST",get:function(){return"Guest"}},{key:"LOGIN",get:function(){return"Login"}},{key:"DEV",get:function(){return"Dev"}}]),AuthType}();exports.default=AuthType}])});