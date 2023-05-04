import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AjoutuserService } from './ajoutuser.service';
import { ajoututilisateur } from './ajoututilisateur';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-ajoututilisateur',
  templateUrl: './ajoututilisateur.component.html',
  styleUrls: ['./ajoututilisateur.component.css']
})
export class AjoututilisateurComponent implements OnInit {
  public UserForm!: FormGroup;


  isSubmitted  =  false;
  image! :File

  constructor(private ajoutuserService: AjoutuserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr : ToastrService,
    )
    {}
  ngOnInit(): void {
    this.UserForm=this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(4)]],
      prenom: ['',[Validators.required,Validators.minLength(4)]],
      matricule: ['',[Validators.required,Validators.minLength(4)]],
      telephone: ['',[Validators.required,Validators.minLength(8)]],
      email : ['',[Validators.required,Validators.minLength(4)]],
      photo : ['',[Validators.required]],
    })
  }

  // METHODE QUI PERMET DE PRENDRE LE FICHIER ET DE L'ASSOCIER AU VARIABLE
  onChange(event:any) {
    this.image = event.target.files[0];

}

  get formControls(){ return this.UserForm.controls; }


  UserFonction(){
    console.log(this.UserForm.value  )
    this.ajoutuserService.AjoutAdminEwaati(this.UserForm.value,this.image ).subscribe({
      next:(data)=>{
      console.log(data)
      this.UserForm.reset()
      this.toastr.success("Utilisateur ajouter avec succèss");
      this.router.navigate(["accueilutilisateur"])


      },error:(erreur)=>{
        console.log(erreur)
        this.toastr.error("Erreur d'ajoute");
      }
    })



    }

}
