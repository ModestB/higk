function addFixedTop() {
    try {
        const header = document.querySelector('header');
        const nextElement = document.querySelector('header + section')

        window.addEventListener('scroll', () => {
            header.classList.add("fixed-top");
            nextElement.style.marginTop = `${header.offsetHeight}px`
            if(window.pageYOffset === 0) {
                header.classList.remove("fixed-top")
                nextElement.style.marginTop = `0`

            }
        }); 
    } catch (error) {
        
    };
};

// ONSCROLL collapses navbar
function collapseNavOnScroll(){
    const navbar = document.getElementById("navbarNav");
    window.addEventListener('scroll', () => {
        navbar.classList.remove('show');
    });  
};
collapseNavOnScroll()
addFixedTop()