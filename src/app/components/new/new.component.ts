import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public Api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sForm();
  }

  sForm() {
    this.myForm = this.fb.group({
      id: [0],
      name: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      price: ['', [Validators.required]],
      stock: ['', [Validators.required]]
    });
  }

  ResetForm() {
    this.myForm.reset();
  }

  submitData = () => {
    this.Api.createMaterial(this.myForm.value)
    .subscribe(data => {
      this.router.navigate(['']);
    });
    // this.ResetForm();
  }

}
