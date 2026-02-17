import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [FormsModule, FormField],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   protected readonly title = signal('my-anime');
  // https://www.sanremonews.it/fileadmin/archivio/sanremonews/carnevale-850x491.jpg
  // title: string = 'my-anime';
  image: string = 'https://www.sanremonews.it/fileadmin/archivio/sanremonews/carnevale-850x491.jpg';
  protected readonly counter = signal(0);
  protected name:string ='';

  onClick(){
    console.log("press");
    // this.title = 'my-anime2';
    setTimeout(() => {
      // this.title = 'my-anime2';
      // this.title.set('anime2');
      this.counter.update( (currentvalue)=> currentvalue +1 );
    }, 2000);
  }
}
