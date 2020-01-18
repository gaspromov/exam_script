import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MotherViewComponent } from './mother/mother-view/mother-view.component';
import { MotherEditComponent } from './mother/mother-edit/mother-edit.component';
import { MorherAddComponent } from './mother/morher-add/morher-add.component';
import { CpuViewComponent } from './cpu/cpu-view/cpu-view.component';
import { CpuEditComponent } from './cpu/cpu-edit/cpu-edit.component';
import { CpuAddComponent } from './cpu/cpu-add/cpu-add.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'mother', component: MotherViewComponent},
  { path: 'mother/edit/:id', component: MotherEditComponent },
  { path: 'mother/add', component: MorherAddComponent },
  { path: '/cpu', component: CpuViewComponent },
  { path: 'cpu/edit/:id', component: CpuEditComponent },
  { path: 'cpu/add', component: CpuAddComponent },
  { path: '**', component: MainComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
