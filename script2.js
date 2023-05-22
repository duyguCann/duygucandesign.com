var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
var filterOptions = document.querySelectorAll('.filter-option');
var accordions = document.querySelectorAll('.accordion');

filterOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    var selectedFilter = this.dataset.filter;

    accordions.forEach(function(accordion) {
      var accordionTags = accordion.dataset.tags.split(',');

      if (selectedFilter === 'all' || accordionTags.includes(selectedFilter)) {
        accordion.style.display = 'block';
      } else {
        accordion.style.display = 'none';
      }
    });
  });
});
