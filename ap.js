const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control1')
const allSections = document.querySelector('.main-content')

function Pagetrans() {
    // btn active class
    for (let i = 0; i < sectBtn.length; i++) {
    console.log('hello')
        sectBtn[i].addEventListener('click' , function(){
            let currentbtn = document.querySelectorAll('.active-btn');
            currentbtn[0].className = currentbtn[0].className.replace('active-btn' , ' ')
            this.className += ` active-btn`
        })
        
    }
    // active section
    
    allSections.addEventListener('click' , (e)=>{
        const id = e.target.dataset.id;
        if(id){
            // resmove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const elem = document.getElementById(id)
            elem.classList.add('active')
        }
    })
}
// Pagetrans();

window.addEventListener('load', Pagetrans() );
