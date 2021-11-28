window.onload = () =>{
    let img = document.querySelector('#popcat1');
    let counter = document.querySelector('#target');
    let score = 0;
    let sound = new Audio('pop.mp3');

    img.addEventListener('mousedown', ()=> {
        img.src = 'images/popcat2.png';
        sound.play();
        addToCounter();
    })
    img.addEventListener('mouseup', ()=> {
        img.src = 'images/popcat1.png';
    })
    function addToCounter(){
        score++;
        counter.innerHTML = score;
    }
}
