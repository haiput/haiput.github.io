// FADE
const fadeEl = document.querySelector('.fade');

let hasScrolled = false;
window.addEventListener('scroll', () =>{
    if (!hasScrolled) {
    fadeEl.style.opacity = '0.5';
    hasScrolled = true;
    }
});

//FILTER
const filterEl = document.querySelector('.filter');
const projectEl1 = document.querySelector('.project:nth-child(1)');
const projectEl2 = document.querySelector('.project:nth-child(2)');
const projectEl3 = document.querySelector('.project:nth-child(3)');
const projectEl4 = document.querySelector('.project:nth-child(4)');
const projectEl5 = document.querySelector('.project:nth-child(5)');
const projectEl6 = document.querySelector('.project:nth-child(6)');
const projectEl7 = document.querySelector('.project:nth-child(7)');
const projectEl8 = document.querySelector('.project:nth-child(8)');
const htmlEl = document.querySelector('html');

filterEl.addEventListener('click', e =>{
    // remove fade
    fadeEl.style.opacity = '0';

    // make clicked bottom active
    document.querySelector('.filter-btn--active').classList.remove('filter-btn--active');
    e.target.classList.add('filter-btn--active');

    // change image opacities
    htmlEl.style.setProperty('--default-opacity', '0.4');
    htmlEl.style.setProperty('--hover-opacity', '0.3');

    //reorganize grid 
    const filterText = e.target.textContent;

    if (filterText === 'ALL') {
        projectEl1.style.opacity= '1';
        projectEl1.style.transform= 'scale(1)';
        projectEl2.style.opacity= '1';
        projectEl2.style.transform= 'scale(1)';
        projectEl3.style.opacity= '1';
        projectEl3.style.transform= 'scale(1)';
        projectEl4.style.opacity= '1';
        projectEl4.style.transform= 'scale(1)';
        projectEl5.style.opacity= '1';
        projectEl5.style.transform= 'scale(1)';
        projectEl6.style.opacity= '1';
        projectEl6.style.transform= 'scale(1)';
        projectEl7.style.opacity= '1';
        projectEl7.style.transform= 'scale(1)';
        projectEl8.style.opacity= '1';
        projectEl8.style.transform= 'scale(1)';

    } else if (filterText === 'poster') {
        projectEl2.style.opacity= '0';
        projectEl2.style.transform= 'scale(0)';
        projectEl4.style.opacity= '0';
        projectEl4.style.transform= 'scale(0)';
        projectEl6.style.opacity= '0';
        projectEl6.style.transform= 'scale(0)';
        projectEl7.style.opacity= '0';
        projectEl7.style.transform= 'scale(0)';
        projectEl8.style.opacity= '0';
        projectEl8.style.transform= 'scale(0)';

        projectEl1.style.opacity= '1';
        projectEl1.style.transform= 'scale(1)';
        projectEl3.style.opacity= '1';
        projectEl3.style.transform= 'scale(1)'; 
        projectEl5.style.opacity= '1';
        projectEl5.style.transform= 'translateY(-345px)';

    } else if (filterText === 'banner') {
        projectEl1.style.opacity= '0';
        projectEl1.style.transform= 'scale(0)';
        projectEl2.style.opacity= '0';
        projectEl2.style.transform= 'scale(0)';
        projectEl3.style.opacity= '0';
        projectEl3.style.transform= 'scale(0)';
        projectEl4.style.opacity= '0';
        projectEl4.style.transform= 'scale(0)';
        projectEl5.style.opacity= '0';
        projectEl5.style.transform= 'scale(0)';
        projectEl7.style.opacity= '0';
        projectEl7.style.transform= 'scale(0)';

        projectEl6.style.opacity= '1'; 
        projectEl6.style.transform= 'translate(-650px, -501px)';
        projectEl8.style.opacity= '1';
        projectEl8.style.transform= 'translateY(-824px)';

    } else if (filterText === 'logo') {
        projectEl1.style.opacity= '0';
        projectEl1.style.transform= 'scale(0)';
        projectEl3.style.opacity= '0';
        projectEl3.style.transform= 'scale(0)';
        projectEl5.style.opacity= '0';
        projectEl5.style.transform= 'scale(0)';
        projectEl6.style.opacity= '0';
        projectEl6.style.transform= 'scale(0)';
        projectEl8.style.opacity= '0';
        projectEl8.style.transform= 'scale(0)';

        projectEl2.style.opacity= '1';
        projectEl2.style.transform= 'scale(1)';
        projectEl4.style.opacity= '1';
        projectEl4.style.transform= 'translateY(-501px)';
        projectEl7.style.opacity= '1';
        projectEl7.style.transform= 'translate(650px, -824px)';
    }


});