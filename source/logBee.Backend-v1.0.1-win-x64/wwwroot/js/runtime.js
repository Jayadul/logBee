function formatDateTimeIntervals() {
    var nodes = document.querySelectorAll('[data-datetimeinterval]');
    for (var i = 0, len = nodes.length; i < len; i++) {
        var node = nodes[i];
        var datetime = node.getAttribute("datetime");
        var date = new Date(datetime);

        var formatted = Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).format(date);

        node.textContent = formatted;
    }
}

function init() {
    try {
        formatDateTimeIntervals();
    } catch (ex) {
        console.warn(ex);
    }
}

init();