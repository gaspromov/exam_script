import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MotherService } from 'src/app/shared/mother.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-morher-add',
  templateUrl: './morher-add.component.html',
  styleUrls: ['./morher-add.component.css']
})
export class MorherAddComponent implements OnInit {
  formAdd: FormGroup;
  disabled = false;


  constructor(
    private http: MotherService,
    private router: Router
    ) { }

  ngOnInit() {
    this.formAdd = new FormGroup({
      name: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      article: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.pattern("^[0-9]{0,}")]),
      price: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.pattern("^[0-9]{0,}")]),
      chipset: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      formFactor: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
    })
  }

  async add(){
    try{
      await this.http.postMother(
          this.formAdd.value
        
      )
      this.router.navigate(['/mother']);
    }catch(e){
      console.log(e);
    }
  }

}
