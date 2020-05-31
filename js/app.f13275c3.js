(function(e){function t(t){for(var i,s,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"25cf":function(e,t,n){},"3ebf":function(e,t,n){"use strict";var i=n("bfc9"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("SearchBar",{on:{termChange:e.onTermChange}}),e._v(" "),n("div",{staticClass:"row"},[n("VideoDetail",{attrs:{video:e.selectedVideo}}),e._v(" "),n("VideoList",{attrs:{videos:e.videos},on:{videoSelect:e.onVideoSelect}})],1),n("div",{staticClass:"small text-center"},[e._v(" Deepesh Bhargava ")])],1)},r=[],s=n("bc3a"),a=n.n(s),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Search Youtube. Please enter keyword(s)")]),n("input",{on:{input:e.onInput}})])},l=[],u=n("b012"),d={name:"SearchBar",methods:{onInput:Object(u["debounce"])((function(e){this.$emit("termChange",e.target.value)}),575)}},p=d,f=(n("3ebf"),n("2877")),v=Object(f["a"])(p,c,l,!1,null,"111ea5a3",null),m=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-group col-md-4"},e._l(e.videos,(function(t){return n("VideoListItem",{key:t.etag,attrs:{video:t},on:{videoSelect:e.onVideoSelect}})})),1)},h=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"list-group-item media",on:{click:e.onVideoSelect}},[n("img",{staticClass:"mr-3",attrs:{src:e.thumbnailUrl}}),n("div",{staticClass:"media-body"},[e._v(" "+e._s(e.video.snippet.title)+" ")])])},_=[],g={name:"VideoListItem",props:["video"],computed:{thumbnailUrl:function(){return this.video.snippet.thumbnails.default.url}},methods:{onVideoSelect:function(){this.$emit("videoSelect",this.video)}}},S=g,w=(n("91d7"),Object(f["a"])(S,y,_,!1,null,"70b92055",null)),V=w.exports,C={name:"VideoList",components:{VideoListItem:V},props:["videos"],methods:{onVideoSelect:function(e){this.$emit("videoSelect",e)}}},O=C,j=Object(f["a"])(O,b,h,!1,null,null,null),x=j.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.video?n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("iframe",{staticClass:"embed-responsive-item",attrs:{src:e.videoUrl}})]),n("div",{staticClass:"details"},[n("h4",[e._v(e._s(e.video.snippet.title))]),n("p",[e._v(e._s(e.video.snippet.description))])])]):e._e()},$=[],P={name:"VideoDetail",props:["video"],computed:{videoUrl:function(){var e=this.video.id.videoId;return"https://www.youtube.com/embed/".concat(e,"?rel=0")}}},I=P,B=(n("5e3b"),Object(f["a"])(I,k,$,!1,null,"3f9bbb7f",null)),L=B.exports,M="AIzaSyBifuC1BlkMN7YyKteVlCJc3ykoJ5fifAM",E={name:"App",components:{SearchBar:m,VideoList:x,VideoDetail:L},data:function(){return{videos:[],selectedVideo:null}},methods:{onVideoSelect:function(e){this.selectedVideo=e},onTermChange:function(e){var t=this;a.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:M,type:"video",part:"snippet",q:e}}).then((function(e){t.videos=e.data.items}))}}},D=E,J=Object(f["a"])(D,o,r,!1,null,null,null),T=J.exports;new i["a"]({render:function(e){return e(T)}}).$mount("#app")},"5e3b":function(e,t,n){"use strict";var i=n("7bbc"),o=n.n(i);o.a},"7bbc":function(e,t,n){},"91d7":function(e,t,n){"use strict";var i=n("25cf"),o=n.n(i);o.a},bfc9:function(e,t,n){}});
//# sourceMappingURL=app.f13275c3.js.map