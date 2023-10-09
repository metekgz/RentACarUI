import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModelService } from '../../services/model.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css'],
})
export class AddModelComponent implements OnInit {
  modelAdd: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private modelService: ModelService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.addModel();
  }

  addModel() {
    this.modelAdd = this.formBuilder.group({
      name: ['', Validators.required],
      brandId: ['', Validators.required],
    });
  }

  add() {
    if (this.modelAdd.valid) {
      let model = Object.assign({}, this.modelAdd.value);
      this.modelService.addModel(model).subscribe((response) => {
        this.toastrService.success('Model Eklendi');
      });
    } else {
      this.toastrService.error('form eksik veya hatalı');
    }
  }
}
