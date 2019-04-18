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

const mobileIcon = document.querySelector('.mobile-menu');
const mobileMenu = document.querySelector('.main-nav ul');

mobileIcon.addEventListener('click', () => {
    if(mobileMenu.style.display === 'none'){
        mobileMenu.style.display = 'flex';
    } else {
        mobileMenu.style.display = 'none';
    }
});

// Currently fires correctly on mobile, but also affects desktop if resized