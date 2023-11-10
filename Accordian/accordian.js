const target = document.getElementsByClassName('accdn');
for(let i = 0; i < target.length; i++){
    target[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}