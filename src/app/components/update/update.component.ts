import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  myForm: FormGroup;
  id = '';
  constructor(
    private fb: FormBuilder,
    public Api: ApiService,
    private actRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sForm();
    this.id = this.actRouter.snapshot.paramMap.get('id');
    this.Api.readMaterial(this.id).subscribe(data => {
      this.myForm.patchValue(data);
    });
  }

  sForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      price: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      created_at: ['', [Validators.required]],
      updated_at: ['', [Validators.required]],
    });
  }

  submitData = () => {
    this.Api.updateMaterial(this.myForm.value, this.id)
      .subscribe(data => {
        this.router.navigate(['']);
    });
  }
}
