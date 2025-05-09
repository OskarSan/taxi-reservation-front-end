// FAQ Accordion

document.addEventListener('DOMContentLoaded', ()=>{
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e)=>{
        const groupHeader = e.target.closest('.faq-group-header');
        
        if(!groupHeader) return;
        
        console.log(groupHeader);
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');
        

        //toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //toggle body visibility
        groupBody.classList.toggle('open');

        //close other bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        
        otherGroups.forEach((otherGroup)=>{
            if (otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherGroupIcon = otherGroup.querySelector('.faq-group-header i');
                
                otherGroupBody.classList.remove('open');
                otherGroupIcon.classList.remove('fa-minus')
                otherGroupIcon.classList.add('fa-plus')
            }
        });


    });
});



//mobile menu
document.addEventListener('DOMContentLoaded', () =>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburgerButton.addEventListener('click', (e) => {
        mobileMenu.classList.toggle('active');
    })
})