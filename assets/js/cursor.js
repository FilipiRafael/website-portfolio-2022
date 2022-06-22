const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 999) {
        cursor.setAttribute('style', 'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;')
        cursor.style.display = 'inline';
    }
});

document.addEventListener('mouseout', () => {
    if (window.innerWidth > 999) {
        cursor.style.display = 'none';
    }
})