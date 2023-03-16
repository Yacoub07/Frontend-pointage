import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsignadminComponent } from './composants/authentification/consignadmin/consignadmin.component';
import { LoginComponent } from './composants/authentification/login/login.component';
import { AuthGuard } from './composants/authentification/auth.guard';
import { AffichabsenceComponent } from './composants/views/absence/affichabsence/affichabsence.component';
import { AjoutabsenceComponent } from './composants/views/absence/ajoutabsence/ajoutabsence.component';
import { GestabsenceComponent } from './composants/views/absence/gestabsence/gestabsence.component';
import { ListabsenceComponent } from './composants/views/absence/listabsence/listabsence.component';
import { DashboardComponent } from './composants/views/accueil/dashboard/dashboard.component';
import { FooterComponent } from './composants/views/accueil/footer/footer.component';
import { GestaccueilComponent } from './composants/views/accueil/gestaccueil/gestaccueil.component';
import { HeaderComponent } from './composants/views/accueil/header/header.component';
import { NavComponent } from './composants/views/accueil/header/nav/nav.component';
import { NavbarComponent } from './composants/views/accueil/header/navbar/navbar.component';
import { AffichcongeComponent } from './composants/views/conge/affichconge/affichconge.component';
import { AjoutcongeComponent } from './composants/views/conge/ajoutconge/ajoutconge.component';
import { GestcongeComponent } from './composants/views/conge/gestconge/gestconge.component';
import { ListcongeComponent } from './composants/views/conge/listconge/listconge.component';
import { AffichdispositifComponent } from './composants/views/dispositif/affichdispositif/affichdispositif.component';
import { AjoutdispositifComponent } from './composants/views/dispositif/ajoutdispositif/ajoutdispositif.component';
import { GestdispositifComponent } from './composants/views/dispositif/gestdispositif/gestdispositif.component';
import { ListdispositifComponent } from './composants/views/dispositif/listdispositif/listdispositif.component';
import { SuppdispositifComponent } from './composants/views/dispositif/suppdispositif/suppdispositif.component';
import { AffichemplComponent } from './composants/views/employe/affichempl/affichempl.component';
import { AjoutemplComponent } from './composants/views/employe/ajoutempl/ajoutempl.component';
import { GestemplComponent } from './composants/views/employe/gestempl/gestempl.component';
import { ListemplComponent } from './composants/views/employe/listempl/listempl.component';
import { SuppemplComponent } from './composants/views/employe/suppempl/suppempl.component';
import { AffichlocalitComponent } from './composants/views/localite/affichlocalit/affichlocalit.component';
import { AjoutlocalitComponent } from './composants/views/localite/ajoutlocalit/ajoutlocalit.component';
import { GestlocalitComponent } from './composants/views/localite/gestlocalit/gestlocalit.component';
import { ListlocalitComponent } from './composants/views/localite/listlocalit/listlocalit.component';
import { SupplocalitComponent } from './composants/views/localite/supplocalit/supplocalit.component';
import { AccueilpointageComponent } from './composants/views/pointages/accueilpointage/accueilpointage.component';


const routes: Routes = [

  //authentification route

  {path: '', pathMatch: 'full', redirectTo: 'Login'},
  { path: 'Login', component: LoginComponent },
  { path: 'consigne', component: ConsignadminComponent },


  

      //route absence
      {path:'affichabsence', component:AffichabsenceComponent}, 
      {path:'ajoutabsence', component: AjoutabsenceComponent},
      {path:'gestabsence', component: GestabsenceComponent},
      {path:'listabsence', component: ListabsenceComponent},

      //route accueil
      {path:'dashboard', component: DashboardComponent},
      {path:'footer', component: FooterComponent},
      {path:'gestaccueil', component: GestaccueilComponent},
      {path:'header', component: HeaderComponent},
            //sous rubrique header
            {path:'nav', component:NavComponent},
            {path:'navbar', component: NavbarComponent},
      
      //route conge
      {path:'affichconge', component: AffichcongeComponent},
      {path:'ajoutconge', component: AjoutcongeComponent},
      {path:'gestconge', component: GestcongeComponent},
      {path:'listconge', component: ListcongeComponent},


      //route dispositif
      {path:'affichdispositif', component: AffichdispositifComponent},
      {path:'ajoutdispositif', component: AjoutdispositifComponent},
      {path:'gestdispositif', component: GestdispositifComponent},
      {path:'listdispositif', component: ListdispositifComponent},
      {path:'supprdispositif', component: SuppdispositifComponent},


      //route employe
      {path:'affichempl', component: AffichemplComponent},
      {path:'ajoutempl', component: AjoutemplComponent},
      {path:'gestempl', component: GestemplComponent},
      {path:'listempl', component: ListemplComponent},
      {path:'suppempl', component: SuppemplComponent}, 

      //route localite
      {path:'affichlocalit', component: AffichlocalitComponent},
      {path:'ajoutlocalit', component: AjoutlocalitComponent},
      {path:'gestlocalit', component: GestlocalitComponent},
      {path:'listlocalite', component: ListlocalitComponent},
      {path:'supplocalit', component: SupplocalitComponent},


      {path:'accueilpointage', component:AccueilpointageComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
