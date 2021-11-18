import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rambert-prenom-exo1';
  public color: string = '';

  public set_color(color:string) {
    this.color = color;
  }
}

