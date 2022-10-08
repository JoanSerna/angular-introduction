import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-colors',
  templateUrl: './list-colors.component.html',
  styleUrls: ['./list-colors.component.css'],
})
export class ListColorsComponent {
  @Input() colors: {label:string,isSelected:boolean}[] = []
  @Output() colorSelected: EventEmitter<{ color: string, position: number }> = new EventEmitter<{ color: string; position: number }>()

  colorSelect(color: string,position:number) {
    console.log({color});
    this.colorSelected.emit({
      color,
      position
    })
  }
}
