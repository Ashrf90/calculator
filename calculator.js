(function () {
    let screen = document.querySelector('.screen');
    let boutons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let egality = document.querySelector('.btn-equal');
    let racine = document.querySelector('.racine')
    let pourcent = document.querySelector('.pourcent')
    let plus_minus = document.querySelector('.plus_minus')


    boutons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    // egality button //
    egality.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "Please enter";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    // clear button //


    // racine button //
    racine.addEventListener('click', Racin)

    function Racin(){
        let answer = Math.sqrt(screen.value);
        screen.value = answer;
    }

    // percent button //
    pourcent.addEventListener('click', Percent)

    function Percent(){
        let answer = (screen.value)/100;
        screen.value = answer;
    }

    // plus_minus button //
    plus_minus.addEventListener('click', Minus)

    function Minus(){
        let answer = -(screen.value);
        screen.value = answer;
    }

})();