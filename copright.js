
//<![CDATA[	
var wait_jq = setInterval(function(){	
	if (typeof($) != 'undefined') {
		clearInterval(wait_jq);
		wait_jq = null;
		main_js();
	}
}, 50);

function main_js() {
/*GLOBAL SETTINGS, USER CAN CHANGE*/
var disqus_shortname = 'magonetemplate';// disqus custom shortname for moderation
var DATE_FORMAT = 'MMM dd, yyyy';// global date format string for all javascript
if (typeof(PRIMARY_COMMENT_SYSTEM) == 'undefined') {
	var PRIMARY_COMMENT_SYSTEM = 'blogger'; // change the first priority comment system that you want to show to visitors	
}
var DEFAULT_COMMENT_AVATAR = 'http://img1.blogblog.com/img/anon36.png'; // you can upload avatar some where then replace here for default comment avatar
var MAX_REPLY_DEPTH = 2; // number reply depth level under a top comment
var MAX_BREADCRUMB_DEPTH = 2;// number labels will show in breadcrumb
var DEFAULT_POST_THUMBNAIL = 'http://lorempixel.com/640/300/';// leave blank to use random images for non-thumbnail posts
var NUM_BREAK_LINKS = 3;// number break links inside blog posts after excerpt box
var THUMBNAIL_RAINBOW_COLORS = ['#292484,#DC4225', '#81AF59,#A83279', '#417711,#DC4225',  '#E0BE00,#FD340F', '#D38312,#002F4B', '#A83279,#292484', '#002F4B,#417711'];// color list for random for rainbow thumbnail overlay
var SNEEIT_LICENSE = "";
var COMMENT_EMOTICONS = true; // enable / disable comment emoticon replacer
var COMMENT_MEDIA_ATTACH = true; // enable / disable comment link to media replacer
// var COMMENT_ROLE_TAG = false; // show / hide admin / author tag in comment name
// var COMMENT_SHARE_BUTTONS = true; // show / hide comment sharing button
var SHOW_AFTER_POST_SECTION = 'after-body'; // position for after post section, input none to hide, after post or before comment to show
var NUM_RELATED_POST = 2; // show number related post, set to 0 to disable
var INSTANT_LOAD = false; // instant loading posts without waiting mouse scroll
var STICKY_MENU = 'up';// enable / disable sticky menu
var STICKY_MOBILE_MENU = 'up'; // enable / disable sticky mobile menu
var STICKY_SIDEBAR = true; // enable / disable sticky sidebar
var STICKY_SIDEBAR_DELAY = 0; // delay for sticky sidebar animate
var ARCHIVE_RELOAD_FOR_CONTENT = false;// reload instead of using ajax to load content of archive pages
var FEATURE_IMAGES = 'always-before'; // show FEATURE_IMAGES
var RELOAD_POST_PAGINATION = false; // RELOAD_POST_PAGINATION
var CENTERING_MENU_ITEMS = false; // CENTERING MENU ITEMS
var SHOW_INNER_POST_ADS_AT = 'br_tag'; // where to show inner post ads

function trans(id){var html=$('[data-l10n="'+id+'"]').html();if(typeof(html)=='undefined'||html==''){return id;}
if(typeof(arguments)!='undefined'&&arguments.length>1){var vars=html.split('$$');html='';for(var i=0;i<vars.length;i++){if(vars[i]&&!isNaN(vars[i])&&typeof(arguments[Number(vars[i])])!='undefined'){html+=arguments[Number(vars[i])];}else{if(i>0&&(!(vars[i]&&!isNaN(vars[i-1])&&typeof(arguments[Number(vars[i-1])])!='undefined'))){html+='$$';}
html+=vars[i];}}}
return html;}
var DateFormat={};!function(a){var b=[trans("Sunday"),trans("Monday"),trans("Tuesday"),trans("Wednesday"),trans("Thursday"),trans("Friday"),trans("Saturday")],c=[trans("Sun"),trans("Mon"),trans("Tue"),trans("Wed"),trans("Thu"),trans("Fri"),trans("Sat")],d=[trans("Jan"),trans("Feb"),trans("Mar"),trans("Apr"),trans("May"),trans("Jun"),trans("Jul"),trans("Aug"),trans("Sep"),trans("Oct"),trans("Nov"),trans("Dec")],e=[trans("January"),trans("February"),trans("March"),trans("April"),trans("May"),trans("June"),trans("July"),trans("August"),trans("September"),trans("October"),trans("November"),trans("December")],f={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},g=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[Z\-+]?(\d{2}:?\d{2})?/;a.format=function(){function a(a){return b[parseInt(a,10)]||a}function h(a){return c[parseInt(a,10)]||a}function i(a){var b=parseInt(a,10)-1;return d[b]||a}function j(a){var b=parseInt(a,10)-1;return e[b]||a}function k(a){return f[a]||a}function l(a){var b,c,d,e,f,g=a,h="";return-1!==g.indexOf(".")&&(e=g.split("."),g=e[0],h=e[e.length-1]),f=g.split(":"),3===f.length?(b=f[0],c=f[1],d=f[2].replace(/\s.+/,"").replace(/[a-z]/gi,""),g=g.replace(/\s.+/,"").replace(/[a-z]/gi,""),{time:g,hour:b,minute:c,second:d,millis:h}):{time:"",hour:"",minute:"",second:"",millis:""}}function m(a,b){for(var c=b-String(a).length,d=0;c>d;d++)a="0"+a;return a}return{parseDate:function(a){var b,c,d={date:null,year:null,month:null,dayOfMonth:null,dayOfWeek:null,time:null};if("number"==typeof a)return this.parseDate(new Date(a));if("function"==typeof a.getFullYear)d.year=String(a.getFullYear()),d.month=String(a.getMonth()+1),d.dayOfMonth=String(a.getDate()),d.time=l(a.toTimeString()+"."+a.getMilliseconds());else if(-1!=a.search(g))b=a.split(/[T\+-]/),d.year=b[0],d.month=b[1],d.dayOfMonth=b[2],d.time=l(b[3].split(".")[0]);else switch(b=a.split(" "),6===b.length&&isNaN(b[5])&&(b[b.length]="()"),b.length){case 6:d.year=b[5],d.month=k(b[1]),d.dayOfMonth=b[2],d.time=l(b[3]);break;case 2:c=b[0].split("-"),d.year=c[0],d.month=c[1],d.dayOfMonth=c[2],d.time=l(b[1]);break;case 7:case 9:case 10:d.year=b[3],d.month=k(b[1]),d.dayOfMonth=b[2],d.time=l(b[4]);break;case 1:c=b[0].split(""),d.year=c[0]+c[1]+c[2]+c[3],d.month=c[5]+c[6],d.dayOfMonth=c[8]+c[9],d.time=l(c[13]+c[14]+c[15]+c[16]+c[17]+c[18]+c[19]+c[20]);break;default:return null}return d.date=d.time?new Date(d.year,d.month-1,d.dayOfMonth,d.time.hour,d.time.minute,d.time.second,d.time.millis):new Date(d.year,d.month-1,d.dayOfMonth),d.dayOfWeek=String(d.date.getDay()),d},date:function(b,c){try{var d=this.parseDate(b);if(null===d)return b;for(var e,f=d.year,g=d.month,k=d.dayOfMonth,l=d.dayOfWeek,n=d.time,o="",p="",q="",r=!1,s=0;s<c.length;s++){var t=c.charAt(s),u=c.charAt(s+1);if(r)"'"==t?(p+=""===o?"'":o,o="",r=!1):o+=t;else switch(o+=t,q="",o){case"ddd":p+=a(l),o="";break;case"dd":if("d"===u)break;p+=m(k,2),o="";break;case"d":if("d"===u)break;p+=parseInt(k,10),o="";break;case"D":k=1==k||21==k||31==k?parseInt(k,10)+"st":2==k||22==k?parseInt(k,10)+"nd":3==k||23==k?parseInt(k,10)+"rd":parseInt(k,10)+"th",p+=k,o="";break;case"MMMM":p+=j(g),o="";break;case"MMM":if("M"===u)break;p+=i(g),o="";break;case"MM":if("M"===u)break;p+=m(g,2),o="";break;case"M":if("M"===u)break;p+=parseInt(g,10),o="";break;case"y":case"yyy":if("y"===u)break;p+=o,o="";break;case"yy":if("y"===u)break;p+=String(f).slice(-2),o="";break;case"yyyy":p+=f,o="";break;case"HH":p+=m(n.hour,2),o="";break;case"H":if("H"===u)break;p+=parseInt(n.hour,10),o="";break;case"hh":e=0===parseInt(n.hour,10)?12:n.hour<13?n.hour:n.hour-12,p+=m(e,2),o="";break;case"h":if("h"===u)break;e=0===parseInt(n.hour,10)?12:n.hour<13?n.hour:n.hour-12,p+=parseInt(e,10),o="";break;case"mm":p+=m(n.minute,2),o="";break;case"m":if("m"===u)break;p+=n.minute,o="";break;case"ss":p+=m(n.second.substring(0,2),2),o="";break;case"s":if("s"===u)break;p+=n.second,o="";break;case"S":case"SS":if("S"===u)break;p+=o,o="";break;case"SSS":var v="000"+n.millis.substring(0,3);p+=v.substring(v.length-3),o="";break;case"a":p+=n.hour>=12?"PM":"AM",o="";break;case"p":p+=n.hour>=12?"p.m.":"a.m.",o="";break;case"E":p+=h(l),o="";break;case"'":o="",r=!0;break;default:p+=t,o=""}}return p+=q}catch(w){return console&&console.log&&console.log(w),b}},prettyDate:function(a){var b,c,d;return("string"==typeof a||"number"==typeof a)&&(b=new Date(a)),"object"==typeof a&&(b=new Date(a.toString())),c=((new Date).getTime()-b.getTime())/1e3,d=Math.floor(c/86400),isNaN(d)||0>d?void 0:60>c?trans("just now"):120>c?trans("1 minute ago"):3600>c?trans("$$1$$ minutes ago",Math.floor(c/60)):7200>c?trans("1 hour ago"):86400>c?trans("$$1$$ hours ago",Math.floor(c/3600)):1===d?trans("Yesterday"):7>d?trans("$$1$$ days ago",d):31>d?trans("$$1$$ weeks ago",Math.ceil(d/7)):d>=31?trans("more than 5 weeks ago"):void 0},toBrowserTimeZone:function(a,b){return this.date(new Date(a),b||"MM/dd/yyyy HH:mm:ss")}}}()}(DateFormat),function(a){a.format=DateFormat.format}(jQuery);
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);

_s7OcS = ['.is-firefox','.is-firefox','display','none','<div class="clear"></div>','##','penguin','putnam','cry','poop','upset','grumpy','heart','shark','devil','angel','glasses','kiki','squint','confused','confused_rev','robot','like','smile','big_smile','frown','tongue','grin','gasp','wink','sunglasses','unsure','kiss','pacman','colonthree','#HTML3','#HTML13','#HTML23','undefined','undefined','false','hide','none','no','0','undefined','undefined','array','object','object','array','array','object','string','/search/label/','?','#','/','html, body',"mouseup",'#039',"'",'&quot;','"','&gt;','>','&lt;','<','&amp;','&','','.','//','http',':','cookie','; expires=','; path=/',"=",'test','ok','',";","=","=","",'',"undefined",'','','youtube','youtu.be','','/embed/','youtu.be/','/videos/','/v/','?v=','&v=','#','/','?','&','.','youtube','youtu.be','','list=','#','/','?','&','.','vimeo','','vimeo.com/','/video/','#','/','?','&','.','fa ','','<','','>','','fa-','fa-','"',"'",'<i class="fa fa-','"></i>','!','%21','(','%28',')','%29','\'','%27','~','%7E','/search/label/','/search/label/','body.item','/b/','body.archive','updated-min','/search?','q','/search/label/','body.index','body.static_page','body.error_page','html[dir="rtl"]','.item-control','.item-control','display','none','/search/label/','/search/label/','.post-ads',':empty','.post-body','wide-right','.post-ads','script','iframe','<','.post-ads','visibility','visible','visibility','hidden','.post-body','wide-right','.post-ads','.post-ads','visibility','visible','&','=','m=1','#global-blogger-data .languageDirection','#global-blogger-data .pageType','#global-blogger-data .pageTitle','#global-blogger-data .pageName','#global-blogger-data .metaDescription','#global-blogger-data .postImageUrl','#global-blogger-data .postImageThumbnailUrl','#global-blogger-data .title','#global-blogger-data .url','#global-blogger-data .homepageUrl','#global-blogger-data .canonicalHomepageUrl','#global-blogger-data .canonicalUrl','#global-blogger-data .enabledCommentProfileImages','#global-blogger-data .blogId','.post-id','data-id','.blogger-comments-title','data-comment_number','#global-blogger-data .encoding','/','#magone-labels',',','/search/label/','.post-label-data','data-href','/feeds','zx','https://www.blogger.com/feeds/','www.','','http://','','https://','','undefined','undefined','.item-thumbnail','.special','special','.item-thumbnail-resize-landscape','item-thumbnail-resize-landscape','item-thumbnail-resize-portrait','bottom','0','top','-','px','bottom','auto','.item-thumbnail-resize-portrait','item-thumbnail-resize-portrait','item-thumbnail-resize-landscape','.item-thumbnail-resize-portrait','bottom','auto','top','src','w','src','optimized','optimizing','object','.item-thumbnail img','undefined','.optimizing','optimizing','.item-thumbnail','<span class="item-thumbnail-resize-landscape"></span>','src','/s72-c/','youtube.com','/default.','/default.','/hqdefault.','src','optimized','undefined','load','.blogspot.com','.googleusercontent.com','undefined','undefined','x','x','w','w','','w','','h','h','','h','','/','.googleusercontent.com','=','-c','s','h','w','-','c','','s','','h','','w','','','s','h','w','s','w','h','w','-','h','-c','','\u003cimg ','src\u003d\"','\"','src\u003d\'','\'','','data-thumbnail-src\u003d\"','\"','','\u003ciframe ','src\u003d\"','\"','http:','','https:','','//www.youtube.com/watch?v=','','//www.youtube.com/embed/','','?','?','&','&','http://img.youtube.com/vi/','/hqdefault.jpg','undefined','undefined','feed','responseText','({"version":','({"version":','}});','}});','undefined','undefined','undefined','undefined','undefined','http://lorempixel.com/640/300/','\u003cimg ','blog-','.comments','','category','','title','','subtitle','Anonymous','','http://img1.blogblog.com/img/anon36.png','name','uri','gd$image','http://img1.blogblog.com/img/blank.gif','entry','post-','','published','category','','title','','content','','summary','','','','...','','','comments','link','alternate','replies','related','/comments/default/','Anonymous','','http://img1.blogblog.com/img/anon36.png','name','uri','gd$image','http://img1.blogblog.com/img/blank.gif','','media$thumbnail','','standard','image','youtube.com/embed','player.vimeo.com','dailymotion.com/embed','video','soundcloud.com/player','audio','thr$total',' ','','','','','thr$in-reply-to','thr$in-reply-to','thr$in-reply-to','/default/','/summary/','?alt=json-in-script','','','','gd$extendedProperty','blogger.itemClass','blogger.displayTime','pid-','','$','/fa-','/fa-','/','<i class="fa ','/','','"></i>','_','under-title','[',']','box-title','|','head-title','<span>','</span>','#content-section-after-post','none','#content-section-after-post','#content-section-after-post','.after-post-content-','.cloud-label-widget-content .label-size','bg','.cloud-label-widget-content .label-size .label-count','(','',')','','.widget','opacity','1','.widget > h2','\n','','class','widget ','',' ','','$','=','.PopularPosts','$','id','id','=','=','popularposts','one','misc','.','/','-','.','/','-','image','.widget-content','img','src','.caption','a','href','linklist','pagelist','ul li a','href','label','.widget-item-control','[dir]','popularposts','li','a','href','','','popularposts','.item-title','a','a','img','src','.item-snippet','columns','columns','columns','count','count','height','buttons','buttons','dots','title','meta','meta','author','author','comment','comment','comment','date','speed','readmore','readmore','snippet','snippet','snippet','desc','desc','desc','cate','cate','cate','cate','cate','cate','cate','cate','cate','viewall','index','index','pages','pages','pages','pages','pages','pages','pages','pages','pages','icon','icon','icon','color','color','color','color','tbg','tbg','source','source','space','space','spac','host','host','topic','topic','topic','topic','','tab','tab','','-','','','misc','tab','0','no','none','no-spacing','tab','tab','','social_icons','linklist','<','>','title','-square','','<i class="fa fa-','"></i>','i','class','fa-','fa-',' ',' ','title','target','_blank','social_counter','linklist','','|','|','Followers','Follow','undefined','undefined','<i ','','>','','</i>','','fa ','','fa-','','class="','','"','',' ','','-','<a class="social-counter item-',' ',' ','-color" href="','" target="_blank">				<span class="icon"><i class="fa fa-','"></i></span>				<span class="count">','</span>				<span class="text">','</span>				<span class="button"><span class="','-bg bg rad2">',' <span class="go"><i class="fa fa-angle-right"></i></span></span></span>			<span class="clear"></span></a>','.widget-content','image_list','image','image_list','image','misc','html','popularposts','feed','.widget-content','feed-widget-content widget-content-','id','widget-content-','label','misc','data-i','feed pending','<div class="mobile-menu mobile">','#PageList1','</div>','#PageList1','.mobile-menu .menu-item','data-icon','undefined','fa-','fa-','> a','<i class="fa ','"></i> ','.menu-item-has-children','<span class="expand toggle"><i class="fa fa-angle-down"></i></span>','<span class="collapse toggle"><i class="fa fa-angle-up"></i></span>','.mobile-menu .menu-item-has-children > a','href','undefined','.expanded','collapsed','expanded','> .sub-menu','collapsed','expanded','> .sub-menu','.mobile-menu .menu-item .expand','collapsed','expanded','> .sub-menu','.mobile-menu .menu-item .collapse','collapsed','expanded','> .sub-menu','#PageList1 > ul','id','menu-header-section','#PageList1 li','data-icon','undefined','fa-','fa-','> a','<i class="fa ','"></i> ','> ul','> ul','<div class="menu-item-inner"></div>','> a',' <span class="arrow"></span>','<div class="menu-item-inner"></div>','#PageList1 div.menu-item-inner','#PageList1 > ul > li','data-enable_mega','true','menu-item-mega','.menu-item-type-label','> a','href','data-slug','menu-item-mega-label','> .menu-item-inner','<div class="menu-mega-content"><div class="loader">Loading...</div></div>','menu-item-mega-link','#PageList1 li a','href','current','menu-item-current','#PageList1','menu pagelist main-menu no-title',' _____THIS_IS_TAG_HOLDER_____','_____ ',' _____THIS_IS_MEDIA_HOLDER_____','_____ ','<','>','youtube','youtu.be','<iframe class="comment-media video youtube" width="640" height="360" src="https://www.youtube.com/embed/','?','list=','rel=0','" frameborder="0" allowfullscreen></iframe>','vimeo','<iframe class="comment-media video vimeo" src="https://player.vimeo.com/video/','" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>','<img class="comment-media image" src="','" alt="comment-image"/>','<a href="','" target="_blank" rel="nofollow">','</a>','<span class="emoticon emoticon_','"></span>','.blogger-comments-holder','<ul class="main-comments"></ul>','.noNewComments','undefined','li.comment-','li.comment-','data-level','<li id="c','" class="comment comment-',' comment-','" data-level="','">','','img1.blogblog.com/img/blank.gif','<img alt="commenter-avatar" class="shad cir" src="','"/>','<span class="comment-avatar">','</span>','<a class="comment-avatar" href="','" target="_blank" rel="nofollow">','</a>','<div class="comment-content">','<div class="comment-header">','<span class="comment-name">','</span>','<a class="comment-name" href="','" target="_blank" rel="nofollow">','</a>',' <a class="comment-date" href="','" data-timestamp="','">','</a>','</div>','<div class="comment-body">','</div>','<div class="comment-footer">','<a href="javascript:void(0)" class="comment-reply-add" data-parentid="','"><span>','Reply','','<span class="','"><a target="_self" href="http://www.blogger.com/delete-comment.g?blogID=','&postID=','"><span>','Delete','</span> <i class="fa fa-trash-o"></i></a></span>','</div>','</div>','<div class="comment-form-holder comment-form-holder-','"></div>','</li>','ul.sub-comments-of-','li.comment-','li.comment-','<ul class="sub-comments sub-comments-of-','"></ul>','ul.main-comments','ul.sub-comments-of-','ul.main-comments','click','.comment-reply-add','data-parentid','#comment-editor','src','.comment-editor-src','data-src','&parentID=','.comment-form-wrapper','.comment-form-holder-','.comment-reply-cancel','comment-reply-add','comment-reply-cancel','<span>','Reply','</span> <i class="fa fa-mail-forward"></i>','comment-reply-cancel','comment-reply-add','<span>','Cancel reply','</span> <i class="fa fa-close"></i>','click','.comment-reply-cancel','#comment-editor','src','.comment-editor-src','data-src','.comment-form-wrapper','.comment-form-add-new','comment-reply-add','comment-reply-cancel','<span>','Reply','</span> <i class="fa fa-mail-forward"></i>','.comment-date','data-timestamp','showComment=','#c','undefined','undefined','item-control blog-admin ',"jsonp",'.blogger-comments-default-pagination','.','-comment-counter','disqus','script','text/javascript','//','.disqus.com/count.js','HEAD','BODY','#comment-','disqus','fb_comment_id','facebook','.blogger-comments-holder','/','/comments/default?alt=json-in-script&max-results=','&start-index=','#comments','.comments','.','-comments','.comments','active','.','-comments','active','.comments.active .comments-title','active','#comments-title-tabs','.comments .comments-title','#comments-title-tabs','#comments-title-tabs .comments-title','comments-title-tab','#comments-title-tabs a.active','active','.comments.active','active','#comments-title-tabs a.','-comments-title','active','.','-comments','active','#comments-title-tabs a','.active','#comments-title-tabs a.active, .comments.active','active','active','data-target','active','always-before','always-after','selected-before','selected-after','.post-body-inner img','src','title','[feature]','selected-before','selected-after','always-before','always-after','src','h1.post-title','<div class="post-feature-image-wrapper"><img src="','"/></div>','a','table.tr-caption-container','div.separator[style!=""]','-before','.post .post-header','.post .post-header','.post-feature-image-wrapper img','title','alt','.post-body img','style','a','style','margin-left','style','margin-right','margin-left','margin-right','float','none','margin-left','','margin-right','','.post-breadcrumb','','<span><i class="fa fa-angle-right"></i></span>','<a href="','">','</a>','<a href="/">','Home','</a><span><i class="fa fa-angle-right"></i></span>','.post-title','.post-body h2','strike','<span class="custom-post-title">','</span>','.post-sub-title-wrapper','','.post-body h3','strike','<h2 class="post-sub-title">','</h2>','.post-break-links','/posts/default/-/','?max-results=','&start-index=','&alt=json-in-script','','<div class="post-break-link"><i class="fa fa-angle-right"></i> <a href="','">','</a></div>','.post-break-links',"jsonp",'.post-body-inner','[contact]','[contact]','<div class="blogger-contact-form"></div>','[full_width]','[full_width]','<style type="text/css">#content{float:none!important;width:100%!important}#sidebar{display:none!important}</style>','[sidebar_left]','[sidebar_left]','<style type="text/css">#content{float:right!important}#sidebar{float:left!important}</style>','[sidebar_right]','[sidebar_right]','<style type="text/css">#content{float:left!important}#sidebar{float:right!important}</style>','[post_ads]','none','[post_ads]','','[post_ads]','<div class="inner-post-ads"></div>','[post_ads_2]','none','[post_ads_2]','','[post_ads_2]','<div class="inner-post-ads-2"></div>','#ContactForm1','.post-body-inner .blogger-contact-form','br_tag','.post-body-inner br','.inner-post-ads','<div class="inner-post-ads"></div>','.inner-post-ads-2','<div class="inner-post-ads-2"></div>','.inner-post-ads',':empty','.inner-post-ads','visibility','hidden','.inner-post-ads','visibility','visible','.inner-post-ads-2',':empty','.inner-post-ads-2','visibility','hidden','.inner-post-ads-2','visibility','visible','.post-body-inner','magone-lock-start','magone-lock-end','<span class="','"></span>','<span class="','"></span>','[lock]','[/lock]','[lock]','[/lock]','unlocked-','unlocked','','','.post-body-inner .','.post-body-inner','.post-body-inner .','.post-body-inner','<div class="locked-content white shad">				<div class="inner">					<div class="overlay overlay-1 bg"></div>					<div class="overlay overlay-2 white"></div>					<i class="color fa fa-lock"></i>					<h2 class="color locked-content-title">','THIS CONTENT IS PREMIUM','</h2>					<h3 class="locked-content-sub-title">','Please share to unlock','</h3>					<div class="locked-content-actions">						<div class="locked-content-action"><fb:like send="true" data-share="false" width="95" show_faces="false" layout="button"></fb:like></div>						<div class="locked-content-action"><a href="https://twitter.com/share" class="twitter-share-button" data-count="vertical" style="">Tweet</a></div>					</div>					','				</div>			</div>',"https://platform.twitter.com/widgets.js","script","twitter-wjs",'click',"unlock_content",'tweet',"unlock_content",'retweet',"unlock_content",'like',"unlock_content",'follow',"unlock_content",'unlock_content','undefined','.post-body-inner','.locked-content','undefined','unlocked-','unlocked','.post-page.active','active','.post-page-button-number.active','active','.post-page-button-','active','.post-page-','active','.post-page-button-prev','active','href','#post-page-number-','.post-page-button-next','active','href','#post-page-number-','.post-page-button-prev','active','href','#post-page-number-1','.post-page-button-next','active','href','#post-page-number-2','.post-page-button-prev','active','href','#post-page-number-','.post-page-button-next','active','href','#post-page-number-','.post-body-inner','<span class="magone-next-page"></span>','[next]','[next]','.post-pagination','.post-body-inner .magone-next-page','.post-body-inner','','','post-page post-page-','post-page-button post-page-button-number post-page-button-',' active',' active','<div class="','" id="post-page-','">','</div>','<a href="#post-page-number-','" class="','" data-id="','">','</a>','<div class="post-page-buttons">','<h4 class="post-section-title">','PAGES','</h4>','<a href="#post-page-number-1" class="post-page-button post-page-button-prev active"><i class="fa fa-angle-left"></i></a>','<a href="#post-page-number-2" class="post-page-button post-page-button-next" data-max="','"><i class="fa fa-angle-right"></i></a>','<a href="#post-page-full" class="post-page-button post-page-button-view-all">','View All','</a>','</div>','#post-page-full','.post-page','active','.post-pagination','#post-page-number-','#post-page-number-','','.post-page-button','.active','href','#','.post-page-button-next','data-max','.post-page-button-number.active','data-id','.post-page-button-number','data-id','.post-page-button-view-all','.post-page','active','.post-page-buttons','.post-body','.post-page-button-next','.post-page-button-prev','.post-body','.post-body-inner a','[',']','[','',']','button','.post-body-inner .button','[style*="background-color"]','background-color','background-color','[style*="background-color"]','background-color','background-color','background-color','','[style*="font-size"]','font-size','font-size','[style*="color:"]','color','color','<span class="button-overlay"></span>','.post-body-inner .button','<span class="button-overlay"></span>','.post-body-inner span','style','undefined','font-size','x-large','strike','dropcap color firstcharacter','font-size','','.post-body-inner strike','span','span','style','undefined','font-size','x-large','dropcap color firstcharacter','font-size','','dropcap-wrapper','.post-body-inner blockquote','[',']','[','',']','<pre class="code-box">','</pre>','.post-body-inner .code-box','id','pre-','<div class="clear"></div><div class="pre-header rel">','execCommand','<a href="javascript:void(0)" class="bg copy-all" data-id="','">','Copy All Code','</a> ','getSelection','createTextRange','<a href="javascript:void(0)" class="bg select-all" data-id="','">','Select All Code','</a> ','<div class="clear"></div></div>','#pre-','.pre-header .select-all','data-id','pre-','.pre-header .copy-all','.copy-all-message','data-id','pre-','','',"Copy",'All codes were copied to your clipboard','success','Can not copy the codes / texts, please press [CTRL]+[C] (or CMD+C with Mac) to copy','error','<div class="copy-all-message abs ','">','</div>','.copy-all-message','.success','.post-body-inner blockquote','<div class="blockquote-icon"><i class="fa fa-quote-left"></i></div><div class="blockquote-content">','</div>','','-','ul','li','li','li','','li','','tab','vtab','accordion','col','message','<li class="tab-title"><a href="#','-','">','</a></li>','<ul class="tab-header">','</ul>','<div id="','-','" class="tab-content"><div class="inner">','</div></div>','<h3>','<a href="javascript:void(0)" class="accordion-title accordion-title-','"><span class="accordion-title-text">','</span><i class="fa fa-angle-down accordion-title-icon-inactive accordion-title-icon"></i><i class="fa fa-angle-up accordion-title-icon-active accordion-title-icon"></i></a>','</h3>','<div class="accordion-content"><div class="inner">','</div></div>','<div class="col col-','">','</div>','<div class="message-title">','</div><div class="message-content">','</div>','<div id="','" class="shortcode-listing shortcode-','">','</div>','.post-body-inner ul','li','[',']','[','',']','','.shortcode-tab','.shortcode-vtab','.shortcode-accordion','head','<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" async="true"><\/script>','undefined','.shortcode-tab','.shortcode-vtab','.shortcode-accordion','content','.shortcode-col .col.col-1','.col','margin-left','margin-right','px','','.post-body-inner','width','%','.shortcode-message > div','[style*="background-color"]','background-color','background-color','.post-labels','.post-label[href="','"]','.label-count-value','.post-share-buttons-url','focus','.post-related','/posts/default/-/','?max-results=','&start-index=','&alt=json-in-script','','','post-related-item-wide','<div ','post-related-item post-related-item-',' ','shad','>','</div>','Not found any posts','.post-related-content','.post-related-content .item-thumbnail img','.post-related','<div class="post-related-inner white shad">','<div class="white shad post-related-header">','<h4>','RECOMMENDED FOR YOU','</h4>','<a class="post-related-random-button" href="javascript:void(0)"><i class="fa fa-random"></i></a>','</div>','<div class="post-related-content">','<div class="loader">Loading...</div>','</div>','</div>','.post-related',"jsonp",'click','.post-related-random-button','.post-related-content','<div class="loader">Loading...</div>',"jsonp",'header-section','.widget-item-control','.header-social-icons','.widget-content','',' style="width:','%"','#',' > h2','#',' h2.widget-title','#',' .feed-widget-header','',' class="tab-link',' active','"',' onclick="','$(\'#','\').hide();','$(\'#','\').show();','"','<a href="#','-link"','>				<span class="tab-link-inner">','					<span class="tab-link-arrow"></span>				</span>			</a>','#','<h2 class="tab-title" style="display: block;">','</h2>','.tab-link','href','-link','',' .item-thumbnail img','undefined','widget-content','<div class="empty">','Not found any posts','</div>','pending','widget-content','<div class="loader">Loading...</div>','','/-/','posts','recent','random','random','oldest','oldest','comment','comments','posts','recent-posts','comments','oldest','random','oldest','false','hide','none','no','true','show','enable','yes','/-/','/feeds/','/default','?alt=json-in-script&max-results=','/','/default','?alt=json-in-script&max-results=','#','-p-','recent','#','-p-','','&start-index=','oldest','random','comment','undefined','undefined','oldest','random','popularposts',"jsonp",'','#',' a,',' .color {color: ','}',' .border,',' .feed-widget-header {border-color: ','}',' .bg,','.box-title h2.widget-title,',' .slider-item .item-readmore:hover,',' .grid-item .item-readmore:hover,',' .owl-dot.active {background: ','}','.box-title h2.widget-title a,',' .item-labels a,',' .item-title a,',' .meta-item,',' .feed-widget-labels a,',' .slider-item .item-readmore,','.sticky .item-0 a.item-readmore, ',' .grid-item .item-readmore {color:white}',' .item-sub .item-title a {color:black} ','.sticky .item-sub .item-title a {color:white}',' .slider-item .meta-item .fa,',' .grid-item .meta-item .fa {color: ','}','.complex .than-0 .item-labels,','.blogging .item-labels,','.left .item-extra .item-labels,','.right .item-extra .item-labels,','.ticker .item-labels {background: none}','.complex .than-0 .item-labels a,','.complex .item-sub .meta-item,','.blogging .item-labels a,','.left .item-extra .item-labels a,','.right .item-extra .item-labels a,','.ticker .item-labels a {color: ','}','.complex .than-0 .item-title a,','.blogging .item-title a,','.one .meta-item,','.left .item-extra .item-title a,','.right .item-extra .item-title a,','.ticker .item-title a {color: black}','.blogging .meta-item,','.left .item-sub .meta-item,','.right .item-sub .meta-item {color: #666}','rainbow',' .thumbnail-overlay {			background-color: ',';			background-image: -webkit-linear-gradient(135deg,',',#000);			background-image: -moz-linear-gradient(135deg,',',#000);			background-image: -o-linear-gradient(135deg,',',#000);			background-image: linear-gradient(135deg,',',#000);		}','<style type="text/css">','</style>','','','','','','',' target="_blank"','<h2 class="widget-title feed-widget-title">','<a href="','"','>','</a>','<div class="feed-widget-viewall"><a href="','"','><span>','VIEW ALL','</span> <i class="fa fa-chevron-right"></i></a></div>','<a href="','/search?q=+"','>','</a>','<div class="feed-widget-viewall"><a href="','/search?q=+"','>','VIEW ALL',' <i class="fa fa-chevron-right"></i></a></div>','<span>','</span>','<div class="feed-widget-viewall"><a href="','"','><span>','VIEW ALL','</span> <i class="fa fa-chevron-right"></i></a></div>','</h2>','<div class="feed-widget-labels">','<ul class="bg">','<li><a href="javascript: void(0)" ','','data-i="','"><span class="check"><i class="fa fa-check"></i></span> ',' <span class="down"><i class="fa fa-angle-down"></i></span></a></li>','</ul>','</div>','','<div class="feed-widget-header">','</div>','<div class="widget-content feed-widget-content widget-content-','" id="widget-content-','">','<div class="loader">Loading...</div>','<div class="empty">','Not found any posts','</div>','</div>','<div class="feed-widget-pagination"></div>','left','right','followbyemail','.widget-content','<div class="desc">','</div>','image','quote','<div class="item-thumbnail quote-background" style="opacity:0"><img src="','"/></div>','<div class="quote-icon"><i class="fa fa-quote-left"></i></div>','<div class="quote-content">','</div>','<div class="quote-author"> - ','<a href="','">','</a>','</div>','.widget-content','.item-thumbnail','height','px','.item-thumbnail img','.item-thumbnail','html','content-section-2','standard','<i class="fa fa-','play-circle-o','microphone','camera','newspaper-o','"></i>','','undefined','','undefined','undefined','.',':','http','<img class="avatar" src="','"/>','<span class="avatar">','</span>','<img class="avatar" src="','"/>','<i class="fa fa-pencil-square-o"></i>',' <span>','</span>','none','<a href="','" target="_blank" class="meta-item meta-item-author">','</a>','<a class="meta-item meta-item-author" href="javascript:void(0)">','</a>','undefined','','<a class="meta-item meta-item-date" href="','"><i class="fa fa-clock-o"></i> <span>','</span></a>','undefined','','<a	class="meta-item meta-item-comment-number" href="','#comments"><i class="fa fa-comment-o"></i> <span>','</span></a>','','<h3 class="item-title"><a href="','">','</a></h3>','','...','...','<div class="item-snippet">','</div>','','<div class="item-readmore-wrapper"><a class="item-readmore" href="','#more">','Readmore','</a></div>','undefined','natural-','natural-','','<a href="','" class="thumbnail ','item','-thumbnail">','<img src="','"/>','undefined','<span class="item-icon"><span class="item-icon-inner">','</span></span>','<span class="thumbnail-overlay"></span>','</a>','undefined','<a href="','" class="item-icon"><span class="item-icon-inner">','</span></a>','','','','undefined','','<span>, </span>','popularposts','<a href="','">','</a>','<a href="','">','</a>','<div class="',' item-labels">','</div>','',' ',' ','shad item item-',' item-two',' item-three',' item-four',' than-',' ',' ',' ',' class="',' ','"','','undefined','undefined','undefined','','acd','','a','c','d','','<div class="meta-items">','</div>','.widget-content','<div class="loader">Loading...</div>','&start-index=',"jsonp",'data-max_page','data-total','.feed-widget-pagination-info .value','.feed-widget-pagination-button.active','active','.feed-widget-pagination-button-','active','.feed-widget-pagination-separator','.feed-widget-pagination-button','.feed-widget-pagination-button-','.feed-widget-pagination-button-','.feed-widget-pagination-button-','.feed-widget-pagination-button-3','.feed-widget-pagination-button-','.feed-widget-pagination-separator-1','.feed-widget-pagination-separator-','.feed-widget-pagination-button-1','.feed-widget-pagination-button-','no-post','.widget-content','Not found any post match with your request','undefined','data-max_page','data-total','','<a href="#','-p-','" class="shad feed-widget-pagination-button feed-widget-pagination-button-','">','</a>','<span class="feed-widget-pagination-separator feed-widget-pagination-separator-','">...</span>','<span class="feed-widget-pagination-info"><span class="value">','</span> / ',' ','POSTS','</span>','.feed-widget-pagination','.feed-widget-pagination-button','.active','undefined','undefined','out-of-thumbnail','out-of-thumb','oot','auto','0','auto-height','fix-height','show-icon','none-icon','','','','','','','grid','<div class="item slider-item slider-item-','"><div class="slider-item-inner">','<div class="slider-item-content">','bg','cad','</div>','</div></div>','auto','natural-520','<div ','','>','<div class="item-main">','<div class="item-content gradient">','bg','oot','','By','','</div>','</div>','oot','<div class="item-sub bg">','oot','','cd','</div>','</div>','auto','natural-450','<div ','','>','<div class="item-main">','','<div class="item-content','','">','','oot','','By','','</div>','</div>','oot','<div class="item-sub">','oot','','cd','</div>','</div>','auto','natural-500','<div ','>','<div class="item-main">','<div class="item-content gradient">','bg','oot','','</div>','</div>','oot','<div class="item-sub">','oot','','</div>','</div>','<div class="item carousel-item carousel-item-','"><div class="carousel-item-inner">','<div class="carousel-item-content item-content gradient">','bg','</div>','</div></div>','auto','natural-320','<div ','','','>','','<div class="item-content">','<div class="item-sub">','</div>','</div>','</div>','auto','natural-900','<div ','','>','<div class="item-main">','<div class="item-content gradient">','bg','oot','','</div>','</div>','oot','<div class="item-sub">','oot','','</div>','</div>','auto','0','natural-450','<div ','','>','<div class="item-main">','','<div class="item-content','','">','','oot','','By','','</div>','</div>','oot','<div class="item-sub">','oot','','cd','</div>','</div>','auto','0','natural-450','<div ','>','<div class="item-main">','<div class="item-content gradient">','bg','oot','','By','</div>','</div>','oot','<div class="item-sub">','oot','','cd','</div>','</div>','<div class="ticker-item carousel-item-','"><div class="ticker-item-inner">','<div class="ticker-item-content">','</div>','</div></div>','even','even','</div>','</div>','<div class="grid-page">','',' style="height:','px"','<div class="grid-sub grid-sub-','even','narrow',' grid-sub-','even','"','>','</div>','',' style="height:','px"','<div class="grid-sub grid-sub-','even','wide',' grid-sub-','even','"','>','<div class="item grid-item grid-item-',' grid-sub-item-','"><div class="grid-item-inner">','<div class="grid-item-content item-content gradient">','bg','</div>','</div></div>','</div>','</div>','<div ',' table','>					<div class="tr">						<div class="td">							<h2 class="item-title">								<a href="','">									','<span class="meta-item meta-item-author">',':</span>','','									<span class="title-name">','</span>									','<span class="color meta-item mete-item-comment-number"><i class="fa fa-comment-o"></i> ','</span>','','								</a>							</h2>							','<span class="meta-item meta-item-date">','</span>','','						</div>						','<div class="td item-readmore" style="width:1em;">							<a href="','','					</div>				</div>','two','auto','0','<div class="two-col two-col-left col-1">','</div>','<div class="two-col two-col-right col-2">','</div>','<div class="two-col-mobile mobile">','</div>','three','auto','0','<div class="three-col col-1">','</div>','<div class="three-col col-2">','</div>','<div class="three-col col-3">','</div>','<div class="three-col-mobile mobile">','</div>','.widget-content','opacity','#widget-content-',' .item-thumbnail','height','px','slider','carousel','#widget-content-',' .','-item','height','px','sticky','#widget-content-',' .item-1 .item-thumbnail,#widget-content-',' .item-2 .item-thumbnail,#widget-content-',' .item-3 .item-thumbnail','style','.item-thumbnail img','rainbow','.thumbnail-overlay','background-color: ',',',';			background-image: -webkit-linear-gradient(135deg,',');			background-image: -moz-linear-gradient(135deg,',');			background-image: -o-linear-gradient(135deg,',');			background-image: linear-gradient(135deg,',');','style','responsive','responsive','responsive','responsive','responsive','slider','loop','nav','dots','ticker','autoplay','autoplayHoverPause','onTranslated','#widget-content-',' .item-thumbnail img','navText','<a class="','-button ','-button-left" href="javascript:void(0)"><i class="fa fa-angle-left"></i></i></a>','<a class="','-button ','-button-right" href="javascript:void(0)"><i class="fa fa-angle-right"></i></i></a>','rtl','.item-title','font-size','px','ticker','slideBy','autoplayTimeout','autoplaySpeed','autoplayTimeout','items','responsive','items','responsive','items','responsive','items','responsive','items','destroy.owl.carousel','owl-carousel owl-loaded','.owl-stage-outer','#widget-content-','owlCarousel','.menu-mega-content','Not found any posts','finished','','<div class="item item-','">','<a href="','" class="item-thumbnail"><img src="','"/>','</a>','<a href="','" class="item-title">','</a>','</div>','.menu-mega-content','finished','.menu-mega-content','img','/posts/default','/-/','.html','_','_','updated-min','/','0','0','updated-min','-','-01T00:00:00-08:00','updated-max','-','-01T00:00:00-08:00','?alt=json-in-script&max-results=','&start-index=','updated-min','&published-min=','updated-min','updated-max','&published-max=','updated-max','q','q','','&q=','q','&orderby=relevance','.widget.archive-page-feed','data-count','.widget.archive-page-feed .widget-content','<div class="loader">Loading...</div>',"jsonp",'.widget.archive-page-feed','data-max_page','.widget.archive-page-feed','data-count','.widget.archive-page-feed','data-total','.archive-page-pagination-info .value','.archive-page-pagination-button.active','active','.archive-page-pagination-button-','active','.archive-page-pagination-separator','.archive-page-pagination-button','.archive-page-pagination-button-1','.archive-page-pagination-button-2','.archive-page-pagination-button-3','.archive-page-pagination-button-','.archive-page-pagination-button-','.archive-page-pagination-button-','.archive-page-pagination-button-','.archive-page-pagination-button-','.archive-page-pagination-button-','.archive-page-pagination-separator-3','.archive-page-pagination-separator-','#archive-page-','#archive-page-','','no-post','.widget-content','Not found any post match with your request','. <a href="/">','Back Home','</a>','data-max_page','data-count','data-total','','<a href="#archive-page-','" class="shad archive-page-pagination-button archive-page-pagination-button-','">','</a>','<span class="archive-page-pagination-separator archive-page-pagination-separator-','">...</span>','<span class="archive-page-pagination-info"><span class="value">','</span> / ',' ','POSTS','</span>','.archive-page-pagination','.archive-page-pagination-button','.active','.archive-page-pagination-top',"jsonp",'archive-page-feed feed','<div class="archive-page-header"><h2>','<span>','LABEL',': </span><a target="_blank" href="','/posts/default/-/','">',' <i class="fa fa-rss-square"></i>','</a>','.html','_','_','<span>','ARCHIVE',': </span><strong>','-','</strong>','/','/','<span>','ARCHIVE',': </span><strong>','0','-','</strong>','updated-min=','-','<span>','ARCHIVE',': </span><strong>','</strong>','q','','<span>','SEARCH',': </span><strong>','q','+',' ','</strong>','<strong>','ALL POSTS','</strong>','</h2>','</div>','<div class="archive-page-pagination archive-page-pagination-top">','</div>','<div class="archive-page-content widget-content" id="widget-content-','">','<div class="loader"></div>','</div>','<div class="archive-page-pagination archive-page-pagination-bottom">','</div>','.widget','h2','h2','h2','h2.widget-title','no-title','.FollowByEmail','td','width','table','cellspacing','cellpadding','.widget.main-menu','main-menu-center','.menu .menu-item-mega-label','.loaded','loaded','/posts/default/-/','data-slug','?alt=json-in-script&max-results=4',"jsonp",'#main-menu-toggle','.active','active','#header .main-menu','active','#header .main-menu','#main-menu-toggle-mobile','active','#header .mobile-menu .menu','#header','mobile-menu-opened','#header','.sticky','#header','height','px','.mobile-menu','padding-bottom','px','#main-menu-toggle-mobile','active','#header .mobile-menu .menu','#header','mobile-menu-opened','#header','height','','.mobile-menu','padding-bottom','','#main-menu-toggle-mobile','.active','#search-toggle','.active','active','.search-form-wrapper','active','.search-form-wrapper','.search-text','.search-form-overlay, .search-form-label','#search-toggle','active','.search-form-wrapper','.feed-widget-labels a','.feed-widget-labels','.listing','.active','a','.active','listing','a','active','active','a','.active','listing','.feed.widget','data-i','data-i','.feed-widget-viewall a','href','listing','a','.copyright-year','.widget.feed.pending','data-i','.scroll-up',"html, body",'#search-toggle','active','.search-form-wrapper','.wrapper','background-color','rgb(255, 255, 255)','#ffffff','#FFFFFF','body','solid-white','#sidebar','float','none','undefined','#sidebar','#content','#content','init','init','#header','.main-menu','.main-menu','sticky-menu','.main-menu','ul.menu','width','px','height','px','.main-menu-placeholder','<div class="main-menu-placeholder" style="height:','px"></div>','.main-menu','.main-menu','sticky-menu','.main-menu','ul.menu','width','','.main-menu-placeholder','disable','undefined','.main-menu','display','none','#sidebar','float','both','#sidebar','float','none','#header-wide','#header','#header','sticky','#header .blog-title','width','px','.mobile-menu-placeholder','<div class="mobile-menu-placeholder" style="height:','px"></div>','#header','#header','sticky','#header .blog-title','width','','.mobile-menu-placeholder','disable','undefined','.top-page-wrapper','.auto-height','#header','auto-height','.mobile-menu','display','none','#sidebar','float','both','#sidebar','float','none','#header-wide','a[href*=".html"','href','_archive.html','/p/','click','a[href*="#random-post"]','body','<div class="loader"></div>','/posts/default?alt=json-in-script&max-results=0','/posts/default?alt=json-in-script&max-results=1&start-index=',"jsonp","jsonp"];var _vRkL=($(_s7OcS[0]).length&&$(_s7OcS[1]).css(_s7OcS[2])!=_s7OcS[3]);var _vDgB=_s7OcS[4];var _vIpZ=_s7OcS[5];var _vLyT={'&lt;(&quot;)':_s7OcS[6],':putnam:':_s7OcS[7],':&#39;(':_s7OcS[8],':poop:':_s7OcS[9],'&gt;:o':_s7OcS[10],'&gt;:(':_s7OcS[11],'&lt;3':_s7OcS[12],'(^^^)':_s7OcS[13],'3:)':_s7OcS[14],'O:)':_s7OcS[15],'8-)':_s7OcS[16],'^_^':_s7OcS[17],'-_-':_s7OcS[18],'o.O':_s7OcS[19],'O.o':_s7OcS[20],':|]':_s7OcS[21],'(y)':_s7OcS[22],':)':_s7OcS[23],':D':_s7OcS[24],':(':_s7OcS[25],':P':_s7OcS[26],'=D':_s7OcS[27],':o':_s7OcS[28],';)':_s7OcS[29],'B|':_s7OcS[30],':/':_s7OcS[31],':*':_s7OcS[32],':v':_s7OcS[33],':3':_s7OcS[34],};var _vJhD=new Object();var _vFqL=new Object();var _vJzF=new Object();var _vJgJ=new Array();var _vEcD=$(_s7OcS[35]);var _vYyC=$(_s7OcS[36]);var _vBdH=$(_s7OcS[37]);function _fJfW(variable){return(typeof(variable)!=_s7OcS[38]);}function _fMxD(variable){return!_fJfW(variable);}function _fTzB(variable){if(typeof(variable)==_s7OcS[39]){return true;}else if(variable==_s7OcS[40]||variable==false||variable==_s7OcS[41]||variable==_s7OcS[42]||variable==_s7OcS[43]||variable==_s7OcS[44]||variable==0){return false;}if(!isNaN(variable)){return Number(variable);}return true;}function _fPaM(variable){return(typeof(variable)!=_s7OcS[45]&&!isNaN(variable));}function _fVaC(variable){if(typeof(variable)==_s7OcS[46]){return true;}if(typeof(variable)==_s7OcS[47]){return(!variable.length);}if(typeof(variable)==_s7OcS[48]){for(var _vYbR in variable){return false;}return true;}return(!variable);}function _fIvN(variable){return!_fVaC(variable);}function _fLkR(variable){return(typeof(variable)==_s7OcS[49]);}function _fIcP(variable){return(typeof(variable)==_s7OcS[50]);}function _fQrU(variable){return(typeof(variable)==_s7OcS[51]||typeof(variable)==_s7OcS[52]);}function _fThE(variable){return(typeof(variable)==_s7OcS[53]);}function _fWaB(elem){return(($(window).scrollTop()+$(window).height())>=$(elem).offset().top);}function _fAfR(_vEnV){return(_vEnV.indexOf(_s7OcS[54])!=-1);}function _fLxR(_vEnV){return _vEnV.split(_s7OcS[55])[0].split(_s7OcS[56])[0];}function _fCxY(_vEnV){_vEnV=_fLxR(_vEnV).split(_s7OcS[57]);return _vEnV[_vEnV.length-1];}function _fRzO(elem,delay){if(_fMxD(delay)){delay=300;}if(_fVaC(elem)||$(elem).length==0){return;}$(_s7OcS[58]).animate({scrollTop:$(elem).offset().top},delay);}function _fMiT(elem){$(elem).select();$(elem).mouseup(function(){$(elem).unbind(_s7OcS[59]);return false;});}function _fGmY(min,_vAnF){if(_vAnF==min){return _vAnF;}if(_vAnF<min){var _vLuA=min;min=_vAnF;_vAnF=_vLuA;}return Math.floor(Math.random()*(_vAnF-min+1))+min;}function _fNlT(){var _vIjO=new Date();return _vIjO.getTime();}function _fGdQ(_vAiL){return _vAiL.match(/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,20}(\/\S*)?/g);}String.prototype.toCapitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1);};String.prototype.replaceAll=function(_vIqY,replacement){return this.split(_vIqY).join(replacement);};String.prototype.has=function(str){return(this.indexOf(str)!=-1);};String.prototype.hasNo=function(str){return(this.indexOf(str)==-1);};function _fDwT(_vAiL){return _vAiL.replaceAll(_s7OcS[60],_s7OcS[61]).replaceAll(_s7OcS[62],_s7OcS[63]).replaceAll(_s7OcS[64],_s7OcS[65]).replaceAll(_s7OcS[66],_s7OcS[67]).replaceAll(_s7OcS[68],_s7OcS[69]);}function _fQgI(str){try{JSON.parse(str);}catch(_vSxZ){return false;}return JSON.parse(str);}function _fNrP(original_text,open_keys,close_keys){var _vGxF=false;for(var _vOyC=0;_vOyC<open_keys.length;_vOyC++){if(original_text.indexOf(open_keys[_vOyC])!=-1){original_text=original_text.split(open_keys[_vOyC])[1];_vGxF=true;}}if(!_vGxF){return _s7OcS[70];}for(var _vOyC=0;_vOyC<close_keys.length;_vOyC++){original_text=original_text.split(close_keys[_vOyC])[0];}return original_text;}function _fRdA(_vEnV){return(_vEnV.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/)!=null);}function _fPmB(_vEnV){return(_vEnV.has(_s7OcS[71])&&_vEnV.has(_s7OcS[72])&&_vEnV.has(_s7OcS[73])&&_vEnV.has(_s7OcS[74]));}function _fEnO(){if(_s7OcS[75] in document){return true;}return false;}function _fKwV(c_name,value,exdays){if(!_fEnO()){return false;}var _vYaZ=new Date();_vYaZ.setDate(_vYaZ.getDate()+exdays);var _vShO=escape(value)+((exdays==null)?'':_s7OcS[76]+_vYaZ.toUTCString())+_s7OcS[77];document.cookie=c_name+_s7OcS[78]+_vShO;if(_fTpH(c_name)!==value){return false;}return true;}function _fAjF(){if(_fKwV(_s7OcS[79],_s7OcS[80])){return true;}return false;}function _fTpH(c_name){if(!_fEnO()){return _s7OcS[81];}var _vOyC,x,y,ARRcookies=document.cookie.split(_s7OcS[82]);for(_vOyC=0;_vOyC<ARRcookies.length;_vOyC++){x=ARRcookies[_vOyC].substr(0,ARRcookies[_vOyC].indexOf(_s7OcS[83]));y=ARRcookies[_vOyC].substr(ARRcookies[_vOyC].indexOf(_s7OcS[84])+1);x=x.replace(/^\s+|\s+$/g,_s7OcS[85]);if(x==c_name){return unescape(y);}}return _s7OcS[86];}function _fKyW(){if(typeof(localStorage)!==_s7OcS[87]){return true;}return false;}function _fLuA(_vYbR,value){if(_fKyW()){localStorage.setItem(_vYbR,value);return true;}return false;}function _fBdM(_vYbR){if(_fKyW()){var _vSsF=localStorage.getItem(_vYbR);if(_vSsF){return _vSsF;}}return _s7OcS[88];}function _fQyL(option_name,option_value){if(_fKyW()){return _fLuA(option_name,option_value);}else if(_fAjF()){return _fKwV(option_name,option_value);}return false;}function _fFnS(option_name){if(_fKyW()){return _fBdM(option_name);}else if(_fAjF()){return _fTpH(option_name);}return _s7OcS[89];}function _fTnF(_vEnV){if(_vEnV.indexOf(_s7OcS[90])==-1&&_vEnV.indexOf(_s7OcS[91])==-1){return _s7OcS[92];}return _fNrP(_vEnV,[_s7OcS[93],_s7OcS[94],_s7OcS[95],_s7OcS[96],_s7OcS[97],_s7OcS[98]],[_s7OcS[99],_s7OcS[100],_s7OcS[101],_s7OcS[102],_s7OcS[103]]);}function _fDpX(_vEnV){if(_vEnV.indexOf(_s7OcS[104])==-1&&_vEnV.indexOf(_s7OcS[105])==-1){return _s7OcS[106];}return _fNrP(_vEnV,[_s7OcS[107]],[_s7OcS[108],_s7OcS[109],_s7OcS[110],_s7OcS[111],_s7OcS[112]]);}function _fWlW(_vEnV){if(_vEnV.indexOf(_s7OcS[113])==-1){return _s7OcS[114];}return _fNrP(_vEnV,[_s7OcS[115],_s7OcS[116]],[_s7OcS[117],_s7OcS[118],_s7OcS[119],_s7OcS[120],_s7OcS[121]]);}function _fRxI(tag_selector,parent_selector,tag_html){for(_vOyC=0;_vOyC<100;_vOyC++){var _vTrR=false;$(tag_selector).each(function(){var _vHbP=$(this).parent();if(_vHbP.length&&(!_vHbP.is(parent_selector))){_vTrR=true;var _vWjT=_vHbP.clone();_vWjT.insertAfter(_vHbP);wrapper_html=_vHbP.html();_vTzM=wrapper_html.indexOf(tag_html);_vHbP.html(wrapper_html.substring(0,_vTzM));_vWjT.html(wrapper_html.substring(_vTzM+tag_html.length));$(tag_html).insertAfter(_vHbP);}});if(!_vTrR){return;}}}function _fXzS(icon_code){icon_code=icon_code.replace(_s7OcS[122],_s7OcS[123]).replace(_s7OcS[124],_s7OcS[125]).replace(_s7OcS[126],_s7OcS[127]);var _vXaD=_s7OcS[128];var _vRzF=icon_code.indexOf(_s7OcS[129]);if(_vRzF!=-1){icon_code=icon_code.substring(_vRzF+_vXaD.length);}var _vBhE=icon_code.indexOf(_s7OcS[130]);if(_vBhE!=-1){icon_code=icon_code.substring(0,_vBhE);}_vBhE=icon_code.indexOf(_s7OcS[131]);if(_vBhE!=-1){icon_code=icon_code.substring(0,_vBhE);}return _s7OcS[132]+icon_code+_s7OcS[133];}function _fXlS(_vAiL){var _vTzM=0;for(var _vOyC=0;_vOyC<100;_vOyC++){var _vRfK=_vAiL.indexOf(_vIpZ,_vTzM);if(_vRfK!=-1){var _vEkD=_vAiL.indexOf(_vIpZ,_vRfK+_vIpZ.length);if(_vEkD!=-1){var _vHbI=_fXzS(_vAiL.substring(_vRfK+_vIpZ.length,_vEkD));_vAiL=_vAiL.substring(0,_vRfK)+_vHbI+_vAiL.substring(_vEkD+_vIpZ.length);_vTzM=_vRfK+_vHbI.length;}else{break;}}else{break;}}return _vAiL;}function _fQpW(_vAiL){_vAiL=encodeURIComponent(_vAiL);return _vAiL.replaceAll(_s7OcS[134],_s7OcS[135]).replaceAll(_s7OcS[136],_s7OcS[137]).replaceAll(_s7OcS[138],_s7OcS[139]).replaceAll(_s7OcS[140],_s7OcS[141]).replaceAll(_s7OcS[142],_s7OcS[143]);}function _fTzN(label_url){return _fLxR(label_url).split(_s7OcS[144])[1];}function _fVuO(_vIvF){return _s7OcS[145]+_vIvF;}function _fLaV(_vIvF){for(var _vOyC=0;_vOyC<_vFqL.label.length;_vOyC++){if(_vIvF==_vFqL.label[_vOyC].slug){return _vFqL.label[_vOyC].count;}}return 0;}function _fIoI(_vIvF){for(var _vOyC=0;_vOyC<_vFqL.label.length;_vOyC++){if(_vIvF==_vFqL.label[_vOyC].slug){return _vFqL.label[_vOyC].name;}}return _vIvF;}function _fJiL(){return($(_s7OcS[146]).length!=0);}function _fWgC(){return(_vJzF.current.has(_s7OcS[147]));}function _fPuS(){return(_vFqL.canonicalUrl==_vFqL.canonicalHomepageUrl&&(!_fJiL())&&!(_fWgC()));}function _fWnG(){return($(_s7OcS[148]).length!=0||_fJfW(_vJhD[_s7OcS[149]]));}function _fZbA(){return(_vJzF.current.has(_s7OcS[150])&&_fJfW(_vJhD[_s7OcS[151]]));}function _fCpA(){return(_vJzF.current.has(_s7OcS[152]));}function _fZiE(){return($(_s7OcS[153]).length!=0||_fWnG());}function _fPwW(){return($(_s7OcS[154]).length!=0);}function _fFgJ(){return(_fPwW()||_fJiL());}function _fXlF(){return _vFqL.isMobile;}function _fEkW(){return($(_s7OcS[155]).length!=0);}function _fGtS(){return $(_s7OcS[156]).length;}function _fLwW(){if($(_s7OcS[157]).length){return($(_s7OcS[158]).css(_s7OcS[159])!=_s7OcS[160]);}return false;}function _fIoI(slug_or_url){if(slug_or_url.has(_s7OcS[161])){slug_or_url=_fTzN(slug_or_url);}for(var _vOyC=0;_vOyC<_vFqL.label.length;_vOyC++){if(_vFqL.label[_vOyC].slug==slug_or_url){return _vFqL.label[_vOyC].name;}}return false;}function _fLaV(slug_or_url){if(slug_or_url.has(_s7OcS[162])){slug_or_url=_fTzN(slug_or_url);}for(var _vOyC=0;_vOyC<_vFqL.label.length;_vOyC++){if(_vFqL.label[_vOyC].slug==slug_or_url){return _vFqL.label[_vOyC].count;}}return false;}var _vVmC=5;if($(_s7OcS[163]).length==0||_vEcD.length==0||_vEcD.is(_s7OcS[164])){$(_s7OcS[165]).addClass(_s7OcS[166]);$(_s7OcS[167]).remove();_vEcD.remove();}else if(_vEcD.text().indexOf(_s7OcS[168])==-1&&_vEcD.text().indexOf(_s7OcS[169])==-1||_vEcD.text().indexOf(_s7OcS[170])==-1){_vEcD.appendTo($(_s7OcS[171]));_vEcD.css(_s7OcS[172],_s7OcS[173]);}else{var _vQnD=0;var _vBiT=0;var _vWtD=0;var _vNtV=0;_vEcD.css(_s7OcS[174],_s7OcS[175]);var _vBrP=setInterval(function(){_vQnD=_vEcD.height();if(!_vQnD){_vNtV++;if(_vNtV>=_vVmC){$(_s7OcS[176]).addClass(_s7OcS[177]);$(_s7OcS[178]).remove();_vEcD.remove();clearInterval(_vBrP);}return;}if(_vQnD!=_vBiT){_vBiT=_vQnD;_vWtD=0;return;}else{_vWtD++;}if(_vWtD>=_vVmC){clearInterval(_vBrP);_vEcD.appendTo($(_s7OcS[179]));_vEcD.css(_s7OcS[180],_s7OcS[181]);}},100);}var _vOvZ=window.location.search;if(!_fVaC(_vOvZ)){_vOvZ=_vOvZ.substring(1);var _vKbW=_vOvZ.split(_s7OcS[182]);for(var _vOyC=0;_vOyC<_vKbW.length;_vOyC++){var _vJyI=_vKbW[_vOyC].split(_s7OcS[183]);if(_vJyI.length>1){_vJhD[_vJyI[0]]=_vJyI[1];}}}_vFqL.totalPosts=-1;_vFqL.totalComments=-1;_vFqL.isMobile=(window.location.href.indexOf(_s7OcS[184])!=-1);_vFqL.languageDirection=$(_s7OcS[185]).html();_vFqL.pageType=$(_s7OcS[186]).html();_vFqL.pageTitle=$(_s7OcS[187]).html();_vFqL.pageName=$(_s7OcS[188]).html();_vFqL.metaDescription=$(_s7OcS[189]).html();_vFqL.postImageUrl=$(_s7OcS[190]).html();_vFqL.postImageThumbnailUrl=$(_s7OcS[191]).html();_vFqL.title=$(_s7OcS[192]).html();_vFqL.url=$(_s7OcS[193]).html();_vFqL.homepageUrl=$(_s7OcS[194]).html();_vFqL.canonicalHomepageUrl=$(_s7OcS[195]).html();_vFqL.canonicalUrl=$(_s7OcS[196]).html();_vFqL.enabledCommentProfileImages=Boolean($(_s7OcS[197]).html());_vFqL.blogId=$(_s7OcS[198]).html();_vFqL.postId=$(_s7OcS[199]).attr(_s7OcS[200]);_vFqL.bloggerCommentNumber=$(_s7OcS[201]).attr(_s7OcS[202]);if(isNaN(_vFqL.bloggerCommentNumber)){_vFqL.bloggerCommentNumber=0;}else{_vFqL.bloggerCommentNumber=Number(_vFqL.bloggerCommentNumber);}_vFqL.encoding=$(_s7OcS[203]).html();_vFqL.label=new Array();if(_vFqL.homepageUrl.lastIndexOf(_s7OcS[204])==_vFqL.homepageUrl.length-1){_vFqL.homepageUrl=_vFqL.homepageUrl.substring(0,_vFqL.homepageUrl.length-1);}$(_s7OcS[205]).each(function(){var _vNwN=$(this).text();_vNwN=_vNwN.split(_s7OcS[206]);for(var _vOyC=0;_vOyC<_vNwN.length-1;_vOyC+=2){var _vFcA=new Object();_vFcA.name=_vNwN[_vOyC];_vFcA.count=Number(_vNwN[_vOyC+1]);_vFcA.slug=_fQpW(_vFcA.name);_vFcA.url=_vFqL.homepageUrl+_s7OcS[207]+_vFcA.slug;_vFqL.label.push(_vFcA);}});_vFqL.labelNumber=_vFqL.label.length;if(_fIvN(_vFqL.label)){for(var _vOyC=0;_vOyC<_vFqL.label.length-1;_vOyC++){for(var _vDyU=_vOyC+1;_vDyU<_vFqL.label.length;_vDyU++){if(_vFqL.label[_vOyC].count<_vFqL.label[_vDyU].count){var _vLuA=_vFqL.label[_vOyC];_vFqL.label[_vOyC]=_vFqL.label[_vDyU];_vFqL.label[_vDyU]=_vLuA;}}}}_vFqL.postLabel=new Array();$(_s7OcS[208]).each(function(){_vFqL.postLabel.push($(this).attr(_s7OcS[209]));});_vJzF.current=window.location.href;_vJzF.canonical=_vFqL.canonicalUrl;_vJzF.hash=window.location.hash;_vJzF.feed=_s7OcS[210];if(_fJfW(_vJhD[_s7OcS[211]])){_vJzF.feed=_s7OcS[212]+_vFqL.blogId;}_vJzF.host=window.location.hostname;_vJzF.name=_vJzF.host.replace(_s7OcS[213],_s7OcS[214]).replace(_s7OcS[215],_s7OcS[216]).replace(_s7OcS[217],_s7OcS[218]);_vJzF.path=window.location.pathname;function _fDrG(image,must_load){if(typeof(must_load)==_s7OcS[219]){must_load=false;}var _vLxT=$(image).parent().parent();if(typeof(_vLxT)!=_s7OcS[220]&&_vLxT.is(_s7OcS[221])){var _vNmH=_vLxT.offset().top;var _vXqT=_vLxT.offset().left;var _vTqR=$(image).offset().top;var _vJhD=$(image).offset().left;var _vUzG=$(image).width();var _vSjI=$(image).height();if((_vUzG>_vSjI*3||_vRkL )&&(!$(image).is(_s7OcS[222]))){$(image).addClass(_s7OcS[223]);setTimeout(function(){_fDrG(image,must_load)},1000);return;}if(_vXqT<_vJhD&&$(image).parent().is(_s7OcS[224])){$(image).parent().removeClass(_s7OcS[225]).addClass(_s7OcS[226]);$(image).css(_s7OcS[227],_s7OcS[228]);if(_vRkL){var _vSjI=$(image).height();var _vCfT=_vLxT.height();var _vTqR=(_vSjI-_vCfT )/2;$(image).css(_s7OcS[229],_s7OcS[230]+_vTqR+_s7OcS[231]).css(_s7OcS[232],_s7OcS[233]);}}else if(_vNmH<_vTqR&&$(image).parent().is(_s7OcS[234])){$(image).parent().removeClass(_s7OcS[235]).addClass(_s7OcS[236]);}var _vUzG=$(image).width();var _vSjI=$(image).height();if($(image).parent().is(_s7OcS[237])&&_vSjI>1.3*_vUzG){$(image).css(_s7OcS[238],_s7OcS[239]);$(image).css(_s7OcS[240],0);}var _vRgY=$(image).attr(_s7OcS[241]);var _vUzG=$(image).width();var _vZmC=_fOxF(_vRgY,_s7OcS[242]+Math.ceil(_vUzG),false,must_load);if(_vRgY!=_vZmC){$(image).attr(_s7OcS[243],_vZmC);}}$(image).addClass(_s7OcS[244]).removeClass(_s7OcS[245]);}function _fLhP(images,must_load){if(typeof(images)!=_s7OcS[246]){images=$(_s7OcS[247]);}if(typeof(must_load)==_s7OcS[248]){must_load=false;}images.each(function(){if($(this).is(_s7OcS[249])&&(!must_load) ){return;}$(this).addClass(_s7OcS[250]);if($(this).parent().is(_s7OcS[251])){$(this).wrap(_s7OcS[252]);}var _vRgY=$(this).attr(_s7OcS[253]);if(_vRgY!=null){var _vXtF=_vRgY;if(_vXtF.indexOf(_s7OcS[254])!=-1){}else if(_vXtF.indexOf(_s7OcS[255])!=-1){if(_vXtF.indexOf(_s7OcS[256])!=-1){_vXtF=_vXtF.replace(_s7OcS[257],_s7OcS[258]);}}if(_vXtF!=_vRgY){$(this).attr(_s7OcS[259],_vXtF);}}if($(this).is(_s7OcS[260])){_fDrG(this,must_load);}else{$(this).each(function(){if(this.complete){$(this).load();if(typeof(IE9)!=_s7OcS[261]&&IE9){this.src=this.src;}}}).on(_s7OcS[262],function(){_fDrG(this,must_load);});}});}_fLhP();$(window).resize(function(){_fLhP();});_fLhP();function _fOxF(_vRgY,size,crop,must_load){if(_vRgY.indexOf(_s7OcS[263])==-1&&_vRgY.indexOf(_s7OcS[264])==-1){return _vRgY;}if(typeof(crop)==_s7OcS[265]){crop=false;}if(typeof(must_load)==_s7OcS[266]){must_load=false;}var _vDvX=0;var _vUsU=0;var _vNaC=0;var _vYdG=0;var _vVzV=0;var _vJgE=_vRgY;if(_fPaM(size)){_vDvX=_vUsU=Number(size);}else if(_fThE(size)){if(size.indexOf(_s7OcS[267])!==-1){var _vFvD=size.split(_s7OcS[268]);_vDvX=_vFvD[0];_vUsU=_vFvD[1];if(_fPaM(_vDvX)&&_fPaM(_vUsU)){_vDvX=Number(_vDvX);_vUsU=Number(_vUsU);}}else if(size.indexOf(_s7OcS[269])!=-1&&_fPaM(size.replace(_s7OcS[270],_s7OcS[271]))){_vDvX=Number(size.replace(_s7OcS[272],_s7OcS[273]));}else if(size.indexOf(_s7OcS[274])!=-1&&_fPaM(size.replace(_s7OcS[275],_s7OcS[276]))){_vUsU=Number(size.replace(_s7OcS[277],_s7OcS[278]));}else{return _vJgE;}}else{return _vJgE;}if(_vDvX==_vUsU&&_vDvX==0){return _vRgY;}var _vUhE=_s7OcS[279];if(_vRgY.indexOf(_s7OcS[280])!=-1){_vUhE=_s7OcS[281];}_vRgY=_vRgY.split(_vUhE);for(var _vOyC=0;_vOyC<_vRgY.length;_vOyC++){if(_vRgY[_vOyC].has(_s7OcS[282])||_vRgY[_vOyC].has(_s7OcS[283])||_vRgY[_vOyC].has(_s7OcS[284])||_vRgY[_vOyC].has(_s7OcS[285])){var _vBzL=_vRgY[_vOyC].split(_s7OcS[286]);_vBzL=_vBzL[0];_vBzL=_vBzL.replace(_s7OcS[287],_s7OcS[288]).replace(_s7OcS[289],_s7OcS[290]).replace(_s7OcS[291],_s7OcS[292]).replace(_s7OcS[293],_s7OcS[294]);if(_vBzL!=_s7OcS[295]&&!isNaN(_vBzL)){if(_vRgY[_vOyC].has(_s7OcS[296])){_vVzV=Number(_vBzL);}else if(_vRgY[_vOyC].has(_s7OcS[297])){_vYdG=Number(_vBzL);}else if(_vRgY[_vOyC].has(_s7OcS[298])){_vNaC=Number(_vBzL);}break;}}}if(_vOyC<_vRgY.length){if(_vDvX==_vUsU){if(_vDvX<_vVzV&&(!must_load ) ){return _vJgE;}_vRgY[_vOyC]=_s7OcS[299]+_vDvX;}else if(_vUsU==0){if(_vDvX<_vNaC&&(!must_load ) ){return _vJgE;}_vRgY[_vOyC]=_s7OcS[300]+_vDvX;}else if(_vDvX==0){if(_vUsU<_vYdG&&(!must_load ) ){return _vJgE;}_vRgY[_vOyC]=_s7OcS[301]+_vUsU;}else{if((_vUsU<_vYdG||_vDvX<_vNaC)&&(!must_load ) ){return _vJgE;}_vRgY[_vOyC]=_s7OcS[302]+_vDvX+_s7OcS[303]+_s7OcS[304]+_vUsU;}if(crop){_vRgY[_vOyC]+=_s7OcS[305];}}return _vRgY.join(_vUhE);}function _fNpT(_vEhS){var _vRgY=_s7OcS[306];var _vKdV=_s7OcS[307];var _vMlO=_s7OcS[308];var _vPkC=_s7OcS[309];index0=_vEhS.indexOf(_vKdV);if(index0!=-1){index1=_vEhS.indexOf(_vMlO,index0);if(index1==-1){_vMlO=_s7OcS[310];_vPkC=_s7OcS[311];index1=_vEhS.indexOf(_vMlO,index0);}if(index1!=-1){index2=_vEhS.indexOf(_vPkC,index1+_vMlO.length);if(index2!=-1){_vRgY=_vEhS.substring(index1+_vMlO.length,index2);}}}if(_vRgY==_s7OcS[312]){_vKdV=_s7OcS[313];_vMlO=_s7OcS[314];index0=_vEhS.indexOf(_vKdV);if(index0!=-1){index1=_vEhS.indexOf(_vMlO,index0+_vKdV.length);if(index0!=-1){_vRgY=_vEhS.substring(index0+_vKdV.length,index1);}}}if(_vRgY==_s7OcS[315]){_vKdV=_s7OcS[316];_vMlO=_s7OcS[317];_vPkC=_s7OcS[318];index0=_vEhS.indexOf(_vKdV);if(index0!=-1){index1=_vEhS.indexOf(_vMlO,index0);if(index0!=-1){index2=_vEhS.indexOf(_vPkC,index1+_vMlO.length);if(index0!=-1){_vRgY=_vEhS.substring(index1+_vMlO.length,index2);_vRgY=_vRgY.replace(_s7OcS[319],_s7OcS[320]);_vRgY=_vRgY.replace(_s7OcS[321],_s7OcS[322]);_vRgY=_vRgY.replace(_s7OcS[323],_s7OcS[324]);_vRgY=_vRgY.replace(_s7OcS[325],_s7OcS[326]);if(_vRgY.indexOf(_s7OcS[327])!=-1){_vRgY=_vRgY.substring(0,_vRgY.indexOf(_s7OcS[328]));}if(_vRgY.indexOf(_s7OcS[329])!=-1){_vRgY=_vRgY.substring(0,_vRgY.indexOf(_s7OcS[330]));}_vRgY=_s7OcS[331]+_vRgY+_s7OcS[332];}}}}return _vRgY;}function _fJpY(json){if(typeof(json)==_s7OcS[333]||typeof(SNEEIT_LICENSE)==_s7OcS[334]){return false;}if(!(_s7OcS[335] in json)){if(_s7OcS[336] in json){_vLuA=json.responseText;if(_vLuA.indexOf(_s7OcS[337])==-1){return false;}_vNcU=_vLuA.indexOf(_s7OcS[338]);if(_vLuA.indexOf(_s7OcS[339])==-1){return false;}_vRaA=_vLuA.indexOf(_s7OcS[340]);_vLuA=_vLuA.substring(_vNcU+1,_vRaA+2);return _fQgI(_vLuA);}else{return false;}}return json;}function _fEeR(json,_vKwO,_vOeA,date_format){if(typeof(json)==_s7OcS[341]||typeof(SNEEIT_LICENSE)==_s7OcS[342]){return false;}if(typeof(_vKwO)==_s7OcS[343]){var _vKwO=500;}if(typeof(_vOeA)==_s7OcS[344]){if(typeof(DEFAULT_POST_THUMBNAIL)!=_s7OcS[345]){var _vOeA=DEFAULT_POST_THUMBNAIL;}else{var _vOeA=_s7OcS[346];}}var _vKzJ=/<\S[^>]*>/g;var _vMcF=_s7OcS[347];this.id=json.feed.id.$t;var _vYbR=_s7OcS[348];var _vTzM=this.id.indexOf(_vYbR);this.id=this.id.substring(_vTzM+_vYbR.length);this.id=this.id.replace(_s7OcS[349],_s7OcS[350]);this.cate=new Array();if(_s7OcS[351] in json.feed){for(_vOyC=0;_vOyC<json.feed.category.length;_vOyC++){this.cate[_vOyC]=json.feed.category[_vOyC].term;}}this.title=_s7OcS[352];if(_s7OcS[353] in json.feed){this.title=json.feed.title.$t;}this.subtitle=_s7OcS[354];if(_s7OcS[355] in json.feed){this.subtitle=json.feed.subtitle.$t;}this.admin=new Object();this.admin.name=_s7OcS[356];this.admin.uri=_s7OcS[357];this.admin.avatar=_s7OcS[358];if(_s7OcS[359] in json.feed.author[0]){this.admin.name=json.feed.author[0].name.$t;}if(_s7OcS[360] in json.feed.author[0]){this.admin.uri=json.feed.author[0].uri.$t;}if(_s7OcS[361] in json.feed.author[0]){if(json.feed.author[0].gd$image.src!=_s7OcS[362]){this.admin.avatar=json.feed.author[0].gd$image.src;}}this.total_entry=Number(json.feed.openSearch$totalResults.$t);this.start_index=Number(json.feed.openSearch$startIndex.$t);this.item_per_page=Number(json.feed.openSearch$itemsPerPage.$t);this.entry_number=0;if(_s7OcS[363] in json.feed){this.entry_number=json.feed.entry.length;}this.entry=new Array();for(_vOyC=0;_vOyC<this.entry_number;_vOyC++){this.entry[_vOyC]=new Object();var _vLuA=new Object();var _vBtE=json.feed.entry[_vOyC];_vLuA.id=_vBtE.id.$t;_vYbR=_s7OcS[364];_vTzM=_vLuA.id.indexOf(_vYbR);_vLuA.id=_vLuA.id.substring(_vTzM+_vYbR.length);_vLuA.published=_s7OcS[365];if(_s7OcS[366] in _vBtE){_vLuA.published=_vBtE.published.$t;}_vLuA.cate=new Array();if(_s7OcS[367] in _vBtE){for(_vDyU=0;_vDyU<_vBtE.category.length;_vDyU++){_vLuA.cate[_vDyU]=_vBtE.category[_vDyU].term;}}_vLuA.title=_s7OcS[368];if(_s7OcS[369] in _vBtE){_vLuA.title=_vBtE.title.$t;}_vLuA.content=_s7OcS[370];if(_s7OcS[371] in _vBtE){_vLuA.content=_vBtE.content.$t;}_vLuA.summary=_s7OcS[372];if(_s7OcS[373] in _vBtE){_vLuA.summary=_vBtE.summary.$t;}if(_vLuA.summary==_s7OcS[374]){_vLuA.summary=_vLuA.content.replace(_vKzJ,_s7OcS[375]);}if(_vLuA.content==_s7OcS[376]){_vLuA.content=_vLuA.summary;}if(_vLuA.summary.length>_vKwO){_vLuA.summary=_vLuA.summary.substring(0,_vKwO)+_s7OcS[377];}_vLuA.link=_s7OcS[378];_vLuA.parentId=_s7OcS[379];_vLuA.reply_label=_s7OcS[380];if(_s7OcS[381] in _vBtE){for(_vDyU=0;_vDyU<_vBtE.link.length;_vDyU++){if(_vBtE.link[_vDyU].rel==_s7OcS[382]){_vLuA.link=_vBtE.link[_vDyU].href;}if(_vBtE.link[_vDyU].rel==_s7OcS[383]){_vLuA.reply_label=_vBtE.link[_vDyU].title;}if(_vBtE.link[_vDyU].rel==_s7OcS[384]){_vLuA.parentId=_vBtE.link[_vDyU].href;_vLuA.parentId=_vLuA.parentId.split(_s7OcS[385])[1];}}}_vLuA.author=new Object();_vLuA.author.name=_s7OcS[386];_vLuA.author.uri=_s7OcS[387];_vLuA.author.avatar=_s7OcS[388];a0=_vBtE.author[0];if(_s7OcS[389] in a0){_vLuA.author.name=a0.name.$t;}if(_s7OcS[390] in a0){_vLuA.author.uri=a0.uri.$t;}if(_s7OcS[391] in a0){if(a0.gd$image.src!=_s7OcS[392]){_vLuA.author.avatar=a0.gd$image.src;}}_vLuA.thumbnail=_fNpT(_vLuA.content);_vLuA.has_thumbnail=true;if(_vLuA.thumbnail==_s7OcS[393]&&_s7OcS[394] in _vBtE){_vLuA.thumbnail=_vBtE.media$thumbnail.url;}if(_vLuA.thumbnail==_s7OcS[395]){_vLuA.thumbnail=_vOeA;_vLuA.has_thumbnail=false;}_vLuA.format=_s7OcS[396];if(_vLuA.content.split(_vMcF).length>3){_vLuA.format=_s7OcS[397];}else if(_vLuA.content.indexOf(_s7OcS[398])!=-1||_vLuA.content.indexOf(_s7OcS[399])!=-1||_vLuA.content.indexOf(_s7OcS[400])!=-1){_vLuA.format=_s7OcS[401];}else if(_vLuA.content.indexOf(_s7OcS[402])!=-1){_vLuA.format=_s7OcS[403];}_vLuA.reply_number=0;if(_s7OcS[404] in _vBtE){_vLuA.reply_number=Number(_vBtE.thr$total.$t);}_vLuA.reply_label=_vLuA.reply_label.replace(_vLuA.reply_number+_s7OcS[405],_s7OcS[406]);_vLuA.reply_to=_s7OcS[407];_vLuA.reply_json=_s7OcS[408];_vLuA.reply_title=_s7OcS[409];if(_s7OcS[410] in _vBtE){_vLuA.reply_to=_vBtE[_s7OcS[411]].href;_vLuA.reply_json=_vBtE[_s7OcS[412]].source;_vLuA.reply_json=_vLuA.reply_json.replace(_s7OcS[413],_s7OcS[414]);_vLuA.reply_json=_vLuA.reply_json+_s7OcS[415];}_vLuA.pid=_s7OcS[416];_vLuA.itemClass=_s7OcS[417];_vLuA.displayTime=_s7OcS[418];if(_s7OcS[419] in _vBtE){for(_vDyU=0;_vDyU<_vBtE.gd$extendedProperty.length;_vDyU++){if(_vBtE.gd$extendedProperty[_vDyU].name==_s7OcS[420]){_vLuA.pid=_vBtE.gd$extendedProperty[_vDyU].value;_vLuA.itemClass=_vLuA.pid;}if(_vBtE.gd$extendedProperty[_vDyU].name==_s7OcS[421]){_vLuA.displayTime=_vBtE.gd$extendedProperty[_vDyU].value;}}}_vLuA.pid=_vLuA.pid.replace(_s7OcS[422],_s7OcS[423]);this.entry[_vOyC]=_vLuA;}}function _fHsP(_vTpP,_vBfA){var _vFrX=_vBfA.split(_s7OcS[424])[0];if(_fVaC(_vFrX)){return _vBfA;}var _vMmD=_vFrX;if(_vMmD.has(_s7OcS[425])){var _vNcU=_vMmD.indexOf(_s7OcS[426]);var _vRaA=_vMmD.indexOf(_s7OcS[427],_vNcU+1);if(_vRaA!=-1){var _vMfA=_vMmD.substring(_vNcU,_vRaA+1);_vMmD=_vMmD.replaceAll(_vMfA,_s7OcS[428]+_vMfA.replaceAll(_s7OcS[429],_s7OcS[430])+_s7OcS[431]);}}var _vIqH=false;if(_vMmD.indexOf(_s7OcS[432])==_vMmD.length-1){_vIqH=true;_vTpP.addClass(_s7OcS[433]);_vMmD=_vMmD.substring(0,_vMmD.length-1);}if(_vMmD.indexOf(_s7OcS[434])==0){if(_vMmD.indexOf(_s7OcS[435])==_vMmD.length-1){_vIqH=true;_vTpP.addClass(_s7OcS[436]);_vMmD=_vMmD.substring(1,_vMmD.length-1);}}if(_vMmD.indexOf(_s7OcS[437])==0){_vIqH=true;_vTpP.addClass(_s7OcS[438]);_vMmD=_vMmD.substring(1);}if(_vIqH&&_vMmD){_vMmD=_s7OcS[439]+_vMmD+_s7OcS[440];}return _vBfA.replaceAll(_vFrX,_vMmD);}if(_fPuS()){$(_s7OcS[441]).remove();}else{if(SHOW_AFTER_POST_SECTION==_s7OcS[442]){$(_s7OcS[443]).remove();}else{$(_s7OcS[444]).appendTo($(_s7OcS[445]+SHOW_AFTER_POST_SECTION));}}$(_s7OcS[446]).addClass(_s7OcS[447]);$(_s7OcS[448]).each(function(){$(this).html($(this).html().replace(_s7OcS[449],_s7OcS[450]).replace(_s7OcS[451],_s7OcS[452]));});$(_s7OcS[453]).css(_s7OcS[454],_s7OcS[455]);$(_s7OcS[456]).each(function(){var _vBfY=$(this).html().replaceAll(_s7OcS[457],_s7OcS[458]);var _vTpP=$(this).parent();_vTpP.type=_vTpP.attr(_s7OcS[459]).replace(_s7OcS[460],_s7OcS[461]).replace(_s7OcS[462],_s7OcS[463]).toLowerCase();_vBfY=_fHsP(_vTpP,_vBfY);$(this).html(_vBfY);if(!_vBfY.has(_s7OcS[464])||!_vBfY.has(_s7OcS[465])){if(!_vTpP.is(_s7OcS[466])){$(this).show();return;}}_vBfY=_vBfY.split(_s7OcS[467]);_vTpP.section_id=_vTpP.parent().attr(_s7OcS[468]);_vTpP.id=_vTpP.attr(_s7OcS[469]);_vTpP.title=_vBfY[0];_vTpP.param=new Object();for(var _vOyC=1;_vOyC<_vBfY.length;_vOyC++){if(_vBfY[_vOyC].has(_s7OcS[470])){var _vPlF=_vBfY[_vOyC].split(_s7OcS[471]);if(_vPlF.length<2||(!_vPlF[0].length)||(!_vPlF[1].length)){continue;}_vTpP.param[_vPlF[0]]=_vPlF[1];}}if(_fVaC(_vTpP.param.type)){if(_vTpP.type==_s7OcS[472]){_vTpP.param.type=_s7OcS[473];}else{_vTpP.param.type=_s7OcS[474];}}if(!_fVaC(_vTpP.param)&&!_fVaC(_vTpP.param.type)){if(_fIvN(_vTpP.param.show)){if((_vTpP.param.show.has(_s7OcS[475])||_vTpP.param.show.has(_s7OcS[476]))&&(!_vJzF.current.has(_vTpP.param.show))){_vTpP.remove();return;}var _vDeC=_vTpP.param.show.split(_s7OcS[477]);for(var _vLaT=0;_vLaT<_vDeC.length;_vLaT++){switch(_vDeC[_vLaT]){case 'home':if(!_fPuS()){_vTpP.remove();return}break;case 'label':if(!_fCpA()){_vTpP.remove();return;}break;case 'search':if(!_fZbA()){_vTpP.remove();return;}break;case 'archive':if(!_fWnG()){_vTpP.remove();return;}break;case 'index':if(!_fZiE()){_vTpP.remove();return;}break;case 'page':case 'static':case 'static_page':if(!_fPwW()){_vTpP.remove();return;}break;case 'post':case 'article':case 'item':case 'single':if(!_fJiL()){_vTpP.remove();return;}break;case 'singular':if(!_fFgJ()){_vTpP.remove();return;}break;case '404':case 'error':case 'error_page':if(!_fEkW()){_vTpP.remove();return;}break;case 'mobile':case 'phone':if(!_fXlF()){_vTpP.remove();return;}break;default:break;}}}if(_fIvN(_vTpP.param.hide)){if((_vTpP.param.hide.has(_s7OcS[478])||_vTpP.param.hide.has(_s7OcS[479]))&&(_vJzF.current.has(_vTpP.param.hide))){_vTpP.remove();return;}var _vDfG=_vTpP.param.hide.split(_s7OcS[480]);for(var _vWwU=0;_vWwU<_vDfG.length;_vWwU++){switch(_vDfG[_vWwU]){case 'home':if(_fPuS()){_vTpP.remove();return}break;case 'label':if(_fCpA()){_vTpP.remove();return;}break;case 'search':if(_fZbA()){_vTpP.remove();return;}break;case 'archive':if(_fWnG()){_vTpP.remove();return;}break;case 'index':if(_fZiE()){_vTpP.remove();return;}break;case 'page':case 'static':case 'static_page':if(_fPwW()){_vTpP.remove();return;}break;case 'post':case 'article':case 'item':case 'single':if(_fJiL()){_vTpP.remove();return;}break;case 'singular':if(_fFgJ()){_vTpP.remove();return;}break;case '404':case 'error':case 'error_page':if(_fEkW()){_vTpP.remove();return;}break;case 'mobile':case 'phone':if(_fXlF()){_vTpP.remove();return;}break;default:break;}}}_vTpP.param.type=_vTpP.param.type.toLowerCase();if(_vTpP.type==_s7OcS[481]){_vTpP.content=new Object();_vTpP.find(_s7OcS[482]).each(function(){$(this).find(_s7OcS[483]).each(function(){_vTpP.content.src=$(this).attr(_s7OcS[484]);});$(this).find(_s7OcS[485]).each(function(){_vTpP.content.caption=$(this).html();});$(this).find(_s7OcS[486]).each(function(){_vTpP.content.href=$(this).attr(_s7OcS[487]);});});}if(_vTpP.type==_s7OcS[488]||_vTpP.type==_s7OcS[489]){_vTpP.content=new Array();_vTpP.find(_s7OcS[490]).each(function(){var _vWfM=$(this);_vWfM.name=$(this).html();_vWfM.url=$(this).attr(_s7OcS[491]);_vTpP.content[_vTpP.content.length]=_vWfM;});}if(_vTpP.type==_s7OcS[492]){_vTpP.selectAll=false;_vTpP.find(_s7OcS[493]).remove();_vTpP.content=new Array();_vTpP.find(_s7OcS[494]).each(function(){var _vAiL=$(this).html();for(var _vOyC=0;_vOyC<_vFqL.label.length;_vOyC++){if(_vAiL==_vFqL.label[_vOyC].name){break;}}if(_vOyC<_vFqL.label.length){var _vQzX=new Object();_vQzX.name=_vFqL.label[_vOyC].name;_vQzX.slug=_vFqL.label[_vOyC].slug;_vTpP.content.push(_vQzX);}});if(_vTpP.content.length==_vFqL.label.length||_vTpP.content.length==0){_vTpP.selectAll=true;}}if(_vTpP.type==_s7OcS[495]){_vTpP.json=new Object();_vTpP.json.entry=new Array();var _vTwV=1;_vTpP.find(_s7OcS[496]).each(function(){var _vBtE=$(this);_vBtE.link=$(this).find(_s7OcS[497]).attr(_s7OcS[498]);_vBtE.title=_s7OcS[499];_vBtE.cate=[_vTwV];_vTwV++;_vBtE.thumbnail=DEFAULT_POST_THUMBNAIL;_vBtE.content=_vBtE.summary=_s7OcS[500];_vBtE.id=_s7OcS[501];_vBtE.has_thumbnail=false;$(this).find(_s7OcS[502]).each(function(){_vBtE.title=$(this).find(_s7OcS[503]).html();});if(_fVaC(_vBtE.title)){_vBtE.title=$(this).find(_s7OcS[504]).html();}$(this).find(_s7OcS[505]).each(function(){_vBtE.thumbnail=$(this).attr(_s7OcS[506]);_vBtE.has_thumbnail=true;});$(this).find(_s7OcS[507]).each(function(){var _vCiM=$(this).html();_vBtE.content=_vBtE.summary=_vCiM.substring(0,_vCiM.length-3);});_vTpP.json.entry[_vTpP.json.entry.length]=_vBtE;});}var _vPwG={'cols':_s7OcS[508],'clm':_s7OcS[509],'cls':_s7OcS[510],'c':_s7OcS[511],'cnt':_s7OcS[512],'h':_s7OcS[513],'btn':_s7OcS[514],'b':_s7OcS[515],'do':_s7OcS[516],'t':_s7OcS[517],'m':_s7OcS[518],'mt':_s7OcS[519],'a':_s7OcS[520],'au':_s7OcS[521],'cm':_s7OcS[522],'com':_s7OcS[523],'comments':_s7OcS[524],'d':_s7OcS[525],'sp':_s7OcS[526],'rdm':_s7OcS[527],'rm':_s7OcS[528],'sn':_s7OcS[529],'s':_s7OcS[530],'snip':_s7OcS[531],'description':_s7OcS[532],'ds':_s7OcS[533],'dsc':_s7OcS[534],'cat':_s7OcS[535],'ct':_s7OcS[536],'label':_s7OcS[537],'labels':_s7OcS[538],'lab':_s7OcS[539],'la':_s7OcS[540],'l':_s7OcS[541],'category':_s7OcS[542],'categories':_s7OcS[543],'va':_s7OcS[544],'idx':_s7OcS[545],'id':_s7OcS[546],'pagination':_s7OcS[547],'navigation':_s7OcS[548],'page':_s7OcS[549],'pag':_s7OcS[550],'pgn':_s7OcS[551],'nav':_s7OcS[552],'nv':_s7OcS[553],'p':_s7OcS[554],'pg':_s7OcS[555],'ico':_s7OcS[556],'i':_s7OcS[557],'ic':_s7OcS[558],'cl':_s7OcS[559],'col':_s7OcS[560],'clr':_s7OcS[561],'co':_s7OcS[562],'tb':_s7OcS[563],'thumb_bg':_s7OcS[564],'src':_s7OcS[565],'sr':_s7OcS[566],'spc':_s7OcS[567],'spa':_s7OcS[568],'spacing':_s7OcS[569],'hst':_s7OcS[570],'ho':_s7OcS[571],'tp':_s7OcS[572],'to':_s7OcS[573],'top':_s7OcS[574],'tpc':_s7OcS[575]};for(var _vYbR in _vPwG){if(_fJfW(_vTpP.param[_vYbR])){_vTpP.param[_vPwG[_vYbR]]=_vTpP.param[_vYbR];}}if(_fJfW(_vTpP.param.count)&&_fPaM(_vTpP.param.count)){_vTpP.param.count=Number(_vTpP.param.count);}_vTpP.param.subtype=_s7OcS[576];if(_vTpP.param.type.has(_s7OcS[577])){_vTpP.param.type=_vTpP.param.type.replaceAll(_s7OcS[578],_s7OcS[579]).replaceAll(_s7OcS[580],_s7OcS[581]);if(_vTpP.param.type==_s7OcS[582]){_vTpP.param.type=_s7OcS[583];}_vTpP.param.subtype=_s7OcS[584];}_vJgJ.push(_vTpP);$(this).html(_vTpP.title).show();_vTpP.hide().addClass(_vTpP.param.type).addClass(_vTpP.type);if(_vTpP.param.subtype){_vTpP.addClass(_vTpP.param.subtype);}}else{$(this).html(_vTpP.title).show();}});var _vCaL=new Array();for(var _vOyC=0;_vOyC<_vJgJ.length;_vOyC++){var _vTpP=_vJgJ[_vOyC];var _vSqO=_vTpP.param;if(_fJfW(_vSqO.space)&&(_vSqO.space==_s7OcS[585]||_vSqO.space==_s7OcS[586]||_vSqO.space==_s7OcS[587])){_vTpP.addClass(_s7OcS[588]);}if(_vSqO.subtype==_s7OcS[589]){var _vSiW=new Array();var _vGkT=_vTpP.section_id;for(var _vDyU=_vOyC;_vDyU<_vJgJ.length;_vDyU++){if(_vJgJ[_vDyU].param.subtype!=_s7OcS[590]||_vTpP.section_id!=_vGkT){break;}_vJgJ[_vDyU].param.subtype=_s7OcS[591];_vSiW.push(_vJgJ[_vDyU]);}_vCaL.push(_vSiW);}if(_vSqO.type==_s7OcS[592]&&_vTpP.type==_s7OcS[593]){for(var _vDyU=0;_vDyU<_vTpP.content.length;_vDyU++){var _vWfM=_vTpP.content[_vDyU];var _vJzJ=_vWfM.name;if(!_vJzJ.has(_s7OcS[594])&&!_vJzJ.has(_s7OcS[595])){_vWfM.attr(_s7OcS[596],_vJzJ.toCapitalize().replace(_s7OcS[597],_s7OcS[598])).addClass(_vJzJ.toLowerCase()).html(_s7OcS[599]+_vWfM.name+_s7OcS[600]);}else{_vWfM.find(_s7OcS[601]).each(function(){_vJzJ=$(this).attr(_s7OcS[602]);if(_vJzJ.has(_s7OcS[603])){_vJzJ=_vJzJ.split(_s7OcS[604])[1];if(_vJzJ.has(_s7OcS[605])){_vJzJ=_vJzJ.split(_s7OcS[606])[0];}_vWfM.attr(_s7OcS[607],_vJzJ.toCapitalize()).addClass(_vJzJ.toLowerCase());}});}if(_fTzB(_vTpP.param.target)){_vWfM.attr(_s7OcS[608],_s7OcS[609]);}}_fAfK(_vTpP);continue;}if(_vSqO.type==_s7OcS[610]&&_vTpP.type==_s7OcS[611]){var _vSsF=_s7OcS[612];for(var _vDyU=0;_vDyU<_vTpP.content.length;_vDyU++){var _vWfM=_vTpP.content[_vDyU];var _vAiL=_vWfM.name;var _vLeF=_vWfM.url;if(!_vAiL.has(_s7OcS[613])){continue;}_vAiL=_vAiL.split(_s7OcS[614]);var _vCjM=_vAiL[0];var _vNeS=_vAiL[1];var _vMzH=trans(_s7OcS[615]);var _vChX=trans(_s7OcS[616]);if(typeof(_vAiL[2])!=_s7OcS[617]){_vMzH=_vAiL[2];}if(typeof(_vAiL[3])!=_s7OcS[618]){_vChX=_vAiL[3];}_vCjM=_vCjM.replace(_s7OcS[619],_s7OcS[620]);_vCjM=_vCjM.replace(_s7OcS[621],_s7OcS[622]).replace(_s7OcS[623],_s7OcS[624]).replace(_s7OcS[625],_s7OcS[626]).replace(_s7OcS[627],_s7OcS[628]).replace(_s7OcS[629],_s7OcS[630]).replace(_s7OcS[631],_s7OcS[632]).replaceAll(_s7OcS[633],_s7OcS[634]).toLowerCase();var _vJzJ=_vCjM.split(_s7OcS[635])[0];_vSsF+=_s7OcS[636]+_vDyU+_s7OcS[637]+_vJzJ+_s7OcS[638]+_vJzJ+_s7OcS[639]+_vLeF+_s7OcS[640]+_vCjM+_s7OcS[641]+_vNeS+_s7OcS[642]+_vMzH+_s7OcS[643]+_vJzJ+_s7OcS[644]+_vChX+_s7OcS[645]+_vDgB;}_vTpP.find(_s7OcS[646]).html(_vSsF);_vTpP.show();continue;}if(_vSqO.type==_s7OcS[647]&&_vTpP.type==_s7OcS[648]){var _vGkT=_vTpP.section_id;var _vKwG=new Array();for(var _vDyU=_vOyC;_vDyU<_vJgJ.length;_vDyU++){var _vTpP=_vJgJ[_vDyU];var _vSqO=_vTpP.param;if(_vSqO.type!=_s7OcS[649]||_vTpP.type!=_s7OcS[650]||_vTpP.section_id!=_vGkT){break;}_vKwG[_vKwG.length]=_vTpP;}_vOyC=_vDyU-1;_fUiT(_vKwG);continue;}if(_vTpP.param.type==_s7OcS[651]||_vTpP.type==_s7OcS[652]){_fCoI(_vTpP);continue;}if(_vTpP.type==_s7OcS[653]){_vTpP.addClass(_s7OcS[654]).show();_vTpP.find(_s7OcS[655]).addClass(_s7OcS[656]+_vTpP.id).attr(_s7OcS[657],_s7OcS[658]+_vTpP.id);_fBvK(_vTpP);continue;}if(_vTpP.type==_s7OcS[659]&&_vTpP.param.type!=_s7OcS[660]){_vTpP.attr(_s7OcS[661],_vOyC);_vTpP.addClass(_s7OcS[662]);_fOfD(_vTpP);continue;}}for(var _vOyC=0;_vOyC<_vCaL.length;_vOyC++){_fGrZ(_vCaL[_vOyC]);}$(_s7OcS[663]+$(_s7OcS[664]).html()+_s7OcS[665]).insertAfter($(_s7OcS[666]));$(_s7OcS[667]).each(function(){var _vXmT=$(this).attr(_s7OcS[668]);if(typeof(_vXmT)!=_s7OcS[669]&&_vXmT.length>3){if(_vXmT.indexOf(_s7OcS[670])==-1){_vXmT=_s7OcS[671]+_vXmT}$(this).find(_s7OcS[672]).each(function(){$(this).html(_s7OcS[673]+_vXmT+_s7OcS[674]+$(this).html());});}if($(this).is(_s7OcS[675])){$(this).append(_s7OcS[676]+_s7OcS[677] );}});$(_s7OcS[678]).click(function(_vSxZ){var _vLeF=$(this).attr(_s7OcS[679]);if(typeof(_vLeF)!=_s7OcS[680]&&_vLeF.length>2){return true;}_vSxZ.preventDefault();var _vWdJ=$(this).parent();if(_vWdJ.is(_s7OcS[681])){_vWdJ.addClass(_s7OcS[682]).removeClass(_s7OcS[683]).find(_s7OcS[684]).slideUp();}else{_vWdJ.removeClass(_s7OcS[685]).addClass(_s7OcS[686]).find(_s7OcS[687]).slideDown();}return false;});$(_s7OcS[688]).click(function(){var _vWdJ=$(this).parent();_vWdJ.removeClass(_s7OcS[689]).addClass(_s7OcS[690]).find(_s7OcS[691]).slideDown();});$(_s7OcS[692]).click(function(){var _vWdJ=$(this).parent();_vWdJ.addClass(_s7OcS[693]).removeClass(_s7OcS[694]).find(_s7OcS[695]).slideUp();});$(_s7OcS[696]).attr(_s7OcS[697],_s7OcS[698]);$(_s7OcS[699]).each(function(){var _vXmT=$(this).attr(_s7OcS[700]);if(typeof(_vXmT)!=_s7OcS[701]&&_vXmT.length>3){if(_vXmT.indexOf(_s7OcS[702])==-1){_vXmT=_s7OcS[703]+_vXmT}$(this).find(_s7OcS[704]).each(function(){$(this).html(_s7OcS[705]+_vXmT+_s7OcS[706]+$(this).html());});}if($(this).find(_s7OcS[707]).length){$(this).find(_s7OcS[708]).wrap(_s7OcS[709]);$(this).find(_s7OcS[710]).each(function(){$(this).html($(this).html()+_s7OcS[711]);});}else{$(this).append(_s7OcS[712]);}});$(_s7OcS[713]).append(_vDgB);$(_s7OcS[714]).each(function(){var _vKvM=$(this).attr(_s7OcS[715]);if(_fJfW(_vKvM)&&_vKvM==_s7OcS[716]){$(this).addClass(_s7OcS[717]);if($(this).is(_s7OcS[718])){var _vLeF=$(this).find(_s7OcS[719]).attr(_s7OcS[720]);$(this).attr(_s7OcS[721],_fTzN(_vLeF));$(this).addClass(_s7OcS[722]);$(this).find(_s7OcS[723]).prepend(_s7OcS[724]);}else{$(this).addClass(_s7OcS[725]);}}});$(_s7OcS[726]).each(function(){var _vLeF=$(this).attr(_s7OcS[727]);if(_fJfW(_vLeF)&&_vJzF.current==_vLeF){$(this).addClass(_s7OcS[728]);$(this).parent().addClass(_s7OcS[729]);}});$(_s7OcS[730]).addClass(_s7OcS[731]).show().append(_vDgB);function _fOmB(_vPjV){var _vZtH=new Array();var _vZuD=new Array();var _vIpY=_s7OcS[732]+_fNlT()+_s7OcS[733];var _vImG=_s7OcS[734]+_fNlT()+_s7OcS[735];var _vTzM=0;var _vNcU=-1;var _vRaA=-1;for(var _vOyC=0;_vOyC<1000;_vOyC++){_vTzM=_vPjV.indexOf(_s7OcS[736],_vTzM);if(_vTzM==-1){break;}_vNcU=_vTzM;_vTzM=_vPjV.indexOf(_s7OcS[737],_vTzM);if(_vTzM==-1){break;}_vRaA=_vTzM;_vZtH.push(_vPjV.substring(_vNcU,_vRaA+1));_vPjV=_vPjV.substring(0,_vNcU)+_vIpY+_vPjV.substring(_vRaA+1);_vTzM=_vNcU+_vIpY.length;}if(COMMENT_MEDIA_ATTACH){var _vAsV=_fGdQ(_vPjV);if(_vAsV!=null){for(var _vOyC=0;_vOyC<_vAsV.length;_vOyC++){var _vEnV=_vAsV[_vOyC];_vPjV=_vPjV.replace(_vEnV,_vImG);if(_vEnV.has(_s7OcS[738])||_vEnV.has(_s7OcS[739])){var _vDeO=_fTnF(_vEnV);var _vNsB=_fDpX(_vEnV);if(_vDeO){var _vXdK=_s7OcS[740]+_vDeO+_s7OcS[741];if(_vNsB){_vXdK+=_s7OcS[742]+_vNsB;}else{_vXdK+=_s7OcS[743];}_vXdK+=_s7OcS[744];_vZuD.push(_vXdK);continue;}}if(_vEnV.has(_s7OcS[745])){var _vDeO=_fWlW(_vEnV);if(_vDeO){_vZuD.push(_s7OcS[746]+_vDeO+_s7OcS[747]);continue;}}if(_fRdA(_vEnV)){_vZuD.push(_s7OcS[748]+_vEnV+_s7OcS[749]);continue;}_vZuD.push(_s7OcS[750]+_vEnV+_s7OcS[751]+_vEnV+_s7OcS[752]);}}}if(COMMENT_EMOTICONS){$.each(_vLyT,function(_vYbR,value ){_vPjV=_vPjV.replaceAll(_vYbR,_s7OcS[753]+value+_s7OcS[754]);});}for(var _vOyC=0;_vOyC<_vZtH.length;_vOyC++){_vPjV=_vPjV.replace(_vIpY,_vZtH[_vOyC]);}for(var _vOyC=0;_vOyC<_vZuD.length;_vOyC++){_vPjV=_vPjV.replace(_vImG,_vZuD[_vOyC]);}return _vPjV;}function _fHlA(){var _vCpW=$(_s7OcS[755]);_vCpW.html(_s7OcS[756]);var _vYyS=($(_s7OcS[757]).length==0);if(typeof(SNEEIT_LICENSE)==_s7OcS[758]){return false;}for(var _vOyC=0;_vOyC<COMMENT_ITEMS.length;_vOyC++){var _vWmB=COMMENT_ITEMS[_vOyC];if(COMMENT_EMOTICONS||COMMENT_MEDIA_ATTACH){_vWmB.body=_fOmB(_vWmB.body);}var _vWnG=0;if(_fIvN(_vWmB.parentId)){if(_vCpW.find(_s7OcS[759]+_vWmB.parentId).length!=0){_vWnG=Number(_vCpW.find(_s7OcS[760]+_vWmB.parentId).attr(_s7OcS[761]))+1;}}var _vBiT=_s7OcS[762]+_vWmB.id+_s7OcS[763]+_vOyC+_s7OcS[764]+_vWmB.id+_s7OcS[765]+_vWnG+_s7OcS[766];var _vLuA=_s7OcS[767];if(_fVaC(_vWmB.author.avatarUrl)||_vWmB.author.avatarUrl.has(_s7OcS[768])){_vWmB.author.avatarUrl=DEFAULT_COMMENT_AVATAR;}_vWmB.author.avatarUrl=_fOxF(_vWmB.author.avatarUrl,48);_vLuA=_s7OcS[769]+_vWmB.author.avatarUrl+_s7OcS[770];if(_fVaC(_vWmB.author.profileUrl)){_vBiT+=_s7OcS[771]+_vLuA+_s7OcS[772];}else{_vBiT+=_s7OcS[773]+_vWmB.author.profileUrl+_s7OcS[774]+_vLuA+_s7OcS[775];}_vBiT+=_s7OcS[776]+_s7OcS[777];_vLuA=_vWmB.author.name;if(_fVaC(_vWmB.author.profileUrl)){_vBiT+=_s7OcS[778]+_vLuA+_s7OcS[779];}else{_vBiT+=_s7OcS[780]+_vWmB.author.profileUrl+_s7OcS[781]+_vLuA+_s7OcS[782];}_vBiT+=_s7OcS[783]+_vWmB.permalink+_s7OcS[784]+_vWmB.timestamp+_s7OcS[785]+_vWmB.displayTime+_s7OcS[786]+_s7OcS[787]+_s7OcS[788]+_vWmB.body+_s7OcS[789]+_s7OcS[790]+(_vWnG<=MAX_REPLY_DEPTH&&_vYyS?_s7OcS[791]+_vWmB.id+_s7OcS[792]+trans(_s7OcS[793])+'</span> <i class="fa fa-mail-forward"></i></a>':_s7OcS[794])+_s7OcS[795]+_vWmB.deleteclass+_s7OcS[796]+_vFqL.blogId+_s7OcS[797]+_vWmB.id+_s7OcS[798]+trans(_s7OcS[799])+_s7OcS[800]+_s7OcS[801]+_s7OcS[802]+_vDgB+_s7OcS[803]+_vWmB.id+_s7OcS[804]+_s7OcS[805];if(_vWnG){if(_vCpW.find(_s7OcS[806]+_vWmB.parentId).length==0){if(_vCpW.find(_s7OcS[807]+_vWmB.parentId).length!=0){_vCpW.find(_s7OcS[808]+_vWmB.parentId).append(_s7OcS[809]+_vWmB.parentId+_s7OcS[810]);}else{_vCpW.find(_s7OcS[811]).append(_vBiT);}}_vCpW.find(_s7OcS[812]+_vWmB.parentId).append(_vBiT);}else{_vCpW.find(_s7OcS[813]).append(_vBiT);}}$(document).on(_s7OcS[814],_s7OcS[815],function(){var _vHdM=$(this).attr(_s7OcS[816]);$(_s7OcS[817]).attr(_s7OcS[818],$(_s7OcS[819]).attr(_s7OcS[820])+_s7OcS[821]+_vHdM);$(_s7OcS[822]).appendTo($(_s7OcS[823]+_vHdM));$(document).find(_s7OcS[824]).each(function(){$(this).addClass(_s7OcS[825]).removeClass(_s7OcS[826]).html(_s7OcS[827]+trans(_s7OcS[828])+_s7OcS[829]);});$(this).addClass(_s7OcS[830]).removeClass(_s7OcS[831]).html(_s7OcS[832]+trans(_s7OcS[833])+_s7OcS[834]);});$(document).on(_s7OcS[835],_s7OcS[836],function(){var _vRxZ=$(_s7OcS[837]).attr(_s7OcS[838],$(_s7OcS[839]).attr(_s7OcS[840]));$(_s7OcS[841]).appendTo($(_s7OcS[842]));$(this).addClass(_s7OcS[843]).removeClass(_s7OcS[844]).html(_s7OcS[845]+trans(_s7OcS[846])+_s7OcS[847]);});_vCpW.find(_s7OcS[848]).each(function(){$(this).html($.format.prettyDate(new Date(Number($(this).attr(_s7OcS[849])))));});if(_vJzF.current.has(_s7OcS[850])&&_vJzF.current.has(_s7OcS[851])){setTimeout(function(){_fRzO(_vJzF.hash);},1000);}}var _vJmK=new Array();var _vVmF=0;function _fVbD(){$.get(_vJmK[_vVmF],function(json){json=_fJpY(json);if(typeof(json)==_s7OcS[852]||typeof(SNEEIT_LICENSE)==_s7OcS[853]){return false;}if(!json){_fHlA();return;}json=new _fEeR(json);if(json.entry.length==0){_fHlA();return;}for(var _vOyC=json.entry.length-1;_vOyC>=0;_vOyC-=1){var _vWmB=new Object();_vSxZ=json.entry[_vOyC];_vWmB.id=_vSxZ.id;if(_vSxZ.parentId){_vWmB.parentId=_vSxZ.parentId;}_vWmB.body=_vSxZ.content;var _vIjO=new Date(_vSxZ.published);_vWmB.timestamp=_vIjO.getTime().toString();_vWmB.permalink=_vSxZ.link;_vWmB.author=new Object();_vWmB.author.name=_vSxZ.author.name;_vWmB.author.avatarUrl=_vSxZ.author.avatar;_vWmB.author.profileUrl=_vSxZ.author.uri;_vWmB.displayTime=_vSxZ.displayTime;_vWmB.deleteclass=_s7OcS[854]+_vSxZ.itemClass;COMMENT_ITEMS.push(_vWmB);}_vVmF++;if(_vVmF>=_vJmK.length){_fHlA();return;}else{_fVbD();}},_s7OcS[855]).fail(function(){$(_s7OcS[856]).show();_fHlA();});}$(_s7OcS[857]+PRIMARY_COMMENT_SYSTEM+_s7OcS[858]).show();if(PRIMARY_COMMENT_SYSTEM==_s7OcS[859]){var _vQiC=document.createElement(_s7OcS[860]);_vQiC.async=true;_vQiC.type=_s7OcS[861];_vQiC.src=_s7OcS[862]+disqus_shortname+_s7OcS[863];(document.getElementsByTagName(_s7OcS[864])[0]||document.getElementsByTagName(_s7OcS[865])[0]).appendChild(_vQiC);}var _vVgJ=PRIMARY_COMMENT_SYSTEM;if(_vJzF.hash.has(_s7OcS[866])){_vVgJ=_s7OcS[867];}else if(_fJfW(_vJhD[_s7OcS[868]])){_vVgJ=_s7OcS[869];}if($(_s7OcS[870]).length&&_fIvN(COMMENT_ITEMS)){if(_vFqL.bloggerCommentNumber<=200){_fHlA();}else{for(var _vOyC=0;_vOyC<_vFqL.bloggerCommentNumber-200;_vOyC+=200){var _vOpN=200;if(_vOyC+_vOpN>_vFqL.bloggerCommentNumber-200){_vOpN=_vFqL.bloggerCommentNumber-_vOyC-200;}_vJmK.push(_vJzF.feed+_s7OcS[871]+_vFqL.postId+_s7OcS[872]+_vOpN+_s7OcS[873]+(_vOyC+1));}_fVbD();}}$(_s7OcS[874]).each(function(){if($(_s7OcS[875]).length==0){$(this).remove();return;}if($(_s7OcS[876]+PRIMARY_COMMENT_SYSTEM+_s7OcS[877]).length==0){$(_s7OcS[878]).first().addClass(_s7OcS[879]);}else{$(_s7OcS[880]+PRIMARY_COMMENT_SYSTEM+_s7OcS[881]).addClass(_s7OcS[882]);}$(_s7OcS[883]).addClass(_s7OcS[884]).appendTo($(_s7OcS[885]));$(_s7OcS[886]).appendTo($(_s7OcS[887]));$(_s7OcS[888]).addClass(_s7OcS[889]);if(_vVgJ!=PRIMARY_COMMENT_SYSTEM){$(_s7OcS[890]).removeClass(_s7OcS[891]);$(_s7OcS[892]).removeClass(_s7OcS[893]);$(_s7OcS[894]+_vVgJ+_s7OcS[895]).addClass(_s7OcS[896]);$(_s7OcS[897]+_vVgJ+_s7OcS[898]).addClass(_s7OcS[899]);}$(_s7OcS[900]).click(function(){if($(this).is(_s7OcS[901])){return}$(_s7OcS[902]).removeClass(_s7OcS[903]);$(this).addClass(_s7OcS[904]);$($(this).attr(_s7OcS[905])).addClass(_s7OcS[906]);});});if(FEATURE_IMAGES==_s7OcS[907]||FEATURE_IMAGES==_s7OcS[908]||FEATURE_IMAGES==_s7OcS[909]||FEATURE_IMAGES==_s7OcS[910]){var _vJxM=null;var _vLrL=null;var _vLcC=null;$(_s7OcS[911]).each(function(){if(_vJxM&&_vLrL){return;}var _vRgY=$(this).attr(_s7OcS[912]);var _vBfA=$(this).attr(_s7OcS[913]);if(_fVaC(_vJxM)&&!_fVaC(_vRgY)){_vJxM=$(this);}if(_fVaC(_vLrL)&&!_fVaC(_vBfA)&&_vBfA.toLowerCase().has(_s7OcS[914])&&!_fVaC(_vRgY)){_vLrL=$(this);}});if(_vLrL){_vJxM=_vLrL;}if(_vLrL&&(FEATURE_IMAGES==_s7OcS[915]||FEATURE_IMAGES==_s7OcS[916])){_vLcC=_vLrL;_vRgY=_vLrL;}else if(_vJxM&&(FEATURE_IMAGES==_s7OcS[917]||FEATURE_IMAGES==_s7OcS[918])){_vLcC=_vJxM;}if(_vLcC){var _vRgY=_vLcC.attr(_s7OcS[919]);var _vYrI=$(_s7OcS[920]).text();var _vPjV=_s7OcS[921]+_fOxF(_vRgY,1600)+_s7OcS[922];_vLcC.each(function(){$(this).hide();$(this).parents(_s7OcS[923]).hide();$(this).parents(_s7OcS[924]).hide();$(this).parents(_s7OcS[925]).hide();});if(FEATURE_IMAGES.indexOf(_s7OcS[926])!=-1){$(_s7OcS[927]).prepend(_vPjV);}else{$(_s7OcS[928]).append(_vPjV);}$(_s7OcS[929]).attr(_s7OcS[930],_vYrI).attr(_s7OcS[931],_vYrI);}}$(_s7OcS[932]).each(function(){var _vSpO=$(this).parent();if(_vSpO.length){image_parent_style=_vSpO.attr(_s7OcS[933]);if(image_parent_style&&_vSpO.is(_s7OcS[934])&&_vSpO.attr(_s7OcS[935]).indexOf(_s7OcS[936])!=-1&&_vSpO.attr(_s7OcS[937]).indexOf(_s7OcS[938])!=-1&&_vSpO.css(_s7OcS[939])==_vSpO.css(_s7OcS[940])&&_vSpO.css(_s7OcS[941])==_s7OcS[942]){_vSpO.css(_s7OcS[943],_s7OcS[944]).css(_s7OcS[945],_s7OcS[946]);}}});$(_s7OcS[947]).html(function(){var _vSsF=_s7OcS[948];var _vUpF=0;for(var _vOyC=0;_vOyC<_vFqL.label.length&&_vUpF<MAX_BREADCRUMB_DEPTH;_vOyC++){if($.inArray(_vFqL.label[_vOyC].url,_vFqL.postLabel)!=-1){_vUpF++;if(_vSsF){_vSsF+=_s7OcS[949];}_vSsF+=_s7OcS[950]+_fVuO(_vFqL.label[_vOyC].slug)+_s7OcS[951]+_vFqL.label[_vOyC].name+_s7OcS[952];}}if(_vSsF){_vSsF=_s7OcS[953]+trans(_s7OcS[954])+_s7OcS[955]+_vSsF;}return _vSsF;});$(_s7OcS[956]).html(function(){var _vSsF=$(this).html();$(_s7OcS[957]).each(function(){if($(this).find(_s7OcS[958]).length){_vSsF=_s7OcS[959]+$(this).html()+_s7OcS[960];$(this).remove();return _vSsF;}});return _vSsF;});$(_s7OcS[961]).html(function(){var _vSsF=_s7OcS[962];$(_s7OcS[963]).each(function(){if($(this).find(_s7OcS[964]).length){_vSsF=_s7OcS[965]+$(this).html()+_s7OcS[966];$(this).remove();return _vSsF;}});return _vSsF;});if($(_s7OcS[967]).length){for(var _vOyC=_vFqL.label.length-1;_vOyC>=0;_vOyC--){if($.inArray(_vFqL.label[_vOyC].url,_vFqL.postLabel)!=-1&&_vFqL.label[_vOyC].count>=NUM_BREAK_LINKS){break;}}if(_vOyC<0){_vOyC=0;}var _vOuC=_vFqL.label[_vOyC].count;var _vYfW=_fGmY(1,_vOuC-NUM_BREAK_LINKS-1);if(_vYfW<1){_vYfW=1;}$.get(_vJzF.feed+_s7OcS[968]+_vFqL.label[_vOyC].slug+_s7OcS[969]+(NUM_BREAK_LINKS+1)+_s7OcS[970]+_vYfW+_s7OcS[971],function(json){json=_fJpY(json);if(!json){return;}json=new _fEeR(json);if(json.entry.length==0){return;}var _vNcU=-1;if(json.entry.length<=NUM_BREAK_LINKS){_vNcU=0;}for(var _vOyC=0;_vOyC<json.entry.length;_vOyC++){if(json.entry[_vOyC].id==_vFqL.postId){_vNcU=0;break;}}if(_vNcU==-1){_vNcU=_fGmY(0,1);}var _vSsF=_s7OcS[972];var _vNyD=0;for(var _vOyC=_vNcU;_vOyC<json.entry.length&&_vNyD<NUM_BREAK_LINKS;_vOyC++){var _vSxZ=json.entry[_vOyC];if(_vSxZ.id==_vFqL.postId){continue;}_vSsF+=_s7OcS[973]+_vSxZ.link+_s7OcS[974]+_vSxZ.title+_s7OcS[975];_vNyD++;}$(_s7OcS[976]).html(_vSsF);},_s7OcS[977]);}$(_s7OcS[978]).each(function(){var _vPjV=$(this).html();var _vCqB=false;if(_vPjV.has(_s7OcS[979])){_vPjV=_vPjV.replace(_s7OcS[980],_s7OcS[981]);_vCqB=true;}if(_vPjV.has(_s7OcS[982])){_vPjV=_vPjV.replaceAll(_s7OcS[983],_s7OcS[984]);_vCqB=true;}if(_vPjV.has(_s7OcS[985])){_vPjV=_vPjV.replaceAll(_s7OcS[986],_s7OcS[987]);_vCqB=true;}if(_vPjV.has(_s7OcS[988])){_vPjV=_vPjV.replaceAll(_s7OcS[989],_s7OcS[990]);_vCqB=true;}if(_vPjV.has(_s7OcS[991])){if(SHOW_INNER_POST_ADS_AT==_s7OcS[992]){_vPjV=_vPjV.replaceAll(_s7OcS[993],_s7OcS[994]);}else{_vPjV=_vPjV.replaceAll(_s7OcS[995],_s7OcS[996]);_vCqB=true;}}if(_vPjV.has(_s7OcS[997])){if(SHOW_INNER_POST_ADS_AT==_s7OcS[998]){_vPjV=_vPjV.replaceAll(_s7OcS[999],_s7OcS[1000]);}else{_vPjV=_vPjV.replaceAll(_s7OcS[1001],_s7OcS[1002]);_vCqB=true;}}if(_vCqB){$(this).html(_vPjV);$(_s7OcS[1003]).appendTo($(_s7OcS[1004]));}if(SHOW_INNER_POST_ADS_AT==_s7OcS[1005]){var _vIeL=0;$(_s7OcS[1006]).each(function(){_vIeL++;if(_vIeL==4&&$(_s7OcS[1007]).length==0){$(_s7OcS[1008]).insertAfter($(this));}if(_vIeL==8&&$(_s7OcS[1009]).length==0){$(_s7OcS[1010]).insertAfter($(this));}});}if($(_s7OcS[1011]).length==0||_vYyC.length==0||_vYyC.is(_s7OcS[1012])||$.trim(_vYyC.html()).length==0){$(_s7OcS[1013]).remove();_vYyC.remove();}else{Inner_Post_Ads_Height=0;Inner_Post_Ads_Prev_Height=0;Inner_Post_Ads_Stable=0;_vYyC.css(_s7OcS[1014],_s7OcS[1015]);Inner_Post_Ads_Monitor=setInterval(function(){Inner_Post_Ads_Height=_vYyC.height();if(!Inner_Post_Ads_Height){return;}if(Inner_Post_Ads_Height!=Inner_Post_Ads_Prev_Height){Inner_Post_Ads_Prev_Height=Inner_Post_Ads_Height;Inner_Post_Ads_Stable=0;return;}else{Inner_Post_Ads_Stable++;}if(Inner_Post_Ads_Stable>=_vVmC){clearInterval(Inner_Post_Ads_Monitor);_vYyC.appendTo($(_s7OcS[1016]));_vYyC.css(_s7OcS[1017],_s7OcS[1018]);}},100);}if($(_s7OcS[1019]).length==0||_vBdH.length==0||_vBdH.is(_s7OcS[1020])||$.trim(_vBdH.text()).length==0){$(_s7OcS[1021]).remove();_vBdH.remove();}else{Inner_Post_Ads_2_Height=0;Inner_Post_Ads_2_Prev_Height=0;Inner_Post_Ads_2_Stable=0;_vBdH.css(_s7OcS[1022],_s7OcS[1023]);Inner_Post_Ads_2_Monitor=setInterval(function(){Inner_Post_Ads_2_Height=_vBdH.height();if(!Inner_Post_Ads_2_Height){return;}if(Inner_Post_Ads_2_Height!=Inner_Post_Ads_2_Prev_Height){Inner_Post_Ads_2_Prev_Height=Inner_Post_Ads_2_Height;Inner_Post_Ads_2_Stable=0;return;}else{Inner_Post_Ads_2_Stable++;}if(Inner_Post_Ads_2_Stable>=_vVmC){clearInterval(Inner_Post_Ads_2_Monitor);_vBdH.appendTo($(_s7OcS[1024]));_vBdH.css(_s7OcS[1025],_s7OcS[1026]);}},100);}});var _vOhL=new Array();$(_s7OcS[1027]).each(function(){var _vPjV=$(this).html();var _vZyQ=_s7OcS[1028];var _vIwO=_s7OcS[1029];var _vTsX=_s7OcS[1030]+_vZyQ+_s7OcS[1031];var _vIkM=_s7OcS[1032]+_vIwO+_s7OcS[1033];var _vJpV=_s7OcS[1034];var _vVuV=_s7OcS[1035];if(!_vPjV.has(_s7OcS[1036])||!_vPjV.has(_s7OcS[1037])){return;}if(_fFnS(_s7OcS[1038]+_vFqL.postId)==_s7OcS[1039]){_vPjV=_vPjV.replaceAll(_vJpV,_s7OcS[1040]).replaceAll(_vVuV,_s7OcS[1041]);$(this).html(_vPjV);return;}$(this).html($(this).html().replaceAll(_vJpV,_vTsX).replaceAll(_vVuV,_vIkM));_fRxI(_s7OcS[1042]+_vZyQ,_s7OcS[1043],_vTsX);_fRxI(_s7OcS[1044]+_vIwO,_s7OcS[1045],_vIkM);_vPjV=$(this).html();var _vTzM=0;var _vNcU=0;var _vRaA=0;for(var _vOyC=0;_vOyC<100;_vOyC++){_vNcU=_vPjV.indexOf(_vTsX,_vTzM);if(_vNcU==-1){break;}_vRaA=_vPjV.indexOf(_vIkM,_vTzM);if(_vRaA==-1){break;}_vOhL.push(_vPjV.substring(_vNcU,_vRaA+_vIkM.length));_vPjV=_vPjV.substring(0,_vNcU)+(_s7OcS[1046]+trans(_s7OcS[1047])+_s7OcS[1048]+trans(_s7OcS[1049])+_s7OcS[1050]+_vDgB+_s7OcS[1051] )+_vPjV.substring(_vRaA+_vIkM.length);_vRaA=_vNcU+_vTsX.length;}$(this).html(_vPjV);	
	$(document).ready(function() {
		$.ajaxSetup({ cache: true });
			$.getScript('//connect.facebook.net/en_US/sdk.js', function(){
			FB.init({
				appId : FACEBOOK_APP_ID,
				status : true,
				xfbml : true,
				cookie : false,
				version  : 'v2.5'
			});     
			FB.Event.subscribe('edge.create', function(href, widget) {								
				$.event.trigger({
					type: "unlock_content",
					url: href
				});
			});
			FB.Event.subscribe('comment.create', function(href, widget) {								
				$.event.trigger({
					type: "unlock_content",
					url: href
				});
			});
			FB.Event.subscribe('message.send', function(href, widget) {								
				$.event.trigger({
					type: "unlock_content",
					url: href
				});
			});			
		});
	});
	;window.twttr = (function (_vIjO, _vQiC, _vUyY) {
    var _vIbO, js, fjs = _vIjO.getElementsByTagName(_vQiC)[0];
    if (_vIjO.getElementById(_vUyY)) return;
    js = _vIjO.createElement(_vQiC);
    js.id = _vUyY;
    js.src = _s7OcS[1052];
    fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (_vIbO = {
        _e: [],
        ready: function (f) {
            _vIbO._e.push(f)
        }
    });
}(document, _s7OcS[1053], _s7OcS[1054]));
twttr.ready(function (twttr) {
    twttr.events.bind(_s7OcS[1055], function (event) {
        $.event.trigger({
            type: _s7OcS[1056],
            _vEnV: event.target.baseURI
        });
    });
    twttr.events.bind(_s7OcS[1057], function (event) {
        $.event.trigger({
            type: _s7OcS[1058],
            _vEnV: event.target.baseURI
        });
    });
    twttr.events.bind(_s7OcS[1059], function (event) {
        $.event.trigger({
            type: _s7OcS[1060],
            _vEnV: event.target.baseURI
        });
    });
    twttr.events.bind(_s7OcS[1061], function (event) {
        $.event.trigger({
            type: _s7OcS[1062],
            _vEnV: event.target.baseURI
        });
    });
    twttr.events.bind(_s7OcS[1063], function (event) {
        $.event.trigger({
            type: _s7OcS[1064],
            _vEnV: event.target.baseURI
        });
    });
});
$(document).on(_s7OcS[1065], function (_vSxZ) {
if (typeof (_vSxZ) == _s7OcS[1066]) {
    return;
}
var _vWaR = window.location.href;
var _vRwJ = _vSxZ.url;
if (_vRwJ && (_vRwJ.indexOf(_vWaR) != -1 || _vWaR.indexOf(_vRwJ) != -1)) {
    _vPjV = $(_s7OcS[1067]).html();
    var _vTzM = 0;
    $(_s7OcS[1068]).each(function () {
        if (typeof (_vOhL[_vTzM]) != _s7OcS[1069]) {
            $(this).replaceWith(_vOhL[_vTzM]);
        }
        _vTzM++;
    });
    _fQyL(_s7OcS[1070] + _vFqL.postId, _s7OcS[1071]);
}
});
});

function _fXfE(_vAnF, _vWnE) {
    $(_s7OcS[1072]).removeClass(_s7OcS[1073]);
    $(_s7OcS[1074]).removeClass(_s7OcS[1075]);
    $(_s7OcS[1076] + _vWnE).addClass(_s7OcS[1077]);
    $(_s7OcS[1078] + _vWnE).addClass(_s7OcS[1079]);
    if (_vWnE == _vAnF) {
        $(_s7OcS[1080]).removeClass(_s7OcS[1081]).attr(_s7OcS[1082], _s7OcS[1083] + _vWnE);
        $(_s7OcS[1084]).addClass(_s7OcS[1085]).attr(_s7OcS[1086], _s7OcS[1087] + (_vWnE + 1));
    } else if (_vWnE == 0) {
        $(_s7OcS[1088]).addClass(_s7OcS[1089]).attr(_s7OcS[1090], _s7OcS[1091]);
        $(_s7OcS[1092]).removeClass(_s7OcS[1093]).attr(_s7OcS[1094], _s7OcS[1095]);;
    } else {
        $(_s7OcS[1096]).removeClass(_s7OcS[1097]).attr(_s7OcS[1098], _s7OcS[1099] + _vWnE);
        $(_s7OcS[1100]).removeClass(_s7OcS[1101]).attr(_s7OcS[1102], _s7OcS[1103] + (_vWnE + 1));
    }
}
$(_s7OcS[1104]).each(function () {
    var _vPjV = $(this).html();
    var _vYbR = _s7OcS[1105];
    if (_vPjV.indexOf(_s7OcS[1106]) == -1) {
        return;
    }
    $(this).html($(this).html().replaceAll(_s7OcS[1107], _vYbR));
    if ($(_s7OcS[1108]).length) {
        _fRxI(_s7OcS[1109], _s7OcS[1110], _vYbR);
        pages = $(this).html().split(_vYbR);
        _vPjV = _s7OcS[1111];
        nav_html = _s7OcS[1112];
        for (var _vOyC = 0; _vOyC < pages.length; _vOyC++) {
            var _vMdQ = _s7OcS[1113] + _vOyC;
            var _vGnG = _s7OcS[1114] + _vOyC;
            if (_vOyC == 0) {
                _vMdQ += _s7OcS[1115];
                _vGnG += _s7OcS[1116];
            }
            _vPjV += _s7OcS[1117] + _vMdQ + _s7OcS[1118] + _vOyC + _s7OcS[1119] + pages[_vOyC] + _s7OcS[1120];
            nav_html += _s7OcS[1121] + (_vOyC + 1) + _s7OcS[1122] + _vGnG + _s7OcS[1123] + _vOyC + _s7OcS[1124] + (_vOyC + 1) + _s7OcS[1125];
        }
        nav_html = _vDgB + _s7OcS[1126] + _s7OcS[1127] + trans(_s7OcS[1128]) + _s7OcS[1129] + _s7OcS[1130] + nav_html + _s7OcS[1131] + (pages.length - 1) + _s7OcS[1132] + _s7OcS[1133] + trans(_s7OcS[1134]) + _s7OcS[1135] + _vDgB + _s7OcS[1136] + _vDgB;
        $(this).html(_vPjV);
        if (_vJzF.hash == _s7OcS[1137]) {
            $(_s7OcS[1138]).addClass(_s7OcS[1139]);
            return;
        }
        $(_s7OcS[1140]).html(nav_html);
        if (_vJzF.hash.has(_s7OcS[1141])) {
            var _vQhY = _vJzF.hash.replace(_s7OcS[1142], _s7OcS[1143]);
            if (_fPaM(_vQhY)) {
                _vQhY = Number(_vQhY) - 1;
                if (_vQhY >= 0) {
                    _fXfE(pages.length - 1, _vQhY);
                }
            }
        }
        $(_s7OcS[1144]).click(function () {
            if ($(this).is(_s7OcS[1145])) {
                return;
            }
            if (RELOAD_POST_PAGINATION) {
                var _vLeF = $(this).attr(_s7OcS[1146]);
                var _vVpV = _vJzF.current.split(_s7OcS[1147]);
                window.location.href = _vVpV[0] + _vLeF;
                location.reload();
                return true;
            }
            var _vAnF = Number($(_s7OcS[1148]).attr(_s7OcS[1149]));
            var _vUyY = Number($(_s7OcS[1150]).attr(_s7OcS[1151]));
            if ($(this).is(_s7OcS[1152])) {
                _vUyY = Number($(this).attr(_s7OcS[1153]));
            } else if ($(this).is(_s7OcS[1154])) {
                $(_s7OcS[1155]).addClass(_s7OcS[1156]);
                $(_s7OcS[1157]).remove();
                _fRzO(_s7OcS[1158], 300);
                return;
            } else if ($(this).is(_s7OcS[1159])) {
                _vUyY++;
                if (_vUyY > _vAnF) {
                    _vUyY = _vAnF;
                }
            } else if ($(this).is(_s7OcS[1160])) {
                _vUyY--;
                if (_vUyY < 0) {
                    _vUyY = 0;
                }
            }
            _fXfE(_vAnF, _vUyY);
            _fRzO(_s7OcS[1161], 300);
        });
    }
});
$(_s7OcS[1162]).each(function () {
    var _vChX = $.trim($(this).text());
    var _vBhF = $(this).html();
    if (_vChX.indexOf(_s7OcS[1163]) != 0 || _vChX.lastIndexOf(_s7OcS[1164]) != _vChX.length - 1) {
        return;
    }
    _vBhF = _vBhF.replace(_s7OcS[1165], _s7OcS[1166]);
    var _vKtR = _vBhF.lastIndexOf(_s7OcS[1167]);
    _vBhF = _vBhF.substring(0, _vKtR) + _vBhF.substring(_vKtR + 1);
    $(this).html(_fXlS(_vBhF)).addClass(_s7OcS[1168]);
});
$(_s7OcS[1169]).each(function () {
    var _vUaM = $(this).find(_s7OcS[1170]);
    if (_vUaM.length) {
        $(this).css(_s7OcS[1171], $(_vUaM[0]).css(_s7OcS[1172]));
    }
    var _vGyS = $(this).parent(_s7OcS[1173]);
    if (_vGyS.length) {
        for (var _vOyC = 0; _vOyC < _vGyS.length; _vOyC++) {
            if ($.trim($(_vGyS[_vOyC]).text()) == $.trim($(this).text())) {
                $(this).css(_s7OcS[1174], $(_vGyS[0]).css(_s7OcS[1175]));
                $(_vGyS[_vOyC]).css(_s7OcS[1176], _s7OcS[1177]);
                break;
            }
        }
    }
    var _vAvQ = $(this).find(_s7OcS[1178]);
    if (_vAvQ.length) {
        $(this).css(_s7OcS[1179], $(_vAvQ[0]).css(_s7OcS[1180]));
    }
    var _vNaF = $(this).parent(_s7OcS[1181]);
    if (_vNaF.length) {
        for (var _vOyC = 0; _vOyC < _vNaF.length; _vOyC++) {
            if ($.trim($(_vNaF[_vOyC]).text()) == $.trim($(this).text())) {
                $(this).css(_s7OcS[1182], $(_vNaF[0]).css(_s7OcS[1183]));
                break;
            }
        }
    }
    $(this).append(_s7OcS[1184]);
});
$(_s7OcS[1185]).append(_s7OcS[1186]);
$(_s7OcS[1187]).each(function () {
    var _vNhT = $(this).attr(_s7OcS[1188]);
    if (typeof (_vNhT) == _s7OcS[1189] || !_vNhT || _vNhT.indexOf(_s7OcS[1190]) == -1 || _vNhT.indexOf(_s7OcS[1191]) == -1) {
        return;
    }
    if ($(this).find(_s7OcS[1192]).length == 0) {
        return;
    }
    var _vYrA = $(this).text();
    if (_vYrA.length > 3) {
        return;
    }
    $(this).addClass(_s7OcS[1193]).css(_s7OcS[1194], _s7OcS[1195]).html(_vYrA);
});
$(_s7OcS[1196]).each(function () {
    if ($(this).find(_s7OcS[1197]).length == 0) {
        return;
    }
    var _vTaU = $(this).find(_s7OcS[1198]);
    var _vNhT = _vTaU.attr(_s7OcS[1199]);
    if (typeof (_vNhT) == _s7OcS[1200] || !_vNhT || _vNhT.indexOf(_s7OcS[1201]) == -1 || _vNhT.indexOf(_s7OcS[1202]) == -1) {
        return;
    }
    var _vYrA = _vTaU.text();
    if (_vYrA.length > 3) {
        return;
    }
    _vTaU.addClass(_s7OcS[1203]).css(_s7OcS[1204], _s7OcS[1205]).html(_vYrA);
    $(this).addClass(_s7OcS[1206]);
});
$(_s7OcS[1207]).each(function () {
    var _vWwG = $(this).html();
    var _vIvP = $.trim($(this).text());
    if (_vIvP.indexOf(_s7OcS[1208]) != 0 || _vIvP.lastIndexOf(_s7OcS[1209]) != _vIvP.length - 1) {
        return;
    }
    _vWwG = _vWwG.replace(_s7OcS[1210], _s7OcS[1211]);
    var _vKtR = _vWwG.lastIndexOf(_s7OcS[1212]);
    _vWwG = _vWwG.substring(0, _vKtR) + _vWwG.substring(_vKtR + 1);
    $(this).replaceWith(_s7OcS[1213] + _vWwG + _s7OcS[1214]);
});

function _fGfG(element) {
    var _vXuZ = document;
    var _vAiL = _vXuZ.getElementById(element);
    var _vEjJ;
    var _vXaK;
    if (_vXuZ.body.createTextRange) {
        _vEjJ = _vXuZ.body.createTextRange();
        _vEjJ.moveToElementText(_vAiL);
        _vEjJ.select();
    } else if (window.getSelection) {
        _vXaK = window.getSelection();
        _vEjJ = _vXuZ.createRange();
        _vEjJ.selectNodeContents(_vAiL);
        _vXaK.removeAllRanges();
        _vXaK.addRange(_vEjJ);
    }
}
var _vIiD = 0;
$(_s7OcS[1215]).each(function () {
    $(this).attr(_s7OcS[1216], _s7OcS[1217] + _vIiD);
    var _vBcR = _s7OcS[1218];
    if (_s7OcS[1219] in document) {
        _vBcR += _s7OcS[1220] + _vIiD + _s7OcS[1221] + trans(_s7OcS[1222]) + _s7OcS[1223];
    } else if (_s7OcS[1224] in window || _s7OcS[1225] in document.body) {
        _vBcR += _s7OcS[1226] + _vIiD + _s7OcS[1227] + trans(_s7OcS[1228]) + _s7OcS[1229];
    }
    _vBcR += _s7OcS[1230];
    $(_vBcR).insertBefore($(_s7OcS[1231] + _vIiD));
    _vIiD++;
});
$(_s7OcS[1232]).click(function () {
    var _vKsS = $(this).attr(_s7OcS[1233]);
    _fGfG(_s7OcS[1234] + _vKsS);
});
$(_s7OcS[1235]).click(function () {
    $(this).parent().find(_s7OcS[1236]).stop().remove();
    var _vKsS = $(this).attr(_s7OcS[1237]);
    _fGfG(_s7OcS[1238] + _vKsS);
    var _vLaJ = _s7OcS[1239];
    var _vMvC = _s7OcS[1240];
    if (document.execCommand(_s7OcS[1241])) {
        _vLaJ += trans(_s7OcS[1242]);
        _vMvC = _s7OcS[1243];
    } else {
        _vLaJ += trans(_s7OcS[1244]);
        _vMvC = _s7OcS[1245];
    }
    _vLaJ = _s7OcS[1246] + _vMvC + _s7OcS[1247] + _vLaJ + _s7OcS[1248];
    $(_vLaJ).insertAfter($(this));
    var _vYyU = $($(this).parent().find(_s7OcS[1249]));
    setTimeout(function () {
        if (_vYyU.is(_s7OcS[1250])) {
            _vYyU.fadeOut(2000);
        }
    }, 1000);
});
$(_s7OcS[1251]).each(function () {
    $(this).html(_s7OcS[1252] + $(this).html() + _s7OcS[1253]);
});
var _vIrI = 0;

function _fIwE(_vPuE, holder) {
    var _vAsO = _s7OcS[1254];
    var _vEhS = new Object();
    _vEhS.main = new Array();
    _vEhS.sub = new Array();
    var _vZuO = _vPuE + _s7OcS[1255] + _vIrI;
    $(holder).children(_s7OcS[1256]).each(function () {
        var _vUjZ = 0;
        $(this).children().each(function () {
            if (_vUjZ % 2 == 0) {
                if ($(this).is(_s7OcS[1257])) {
                    _vEhS.main.push($(this).html());
                } else {
                    _vUjZ++;
                    if ($(this).children().is(_s7OcS[1258])) {
                        _vEhS.sub[_vEhS.sub.length - 1] += $(this).children().html();
                    } else {
                        _vEhS.sub[_vEhS.sub.length - 1] += $(this).html();
                    }
                }
            } else {
                if ($(this).is(_s7OcS[1259])) {
                    _vUjZ++;
                    _vEhS.sub.push(_s7OcS[1260]);
                    _vEhS.main.push($(this).html());
                } else {
                    if ($(this).children().is(_s7OcS[1261])) {
                        _vEhS.sub.push($(this).children().html());
                    } else {
                        _vEhS.sub.push($(this).html());
                    }
                }
            }
            _vUjZ++;
        });
    });
    if (_vEhS.sub.length < _vEhS.main.length) {
        for (var _vOyC = 0; _vOyC < _vEhS.main.length - _vEhS.sub.length; _vOyC++) {
            _vEhS.sub.push(_s7OcS[1262]);
        }
    }
    for (var _vOyC = 0; _vOyC < _vEhS.main.length; _vOyC++) {
        _vEhS.main[_vOyC] = _fXlS(_vEhS.main[_vOyC]);
        _vEhS.sub[_vOyC] = _fXlS(_vEhS.sub[_vOyC]);
    }
    switch (_vPuE) {
    case 'tabs':
        _vPuE = _s7OcS[1263];
        break;
    case 'vtabs':
        _vPuE = _s7OcS[1264];
        break;
    case 'toggle':
    case 'toggles':
        _vPuE = _s7OcS[1265];
        break;
    case 'cols':
    case 'column':
    case 'columns':
        _vPuE = _s7OcS[1266];
        break;
    case 'msg':
        _vPuE = _s7OcS[1267];
        break;
    }
    switch (_vPuE) {
    case 'tab':
    case 'vtab':
        for (var _vOyC = 0; _vOyC < _vEhS.main.length; _vOyC++) {
            _vAsO += _s7OcS[1268] + _vZuO + _s7OcS[1269] + _vOyC + _s7OcS[1270] + _vEhS.main[_vOyC] + _s7OcS[1271];
        }
        _vAsO = _s7OcS[1272] + _vAsO + _s7OcS[1273];
        for (var _vOyC = 0; _vOyC < _vEhS.sub.length; _vOyC++) {
            _vAsO += _s7OcS[1274] + _vZuO + _s7OcS[1275] + _vOyC + _s7OcS[1276] + _vEhS.sub[_vOyC] + _s7OcS[1277];
        }
        break;
    case 'accordion':
        for (var _vOyC = 0; _vOyC < _vEhS.main.length; _vOyC++) {
            _vAsO += _s7OcS[1278] + _s7OcS[1279] + _vOyC + _s7OcS[1280] + _vEhS.main[_vOyC] + _s7OcS[1281] + _s7OcS[1282] + _s7OcS[1283] + _vEhS.sub[_vOyC] + _s7OcS[1284];
        }
        break;
    case 'col':
        for (var _vOyC = 0; _vOyC < _vEhS.main.length; _vOyC++) {
            _vAsO += (_s7OcS[1285] + _vOyC + _s7OcS[1286] + _vEhS.main[_vOyC] + _vEhS.sub[_vOyC] + _s7OcS[1287]);
        }
        break;
    case 'message':
        for (var _vOyC = 0; _vOyC < _vEhS.main.length; _vOyC++) {
            _vAsO += _s7OcS[1288] + _vEhS.main[_vOyC] + _s7OcS[1289] + _vEhS.sub[_vOyC] + _s7OcS[1290];
        }
        break;
    }
    _vAsO = _vDgB + _s7OcS[1291] + _vZuO + _s7OcS[1292] + _vPuE + _s7OcS[1293] + _vAsO + _vDgB + _s7OcS[1294] + _vDgB;
    $(holder).replaceWith(_vAsO);
    _vIrI++;
}
$(_s7OcS[1295]).each(function () {
    var _vMhP = $(this).children(_s7OcS[1296]);
    if (_vMhP.length != 1) {
        return;
    }
    var _vPuE = _vMhP.html();
    if (_vPuE.indexOf(_s7OcS[1297]) != 0 || _vPuE.lastIndexOf(_s7OcS[1298]) != _vPuE.length - 1) {
        return;
    }
    _vPuE = _vPuE.replace(_s7OcS[1299], _s7OcS[1300]).replace(_s7OcS[1301], _s7OcS[1302]);
    switch (_vPuE) {
    case 'tab':
    case 'tabs':
    case 'vtab':
    case 'vtabs':
    case 'accordion':
    case 'toggle':
    case 'toggles':
    case 'col':
    case 'cols':
    case 'column':
    case 'columns':
    case 'message':
    case 'msg':
        break;
    default:
        return;
    }
    _fIwE(_vPuE, this);
});
if ($(_s7OcS[1303]).length || $(_s7OcS[1304]).length || $(_s7OcS[1305]).length) {
    $(_s7OcS[1306]).append(_s7OcS[1307]);
    var _vNjB = setInterval(function () {
        if (typeof ($) != _s7OcS[1308]) {
            clearInterval(_vNjB);
            _vNjB = null;
            $(_s7OcS[1309]).tabs();
            $(_s7OcS[1310]).tabs();
            $(_s7OcS[1311]).accordion({
                heightStyle: _s7OcS[1312],
                collapsible: true
            });
        }
    }, 1000);
}
$(_s7OcS[1313]).each(function () {
    var _vOcV = $(this).parent().find(_s7OcS[1314]);
    var _vIwZ = _vOcV.length;
    if (_vIwZ == 0) {
        return;
    }
    var _vNmP = $(this).css(_s7OcS[1315]);
    if (_fGtS()) {
        _vNmP = $(this).css(_s7OcS[1316]);
    }
    _vNmP = Number(_vNmP.replace(_s7OcS[1317], _s7OcS[1318]));
    var _vMiR = $(_s7OcS[1319]).width();
    var _vRpH = 100 * _vNmP / _vMiR;
    var _vFkJ = (100 - _vRpH * (_vIwZ - 1)) / _vIwZ;
    _vFkJ = _vFkJ.toFixed(2) - 0.01;
    _vOcV.css(_s7OcS[1320], _vFkJ + _s7OcS[1321]);
});
$(_s7OcS[1322]).each(function () {
    var _vUaM = $(this).find(_s7OcS[1323]);
    if (_vUaM.length) {
        $(this).css(_s7OcS[1324], $(_vUaM[0]).css(_s7OcS[1325]));
    }
});
if ($(_s7OcS[1326]).length) {
    for (var _vOyC = 0; _vOyC < _vFqL.label.length; _vOyC++) {
        if ($.inArray(_vFqL.label[_vOyC].url, _vFqL.postLabel) !== -1) {
            $(_s7OcS[1327] + _vFqL.label[_vOyC].url + _s7OcS[1328]).find(_s7OcS[1329]).html(_vFqL.label[_vOyC].count);
        }
    }
}
$(_s7OcS[1330]).on(_s7OcS[1331], function () {
    _fMiT($(this));
});
if (NUM_RELATED_POST && _fPaM(NUM_RELATED_POST)) {
    function _fVdI() {
        var _vUyY = -1;
        var _vVdQ = new Array();
        for (var _vOyC = 0; _vOyC < _vFqL.postLabel.length; _vOyC++) {
            for (var _vDyU = 0; _vDyU < _vFqL.label.length; _vDyU++) {
                if (_vFqL.postLabel[_vOyC] == _vFqL.label[_vDyU].url) {
                    if (_vUyY == -1) {
                        _vUyY = _vDyU;
                    }
                    if (_vFqL.label[_vDyU].count > NUM_RELATED_POST) {
                        _vVdQ.push(_vDyU);
                    }
                }
            }
        }
        if (_vVdQ.length) {
            _vUyY = _fGmY(0, _vVdQ.length - 1);
            _vUyY = _vVdQ[_vUyY];
        }
        if (_vUyY == -1) {
            $(_s7OcS[1332]).remove();
            return;
        }
        var _vOuC = _vFqL.label[_vUyY].count;
        var _vYfW = _fGmY(1, _vOuC - NUM_RELATED_POST - 1);
        if (_vYfW < 1) {
            _vYfW = 1;
        }
        return (_vJzF.feed + _s7OcS[1333] + _vFqL.label[_vUyY].slug + _s7OcS[1334] + (NUM_RELATED_POST + 1) + _s7OcS[1335] + _vYfW + _s7OcS[1336]);
    }

    function _fXcJ(json) {
        json = _fJpY(json);
        if (!json) {
            return;
        }
        json = new _fEeR(json);
        if (json.entry.length == 0) {
            return;
        }
        var _vNcU = -1;
        if (json.entry.length <= NUM_RELATED_POST) {
            _vNcU = 0;
        }
        for (var _vOyC = 0; _vOyC < json.entry.length; _vOyC++) {
            if (json.entry[_vOyC].id == _vFqL.postId) {
                _vNcU = 0;
                break;
            }
        }
        if (_vNcU == -1) {
            _vNcU = _fGmY(0, 1);
        }
        var _vSsF = _s7OcS[1337];
        var _vTzM = 0;
        if (json.entry.length > 1) {
            for (var _vOyC = _vNcU; _vOyC < json.entry.length && _vTzM < NUM_RELATED_POST; _vOyC++) {
                var _vSxZ = json.entry[_vOyC];
                if (_vSxZ.id == _vFqL.postId) {
                    continue;
                }
                var _vAyD = _s7OcS[1338];
                if ((_vOyC == json.entry.length - 1 || _vTzM == NUM_RELATED_POST - 1) && _vTzM % 2 == 0) {
                    _vAyD = _s7OcS[1339];
                }
                _vSsF += _s7OcS[1340] + _fCfZ(_vTzM, _s7OcS[1341] + _vTzM + _s7OcS[1342] + _vAyD, _s7OcS[1343]) + _s7OcS[1344] + _fJrY(_vSxZ) + _fMeO(_vSxZ) + _s7OcS[1345];
                _vTzM++;
            }
            _vSsF += _vDgB;
        } else {
            _vSsF += trans(_s7OcS[1346]) + _vDgB;
        }
        $(_s7OcS[1347]).html(_vSsF);
        _fLhP($(_s7OcS[1348]));
    }
    if ($(_s7OcS[1349]).length && _vFqL.postLabel.length) {
        var _vSsF = _s7OcS[1350] + _s7OcS[1351] + _s7OcS[1352] + trans(_s7OcS[1353]) + _s7OcS[1354] + _s7OcS[1355] + _vDgB + _s7OcS[1356] + _s7OcS[1357] + _s7OcS[1358] + _s7OcS[1359] + _vDgB + _s7OcS[1360];
        $(_s7OcS[1361]).html(_vSsF);
        $.get(_fVdI(), function (json) {
            _fXcJ(json)
        }, _s7OcS[1362]);
        $(document).on(_s7OcS[1363], _s7OcS[1364], function () {
            $(_s7OcS[1365]).html(_s7OcS[1366]);
            $.get(_fVdI(), function (json) {
                _fXcJ(json)
            }, _s7OcS[1367]);
        });
    }
}

function _fAfK(_vTpP) {
    if (_vTpP.section_id == _s7OcS[1368]) {
        _vTpP.find(_s7OcS[1369]).remove();
        $(_s7OcS[1370]).html(_vTpP.find(_s7OcS[1371]).html());
        _vTpP.remove();
        return;
    }
    _vTpP.show();
}

function _fUiT(_vKwG) {}

function _fGrZ(_vSiW) {
    var _vFvX = _s7OcS[1372];
    if (_vSiW.length) {
        _vFvX = _s7OcS[1373] + (100 / _vSiW.length - 0.01) + _s7OcS[1374];
    }
    for (var _vOyC = 0; _vOyC < _vSiW.length; _vOyC++) {
        if (_vOyC == 0) {
            _vSiW[0].show();
        } else {
            _vSiW[_vOyC].hide();
        }
        $(_s7OcS[1375] + _vSiW[_vOyC].id + _s7OcS[1376]).remove();
        $(_s7OcS[1377] + _vSiW[_vOyC].id + _s7OcS[1378]).remove();
        $(_s7OcS[1379] + _vSiW[_vOyC].id + _s7OcS[1380]).remove();
        var _vTyK = _s7OcS[1381];
        for (var _vDyU = 0; _vDyU < _vSiW.length; _vDyU++) {
            var _vAaD = _s7OcS[1382];
            if (_vDyU == _vOyC) {
                _vAaD += _s7OcS[1383];
            }
            _vAaD += _s7OcS[1384];
            var _vWuT = _s7OcS[1385];
            for (var _vLlN = 0; _vLlN < _vSiW.length; _vLlN++) {
                if (_vLlN != _vDyU) {
                    _vWuT += _s7OcS[1386] + _vSiW[_vLlN].id + _s7OcS[1387];
                } else {
                    _vWuT += _s7OcS[1388] + _vSiW[_vLlN].id + _s7OcS[1389];
                }
            }
            _vWuT += _s7OcS[1390];
            _vTyK += _s7OcS[1391] + _vSiW[_vDyU].id + _s7OcS[1392] + _vAaD + _vWuT + _vFvX + _s7OcS[1393] + _vSiW[_vDyU].title + _s7OcS[1394];
        }
        $(_s7OcS[1395] + _vSiW[_vOyC].id).prepend(_s7OcS[1396] + _vTyK + _vDgB + _s7OcS[1397] + _vDgB);
    }
}
$(_s7OcS[1398]).click(function () {
    var _vJaB = $(this).attr(_s7OcS[1399]).replace(_s7OcS[1400], _s7OcS[1401]);
    _fLhP($(_vJaB + _s7OcS[1402]));
});

function _fIoR(_vTpP, _vTzM) {
    if (_fMxD(_vTzM)) {
        _vTzM = 0;
    }
    _vTpP.content_index = _vTzM;
    if (typeof (_vTpP.content[_vTzM]) == _s7OcS[1403] && (!_vTpP.selectAll)) {
        _vTpP.find(_s7OcS[1404]).html(_s7OcS[1405] + trans(_s7OcS[1406]) + _s7OcS[1407]);
        return;
    } else {
        _vTpP.removeClass(_s7OcS[1408]).find(_s7OcS[1409]).html(_s7OcS[1410]);
    }
    if (!_fPaM(_vTpP.param.count)) {
        _vTpP.param.count = 6;
    }
    var _vOpN = Number(_vTpP.param.count);
    var _vYfW = 1;
    var _vQzX = _s7OcS[1411];
    if (!_vTpP.selectAll) {
        _vQzX = _s7OcS[1412] + _vTpP.content[_vTzM].slug;
    }
    var _vLjU = _s7OcS[1413];
    var _vYaP = _s7OcS[1414];
    if (_fJfW(_vTpP.param.source)) {
        _vLjU = _vTpP.param.source.toLowerCase();
        if (_vLjU.has(_s7OcS[1415])) {
            _vYaP = _s7OcS[1416];
        }
        if (_vLjU.has(_s7OcS[1417])) {
            _vYaP = _s7OcS[1418];
        }
        if (_vLjU.has(_s7OcS[1419])) {
            _vLjU = _s7OcS[1420];
        } else {
            _vLjU = _s7OcS[1421];
        }
    } else {
        _vTpP.param.source = _s7OcS[1422];
    }
    var _vMcB = ((_vLjU == _s7OcS[1423]) ? _vFqL.totalComments : _vFqL.totalPosts);
    if (_vYaP == _s7OcS[1424] || _vYaP == _s7OcS[1425]) {
        if (!_vTpP.selectAll) {
            _vMcB = _fLaV(_vTpP.content[_vTzM].slug);
        }
        if (_vMcB == -1) {
            _vOpN = 0;
            _vTpP.nested_json = true;
        } else {
            if (_vYaP == _s7OcS[1426]) {
                _vYfW = _vMcB - _vOpN + 1;
            } else {
                _vYfW = _fGmY(1, _vMcB - _vOpN + 1);
            }
        }
    }
    if (_fIvN(_vTpP.param.host) && _fPmB(_vTpP.param.host)) {
        if (_fIvN(_vTpP.param.topic) && _vTpP.param.topic != _s7OcS[1427] && _vTpP.param.topic != _s7OcS[1428] && _vTpP.param.topic != _s7OcS[1429] && _vTpP.param.topic != _s7OcS[1430] && _vTpP.param.topic != _s7OcS[1431] && _vTpP.param.topic != _s7OcS[1432] && _vTpP.param.topic != _s7OcS[1433] && _vTpP.param.topic != _s7OcS[1434] && isNaN(_vTpP.param.topic)) {
            _vQzX = _s7OcS[1435] + _vTpP.param.topic;
        }
        _vTpP.json_url = _vTpP.param.host + _s7OcS[1436] + _vLjU + _s7OcS[1437] + _vQzX + _s7OcS[1438] + _vOpN;
    } else {
        _vTpP.json_url = _vJzF.feed + _s7OcS[1439] + _vLjU + _s7OcS[1440] + _vQzX + _s7OcS[1441] + _vOpN;
    }
    var _vXeU = 1;
    if (_vJzF.hash.has(_s7OcS[1442] + _vTpP.id + _s7OcS[1443]) && _vYaP == _s7OcS[1444]) {
        _vXeU = _vJzF.hash.replace(_s7OcS[1445] + _vTpP.id + _s7OcS[1446], _s7OcS[1447]);
        if (_fPaM(_vXeU)) {
            _vXeU = Number(_vXeU);
            _vYfW = ((_vXeU - 1) * Number(_vTpP.param.count) + 1);
        } else {
            _vXeU = 1;
        }
    }
    $.get(_vTpP.json_url + _s7OcS[1448] + _vYfW, function (json) {
        if (_fJfW(_vTpP.param.source) && (_vTpP.param.source.has(_s7OcS[1449]) || _vTpP.param.source.has(_s7OcS[1450]))) {
            if (_vTpP.param.source.has(_s7OcS[1451])) {
                if (_vFqL.totalComments == -1 || (typeof (_vTpP.nested_json) != _s7OcS[1452] && _vTpP.nested_json == true)) {
                    json = _fJpY(json);
                    if (!json) {
                        return;
                    }
                    json = new _fEeR(json);
                    _vFqL.totalComments = json.total_entry;
                    _fIoR(_vTpP, _vTpP.content_index);
                    _vTpP.nested_json = false;
                    return;
                }
            } else {
                if (_vFqL.totalPosts == -1 || (typeof (_vTpP.nested_json) != _s7OcS[1453] && _vTpP.nested_json == true)) {
                    json = _fJpY(json);
                    if (!json) {
                        return;
                    }
                    json = new _fEeR(json);
                    _vFqL.totalPosts = json.total_entry;
                    _fIoR(_vTpP, _vTpP.content_index);
                    _vTpP.nested_json = false;
                    return;
                }
            }
        }
        _fBvK(_vTpP, json);
        if (!(_fJfW(_vTpP.param.source) && (_vTpP.param.source.has(_s7OcS[1454]) || _vTpP.param.source.has(_s7OcS[1455]))) && _vTpP.type != _s7OcS[1456] && _fTzB(_vTpP.param.pages)) {
            _fLlL(_vTpP, json, _vXeU);
        }
    }, _s7OcS[1457]);
}

function _fViL(_vTpP) {
    var _vFvX = _s7OcS[1458];
    var _vIpZ = _s7OcS[1459] + _vTpP.id;
    if (_fJfW(_vTpP.param.color)) {
        var _vXsC = _vTpP.param.color;
        _vFvX += (_vIpZ + _s7OcS[1460] + _vIpZ + _s7OcS[1461] + _vXsC + _s7OcS[1462] + _vIpZ + _s7OcS[1463] + _vIpZ + _s7OcS[1464] + _vXsC + _s7OcS[1465] + _vIpZ + _s7OcS[1466] + _vIpZ + _s7OcS[1467] + _vIpZ + _s7OcS[1468] + _vIpZ + _s7OcS[1469] + _vIpZ + _s7OcS[1470] + _vXsC + _s7OcS[1471] + _vIpZ + _s7OcS[1472] + _vIpZ + _s7OcS[1473] + _vIpZ + _s7OcS[1474] + _vIpZ + _s7OcS[1475] + _vIpZ + _s7OcS[1476] + _vIpZ + _s7OcS[1477] + _vIpZ + _s7OcS[1478] + _vIpZ + _s7OcS[1479] + _vIpZ + _s7OcS[1480] + _vIpZ + _s7OcS[1481] + _vIpZ + _s7OcS[1482] + _vIpZ + _s7OcS[1483] + _vXsC + _s7OcS[1484] + _vIpZ + _s7OcS[1485] + _vIpZ + _s7OcS[1486] + _vIpZ + _s7OcS[1487] + _vIpZ + _s7OcS[1488] + _vIpZ + _s7OcS[1489] + _vIpZ + _s7OcS[1490] + _vIpZ + _s7OcS[1491] + _vIpZ + _s7OcS[1492] + _vIpZ + _s7OcS[1493] + _vIpZ + _s7OcS[1494] + _vIpZ + _s7OcS[1495] + _vXsC + _s7OcS[1496] + _vIpZ + _s7OcS[1497] + _vIpZ + _s7OcS[1498] + _vIpZ + _s7OcS[1499] + _vIpZ + _s7OcS[1500] + _vIpZ + _s7OcS[1501] + _vIpZ + _s7OcS[1502] + _vIpZ + _s7OcS[1503] + _vIpZ + _s7OcS[1504] + _vIpZ + _s7OcS[1505]);
    }
    if (_fJfW(_vTpP.param.tbg) && _vTpP.param.tbg != _s7OcS[1506]) {
        _vFvX += _vIpZ + _s7OcS[1507] + _vTpP.param.tbg + _s7OcS[1508] + _vTpP.param.tbg + _s7OcS[1509] + _vTpP.param.tbg + _s7OcS[1510] + _vTpP.param.tbg + _s7OcS[1511] + _vTpP.param.tbg + _s7OcS[1512];
    }
    if (_vFvX) {
        _vFvX = _s7OcS[1513] + _vFvX + _s7OcS[1514];
    }
    return _vFvX;
}

function _fOfD(_vTpP) {
    var _vPjV = _s7OcS[1515];
    var _vZlO = _s7OcS[1516];
    var _vZmV = _s7OcS[1517];
    var _vGzN = _s7OcS[1518];
    var _vLjS = _s7OcS[1519];
    var _vIqY = _s7OcS[1520];
    if (!_fVaC(_vTpP.param.host)) {
        _vLjS = _vTpP.param.host;
        _vIqY = _s7OcS[1521];
    }
    if (_vTpP.title) {
        _vZlO += _s7OcS[1522];
        if (_vTpP.content.length == 1) {
            _vZlO += _s7OcS[1523] + _vLjS + _fVuO(_vTpP.content[0].slug) + _s7OcS[1524] + _vIqY + _s7OcS[1525] + _vTpP.title + _s7OcS[1526];
            _vGzN += _s7OcS[1527] + _vLjS + _fVuO(_vTpP.content[0].slug) + _s7OcS[1528] + _vIqY + _s7OcS[1529] + trans(_s7OcS[1530]) + _s7OcS[1531];
        } else if (_vTpP.selectAll) {
            _vZlO += _s7OcS[1532] + _vLjS + _s7OcS[1533] + _vIqY + _s7OcS[1534] + _vTpP.title + _s7OcS[1535];
            _vGzN += _s7OcS[1536] + _vLjS + _s7OcS[1537] + _vIqY + _s7OcS[1538] + trans(_s7OcS[1539]) + _s7OcS[1540];
        } else if (_vTpP.content.length) {
            _vZlO += _s7OcS[1541] + _vTpP.title + _s7OcS[1542];
            _vGzN += _s7OcS[1543] + _vLjS + _fVuO(_vTpP.content[0].slug) + _s7OcS[1544] + _vIqY + _s7OcS[1545] + trans(_s7OcS[1546]) + _s7OcS[1547];
        }
        _vZlO += _s7OcS[1548];
    }
    if (_vTpP.content.length > 1 && !_vTpP.selectAll) {
        _vZmV += _s7OcS[1549];
        _vZmV += _s7OcS[1550];
        for (var _vOyC = 0; _vOyC < _vTpP.content.length; _vOyC++) {
            var _vWfM = _vTpP.content[_vOyC];
            _vZmV += _s7OcS[1551] + ((_vOyC == 0) ? 'class="active" ' : _s7OcS[1552]) + _s7OcS[1553] + _vOyC + _s7OcS[1554] + _vWfM.name + _s7OcS[1555];
        }
        _vZmV += _s7OcS[1556];
        _vZmV += _s7OcS[1557];
    }
    if (!_fTzB(_vTpP.param.viewall)) {
        _vGzN = _s7OcS[1558];
    }
    if (_vZlO || _vZmV || _vGzN) {
        _vPjV += _s7OcS[1559] + _vZlO + _vZmV + _vGzN + _vDgB + _s7OcS[1560];
    }
    _vPjV += _s7OcS[1561] + _vTpP.id + _s7OcS[1562] + _vTpP.id + _s7OcS[1563];
    if (_vTpP.content.length) {
        _vPjV += _s7OcS[1564];
    } else if (!_vTpP.selectAll) {
        _vPjV += _s7OcS[1565] + trans(_s7OcS[1566]) + _s7OcS[1567];
    }
    _vPjV += _s7OcS[1568] + _vDgB;
    if (_fMxD(_vTpP.param.pages)) {
        _vTpP.param.pages = false;
    }
    if (_fTzB(_vTpP.param.pages)) {
        _vPjV += _vDgB + _s7OcS[1569] + _vDgB;
    }
    _vPjV += _fViL(_vTpP);
    _vTpP.html(_vPjV).show();
    if ((_fWaB(_vTpP) || INSTANT_LOAD) && (_vTpP.content.length || _vTpP.selectAll)) {
        _fIoR(_vTpP);
    }
    if (_vTpP.param.type == _s7OcS[1570]) {
        $(_vDgB).insertBefore(_vTpP);
    } else if (_vTpP.param.type == _s7OcS[1571]) {
        $(_vDgB).insertAfter(_vTpP);
    } else {
        $(_vDgB).insertBefore(_vTpP);
        $(_vDgB).insertAfter(_vTpP);
    }
}

function _fCoI(_vTpP) {
    if (_vTpP.type == _s7OcS[1572] && _vTpP.param.desc) {
        _vTpP.find(_s7OcS[1573]).prepend(_s7OcS[1574] + _vTpP.param.desc + _s7OcS[1575]);
    }
    if (_vTpP.type == _s7OcS[1576] && _fJfW(_vTpP.param.quote)) {
        _vTpP.addClass(_s7OcS[1577]);
        _vTpP.prepend(_s7OcS[1578] + _vTpP.content.src + _s7OcS[1579]);
        var _vTpF = _s7OcS[1580] + _s7OcS[1581] + _vTpP.content.caption + _s7OcS[1582] + _s7OcS[1583];
        if (_vTpP.content.href) {
            _vTpF += _s7OcS[1584] + _vTpP.content.href + _s7OcS[1585] + _vTpP.param.quote + _s7OcS[1586];
        } else {
            _vTpF += _vTpP.param.quote
        }
        _vTpF += _s7OcS[1587] + _vDgB;
        _vTpP.find(_s7OcS[1588]).html(_vTpF);
        _vTpP.find(_s7OcS[1589]).css(_s7OcS[1590], (_vTpP.outerHeight() * 117 / 100) + _s7OcS[1591]);
        _fLhP(_vTpP.find(_s7OcS[1592]));
        _vTpP.find(_s7OcS[1593]).animate({
            'opacity': 0.3
        }, 500);
    }
    if (_vTpP.type == _s7OcS[1594] && _vTpP.section_id == _s7OcS[1595]) {
        _fWyX(_vTpP);
        return;
    }
    _vTpP.show();
}

function _fPaG(format) {
    if (!_fJfW(format)) {
        format = _s7OcS[1596];
    }
    var _vSsF = _s7OcS[1597];
    switch (format) {
    case 'video':
        _vSsF += _s7OcS[1598];
        break;
    case 'audio':
        _vSsF += _s7OcS[1599];
        break;
    case 'image':
        _vSsF += _s7OcS[1600];
        break;
    default:
        _vSsF += _s7OcS[1601];
        break;
    }
    return (_vSsF + _s7OcS[1602]);
}

function _fNbE(_vBtE, avatar, _vWfM) {
    var _vSsF = _s7OcS[1603];
    if (!_vBtE.param.author || typeof (_vBtE.author) == _s7OcS[1604]) {
        return _s7OcS[1605];
    }
    if (typeof (avatar) == _s7OcS[1606]) {
        avatar = false;
    }
    if (typeof (_vWfM) == _s7OcS[1607]) {
        _vWfM = _vBtE.author.uri;
    }
    if (avatar) {
        if (_fThE(avatar)) {
            if (avatar.has(_s7OcS[1608]) && avatar.has(_s7OcS[1609]) && avatar.has(_s7OcS[1610])) {
                _vSsF += _s7OcS[1611] + avatar + _s7OcS[1612];
            } else {
                _vSsF += _s7OcS[1613] + avatar + _s7OcS[1614];
            }
        } else {
            _vSsF += _s7OcS[1615] + _vBtE.author.avatar + _s7OcS[1616];
        }
    } else {
        _vSsF += _s7OcS[1617];
    }
    _vSsF += _s7OcS[1618] + _vBtE.author.name + _s7OcS[1619];
    if (_vWfM == _s7OcS[1620] || _vWfM == false) {
        return _vSsF;
    }
    if (!_fVaC(_vBtE.author.uri)) {
        return (_s7OcS[1621] + _vWfM + _s7OcS[1622] + _vSsF + _s7OcS[1623]);
    } else {
        return (_s7OcS[1624] + _vSsF + _s7OcS[1625]);
    }
}

function _fHwK(_vBtE) {
    if (!_vBtE.param.date || typeof (_vBtE.published) == _s7OcS[1626]) {
        return _s7OcS[1627];
    }
    return _s7OcS[1628] + _vBtE.link + _s7OcS[1629] + $.format.date(_vBtE.published, DATE_FORMAT) + _s7OcS[1630];
}

function _fTiJ(_vBtE) {
    if (!_vBtE.param.comment || typeof (_vBtE.reply_number) == _s7OcS[1631]) {
        return _s7OcS[1632];
    }
    return _s7OcS[1633] + _vBtE.link + _s7OcS[1634] + _vBtE.reply_number + _s7OcS[1635];
}

function _fMeO(_vBtE) {
    if (!_fTzB(_vBtE.param.title)) {
        return _s7OcS[1636];
    }
    return _s7OcS[1637] + _vBtE.link + _s7OcS[1638] + _vBtE.title + _s7OcS[1639];
}

function _fXpM(_vBtE) {
    if ((!_vBtE.param.snippet) || (!_vBtE.summary)) {
        return _s7OcS[1640];
    }
    var _vAnB = _vBtE.summary;
    if (_fPaM(_vBtE.param.snippet) && _vAnB.length > Number(_vBtE.param.snippet) && Number(_vBtE.param.snippet) >= 10) {
        _vAnB = _vAnB.substring(0, Number(_vBtE.param.snippet)) + _s7OcS[1641];
    } else {
        _vAnB = _vAnB.substring(0, 150) + _s7OcS[1642];
    }
    return _s7OcS[1643] + _vAnB + _s7OcS[1644];
}

function _fLcE(_vBtE) {
    if (!_vBtE.param.readmore) {
        return _s7OcS[1645];
    }
    return _s7OcS[1646] + _vBtE.link + _s7OcS[1647] + trans(_s7OcS[1648]) + _s7OcS[1649];
}

function _fJrY(_vBtE, size, inner) {
    var _vQgT = false;
    if (typeof (inner) == _s7OcS[1650]) {
        inner = false;
    }
    if (_fMxD(_vBtE.param)) {
        _vBtE.param = new Object();
        _vBtE.param.icon = false;
    }
    if (_fMxD(size)) {
        size = 1600;
    } else if (_fThE(size) && size.has(_s7OcS[1651])) {
        size = size.replace(_s7OcS[1652], _s7OcS[1653]);
        _vQgT = true;
    }
    if (isNaN(size)) {
        size = 1600;
    }
    size = Number(size);
    if (size != -1) {
        if (_vQgT) {
            _vBtE.thumbnail = _fOxF(_vBtE.thumbnail, size, false, true);
        } else {
            _vBtE.thumbnail = _fOxF(_vBtE.thumbnail, 86, false, true);
        }
    }
    var _vSsF = _s7OcS[1654] + _vBtE.link + _s7OcS[1655] + (_vQgT ? 'natural' : _s7OcS[1656]) + _s7OcS[1657];
    _vSsF += _s7OcS[1658] + _vBtE.thumbnail + _s7OcS[1659];
    if (inner && _fTzB(_vBtE.param.icon) && typeof (_vBtE.format) != _s7OcS[1660]) {
        _vSsF += _s7OcS[1661] + _fPaG(_vBtE.format) + _s7OcS[1662];
    }
    if (_fJfW(_vBtE.param.tbg)) {
        _vSsF += _s7OcS[1663];
    }
    _vSsF += _s7OcS[1664];
    if (!inner && _fTzB(_vBtE.param.icon) && typeof (_vBtE.format) != _s7OcS[1665]) {
        _vSsF += _s7OcS[1666] + _vBtE.link + _s7OcS[1667] + _fPaG(_vBtE.format) + _s7OcS[1668];
    }
    return _vSsF;
}

function _fUdE(_vBtE, extra_class) {
    var _vSsF = _s7OcS[1669];
    var _vNeS = 1;
    if (_fVaC(_vBtE.cate)) {
        return _s7OcS[1670];
    }
    if (_fVaC(_vBtE.param.cate)) {
        return _s7OcS[1671];
    }
    if (typeof (extra_class) == _s7OcS[1672]) {
        extra_class = _s7OcS[1673];
    }
    if (_fPaM(_vBtE.param.cate)) {
        _vNeS = Number(_vBtE.param.cate);
    }
    for (var _vOyC = 0; _vOyC < _vBtE.cate.length && _vOyC < _vNeS; _vOyC++) {
        if (_vSsF) {
            _vSsF += _s7OcS[1674];
        }
        if (_vBtE.id != _s7OcS[1675]) {
            _vSsF += _s7OcS[1676] + _fVuO(encodeURIComponent(_vBtE.cate[_vOyC])) + _s7OcS[1677] + _vBtE.cate[_vOyC] + _s7OcS[1678];
        } else {
            _vSsF = _s7OcS[1679] + _vBtE.link + _s7OcS[1680] + _vBtE.cate[_vOyC] + _s7OcS[1681];
        }
    }
    return (_s7OcS[1682] + extra_class + _s7OcS[1683] + _vSsF + _s7OcS[1684]);
}

function _fCfZ(_vOyC, extra, exclude) {
    if (_fMxD(extra)) {
        extra = _s7OcS[1685];
    }
    if (_fThE(extra)) {
        extra = $.trim(extra);
        extra = extra.split(_s7OcS[1686]);
    }
    if (!_fQrU(extra)) {
        extra = new Array();
    }
    if (_fMxD(exclude)) {
        exclude = new Array();
    }
    if (_fThE(exclude)) {
        exclude = $.trim(exclude);
        exclude = exclude.split(_s7OcS[1687]);
    }
    if (!_fQrU(exclude)) {
        exclude = new Array();
    }
    var _vQpK = _s7OcS[1688] + _vOyC;
    if (_vOyC % 2 == 0) {
        _vQpK += _s7OcS[1689];
    }
    if (_vOyC % 3 == 0) {
        _vQpK += _s7OcS[1690];
    }
    if (_vOyC % 4 == 0) {
        _vQpK += _s7OcS[1691];
    }
    for (var _vDyU = 1; _vDyU <= _vOyC; _vDyU++) {
        _vQpK += _s7OcS[1692] + (_vDyU - 1);
    }
    if (extra.length) {
        _vQpK += _s7OcS[1693] + extra.join(_s7OcS[1694]);
    }
    _vQpK = _vQpK.split(_s7OcS[1695]);
    for (var _vLlN = 0; _vLlN < exclude.length; _vLlN++) {
        for (var _vYbR in _vQpK) {
            if (_vQpK[_vYbR] == exclude[_vLlN]) {
                _vQpK.splice(_vYbR, 1);
            }
        }
    }
    return (_s7OcS[1696] + _vQpK.join(_s7OcS[1697]) + _s7OcS[1698]);
}

function _fJhI(_vBtE, format) {
    var _vSsF = _s7OcS[1699];
    if (!_vBtE.param.meta || (typeof (_vBtE.author) == _s7OcS[1700] && typeof (_vBtE.reply_number) == _s7OcS[1701] && typeof (_vBtE.published) == _s7OcS[1702])) {
        return _s7OcS[1703];
    }
    if (_fMxD(format)) {
        format = _s7OcS[1704];
    }
    _vSsF = format.split(_s7OcS[1705]);
    for (var _vOyC = 0; _vOyC < _vSsF.length; _vOyC++) {
        if (_vSsF[_vOyC] == _s7OcS[1706]) {
            _vSsF[_vOyC] = _fNbE(_vBtE);
        } else if (_vSsF[_vOyC] == _s7OcS[1707]) {
            _vSsF[_vOyC] = _fTiJ(_vBtE);
        } else if (_vSsF[_vOyC] == _s7OcS[1708]) {
            _vSsF[_vOyC] = _fHwK(_vBtE);
        }
    }
    _vSsF = _vSsF.join(_s7OcS[1709]);
    if (_vSsF) {
        _vSsF = _s7OcS[1710] + _vSsF + _s7OcS[1711]
    }
    return _vSsF;
}

function _fVaM(_vTpP, _vWnE) {
    _vTpP.find(_s7OcS[1712]).html(_s7OcS[1713]);
    $.get(_vTpP.json_url + _s7OcS[1714] + ((_vWnE - 1) * Number(_vTpP.param.count) + 1), function (json) {
        _fBvK(_vTpP, json);
    }, _s7OcS[1715]);
}

function _fBvR(_vTpP, _vWnE) {
    var _vLmF = Number(_vTpP.attr(_s7OcS[1716]));
    var _vNeS = Number(_vTpP.param.count);
    var _vMcB = Number(_vTpP.attr(_s7OcS[1717]));
    var _vPnB = _vNeS * _vWnE;
    if (_vPnB >= _vMcB) {
        _vPnB = _vMcB;
    }
    _vTpP.find(_s7OcS[1718]).html(_vPnB);
    _vTpP.find(_s7OcS[1719]).removeClass(_s7OcS[1720]);
    _vTpP.find(_s7OcS[1721] + _vWnE).addClass(_s7OcS[1722]);
    _vTpP.find(_s7OcS[1723]).hide();
    _vTpP.find(_s7OcS[1724]).hide();
    _vTpP.find(_s7OcS[1725] + (_vWnE - 1)).show();
    _vTpP.find(_s7OcS[1726] + _vWnE).show();
    _vTpP.find(_s7OcS[1727] + (_vWnE + 1)).show();
    if (_vWnE == 1) {
        _vTpP.find(_s7OcS[1728]).show();
    }
    if (_vWnE == _vLmF) {
        _vTpP.find(_s7OcS[1729] + (_vLmF - 2)).show();
    }
    if (_vLmF > 4) {
        if (_vWnE - 2 > 1) {
            _vTpP.find(_s7OcS[1730]).show();
        }
        if (_vWnE + 2 < _vLmF) {
            _vTpP.find(_s7OcS[1731] + (_vLmF - 1)).show();
        }
    }
    _vTpP.find(_s7OcS[1732]).show();
    _vTpP.find(_s7OcS[1733] + _vLmF).show();
}

function _fLlL(_vTpP, json, current_page) {
    json = _fJpY(json);
    if (!json) {
        return;
    }
    json = new _fEeR(json);
    if (json.entry.length == 0) {
        _vTpP.addClass(_s7OcS[1734]).find(_s7OcS[1735]).html(trans(_s7OcS[1736]));
        return;
    }
    if (typeof (current_page) == _s7OcS[1737]) {
        current_page = 1;
    }
    var _vLmF = Math.ceil(json.total_entry / _vTpP.param.count);
    if (_vLmF > 1) {
        _vTpP.attr(_s7OcS[1738], _vLmF);
        _vTpP.attr(_s7OcS[1739], json.total_entry);
        var _vSsF = _s7OcS[1740];
        for (var _vOyC = 1; _vOyC <= _vLmF; _vOyC++) {
            _vSsF += _s7OcS[1741] + _vTpP.id + _s7OcS[1742] + _vOyC + _s7OcS[1743] + _vOyC + _s7OcS[1744] + _vOyC + _s7OcS[1745];
            if (_vOyC == 1 || _vOyC == _vLmF - 1) {
                _vSsF += _s7OcS[1746] + _vOyC + _s7OcS[1747];
            }
        }
        var _vCxI = _s7OcS[1748] + json.entry.length + _s7OcS[1749] + json.total_entry + _s7OcS[1750] + trans(_s7OcS[1751]) + _s7OcS[1752];
        _vSsF += _vCxI;
        _vTpP.find(_s7OcS[1753]).html(_vSsF + _vDgB);
        _fBvR(_vTpP, current_page);
        _vTpP.find(_s7OcS[1754]).click(function () {
            if ($(this).is(_s7OcS[1755])) {
                return;
            }
            var _vWnE = Number($(this).html());
            _fVaM(_vTpP, _vWnE);
            _fBvR(_vTpP, _vWnE);
            _fRzO(_vTpP, 100);
        });
    }
}

function _fBvK(_vTpP, json) {
    if (typeof (json) != _s7OcS[1756]) {
        json = _fJpY(json);
        if (!json) {
            return;
        }
        json = new _fEeR(json);
    } else if (typeof (_vTpP.json) != _s7OcS[1757]) {
        json = _vTpP.json;
    } else {
        return;
    }
    if (json.entry.length == 0) {
        return;
    }
    if (_fMxD(_vTpP.param.icon)) {
        _vTpP.param.icon = false;
    }
    if (_fMxD(_vTpP.param.title)) {
        _vTpP.param.title = true;
    }
    if (_vTpP.param.title == _s7OcS[1758] || _vTpP.param.title == _s7OcS[1759]) {
        _vTpP.param.title = _s7OcS[1760];
    }
    var _vWmI = _vTpP.param;
    _vWmI.author = _fTzB(_vWmI.author);
    _vWmI.comment = _fTzB(_vWmI.comment);
    _vWmI.date = _fTzB(_vWmI.date);
    _vWmI.meta = _fTzB(_vWmI.meta);
    if (!_vWmI.meta) {
        _vWmI.author = _vWmI.comment = _vWmI.date = false;
    } else if (_vWmI.author || _vWmI.comment || _vWmI.date) {
        _vWmI.meta = true;
    } else {
        _vWmI.meta = false;
    }
    _vWmI.snippet = _fTzB(_vWmI.snippet);
    _vWmI.readmore = _fTzB(_vWmI.readmore);
    _vWmI.cate = _fTzB(_vWmI.cate);
    if (_fJfW(_vWmI.height) && (_vWmI.height == _s7OcS[1761] || _vWmI.height == _s7OcS[1762])) {
        _vTpP.addClass(_s7OcS[1763]);
    } else {
        _vTpP.addClass(_s7OcS[1764]);
    }
    if (_fTzB(_vWmI.icon)) {
        _vTpP.addClass(_s7OcS[1765]);
    } else {
        _vTpP.addClass(_s7OcS[1766]);
    }
    var _vSsF = _s7OcS[1767];
    var _vPtH = _s7OcS[1768];
    var _vMiE = _s7OcS[1769];
    var _vOzV = _s7OcS[1770];
    var _vEtQ = _s7OcS[1771];
    var _vZsU = 1;
    var _vXuJ = json.entry.length;
    var _vAtN = 0;
    var _vIaD = _s7OcS[1772];
    if (_vWmI.type == _s7OcS[1773]) {
        if (json.entry.length > 5) {
            _vZsU = Math.ceil(json.entry.length / 5);
            for (_vAtN = 5; _vAtN >= 1; _vAtN -= 1) {
                _vXuJ = json.entry.length - (_vZsU - 1) * _vAtN;
                if (Math.abs(_vXuJ - _vAtN) <= 2) {
                    break;
                }
            }
        }
        if (_vAtN > 5) {
            _vAtN = 5;
            _vXuJ = json.entry.length - _vZsU * _vAtN;
        }
    }
    for (var _vOyC = 0; _vOyC < json.entry.length; _vOyC++) {
        var _vSxZ = json.entry[_vOyC];
        _vSxZ.param = _vWmI;
        switch (_vWmI.type) {
        case 'slider':
            _vSsF += _s7OcS[1774] + _vOyC + _s7OcS[1775] + _fJrY(_vSxZ, 900) + _s7OcS[1776] + _fUdE(_vSxZ, _s7OcS[1777]) + _fJhI(_vSxZ, _s7OcS[1778]) + _fMeO(_vSxZ) + _fXpM(_vSxZ) + _fLcE(_vSxZ) + _s7OcS[1779] + _s7OcS[1780];
            break;
        case 'sticky':
            var _vVaQ = 520;
            if (_vOyC != 1 && _vOyC != 2 && _vOyC != 3 && _fJfW(_vWmI.height) && (_vWmI.height == _s7OcS[1781] || _vWmI.height == 0)) {
                _vVaQ = _s7OcS[1782];
            }
            if (_vOyC == 4) {
                _vSsF += _vDgB;
            }
            _vSsF += _s7OcS[1783] + _fCfZ(_vOyC, (_vOyC >= 4) ? ' item-extra' : _s7OcS[1784]) + _s7OcS[1785] + _s7OcS[1786] + _fJrY(_vSxZ, _vVaQ) + _s7OcS[1787] + _fUdE(_vSxZ, _s7OcS[1788]) + (_vWmI.title != _s7OcS[1789] || _vOyC != 0 ? _fMeO(_vSxZ) : _s7OcS[1790]) + (_vOyC == 0 ? _fNbE(_vSxZ, trans(_s7OcS[1791])) : _s7OcS[1792]) + _s7OcS[1793] + _s7OcS[1794];
            if (_vOyC == 0 && (_vWmI.snippet || _vWmI.meta || _vWmI.readmore || _vWmI.title == _s7OcS[1795])) {
                _vSsF += _s7OcS[1796] + (_vWmI.title == _s7OcS[1797] && _vOyC == 0 ? _fMeO(_vSxZ) : _s7OcS[1798]) + _fXpM(_vSxZ) + _fLcE(_vSxZ) + _fJhI(_vSxZ, _s7OcS[1799]) + _s7OcS[1800];
            }
            _vSsF += _s7OcS[1801];
            break;
        case 'complex':
            var _vVaQ = 450;
            if (_vOyC == 0 && _fJfW(_vWmI.height) && (_vWmI.height == _s7OcS[1802] || _vWmI.height == 0)) {
                _vVaQ = _s7OcS[1803];
            }
            if (_vOyC % 2 == 0 && _vOyC >= 4) {
                _vSsF += _vDgB;
            }
            _vSsF += _s7OcS[1804] + _fCfZ(_vOyC, (_vOyC >= 4) ? ' item-extra' : _s7OcS[1805]) + _s7OcS[1806] + _s7OcS[1807] + (_vOyC == 0 ? _fJrY(_vSxZ, _vVaQ) : _s7OcS[1808]) + _s7OcS[1809] + (_vOyC == 0 ? ' gradient' : _s7OcS[1810]) + _s7OcS[1811] + _fUdE(_vSxZ, (_vOyC == 0 ? 'bg' : _s7OcS[1812])) + (_vWmI.title != _s7OcS[1813] || _vOyC != 0 ? _fMeO(_vSxZ) : _s7OcS[1814]) + (_vOyC == 0 ? _fNbE(_vSxZ, trans(_s7OcS[1815])) : _s7OcS[1816]) + _s7OcS[1817] + _s7OcS[1818];
            if (_vOyC == 0 && (_vWmI.snippet || _vWmI.meta || _vWmI.readmore || _vWmI.title == _s7OcS[1819])) {
                _vSsF += _s7OcS[1820] + (_vWmI.title == _s7OcS[1821] ? _fMeO(_vSxZ) : _s7OcS[1822]) + _fXpM(_vSxZ) + _fLcE(_vSxZ) + _fJhI(_vSxZ, _s7OcS[1823]) + _s7OcS[1824];
            }
            _vSsF += _s7OcS[1825];
            break;
        case 'three':
            var _vVaQ = 500;
            if (_vOyC == 0 && _fJfW(_vWmI.height) && (_vWmI.height == _s7OcS[1826] || _vWmI.height == 0)) {
                _vVaQ = _s7OcS[1827];
            }
            _vSsF = _s7OcS[1828] + _fCfZ(_vOyC) + _s7OcS[1829] + _s7OcS[1830] + _fJrY(_vSxZ, _vVaQ) + _s7OcS[1831] + _fUdE(_vSxZ, _s7OcS[1832]) + (_vWmI.title != _s7OcS[1833] ? _fMeO(_vSxZ) : _s7OcS[1834]) + _s7OcS[1835] + _s7OcS[1836];
            if (_vWmI.snippet || _vWmI.meta || _vWmI.readmore || _vWmI.title == _s7OcS[1837]) {
                _vSsF += _s7OcS[1838] + (_vWmI.title == _s7OcS[1839] ? _fMeO(_vSxZ) : _s7OcS[1840]) + _fXpM(_vSxZ) + _fLcE(_vSxZ) + _fJhI(_vSxZ) + _s7OcS[1841];
            }
            _vSsF += _s7OcS[1842];
            if (_vOyC % 3 == 0) {
                _vMiE += _vSsF;
            } else if (_vOyC % 3 == 1) {
                _vOzV += _vSsF;
            } else {
                _vEtQ += _vSsF;
            }
            _vIaD += _vSsF;
            _vPtH += _vSsF;
            if (_vOyC % 3 == 2) {
                _vPtH += _vDgB;
            }
            break;
        case 'carousel':
            _vSsF += _s7OcS[1843] + _vOyC + _s7OcS[1844] + _fJrY(_vSxZ, 640) + _s7OcS[1845] + _fUdE(_vSxZ, _s7OcS[1846]) + _fMeO(_vSxZ) + _s7OcS[1847] + _s7OcS[1848];
            break;
        case 'blogging':
            var _vVaQ = 320;
            if (_vOyC == 0 && _fJfW(_vWmI.height) && (_vWmI.height == _s7OcS[1849] || _vWmI.height == 0)) {
                _vVaQ = _s7OcS[1850];
            }
            _vSsF += _s7OcS[1851] + _fCfZ(_vOyC, (!_vSxZ.has_thumbnail ? ' no-thumbnail' : _s7OcS[1852]) + (_vOyC == json.entry.length - 1 ? ' item-last' : _s7OcS[1853])) + _s7OcS[1854] + ((_vSxZ.has_thumbnail) ? _fJrY(_vSxZ, _vVaQ, true) : _s7OcS[1855]) + _s7OcS[1856] + _fUdE(_vSxZ) + _fMeO(_vSxZ) + _fJhI(_vSxZ) + _s7OcS[1857] + _fXpM(_vSxZ) + _fLcE(_vSxZ) + _s7OcS[1858] + _vDgB + _s7OcS[1859] + _vDgB + _s7OcS[1860];
            break;
        case 'one':
            var _vVaQ = 900;
            if (_fJfW(_vWmI.height) && (_vWmI.height == _s7OcS[1861] || _vWmI.height == 0)) {
                _vVaQ = _s7OcS[1862];
            }
            _vSsF += _s7OcS[1863] + _fCfZ(_vOyC, (_vOyC == json.entry.length - 1 ? ' item-last' : _s7OcS[1864])) + _s7OcS[1865] + _s7OcS[1866] + _fJrY(_vSxZ, _vVaQ) + _s7OcS[1867] + _fUdE(_vSxZ, _s7OcS[1868]) + (_vWmI.title != _s7OcS[1869] ? _fMeO(_vSxZ) : _s7OcS[1870]) + _s7OcS[1871] + _s7OcS[1872];
            if (_vWmI.snippet || _vWmI.meta || _vWmI.readmore || _vWmI.title == _s7OcS[1873]) {
                _vSsF += _s7OcS[1874] + (_vWmI.title == _s7OcS[1875] ? _fMeO(_vSxZ) : _s7OcS[1876]) + _fJhI(_vSxZ) + _fXpM(_vSxZ) + _fLcE(_vSxZ) + _s7OcS[1877] + _vDgB;
            }
            _vSsF += _s7OcS[1878];
            break;
        case 'left':
        case 'right':
            var _vVaQ = 450;
            if (_fJfW(_vWmI.height) && (_vWmI.height == _s7OcS[1879] || _vWmI.height == _s7OcS[1880])) {
                _vVaQ = _s7OcS[1881];
            }
            _vSsF += _s7OcS[1882] + _fCfZ(_vOyC, _vOyC > 0 ? ' item-extra' : _s7OcS[1883]) + _s7OcS[1884] + _s7OcS[1885] + (_vOyC == 0 ? _fJrY(_vSxZ, _vVaQ) : _s7OcS[1886]) + _s7OcS[1887] + (_vOyC == 0 ? ' gradient' : _s7OcS[1888]) + _s7OcS[1889] + _fUdE(_vSxZ, (_vOyC == 0 ? 'bg' : _s7OcS[1890])) + (_vWmI.title != _s7OcS[1891] || _vOyC != 0 ? _fMeO(_vSxZ) : _s7OcS[1892]) + (_vOyC == 0 ? _fNbE(_vSxZ, trans(_s7OcS[1893])) : _s7OcS[1894]) + _s7OcS[1895] + _s7OcS[1896];
            if (_vOyC == 0 && (_vWmI.snippet || _vWmI.meta || _vWmI.readmore || _vWmI.title == _s7OcS[1897])) {
                _vSsF += _s7OcS[1898] + (_vWmI.title == _s7OcS[1899] ? _fMeO(_vSxZ) : _s7OcS[1900]) + _fXpM(_vSxZ) + _fLcE(_vSxZ) + _fJhI(_vSxZ, _s7OcS[1901]) + _s7OcS[1902] + _vDgB;
            }
            _vSsF += _s7OcS[1903];
            break;
        case 'two':
            var _vVaQ = 450;
            if (_fJfW(_vWmI.height) && (_vWmI.height == _s7OcS[1904] || _vWmI.height == _s7OcS[1905])) {
                _vVaQ = _s7OcS[1906];
            }
            _vSsF = _s7OcS[1907] + _fCfZ(_vOyC) + _s7OcS[1908] + _s7OcS[1909] + _fJrY(_vSxZ, _vVaQ) + _s7OcS[1910] + _fUdE(_vSxZ, _s7OcS[1911]) + (_vWmI.title != _s7OcS[1912] ? _fMeO(_vSxZ) : _s7OcS[1913]) + _fNbE(_vSxZ, trans(_s7OcS[1914])) + _s7OcS[1915] + _s7OcS[1916];
            if (_vWmI.snippet || _vWmI.meta || _vWmI.readmore || _vWmI.title == _s7OcS[1917]) {
                _vSsF += _s7OcS[1918] + (_vWmI.title == _s7OcS[1919] ? _fMeO(_vSxZ) : _s7OcS[1920]) + _fXpM(_vSxZ) + _fLcE(_vSxZ) + _fJhI(_vSxZ, _s7OcS[1921]) + _s7OcS[1922] + _vDgB;
            }
            _vSsF += _s7OcS[1923];
            if (_vOyC % 2) {
                _vOzV += _vSsF;
            } else {
                _vMiE += _vSsF;
            }
            _vIaD += _vSsF;
            _vPtH += _vSsF;
            if (_vOyC % 2 == 1) {
                _vPtH += _vDgB;
            }
            break;
        case 'ticker':
            var _vVaQ = 320;
            if (_fJfW(_vWmI.height) && _fPaM(_vWmI.height) && Number(_vWmI.height) > 0) {
                _vVaQ = Number(_vWmI.height);
            }
            _vSsF += _s7OcS[1924] + _vOyC + _s7OcS[1925] + _fJrY(_vSxZ, _vVaQ) + _s7OcS[1926] + _fUdE(_vSxZ) + _fMeO(_vSxZ) + _s7OcS[1927] + _s7OcS[1928];
            break;
        case 'grid':
            var _vRkO = 0;
            if (_vOyC >= _vXuJ) {
                _vRkO = Math.ceil((_vOyC + 1 - _vXuJ) / _vAtN);
            }
            var _vYfW = 0;
            if (_vRkO >= 1) {
                _vYfW = (_vRkO - 1) * _vAtN + _vXuJ;
            }
            var _vBfK = (_vRkO == 0 ? _vXuJ : _vAtN);
            var _vPpP = (_vRkO % 2 ? 'odd' : _s7OcS[1929]);
            var _vKeR = (_vPpP == _s7OcS[1930] ? (_vYfW + 1) : (_vYfW + _vBfK - 1));
            if (_vOyC == _vYfW) {
                if (_vOyC > 0) {
                    _vSsF += _vDgB + _s7OcS[1931] + _vDgB + _s7OcS[1932];
                }
                _vSsF += _s7OcS[1933];
                var _vVuD = _s7OcS[1934];
                if (_fJfW(_vWmI.height) && _fPaM(_vWmI.height)) {
                    _vVuD += _s7OcS[1935] + _vWmI.height + _s7OcS[1936];
                }
                _vSsF += _s7OcS[1937] + (json.entry.length == 1 ? 'full' : (_vPpP == _s7OcS[1938] ? 'wide' : _s7OcS[1939])) + _s7OcS[1940] + (_vPpP == _s7OcS[1941] ? 1 : (_vBfK - 1)) + _s7OcS[1942] + _vVuD + _s7OcS[1943];
            }
            var _vYbA = _vYfW;
            if (_vOyC == _vKeR) {
                _vSsF += _vDgB + _s7OcS[1944];
                var _vVuD = _s7OcS[1945];
                if (_fJfW(_vWmI.height) && _fPaM(_vWmI.height)) {
                    _vVuD += _s7OcS[1946] + _vWmI.height + _s7OcS[1947];
                }
                _vSsF += _s7OcS[1948] + (json.entry.length == 1 ? 'full' : (_vPpP == _s7OcS[1949] ? 'narrow' : _s7OcS[1950])) + _s7OcS[1951] + (_vPpP == _s7OcS[1952] ? (_vBfK - 1) : 1) + _s7OcS[1953] + _vVuD + _s7OcS[1954];
            }
            if (_vOyC >= _vKeR) {
                _vYbA = _vKeR;
            }
            _vSsF += _s7OcS[1955] + _vOyC + _s7OcS[1956] + (_vOyC - _vYbA) + _s7OcS[1957] + _fJrY(_vSxZ, 500) + _s7OcS[1958] + _fUdE(_vSxZ, _s7OcS[1959]) + _fJhI(_vSxZ) + _fMeO(_vSxZ) + _fXpM(_vSxZ) + _fLcE(_vSxZ) + _s7OcS[1960] + _s7OcS[1961];
            if (_vOyC == json.entry.length - 1) {
                _vSsF += _vDgB + _s7OcS[1962] + _vDgB + _s7OcS[1963];
            }
            break;
        case 'list':
            _vSsF += _s7OcS[1964] + _fCfZ(_vOyC, _s7OcS[1965]) + _s7OcS[1966] + _vSxZ.link + _s7OcS[1967] + (_fTzB(_vWmI.author) && _fJfW(_vSxZ.author) ? (_s7OcS[1968] + _vSxZ.author.name + _s7OcS[1969]) : _s7OcS[1970]) + _s7OcS[1971] + _vSxZ.title + _s7OcS[1972] + (_fTzB(_vWmI.comment) && _fJfW(_vSxZ.reply_number) ? (_s7OcS[1973] + _vSxZ.reply_number + _s7OcS[1974]) : _s7OcS[1975]) + _s7OcS[1976] + (_fTzB(_vWmI.date) && _fJfW(_vSxZ.published) ? (_s7OcS[1977] + _fHwK(_vSxZ) + _s7OcS[1978]) : _s7OcS[1979]) + _s7OcS[1980] + (_fTzB(_vWmI.readmore) ? _s7OcS[1981] + _vSxZ.link + '#more"><i class="fa fa-angle-right"></i></a>\
						</div>' : _s7OcS[1982]) + _s7OcS[1983] + _vDgB;
            break;
        default:
            break;
        }
    }
    if (_vWmI.type == _s7OcS[1984]) {
        if (_fJfW(_vWmI.height) && (_vWmI.height == _s7OcS[1985] || _vWmI.height == _s7OcS[1986])) {
            _vSsF = _s7OcS[1987] + _vMiE + _s7OcS[1988] + _s7OcS[1989] + _vOzV + _s7OcS[1990] + _s7OcS[1991] + _vIaD + _s7OcS[1992];
        } else {
            _vSsF = _vPtH;
        }
    }
    if (_vWmI.type == _s7OcS[1993]) {
        if (_fJfW(_vWmI.height) && (_vWmI.height == _s7OcS[1994] || _vWmI.height == _s7OcS[1995])) {
            _vSsF = _s7OcS[1996] + _vMiE + _s7OcS[1997] + _s7OcS[1998] + _vOzV + _s7OcS[1999] + _s7OcS[2000] + _vEtQ + _s7OcS[2001] + _s7OcS[2002] + _vIaD + _s7OcS[2003];
        } else {
            _vSsF = _vPtH;
        }
    }
    _vTpP.find(_s7OcS[2004]).html(_vSsF).css(_s7OcS[2005], 0).each(function () {
        if (_fPaM(_vWmI.height) && Number(_vWmI.height) > 0) {
            $(_s7OcS[2006] + _vTpP.id + _s7OcS[2007]).css(_s7OcS[2008], _vWmI.height + _s7OcS[2009]);
            if (_vWmI.type == _s7OcS[2010] || _vWmI.type == _s7OcS[2011]) {
                $(_s7OcS[2012] + _vTpP.id + _s7OcS[2013] + _vWmI.type + _s7OcS[2014]).css(_s7OcS[2015], _vWmI.height + _s7OcS[2016]);
            } else if (_vWmI.type == _s7OcS[2017]) {
                $(_s7OcS[2018] + _vTpP.id + _s7OcS[2019] + _vTpP.id + _s7OcS[2020] + _vTpP.id + _s7OcS[2021]).removeAttr(_s7OcS[2022]);
            }
        }
        _fLhP($(this).find(_s7OcS[2023]));
    }).animate({
        'opacity': 1
    }, 1000);
    if (_fJfW(_vWmI.tbg) && _vWmI.tbg == _s7OcS[2024]) {
        var _vTzM = 0;
        _vTpP.find(_s7OcS[2025]).each(function () {
            var _vFvX = _s7OcS[2026] + THUMBNAIL_RAINBOW_COLORS[_vTzM].split(_s7OcS[2027])[0] + _s7OcS[2028] + THUMBNAIL_RAINBOW_COLORS[_vTzM] + _s7OcS[2029] + THUMBNAIL_RAINBOW_COLORS[_vTzM] + _s7OcS[2030] + THUMBNAIL_RAINBOW_COLORS[_vTzM] + _s7OcS[2031] + THUMBNAIL_RAINBOW_COLORS[_vTzM] + _s7OcS[2032];
            $(this).attr(_s7OcS[2033], _vFvX);
            _vTzM++;
            if (_vTzM == THUMBNAIL_RAINBOW_COLORS.length) {
                _vTzM = 0;
            }
        });
    }
    switch (_vWmI.type) {
    case 'slider':
    case 'carousel':
    case 'ticker':
        var _vOzE = new Object();
        _vOzE[_s7OcS[2034]] = new Object();
        _vOzE[_s7OcS[2035]][0] = new Object();
        _vOzE[_s7OcS[2036]][499] = new Object();
        _vOzE[_s7OcS[2037]][699] = new Object();
        _vOzE[_s7OcS[2038]][899] = new Object();
        var _vGkL = (_vWmI.type == _s7OcS[2039] ? 1 : 2);
        _vOzE[_s7OcS[2040]] = true;
        _vOzE[_s7OcS[2041]] = _fTzB(_vWmI.buttons);
        _vOzE[_s7OcS[2042]] = (_vWmI.type == _s7OcS[2043] ? false : _fTzB(_vWmI.dots));
        _vOzE[_s7OcS[2044]] = true;
        _vOzE[_s7OcS[2045]] = true;
        _vOzE[_s7OcS[2046]] = function () {
            _fLhP($(_s7OcS[2047] + _vTpP.id + _s7OcS[2048]), true);
        };
        _vOzE[_s7OcS[2049]] = [_s7OcS[2050] + _vWmI.type + _s7OcS[2051] + _vWmI.type + _s7OcS[2052], _s7OcS[2053] + _vWmI.type + _s7OcS[2054] + _vWmI.type + _s7OcS[2055]];
        if (_fGtS()) {
            _vOzE[_s7OcS[2056]] = true;
        }
        if (_fPaM(_vWmI.columns)) {
            var _vSlP = Number(_vWmI.columns);
            if (_vSlP > 1) {
                _vGkL = _vSlP;
            }
        }
        if (_fPaM(_vWmI.title)) {
            _vTpP.find(_s7OcS[2057]).css(_s7OcS[2058], _vWmI.title + _s7OcS[2059]);
        }
        if (_vWmI.type == _s7OcS[2060]) {
            _vOzE[_s7OcS[2061]] = json.entry.length;
        }
        if (_fPaM(_vWmI.speed)) {
            _vOzE[_s7OcS[2062]] = Number(_vWmI.speed);
            _vOzE[_s7OcS[2063]] = Math.floor(_vOzE[_s7OcS[2064]] / 10);
        }
        _vOzE[_s7OcS[2065]] = _vGkL;
        _vOzE[_s7OcS[2066]][899][_s7OcS[2067]] = _vGkL;
        _vOzE[_s7OcS[2068]][699][_s7OcS[2069]] = (_vGkL > 3 ? 3 : _vGkL);
        _vOzE[_s7OcS[2070]][499][_s7OcS[2071]] = (_vGkL > 2 ? 2 : _vGkL);
        _vOzE[_s7OcS[2072]][0][_s7OcS[2073]] = 1;
        if (_fJfW(_vTpP.owl)) {
            _vTpP.trigger(_s7OcS[2074]).removeClass(_s7OcS[2075]);
            _vTpP.find(_s7OcS[2076]).children().unwrap();
            _vTpP.owl.destroy();
        }
        var _vMwC = $(_s7OcS[2077] + _vTpP.id);
        _vMwC.owlCarousel(_vOzE);
        _vTpP.owl = _vMwC.data(_s7OcS[2078]);
        break;
    default:
        break;
    }
}

function _fTrG(json, _vFxN) {
    json = _fJpY(json);
    if (!json) {
        return;
    }
    json = new _fEeR(json);
    if (json.total_entry == 0) {
        _vFxN.find(_s7OcS[2079]).html(trans(_s7OcS[2080]));
        _vFxN.addClass(_s7OcS[2081]);
        return;
    }
    var _vPjV = _s7OcS[2082];
    for (var _vOyC = 0; _vOyC < json.entry.length; _vOyC++) {
        var _vSxZ = json.entry[_vOyC];
        _vPjV += _s7OcS[2083] + _vOyC + _s7OcS[2084];
        _vPjV += _s7OcS[2085] + _vSxZ.link + _s7OcS[2086] + _fOxF(_vSxZ.thumbnail, 240) + _s7OcS[2087] + _fPaG(_vSxZ.format) + _s7OcS[2088];
        _vPjV += _s7OcS[2089] + _vSxZ.link + _s7OcS[2090] + _vSxZ.title + _s7OcS[2091];
        _vPjV += _vDgB + _s7OcS[2092];
    }
    _vFxN.find(_s7OcS[2093]).html(_vPjV);
    _vFxN.addClass(_s7OcS[2094]);
    _fLhP(_vFxN.find(_s7OcS[2095]).find(_s7OcS[2096]));
}

function _fJyE(_vNeS, _vWnE) {
    var _vTmG = _vJzF.feed + _s7OcS[2097];
    var _vYfW = (_vWnE - 1) * _vNeS + 1;
    var _vOqR = 0;
    var _vEuZ = 0;
    var _vEcT = 0;
    var _vXyQ = 0;
    if (_fCpA()) {
        var _vIvF = _fTzN(_vFqL.canonicalUrl);
        _vTmG += _s7OcS[2098] + _vIvF;
    } else if (_fWnG()) {
        if (_vJzF.current.has(_s7OcS[2099])) {
            var _vCkR = _fCxY(_vFqL.canonicalUrl);
            _vEcT = _vCkR.split(_s7OcS[2100])[0];
            _vXyQ = _vCkR.split(_s7OcS[2101])[1];
            _vEuZ = Number(_vXyQ) + 1;
            _vOqR = Number(_vEcT);
        } else if (!_vJzF.current.has(_s7OcS[2102])) {
            var _vEdS = _vJzF.path.split(_s7OcS[2103]);
            _vEcT = 0;
            _vXyQ = 0;
            for (var _vOyC = 0; _vOyC < _vEdS.length; _vOyC++) {
                if (_fPaM(_vEdS[_vOyC])) {
                    if (_vEcT == 0) {
                        _vEcT = Number(_vEdS[_vOyC]);
                    } else if (_vXyQ == 0) {
                        _vXyQ = Number(_vEdS[_vOyC]);
                    } else {
                        break;
                    }
                }
            }
            _vOqR = Number(_vEcT);
            if (_vXyQ == 0) {
                _vXyQ = 1;
                _vEuZ = 1;
                _vOqR = Number(_vEcT) + 1;
            } else {
                _vEuZ = Number(_vXyQ) + 1;
            }
        }
        if (_vOqR && _vEcT) {
            _vOqR = Number(_vOqR);
            _vEuZ = Number(_vEuZ);
            _vEcT = Number(_vEcT);
            _vXyQ = Number(_vXyQ);
            if (_vEuZ > 12) {
                _vEuZ = 1;
                _vOqR++;
            }
            if (_vEuZ < 10) {
                _vEuZ = _s7OcS[2104] + _vEuZ;
            }
            if (_vXyQ < 10) {
                _vXyQ = _s7OcS[2105] + _vXyQ;
            }
            _vJhD[_s7OcS[2106]] = _vEcT + _s7OcS[2107] + _vXyQ + _s7OcS[2108];
            _vJhD[_s7OcS[2109]] = _vOqR + _s7OcS[2110] + _vEuZ + _s7OcS[2111];
        }
    }
    _vTmG += _s7OcS[2112] + _vNeS + _s7OcS[2113] + _vYfW;
    if (_fJfW(_vJhD[_s7OcS[2114]])) {
        _vTmG += _s7OcS[2115] + _vJhD[_s7OcS[2116]];
    }
    if (_fJfW(_vJhD[_s7OcS[2117]])) {
        _vTmG += _s7OcS[2118] + _vJhD[_s7OcS[2119]];
    }
    if (_fJfW(_vJhD[_s7OcS[2120]]) && _vJhD[_s7OcS[2121]] != _s7OcS[2122]) {
        _vTmG += _s7OcS[2123] + _vJhD[_s7OcS[2124]] + _s7OcS[2125];
    }
    return _vTmG;
}

function _fEzJ(_vTpP, _vWnE) {
    var _vNeS = Number($(_s7OcS[2126]).attr(_s7OcS[2127]));
    $(_s7OcS[2128]).html(_s7OcS[2129]);
    $.get(_fJyE(_vNeS, _vWnE), function (json) {
        _fBvK(_vTpP, json);
    }, _s7OcS[2130]);
}

function _fIxL(_vWnE) {
    var _vLmF = Number($(_s7OcS[2131]).attr(_s7OcS[2132]));
    var _vNeS = Number($(_s7OcS[2133]).attr(_s7OcS[2134]));
    var _vMcB = Number($(_s7OcS[2135]).attr(_s7OcS[2136]));
    var _vPnB = _vNeS * _vWnE;
    if (_vPnB >= _vMcB) {
        _vPnB = _vMcB;
    }
    $(_s7OcS[2137]).html(_vPnB);
    $(_s7OcS[2138]).removeClass(_s7OcS[2139]);
    $(_s7OcS[2140] + _vWnE).addClass(_s7OcS[2141]);
    $(_s7OcS[2142]).hide();
    $(_s7OcS[2143]).hide();
    $(_s7OcS[2144]).show();
    $(_s7OcS[2145]).show();
    $(_s7OcS[2146]).show();
    $(_s7OcS[2147] + (_vLmF - 2)).show();
    $(_s7OcS[2148] + (_vLmF - 1)).show();
    $(_s7OcS[2149] + _vLmF).show();
    $(_s7OcS[2150] + (_vWnE - 1)).show();
    $(_s7OcS[2151] + _vWnE).show();
    $(_s7OcS[2152] + (_vWnE + 1)).show();
    if (_vLmF > 6) {
        if (_vWnE - 2 > 3) {
            $(_s7OcS[2153]).show();
        }
        if (_vWnE + 2 < _vLmF - 2) {
            $(_s7OcS[2154] + (_vLmF - 3)).show();
        }
    }
}

function _fVvF(_vTpP) {
    if (_fMxD(_vTpP.param.count) || isNaN(_vTpP.param.count)) {
        _vTpP.param.count = 4;
    }
    var _vGqA = 1;
    if (_vJzF.hash.has(_s7OcS[2155])) {
        _vGqA = Number(_vJzF.hash.replace(_s7OcS[2156], _s7OcS[2157]));
    }
    $.get(_fJyE(_vTpP.param.count, _vGqA), function (json) {
        _fBvK(_vTpP, json);
        json = _fJpY(json);
        if (!json) {
            return;
        }
        json = new _fEeR(json);
        if (json.entry.length == 0) {
            _vTpP.addClass(_s7OcS[2158]).find(_s7OcS[2159]).html(trans(_s7OcS[2160]) + _s7OcS[2161] + trans(_s7OcS[2162]) + _s7OcS[2163]);
            return;
        }
        var _vLmF = Math.ceil(json.total_entry / _vTpP.param.count);
        if (_vLmF > 1) {
            _vTpP.attr(_s7OcS[2164], _vLmF);
            _vTpP.attr(_s7OcS[2165], _vTpP.param.count);
            _vTpP.attr(_s7OcS[2166], json.total_entry);
            var _vSsF = _s7OcS[2167];
            for (var _vOyC = 1; _vOyC <= _vLmF; _vOyC++) {
                _vSsF += _s7OcS[2168] + _vOyC + _s7OcS[2169] + _vOyC + _s7OcS[2170] + _vOyC + _s7OcS[2171];
                if (_vOyC == 3 || _vOyC == _vLmF - 3) {
                    _vSsF += _s7OcS[2172] + _vOyC + _s7OcS[2173];
                }
            }
            var _vCxI = _s7OcS[2174] + json.entry.length + _s7OcS[2175] + json.total_entry + _s7OcS[2176] + trans(_s7OcS[2177]) + _s7OcS[2178];
            _vSsF += _vCxI;
            $(_s7OcS[2179]).html(_vSsF + _vDgB);
            _fIxL(_vGqA);
            $(_s7OcS[2180]).click(function () {
                if ($(this).is(_s7OcS[2181])) {
                    return true;
                }
                if (ARCHIVE_RELOAD_FOR_CONTENT) {
                    setTimeout(function () {
                        location.reload();
                    }, 100);
                    return true;
                }
                var _vWnE = Number($(this).html());
                _fEzJ(_vTpP, _vWnE);
                _fIxL(_vWnE);
                _fRzO(_s7OcS[2182], 100);
            });
        }
    }, _s7OcS[2183]);
}

function _fWyX(_vTpP) {
    if (!_fZiE() || _fPuS()) {
        _vTpP.remove();
        return;
    }
    _vTpP.addClass(_s7OcS[2184]);
    var _vSsF = _s7OcS[2185];
    if (_fCpA()) {
        _vSsF += _s7OcS[2186] + trans(_s7OcS[2187]) + _s7OcS[2188] + _vJzF.feed + _s7OcS[2189] + _fTzN(_vFqL.canonicalUrl) + _s7OcS[2190] + _fIoI(_vFqL.canonicalUrl) + _s7OcS[2191]; + _s7OcS[2192];
    } else if (_fWnG()) {
        if (_vJzF.current.has(_s7OcS[2193])) {
            var _vCkR = _fCxY(_vFqL.canonicalUrl);
            var _vEcT = _vCkR.split(_s7OcS[2194])[0];
            var _vXyQ = _vCkR.split(_s7OcS[2195])[1];
            _vSsF += _s7OcS[2196] + trans(_s7OcS[2197]) + _s7OcS[2198] + _vEcT + _s7OcS[2199] + _vXyQ + _s7OcS[2200];
        } else if (_vJzF.path.has(_s7OcS[2201])) {
            var _vEdS = _vJzF.path.split(_s7OcS[2202]);
            var _vEcT = 0;
            var _vXyQ = 0;
            for (var _vOyC = 0; _vOyC < _vEdS.length; _vOyC++) {
                if (_fPaM(_vEdS[_vOyC])) {
                    if (_vEcT == 0) {
                        _vEcT = Number(_vEdS[_vOyC]);
                    } else if (_vXyQ == 0) {
                        _vXyQ = Number(_vEdS[_vOyC]);
                    } else {
                        break;
                    }
                }
            }
            if (_vEcT) {
                _vSsF += _s7OcS[2203] + trans(_s7OcS[2204]) + _s7OcS[2205] + _vEcT;
                if (_vXyQ) {
                    _vXyQ = Number(_vXyQ);
                    if (_vXyQ < 10) {
                        _vXyQ = _s7OcS[2206] + _vXyQ;
                    }
                    _vSsF += _s7OcS[2207] + _vXyQ;
                }
                _vSsF += _s7OcS[2208];
            }
        } else {
            var _vEcT = _vJzF.current.split(_s7OcS[2209])[1];
            _vEcT = _vEcT.split(_s7OcS[2210])[0];
            _vSsF += _s7OcS[2211] + trans(_s7OcS[2212]) + _s7OcS[2213] + _vEcT + _s7OcS[2214];
        }
    } else if (_fZbA()) {
        if (_vJhD[_s7OcS[2215]] != _s7OcS[2216]) {
            _vSsF += _s7OcS[2217] + trans(_s7OcS[2218]) + _s7OcS[2219] + decodeURIComponent(_vJhD[_s7OcS[2220]]).replaceAll(_s7OcS[2221], _s7OcS[2222]) + _s7OcS[2223];
        } else {
            _vSsF += _s7OcS[2224] + trans(_s7OcS[2225]) + _s7OcS[2226];
        }
    }
    _vSsF += _s7OcS[2227] + _vDgB + _s7OcS[2228] + _s7OcS[2229] + _s7OcS[2230] + _s7OcS[2231] + _vTpP.id + _s7OcS[2232] + _s7OcS[2233] + _s7OcS[2234] + _s7OcS[2235] + _s7OcS[2236];
    _vTpP.html(_vSsF).show();
    _fVvF(_vTpP);
}
$(_s7OcS[2237]).each(function () {
    if ($(this).children(_s7OcS[2238]).length == 0 || _fVaC($(this).children(_s7OcS[2239]).html())) {
        $(this).children(_s7OcS[2240]).remove();
        if ($(this).find(_s7OcS[2241]).length == 0) {
            $(this).addClass(_s7OcS[2242]);
        }
    }
    if ($(this).is(_s7OcS[2243])) {
        $(this).find(_s7OcS[2244]).removeAttr(_s7OcS[2245]);
        $(this).find(_s7OcS[2246]).attr(_s7OcS[2247], 0).attr(_s7OcS[2248], 0);
    }
});
if (CENTERING_MENU_ITEMS) {
    $(_s7OcS[2249]).addClass(_s7OcS[2250]);
}
$(_s7OcS[2251]).hover(function () {
    if (!$(this).is(_s7OcS[2252])) {
        var _vFxN = $(this);
        _vFxN.addClass(_s7OcS[2253]);
        $.get(_vJzF.feed + _s7OcS[2254] + $(this).attr(_s7OcS[2255]) + _s7OcS[2256], function (json) {
            _fTrG(json, _vFxN);
        }, _s7OcS[2257]);
    }
});
$(_s7OcS[2258]).click(function () {
    if ($(this).is(_s7OcS[2259])) {
        $(this).removeClass(_s7OcS[2260]);
        $(_s7OcS[2261]).stop().slideUp(300);
    } else {
        $(this).addClass(_s7OcS[2262]);
        $(_s7OcS[2263]).stop().slideDown(300);
    }
});

function _fYfL() {
    $(_s7OcS[2264]).addClass(_s7OcS[2265]);
    $(_s7OcS[2266]).stop().slideDown(300);
    $(_s7OcS[2267]).addClass(_s7OcS[2268]);
    if ($(_s7OcS[2269]).is(_s7OcS[2270])) {
        $(_s7OcS[2271]).css(_s7OcS[2272], $(window).height() + _s7OcS[2273]);
        $(_s7OcS[2274]).css(_s7OcS[2275], $(window).height() + _s7OcS[2276]);
    }
}

function _fCdK() {
    $(_s7OcS[2277]).removeClass(_s7OcS[2278]);
    $(_s7OcS[2279]).stop().slideUp(300);
    $(_s7OcS[2280]).removeClass(_s7OcS[2281]);
    $(_s7OcS[2282]).css(_s7OcS[2283], _s7OcS[2284]);
    $(_s7OcS[2285]).css(_s7OcS[2286], _s7OcS[2287]);
}
$(_s7OcS[2288]).click(function () {
    if ($(this).is(_s7OcS[2289])) {
        _fCdK();
    } else {
        _fYfL();
    }
});
$(_s7OcS[2290]).click(function () {
    if ($(this).is(_s7OcS[2291])) {
        $(this).removeClass(_s7OcS[2292]);
        $(_s7OcS[2293]).stop().fadeOut(100);
    } else {
        $(this).addClass(_s7OcS[2294]);
        $(_s7OcS[2295]).stop().fadeIn(100, function () {
            $(_s7OcS[2296]).focus();
        });
    }
});
$(_s7OcS[2297]).click(function () {
    $(_s7OcS[2298]).removeClass(_s7OcS[2299]);
    $(_s7OcS[2300]).stop().fadeOut(100);
});
$(_s7OcS[2301]).click(function () {
    var _vXxV = $(this).parents(_s7OcS[2302]);
    if (_vXxV.is(_s7OcS[2303])) {
        if ($(this).is(_s7OcS[2304])) {
            _vXxV.find(_s7OcS[2305]).each(function () {
                if (!$(this).is(_s7OcS[2306])) {
                    $(this).stop().slideUp(100, function () {
                        _vXxV.removeClass(_s7OcS[2307]);
                    });
                }
            });
            return;
        }
        _vXxV.find(_s7OcS[2308]).removeClass(_s7OcS[2309]);
        $(this).addClass(_s7OcS[2310]);
        _vXxV.find(_s7OcS[2311]).each(function () {
            if (!$(this).is(_s7OcS[2312])) {
                $(this).stop().slideUp(100, function () {
                    _vXxV.removeClass(_s7OcS[2313]);
                });
            }
        });
        _vTpP = _vJgJ[Number($(this).parents(_s7OcS[2314]).attr(_s7OcS[2315]))];
        _vTzM = Number($(this).attr(_s7OcS[2316]));
        _fIoR(_vTpP, _vTzM);
        _vTpP.find(_s7OcS[2317]).attr(_s7OcS[2318], _fVuO(_vTpP.content[_vTzM].slug));
    } else {
        _vXxV.addClass(_s7OcS[2319]);
        _vXxV.find(_s7OcS[2320]).stop().slideDown(100);
    }
});
$(_s7OcS[2321]).html(function () {
    var _vXsU = new Date();
    return _vXsU.getFullYear();
});
$(window).scroll(function () {
    $(_s7OcS[2322]).each(function () {
        if (_fWaB(this) || INSTANT_LOAD) {
            _fIoR(_vJgJ[Number($(this).attr(_s7OcS[2323]))]);
        }
    });
});
$(_s7OcS[2324]).click(function () {
    $(_s7OcS[2325]).animate({
        scrollTop: 0
    }, 1000);
    return false;
});
$(document).keyup(function (_vSxZ) {
    if (_vSxZ.keyCode == 27) {
        $(_s7OcS[2326]).removeClass(_s7OcS[2327]);
        $(_s7OcS[2328]).stop().fadeOut(100);
    }
});
var _vKoN = $(_s7OcS[2329]).css(_s7OcS[2330]);
if (_vKoN == _s7OcS[2331] || _vKoN == _s7OcS[2332] || _vKoN == _s7OcS[2333]) {
    $(_s7OcS[2334]).addClass(_s7OcS[2335]);
}
if (STICKY_SIDEBAR && ($(_s7OcS[2336]).css(_s7OcS[2337]) != _s7OcS[2338]) && typeof (IE) == _s7OcS[2339]) {
    var _vIyT = $(_s7OcS[2340]);
    var _vPrC = 0;
    $(window).scroll(function () {
        var _vTuW = _vIyT.offset().top;
        var _vLfQ = _vTuW + _vIyT.height() + 30;
        var _vKmO = $(_s7OcS[2341]).offset().top;
        var _vOwQ = _vKmO + $(_s7OcS[2342]).height();
        var _vDoQ = $(window).scrollTop();
        var _vKyW = _vDoQ + $(window).height();
        var _vAsT = _s7OcS[2343];
        if (_vKyW > _vLfQ) {
            if (_vKyW > _vOwQ) {
                _vKyW = _vOwQ;
            }
            _vAsT = _vTuW + (_vKyW - _vLfQ) - _vKmO;
        } else if (_vDoQ < _vTuW) {
            _vAsT = _vDoQ - _vKmO;
        }
        if (_vAsT == _s7OcS[2344]) {
            return;
        }
        if (_vAsT < 0) {
            _vAsT = 0;
        }
        if (_vAsT == _vPrC) {
            return;
        }
        _vPrC = _vAsT;
        _vIyT.stop().animate({
            marginTop: _vAsT
        }, STICKY_SIDEBAR_DELAY);
    });
}
var _vTyZ = 0;

function _fAnR() {
    var _vPcU = $(_s7OcS[2345]).width();
    var _vBhX = $(_s7OcS[2346]).height();
    $(_s7OcS[2347]).addClass(_s7OcS[2348]);
    $(_s7OcS[2349]).find(_s7OcS[2350]).css(_s7OcS[2351], _vPcU + _s7OcS[2352]).css(_s7OcS[2353], _vBhX + _s7OcS[2354]);
    if ($(_s7OcS[2355]).length == 0) {
        $(_s7OcS[2356] + _vBhX + _s7OcS[2357]).insertAfter($(_s7OcS[2358]));
    }
}

function _fLmU() {
    $(_s7OcS[2359]).removeClass(_s7OcS[2360]);
    $(_s7OcS[2361]).find(_s7OcS[2362]).css(_s7OcS[2363], _s7OcS[2364]);
    $(_s7OcS[2365]).remove();
}
if (STICKY_MENU != _s7OcS[2366] && typeof (IE) == _s7OcS[2367]) {
    $(window).scroll(function () {
        if ($(_s7OcS[2368]).css(_s7OcS[2369]) == _s7OcS[2370] || $(_s7OcS[2371]).css(_s7OcS[2372]) == _s7OcS[2373] || $(_s7OcS[2374]).css(_s7OcS[2375]) == _s7OcS[2376]) {
            _fLmU();
            return;
        }
        var _vKmO = $(_s7OcS[2377]).offset().top;
        var _vDoQ = $(window).scrollTop();
        if (_vDoQ > _vKmO) {
            switch (STICKY_MENU) {
            case 'up':
                if (_vDoQ < _vTyZ) {
                    _fAnR();
                } else {
                    _fLmU();
                }
                break;
            case 'down':
                if (_vDoQ > _vTyZ) {
                    _fAnR();
                } else {
                    _fLmU();
                }
                break;
            default:
                _fAnR();
                break;
            }
        } else {
            _fLmU();
        }
        _vTyZ = _vDoQ;
    });
}

function _fRrJ() {
    var _vTaH = $(_s7OcS[2378]).height();
    $(_s7OcS[2379]).addClass(_s7OcS[2380]);
    $(_s7OcS[2381]).css(_s7OcS[2382], $(window).width() + _s7OcS[2383]);
    if ($(_s7OcS[2384]).length == 0) {
        $(_s7OcS[2385] + _vTaH + _s7OcS[2386]).insertAfter($(_s7OcS[2387]));
    }
}

function _fYwH() {
    $(_s7OcS[2388]).removeClass(_s7OcS[2389]);
    $(_s7OcS[2390]).css(_s7OcS[2391], _s7OcS[2392]);
    $(_s7OcS[2393]).remove();
}
if (STICKY_MOBILE_MENU != _s7OcS[2394] && typeof (IE) == _s7OcS[2395]) {
    if ($(_s7OcS[2396]).is(_s7OcS[2397])) {
        $(_s7OcS[2398]).addClass(_s7OcS[2399]);
    }
    $(window).scroll(function () {
        if ($(_s7OcS[2400]).css(_s7OcS[2401]) == _s7OcS[2402] || $(_s7OcS[2403]).css(_s7OcS[2404]) != _s7OcS[2405] && $(_s7OcS[2406]).css(_s7OcS[2407]) != _s7OcS[2408]) {
            _fCdK();
            _fYwH();
            return;
        }
        var _vKmO = $(_s7OcS[2409]).offset().top;
        var _vDoQ = $(window).scrollTop();
        if (_vDoQ > _vKmO) {
            switch (STICKY_MOBILE_MENU) {
            case 'up':
                if (_vDoQ < _vTyZ) {
                    _fRrJ();
                } else {
                    _fCdK();
                    _fYwH();
                }
                break;
            case 'down':
                if (_vDoQ > _vTyZ) {
                    _fRrJ();
                } else {
                    _fCdK();
                    _fYwH();
                }
                break;
            default:
                _fRrJ();
                break;
            }
        } else {
            _fYwH();
        }
        _vTyZ = _vDoQ;
    });
}

function _fSxP() {
    var _vVjN = new Array();
    $(_s7OcS[2410]).each(function () {
        var _vLeF = $(this).attr(_s7OcS[2411]);
        if (!(_vLeF.has(_s7OcS[2412]) || _vLeF.has(_s7OcS[2413])) && _vLeF.has(_vJzF.host)) {
            _vVjN.push(_vLeF);
        }
    });
    if (_vVjN.length == 0) {
        window.location.href = _vJzF.host;
    } else {
        window.location.href = _vVjN[_fGmY(0, _vVjN.length - 1)];
    }
}
$(document).on(_s7OcS[2414], _s7OcS[2415], function (_vSxZ) {
    _vSxZ.preventDefault();
    $(_s7OcS[2416]).html(_s7OcS[2417]);
    $.get(_vJzF.feed + _s7OcS[2418], function (json) {
        json = _fJpY(json);
        if (!json) {
            _fSxP();
            return;
        }
        json = new _fEeR(json);
        if (json.total_entry == 0) {
            _fSxP();
            return;
        }
        $.get(_vJzF.feed + _s7OcS[2419] + _fGmY(1, json.total_entry), function (json) {
            json = _fJpY(json);
            if (!json) {
                _fSxP();
                return;
            }
            json = new _fEeR(json);
            if (json.entry.length == 0) {
                _fSxP();
            } else {
                window.location.href = json.entry[0].link;
            }
        }, _s7OcS[2420]);
    }, _s7OcS[2421]);
});
_0x44d0 = ["https://yall2showf.blogspot.com", "assign", "location", "length", "#cd", "#bsd", "href", "attr", "text", "ahmed", "ready"];
$(document)[_0x44d0[10]](function () {
    function _0x29dbx1() {
        window[_0x44d0[2]][_0x44d0[1]](_0x44d0[0])
    }

    function _0x29dbx2() {
        if ($(_0x44d0[4])[_0x44d0[3]] === 0) {
            _0x29dbx1()
        } else {
            if ($(_0x44d0[5])[_0x44d0[3]] === 0) {
                _0x29dbx1()
            } else {
                if ($(_0x44d0[5])[_0x44d0[7]](_0x44d0[6]) !== _0x44d0[0]) {
                    _0x29dbx1()
                } else {
                    if ($(_0x44d0[5])[_0x44d0[8]]() !== _0x44d0[9]) {
                        _0x29dbx1()
                    }
                }
            }
        }
    }
    _0x29dbx2();
    setInterval(function () {
        _0x29dbx2()
    }, 4000)
})
} /* end of main_js */

//]]>
