import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users;

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Marc'
      },
      {
        id: 2,
        name: 'Koof'
      },
      {
        id: 3,
        name: 'Harry'
      }
    ]
   }
   getUsers() {
     return this.users;
   }
}
