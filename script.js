function myclick() {
    var pass = prompt("Password:", "");
    if (pass == "1234") {
        window.open("spiderman.html", '_blank');
    } else {
        alert("wrong password");
    }
}

function title() {
    let id = prompt("Your name:", "");
    document.write("<h1 class='title'>Welcome ", id, " to the best website ever!!</h1>");
}


function close() {
    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "\o/";

        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    });
}