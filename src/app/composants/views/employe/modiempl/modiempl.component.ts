import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { EmployeService } from '../employe.service';
import { ServiceService } from '../../service/service.service';
import {MatBottomSheetModule, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { AccueilemployeComponent } from '../accueilemploye/accueilemploye.component';


@Component({
  selector: 'app-modiempl',
  templateUrl: './modiempl.component.html',
  styleUrls: ['./modiempl.component.css']
})
export class ModiemplComponent {
  bottomSheetRef: any;
  constructeur (){}

  openLink(event: MouseEvent): void {
     this .bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
