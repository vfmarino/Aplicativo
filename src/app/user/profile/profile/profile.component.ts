import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../services/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthServiceService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout().subscribe(



    );
    this.route.navigate(['home']);
  }
}
