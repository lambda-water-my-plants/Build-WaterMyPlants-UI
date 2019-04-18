const signUp = document.querySelector('.mast button');

signUp.addEventListener('mouseenter', () => {
    signUp.style.backgroundColor = '#248230';
    signUp.style.border = '2px solid #000';
    signUp.style.boxShadow = '1px 2px #000';
});

signUp.addEventListener('mouseleave', () => {
    signUp.style.backgroundColor = '#3CCB59';
    signUp.style.border = '2px solid #FFF';
    signUp.style.boxShadow = '1px 2px #FFF';
});