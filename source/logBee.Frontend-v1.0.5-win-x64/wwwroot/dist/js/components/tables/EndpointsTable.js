define(["logBee","js/templates","jquery","js/components/searchTable/SearchTable","js/components/searchTable/Column","js/components/searchTable/SortOperator","js/components/searchTable/FilterConstructor"],function(n,a,o,i,e,t,s){const l=[new e("tables-endpoints-columns-endpoint-template"),new e("tables-endpoints-columns-averageDuration-template"),new e("tables-endpoints-columns-count-template"),new e("tables-endpoints-columns-lastSeen-template")],r={applicationId:"",$container:o({}),templateName:"tables-endpoints-table",itemsPerPage:20};function d(e){const t=this;this._options=o.extend(!0,{},r,e),e=a.renderTemplate(this._options.templateName),this._options.$container.append(e.html),this._domId=e.id,this.searchTable=new i({domId:e.id,url:"/Endpoints/SearchEndpoints",urlParams:function(){return{applicationId:t._options.applicationId}},columns:l,itemsPerPage:this._options.itemsPerPage}),this.searchTable.addColumnFilter({id:"endpoint",columnName:"Endpoint",field:"TokenizedPath",fieldType:"string"}),this.searchTable.addColumnFilter({id:"averageDuration",columnName:"Avg. duration",field:"AvgDuration",fieldType:"number",hasFilter:!1}),this.searchTable.addColumnFilter({id:"count",columnName:"Count",field:"Count",fieldType:"number",hasFilter:!1}),this.searchTable.addColumnFilter({id:"lastSeen",columnName:"Last seen",field:"LastSeen",fieldType:"number",hasFilter:!1}),this.searchTable.events.on(i.EVENT_TYPES.afterDataSet,function(e){e.instance.getTable().find("[data-time-ago]").each(function(){n.timeAgoTag(o(this))})})}return d.prototype.getContainer=function(){return o("#"+this._domId)},d.prototype.destroy=function(){this.searchTable.destroy()},d});