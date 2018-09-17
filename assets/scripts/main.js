function addFixedTop() {
    try {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            header.classList.add("fixed-top");
            if(window.pageYOffset === 0) {
                header.classList.remove("fixed-top");
            }
        }); 
    } catch (error) {
        
    };
};

addFixedTop()