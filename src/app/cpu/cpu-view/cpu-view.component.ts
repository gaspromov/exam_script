import { Component, OnInit } from '@angular/core';
import { CpuService } from 'src/app/shared/cpu.service';

@Component({
  selector: 'app-cpu-view',
  templateUrl: './cpu-view.component.html',
  styleUrls: ['./cpu-view.component.css']
})
export class CpuViewComponent implements OnInit {

  CPU:any=[{}];
  sortParam: string = '';
  filterParam: string = '';

  constructor(
    private http: CpuService,
  ) { }

  async ngOnInit() {
    this.CPU = await this.http.getCpu();

  }
}
