(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n(15),c=n(21),i=n(39),u=n(12),l=n(40),s=n(33),p=n(34);!function(e){e.ADD_NEW_NOTE="NOTES_LIST/ADD_NEW_NOTE",e.ADD_NEW_NOTE_IN_PROGRESS="NOTES_LIST/ADD_NEW_NOTE_IN_PROGRESS",e.ADD_NEW_NOTE_COMPLETED="NOTES_LIST/ADD_NEW_COMPLETED",e.ADD_NEW_NOTE_FAILED="NOTES_LIST/ADD_NEW_NOTE_FAILED",e.OPEN_NOTE="NOTES_LIST/OPEN_NOTE",e.OPEN_NOTE_IN_PROGRESS="NOTES_LIST/OPEN_NOTE_IN_PROGRESS",e.OPEN_NOTE_COMPLETED="NOTES_LIST/OPEN_NOTE_COMPLETED",e.OPEN_NOTE_FAILED="NOTES_LIST/OPEN_NOTE_FAILED",e.UPDATE_NOTE="NOTES_LIST/UPDATE_NOTE",e.UPDATE_NOTE_IN_PROGRESS="NOTES_LIST/UPDATE_NOTE_IN_PROGRESS",e.UPDATE_NOTE_COMPLETED="NOTES_LIST/UPDATE_NOTE_COMPLETED",e.UPDATE_NOTE_FAILED="NOTES_LIST/UPDATE_NOTE_FAILED",e.DELETE_NOTE="NOTES_LIST/DELETE_NOTE",e.DELETE_NOTE_IN_PROGRESS="NOTES_LIST/DELETE_NOTE",e.DELETE_NOTE_COMPLETED="NOTES_LIST/DELETE_NOTE_COMPLETED",e.DELETE_NOTE_FAILED="NOTES_LIST/DELETE_NOTE_FAILED",e.TOGGLE_EDIT_MODE="NOTES_LIST/TOGGLE_EDIT_MODE",e.LOAD_NOTES="NOTES_LIST/LOAD_NOTES",e.SAVE_NOTES="NOTES_LIST/SAVE_NOTES",e.SET_NOTES="NOTES_LIST/SET_NOTES"}(r||(r={}));var E,d=r;!function(e){e[e.FAILED=-1]="FAILED",e[e.NONE=0]="NONE",e[e.REQUESTED=1]="REQUESTED",e[e.IN_PROGRESS=2]="IN_PROGRESS",e[e.COMPLETED=3]="COMPLETED"}(E||(E={}));var O=E,f={list:[],addNewNote:{status:O.NONE,error:null},deleteNote:{status:O.NONE,error:null},openNote:{status:O.NONE,error:null,noteId:null,editMode:!1},updateNote:{status:O.NONE,error:null}},N=Object(p.a)(function(e,t){switch(t.type){case d.ADD_NEW_NOTE:e.addNewNote.status=O.REQUESTED,e.addNewNote.error=null;break;case d.ADD_NEW_NOTE_IN_PROGRESS:e.addNewNote.status=O.IN_PROGRESS;break;case d.ADD_NEW_NOTE_FAILED:e.addNewNote.status=O.FAILED,e.addNewNote.error=t.payload.error;break;case d.ADD_NEW_NOTE_COMPLETED:e.addNewNote.status=O.COMPLETED,e.list.push(t.payload.newNote);break;case d.DELETE_NOTE:e.deleteNote.status=O.REQUESTED;break;case d.DELETE_NOTE_IN_PROGRESS:e.deleteNote.status=O.IN_PROGRESS;break;case d.DELETE_NOTE_FAILED:e.deleteNote.status=O.FAILED,e.deleteNote.error=t.payload.error;break;case d.DELETE_NOTE_COMPLETED:e.deleteNote.status=O.COMPLETED,e.list.splice(t.payload.index,1);break;case d.OPEN_NOTE:e.openNote.status=O.REQUESTED,e.openNote.editMode=!1;break;case d.OPEN_NOTE_IN_PROGRESS:e.openNote.status=O.IN_PROGRESS;break;case d.OPEN_NOTE_FAILED:e.openNote.status=O.FAILED,e.openNote.error=t.payload.error;break;case d.OPEN_NOTE_COMPLETED:e.openNote.status=O.COMPLETED,e.openNote.noteId=t.payload.noteId;break;case d.UPDATE_NOTE:e.updateNote.status=O.REQUESTED;break;case d.UPDATE_NOTE_IN_PROGRESS:e.updateNote.status=O.IN_PROGRESS;break;case d.UPDATE_NOTE_FAILED:e.updateNote.status=O.FAILED,e.updateNote.error=t.payload.error;break;case d.UPDATE_NOTE_COMPLETED:e.updateNote.status=O.COMPLETED,e.list[t.payload.noteIndex]=t.payload.note;break;case d.TOGGLE_EDIT_MODE:e.openNote.editMode=t.payload.editMode;break;case d.SET_NOTES:e.list=t.payload.notes}},f),_=n(5),T=n(35),b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},y=function(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},h="RMN.notes",g=function(e){return e.notesList.list};function D(){var e,t,n;return y(this,function(r){switch(r.label){case 0:return r.trys.push([0,5,,7]),[4,Object(_.d)({type:d.ADD_NEW_NOTE_IN_PROGRESS})];case 1:return r.sent(),e=(new Date).valueOf(),t={content:"",title:e,createTs:e,updatedTs:e,noteId:Object(T.v4)()},[4,Object(_.d)({type:d.ADD_NEW_NOTE_COMPLETED,payload:{newNote:t}})];case 2:return r.sent(),[4,Object(_.b)(500)];case 3:return r.sent(),[4,Object(_.d)({type:d.SAVE_NOTES})];case 4:return r.sent(),[3,7];case 5:return n=r.sent(),console.error(n),[4,Object(_.d)({type:d.ADD_NEW_NOTE_FAILED,payload:{error:n.toString()}})];case 6:return r.sent(),[3,7];case 7:return[2]}})}function m(e){var t,n;return y(this,function(r){switch(r.label){case 0:t=e.payload,r.label=1;case 1:return r.trys.push([1,4,,6]),[4,Object(_.d)({type:d.DELETE_NOTE_IN_PROGRESS})];case 2:if(r.sent(),t.list.length<t.index||t.list[t.index].noteId!==t.noteId)throw new Error("Invalid Index");return[4,Object(_.d)({type:d.DELETE_NOTE_COMPLETED,payload:t})];case 3:return r.sent(),[3,6];case 4:return n=r.sent(),[4,Object(_.d)({type:d.DELETE_NOTE_FAILED,payload:{error:n.description}})];case 5:return r.sent(),[3,6];case 6:return[2]}})}function x(e){var t;return y(this,function(n){switch(n.label){case 0:t=e.payload,n.label=1;case 1:return n.trys.push([1,3,,5]),[4,Object(_.d)({type:d.OPEN_NOTE_COMPLETED,payload:t})];case 2:return n.sent(),[3,5];case 3:return n.sent(),[4,Object(_.d)({type:d.OPEN_NOTE_FAILED,payload:t})];case 4:return n.sent(),[3,5];case 5:return[2]}})}function S(e){var t,n,r,o,a;return y(this,function(c){switch(c.label){case 0:return t=e.payload,[4,Object(_.e)(g)];case 1:n=c.sent(),c.label=2;case 2:for(c.trys.push([2,8,,10]),r=-1,o=0;o<n.length;o+=1)if(n[o].noteId===t.note.noteId){r=o;break}return-1===r?[3,6]:(a=t.note.content.split("\n")[0],[4,Object(_.d)({type:d.UPDATE_NOTE_COMPLETED,payload:{noteIndex:r,note:b({},t.note,{title:a})}})]);case 3:return c.sent(),[4,Object(_.b)(500)];case 4:return c.sent(),[4,Object(_.d)({type:d.SAVE_NOTES})];case 5:return c.sent(),[3,7];case 6:throw new Error("Note not found");case 7:return[3,10];case 8:return c.sent(),[4,Object(_.d)({type:d.UPDATE_NOTE_FAILED,payload:t})];case 9:return c.sent(),[3,10];case 10:return[2]}})}function L(){var e,t,n;return y(this,function(r){switch(r.label){case 0:if(!(e=window.localStorage.getItem(h)))return[3,5];r.label=1;case 1:return r.trys.push([1,4,,5]),(t=JSON.parse(e)).length?[4,Object(_.d)({type:d.SET_NOTES,payload:{notes:t}})]:[3,3];case 2:r.sent(),r.label=3;case 3:return[3,5];case 4:return n=r.sent(),console.error(n),[3,5];case 5:return[2]}})}function v(){var e,t;return y(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Object(_.e)(g)];case 1:return e=n.sent(),window.localStorage.setItem(h,JSON.stringify(e)),[3,3];case 2:return t=n.sent(),console.error(t),[3,3];case 3:return[2]}})}function P(){var e,t,n,r,o,a;return y(this,function(c){switch(c.label){case 0:return e=d.ADD_NEW_NOTE,t=d.DELETE_NOTE,n=d.OPEN_NOTE,r=d.UPDATE_NOTE,o=d.LOAD_NOTES,a=d.SAVE_NOTES,[4,Object(_.f)(n,x)];case 1:return c.sent(),[4,Object(_.f)(r,S)];case 2:return c.sent(),[4,Object(_.f)(t,m)];case 3:return c.sent(),[4,Object(_.f)(e,D)];case 4:return c.sent(),[4,Object(_.f)(o,L)];case 5:return c.sent(),[4,Object(_.f)(a,v)];case 6:return c.sent(),[2]}})}var I,w,j,A,k,M,R,C,U,G,F,W,H,$,z,B,Q,V=n(6),J=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},q=Object(V.c)("div")(I||(I=J(["\n    display: flex;\n    flex-direction: row;\n"],["\n    display: flex;\n    flex-direction: row;\n"]))),K=Object(V.c)("div")(w||(w=J(["\n    display: flex;\n    flex-direction: column;\n"],["\n    display: flex;\n    flex-direction: column;\n"]))),X=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Y=Object(V.c)(q)(j||(j=X(["\n  padding: 0;\n  height: 100%;\n"],["\n  padding: 0;\n  height: 100%;\n"]))),Z=Object(V.c)(K)(A||(A=X(["\n  flex: 0.3;\n  border: 1px solid ",";\n"],["\n  flex: 0.3;\n  border: 1px solid ",";\n"])),function(e){return e.theme.colors.border}),ee=Object(V.c)(K)(k||(k=X(["\n  padding: 5px;\n  cursor: pointer;\n  border-bottom: 1px dotted ",";\n  &:last-child {\n    border-bottom: none;\n  }\n"],["\n  padding: 5px;\n  cursor: pointer;\n  border-bottom: 1px dotted ",";\n  &:last-child {\n    border-bottom: none;\n  }\n"])),function(e){return e.theme.colors.border}),te=Object(V.c)("div")(M||(M=X(["\n  padding: 2px;\n  font-size: 14px;\n  font-weight: bold;\n"],["\n  padding: 2px;\n  font-size: 14px;\n  font-weight: bold;\n"]))),ne=Object(V.c)("div")(R||(R=X(["\n  padding: 2px;\n  font-size: 12px;\n"],["\n  padding: 2px;\n  font-size: 12px;\n"]))),re=Object(V.c)("div")(C||(C=X(["\n  flex: 0.7;\n  padding-left: 1px;\n"],["\n  flex: 0.7;\n  padding-left: 1px;\n"]))),oe=Object(V.c)(q)(U||(U=X(["\n  padding: 5px;\n  flex: 1;\n  background-color: ",";\n  color: ",";\n  height: 40px;\n  max-height: 40px;\n"],["\n  padding: 5px;\n  flex: 1;\n  background-color: ",";\n  color: ",";\n  height: 40px;\n  max-height: 40px;\n"])),function(e){return e.theme.colors.primaryHoverBackground},function(e){return e.theme.colors.primaryHoverText}),ae=Object(V.c)(q)(G||(G=X(["\n  padding: 5px;\n  flex: 0.6;\n  align-items: center;\n  justify-content: flex-end;\n"],["\n  padding: 5px;\n  flex: 0.6;\n  align-items: center;\n  justify-content: flex-end;\n"]))),ce=Object(V.c)(q)(F||(F=X(["\n  padding: 5px;\n  flex: 1;\n  background-color: ",";\n  color: ",";\n  height: 40px;\n  max-height: 40px;\n"],["\n  padding: 5px;\n  flex: 1;\n  background-color: ",";\n  color: ",";\n  height: 40px;\n  max-height: 40px;\n"])),function(e){return e.theme.colors.primaryHoverBackground},function(e){return e.theme.colors.primaryHoverText}),ie=Object(V.c)(q)(W||(W=X(["\n  padding: 5px;\n  flex: 0.6;\n  align-items: center;\n  justify-content: flex-end;\n  height: 30px;\n  max-height: 30px;\n"],["\n  padding: 5px;\n  flex: 0.6;\n  align-items: center;\n  justify-content: flex-end;\n  height: 30px;\n  max-height: 30px;\n"]))),ue=Object(V.c)(q)(H||(H=X(["\n  padding: 5px;\n  flex: 0.4;\n  align-items: center;\n  justify-content: end;\n  flex-direction: row-reverse;\n"],["\n  padding: 5px;\n  flex: 0.4;\n  align-items: center;\n  justify-content: end;\n  flex-direction: row-reverse;\n"]))),le=Object(V.c)(q)($||($=X(["\n  height: 20px;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 8px;\n  border: 1px solid ",";\n  cursor: pointer;\n"],["\n  height: 20px;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 8px;\n  border: 1px solid ",";\n  cursor: pointer;\n"])),function(e){return e.theme.colors.borderHover}),se=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},pe=(z=function(e,t){return(z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}z(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Ee=(Object(V.c)("div")(B||(B=se(["\n  color: ",";\n  border: 1px solid ",";\n  font-weight: ",";\n  width: 150px;\n  height: 25px;\n  line-height: 1.5;\n  text-align: center;\n  padding: 5px;\n  cursor: pointer;\n  z-index: 1;\n  transition: background-color 0.5s;\n  \n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"],["\n  color: ",";\n  border: 1px solid ",";\n  font-weight: ",";\n  width: 150px;\n  height: 25px;\n  line-height: 1.5;\n  text-align: center;\n  padding: 5px;\n  cursor: pointer;\n  z-index: 1;\n  transition: background-color 0.5s;\n  \n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),function(e){return e.theme.colors.primaryHoverText},function(e){return e.theme.colors.border},function(e){return e.theme.fontWeights.primaryText},function(e){return e.theme.colors.primaryHoverBackground},function(e){return e.theme.colors.primaryHoverText}),Object(V.c)(K)(Q||(Q=se(["\n  align-items: center;\n  padding: 5px;\n  // background-color: ",";\n"],["\n  align-items: center;\n  padding: 5px;\n  // background-color: ",";\n"])),function(e){return e.theme.colors.primaryHoverBackground})),de=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.keyUpEventListener=function(e){"n"===e.key&&e.preventDefault()},t}return pe(t,e),t.prototype.componentDidMount=function(){document.addEventListener("keyup",this.keyUpEventListener)},t.prototype.componentWillUnmount=function(){document.removeEventListener("keyup",this.keyUpEventListener)},t.prototype.render=function(){return o.createElement(Ee,null,"Add New Note by clicking on '+' icon")},t}(o.PureComponent),Oe=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),fe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.keyUpEventListener=function(e){"n"===e.key&&e.preventDefault()},t}return Oe(t,e),t.prototype.componentDidMount=function(){document.addEventListener("keyup",this.keyUpEventListener)},t.prototype.componentWillUnmount=function(){document.removeEventListener("keyup",this.keyUpEventListener)},t.prototype.render=function(){return o.createElement("div",null,"Please select a note continue.")},t}(o.PureComponent),Ne=function(){return(Ne=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},_e=function(e){return o.createElement("div",null,o.createElement("textarea",{value:e.note.content,onChange:function(t){var n=t.target.value,r=Ne({},e.note,{content:n});e.updateNote(r)},style:{width:"100%",height:"100%"},rows:10}))},Te=n(22),be={renderer:new Te.Renderer,sanitize:!0};Te.setOptions(be);var ye=function(e,t){var n=""+e||"";return t?n.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1").replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"").replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n"):Te(n)},he=function(e){return o.createElement("div",{dangerouslySetInnerHTML:{__html:ye(e.note.content)}})},ge=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),De=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.addNewNote=function(){t.props.addNewNote()},t.openNote=function(e){t.props.openNote({noteId:e})},t.renderNoteMenu=function(e){var n=t.props.notesMap[e],r=n.title,a=n.updatedTs;return o.createElement(ee,{key:e,onClick:function(){return t.openNote(e)}},o.createElement(te,{dangerouslySetInnerHTML:{__html:ye(r,!0)}}),o.createElement(ne,null,a))},t.updateNote=function(e){t.props.updateNote({note:e})},t.renderMarkdown=function(){if(t.props.activeNoteId){var e=t.props.notesMap[t.props.activeNoteId];0===e.content.length&&!1===t.props.editMode&&t.props.toggleEditMode({editMode:!0});var n=t.props.editMode?_e:he,r=t.props.editMode?o.createElement(ce,null,o.createElement(ie,{dangerouslySetInnerHTML:{__html:ye(e.title,!0)}}),o.createElement(ue,null,o.createElement(le,{onClick:function(){return t.props.toggleEditMode({editMode:!1})}},"Done"))):o.createElement(ce,null,o.createElement(ie,{dangerouslySetInnerHTML:{__html:ye(e.title,!0)}}),o.createElement(ue,null,o.createElement(le,{onClick:function(){return t.props.toggleEditMode({editMode:!0})}},"Edit")));return o.createElement(o.Fragment,null,r,o.createElement(n,{note:e,updateNote:t.updateNote}))}return o.createElement(o.Fragment,null,o.createElement(ce,null),o.createElement(fe,null))},t}return ge(t,e),t.prototype.componentDidMount=function(){this.props.loadNotes()},t.prototype.render=function(){return o.createElement(Y,null,o.createElement(Z,null,o.createElement(oe,null,o.createElement(ae,null,"Notes"),o.createElement(ue,null,o.createElement(le,{onClick:this.addNewNote},"Add"))),this.props.notes.map(this.renderNoteMenu),0===this.props.notes.length&&o.createElement(de,null)),o.createElement(re,null,this.renderMarkdown()))},t}(o.PureComponent),me=n(16),xe=function(e){return e.notesList},Se=Object(me.a)(xe,function(e){return e.list}),Le=Object(me.a)(Se,function(e){for(var t={},n=0;n<e.length;n+=1){var r=e[n];t[r.noteId]=r}return t}),ve=Object(me.a)(Le,function(e){return Object.keys(e)}),Pe=Object(me.a)(xe,function(e){return e.openNote.noteId}),Ie=Object(me.a)(xe,function(e){return e.openNote.editMode}),we=Object(c.b)(function(e){return{notes:ve(e),notesMap:Le(e),activeNoteId:Pe(e),editMode:Ie(e)}},function(e){return{openNote:function(t){return e(function(e){return{type:d.OPEN_NOTE,payload:e}}(t))},updateNote:function(t){return e(function(e){return{type:d.UPDATE_NOTE,payload:e}}(t))},deleteNote:function(t){return e(function(e){return{type:d.DELETE_NOTE,payload:e}}(t))},loadNotes:function(){return e({type:d.LOAD_NOTES})},addNewNote:function(){return e({type:d.ADD_NEW_NOTE})},toggleEditMode:function(t){return e(function(e){return{type:d.TOGGLE_EDIT_MODE,payload:e}}(t))}}})(De),je=Object(u.combineReducers)({notesList:N}),Ae=function(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};function ke(){return Ae(this,function(e){switch(e.label){case 0:return[4,Object(_.a)([Object(_.c)(P)])];case 1:return e.sent(),[2]}})}var Me,Re,Ce,Ue,Ge={colors:{primaryText:"#37474f",secondaryText:"#37474f",border:"#37474f",primaryBackground:"#fff",secondaryBackground:"#fff",primaryHoverBackground:"#37474f",secondaryHoverBackground:"#37474f",primaryHoverText:"#fff",secondaryHoverText:"#fff",borderHover:"#fff"},fonts:{primaryText:"14px san-serif, arial",secondaryText:"12px san-serif, arial"},fontWeights:{primaryText:"600",secondaryText:"400"}},Fe=n(13),We=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},He=Object(V.c)("div")(Me||(Me=We(["\n  height: 100%;\n"],["\n  height: 100%;\n"]))),$e=function(){return o.createElement(V.a,{theme:Ge},o.createElement(He,null,o.createElement(Fe.a,{path:"/",component:we})))},ze=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Be=Object(V.b)(Ue||(Ue=ze(["\n  html, body, #app {\n    height: 100%;\n    margin: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n"],["\n  html, body, #app {\n    height: 100%;\n    margin: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n"]))),Qe=(Re=Object(l.a)(),Ce=Object(u.createStore)(je,Object(s.composeWithDevTools)(Object(u.applyMiddleware)(Re))),Re.run(ke),Ce),Ve=document.getElementById("app");a.render(o.createElement(c.a,{store:Qe},o.createElement(i.a,null,o.createElement($e,null)),o.createElement(Be,null)),Ve)}},[[57,1,2]]]);