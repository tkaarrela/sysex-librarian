'use strict';

angular.module('sysexLibrarianApp')
  .controller('MainCtrl', function ($scope) {
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
        $scope.selectedMidiOutDevice.send(  [ 0xf0, 0x43, 0x10, 0x00, 0x79, $scope.op1Volume, 0xf7 ] );
        
    }
    
    $scope.setOp1Detune = function(){
        $scope.selectedMidiOutDevice.send(  [ 0xf0, 0x43, 0x10, 0x00, 0x7d, $scope.op1Detune , 0xf7 ] );
    }
    
    $scope.setOp1Rate1 = function(){
        $scope.selectedMidiOutDevice.send(  [ 0xF0,  0x43,  0x10,  0x00,  0x69, $scope.op1Rate1, 0xF7 ] );
    }
    
    $scope.setOp1Rate2 = function(){
        $scope.selectedMidiOutDevice.send(  [ 0xF0,  0x43,  0x10,  0x00,  0x6A, $scope.op1Rate2, 0xF7 ] );
    }
    
    $scope.setOp1Rate3 = function(){
        $scope.selectedMidiOutDevice.send(  [ 0xF0,  0x43,  0x10,  0x00,  0x6B, $scope.op1Rate3, 0xF7 ] );
    }
    
    $scope.setOp1Rate4 = function(){
        $scope.selectedMidiOutDevice.send(  [ 0xF0,  0x43,  0x10,  0x00,  0x6C, $scope.op1Rate4, 0xF7 ] );
    }
    
    $scope.setOp1Freq = function(){
        $scope.selectedMidiOutDevice.send(  [ 0xf0, 0x43, 0x10, 0x00, 0x7B, $scope.op1Freq , 0xf7 ] );
    }
    
    
    
    
    //init
    $scope.getMidiDevices();
      
  });
