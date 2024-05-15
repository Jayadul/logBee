define(["logBee","js/templates","jquery","ko","chart-js","luxon","js/formatFileContent"],function(p,s,d,g,u,m,h){window.onUpdateApplicationPropertiesComplete=function(t,e){p.toggleFormLoading(this,!1),"success"!==e&&p.showXhrErrorToast(t),"success"===e&&p.showToast({body:"Properties have been updated",type:"success"})};return{init:function(e){p.bindForm("application-properties-form");var t=p.htmlDecode(d("#page-model").html()),t=JSON.parse(t),a=s.applicationKeys.appsettings_json({organizationId:t.application.organizationId,applicationId:t.application.applicationId,logBeeBackendUri:e.logBeeBackendUri}),o=s.applicationKeys.web_config({organizationId:t.application.organizationId,applicationId:t.application.applicationId,logBeeBackendUri:e.logBeeBackendUri});const n={applicationData:t.applicationData,appsettings_json_html:g.observable(a.html),web_config_html:g.observable(o.html)};if(g.applyBindings(n,d("#content")[0]),h.highlightContent(p.htmlDecode(a.html)).then(t=>{t&&n.appsettings_json_html(t)}),h.highlightContent(p.htmlDecode(o.html)).then(t=>{t&&n.web_config_html(t)}),t.applicationUsageChartData){for(var i=t.applicationUsageChartData,l=[],r=0,c=i.intervals.length;r<c;r++)l.push(i.intervals[r].from);a=document.getElementById("applicationUsageChart").getContext("2d");new u(a,{type:"bar",options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{intersect:!1,mode:"index",callbacks:{title:function(t,e){t=t[0].label;return""+m.DateTime.fromISO(t).toFormat("MMMM yyyy")}}}},scales:{y:{beginAtZero:!0},x:{ticks:{callback:function(t){t=this.getLabelForValue(t);return m.DateTime.fromISO(t).toFormat("MMM yy")}}}},elements:{point:{radius:0},line:{borderWidth:2}}},data:{labels:l,datasets:[{label:"Created",fill:!0,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgb(54, 162, 235)",data:i.intervals.map(function(t){return t.value.requestLogs.createdCount})},{label:"Throttled",fill:!0,backgroundColor:"rgb(253, 220, 142)",borderColor:"rgb(253, 220, 142)",data:i.intervals.map(function(t){return t.value.requestLogs.throttledCount})},{label:"Plan limit exceeded",fill:!0,backgroundColor:"rgb(255, 143, 0)",borderColor:"rgb(255, 143, 0)",data:i.intervals.map(function(t){return t.value.requestLogs.limitExceededCount})}]}})}d("#content").find("[data-time-ago]").each(function(){p.timeAgoTag(d(this))}),d("#content").on("click","[data-delete-application]",function(t){t.preventDefault(),require(["js/account/deleteApplicationModal"],function(t){t.open({applicationId:e.applicationId})})}),d("#content").on("click","[data-delete-application-data]",function(t){t.preventDefault(),require(["js/account/deleteApplicationDataModal"],function(t){t.open({applicationId:e.applicationId})})}),d("#Name").focus()}}});