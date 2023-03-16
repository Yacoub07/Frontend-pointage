import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/views/accueil/header/header.component';
import { FooterComponent } from './composants/views/accueil/footer/footer.component';
import { DashboardComponent } from './composants/views/accueil/dashboard/dashboard.component';
import { LoginComponent } from './composants/authentification/login/login.component';
import { RegistreComponent } from './composants/authentification/registre/registre.component';
import { ConsignadminComponent } from './composants/authentification/consignadmin/consignadmin.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AjoutabsenceComponent } from './composants/views/absence/ajoutabsence/ajoutabsence.component';
import { AffichabsenceComponent } from './composants/views/absence/affichabsence/affichabsence.component';
import { ListabsenceComponent } from './composants/views/absence/listabsence/listabsence.component';
import { ListcongeComponent } from './composants/views/conge/listconge/listconge.component';
import { AjoutcongeComponent } from './composants/views/conge/ajoutconge/ajoutconge.component';
import { AffichcongeComponent } from './composants/views/conge/affichconge/affichconge.component';
import { AffichdispositifComponent } from './composants/views/dispositif/affichdispositif/affichdispositif.component';
import { ListdispositifComponent } from './composants/views/dispositif/listdispositif/listdispositif.component';
import { AjoutdispositifComponent } from './composants/views/dispositif/ajoutdispositif/ajoutdispositif.component';
import { SuppdispositifComponent } from './composants/views/dispositif/suppdispositif/suppdispositif.component';
import { SuppemplComponent } from './composants/views/employe/suppempl/suppempl.component';
import { AffichemplComponent } from './composants/views/employe/affichempl/affichempl.component';
import { ListemplComponent } from './composants/views/employe/listempl/listempl.component';
import { AjoutemplComponent } from './composants/views/employe/ajoutempl/ajoutempl.component';
import { AjoutlocalitComponent } from './composants/views/localite/ajoutlocalit/ajoutlocalit.component';
import { ListlocalitComponent } from './composants/views/localite/listlocalit/listlocalit.component';
import { SupplocalitComponent } from './composants/views/localite/supplocalit/supplocalit.component';
import { AffichlocalitComponent } from './composants/views/localite/affichlocalit/affichlocalit.component';
import { AffichmissionComponent } from './composants/views/mission/affichmission/affichmission.component';
import { AjoutmissionComponent } from './composants/views/mission/ajoutmission/ajoutmission.component';
import { ListmissionComponent } from './composants/views/mission/listmission/listmission.component';
import { ListmutationComponent } from './composants/views/mutation/listmutation/listmutation.component';
import { AffichmutationComponent } from './composants/views/mutation/affichmutation/affichmutation.component';
import { AjoutmutationComponent } from './composants/views/mutation/ajoutmutation/ajoutmutation.component';
import { AjoutpointagesComponent } from './composants/views/pointages/ajoutpointages/ajoutpointages.component';
import { ListpointagesComponent } from './composants/views/pointages/listpointages/listpointages.component';
import { AffichpointagesComponent } from './composants/views/pointages/affichpointages/affichpointages.component';
import { AffichretardComponent } from './composants/views/retard/affichretard/affichretard.component';
import { AjoutretardComponent } from './composants/views/retard/ajoutretard/ajoutretard.component';
import { ListretardComponent } from './composants/views/retard/listretard/listretard.component';
import { ListserviceComponent } from './composants/views/service/listservice/listservice.component';
import { AffichserviceComponent } from './composants/views/service/affichservice/affichservice.component';
import { SuppserviceComponent } from './composants/views/service/suppservice/suppservice.component';
import { AjoutserviceComponent } from './composants/views/service/ajoutservice/ajoutservice.component';
import { AjoutsiteComponent } from './composants/views/sites/ajoutsite/ajoutsite.component';
import { AffichsiteComponent } from './composants/views/sites/affichsite/affichsite.component';
import { ListsiteComponent } from './composants/views/sites/listsite/listsite.component';
import { AjoutadminComponent } from './composants/views/user/admin/ajoutadmin/ajoutadmin.component';
import { AffichadminComponent } from './composants/views/user/admin/affichadmin/affichadmin.component';
import { ListadminComponent } from './composants/views/user/admin/listadmin/listadmin.component';
import { SuppadminComponent } from './composants/views/user/admin/suppadmin/suppadmin.component';
import { SuppsuperadminComponent } from './composants/views/user/superadmin/suppsuperadmin/suppsuperadmin.component';
import { AjoutsuperadminComponent } from './composants/views/user/superadmin/ajoutsuperadmin/ajoutsuperadmin.component';
import { ListsuperadminComponent } from './composants/views/user/superadmin/listsuperadmin/listsuperadmin.component';
import { AffichsuperadminComponent } from './composants/views/user/superadmin/affichsuperadmin/affichsuperadmin.component';

import { AjoutewaatiComponent } from './composants/views/user/ewaati/ajoutewaati/ajoutewaati.component';
import { AffichewaatiComponent } from './composants/views/user/ewaati/affichewaati/affichewaati.component';
import { ListeewaatiComponent } from './composants/views/user/ewaati/listeewaati/listeewaati.component';
import { SuppewaatiComponent } from './composants/views/user/ewaati/suppewaati/suppewaati.component';
import { GestabsenceComponent } from './composants/views/absence/gestabsence/gestabsence.component';
import { GestaccueilComponent } from './composants/views/accueil/gestaccueil/gestaccueil.component';
import { GestcongeComponent } from './composants/views/conge/gestconge/gestconge.component';
import { GestdispositifComponent } from './composants/views/dispositif/gestdispositif/gestdispositif.component';
import { GestemplComponent } from './composants/views/employe/gestempl/gestempl.component';
import { GestlocalitComponent } from './composants/views/localite/gestlocalit/gestlocalit.component';
import { GestmissionComponent } from './composants/views/mission/gestmission/gestmission.component';
import { GestmutationComponent } from './composants/views/mutation/gestmutation/gestmutation.component';
import { GestpointageComponent } from './composants/views/pointages/gestpointage/gestpointage.component';
import { GestretardComponent } from './composants/views/retard/gestretard/gestretard.component';
import { GestserviceComponent } from './composants/views/service/gestservice/gestservice.component';
import { GestsiteComponent } from './composants/views/sites/gestsite/gestsite.component';
import { GestuserComponent } from './composants/views/user/gestuser/gestuser.component';
import { NavbarComponent } from './composants/views/accueil/header/navbar/navbar.component';
import { NavComponent } from './composants/views/accueil/header/nav/nav.component';
import { RubriqueComponent } from './composants/views/accueil/header/rubrique/rubrique.component';
import { ListuserComponent } from './composants/views/user/listuser/listuser.component';
import { GestionuserComponent } from './composants/views/user/gestionuser/gestionuser.component';
import { AffichuserComponent } from './composants/views/user/affichuser/affichuser.component';
import { UserinterfaceComponent } from './composants/views/user/userinterface/userinterface.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilpointageComponent } from './composants/views/pointages/accueilpointage/accueilpointage.component';
import { LoginInterceptorProvider } from './composants/authentification/login/login.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegistreComponent,
    ConsignadminComponent,
    AjoutabsenceComponent,
    AffichabsenceComponent,
    ListabsenceComponent,
    ListcongeComponent,
    AjoutcongeComponent,
    AffichcongeComponent,
    AffichdispositifComponent,
    ListdispositifComponent,
    AjoutdispositifComponent,
    SuppdispositifComponent,
    SuppemplComponent,
    AffichemplComponent,
    ListemplComponent,
    AjoutemplComponent,
    AjoutlocalitComponent,
    ListlocalitComponent,
    SupplocalitComponent,
    AffichlocalitComponent,
    AffichmissionComponent,
    AjoutmissionComponent,
    ListmissionComponent,
    ListmutationComponent,
    AffichmutationComponent,
    AjoutmutationComponent,
    AjoutpointagesComponent,
    ListpointagesComponent,
    AffichpointagesComponent,
    AffichretardComponent,
    AjoutretardComponent,
    ListretardComponent,
    ListserviceComponent,
    AffichserviceComponent,
    SuppserviceComponent,
    AjoutserviceComponent,
    AjoutsiteComponent,
    AffichsiteComponent,
    ListsiteComponent,
    AjoutadminComponent,
    AffichadminComponent,
    ListadminComponent,
    SuppadminComponent,
    SuppsuperadminComponent,
    AjoutsuperadminComponent,
    ListsuperadminComponent,
    AffichsuperadminComponent,
    
    AjoutewaatiComponent,
    AffichewaatiComponent,
    ListeewaatiComponent,
    SuppewaatiComponent,
    GestabsenceComponent,
    GestaccueilComponent,
    GestcongeComponent,
    GestdispositifComponent,
    GestemplComponent,
    GestlocalitComponent,
    GestmissionComponent,
    GestmutationComponent,
    GestpointageComponent,
    GestretardComponent,
    GestserviceComponent,
    GestsiteComponent,
    GestuserComponent,
    NavbarComponent,
    NavComponent,
    RubriqueComponent,
    ListuserComponent,
    GestionuserComponent,
    AffichuserComponent,
    UserinterfaceComponent,
    AccueilpointageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   
  

  ],
  providers: [LoginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
