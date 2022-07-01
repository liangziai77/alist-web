;(function(){function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e2){throw _e2;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e3){didErr=true;err=_e3;},f:function f(){try{if(!normalCompletion&&it.return!=null)it.return();}finally{if(didErr)throw err;}}};}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}System.register(['./vendor-legacy.e12b8ebf.js','./index.esm-legacy.909c6dbe.js','./index-legacy.4040728f.js'],function(exports){'use strict';var useTranslation,React,useToast,Box,Button,Input,Textarea,admin;return{setters:[function(module){useTranslation=module.j;React=module.R;useToast=module.h;Box=module.n;Button=module.G;Input=module.I;Textarea=module.au;},function(module){admin=module.b;},function(){}],execute:function execute(){function download(filename,data){var blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});var url=URL.createObjectURL(blob);var a=document.createElement("a");a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);}var NO_BACKUP_SETTINGS=["version","password"];var data={accounts:[],settings:[],metas:[]};var BackupRestore=exports('default',function(){var _useTranslation=useTranslation(),t=_useTranslation.t;var _React$useState=React.useState(""),_React$useState2=_slicedToArray(_React$useState,2),log=_React$useState2[0],setLog=_React$useState2[1];var addLog=function addLog(msg){setLog(function(log2){return"".concat(log2,"\n").concat(msg);});};var toast=useToast();var fail=function fail(msg){toast({title:t(msg),status:"error",duration:3e3,isClosable:true});};var backup=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var _data$settings$find;var resp1,res1,resp2,res2,resp3,res3;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:setLog("get settings...");_context.next=3;return admin.get("settings");case 3:resp1=_context.sent;res1=resp1.data;if(!(res1.code!==200)){_context.next=10;break;}fail(res1.message);return _context.abrupt("return");case 10:addLog("get settings success");data.settings=res1.data;data.settings=data.settings.filter(function(item){return!NO_BACKUP_SETTINGS.includes(item.key);});case 13:addLog("get accounts...");_context.next=16;return admin.get("accounts");case 16:resp2=_context.sent;res2=resp2.data;if(!(res2.code!==200)){_context.next=23;break;}fail(res2.message);return _context.abrupt("return");case 23:addLog("get accounts success");data.accounts=res2.data;case 25:addLog("get metas...");_context.next=28;return admin.get("metas");case 28:resp3=_context.sent;res3=resp3.data;if(!(res3.code!==200)){_context.next=35;break;}fail(res3.message);return _context.abrupt("return");case 35:addLog("get metas success");data.metas=res3.data;case 37:addLog("download backup file...");download("".concat(((_data$settings$find=data.settings.find(function(item){return item.key==="title";}))===null||_data$settings$find===void 0?void 0:_data$settings$find.value)||"alist",".json"),data);case 39:case"end":return _context.stop();}}},_callee);}));return function backup(){return _ref.apply(this,arguments);};}();var restore=/*#__PURE__*/function(){var _ref2=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){var fileInput;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:setLog("choose data file...");fileInput=document.querySelector("#restore-file");fileInput.click();case 3:case"end":return _context2.stop();}}},_callee2);}));return function restore(){return _ref2.apply(this,arguments);};}();var onRestoreFileChange=function onRestoreFileChange(e){var files=e.target.files;var file=files[0];if(!files||!file){return;}var reader=new FileReader();reader.onload=/*#__PURE__*/function(){var _ref3=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(e2){var data2,resp1,res1,_iterator,_step,account,resp2,res2,_iterator2,_step2,meta,resp3,res3;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:data2=JSON.parse(reader.result);addLog("restore settings...");_context3.next=4;return admin.post("settings",data2.settings);case 4:resp1=_context3.sent;res1=resp1.data;if(!(res1.code!==200)){_context3.next=9;break;}fail(res1.message);return _context3.abrupt("return");case 9:addLog("restore settings success");addLog("restore accounts...");_iterator=_createForOfIteratorHelper(data2.accounts);_context3.prev=12;_iterator.s();case 14:if((_step=_iterator.n()).done){_context3.next=26;break;}account=_step.value;_context3.next=18;return admin.post("account/create",_objectSpread(_objectSpread({},account),{},{id:0}));case 18:resp2=_context3.sent;res2=resp2.data;if(!(res2.code!==200)){_context3.next=23;break;}addLog("failed to restore account:[".concat(account.name,"],the reason is [").concat(res2.message,"]"));return _context3.abrupt("continue",24);case 23:addLog("restore account:[".concat(account.name,"] success"));case 24:_context3.next=14;break;case 26:_context3.next=31;break;case 28:_context3.prev=28;_context3.t0=_context3["catch"](12);_iterator.e(_context3.t0);case 31:_context3.prev=31;_iterator.f();return _context3.finish(31);case 34:addLog("finish restore accounts");addLog("restore metas...");_iterator2=_createForOfIteratorHelper(data2.metas);_context3.prev=37;_iterator2.s();case 39:if((_step2=_iterator2.n()).done){_context3.next=51;break;}meta=_step2.value;_context3.next=43;return admin.post("meta/create",_objectSpread(_objectSpread({},meta),{},{id:0}));case 43:resp3=_context3.sent;res3=resp3.data;if(!(res3.code!==200)){_context3.next=48;break;}addLog("failed to restore meta:[".concat(meta.path,"],the reason is [").concat(res3.message,"]"));return _context3.abrupt("continue",49);case 48:addLog("restore meta:[".concat(meta.path,"] success"));case 49:_context3.next=39;break;case 51:_context3.next=56;break;case 53:_context3.prev=53;_context3.t1=_context3["catch"](37);_iterator2.e(_context3.t1);case 56:_context3.prev=56;_iterator2.f();return _context3.finish(56);case 59:addLog("finish restore metas");toast({title:t("restore success"),status:"success",duration:3e3,isClosable:true});case 61:case"end":return _context3.stop();}}},_callee3,null,[[12,28,31,34],[37,53,56,59]]);}));return function(_x){return _ref3.apply(this,arguments);};}();reader.readAsText(file);};return/* @__PURE__ */React.createElement(Box,null,/* @__PURE__ */React.createElement(Button,{colorScheme:"green",onClick:backup},t("Backup")),/* @__PURE__ */React.createElement(Button,{ml:"2",onClick:restore},t("Restore")),/* @__PURE__ */React.createElement(Input,{display:"none",type:"file",id:"restore-file",onChange:onRestoreFileChange}),/* @__PURE__ */React.createElement(Textarea,{readOnly:true,rows:23,mt:"2",value:log}));});}};});})();
