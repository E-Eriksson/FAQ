// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").addEventListener("click", toggle);
document.getElementById("section2").addEventListener("click", toggle);
document.getElementById("section3").addEventListener("click", toggle);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    const accordion = document.querySelector(".accordion");

    data.forEach((item) => {
      const accordionItem = document.createElement("div");
      accordionItem.className = "accordion-item";

      const titleDiv = document.createElement("div");
      titleDiv.className = "title";
      titleDiv.textContent = item.title;

      const descriptionDiv = document.createElement("div");
      descriptionDiv.className = "description";
      const descriptionText = document.createElement("p");
      descriptionText.textContent = item.body;
      descriptionDiv.appendChild(descriptionText);

      titleDiv.addEventListener("click", toggle);

      accordionItem.appendChild(titleDiv);
      accordionItem.appendChild(descriptionDiv);

      accordion.appendChild(accordionItem);

      // jag använde det här innan nth-child inte ville funka för mig
      //    document.querySelectorAll(".accordion .title").forEach((title, index) => {
      //    title.classList.add(index % 2 === 0 ? "bg-red" : "bg-blue");
      //  });
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
