define(["logBee","jquery","google-code-prettify","js/components/TabsContent"],function(n,e,o,a){const i={$container:e({}),organizationId:"",applicationId:"",logBeeBackendUri:""};function t(t){this._options=e.extend(!0,{},i,t),this._tabsContent=new a({$container:this._options.$container,tabs:[new a.Tab({id:"dotnet_webApp",displayName:".NET web application",templatePath:"installInstructions-dotnet-serilog-webApp-tabContent-template",knockoutData:{organizationId:t.organizationId,applicationId:t.applicationId,logBeeBackendUri:t.logBeeBackendUri}}),new a.Tab({id:"dotnet_consoleApp",displayName:".NET console application",templatePath:"installInstructions-dotnet-serilog-consoleApp-tabContent-template",knockoutData:{organizationId:t.organizationId,applicationId:t.applicationId,logBeeBackendUri:t.logBeeBackendUri}}),new a.Tab({id:"dotnet_workerService",displayName:".NET worker service",templatePath:"installInstructions-dotnet-serilog-workerService-tabContent-template",knockoutData:{organizationId:t.organizationId,applicationId:t.applicationId,logBeeBackendUri:t.logBeeBackendUri}})]}),this._options.$container.find("[data-prettyprint]").each(function(){n.prettyPrint(e(this),o)}),this._tabsContent.showTab("dotnet_webApp")}return t.prototype.destroy=function(){this._options.$container.empty()},t});