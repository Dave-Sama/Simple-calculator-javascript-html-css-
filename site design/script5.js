const nBtn = document.querySelector('.nBar__btn');
const nLinks = document.querySelector('.nBar__links');
console.log(nBtn);
nBtn.addEventListener('click', function(){
    let value = nLinks.classList.contains('nCollapse');
    if(value){
        nLinks.classList.remove('nCollapse');
        nBtn.classList.remove('change');
    }
    else{
        nLinks.classList.add('nCollapse');
        nBtn.classList.add('change');

    }

})