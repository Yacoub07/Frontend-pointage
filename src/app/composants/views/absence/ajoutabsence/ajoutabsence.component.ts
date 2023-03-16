import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutService,  } from 'src/app/composants/authentification/aut.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajoutabsence',
  templateUrl: './ajoutabsence.component.html',
  styleUrls: ['./ajoutabsence.component.css']
})
export class AjoutabsenceComponent implements OnInit {

  public ajoutabsencForm!: FormGroup;
  isSubmitted=false;

  constructor(private ajoutabsenceservice:AutService,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.ajoutabsencForm=this.formBuilder.group
    (
      {
        prenom: ['',[Validators.required,Validators.minLength(4)]],
        nom: ['',[Validators.required,Validators.minLength(4)]],
        matricule: ['',[Validators.required,Validators.minLength(4)]],
        motif: ['',[Validators.required,Validators.minLength(4)]],
        date: ['',[Validators.required,Validators.minLength(4)]],
      }
    )
  }

  

}
