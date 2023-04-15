import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { DispositifService } from '../dispositif.service';

@Component({
  selector: 'app-accueildispositif',
  templateUrl: './accueildispositif.component.html',
  styleUrls: ['./accueildispositif.component.css']
})
export class AccueildispositifComponent implements OnInit {
  public listdispositifs!: any;


  isSubmitted  =  false;


  constructor(private dispositifservice:DispositifService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.listdispositif();
  }


  listdispositif(){
    this.dispositifservice.Affichdispositif().subscribe({
      next:(data)=>{
        this.listdispositifs=data
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}
