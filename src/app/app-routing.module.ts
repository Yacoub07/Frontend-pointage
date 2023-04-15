import { Component, NgModule } from '@angular/core';
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
import { AffichuserComponent } from './composants/views/user/affichuser/affichuser.component';
import { GestionuserComponent } from './composants/views/user/gestionuser/gestionuser.component';
import { AjoututilisateurComponent } from './composants/views/utilisateur/ajoututilisateur/ajoututilisateur.component';
import { GestionutilisateurComponent } from './composants/views/utilisateur/gestionutilisateur/gestionutilisateur.component';
import { AccueilabsenceComponent } from './composants/views/absence/accueilabsence/accueilabsence.component';
import { AccueilcongeComponent } from './composants/views/conge/accueilconge/accueilconge.component';
import { AccueildispositifComponent } from './composants/views/dispositif/accueildispositif/accueildispositif.component';
import { AccueilemployeComponent } from './composants/views/employe/accueilemploye/accueilemploye.component';
import { AccueillocaliteComponent } from './composants/views/localite/accueillocalite/accueillocalite.component';
import { AccueilmissionComponent } from './composants/views/mutation/accueilmission/accueilmission.component';
import { AccueilmutationComponent } from './composants/views/mutation/accueilmutation/accueilmutation.component';
import { AccueilretardComponent } from './composants/views/retard/accueilretard/accueilretard.component';
import { AccueilserviceComponent } from './composants/views/service/accueilservice/accueilservice.component';
import { AccueilsiteComponent } from './composants/views/sites/accueilsite/accueilsite.component';
import { AccueiluserComponent } from './composants/views/user/accueiluser/accueiluser.component';
import { AccueilutilisateurComponent } from './composants/views/utilisateur/accueilutilisateur/accueilutilisateur.component';
import { GestionComponent } from './composants/views/gestion/gestion.component';
import { AccueillogsComponent } from './composants/views/logs/accueillogs/accueillogs.component';
import { AffichpointagesComponent } from './composants/views/pointages/affichpointages/affichpointages.component';
import { AjoutpointagesComponent } from './composants/views/pointages/ajoutpointages/ajoutpointages.component';
import { ListpointagesComponent } from './composants/views/pointages/listpointages/listpointages.component';
import { ListutilisateurComponent } from './composants/views/utilisateur/listutilisateur/listutilisateur.component';
import { AffichutilisateurComponent } from './composants/views/utilisateur/affichutilisateur/affichutilisateur.component';
import { AjoutserviceComponent } from './composants/views/service/ajoutservice/ajoutservice.component';
import { AffichserviceComponent } from './composants/views/service/affichservice/affichservice.component';
import { GestserviceComponent } from './composants/views/service/gestservice/gestservice.component';
import { ListserviceComponent } from './composants/views/service/listservice/listservice.component';
import { AjoutsiteComponent } from './composants/views/sites/ajoutsite/ajoutsite.component';
import { ListsiteComponent } from './composants/views/sites/listsite/listsite.component';
import { PointasiteComponent } from './composants/views/sites/pointasite/pointasite.component';
import { AjoutlogsComponent } from './composants/views/logs/ajoutlogs/ajoutlogs.component';
import { GestlogsComponent } from './composants/views/logs/gestlogs/gestlogs.component';
import { ListlogsComponent } from './composants/views/logs/listlogs/listlogs.component';
import { AjoutmissionComponent } from './composants/views/mission/ajoutmission/ajoutmission.component';
import { AffichmissionComponent } from './composants/views/mission/affichmission/affichmission.component';
import { GestmissionComponent } from './composants/views/mission/gestmission/gestmission.component';
import { ListmissionComponent } from './composants/views/mission/listmission/listmission.component';
import { AffichmutationComponent } from './composants/views/mutation/affichmutation/affichmutation.component';
import { AjoutmutationComponent } from './composants/views/mutation/ajoutmutation/ajoutmutation.component';
import { GestmutationComponent } from './composants/views/mutation/gestmutation/gestmutation.component';
import { ListmutationComponent } from './composants/views/mutation/listmutation/listmutation.component';
import { AffichretardComponent } from './composants/views/retard/affichretard/affichretard.component';
import { AjoutretardComponent } from './composants/views/retard/ajoutretard/ajoutretard.component';
import { GestretardComponent } from './composants/views/retard/gestretard/gestretard.component';
import { ListretardComponent } from './composants/views/retard/listretard/listretard.component';
import { PointalocalitComponent } from './composants/views/localite/pointalocalit/pointalocalit.component';
import { CommuneComponent } from './composants/views/localite/loctype/commune/commune.component';
import { PaysComponent } from './composants/views/localite/loctype/pays/pays.component';
import { QuartierComponent } from './composants/views/localite/loctype/quartier/quartier.component';
import { PointagesService } from './composants/views/pointages/pointages.service';
import { PointadispositifComponent } from './composants/views/dispositif/pointadispositif/pointadispositif.component';
import { AccueilcommuneComponent } from './composants/views/localite/loctype/commune/accueilcommune/accueilcommune.component';
import { AjoutcommuneComponent } from './composants/views/localite/loctype/commune/ajoutcommune/ajoutcommune.component';
import { AccueilpaysComponent } from './composants/views/localite/loctype/pays/accueilpays/accueilpays.component';
import { AjoutpaysComponent } from './composants/views/localite/loctype/pays/ajoutpays/ajoutpays.component';
import { AccueilquartierComponent } from './composants/views/localite/loctype/quartier/accueilquartier/accueilquartier.component';
import { AjoutquartierComponent } from './composants/views/localite/loctype/quartier/ajoutquartier/ajoutquartier.component';
import { AccueilregionComponent } from './composants/views/localite/loctype/region/accueilregion/accueilregion.component';
import { AjoutregionComponent } from './composants/views/localite/loctype/region/ajoutregion/ajoutregion.component';
import { AccueilvilleComponent } from './composants/views/localite/loctype/ville/accueilville/accueilville.component';
import { AjoutvilleComponent } from './composants/views/localite/loctype/ville/ajoutville/ajoutville.component';
import { VilleComponent } from './composants/views/localite/loctype/ville/ville.component';
import { RegionComponent } from './composants/views/localite/loctype/region/region.component';
import { PointacommuneComponent } from './composants/views/localite/loctype/commune/pointacommune/pointacommune.component';
import { PointapaysComponent } from './composants/views/localite/loctype/pays/pointapays/pointapays.component';
import { PointaquartierComponent } from './composants/views/localite/loctype/quartier/pointaquartier/pointaquartier.component';
import { PointaregionComponent } from './composants/views/localite/loctype/region/pointaregion/pointaregion.component';
import { PointavilleComponent } from './composants/views/localite/loctype/ville/pointaville/pointaville.component';
import { ModiemplComponent } from './composants/views/employe/modiempl/modiempl.component';


const routes: Routes = [

  //authentification route

  {path: '', pathMatch: 'full', redirectTo: 'Login'},
  { path: 'login', component: LoginComponent },
  { path: 'consigne', component: ConsignadminComponent },




  // service accueil des composants
  {path:'accueilabsence', component:AccueilabsenceComponent},
  {path:'accueilconge', component:AccueilcongeComponent},
  {path:'accueildispositif', component:AccueildispositifComponent},
  {path:'accueilemploye', component:AccueilemployeComponent},
  {path:'accueillocalite', component:AccueillocaliteComponent},
  {path:'accueilmission', component:AccueilmissionComponent},
  {path:'accueilmutation', component:AccueilmutationComponent},
  {path:'accueilpointage', component:AccueilpointageComponent},
  {path:'accueilretard', component:AccueilretardComponent},
  {path:'accueilservice', component:AccueilserviceComponent},
  {path:'accueilsite', component:AccueilsiteComponent},
  {path:'accueiluser', component:AccueiluserComponent},
  {path:'accueilutilisateur', component: AccueilutilisateurComponent},
  {path:'accueilgestion', component:GestionComponent},
  {path:'accueillogs', component:AccueillogsComponent},

  {path:'deconnexion', component:LoginComponent},





      //route absence
      {path:'accueilabsence', component:AccueilabsenceComponent},
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
      {path:'modifempl', component: ModiemplComponent},

      //route localite
      {path:'affichlocalit', component: AffichlocalitComponent},
      {path:'ajoutlocalit', component: AjoutlocalitComponent},
      {path:'gestlocalit', component: GestlocalitComponent},
      {path:'listlocalite', component: ListlocalitComponent},
      {path:'supplocalit', component: SupplocalitComponent},


      //route user
      {path:'affichuser', component:AffichuserComponent },
      {path:'gestionuser', component:GestionuserComponent},
      {path:'ajoututilisateur', component: AjoututilisateurComponent},
      {path:'gestionutilisateur', component: GestionutilisateurComponent},


      //route utilisateur
      {path:'listutilisateur', component:ListutilisateurComponent},
      {path:'ajoututilisateur', component:AjoututilisateurComponent},
      {path:'affichutilisateur', component:AffichutilisateurComponent},


      //route pointages
      {path:'affichepointage', component:AffichpointagesComponent},
      {path:'ajoutpointage', component:AjoutpointagesComponent},
      {path:'listpointage', component:ListpointagesComponent},
      //pointages par rubrique
      {path:'pointalocalit', component:PointalocalitComponent}, //localite
      {path:'pointagesite', component:PointasiteComponent}, //site
      {path:'pointageservice', component:PointagesService}, //service
      {path:'pointadispositif', component:PointadispositifComponent}, //dispositif

            //route pointage localite
            {path:'pointacommune', component:PointacommuneComponent}, //commune
            {path:'pointapays', component:PointapaysComponent}, //pays
            {path:'pointaquartier', component:PointaquartierComponent}, //quartier
            {path:'pointaregion', component:PointaregionComponent}, //region
            {path:'pointaville', component:PointavilleComponent}, //ville







      //route services
      {path:'ajoutservice', component:AjoutserviceComponent},
      {path:'affichservice', component:AffichserviceComponent},
      {path:'gestservice', component:GestserviceComponent},
      {path:'listservice', component:ListserviceComponent},

      //route site
      {path:'ajoutsite', component:AjoutsiteComponent},
      {path:'listesite', component:ListsiteComponent},
      {path:'pointasite', component:PointasiteComponent},

      //route logs
      {path:'ajoutlogs', component:AjoutlogsComponent},
      {path:'gestlogs', component:GestlogsComponent},
      {path:'listlogs', component:ListlogsComponent},

      //route mission
      {path:'accueilmission', component: AccueilmissionComponent},
      {path:'ajoutmission', component:AjoutmissionComponent},
      {path:'affichmission', component:AffichmissionComponent},
      {path:'gestmission', component:GestmissionComponent},
      {path:'listmission', component:ListmissionComponent},

      //route mutation
      {path:'accueilmutation', component:AccueilmutationComponent},
      {path:'affichmutation', component:AffichmutationComponent},
      {path:'ajoutmutation', component:AjoutmutationComponent},
      {path:'gestmutation', component:GestmutationComponent},
      {path:'listmutation', component:ListmutationComponent},

      //route retard
      {path:'accueilretard', component:AccueilretardComponent},
      {path:'affichretard', component:AffichretardComponent},
      {path:'ajoutretard', component:AjoutretardComponent},
      {path:'gestretard', component:GestretardComponent},
      {path:'listretard', component:ListretardComponent},

      //route localite
      {path:'ajoutlocalite', component:AjoutlocalitComponent},
      {path:'gestlocalolit', component:GestlocalitComponent},
      {path:'listlocalt', component:ListlocalitComponent},

      //sous rubrique localite
      {path:'commune', component:CommuneComponent},
      {path:'pays', component: PaysComponent},
      {path:'quartier', component: QuartierComponent},
      {path:'ville', component: VilleComponent},
      {path:'region', component: RegionComponent},

      //route commune
      {path:'accueilcommune', component:AccueilcommuneComponent},
      {path:'ajoutcommune', component:AjoutcommuneComponent},


      //route pays
      {path:'accueilpays', component:AccueilpaysComponent},
      {path:'ajoutpays', component:AjoutpaysComponent},

      //route quartier
      {path:'accueilquartier', component:AccueilquartierComponent},
      {path:'ajoutquartier', component:AjoutquartierComponent},


      //route region
      {path:'accueilregion', component:AccueilregionComponent},
      {path:'ajoutregion', component:AjoutregionComponent},


      //route ville
      {path:'accueilville', component:AccueilvilleComponent},
      {path:'ajoutville', component:AjoutvilleComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
