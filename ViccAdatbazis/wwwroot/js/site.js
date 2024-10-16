// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function lajkolas(id) {
    var ajaxKeres = new XMLHttpRequest();

    ajaxKeres.withCredentials = true;

    ajaxKeres.addEventListener("readystatechange", function(){
        if (this.readyState === 4) {
            console.log(this.responseText);
            document.getElementById("tetszikDb-"+id).innerHTML = this.responseText;
        }
    })

    ajaxKeres.open("PATCH", "https://localhost:7193/api/NapiViccek/" + id + "/like")
    ajaxKeres.send();
}

function dislajkolas(id) {
    var ajaxKeres = new XMLHttpRequest();

    ajaxKeres.withCredentials = true;

    ajaxKeres.addEventListener("readystatechange", function(){
        if (this.readyState === 4) {
            console.log(this.responseText);
            document.getElementById("nemTetszikDb-"+id).innerHTML = this.responseText;
        }
    })

    ajaxKeres.open("PATCH", "https://localhost:7193/api/NapiViccek/" + id + "/dislike")
    ajaxKeres.send();
}