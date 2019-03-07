import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fakeUser } from '../../shared/fake-data/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  user = fakeUser;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    for (let index = 0; index < this.user.length; index++) {
      if (this.username === this.user[index].username && this.user[index].password) {
        localStorage.setItem('currentUser', 'username');
        // tslint:disable-next-line:semicolon
        this.router.navigate(['/todo'])
      }
    }
  }
}
