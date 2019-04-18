const navItem = document.querySelectorAll('.main-nav li');
navItem.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#248230';
        item.style.borderBottom = "5px solid #FFF";
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '#3CCB59';
        item.style.borderBottom = "none";
    });
});