function nightMode() {
    const container = document.querySelector("body");
    let navLinks = document.querySelectorAll(".nav-link");
  
    if (container.style.backgroundColor === "rgb(255, 255, 255)" || container.style.backgroundColor === "") {
      container.style.backgroundColor = "rgb(0, 0, 0)";
      
      // Loop through each nav link and change its background color
      navLinks.forEach(function (link) {
        link.style.backgroundColor = "rgb(0, 0, 0)";
        link.style.color = "#fff"; // Set text color to white for visibility
  
        // Add event listener to handle click events for night mode
        link.addEventListener("click", function () {
          console.log("Nav link clicked:", link.textContent);
          link.style.backgroundColor = "#fff";
          link.style.color = "rgb(0, 0, 0)"; // Reset text color when clicked
        });
      });
    } else {
      container.style.backgroundColor = "rgb(255,255,255)";
      
      // Loop through each nav link and reset its background color
      navLinks.forEach(function (link) {
        link.style.backgroundColor = "rgb(255,255,255)";
        link.style.color = "rgb(0, 0, 0)"; // Set text color to black for visibility
      });
    }
  }
  