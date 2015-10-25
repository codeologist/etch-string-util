
"use strict";

var assert = require('assert');
var StringUtil = require("../index");

describe('StringUtil', function(){

    it("toCamelCase()", function( done ){

        var str = new StringUtil( "this-is-text");

        assert.equal( str.toCamelCase(), "thisIsText");

        done();
    });

    it("normalizeText()", function( done ){

        var str = new StringUtil( "   this is some text   \n");

        assert.equal( str.normalizeText(), "this is some text");

        done();
    });


    it("should parse a property string", function( done ) {

        assert.deepEqual( new StringUtil("").parseCss(), {} );
        assert.equal( new StringUtil("color:blue").parseCss().color, "blue" );
        assert.equal( new StringUtil("background-color:red").parseCss().backgroundColor, "red" );
        assert.equal( new StringUtil("border-width-left:0").parseCss().borderWidthLeft, 0 );
        done();
    });

    it("should parse a set of css props", function( done ) {

        var css = new StringUtil("color:blue;top:10;left:20;display:none").parseCss();
        assert.equal( css.color, "blue" );
        assert.equal( css.top, "10" );
        assert.equal( css.left, "20" );
        assert.equal( css.display, "none" );

        done();
    });

});