define(["logBee","jquery","js/components/Modal","js/components/CountdownButton","js/formatFileContent"],function(t,o,i,n,l){const a="deleteAlertModal",d={organizationId:"",alertId:"",onComplete:function(){}};let s=function(){};window.onDeleteAlertComplete=function(n,e){t.toggleFormLoading(this,!1),"success"!==e&&t.showXhrErrorToast(n),"success"===e&&s.apply(this,[n.responseJSON,window[a]])};function e(n){(n=o.extend(!0,{},d,n)).onComplete&&(s=function(){n.onComplete.apply(this,arguments),s=function(){}});var e=new i;e.events.on(i.EVENT_TYPES.build,function(n){window[a]=n.instance,t.bindForm("delete-alert-form"),n.instance.getElement().find("[data-format-code]").each(function(){const e=o(this);var n=t.htmlDecode(e.html());l.highlightContent(n).then(n=>{n&&e.html(n)})})}),e.events.on(i.EVENT_TYPES.destroy,function(n){delete window[a]}),e.load("/Organizations/DeleteAlertModal",{organizationId:n.organizationId,alertId:n.alertId})}return new function(){this.open=e}});