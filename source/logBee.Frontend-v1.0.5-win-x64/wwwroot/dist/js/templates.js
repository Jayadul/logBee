define(["ko"],function(o){let a=0;function r(e,t,n){t=t||{},n=void 0===n||n,e=e.split("/").join("-")+"-template",t.domId="template-"+ ++a;let i=o.renderCustomTemplate(e,t);return i=(i=n?i.replace(/\[data-bind\]=/g,"data-bind="):i).replace(/<!--[\s\S]*?-->/g,""),{id:t.domId,html:i}}return{renderTemplate:r,toast:function({title:e,lines:t,type:n,listItems:i}){return e?r("toast-with-header",{title:e,lines:t,type:n,listItems:i||[]}):r("toast-without-header",{lines:t,type:n,listItems:i||[]})},requestsTable:function({hasKeywordsSearch:e}){return r("tables-requests-table",{hasKeywordsSearch:e})},exceptionsTable:function(){return r("tables-exceptions-table",{})},columnFilter:function(e){return r("components-searchTable-columnFilter",e)},previewFileModal:function({fileName:e,content:t,usePreTagForContent:n}){return r("components-previewFileModal",{fileName:e,content:t,usePreTagForContent:n})},applicationKeys:{appsettings_json:function(e){return r("applicationKeys-appsettings-json",e)},web_config:function(e){return r("applicationKeys-web-config",e)}}}});