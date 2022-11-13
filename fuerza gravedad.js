function fuer(){
    var m=5.98*Math.pow(10,28);
    var m1=2*Math.pow(10,30);
    var m2=7.36*Math.pow(10,22);
    var r1=149.6*Math.pow(10,9);
    var r2=384.4*Math.pow(10,6);
    var G=6.67*Math.pow(10,-11);
    var F1=(G*m*m1)/Math.pow(r1,2);
    var F2=(G*m*m2)/Math.pow(r2,2);
    document.getElementById('fuerza1').innerHTML=F1
    document.getElementById('fuerza2').innerHTML=F2
}