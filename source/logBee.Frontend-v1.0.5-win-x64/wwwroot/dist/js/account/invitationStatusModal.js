define(["logBee","jquery","js/components/Modal","js/components/CountdownButton"],function(e,i,t,s){function n(n){n=i.extend(!0,{},a,n);const o=new t;o.events.on(t.EVENT_TYPES.build,function(n){window[d]=n.instance;var n=n.instance.getElement(),t=n.find("#invitation-result");t.length&&(t=e.htmlDecode(t.html()),t=JSON.parse(t),e.bindForm("resend-invitation-form"),0<t.resendResetInSeconds)&&(o._countdownButton=new s({$button:n.find("button[type=submit]"),seconds:t.resendResetInSeconds})),n.find("[data-time-ago]").each(function(){e.timeAgoTag(i(this))})}),o.events.on(t.EVENT_TYPES.destroy,function(n){delete window[d],n.instance._countdownButton&&n.instance._countdownButton.destroy()}),o.load("/Account/InvitationStatus",{organizationId:n.organizationId,invitationId:n.invitationId})}const d="invitationStatusModal",a={organizationId:"",invitationId:""};window.onResendInvitationComplete=function(n,t){e.toggleFormLoading(this,!1),"success"!==t&&e.showXhrErrorToast(n),"success"===t&&(n=window[d])&&(n._countdownButton&&n._countdownButton.destroy(),n.getElement().find("#resend-invitation-form").parent().html('<div><button type="button" class="btn btn-sm btn-primary disabled" disabled>The invitation has been resent</button></div>'))};return new function(){this.open=n}});