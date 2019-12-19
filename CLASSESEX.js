'use strict';

class Polygon
{
    constructor(height , width)
    {
        this._name  = "polygon";
        this._height = height;
        this._width = width;

    }
    displayName()
    {
        console.log("the name is "+ this._name);
    }
    displayHistory()
    {
        console.log("polygon name is derived from Ploy that means many");
    }
}
var p = new Polygon(100,200);
p.displayName();
p.displayHistory();
console.log("this is about Polygon");