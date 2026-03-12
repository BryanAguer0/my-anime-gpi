import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { OAuth } from '../../../services/o-auth';
import { AuthStore } from '../../../store/auth.store';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  authStore = inject(AuthStore);
  router = inject(Router);
  isLoading = this.authStore.loading;
  user = this.authStore.user

  logOut() {
    this.authStore.logout();
  }

}
