define(["logBee","js/templates","jquery","ko","js/visitorCookie","chart-js","luxon","js/chart-utils","js/components/tables/UsersTable","js/components/searchTable/SortOperator","js/components/tables/HttpReferrersTable"],function(h,f,g,v,m,b,C,S,x,T,k){return{init:function(e){m.setOrganizationId(e.organizationId);var t=h.htmlDecode(g("#page-model").html()),t=JSON.parse(t);t.usage&&(o=f.renderTemplate("plan-usage-notification/card",{organization:t.organization,usage:t.usage}),g("#content").prepend(o.html));const a={hosts:[],statusCodesList:function(t,e){for(var a=[],n=0,o=t.intervals.length;n<o;n++)for(var r=0,i=t.intervals[n].value.length;r<i;r++){const l=JSON.parse(JSON.stringify(t.intervals[n].value[r]));var s=a.find(t=>t.httpStatusCode===l.httpStatusCode);s?s.count+=l.count:a.push(l)}return{items:a.sort((t,e)=>t.httpStatusCode-e.httpStatusCode),requestsUrl:e}}(t.httpTrafficChartData,e.requestsUrl),exceptionsList:function(t,e){for(var a=[],n=0,o=t.intervals.length;n<o;n++)for(var r=0,i=t.intervals[n].value.length;r<i;r++){const l=JSON.parse(JSON.stringify(t.intervals[n].value[r]));var s=a.find(t=>t.exceptionType===l.exceptionType);s?s.count+=l.count:a.push(l)}return{items:a.sort((t,e)=>t.exceptionType.localeCompare(e.exceptionType)),requestsUrl:e}}(t.exceptionsChartData,e.requestsUrl),exceptionTypeDisplayText:function(t){var e=t.split(".");return e.length<=2?t:e[0]+".."+e[e.length-1]}};t.applicationData.hosts&&(a.hosts=t.applicationData.hosts.items.sort((t,e)=>e.count-t.count)),t.httpReferrers&&0<t.httpReferrers.items.length&&new k({$container:g("#content").find("[data-httpReferrers-table-container]"),applicationId:e.applicationId,localItems:t.httpReferrers.items.map(t=>(t.applicationId=e.applicationId,t))}).searchTable.reload(),g("#content").find("[data-binding-container]").each(function(){v.applyBindings(a,this)});for(var n=t.httpTrafficChartData,o=g("#content").find("[data-http-traffic-chart]"),r=[],i=0,s=n.intervals.length;i<s;i++)r.push(n.intervals[i].from);o=o[0].getContext("2d"),new b(o,{type:"line",options:{onResize:function(t,e){e=e.width;const n=600<=e?2:480<=e?3:4;t.options.scales.x.ticks.callback=function(t,e,a){return(t+1)%n!=0?null:(t=this.getLabelForValue(t),C.DateTime.fromISO(t).toFormat("dd-MM"))}},responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{intersect:!1,mode:"index",callbacks:{title:function(t,e){t=t[0].label;return C.DateTime.fromISO(t).toFormat("dd MMMM")}}},verticalLiner:{lineWidth:3,color:"#282c34"}},scales:{y:{beginAtZero:!0,position:"right"},x:{ticks:{}}},elements:{point:{radius:0},line:{borderWidth:2}}},plugins:[S.verticalLinerPlugin],data:{labels:r,datasets:[{label:"Server errors",fill:!0,backgroundColor:S.statusCode500BackgroundGradient(o,100),borderColor:S.statusCode500BorderColor(),data:n.intervals.map(function(a){let n=0;for(let t=0,e=a.value.length;t<e;t++)500<=a.value[t].httpStatusCode&&(n+=a.value[t].count);return n})},{label:"Client errors",fill:!0,backgroundColor:S.statusCode400BackgroundGradient(o,100),borderColor:S.statusCode400BorderColor(),data:n.intervals.map(function(a){let n=0;for(let t=0,e=a.value.length;t<e;t++)400<=a.value[t].httpStatusCode&&a.value[t].httpStatusCode<500&&(n+=a.value[t].count);return n})},{label:"Success",fill:!0,backgroundColor:S.statusCode200BackgroundGradient(o,100),borderColor:S.statusCode200BorderColor(),data:n.intervals.map(function(a){let n=0;for(let t=0,e=a.value.length;t<e;t++)a.value[t].httpStatusCode<400&&(n+=a.value[t].count);return n})}]}});for(var l=t.exceptionsChartData,c=g("#content").find("[data-exceptions-chart]"),u=[],d=0,p=l.intervals.length;d<p;d++)u.push(l.intervals[d].from);c=c[0].getContext("2d"),new b(c,{type:"line",options:{onResize:function(t,e){e=e.width;const n=600<=e?2:480<=e?3:4;t.options.scales.x.ticks.callback=function(t,e,a){return(t+1)%n!=0?null:(t=this.getLabelForValue(t),C.DateTime.fromISO(t).toFormat("dd-MM"))}},responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{intersect:!1,mode:"index",callbacks:{title:function(t,e){t=t[0].label;return C.DateTime.fromISO(t).toFormat("dd MMMM")}}},verticalLiner:{lineWidth:3,color:"#282c34"}},scales:{y:{beginAtZero:!0,position:"right"},x:{ticks:{}}},elements:{point:{radius:0},line:{borderWidth:2}}},plugins:[S.verticalLinerPlugin],data:{labels:u,datasets:[{label:"Exceptions",fill:!0,backgroundColor:S.statusCode500BackgroundGradient(c,100),borderColor:S.statusCode500BorderColor(),data:l.intervals.map(function(t){return t.value.reduce((t,e)=>(t.count||0)+(e.count||0),0)})}]}}),t.hasUsers&&(c=new x({$container:g("#content").find("[data-users-table-container]"),applicationId:e.applicationId,templateName:"tables-users-applicationDashboardListGroup",itemsPerPage:8}),t=new T("LastSeen","desc"),c.searchTable.applySort(t)),g("#content").find("[data-time-ago]").each(function(){h.timeAgoTag(g(this))})}}});