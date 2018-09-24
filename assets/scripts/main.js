function addFixedTop() {
    try {
        const header = document.querySelector('header');
        console.log(header.offsetHeight)
        const nextElement = document.querySelector('header + section')
        console.log(nextElement)

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

addFixedTop()