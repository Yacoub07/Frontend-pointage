import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { SiteService } from '../site.service';
import { ServiceService } from '../../service/service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ajoutsite',
  templateUrl: './ajoutsite.component.html',
  styleUrls: ['./ajoutsite.component.css']
})
export class AjoutsiteComponent implements OnInit {
  public siteForm!: FormGroup;
  listeservices:any;


  isSubmitted  =  false;


  constructor(private siteservice:SiteService,
    private router: Router,
    private formBuilder: FormBuilder,
    private Servicempl : ServiceService,
    private toastr : ToastrService,
    )
    {}
  ngOnInit(): void {
    this.getservice();
    this.siteForm=this.formBuilder.group({
      nomsite: ['',[Validators.required,Validators.minLength(4)]],
      Codesite: ['',[Validators.required,Validators.minLength(4)]],
      service: ['',[Validators.required,Validators.minLength(8)]],


    })
  }
  getservice() {
    this.Servicempl.Affichservice().subscribe({
      next:(data)=>{
        this.listeservices=data
  }
  })
  }


  get formControls() { return this.siteForm.controls; }



  SiteFonction(){
    var serviceid={
      "id":this.siteForm.value.service
    }
    this.siteForm.value.service=serviceid
    console.log(this.siteForm.value)
    this.siteservice.AjoutSite(this.siteForm.value).subscribe({
      next:(data)=>{
console.log(data)
this.siteForm.reset()
this.toastr.success("Site ajouter avec succèss");
this.router.navigate(["accueilsite"])

      },error:(erreur)=>{
        console.log(erreur)
        this.toastr.error("Erreur d'ajoute");
      }
    })



    }

}
