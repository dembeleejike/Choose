console.log('Hello World!');
let cartQuantity = 0;
console.log(cartQuantity);


let computerMove = '';

function movementMade() {
  let randomNumber = Math.random();
  console.log(randomNumber);

  if (randomNumber >= 0 && randomNumber < 1/3) {computerMove = 'rock';
    
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
    
  } else if (randomNumber >= 2/3 && randomNumber < 1) {computerMove = 'scissors'
   
  }

  console.log(computerMove);
}




let result = '';

function outPut(decision){
  
  console.log(decision);
  
  if (decision === 'rock') {
    
    if(computerMove === 'rock'){result = 'A Tie.';
      
      }else if(computerMove === 'paper'){result = 'You Win.';
      
      }else if(computerMove === 'scissors'){result = 'You lose.';
      }
      console.log(result);
      
  


alert(`You picked ${decision}. Computer picked ${computerMove}, ${result}`)




} else if (decision === 'paper') {
  
  if(computerMove === 'rock'){result = 'You Win.';
      
      }else if(computerMove === 'paper'){result = 'A Tie.';
      
      }else if(computerMove === 'scissors'){result = 'You Lose.';
      }
      console.log(result);

alert(`You picked ${decision}. Computer picked ${computerMove}, ${result}`)


} else if (decision ===  'scissors') {
  
if(computerMove === 'rock'){result = 'You lose.';
      
      }else if(computerMove === 'paper'){result = 'You Win.';
      
      }else if(computerMove === 'scissors'){result = 'A Tie.';
      }
      console.log(result);    
      
alert(`You picked ${decision}. Computer picked ${computerMove}, ${result}`)


}

}

  


