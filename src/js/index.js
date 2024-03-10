document.querySelectorAll('.project-link').forEach(item => {
    item.addEventListener('click', event => {      

        console.log(item.id);
        event.preventDefault();
        let projectId = item.id;
        // Yönlendirme URL'ini oluştur
        let redirectUrl = `detail.html?project=${projectId}`;
        // Kullanıcıyı oluşturulan URL'ye yönlendir
        window.location.href = redirectUrl;
    });
  });