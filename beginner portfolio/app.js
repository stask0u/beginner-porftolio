
const csd = document.querySelector('.COCKASDF')
const cid = document.querySelectorAll('.COCKASDF img')
const dot1 = document.getElementById('imgg1')
const dot2 = document.getElementById('imgg2')
const dot3 = document.getElementById('imgg3')

const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

let counter = 1;

csd.style.transform='translateX('+-350 * counter+'px)';


    nextBtn.addEventListener('click',() =>{
        csd.style.transition = 'transform 0.2s ease-in-out';
        counter++;
    
        csd.style.transform='translateX('+-350*counter+'px)'
        
    })
    prevBtn.addEventListener('click',() =>{
        csd.style.transition = 'transform 0.2s ease-in-out';
        counter--;
        csd.style.transform='translateX('+-350*counter+'px)'
        
    })
    
    
     csd.addEventListener('transitionend', ()=>{
        if(cid[counter].id==='firstClone'){
            csd.style.transition = 'none';
            counter= cid.length-counter
            csd.style.transform = 'translateX('+-350*counter+'px)'
            
        }
        if(cid[counter].id==='lastClone'){
            csd.style.transition = 'none';
            counter= cid.length-2
            csd.style.transform = 'translateX('+-350*counter+'px)'   
            
         }
    })
    csd.addEventListener('transitionend', ()=>{
        if(cid[counter].id==='firstClone'){
            dot1.style.color='#c27455';
        }else{
            dot1.style.color='#8c543e'
        }
    })
    csd.addEventListener('transitionend', ()=>{
        if(cid[counter].id==='img2'){
            dot2.style.color='#c27455';
        }else{
            dot2.style.color='#8c543e'
        }
    })
    csd.addEventListener('transitionend', ()=>{
        if(cid[counter].id==='img3'){
            dot3.style.color='#c27455';
        }else{
            dot3.style.color='#8c543e'
        }
    })




