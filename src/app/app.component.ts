import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colors = [
    {label: 'red', isSelected: false},
    {label: 'blue', isSelected: false},
    {label: 'green', isSelected: false},
    {label: 'yellow', isSelected: false},
    {label: 'purple', isSelected: false},
  ];

  getColorSelected($event: { color: string; position: number }) {
    this.colors[$event.position].isSelected = !this.colors[$event.position].isSelected;
  }
}
