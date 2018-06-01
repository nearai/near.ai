const logId = '[inspeclet]';

const Inspectlet = {
    initialize: (wid, options) => {
        if (!wid) {
            console.warn(logId, 'wid is required'); // eslint-disable-line no-console
            return;
        }

        /* eslint-disable */
        window.__insp = window.__insp || [];

        window.__insp.push(['wid', wid]);

        if (options && options.debug) {
            window.__insp.push(['debug', true]);
        }

        (function () {
            function ldinsp() {
                if (typeof window.__inspld != "undefined") return;
                window.__inspld = 1;
                var insp = document.createElement('script');
                insp.type = 'text/javascript';
                insp.async = true;
                insp.id = "inspsync";
                insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js';
                var head = document.getElementsByTagName('head')[0];
                head.appendChild(insp);
            };
            setTimeout(ldinsp, 500);
            document.readyState != "complete" ? (window.attachEvent ? window.attachEvent('onload', ldinsp) : window.addEventListener('load', ldinsp, false)) : ldinsp();
        })();
        /* eslint-enable */
    },
};

export default Inspectlet;