function CharsCtrl($scope) {
    $scope.getNumber = function(num) {
        var numbers = new Array(num);
        for( var i=1; i<num; i++ ) {
            numbers[i] = i;
        }
        return numbers;   
    }

    $scope.chars = [
        {
            "id"   : 7,
            "name" : "Alien 1",
            "lines": [
                {
                    "row" : 1,
                    "cells" : [ 
                        { 
                            "position": 0,
                            "value": 0,
                        },
                        { 
                            "position": 1,
                            "value": 0,
                        },                        
                        {
                            "position": 2,
                            "value": 0,
                        },
                        { 
                            "position": 3,
                            "value": 0,
                        },
                        { 
                            "position": 4,
                            "value": 0,
                        },
                        { 
                            "position": 5,
                            "value": 0,
                        },
                    ]
                },
                {
                    "row" : 2,
                    "cells" : [ 
                        { 
                            "position": 0,
                            "value": 0,
                        },
                        { 
                            "position": 1,
                            "value": 0,
                        },                        
                        {
                            "position": 2,
                            "value": 0,
                        },
                        { 
                            "position": 3,
                            "value": 0,
                        },
                        { 
                            "position": 4,
                            "value": 0,
                        },
                        { 
                            "position": 5,
                            "value": 0,
                        },
                    ]
                },
                {
                    "row" : 3,
                    "cells" : [ 
                        { 
                            "position": 0,
                            "value": 0,
                        },
                        { 
                            "position": 1,
                            "value": 0,
                        },                        
                        {
                            "position": 2,
                            "value": 0,
                        },
                        { 
                            "position": 3,
                            "value": 0,
                        },
                        { 
                            "position": 4,
                            "value": 0,
                        },
                        { 
                            "position": 5,
                            "value": 0,
                        },
                    ]
                },
                {
                    "row" : 4,
                    "cells" : [ 
                        { 
                            "position": 0,
                            "value": 0,
                        },
                        { 
                            "position": 1,
                            "value": 0,
                        },                        
                        {
                            "position": 2,
                            "value": 0,
                        },
                        { 
                            "position": 3,
                            "value": 0,
                        },
                        { 
                            "position": 4,
                            "value": 0,
                        },
                        { 
                            "position": 5,
                            "value": 0,
                        },
                    ]
                },
                {
                    "row" : 5,
                    "cells" : [ 
                        { 
                            "position": 0,
                            "value": 0,
                        },
                        { 
                            "position": 1,
                            "value": 0,
                        },                        
                        {
                            "position": 2,
                            "value": 0,
                        },
                        { 
                            "position": 3,
                            "value": 0,
                        },
                        { 
                            "position": 4,
                            "value": 0,
                        },
                        { 
                            "position": 5,
                            "value": 0,
                        },
                    ]
                },
                {
                    "row" : 6,
                    "cells" : [ 
                        { 
                            "position": 0,
                            "value": 0,
                        },
                        { 
                            "position": 1,
                            "value": 0,
                        },                        
                        {
                            "position": 2,
                            "value": 0,
                        },
                        { 
                            "position": 3,
                            "value": 0,
                        },
                        { 
                            "position": 4,
                            "value": 0,
                        },
                        { 
                            "position": 5,
                            "value": 0,
                        },
                    ]
                },
                {
                    "row" : 7,
                    "cells" : [ 
                        { 
                            "position": 0,
                            "value": 0,
                        },
                        { 
                            "position": 1,
                            "value": 0,
                        },                        
                        {
                            "position": 2,
                            "value": 0,
                        },
                        { 
                            "position": 3,
                            "value": 0,
                        },
                        { 
                            "position": 4,
                            "value": 0,
                        },
                        { 
                            "position": 5,
                            "value": 0,
                        },
                    ]
                },

            ]
        }
    ]; //chars

    $scope.toggleCell = function(charId, line, cellPos, cellVal)  {
        for( var i=0; i < $scope.chars.length; i++ ) {

            if( $scope.chars[i].id == charId ) {
                console.log( "CharsID: " + $scope.chars[i].id );

                for( var j=0; j < $scope.chars[i].lines.length; j++ ) {
                    if( $scope.chars[i].lines[j].row == line ) {
                        console.log( "Line: " + $scope.chars[i].lines[j].row );

                        for( var k=0; k < $scope.chars[i].lines[j].cells.length; k++ ) {
                            if( $scope.chars[i].lines[j].cells[k].position == cellPos ) {
                                console.log("Cell position: " + $scope.chars[i].lines[j].cells[k].position);
                                console.log("Cell value: " + $scope.chars[i].lines[j].cells[k].value);
                                if( $scope.chars[i].lines[j].cells[k].value == 0 ) {
                                    $scope.chars[i].lines[j].cells[k].value = 1;
                                } else {
                                    $scope.chars[i].lines[j].cells[k].value = 0;
                                }
                            }
                        }//for
                    }//if
                }//for
            }

        }//for
    }


}//CharsCtrl
