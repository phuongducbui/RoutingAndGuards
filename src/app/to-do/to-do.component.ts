import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router'
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log(environment.production);
    console.log(environment.apiUrl);
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login'])
  }
}
