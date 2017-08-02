 var a,
     h;

 function getTriangleArea(a, h) {
 if ( (a<=0) || (h<=0) )   {console.log("Nieprawidłowe dane")
} 

  return a*h/2;
}
	
var triAngle1Area = getTriangleArea (10,5);
console.log( getTriangleArea(10,6) ) 

var triAngle2Area = getTriangleArea (8,2);
console.log( getTriangleArea(8,2) );

var triAngle3Area = getTriangleArea (20,8);
console.log( getTriangleArea(20,8) );

