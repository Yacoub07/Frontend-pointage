import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AjoutuserService } from './ajoutuser.service';
import { ajoututilisateur } from './ajoututilisateur';



@Component({
  selector: 'app-ajoututilisateur',
  templateUrl: './ajoututilisateur.component.html',
  styleUrls: ['./ajoututilisateur.component.css']
})
export class AjoututilisateurComponent implements OnInit {
  public UserForm!: FormGroup;


  isSubmitted  =  false;


  constructor(private ajoutuserService: AjoutuserService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.UserForm=this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(4)]],
      prenom: ['',[Validators.required,Validators.minLength(4)]],
      matricule: ['',[Validators.required,Validators.minLength(4)]],
      telephone: ['',[Validators.required,Validators.minLength(8)]],
      mdp: ['',[Validators.required,Validators.minLength(8)]],
    })
  }


  get formControls() { return this.UserForm.controls; }



  UserFonction(){
    console.log(this.UserForm.value)
    this.ajoutuserService.AjoutEmploye(this.UserForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}
