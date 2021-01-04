let menuItems = document.querySelectorAll('#menu .menu-item')

menuItems.forEach(menuItem =>{
    let homeItem = document.querySelectorAll('#menu .menu-item')[0];
    let selectArea = document.querySelector('.select-area')
    menuItem.addEventListener('mouseover', function(){
        homeItem.classList.remove('active');
        menuItem.classList.add('active');
        console.log(menuItem)
        let multiplier = menuItem.getAttribute('id');
        if(multiplier == 4){
            selectArea.style.width = "80px";
            let pixelsMove = (parseInt((3 * 48)) - 10)
            selectArea.style.transform = 'translateX(' +  pixelsMove + 'px)';            
            console.log(pixelsMove);
        }
        else{
            selectArea.style.width = "50px";
            selectArea.style.transform = 'translateX(' + (multiplier-1) * 48 + 'px)';
        }
        
    })
    menuItem.addEventListener('mouseout', function(){
        menuItem.classList.remove('active');
        homeItem.classList.add('active');
        selectArea.style.transform = 'translateX(0px)';
    })
})