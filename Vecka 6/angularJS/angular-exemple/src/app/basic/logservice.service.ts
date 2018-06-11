import { Injectable } from '@angular/core';

@Injectable()
export class LogserviceService {

  constructor() { }

  logUser(users){
    console.log(users)
  }
}
