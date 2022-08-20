//by Tibame Sleep Note

window.addEventListener( "load" , function (){

    // ----------tags----------//
    var tags = document.getElementsByName('tags');
    var cards = document.getElementsByClassName('cards');
    tags[0].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.remove('hide');
        }
    });
    tags[1].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[3].classList.remove('hide');
        cards[4].classList.remove('hide');
        cards[5].classList.remove('hide');
    });
    tags[2].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[0].classList.remove('hide');
        cards[6].classList.remove('hide');
    });
    tags[3].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[6].classList.remove('hide');
        cards[7].classList.remove('hide');
    });
    tags[4].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[2].classList.remove('hide');
        cards[5].classList.remove('hide');
    });
    tags[5].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[6].classList.remove('hide');
        cards[7].classList.remove('hide');
    });
    tags[6].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[1].classList.remove('hide');
        cards[4].classList.remove('hide');
    });
});