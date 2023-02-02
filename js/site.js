document.getElementById("navbtn").addEventListener("click", 
function(){
    const menu= document.getElementById("menu");
    if(menu.style.width === '0px'){
       
        menu.style.width = "100%";
        menu.style.height = "fit-content";
        

    }
    else{
        
        menu.style.width = 0 ;
        menu.style.height = 0;
        
    }
}
);