import { Router } from '@angular/router';
import { SofUserService } from './../../../../service/stackoverflow-project/sof-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sof-header',
  templateUrl: './sof-header.component.html',
  styleUrls: ['./sof-header.component.css'],
})
export class SofHeaderComponent implements OnInit {
  constructor(public userService: SofUserService, private router: Router) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user != null) {
      this.userService.user = JSON.parse(user);
    }
    // guard ın görevini yapıyor.
    // else {
    //   this.router.navigateByUrl(
    //     '/big-projects/stackoverflow-project/sof-login'
    //   );
    // }
  }
  logout() {
    this.userService.user = undefined;
    this.router.navigateByUrl('/big-projects/stackoverflow-project/sof-home');
    localStorage.clear();
  }
  leave() {
    this.userService.user = undefined;
    localStorage.clear();
  }
}
