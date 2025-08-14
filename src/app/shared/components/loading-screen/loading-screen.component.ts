import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
  standalone: false
})
export class LoadingScreenComponent {
  @Input() isVisible: boolean = true;
  @Input() message: string = 'Welcome to Engex';

  constructor() { }
}
