/**
* Copyright (c) 2017 Fernando Ariel Mateos <fernandoarielmateos@gmail.com>. All rights reserved. 
* Released under the MIT license
* https://opensource.org/licenses/MIT
**/

function AssertUnLike(value) {
    var _value = value;
    var _valueToAssert;

    function getExpectedResult() {
        return 'AssertUnLike: ' + _value + ' != ' + _valueToAssert;
    }

    this.assert = function(val) {
        _valueToAssert = val;
        return _value != _valueToAssert ? true : getExpectedResult();;
    }

}