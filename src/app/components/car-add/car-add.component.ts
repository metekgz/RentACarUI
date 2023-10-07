import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit{
  
  carAdd:FormGroup;
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    
  }

  createCar(){
    this.carAdd = this.formBuilder.group({
      modelName:["",Validators.required],
      dailyPrice:["",Validators.required],
      plate:["",Validators.required],
    })
  }

}
