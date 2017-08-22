import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {

  private users: User[] = [];

  constructor(private userServ: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  public loadUsers() {
    this.userServ.getAllUsers()
      .subscribe(response => this.users = response);
  }

  public deleteUser(user: User) {
    this.userServ.deleteUser(user._id)
      .subscribe(response => this.users = this.users.filter(u => u !== user));
  }

  public onAddUser(newUser) {      
    this.users = this.users.concat(newUser);
  }
}
