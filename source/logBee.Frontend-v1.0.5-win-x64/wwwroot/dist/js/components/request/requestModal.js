define(["jquery","js/components/Modal","js/components/request/RequestContent"],function(o,d,i){function n(e){e=o.extend(!0,{},s,e);var n=new d,t=(n.events.on(d.EVENT_TYPES.build,function(n){var e=new i({domId:n.instance.domId});n.instance._content=e}),n.events.on(d.EVENT_TYPES.opened,function(n){e.onOpened.apply(n.instance)}),n.events.on(d.EVENT_TYPES.destroy,function(n){n.instance._content&&n.instance._content.destroy()}),e.requestId.length?"/Components/RequestModal":e.exceptionId.length?"/Components/ExceptionRequestModal":e.endpointId.length?"/Components/EndpointRequestModal":"");n.load(t,{applicationId:e.applicationId,requestId:e.requestId,exceptionId:e.exceptionId,endpointId:e.endpointId})}const s={applicationId:"",requestId:"",exceptionId:"",endpointId:"",onOpened:function(){}};return new function(){this.open=n}});