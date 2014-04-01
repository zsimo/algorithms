/**
 * @author simo
 */


(function (global) {

    "use strict";

    // last in - first out
    var Stack = (function () {

        var
            START_ROW = 0,


            push = function (startCell, stopCell) {


            },



            // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            // CONSTRUCTOR
            // /////////////////////////////////////////////////
            automaticInit = (function () {

                console.log("stack automatic init");

            }()),

            last = "last";


        // define public interface
        return {
            last : last
        };

    });

    global.Stack = Stack;

}(this));
