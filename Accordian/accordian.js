const target = document.getElementsByClassName('accdn');

const arr = Array.from(target);

for(let i=0; i<arr.length;i++){
    arr[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}