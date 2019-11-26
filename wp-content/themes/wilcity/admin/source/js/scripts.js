!function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t){this.value=t}function e(e){function n(a,i){try{var r=e[a](i),s=r.value;s instanceof t?Promise.resolve(s.value).then(function(t){n("next",t)},function(t){n("throw",t)}):o(r.done?"return":"normal",r.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":a.resolve({value:e,done:!0});break;case"throw":a.reject(e);break;default:a.resolve({value:e,done:!1})}(a=a.next)?n(a.key,a.arg):i=null}var a,i;this._invoke=function(t,e){return new Promise(function(o,r){var s={key:t,arg:e,resolve:o,reject:r,next:null};i?i=i.next=s:(a=i=s,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}();!function(e){function n(){var t=e(".js_select2_ajax");t.select2({ajax:{type:"GET",url:ajaxurl,delay:250,minimumInputLength:2,data:function(e){return{action:"select2_get_posts",post_type:t.parent().data("query"),s:e.term}},processResults:function(t,e){return{results:t.data}},cache:!0}})}function o(){var t=e(".js_select2_select_user_ajax");t.select2({ajax:{type:"GET",url:ajaxurl,delay:250,minimumInputLength:2,data:function(e){return{action:"select_user_via_ajax",username:t.parent().data("query"),s:e.term}},processResults:function(t,e){return{results:t.data}},cache:!0}})}function a(){e(".js_select2_without_ajax").each(function(){var t=e(this);t.select2(),t.data("fillto")&&t.on("select2:select",function(n){e('[name="'+t.data("fillto")+'"]').val(n.params.data.id)})})}if(window.wilokeAdmin={},e().wilokeColorPicker||(e.fn.wilokeColorPicker=function(){if(!e().spectrum())return!1;var n=void 0;n=null!==WilokeAdminGlobal.ColorPalatte?"object"===t(WilokeAdminGlobal.ColorPalatte)?WilokeAdminGlobal.ColorPalatte:e.parseJSON(WilokeAdminGlobal.ColorPalatte):null,e().spectrum&&e(this).spectrum({preferredFormat:"rgb",showAlpha:!0,change:function(t){null!==t?e(this).attr("value",t.toRgbString()):e(this).attr("value","")},move:function(t){e(this).next().find(".sp-preview-inner").data("color",t.toRgbString()).change()},hide:function(){e(this).change()},allowEmpty:!0,showInput:!0,showPalette:!1,palette:n})}),"undefined"!=typeof vc&&void 0!==vc.shortcode_view){var i=vc.shortcodes;window.WilokeTabView=vc.shortcode_view.extend({new_tab_adding:!1,events:{"click .add_tab":"addTab","click > .vc_controls .vc_control-btn-delete":"deleteShortcode","click > .vc_controls .vc_control-btn-edit":"editElement","click > .vc_controls .vc_control-btn-clone":"clone"},initialize:function(t){window.WilokeTabView.__super__.initialize.call(this,t),_.bindAll(this,"stopSorting")},render:function(){return window.WilokeTabView.__super__.render.call(this),this.$tabs=this.$el.find(".wpb_tabs_holder"),this.createAddTabButton(),this},ready:function(t){return window.WilokeTabView.__super__.ready.call(this,t),this},createAddTabButton:function(){var t=+new Date+"-"+Math.floor(11*Math.random());this.$tabs.append('<div id="new-tab-'+t+'" class="new_element_button"></div>'),this.$add_button=e('<li class="add_tab_block"><a href="#new-tab-'+t+'" class="add_tab" title="'+window.i18nLocale.add_tab+'"></a></li>').appendTo(this.$tabs.find(".tabs_controls"))},addTab:function(t){t.preventDefault(),this.new_tab_adding=!0;var e=window.i18nLocale.tab,n=this.$tabs.find("[data-element_type=single_tab]").length,o=+new Date+"-"+n+"-"+Math.floor(11*Math.random());return vc.shortcodes.create({shortcode:"single_tab",params:{title:e,tab_id:o},parent_id:this.model.id}),!1},stopSorting:function(t,n){var o=void 0;this.$tabs.find("ul.tabs_controls li:not(.add_tab_block)").each(function(t){e(this).find("a").attr("href").replace("#","");o=vc.shortcodes.get(e("[id="+e(this).attr("aria-controls")+"]").data("model-id")),vc.storage.lock(),o.save({order:e(this).index()})}),o.save()},changedContent:function(t){var n=t.model.get("params");if(this.$tabs.hasClass("ui-tabs")||(this.$tabs.tabs({select:function(t,n){return e(n.tab).hasClass("add_tab")}}),this.$tabs.find(".ui-tabs-nav").prependTo(this.$tabs),this.$tabs.find(".ui-tabs-nav").sortable({axis:"test_element"===this.$tabs.closest("[data-element_type]").data("element_type")?"y":"x",update:this.stopSorting,items:"> li:not(.add_tab_block)"})),!0===t.model.get("cloned")){t.model.get("cloned_from");var o=e(".tabs_controls > .add_tab_block",this.$content),a=e("<li><a href='#tab-"+n.tab_id+"'>"+n.title+"</a></li>").insertBefore(o);this.$tabs.tabs("refresh"),this.$tabs.tabs("option","active",a.index())}else e("<li><a href='#tab-"+n.tab_id+"'>"+n.title+"</a></li>").insertBefore(this.$add_button),this.$tabs.tabs("refresh"),this.$tabs.tabs("option","active",this.new_tab_adding?e(".ui-tabs-nav li",this.$content).length-2:0);this.new_tab_adding=!1},cloneModel:function(t,e,n){var o=_.isBoolean(n)&&!0===n?t.get("order"):parseFloat(t.get("order"))+vc.clone_index,a=void 0,r=_.extend({},t.get("params"));return"single_tab"===t.get("shortcode")&&_.extend(r,{tab_id:+new Date+"-"+this.$tabs.find("[data-element-type=single_tab]").length+"-"+Math.floor(11*Math.random())}),a=i.create({shortcode:t.get("shortcode"),id:vc_guid(),parent_id:e,order:o,cloned:"single_tab"===t.get("shortcode"),cloned_from:t.toJSON(),params:r}),_.each(i.where({parent_id:t.id}),function(t){this.cloneModel(t,a.get("id"),!0)},this),a}})}e(document).ready(function(){e(".wiloke-colorpicker").each(function(){e(this).wilokeColorPicker()});var t=e(".wiloke-sortable");t.length>0&&t.sortable();var i=e("#sidebarinfo_repeat");i.length>0&&i.wilokePostFormatMediaPopup({return:"url",multiple:!1,isPreview:!1,buttonClass:".wiloke-button"}),e(document).on("click","#wiloke-vc-listofterms-toggle-select",function(t){t.preventDefault(),e(this).prev().find("option:selected").length?e(this).prev().find("option:selected").each(function(){e(this).prop("selected",!1)}):e(this).prev().find("option").each(function(){e(this).prop("selected",!0)})}),e().select2()&&(n(),o(),a())})}(jQuery)}();
