import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gazratov182';

  onBigPrice(price){
    if (Number(price) > 500){
      return true;
    }else return false;
  }
}
