const openNav = () => {
    if (window.innerWidth < 999) {
        document.querySelector('.nav-list').style.display = 'flex';
        document.querySelector('.nav-list').style.transition = 'all 0.5s';
        document.querySelector('.nav-list').style.transform = 'translateX(0)';
        document.querySelector('.nav-button').style.display = 'none';
        document.querySelector('.close-button').style.display = 'block';
    }
}

const closeNav = () => {
    if (window.innerWidth < 999) {
        document.querySelector('.nav-list').style.transition = 'all 0.5s';
        document.querySelector('.nav-list').style.transform = 'translateX(100%)';
        document.querySelector('.nav-list').style.display = 'none';
        document.querySelector('.close-button').style.display = 'none';
        document.querySelector('.nav-button').style.display = 'block';
        document.querySelector('html').style.overflowX = 'hidden';
    }
}