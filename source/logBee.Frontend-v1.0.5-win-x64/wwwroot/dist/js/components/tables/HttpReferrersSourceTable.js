define(["logBee","js/templates","jquery","js/components/searchTable/SearchTable","js/components/searchTable/Column"],function(t,s,a,o,e){const n=[new e("tables-httpReferrers-source-columns-path-template"),new e("tables-httpReferrers-source-columns-visits-template"),new e("tables-httpReferrers-source-columns-dateTime-template")],i={applicationId:"",templateName:"tables-httpReferrers-source-table",$container:a({}),itemsPerPage:10,localItems:[]};function r(e){this._options=a.extend(!0,{},i,e),e=s.renderTemplate(this._options.templateName),this._options.$container.append(e.html),this._domId=e.id,this.searchTable=new o({domId:e.id,columns:n,itemsPerPage:this._options.itemsPerPage,localItems:this._options.localItems}),this.searchTable.events.on(o.EVENT_TYPES.afterDataSet,function(e){e.instance.getTable().find("[data-time-ago]").each(function(){t.timeAgoTag(a(this))})})}return r.prototype.getContainer=function(){return a("#"+this._domId)},r.prototype.destroy=function(){this.searchTable.destroy()},r});