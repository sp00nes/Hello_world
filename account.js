function myclick(){
    var pass = prompt("Password:", "");
    if (pass == "1234") {
        window.open("spiderman.html", '_blank');
    } else {
        alert("wrong password");
    }
}