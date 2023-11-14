const target = document.getElementsByClassName('accdn');

const Arr = Array.from(target);

for(let i = 0; i < Arr.length; i++){
    Arr[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}