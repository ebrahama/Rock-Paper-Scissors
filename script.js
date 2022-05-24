const openle = document.querySelector('.rulesbtn');

const rulecard = document.querySelector('.rulescard');

//rule tog

openle.addEventListener('click', () =>{

    let x = document.querySelector('.rulescard');

    if (x.style.display === "none") {

    x.style.display = "block";

    } else {

    x.style.display = "none";

    }

});

// fun close rulecard

function closecard(){

    let x = document.querySelector('.rulescard');

    x.style.display = "none";

}

//start game

const gm = document.querySelector('.gm');
const ingam = document.querySelector('.ingame');
const gameov = document.querySelector('.gameover');


 const playersta = document.querySelectorAll('.lo');
 const im = document.querySelector('#ma');
 const no = document.querySelector('#noa');

 let num = 0;

 playersta.forEach( e => {

    e.addEventListener('click', ()=>{

        if(e.className === "lo roc" ){
            im.src = "./images/icon-rock.svg";
            no.classList = "lo roc"
        }
        else if(e.className === "lo pap"){
            im.src = "./images/icon-paper.svg"
            no.classList = "lo pap"
        }
        else if(e.className === "lo sic"){
            im.src = "./images/icon-scissors.svg"
            no.classList = "lo sic"
        }
        else if(e.className === "lo liz"){      
            im.src = "./images/icon-lizard.svg"
            no.classList = "lo liz"
        }
        else if(e.className === "lo spo"){
            im.src = "./images/icon-spock.svg"
            no.classList = "lo spo"
        }

         gm.style.display = "none";
         ingam.style.display = "block" ;
         gameov.style.display = "block" ;

        // com trun

            const sui = document.querySelector('#coms');
            const ki = document.querySelector('#comm');
            let n = Math.floor(Math.random() * 5);

            if( n === 0 ){
            ki.src = "./images/icon-rock.svg";
            sui.classList = "lo roc"
            }
            else if( n === 1){
                ki.src = "./images/icon-paper.svg"
                sui.classList = "lo pap"
            }
            else if( n === 2){
                ki.src = "./images/icon-scissors.svg"
                sui.classList = "lo sic"
            }
            else if( n === 3){       
                ki.src = "./images/icon-lizard.svg"
                sui.classList = "lo liz"
            }
            else if( n === 4){   
                ki.src = "./images/icon-spock.svg"
                sui.classList = "lo spo"
            }


               
    //tie fun

    let b = e.className ;
    let d = n ;

    const gmo = document.getElementById('gmo');
    const sco = document.getElementById('sco');

    if( b === "lo roc" && d === 0 ){
            gmo.textContent = "EQUAL"
            num = num + 0 ;
        }else if( b === "lo pap" && d === 1 ){
            gmo.textContent = "EQUAL"
            num = num + 0 ;
        }else if(  b === "lo sic" && d === 2){
            gmo.textContent = "EQUAL"
            num = num + 0 ;
        }else if(  b === "lo liz" && d === 3 ){  
            gmo.textContent = "EQUAL"
            num = num + 0 ;
        }else if( b === "lo spo" && d === 4  ){
            gmo.textContent = "EQUAL"
            num = num + 0 ;
        }        
         //win fun

        else if( b == "lo roc" && d == 2 ){
            gmo.textContent = "YOU WIN" ;
            num = num + 1 ;
        } else if( b == "lo roc" && d == 3 ){
            gmo.textContent = "YOU WIN"
            num = num + 1 ;
        }else if(b == "lo pap" && d == 4 ){
            gmo.textContent = "YOU WIN"
            num = num + 1 ;
        }else if( b == "lo pap" && d == 0 ){
            gmo.textContent = "YOU WIN"
            num = num + 1 ;
        }else if( b == "lo sic" && d == 3 ){
            gmo.textContent = "YOU WIN"
            num = num + 1 ;
        }else if(b == "lo sic" && d == 1 ){
            gmo.textContent = "YOU WIN"
            num = num + 1 ;
        }else if( b == "lo liz" && d == 1) {
            gmo.textContent = "YOU WIN"
            num = num + 1 ;
        }else if(  b == "lo liz" && d == 4 ) {
            gmo.textContent = "YOU WIN"
            num = num + 1 ;
        }else if( b == "lo spo" && d == 0){
            gmo.textContent = "YOU WIN"
            num = num + 1 ;
        }else if( b == "lo spo" && d == 2 ){
            gmo.textContent = "YOU WIN"
            num = num + 1 ;
        }

            //lose fun

            else if( b !== "lo roc" && d !== 2 ){
                gmo.textContent = "YOU LOSE"
                num = 0 ;
            } else if( b !== "lo roc" && d !== 3 ){
                gmo.textContent = "YOU LOSE"
                num = 0 ;
            }else if(b !== "lo pap" && d !== 4 ){
                gmo.textContent = "YOU LOSE"
                num = 0 ;
            }else if( b !== "lo pap" && d !== 0 ){
                gmo.textContent = "YOU LOSE"
                num = 0 ;
            }else if( b !== "lo sic" && d !== 3 ){
                gmo.textContent = "YOU LOSE"
                num = 0 ;
            }else if(b !== "lo sic" && d !== 1 ){
                gmo.textContent = "YOU LOSE"
                num = 0 ;
            }else if( b !== "lo liz" && d !== 1){
                gmo.textContent = "YOU LOSE"
                num = 0 ;
            }else if(  b !== "lo liz" && d !== 4 ){
                gmo.textContent = "YOU LOSE"
                num = 0 ;
            }else if( b !== "lo spo" && d !== 0){
                gmo.textContent = "YOU LOSE"
                num = 0 ;
            }else if( b !== "lo spo" && d !== 2 ){
                gmo.textContent = "YOU LOSE"
                num = 0 ;
            }

            sco.textContent = num ;
    });

 });

 // fun playag

function cl(){

    const gm = document.querySelector('.gm');
    const ingam = document.querySelector('.ingame');
    const gameov = document.querySelector('.gameover');
    
    gm.style.display = "block";
    ingam.style.display = "none";
    gameov.style.display = "none" ;
}