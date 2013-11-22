angular.module('dx7-proto',['dx7-operator-proto']).
    factory("Dx7", function(Operator) {

            // Define the constructor function.
            function Dx7() {
                this.op1 = new Operator(1);
                this.op2 = new Operator(2);
                this.op3 = new Operator(3);
                this.op4 = new Operator(4);
                this.op5 = new Operator(5);
                this.op6 = new Operator(6);
            }


            // Define the "instance" methods using the prototype
            // and standard prototypal inheritance.
            Dx7.prototype = {

                getOp1: function() {
                    return this.op1;
                },
                getOp2: function() {
                    return this.op2;
                },
                getOp3: function() {
                    return this.op3;
                },
                getOp4: function() {
                    return this.op4;
                },
                getOp5: function() {
                    return this.op5;
                },
                getOp6: function() {
                    return this.op6;
                }
            };

            return( Dx7 );

        }


    );