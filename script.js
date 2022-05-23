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


