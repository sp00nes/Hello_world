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
}a

function print() {
    let pages = prompt("How many PAIRS of articles would you like to see?", "");
    Number(pages)
    if (isFinite(pages) && pages <= 10 && pages > 0){
        for (let i = 0; i < pages; i++) {
            document.getElementById('output1').innerHTML += "<div class ='group'><div class='text_left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Porta nibh venenatis cras sed felis eget velit aliquet. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Euismod nisi porta lorem mollis aliquam. Suspendisse sed nisi lacus sed. Et egestas quis ipsum suspendisse ultrices gravida. Pulvinar elementum integer enim neque. Tellus pellentesque eu tincidunt tortor aliquam. Donec ac odio tempor orci dapibus ultrices in iaculis.</div><div class='images_right'><img src='https://via.placeholder.com/800x400' alt='Med placeholder image' /></div></div><div class='group'><div class='images_left'><img src='https://via.placeholder.com/800x400' alt='Med placeholder image' /></div><div class='text_right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Porta nibh venenatis cras sed felis eget velit aliquet. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Euismod nisi porta lorem mollis aliquam. Suspendisse sed nisi lacus sed. Et egestas quis ipsum suspendisse ultrices gravida. Pulvinar elementum integer enim neque. Tellus pellentesque eu tincidunt tortor aliquam. Donec ac odio tempor orci dapibus ultrices in iaculis.</div></div>"
        }
    } else {
        alert("you must type a real number that is less then 10");
    }
    
}

//function myclick() {
   // if (confirm("are you sure you want to open?")) {
   //     window.open("parterURL.com", '_blank');
   // } else {
   //     alert("good choice")
   // }
//}