const counterEl = document.querySelectorAll('.counter');

counterEl.forEach((count)=>{
  count.innerText = '0';
  incrementCounter();

  function incrementCounter(){
    let currentNum = +count.innerText;
    const dataCeil = count.getAttribute('data-ceil');
    const increment = dataCeil / 28;

    currentNum += Math.ceil(increment) ;
    

    if(currentNum < dataCeil){
      count.innerText = currentNum;
      setTimeout(incrementCounter, 50)
    }else{
      counterEl.innerText = dataCeil;
    }
  }
})

let btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
  location.reload();
})