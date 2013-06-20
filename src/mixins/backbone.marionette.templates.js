﻿"use strict";

define(['templates'], function (Templates) {
    return function () {
        this.get = function (templateId) {

            var templateKey = templateId.toLowerCase();

            var templateFunction = Templates[templateKey];

            if (!templateFunction) {
                throw 'couldn\'t find pre-compiled template ' + templateKey;
            }

            return function (data) {

                try {
                    return templateFunction(data);
                }
                catch (error) {
                    console.error('template render failed for ' + templateKey + ' ' + error);
                    console.error(data);
                    throw error;
                }
            };
        };
    };
});


