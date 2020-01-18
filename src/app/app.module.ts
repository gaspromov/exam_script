import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MorherAddComponent } from './mother/morher-add/morher-add.component';
import { MotherViewComponent } from './mother/mother-view/mother-view.component';
import { MotherEditComponent } from './mother/mother-edit/mother-edit.component';
import { MainComponent } from './main/main.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortFilterPipe } from './shared/sort-filter.pipe';
import { CpuAddComponent } from './cpu/cpu-add/cpu-add.component';
import { CpuEditComponent } from './cpu/cpu-edit/cpu-edit.component';
import { CpuViewComponent } from './cpu/cpu-view/cpu-view.component';
import { VideoAddComponent } from './video/video-add/video-add.component';
import { VideoViewComponent } from './video/video-view/video-view.component';
import { VideoEditComponent } from './video/video-edit/video-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MorherAddComponent,
    MotherViewComponent,
    MotherEditComponent,
    MainComponent,
    SortFilterPipe,
    CpuAddComponent,
    CpuEditComponent,
    CpuViewComponent,
    VideoAddComponent,
    VideoViewComponent,
    VideoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
