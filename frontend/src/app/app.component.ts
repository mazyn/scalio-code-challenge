import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public id = '';

  public onSubmit() {
    if (!this.id) return;
    console.log('Oh, hi Mark!');
  }
}
