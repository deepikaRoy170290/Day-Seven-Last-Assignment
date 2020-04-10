import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { BankAccountService } from '../services/bankAccount.service';
import { Account } from '../account'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[];

  account:Account[];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private bankAccountService : BankAccountService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnInit() {
      this.loadAllUsers();
      this.fetchData();
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
      this.userService.delete(id).pipe(first()).subscribe(() => {
          this.loadAllUsers()
      });
  }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }

  fetchData(): void {
      this.bankAccountService.fetchData()
      .subscribe(account => (this.account = account));
  }

}