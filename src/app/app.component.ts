import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'consultant-chain-ui';
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 3, color: '#E0E1E0'},
    {text: 'Two', cols: 3, rows: 8, color: '#ccc'},
    {text: 'Two', cols: 1, rows: 5, color: '#ccc'},
  ];
}
