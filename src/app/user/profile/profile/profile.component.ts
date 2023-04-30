import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../services/auth/auth-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../services/user/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name!: string;
  email!: string;
  telefone!: string;
  cpf!: string;

  constructor(
    private authService: AuthServiceService,
    private userService: UserServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getuserData();
  }

  userData: any;
  getuserData() {
    this.userService.getUserData().subscribe(
      {
        next: (response: any) => {
          console.log(response);
          this.name = response.name;
          this.email = response.email;
          this.telefone = response.telefone;
          this.cpf = response.cpf
        },
        error: error => {
          console.error();

        }
      });
  }

  logout() {
    this.authService.logout().subscribe();
    this.route.navigate(['home']);
  }
}
