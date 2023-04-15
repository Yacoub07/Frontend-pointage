import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AjoutuserService } from '../ajoututilisateur/ajoutuser.service';



@Component({
  selector: 'app-affichutilisateur',
  templateUrl: './affichutilisateur.component.html',
  styleUrls: ['./affichutilisateur.component.css']
})
export class AffichutilisateurComponent implements OnInit {
  public listutilisateurs!:any;


  isSubmitted  =  false;
  image! :File

  constructor(private ajoutuserService: AjoutuserService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.listutilisateur();
  }

  listutilisateur(){
   
    this.ajoutuserService.Affichutilisateur().subscribe({
      next:(data)=>{
      this.listutilisateurs=data
      },error:(erreur)=>{
        console.log(erreur)
      }
    })
    }
}
