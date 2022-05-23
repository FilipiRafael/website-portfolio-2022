openNav = () => {
    document.querySelector('.nav-list').style.transform = 'translateX(0)';
    document.querySelector('.nav-button').style.display = 'none';
    document.querySelector('.close-button').style.display = 'block';
}

closeNav = () => {
    document.querySelector('.nav-list').style.transform = 'translateX(100%)';
    document.querySelector('.close-button').style.display = 'none';
    document.querySelector('.nav-button').style.display = 'block';
    document.querySelector('html').style.overflow = 'hidden';
    document.querySelector('html').style.overflowX = 'hidden';
}