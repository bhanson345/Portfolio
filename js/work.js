// Show and hide div's on click


function togglediv(id) {
    document.querySelectorAll(".skills").forEach(function (div) {
        if (div.id == id) {
            // Toggle specified Div
            div.style.display = div.style.display == "none" ? "block" : "none";
        } else {
            // Hide other Div's
            div.style.display = "none";
        }
    });
}