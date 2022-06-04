import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//template
import { HeaderComponent } from './components/template/header/header.component';
//
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
//modulos importados de material
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { HotelCrudComponent } from './views/hotel-crud/hotel-crud.component';
import { HotelCreateComponent } from './components/hotel/hotel-create/hotel-create.component';
import { HotelReadComponent } from './components/hotel/hotel-read/hotel-read.component';
import { HotelUpdateComponent } from './components/hotel/hotel-update/hotel-update.component';
import { HotelDeleteComponent } from './components/hotel/hotel-delete/hotel-delete.component';
import { HospedagemCrudComponent } from './views/hospedagem-crud/hospedagem-crud.component';
import { HospedagemCreateComponent } from './components/hospedagem/hospedagem-create/hospedagem-create.component';
import { CargoCrudComponent } from './views/cargo-crud/cargo-crud.component';
import { CargoCreateComponent } from './components/cargo/cargo-create/cargo-create.component';
import { CargoReadComponent } from './components/cargo/cargo-read/cargo-read.component';
import { CargoUpdateComponent } from './components/cargo/cargo-update/cargo-update.component';
import { CargoDeleteComponent } from './components/cargo/cargo-delete/cargo-delete.component';
import { HospedeCrudComponent } from './views/hospede-crud/hospede-crud.component';
import { HospedeCreateComponent } from './components/hospede/hospede-create/hospede-create.component';
import { HospedeReadComponent } from './components/hospede/hospede-read/hospede-read.component';
import { HospedeUpdateComponent } from './components/hospede/hospede-update/hospede-update.component';
import { HospedeDeleteComponent } from './components/hospede/hospede-delete/hospede-delete.component';
import { QuartoCrudComponent } from './views/quarto-crud/quarto-crud.component';
import { QuartoCreateComponent } from './components/quarto/quarto-create/quarto-create.component';
import { HospedagemReadComponent } from './components/hospedagem/hospedagem-read/hospedagem-read.component';
import { HospedagemUpdateComponent } from './components/hospedagem/hospedagem-update/hospedagem-update.component';
import { HospedagemDeleteComponent } from './components/hospedagem/hospedagem-delete/hospedagem-delete.component';
import { QuartoReadComponent } from './components/quarto/quarto-read/quarto-read.component';
import { QuartoUpdateComponent } from './components/quarto/quarto-update/quarto-update.component';
import { QuartoDeleteComponent } from './components/quarto/quarto-delete/quarto-delete.component';
import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    HotelCrudComponent,
    HotelCreateComponent,
    HotelReadComponent,
    HotelUpdateComponent,
    HotelDeleteComponent,
    HospedagemCrudComponent,
    HospedagemCreateComponent,
    CargoCrudComponent,
    CargoCreateComponent,
    CargoReadComponent,
    CargoUpdateComponent,
    CargoDeleteComponent,
    HospedeCrudComponent,
    HospedeCreateComponent,
    HospedeReadComponent,
    HospedeUpdateComponent,
    HospedeDeleteComponent,
    QuartoCrudComponent,
    QuartoCreateComponent,
    HospedagemReadComponent,
    HospedagemUpdateComponent,
    HospedagemDeleteComponent,
    QuartoReadComponent,
    QuartoUpdateComponent,
    QuartoDeleteComponent,
    FuncionarioCrudComponent,
    FuncionarioCreateComponent,
    FuncionarioReadComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
