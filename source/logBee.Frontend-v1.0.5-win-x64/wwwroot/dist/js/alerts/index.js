define(["logBee","jquery","js/templates","js/visitorCookie","js/components/tables/AlertsTable","js/components/searchTable/FilterConstructor","js/components/searchTable/SortOperator"],function(n,t,o,r,i,e,s){return{init:function(e){r.setOrganizationId(e.organizationId);var a=n.htmlDecode(t("#page-model").html()),a=JSON.parse(a),a=(a.usage&&(a=o.renderTemplate("plan-usage-notification/card",{organization:a.organization,usage:a.usage}),t("#content").prepend(a.html)),new i({$container:t("#alertsTable-container"),applicationId:e.applicationId})),e=new s("DateTime","desc");a.searchTable.applySort(e)}}});