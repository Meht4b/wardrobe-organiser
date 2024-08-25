var clothElements = document.getElementsByClassName('cloth');
var focused = [];
for (var i=0; i < clothElements.length;i++){
    clothElements[i].addEventListener('click',function (){
        this.classList.add("clothFocus");
        focused.push(this)
        document.getElementById('blur').style.display = 'block';
    })
}

document.getElementById('blur').addEventListener('click',function (){
    this.style.display = 'none';
    while (focused.length>0){
        focused.pop().classList.remove('clothFocus');
    }
})
