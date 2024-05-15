define(["logBee","jquery","bootstrap","ko","js/templates","js/formatFileContent","js/codemirror","js/components/TabsContent"],function(n,a,s,r,p,d,l,c){const h={$container:a({}),organizationId:"",applicationId:"",logBeeBackendUri:"",logBeeBackendCreateRequestUri:""};function t(t){const o=this;this._options=a.extend(!0,{},h,t),t=p.renderTemplate("installInstructions-restApi-createRequestPayload",{organizationId:this._options.organizationId,applicationId:this._options.applicationId,startDateTime:(new Date).toISOString()}).html,t=n.htmlDecode(t);let e=this._options.logBeeBackendCreateRequestUri;try{var i=new URL(e);e=i.pathname}catch{}this._tabsContent=new c({$container:this._options.$container,tabs:[new c.Tab({id:"restApi-request",displayName:"Request",templatePath:"installInstructions-restApi-request-tabContent-template",knockoutData:{organizationId:this._options.organizationId,applicationId:this._options.applicationId,logBeeBackendUri:this._options.logBeeBackendUri,logBeeBackendCreateRequestUri:this._options.logBeeBackendCreateRequestUri}}),new c.Tab({id:"payload-definition",displayName:"OpenAPI specification",templatePath:"installInstructions-restApi-payloadDefinition-tabContent-template",knockoutData:{organizationId:this._options.organizationId,applicationId:this._options.applicationId,startDateTime:(new Date).toISOString(),createRequestLocalPath:e}})],onTabChanged:function(t,e){/^restApi-request$/i.test(e)&&(o.payloadCodeEditor.refresh(),o.payloadCodeEditor.focus())}}),this._viewModel={createRequestResponse:r.observable(null)},r.applyBindings(this._viewModel,this._options.$container[0]),(i=this._options.$container.find("#payloadTextArea")).val(t),t=n.getTheme(),this.payloadCodeEditor=l.fromTextArea(i[0],{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,mode:"javascript",theme:/^dark/i.test(t)?"dracula":"duotone-light",viewportMargin:1/0}),i.parent().children(".CodeMirror").css("height","auto"),this._options.$container.find("[data-prettyprint]").each(function(){const e=a(this);d.highlightContent(e.text()).then(t=>{t&&e.html(t)})}),this._options.$container.on("click","[data-submit]",function(t){t.preventDefault();{var i=o;t=this;const e=s.Button.getOrCreateInstance(t);e.toggleDisabled(!0),a.ajax({url:"/Components/CreateRequest",data:i.payloadCodeEditor.getValue(),method:"post",dataType:"json",contentType:"application/json; charset=utf-8"}).done(function(e){var t=JSON.parse(e.responseAsString);const o=JSON.stringify(t,null,4);d.highlightContent(o).then(t=>{i._viewModel.createRequestResponse({statusCode:e.statusCode,responseAsString:[e.statusCode+" "+e.statusCodeText,t||o].join("<br />"),requestLog:e.requestLog})})}).fail(function(t){n.showXhrErrorToast(t,!0)}).always(t=>{e.toggleDisabled(!1)})}}),this._tabsContent.showTab("restApi-request")}return t.prototype.destroy=function(){r.disposeKoViewModel(this._viewModel,this._options.$container),this.payloadCodeEditor.toTextArea(),this._options.$container.empty()},t});