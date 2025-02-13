document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "yay.html";
});

document.getElementById("noBtn").addEventListener("click", function() {
    let popup = document.getElementById("popup");
    popup.style.display = "flex"; // Show the popup
});

document.getElementById("popup").addEventListener("click", function() {
    this.style.display = "none"; // Hide the popup when clicked
    alert("Are you sure? 😢"); // Show alert each time
});
