function toggleSection(sectionId) {
    const section = document.getElementById(sectionId + '-info');
    section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    // Desplazamiento suave al hacer clic en enlaces de navegación
    const links = document.querySelectorAll('nav a');
    
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
