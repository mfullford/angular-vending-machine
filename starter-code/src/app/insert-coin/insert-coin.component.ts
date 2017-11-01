import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.css']
})
export class InsertCoinComponent implements OnInit {

	coinBalance = 0;

// private means only that class can use that service or public means use everywhere then variable is of type
  constructor(public balanceService:BalanceService) { }


// heavily use the balance.service ts functionalities that have already been defined
  ngOnInit() {
  	//if balance is added onBalanceUpdated update. Balance is our callback
  	this.balanceService.onBalanceUpdated((balance) => {
  		//change the back end and the front end variables to update at the same time
  		this.coinBalance = balance;
  	});
  }

   addBalance(amount) {
   		//we're watching amount update
		this.balanceService.addBalance(amount);
	}
}
