var a=[];
var i=0;
while(i<16){
    var temp=Math.floor(Math.random()*100+1);
    find=nonripetere(a,temp);
    if(find==true){
        a.push(temp);
        i++;
    }
}
console.log(a);

var b=[];
i=0;
var cont=0;
var boom=false;
while(i<(100-16) && boom==false){
    var temp= prompt("inserisci un nuovo numero")
    //quando si va ad inserire più volte lo stesso numero ti ferma solo la prima volta e le altre ti lascia passare
    do{
        find=nonripetere(b,temp);
        if(find==false){
            temp=prompt("devi inserire un numero nuovo");
        }
    }while(find==false && (temp>100 || temp<1));
    
    find=nonripetere(a,temp);
    if(find==true){
        b.push(temp);
        cont++;
    }else{
        boom=true;
    }
}
console.log(b);
console.log(cont);



function nonripetere(x,y){
    for(var h=0;h<x.length;h++){
        if(x[h]==y){
            return false;
        }
    }
    return true;
}