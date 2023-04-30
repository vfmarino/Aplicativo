import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  token!: string;
  constructor(
    private authService: AuthServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      {
        next: (response: any) => {
          localStorage.setItem("token", response.token);
          this.route.navigate(['profile'])
        },
        error: error => {
          console.error();
          alert('Login Inválido');
        }
      });

  }

}

