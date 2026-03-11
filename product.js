var a=document.getElementById("search")
var b=document.getElementById("one")
var c=b.querySelectorAll("div")

a.addEventListener("keyup",function(){
    var d=event.target.value.toUpperCase()
    for (i=0;i<c.length;i=i+1){
        var e=c[i].querySelector("h1").textContent

        if (e.toUpperCase().indexOf(d)<0){
            c[i].style.display='none'
        }
        else{
            c[i].style.display=''
        }
    }
})