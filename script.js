const textarea = document.createElement("textarea");
textarea.style.position = "fixed"; // Position it on the page without scrolling
textarea.style.top = "0px"; // Top-left corner
textarea.style.left = "0px";
textarea.style.width = "200px";
textarea.style.height = "100px";
textarea.placeholder = "Enter text here...";
document.body.appendChild(textarea); // Add the textarea to the page
