'use strict';

angular.module('dx7-sysex',[]).
    constant('OP1', {
        MODE: 0x7a,
        FR_COARSE: 0x7b,
        FR_FINE: 0x7c,
        DETUNE: 0x7d,
        RATE_1: 0x69,
        RATE_2: 0x6a,
        RATE_3: 0x6b,
        RATE_4: 0x6c,
        LEVEL_1: 0x6d,
        LEVEL_2: 0x6e,
        LEVEL_3: 0x6f,
        LEVEL_4: 0x70,
        BREAKPOINT: 0x71,
        DEPTH_LEFT: 0x72,
        DEPTH_RIGHT: 0x73,
        CURVE_LEFT: 0x74,
        CURVE_RIGHT: 0x75,
        KRS: 0x76,
        AMS: 0x77,
        VEL_SENS: 0x78,
        OUTPUT_LEVEL: 0x79
    }).
    constant('OP2', {
        MODE: 0x65
    });