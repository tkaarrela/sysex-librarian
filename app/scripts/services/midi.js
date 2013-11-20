'use strict';

angular.module('midi-services',[]).
    factory('MidiService', function() {
        return {
            send: function(midiDevice, midiData) {
                console.log("Send: " + midiData);
                midiDevice.send(midiData);
            }
        }
    });