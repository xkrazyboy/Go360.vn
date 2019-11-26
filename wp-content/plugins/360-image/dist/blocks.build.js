!function(e){function t(l){if(n[l])return n[l].exports;var i=n[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var l=n(2),i=(n.n(l),n(3)),r=(n.n(i),wp.components),a=r.IconButton,o=r.PanelBody,c=r.TextControl,m=r.Toolbar,s=r.Spinner,u=r.withNotices,d=r.Notice,g=wp.element.Fragment,p=wp.i18n.__,w=wp.blocks.registerBlockType,h=wp.editor,f=h.BlockControls,b=h.InspectorControls,E=h.BlockAlignmentToolbar,y=h.MediaPlaceholder,v=h.MediaUpload,k=h.MediaUploadCheck,N=(h.AlignmentToolbar,h.RichText,wp.blob.isBlobURL),O=["image"],x={title:{type:"array",source:"children",selector:"p"},url:{type:"string"},align:{type:"string"},widthBeforeWideFullAlignments:{type:"number",default:600},width:{type:"number",default:600},height:{type:"number",default:300},contentAlign:{type:"string",default:"center"},id:{type:"number"}};w("cgb/block-algori-360-image",{title:p("360\xb0 Image"),description:p("If an image is worth 1,000 words, imagine how many more words an interactive 360\xb0 image is worth!  Insert a single 360\xb0 image."),icon:"format-image",category:"common",keywords:[p("algori panorama image - three sixty degree photo"),p("spherical photo - full-sphere 3D image"),p("equirectangular image - VR (Virtual Reality) photography")],attributes:x,edit:u(function(e){var t=e.attributes,n=e.setAttributes,l=(e.isSelected,e.className),i=e.noticeOperations,r=e.noticeUI,u=t.url,w=(t.title,t.align),h=t.widthBeforeWideFullAlignments,x=t.width,A=t.height,I=(t.contentAlign,t.id),B=function(e){return n({width:parseInt(e,10),widthBeforeWideFullAlignments:parseInt(e,10)})},T=function(e){return n({height:parseInt(e,10)})},C=function(e){if(!e||!e.url)return void n({url:void 0,id:void 0});n({url:e.url,id:e.id})},_=function(e){e!==u&&n({url:e,id:void 0})},j=function(e){var t=-1!==["wide","full"].indexOf(e)?{width:void 0}:{width:h};n(Object.assign({},t,{align:e}))},M=wp.element.createElement(g,null,wp.element.createElement(f,null,wp.element.createElement(E,{value:w,onChange:j}),wp.element.createElement(m,null,wp.element.createElement(k,null,wp.element.createElement(v,{onSelect:C,allowedTypes:O,value:I,render:function(e){var t=e.open;return wp.element.createElement(a,{className:"components-toolbar__control",label:p("Edit image"),icon:"edit",onClick:t})}})))),!!u&&wp.element.createElement(b,null,wp.element.createElement(o,{title:p("360\xb0 Image Settings")},wp.element.createElement("div",null,wp.element.createElement("p",null,p("Image Dimensions")),wp.element.createElement("div",null,-1!==["wide","full"].indexOf(w)?wp.element.createElement(d,{status:"informational",isDismissible:"false"},p("The")," \xa0",wp.element.createElement("strong",null,p("Width"))," \xa0",p("setting has been disabled because you have chosen either")," \xa0",wp.element.createElement("strong",null,p("Full"))," \xa0",p("or")," \xa0",wp.element.createElement("strong",null,p("Wide"))," \xa0",p("width alignment from the block toolbar.")):wp.element.createElement(c,{type:"number",label:p("Width"),value:void 0!==x?x:"",placeholder:600,min:1,onChange:B}),wp.element.createElement(c,{type:"number",label:p("Height"),value:void 0!==A?A:"",placeholder:300,min:1,onChange:T}))))));return u?wp.element.createElement(g,null,M,N(u)&&wp.element.createElement(s,null),wp.element.createElement("figure",{style:-1!==["wide","full"].indexOf(w)?{height:A}:{width:x,height:A},className:"wp-block-cgb-block-algori-360-image align"+w},wp.element.createElement("a-scene",{"loading-screen":"enabled: false;",embedded:!0},wp.element.createElement("a-entity",{camera:"","look-controls":"reverseMouseDrag: true"}),wp.element.createElement("a-sky",{src:u})))):wp.element.createElement(g,null,M,wp.element.createElement(y,{icon:"format-image",className:l,labels:{title:p("360 Image"),instructions:p("Drag a 360\xb0 image, upload a new one, insert from URL or select a file from your library.")},onSelect:C,onSelectURL:_,accept:"image/*",allowedTypes:O,notices:r,onError:i.createErrorNotice}))}),save:function(e){var t=e.attributes,n=(e.className,t.url),l=(t.title,t.align),i=t.width,r=t.height;t.contentAlign,t.id;return wp.element.createElement("figure",{style:-1!==["wide","full"].indexOf(l)?{height:r}:{width:i,height:r},className:"align"+l},wp.element.createElement("a-scene",{"loading-screen":"enabled: false;",embedded:""},wp.element.createElement("a-entity",{camera:"","look-controls":"reverseMouseDrag: true"}),wp.element.createElement("a-sky",{src:n})))},deprecated:[{attributes:Object.assign({},x),save:function(e){var t=e.attributes,n=(e.className,t.url),l=(t.title,t.align),i=t.width,r=t.height;t.contentAlign,t.id;return wp.element.createElement("figure",{style:-1!==["wide","full"].indexOf(l)?{height:r}:{width:i,height:r},className:"align"+l},wp.element.createElement("a-scene",{embedded:""},wp.element.createElement("a-sky",{src:n})))}},{attributes:Object.assign({},x),save:function(e){var t=e.attributes,n=(e.className,t.url),l=(t.title,t.align,t.width),i=t.height;t.contentAlign,t.id;return wp.element.createElement("figure",{style:{width:l,height:i}},wp.element.createElement("a-scene",{embedded:""},wp.element.createElement("a-sky",{src:n})))}},{attributes:Object.assign({},x),save:function(e){var t=e.attributes,n=(e.className,t.url),l=(t.title,t.align,t.width),i=t.height;t.contentAlign,t.id;return wp.element.createElement("div",null,wp.element.createElement("a-scene",{className:"wp-block-cgb-block-algori-360-image-embedded-scene",style:{width:l,height:i},embedded:""},wp.element.createElement("a-sky",{src:n})))}}]})},function(e,t){},function(e,t){}]);