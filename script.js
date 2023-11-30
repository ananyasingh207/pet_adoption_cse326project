function picToggle(){
    let pup=document.getElementById('pup');

    if(pup.src.match('sadpup')){
        pup.src='happypup.jpg';
    } else{
        pup.src='sadpup.jpg'
    }
}