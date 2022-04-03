import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() id: string | undefined = undefined;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() text: string = 'OK';
  @Input() width: string = '100';
  @Input() invertColor: boolean = false;
  @Input() isLoading: boolean = false;

  @Output() onMouseEnter = new EventEmitter<MouseEvent>();
  @Output() onMouseLeave = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}

  emitOnMouseEnter(event: MouseEvent) {
    this.onMouseEnter.emit(event);
  }

  emitOnMouseLeave(event: MouseEvent) {
    this.onMouseLeave.emit(event);
  }
}
