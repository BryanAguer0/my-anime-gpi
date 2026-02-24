import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, switchMap } from 'rxjs';
import { UserService } from '../../../../services/user';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-searchbar',
  imports: [ReactiveFormsModule],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css',
})
export class Searchbar implements OnInit {
  ngOnInit(): void {
    // this.searchInput.valueChanges.pipe(
    //   debounceTime(500)
    // ).subscribe(
    //   {
    //     next: (value: string | null) => {
    //       console.log(value)
    //       if (value) {
    //         this.userService.getLista(value).subscribe()
    //       }
    //     }
    //   }
    // )
    this.searchInput.valueChanges.pipe(
      debounceTime(500), switchMap((value) => this.userService.getLista(value))
    ).subscribe(
      {
        next: (value: User[]) => {
          console.log(value)
        }
      }
    )
  }

  searchInput = new FormControl("");
  userService = inject(UserService);
}
