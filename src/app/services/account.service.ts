import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account.model';

const accounts: Account[] = [{
  id: 1,
  number: 'AAA-0029',
  amount: 39160334.42,
  percentChange: -0.07,
  amountChange: 31435.87
}, {
  id: 2,
  number: 'IRA-0146',
  amount: 15884302.39,
  percentChange: 0.03,
  amountChange: 7430.83
}, {
  id: 3,
  number: 'AAA-1812',
  amount: 2010926.10,
  percentChange: 0.21,
  amountChange: 38881.63
}, {
  id: 4,
  number: 'REG-2019',
  amount: 13465679.34,
  percentChange: 0,
  amountChange: 0
}, {
  id: 5,
  number: 'AAA-3819',
  amount: 10050054.07,
  percentChange: 0.07,
  amountChange: 8916.69
}, {
  id: 6,
  number: 'IRA-5200',
  amount: 5763.36,
  percentChange: -0.08,
  amountChange: 8916.69
}];

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccounts(): Observable<Account[]> {
    return of(accounts);
  }
}
