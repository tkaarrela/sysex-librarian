'use strict';

angular.module('sysexLibrarianApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
    $scope.midiInDevices = undefined;
    $scope.midiOutDevices = undefined;
    
    $scope.selecteMidiInDevice = undefined;
    $scope.selectedMidiOutDevice = undefined;
      
    $scope.logMessage = 'Log...';
      
    $scope.sysex = undefined;
      
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
    }
    
    //init
    $scope.getMidiDevices();
      
  });
