'use strict';

angular.module('sysexLibrarianApp')
  .controller('Dx7Ctrl', function ($scope, SYSEX, DX7, MidiService) {
    $scope.op1Freq = 0;
    $scope.op1Rate1 = 0;
    $scope.op1Rate2 = 0;
    $scope.op1Rate3 = 0;
    $scope.op1Rate4 = 0;
    $scope.op1Detune = 0;
    $scope.op1Volume = 0;
      
    $scope.midiInDevices = undefined;
    $scope.midiOutDevices = undefined;
    
    $scope.selecteMidiInDevice = undefined;
    $scope.selectedMidiOutDevice = undefined;
      
    $scope.logMessage = 'Log...';
      
    $scope.sysex = undefined;
      
    $scope.convertToHex = function(valueToConvert){
    
        console.log("convert: " + valueToConvert );    
        
        var hex = parseInt(valueToConvert,16)
        
        
        console.log("converted: " + hex);
        
        return hex;
    
    }
      
    $scope.setMidiInDevices = function(midi) {
        $scope.midiInDevices = midi.inputs();
        
        $scope.logMessage += $scope.midiInDevices.length + " inputs: \n";
        
        for (var i=0;i<$scope.midiInDevices.length;i++){
            $scope.logMessage += ": " + $scope.midiInDevices[i].name + "\n";
        }
    };
      
    $scope.setMidiOutDevices = function (midi) {
        
        $scope.midiOutDevices = midi.outputs();
        
        $scope.logMessage += $scope.midiOutDevices.length + " outputs:\n";
        for (var i=0;i<$scope.midiOutDevices.length;i++){
            $scope.logMessage += i + ": " + $scope.midiOutDevices[i].name + "\n";
        }
    };
      
    $scope.getMidiDevices = function () {
        navigator.requestMIDIAccess().then($scope.success, $scope.failure);
    };
      
    $scope.success = function (midiAccess) {
        
        $scope.logMessage = 'Midi can be fetched!';
        $scope.setMidiInDevices(midiAccess);
        $scope.setMidiOutDevices(midiAccess);
    
        $scope.$apply();
        
    };
      
    $scope.failure = function(error) {
        alert( "MIDI failed to start. Did you forget to install the Jazz plugin?");
    };
      
      
    
    $scope.sendSysex = function(){
        console.log("Sending: " + $scope.sysex);
        
        $scope.selectedMidiOutDevice.send(  [ 0x90, 0x45, 0x7f ] );        // If the first device is a Novation Launchpad, this will light it up!
        $scope.selectedMidiOutDevice.send( [ 0x80, 0x45, 0x7f ], window.performance.now() + 5000 );  // full velocity A4 note off in one second.
    }
    
    $scope.setOp1Volume = function(){
        var sysEx =  [ SYSEX.START, DX7.MANUFACTURER, 0x10, 0x00, DX7.OP1.OUTPUT_LEVEL, $scope.op1Volume, SYSEX.END ];
        MidiService.send($scope.selectedMidiOutDevice, sysEx);
    }
    
    $scope.setOp1Detune = function(){
        var sysEx = [ SYSEX.START, DX7.MANUFACTURER, 0x10, 0x00, DX7.OP1.DETUNE, $scope.op1Detune , SYSEX.END ]
        MidiService.send($scope.selectedMidiOutDevice, sysEx);
    }
    
    $scope.setOp1Rate1 = function(){
        var sysEx = [ SYSEX.START,  DX7.MANUFACTURER,  0x10,  0x00,  DX7.OP1.RATE_1, $scope.op1Rate1, SYSEX.END ]
        MidiService.send($scope.selectedMidiOutDevice, sysEx);
    }
    
    $scope.setOp1Rate2 = function(){
        var sysEx = [ SYSEX.START,  DX7.MANUFACTURER,  0x10,  0x00,  DX7.OP1.RATE_2, $scope.op1Rate2, SYSEX.END ]
        MidiService.send($scope.selectedMidiOutDevice, sysEx);
    }
    
    $scope.setOp1Rate3 = function(){
        var sysEx = [ SYSEX.START,  DX7.MANUFACTURER,  0x10,  0x00,  DX7.OP1.RATE_3, $scope.op1Rate3, SYSEX.END ]
        MidiService.send($scope.selectedMidiOutDevice, sysEx);
    }
    
    $scope.setOp1Rate4 = function(){
        var sysEx = [ SYSEX.START,  DX7.MANUFACTURER,  0x10,  0x00,  DX7.OP1.RATE_4, $scope.op1Rate4, SYSEX.END ]
        MidiService.send($scope.selectedMidiOutDevice, sysEx);
    }
    
    $scope.setOp1Freq = function(){
        var sysEx = [ SYSEX.START, DX7.MANUFACTURER, 0x10, 0x00, DX7.OP1.FR_COARSE, $scope.op1Freq , SYSEX.END ]
        MidiService.send($scope.selectedMidiOutDevice, sysEx);
    }

    //init
    $scope.getMidiDevices();
      
  });