import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { OAuth } from '../../../services/o-auth';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  authService = inject(OAuth);
  router = inject(Router);

  logOut() {
    this.authService.logOut().subscribe({
      next: () => {
        this.router.navigate(['public'])
      }
    });
  }

}
