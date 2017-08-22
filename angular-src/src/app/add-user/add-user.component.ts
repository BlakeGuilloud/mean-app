import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private newUser :User;

  @Output() addUser: EventEmitter<User> = new EventEmitter<User>();
  
  constructor(private userServ: UserService) { }

  ngOnInit() {
    this.newUser = {
      username: '',
      email: '',
    };
  }

  public onSubmit() {
    this.userServ.addUser(this.newUser)
      .subscribe(response => {
        if (response._id) {
          this.addUser.emit(response);
          this.newUser = {
            username: '',
            email: '',
          };
        }
      });
  }
}
