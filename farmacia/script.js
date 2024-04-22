$(document).ready(function() {
  $(window).scroll(function() {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
          $('.navbar').addClass("sticky");
      } else {
          $('.navbar').removeClass("sticky");
      }

  });

  
});
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const aboutContents = document.querySelectorAll('.about-content');

  function displayMedicineInfo(imgSrc, text) {
      const infoContainer = document.getElementById('info-container');
      infoContainer.innerHTML = `<img src="${imgSrc}" alt="Medicamento">
                                  <p>${text}</p>`;
  }

  searchButton.addEventListener('click', function () {
      const searchTerm = searchInput.value.toLowerCase().trim();
      let found = false;

      aboutContents.forEach(function (content) {
          const medicineName = content.querySelector('.text').textContent.toLowerCase();
          const imgSrc = content.querySelector('img').src;
          const medicineInfo = content.querySelector('p').textContent;

          if (medicineName.includes(searchTerm)) {
              displayMedicineInfo(imgSrc, medicineInfo);
              found = true;
          }
      });

      if (!found) {
          const infoContainer = document.getElementById('info-container');
          infoContainer.innerHTML = "<p>Medicamento não encontrado.</p>";
      }
  });
});
