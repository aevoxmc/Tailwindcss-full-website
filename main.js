function nav(){
    var a = document.querySelector("#nav");
    a.classList.replace("hidden", "block");
}
function closeNav(){
    var b = document.querySelector("#nav");
    b.classList.replace("block","hidden")
}

document.getElementById("div1").append("<div class='text-3xl font-bold text-blue-400'>");
document.getElementById("content1").append(" " + " " + " " + " " +"Hello");
document.getElementById("divend1").append("</div>")