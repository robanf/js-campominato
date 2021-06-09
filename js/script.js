var inizio=parseInt(prompt("seleziona difficolta 0=facile 1=normale 2=difficile"));
var maxnum;
switch(inizio){
    case 0:
        maxnum=100;
        break;
    case 1:
        maxnum=80;
        break;
    case 2:
        maxnum=50;
        break;
    default:
        maxnum=100;
        inizio=0;
}
console.log(maxnum);
var arrayprincipale=[];
var i=0;
while(i<16){
    var temp=Math.floor(Math.random()*maxnum+1);
    find=nonripetere(arrayprincipale,temp);
    if(find==true){
        arrayprincipale.push(temp);
        i++;
    }
}
console.log(arrayprincipale);

var arraysecondario=[];
i=0;
var cont=0;
var boom=false;
while(i<(maxnum-16) && boom==false){
    var temp= prompt("inserisci un nuovo numero")
    
    //quando si va ad inserire più volte lo stesso numero ti ferma solo la prima volta e le altre ti lascia passare
    do{
        find=nonripetere(arraysecondario,temp);
        if(find==false){
            temp=prompt("devi inserire un numero nuovo");
        }else if(temp>maxnum || temp<1){
            temp=prompt("devi inserire un numero nuovo");
            find=false;
        }
    }while(find==false);
    
    find=nonripetere(arrayprincipale,temp);
    if(find==true){
        arraysecondario.push(temp);
        cont++;
        i++;
    }else{
        boom=true;
    }
}
document.getElementById("mynumeri").innerHTML="i tuoi numeri inseriti sono="+arraysecondario;
document.getElementById("punteggio").innerHTML="il tuo punteggio è="+(cont*(1+inizio));

if(boom){
    document.getElementById("imgboom").className="show";
}



function nonripetere(x,y){
    for(var h=0;h<x.length;h++){
        if(x[h]==y){
            return false;
        }
    }
    return true;
}