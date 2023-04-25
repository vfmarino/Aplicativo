import { Component, OnInit } from '@angular/core';
import { User } from '../models/user/user';
import { UserServiceService } from '../services/user/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();
  constructor(
    private userService : UserServiceService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  register(){
    this.userService.createUser(this.user).subscribe(
      user =>{
        console.log(this.user);
       alert("Registrado Com Sucesso");
       this.route.navigate(['login']);

    },
    error =>{
      console.log(error);
      alert("User is not registered")
    });

  }
}
