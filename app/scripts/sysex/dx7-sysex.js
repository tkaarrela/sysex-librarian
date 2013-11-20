'use strict';

angular.module('dx7-sysex',[]).
    constant('DX7', {
        MANUFACTURER: 0x43,
        OP1: {
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
        },
        OP2: {
            MODE: 0x65,
            FR_COARSE: 0x66,
            FR_FINE: 0x67,
            DETUNE: 0x68,
            RATE_1: 0x54,
            RATE_2: 0x55,
            RATE_3: 0x56,
            RATE_4: 0x57,
            LEVEL_1: 0x58,
            LEVEL_2: 0x59,
            LEVEL_3: 0x5A,
            LEVEL_4: 0x5B,
            BREAKPOINT: 0x5C,
            DEPTH_LEFT: 0x5D,
            DEPTH_RIGHT: 0x5E,
            CURVE_LEFT: 0x5F,
            CURVE_RIGHT: 0x60,
            KRS: 0x61,
            AMS: 0x62,
            VEL_SENS: 0x63,
            OUTPUT_LEVEL: 0x64
        }
    });