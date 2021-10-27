import { Component, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent  {
  users:string[] = [];

  constructor(private usersService:UsersService){
  
    
  }
  // @Output() userSetToActive = new EventEmitter<number>();

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    // this.userSetToActive.emit(id);
  }

}
