import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectError, selectLoaded, selectLoading, selectUsers } from '../user/user.selector';
import * as UserActions from "../user/user.action";
import { User } from '../Models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private store: Store) {}

  user$ = this.store.select(selectUsers);
  loading$ = this.store.select(selectLoading);
  loaded$ = this.store.select(selectLoaded);
  error$ = this.store.select(selectError);

  addUser() {
    const user: User = {
      id: 11,
      name: 'Abc', // Adjusted to match the User interface
      username: 'abc', // Example value
      email: 'abc@example.com', // Example value
      address: {
        street: '123 Street',
        suite: 'Apt. 1',
        city: 'City',
        zipcode: '12345',
        geo: {
          lat: '0',
          lng: '0'
        }
      },
      phone: '123-456-7890', // Example value
      website: 'example.com', // Example value
      company: {
        name: 'Example Company', // Example value
        catchPhrase: 'Example catch phrase', // Example value
        bs: 'Example bs' // Example value
      }
    };

    this.store.dispatch(UserActions.addUsers({ user }));
  }

  removeUser(id: number) {
    this.store.dispatch(UserActions.removeUsers({ id }));
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }
}
