const socialBtn = document.querySelectorAll('.social button');

socialBtn.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#248230';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#3CCB59';
    });
});