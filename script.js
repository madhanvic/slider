const card = document.querySelectorAll('.card');
const moveContainer = document.querySelector('.slider-moving-container')
let cardWidth = card[0].getBoundingClientRect().width;
let translate = 0;
let data = (((((window.innerWidth * 90) / 100) * 80) /100) / 4);
         


        card.forEach((card)=>{
            card.style.minWidth = `${data}px`
        })
         let space = data /2;
        moveContainer.style.columnGap  = `${space}px`;


const LarrowBtn =  document.querySelector('.left-arrow');
const RarrowBtn =  document.querySelector('.right-arrow');




window.addEventListener('load', ()=>{
    if(window.innerWidth > 992 && window.innerWidth <= 1600){
        data = (((((window.innerWidth * 90) / 100) * 80) /100) / 4);
        console.log(data)
        card.forEach((card)=>{
            card.style.minWidth = `${data}px`
        })
        space = data /2;
    
        moveContainer.style.columnGap  = `${data / 2}px`;
    }else if(window.innerWidth > 768 && window.innerWidth <= 992){
        data = (((((window.innerWidth * 90) / 100) * 80) /100) / 3);
        console.log('data')
        card.forEach((card)=>{
            card.style.minWidth = `${data}px`
        })
        space = data;
    
        moveContainer.style.columnGap  = `${data}px`;
    }else if(window.innerWidth <= 768){
        data = (((((window.innerWidth * 90) / 100) * 80) /100));
        console.log('data')
        card.forEach((card)=>{
            card.style.minWidth = `${data}px`
        })
        space = 0;
        moveContainer.style.columnGap  = `${space}px`;
    }


})


window.addEventListener('resize', ()=>{
    if(window.innerWidth > 992 && window.innerWidth <= 1600){
        data = (((((window.innerWidth * 90) / 100) * 80) /100) / 4);
        console.log(data)
        card.forEach((card)=>{
            card.style.minWidth = `${data}px`
        })
        space = data /2;
          
        moveContainer.style.columnGap  = `${data / 2}px`;
    }else if(window.innerWidth > 768 && window.innerWidth <= 992){
        data = (((((window.innerWidth * 90) / 100) * 80) /100) / 3);
        console.log('data')
        card.forEach((card)=>{
            card.style.minWidth = `${data}px`
        })
        space = data;
        moveContainer.style.columnGap  = `${space}px`;
    }else if(window.innerWidth <= 768){
        data = (((((window.innerWidth * 90) / 100) * 80) /100));
        console.log('data')
        card.forEach((card)=>{
            card.style.minWidth = `${data}px`
        })
        space = 0;
        moveContainer.style.columnGap  = `${space}px`;
    }


})


RarrowBtn.addEventListener('click', ()=>{

        translate += data + (space);
       moveContainer.style.transform = `translateX(-${translate}px)`
   })
   
   LarrowBtn.addEventListener('click', ()=>{
       translate -= data + (space);
       moveContainer.style.transform = `translateX(-${translate}px)`
   })


   