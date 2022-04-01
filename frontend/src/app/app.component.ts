import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public headingText = 'You are only limited by';
  public id = '';

  public onSubmit() {
    if (!this.id) return;
    console.log('Oh, hi Mark!');
  }

  public onButtonHoverEnter() {
    document.getElementById('id-input')?.classList.add('input-hover');
  }

  public onButtonHoverLeave() {
    document.getElementById('id-input')?.classList.remove('input-hover');
  }
}
