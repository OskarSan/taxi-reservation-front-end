
    
    

    
    
    
        
/*Reservation items*/ 
const reservationItems = document.querySelectorAll('.reservation-item');

reservationItems.forEach(item => {
    item.addEventListener('click', () => {
        

        if(item.classList.contains('selected')) {
            item.classList.remove('selected');
        } else{
            reservationItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
        }

        
    });
});


/*mobile menu*/

const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');
hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

});



/* submit button */


