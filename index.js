    "use strict";


    function StringUtil( string ){
        this.string = ""+string;
    }

    StringUtil.prototype.normalizeText = function() {
        var text =  this.string;
        text = text.trim();
        text = text.replace("\n","");
        text = text.replace("\t","");
        text = text.replace("\r","");
        return text;
    };

    StringUtil.prototype.toCamelCase = function(){

        var str = this.string.trim().split("-");
        var out=[str[0]];

        for ( var x=1, l = str.length; x<=l; x++ ){
            if ( !!str[x] ){
                out.push( str[x].charAt(0).toUpperCase() + str[x].substring(1) );
            }
        }

        return out.join("");

    };



    /**
     * Parses a string representation of a css property block.
     * if an empty param is passed and empty object is returned
     * if a non string is passed bad things will happen
     */
     StringUtil.prototype.parseCss = function(){

         var css={};

        if ( typeof this.string === "string"){
            var properties = this.string.split(";");

            properties.forEach( function( kvpair ){
                if ( kvpair ){
                    kvpair = kvpair.split(":");
                    var pname = new StringUtil(kvpair[0]);
                    css[ pname.toCamelCase() ] = ""+( kvpair[1] ).trim();

                }

            }, this );
        }
        return css;
    };



    module.exports = StringUtil;