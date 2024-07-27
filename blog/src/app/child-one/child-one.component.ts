import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.css'
})
export class ChildOneComponent {
  @Output() updateDataEvent = new EventEmitter<string>()
}
