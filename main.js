let flag=false;
let panel= document.getElementById("share-popup");
panel.style.display='none';

function change(){
    if(!flag){
        panel.style.display='grid';
        flag=true;   
    }
    else{
        panel.style.display='none';
        flag=false;
    }
}