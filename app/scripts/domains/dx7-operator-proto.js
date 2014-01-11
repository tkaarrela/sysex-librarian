angular.module('dx7-operator-proto',[]).
    factory("Operator", function() {

            // Define the constructor function.
            function Operator(id) {
                this.id = id;
                this.power = true;
                this.frequencyMode = true;
                this.volume = 0;
                this.rate1 = 0;
                this.rate2 = 0;
                this.rate3 = 0;
                this.rate4 = 0;
                this.level1 = 0;
                this.level2 = 0;
                this.level3 = 0;
                this.level4 = 0;
                this.detune = 0;
                this.frCoarse = 0;
            }


            // Define the "instance" methods using the prototype
            // and standard prototypal inheritance.
            Operator.prototype = {

                getId: function() {
                    return this.id;
                },

                getPower: function() {
                    return this.power;
                },
                
                setPower: function(value) {
                    this.power = value;
                },

                getFrequencyMode: function(){
                    return this.frequencyMode;
                },
                
                getRate1: function(){
                    return this.rate1;
                },
                
                setRate1: function(value){
                    this.rate1 = value;
                },

                getRate2: function(){
                    return this.rate2;
                },
                
                setRate2: function(value){
                    this.rate2 = value;
                },

                getRate3: function(){
                    return this.rate3;
                },
                
                setRate3: function(value){
                    this.rate3 = value;
                },

                getRate4: function(){
                    return this.rate4;
                },
                
                setRate4: function(value){
                    this.rate4 = value;
                },

                getLevel1: function(){
                    return this.level1;
                },
                
                setLevel1: function(value){
                    this.level1 = value;
                },

                getLevel2: function(){
                    return this.level2;
                },
                
                setLevel2: function(value){
                    this.level2 = value;
                },

                getLevel3: function(){
                    return this.level3;
                },
                
                setLevel3: function(value){
                    this.level3 = value;
                },

                getLevel4: function(){
                    return this.level4;
                },
                
                setLevel4: function(value){
                    this.level4 = value;
                },

                getFrCoarse: function(){
                    return this.frCoarse;
                },
                
                setFrCoarse: function(value){
                    this.frCoarse = value;
                },

                getDetune: function(){
                    return this.detune;
                },
                
                setDetune: function(value){
                    this.detune = value;
                },

                getVolume: function(){
                    return this.volume;
                },
                
                setVolume: function(value){
                    this.volume = value;
                }

            };


            // Define the "class" / "static" methods. These are
            // utility methods on the class itself; they do not
            // have access to the "this" reference.
            /*
            Operator.fromFullName = function( fullName ) {

                var parts = trim( fullName || "" ).split( /\s+/gi );

                return(
                    new Friend(
                        parts[ 0 ],
                        parts.splice( 0, 1 ) && parts.join( " " )
                    )
                    );

            };*/


            // Return constructor - this is what defines the actual
            // injectable in the DI framework.
            return( Operator );

        }
    );