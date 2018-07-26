import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account.model';

const accounts: Account[] = [{
  'id': 1,
  'number': 'AAA-0029',
  'amount': 39160334.42,
  'percentChange': -0.07,
  'amountChange': 31435.87
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
