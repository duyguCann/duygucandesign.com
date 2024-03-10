import * as bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
document.querySelectorAll('.btn-outline-success').forEach(button => {
    button.addEventListener('click', function() {
      var category = this.id; // Butonun id'sini al (bu durumda kategoriye karşılık gelir)
      var accordionItems = document.querySelectorAll('.accordion-item');
      var matchFound = false;
      // Tüm accordion item'larını döngüye al
      accordionItems.forEach(item => {
        var itemCategories = item.getAttribute('data-category').split(', ');

        if (itemCategories.includes(category) || category === 'all') {
          item.style.display = '';
         matchFound = true;
        } else {
          item.style.display = 'none'; // Eğer kategori eşleşmiyorsa gizle
        }
        console.log(matchFound);
        document.getElementById('no-data').style.display = matchFound ? 'none' : 'block';
      });
    });
  });
