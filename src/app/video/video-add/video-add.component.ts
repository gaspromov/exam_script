import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-add',
  templateUrl: './video-add.component.html',
  styleUrls: ['./video-add.component.css']
})
export class VideoAddComponent implements OnInit {
  formAdd: FormGroup;
  disabled = false;


  constructor(
    private http: VideoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.formAdd = new FormGroup({
      name: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      article: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      price: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      v: new FormControl({ value: '', disabled: this.disabled }, [Validators.required])
    })
  }

  async add(){
    try{
      await this.http.postVideo(
        {
          name: this.formAdd.value.name,
          article: this.formAdd.value.article,
          price: this.formAdd.value.price,
          v: this.formAdd.value.v
        }
      )
      this.router.navigate(['/video']);
    }catch(e){
      console.log(e);
    }
  }
}
