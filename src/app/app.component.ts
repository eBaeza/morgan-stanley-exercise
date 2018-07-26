import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { Account } from './models/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];
  columns = [{
    header: 'Account',
  }, {
    header: 'Available Cash',
    subtitle: 'Today\'s Change'
  }];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAccounts().subscribe(
      res => {
        this.accounts = res;
      }
    );
  }
}
