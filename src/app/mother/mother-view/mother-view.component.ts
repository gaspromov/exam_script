import { Component, OnInit } from '@angular/core';
import { MotherService } from 'src/app/shared/mother.service';

@Component({
  selector: 'app-mother-view',
  templateUrl: './mother-view.component.html',
  styleUrls: ['./mother-view.component.css']
})
export class MotherViewComponent implements OnInit {
  mothers:any=[{}];

  constructor(
    private http: MotherService,
  ) { }

  async ngOnInit() {
    this.mothers = await this.http.getMother();
  }

  bigPrice(price){
    if (Number(price) > 500)
      return true;
    else return false
  }
}
