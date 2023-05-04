import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { EmployeService } from '../employe.service';
import { ServiceService } from '../../service/service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ajoutempl',
  templateUrl: './ajoutempl.component.html',
  styleUrls: ['./ajoutempl.component.css']
})
export class AjoutemplComponent implements OnInit {
  public emplForm!: FormGroup;
  listeservices:any;
  alert:boolean=false

  isSubmitted  =  false;
  images! :File



  constructor(private employeservice:EmployeService,
    private router: Router,
    private formBuilder: FormBuilder,
    private Servicempl : ServiceService,
    private toastr : ToastrService,)
    {}
  ngOnInit(): void {
    this.getservice();
    this.emplForm=this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(4)]],
      prenom: ['',[Validators.required,Validators.minLength(4)]],
      matricule: ['',[Validators.required,Validators.minLength(4)]],
      telephone: ['',[Validators.required,Validators.minLength(8)]],
      service: ['',[Validators.required,Validators.minLength(8)]],
      poste_emp: ['',[Validators.required,Validators.minLength(8)]],
      photo : ['',[Validators.required]],
    })
  }





  get formControls() { return this.emplForm.controls; }



  EmplFonction(){
    var serviceid={
      "id":this.emplForm.value.service
    }
    this.emplForm.value.service=serviceid

    console.log(this.emplForm.value)
    this.employeservice.AjoutEmpl(this.emplForm.value,this.images).subscribe({
      next:(data)=>{
        console.log(data)
        this.emplForm.reset()
        this.toastr.success("ajouter avec succèss");
        this.router.navigate(["accueildispositif"])


        },error:(erreur)=>{
          console.log(erreur)
          this.toastr.error("Erreur d'ajoute");

        }
    })



    }

    getservice()
    {
      this.Servicempl.Affichservice().subscribe({
        next:(data)=>{
          this.listeservices=data
    }
    })


    }


// METHODE QUI PERMET DE PRENDRE LE FICHIER ET DE L'ASSOCIER AU VARIABLE
onChange(event:any) {
  this.images = event.target.files[0];}
}
