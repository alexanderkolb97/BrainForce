const handleBurger = () => {
    let burger = document.querySelector('.burger');
    let navigation = document.querySelector('.navigation');
    let value = parseInt(window.getComputedStyle(navigation).top); 
    
    burger.addEventListener('click', function() {
        let height = parseInt(window.getComputedStyle(navigation).top) + 'px';
        if(height == `${value}px`) {
            navigation.style.top = "0px";
            burger.querySelector('.first').classList.toggle('close');
            burger.querySelector('.second').classList.toggle('close');
            burger.querySelector('.third').classList.toggle('close');
        } else {
            navigation.style.top = `${value}px`;
        }
    })

    document.addEventListener('mouseup', function(e) {
        if(e.target.className != 'navigation') {
            navigation.style.top = `${value}px`;
            burger.querySelector('.first').classList.remove('close');
            burger.querySelector('.second').classList.remove('close');
            burger.querySelector('.third').classList.remove('close');
        }
        
    })
}

handleBurger()

