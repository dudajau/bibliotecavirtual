document.querySelectorAll('.book a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const lastReadPage = localStorage.getItem(this.href);
        if (lastReadPage) {
            window.open(`${this.href}#page=${lastReadPage}`, '_blank');
        } else {
            window.open(this.href, '_blank');
        }
    });
});

// Exemplo para salvar a última página lida (deve ser adaptado ao leitor de PDF)
function saveLastPage(pdfLink, pageNumber) {
    localStorage.setItem(pdfLink, pageNumber);
}
