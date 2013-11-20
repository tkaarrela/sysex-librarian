'use strict';

angular.module('common-sysex',[]).
    constant('SYSEX', {
        START: 0xf0,
        END: 0xf7
    });