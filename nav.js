var a=0
function myFunction() {
    if (a==0){
        for (let i=1;i<4;i++){
            document.getElementById(i).style.display = "";
        }
        a++
    }
    else{
        for (let i=1;i<4;i++){
            document.getElementById(i).style.display = "none";
        }
        a--
    }
}
