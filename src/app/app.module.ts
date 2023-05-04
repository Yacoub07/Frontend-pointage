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
import { EwaatiComponent } from './composants/views/user/ewaati/ewaati/ewaati.component';
import { AjoututilisateurComponent } from './composants/views/utilisateur/ajoututilisateur/ajoututilisateur.component';
import { AffichutilisateurComponent } from './composants/views/utilisateur/affichutilisateur/affichutilisateur.component';
import { SupputilisateurComponent } from './composants/views/utilisateur/supputilisateur/supputilisateur.component';
import { ListutilisateurComponent } from './composants/views/utilisateur/listutilisateur/listutilisateur.component';
import { PaysComponent } from './composants/views/localite/loctype/pays/pays.component';
import { VilleComponent } from './composants/views/localite/loctype/ville/ville.component';
import { QuartierComponent } from './composants/views/localite/loctype/quartier/quartier.component';
import { CommuneComponent } from './composants/views/localite/loctype/commune/commune.component';
import { RegionComponent } from './composants/views/localite/loctype/region/region.component';
import { GestionutilisateurComponent } from './composants/views/utilisateur/gestionutilisateur/gestionutilisateur.component';
import { AlerteComponent } from './composants/authentification/alerte/alerte.component';
import { AccueilabsenceComponent } from './composants/views/absence/accueilabsence/accueilabsence.component';
import { AccueilcongeComponent } from './composants/views/conge/accueilconge/accueilconge.component';
import { AccueildispositifComponent } from './composants/views/dispositif/accueildispositif/accueildispositif.component';
import { AccueilemployeComponent } from './composants/views/employe/accueilemploye/accueilemploye.component';
import { AccueilmissionComponent } from './composants/views/mutation/accueilmission/accueilmission.component';
import { AccueilmutationComponent } from './composants/views/mutation/accueilmutation/accueilmutation.component';
import { AccueilretardComponent } from './composants/views/retard/accueilretard/accueilretard.component';
import { AccueilserviceComponent } from './composants/views/service/accueilservice/accueilservice.component';
import { AccueilsiteComponent } from './composants/views/sites/accueilsite/accueilsite.component';
import { AccueiluserComponent } from './composants/views/user/accueiluser/accueiluser.component';
import { AccueilutilisateurComponent } from './composants/views/utilisateur/accueilutilisateur/accueilutilisateur.component';
import { AccueillocaliteComponent } from './composants/views/localite/accueillocalite/accueillocalite.component';
import { GestionComponent } from './composants/views/gestion/gestion.component';
import { AccueillogsComponent } from './composants/views/logs/accueillogs/accueillogs.component';
import { AjoutlogsComponent } from './composants/views/logs/ajoutlogs/ajoutlogs.component';
import { ListlogsComponent } from './composants/views/logs/listlogs/listlogs.component';
import { IconrechutilisateurComponent } from './composants/views/utilisateur/iconrechutilisateur/iconrechutilisateur.component';
import { ListutilComponent } from './composants/views/utilisateur/listutil/listutil.component';
import { FormserviceComponent } from './composants/views/service/formservice/formservice.component';
import { ListpointComponent } from './composants/views/pointages/listpoint/listpoint.component';
import { PointaemplComponent } from './composants/views/employe/pointaempl/pointaempl.component';
import { PointalocalitComponent } from './composants/views/localite/pointalocalit/pointalocalit.component';
import { PointaserviceComponent } from './composants/views/service/pointaservice/pointaservice.component';
import { PointasiteComponent } from './composants/views/sites/pointasite/pointasite.component';
import { PointadispositifComponent } from './composants/views/dispositif/pointadispositif/pointadispositif.component';
import { IconsiteComponent } from './composants/views/sites/iconsite/iconsite.component';
import { IconeComponent } from './composants/views/dispositif/icone/icone.component';
import { GestlogsComponent } from './composants/views/logs/gestlogs/gestlogs.component';
import { IconlogsComponent } from './composants/views/logs/iconlogs/iconlogs.component';
import { AccueilcommuneComponent } from './composants/views/localite/loctype/commune/accueilcommune/accueilcommune.component';
import { AccueilpaysComponent } from './composants/views/localite/loctype/pays/accueilpays/accueilpays.component';
import { AccueilquartierComponent } from './composants/views/localite/loctype/quartier/accueilquartier/accueilquartier.component';
import { AccueilregionComponent } from './composants/views/localite/loctype/region/accueilregion/accueilregion.component';
import { AccueilvilleComponent } from './composants/views/localite/loctype/ville/accueilville/accueilville.component';
import { AjoutcommuneComponent } from './composants/views/localite/loctype/commune/ajoutcommune/ajoutcommune.component';
import { AjoutpaysComponent } from './composants/views/localite/loctype/pays/ajoutpays/ajoutpays.component';
import { AjoutquartierComponent } from './composants/views/localite/loctype/quartier/ajoutquartier/ajoutquartier.component';
import { AjoutregionComponent } from './composants/views/localite/loctype/region/ajoutregion/ajoutregion.component';
import { AjoutvilleComponent } from './composants/views/localite/loctype/ville/ajoutville/ajoutville.component';
import { GestcommuneComponent } from './composants/views/localite/loctype/commune/gestcommune/gestcommune.component';
import { GestpaysComponent } from './composants/views/localite/loctype/pays/gestpays/gestpays.component';
import { GestquartierComponent } from './composants/views/localite/loctype/quartier/gestquartier/gestquartier.component';
import { GestregionComponent } from './composants/views/localite/loctype/region/gestregion/gestregion.component';
import { GestvilleComponent } from './composants/views/localite/loctype/ville/gestville/gestville.component';
import { IconcommuneComponent } from './composants/views/localite/loctype/commune/iconcommune/iconcommune.component';
import { IconpaysComponent } from './composants/views/localite/loctype/pays/iconpays/iconpays.component';
import { IconquartierComponent } from './composants/views/localite/loctype/quartier/iconquartier/iconquartier.component';
import { IconregionComponent } from './composants/views/localite/loctype/region/iconregion/iconregion.component';
import { IconvilleComponent } from './composants/views/localite/loctype/ville/iconville/iconville.component';
import { PointacommuneComponent } from './composants/views/localite/loctype/commune/pointacommune/pointacommune.component';
import { PointapaysComponent } from './composants/views/localite/loctype/pays/pointapays/pointapays.component';
import { PointaquartierComponent } from './composants/views/localite/loctype/quartier/pointaquartier/pointaquartier.component';
import { PointaregionComponent } from './composants/views/localite/loctype/region/pointaregion/pointaregion.component';
import { PointavilleComponent } from './composants/views/localite/loctype/ville/pointaville/pointaville.component';
import { EnteteComponent } from './composants/views/accueil/entete/entete.component';
import { IconemplComponent } from './composants/views/employe/iconempl/iconempl.component';
import { ServicemplComponent } from './composants/views/employe/servicempl/servicempl.component';
import { HttpClient } from '@angular/common/http';
import { ROUTES, RouterModule } from '@angular/router';
import { IconserviceComponent } from './composants/views/service/iconservice/iconservice.component';
import { IconlocaliteComponent } from './composants/views/localite/iconlocalite/iconlocalite.component';
import { ModiemplComponent } from './composants/views/employe/modiempl/modiempl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepointageComponent } from './composants/views/pointages/datepointage/datepointage.component';
import { PopupComponent } from './composants/views/popup/popup.component';
import { ToastrModule } from 'ngx-toastr';








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
    AccueilpointageComponent,
    EwaatiComponent,
    AjoututilisateurComponent,
    AffichutilisateurComponent,
    SupputilisateurComponent,
    ListutilisateurComponent,
    PaysComponent,
    VilleComponent,
    QuartierComponent,
    CommuneComponent,
    RegionComponent,
    GestionutilisateurComponent,
    AlerteComponent,
    AccueilabsenceComponent,
    AccueilcongeComponent,
    AccueildispositifComponent,
    AccueilemployeComponent,
    AccueilmissionComponent,
    AccueilmutationComponent,
    AccueilretardComponent,
    AccueilserviceComponent,
    AccueilsiteComponent,
    AccueiluserComponent,
    AccueilutilisateurComponent,
    AccueillocaliteComponent,
    GestionComponent,
    AccueillogsComponent,
    AjoutlogsComponent,
    ListlogsComponent,
    IconrechutilisateurComponent,
    ListutilComponent,
    FormserviceComponent,
    ListpointComponent,
    PointaemplComponent,
    PointalocalitComponent,
    PointaserviceComponent,
    PointasiteComponent,
    PointadispositifComponent,
    IconsiteComponent,
    IconeComponent,
    GestlogsComponent,
    IconlogsComponent,
    AccueilcommuneComponent,
    AccueilpaysComponent,
    AccueilquartierComponent,
    AccueilregionComponent,
    AccueilvilleComponent,
    AjoutcommuneComponent,
    AjoutpaysComponent,
    AjoutquartierComponent,
    AjoutregionComponent,
    AjoutvilleComponent,
    GestcommuneComponent,
    GestpaysComponent,
    GestquartierComponent,
    GestregionComponent,
    GestvilleComponent,
    IconcommuneComponent,
    IconpaysComponent,
    IconquartierComponent,
    IconregionComponent,
    IconvilleComponent,
    PointacommuneComponent,
    PointapaysComponent,
    PointaquartierComponent,
    PointaregionComponent,
    PointavilleComponent,
    EnteteComponent,
    IconemplComponent,
    ServicemplComponent,
    IconserviceComponent,
    IconlocaliteComponent,
    ModiemplComponent,
    DatepointageComponent,
    PopupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule ,
    ToastrModule . forRoot ( ),







  ],
  providers: [LoginInterceptorProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
