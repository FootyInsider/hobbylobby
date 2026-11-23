const toast = document.querySelector("#claim-toast");
const toastName = document.querySelector("#toast-name");
const toastLocation = document.querySelector("#toast-location");
const viewerCount = document.querySelector("#viewer-count");

const demoPeople = [
  { name: "Kyle M.", city: "Austin", state: "TX" },
  { name: "Ava R.", city: "Phoenix", state: "AZ" },
  { name: "Jordan T.", city: "Denver", state: "CO" },
  { name: "Mia C.", city: "Nashville", state: "TN" },
  { name: "Ethan B.", city: "Orlando", state: "FL" },
  { name: "Olivia S.", city: "Columbus", state: "OH" },
  { name: "Noah W.", city: "Portland", state: "OR" },
  { name: "Sophia D.", city: "Charlotte", state: "NC" },
  { name: "Liam P.", city: "Chicago", state: "IL" },
  { name: "Isabella G.", city: "San Diego", state: "CA" },
  { name: "Mason H.", city: "Atlanta", state: "GA" },
  { name: "Emma F.", city: "Tampa", state: "FL" }
];

if (toast && toastName && toastLocation && viewerCount) {
  let previousPerson = 0;

  function updateViewerCount() {
    viewerCount.textContent = `${Math.floor(Math.random() * 99) + 1} people`;
  }

  function showNextDemoClaim() {
    let personIndex = Math.floor(Math.random() * demoPeople.length);
    if (personIndex === previousPerson) {
      personIndex = (personIndex + 1) % demoPeople.length;
    }
    previousPerson = personIndex;

    const person = demoPeople[personIndex];
    const minutesAgo = Math.floor(Math.random() * 59) + 1;
    const timeAgo = minutesAgo === 1 ? "1 min ago" : `${minutesAgo} mins ago`;

    toastName.textContent = person.name;
    toastLocation.textContent = `${person.city}, ${person.state} • ${timeAgo}`;
    updateViewerCount();
    toast.classList.add("visible");

    window.setTimeout(() => {
      toast.classList.remove("visible");
      window.setTimeout(showNextDemoClaim, 20000);
    }, 5000);
  }

  updateViewerCount();
  window.setTimeout(() => {
    toast.classList.remove("visible");
    window.setTimeout(showNextDemoClaim, 20000);
  }, 5000);
}

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    const isExpanded = question.getAttribute("aria-expanded") === "true";
    question.setAttribute("aria-expanded", String(!isExpanded));
    item.classList.toggle("is-open", !isExpanded);
  });
});
