import { Component } from '@angular/core';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shareAppRxjs';

  constructor() {}

  public ngOnInit(): void {
    
  }
}
