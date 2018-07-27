import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account.model';
import { accounts } from './accounts.data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccounts({ orderBy = null, orderType = 'asc' } = {}): Observable<Account[]> {
    const data: Account[] = this.orderBy(accounts, orderBy, orderType);
    return of(data);
  }

  private orderBy(data: Array<any>, property: string, type: string = 'asc'): Array<any> {
    return data.sort((a, b) => {
      let A = type === 'asc' ? a[property] : b[property];
      let B = type === 'asc' ? b[property] : a[property];

      if (property === 'number') {
        A = Number(A.split('-')[1]);
        B = Number(B.split('-')[1]);
      }

      if (A > B) {
        return 1;
      }

      if (A < B) {
        return -1;
      }

      return 0;
    });
  }
}
