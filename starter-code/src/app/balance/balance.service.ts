
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BalanceService {
  // cant directly update without using the public methods
  private balance: number = 0;
  private subject: Subject<number> = new Subject<number>();

  constructor() { }

  private updateSubject(): void {
    this.subject.next(this.balance);
  }

  setBalance(amount): void {
    this.balance = amount;
    this.updateSubject();
  }

  getBalance(): number {
    return this.balance;
  }

  addBalance(amount): void {
    this.balance += amount;
    this.updateSubject();
  }

  deductBalance(amount): void {
    this.balance -= amount;
    this.updateSubject();
  }

  onBalanceUpdated(callback): void {
    this.subject.asObservable().subscribe(callback);
  }
}
