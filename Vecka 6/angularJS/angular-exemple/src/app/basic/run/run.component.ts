import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LogserviceService } from '../logservice.service';

@Component({
  selector: 'app-run', // HÄR BESTÄMMER JAG VAD ELEMENTET SKA HETA (HTML)
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {

  _users;

  constructor(private userService: UserService, private logService: LogserviceService) { }

  get users(){
    console.log('getting users');
    return this._users;
  }
  
  ngOnInit() {
    this._users = this.userService.getUsers();
    this.logService.logUser(this._users)
  }
}
