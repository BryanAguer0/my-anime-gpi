import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-private',
  imports: [FormsModule, Navbar, Footer, RouterOutlet],
  templateUrl: './private.html',
  styleUrl: './private.css',
})
export class Private {


}
