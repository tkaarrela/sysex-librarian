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

                getFrequencyMode: function(){
                    return this.frequencyMode;
                },

                getRate1: function(){
                    return this.rate1;
                },

                getRate2: function(){
                    return this.rate2;
                },

                getRate3: function(){
                    return this.rate3;
                },

                getRate4: function(){
                    return this.rate4;
                },

                getLevel1: function(){
                    return this.level1;
                },

                getLevel2: function(){
                    return this.level2;
                },

                getLevel3: function(){
                    return this.level3;
                },

                getLevel4: function(){
                    return this.level4;
                },

                getFrCoarse: function(){
                    return this.frCoarse;
                },

                getDetune: function(){
                    return this.detune;
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