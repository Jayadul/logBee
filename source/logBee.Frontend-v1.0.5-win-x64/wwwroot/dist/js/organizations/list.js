define(["logBee","jquery","ko","chart-js","luxon"],function(a,n,o,l,c){function r(t,e){const a=t.attr("data-id");if((e=e.organizations.find(t=>t.organization.organizationId===a)).hasData){for(var t=t.find("[data-usage-chart]"),n=e.usageChartData,e=t[0],o=[],r=0,i=n.intervals.length;r<i;r++)o.push(n.intervals[r].from);e=e.getContext("2d"),new l(e,{type:"bar",options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{intersect:!1,mode:"index",callbacks:{title:function(t,e){t=t[0].label;return""+c.DateTime.fromISO(t).toFormat("MMMM yyyy")}}}},scales:{y:{beginAtZero:!0},x:{ticks:{callback:function(t){t=this.getLabelForValue(t);return c.DateTime.fromISO(t).toFormat("MMM yy")}}}},elements:{point:{radius:0},line:{borderWidth:2}}},data:{labels:o,datasets:[{label:"Created",fill:!0,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgb(54, 162, 235)",data:n.intervals.map(function(t){return t.value.requestLogs.createdCount})},{label:"Throttled",fill:!0,backgroundColor:"rgb(253, 220, 142)",borderColor:"rgb(253, 220, 142)",data:n.intervals.map(function(t){return t.value.requestLogs.throttledCount})},{label:"Plan limit exceeded",fill:!0,backgroundColor:"rgb(255, 143, 0)",borderColor:"rgb(255, 143, 0)",data:n.intervals.map(function(t){return t.value.requestLogs.limitExceededCount})}]}})}}return{init:function(){var t=a.htmlDecode(n("#page-model").html());const e=JSON.parse(t);t={organizations:e.organizations};o.applyBindings(t,n("#content")[0]),n("#content").find("[data-time-ago]").each(function(){a.timeAgoTag(n(this))}),n("#content").find("[data-organization]").each(function(){r(n(this),e)}),n("#content").on("click","[data-create-application-button]",function(t){t.preventDefault(),require(["js/account/createApplicationModal"],function(t){t.open({})})})}}});