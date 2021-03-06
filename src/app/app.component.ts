import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'tic-tac-toe';
  winMessage: string = '';
  tieMessage: string = '';
  isCross = false;
  // filling the array with a string 'empty -->
  itemArray : string[] = new Array(9).fill('empty')
  counter: number = 0


  // constructor injection -->
  constructor(private toastr:ToastrService){}

  handleClick(itemNumber: number){
    if(this.winMessage){
      return this.toastr.success(this.winMessage)
    }
    
    if (this.itemArray[itemNumber] === 'empty'){
      this.itemArray[itemNumber] = this.isCross ? 'cross':'circle';
      this.isCross = !this.isCross; //change the value to give 2nd player turn!
    }else{
      return this.toastr.info('Already Filled!')
    }
        
    this.checkIsWinner()
    // check if its a tie!
    if (!this.winMessage &&
      this.itemArray.length === this.itemArray.filter(function(x){ return x !== 'empty'; }).length
    ){
      this.tieMessage = 'Its a TIE!!'
    }
  }

  //arrow function -->
  reloadGame = () =>{
    this.winMessage = '';
    this.tieMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty')
  }

  checkIsWinner = () => {
    //  checking  winner of the game
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = `${this.itemArray[3]} won`;
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[6]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = `${this.itemArray[1]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    }
  };
}
