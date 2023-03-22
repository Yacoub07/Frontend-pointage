import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/composants/authentification/login/login.component';
import { User } from 'src/app/composants/authentification/login/user';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
