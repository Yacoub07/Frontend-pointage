import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-ajoutsite',
  templateUrl: './ajoutsite.component.html',
  styleUrls: ['./ajoutsite.component.css']
})
export class AjoutsiteComponent implements OnInit {
  public siteForm!: FormGroup;


  isSubmitted  =  false;


  constructor(private siteservice:SiteService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.siteForm=this.formBuilder.group({
      nomsite: ['',[Validators.required,Validators.minLength(4)]],
      Codesite: ['',[Validators.required,Validators.minLength(4)]],


    })
  }


  get formControls() { return this.siteForm.controls; }



  SiteFonction(){
    console.log(this.siteForm.value)
    this.siteservice.AjoutSite(this.siteForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}
