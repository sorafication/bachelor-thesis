(function (global) {
    var tnt_response = '';
    document.addEventListener('at-request-succeeded', function (e) {
        var counter = 0,
            COUNTER_MAX = 20,
            TIMEOUT_INTERVAL = 200;

        tnt_response = (e && e.detail ? e.detail : null);
        if (e.detail.analyticsDetails !== undefined) {
            function checkJSLL() {
                var tt_activityCount,
                    i;

                counter += 1;
                if (typeof global.awa === 'object' && global.awa.isInitialized === true) {
                    //ContentUpdate Event with tnta
                    awa.ct.captureContentUpdate({
                        actionType: "A",
                        behavior: "12",
                        content: JSON.stringify({}),
                        pageTags: {
                            tnta: (tnt_response && tnt_response.analyticsDetails[0]
                                ? tnt_response.analyticsDetails[0].payload.tnta
                                : '')
                        }
                    });

                    if (e.detail.responseTokens !== undefined) {
                        tt_activityCount = e.detail.responseTokens.length;

                        //ContentUpdate Event with Target Friendly names
                        for (i = 0; i < tt_activityCount; i += 1) {
                            awa.ct.captureContentUpdate({
                                actionType: 'A',
                                behavior: '12',
                                content: JSON.stringify({}),
                                pageTags: {
                                    at_activity_name: (tnt_response && tnt_response.responseTokens[i]
                                        ? tnt_response.responseTokens[i]["activity.name"]
                                        : ''),

                                    at_exp_name: (tnt_response && tnt_response.responseTokens[i]
                                        ? tnt_response.responseTokens[i]["experience.name"]
                                        : ''),

                                    at_activity_id: (tnt_response && tnt_response.responseTokens[i]
                                        ? tnt_response.responseTokens[i]["activity.id"]
                                        : ''),

                                    at_exp_id: (tnt_response && tnt_response.responseTokens[i]
                                        ? tnt_response.responseTokens[i]["experience.id"]
                                        : '')
                                }
                            });
                        }
                    }
                } else if (counter <= COUNTER_MAX) {
                    setTimeout(checkJSLL, TIMEOUT_INTERVAL);
                }
            };
            checkJSLL();
        }
    });
})(window);
