import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

//hotel
import { HotelCrudComponent } from './views/hotel-crud/hotel-crud.component';
import { HotelCreateComponent } from './components/hotel/hotel-create/hotel-create.component';
import { HotelUpdateComponent } from './components/hotel/hotel-update/hotel-update.component';
import { HotelDeleteComponent } from './components/hotel/hotel-delete/hotel-delete.component';

//hospedagem
import { HospedagemCrudComponent } from './views/hospedagem-crud/hospedagem-crud.component';
import { HospedagemCreateComponent } from './components/hospedagem/hospedagem-create/hospedagem-create.component';
import { HospedagemUpdateComponent } from './components/hospedagem/hospedagem-update/hospedagem-update.component';
import { HospedagemDeleteComponent } from './components/hospedagem/hospedagem-delete/hospedagem-delete.component';

//cargo
import { CargoCrudComponent } from './views/cargo-crud/cargo-crud.component';
import { CargoCreateComponent } from './components/cargo/cargo-create/cargo-create.component';
import { CargoUpdateComponent } from './components/cargo/cargo-update/cargo-update.component';
import { CargoDeleteComponent } from './components/cargo/cargo-delete/cargo-delete.component';

//Hospede
import { HospedeCrudComponent } from './views/hospede-crud/hospede-crud.component';
import { HospedeCreateComponent } from './components/hospede/hospede-create/hospede-create.component';
import { HospedeUpdateComponent } from './components/hospede/hospede-update/hospede-update.component';
import { HospedeDeleteComponent } from './components/hospede/hospede-delete/hospede-delete.component';

//Quarto
import { QuartoCrudComponent } from './views/quarto-crud/quarto-crud.component';
import { QuartoCreateComponent } from './components/quarto/quarto-create/quarto-create.component';
import { QuartoUpdateComponent } from './components/quarto/quarto-update/quarto-update.component';
import { QuartoDeleteComponent } from './components/quarto/quarto-delete/quarto-delete.component';

//Funcionario
import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "hoteis",
    component: HotelCrudComponent
  },
  {
    path: "hoteis/create",
    component: HotelCreateComponent
  },
  {
    path: "hoteis/update/:codigo",
    component: HotelUpdateComponent
  },
  {
    path: "hoteis/delete/:codigo",
    component: HotelDeleteComponent
  },
  {
    path: "hospedagens",
    component: HospedagemCrudComponent
  },
  {
    path: "hospedagens/create",
    component: HospedagemCreateComponent
  },
  {
    path: "hospedagens/update/:id",
    component: HospedagemUpdateComponent
  },
  {
    path: "hospedagens/delete/:id",
    component: HospedagemDeleteComponent
  },
  {
    path: "cargos",
    component: CargoCrudComponent
  },
  {
    path: "cargos/create",
    component: CargoCreateComponent
  },
  {
    path: "cargos/update/:id",
    component: CargoUpdateComponent
  },
  {
    path: "cargos/delete/:id",
    component: CargoDeleteComponent
  },
  {
    path: "hospedes",
    component: HospedeCrudComponent
  },
  {
    path: "hospedes/create",
    component: HospedeCreateComponent
  },
  {
    path: "hospedes/update/:codigo",
    component: HospedeUpdateComponent
  },
  {
    path: "hospedes/delete/:codigo",
    component: HospedeDeleteComponent
  },
  {
    path: "quartos",
    component: QuartoCrudComponent
  },
  {
    path: "quartos/create",
    component: QuartoCreateComponent
  },
  {
    path: "quartos/update/:id",
    component: QuartoUpdateComponent
  },
  {
    path: "quartos/delete/:id",
    component: QuartoDeleteComponent
  },
  {
    path: "funcionarios",
    component: FuncionarioCrudComponent
  },
  {
    path: "funcionarios/create",
    component: FuncionarioCreateComponent
  },
  {
    path: "funcionarios/update/:id",
    component: FuncionarioUpdateComponent
  },
  {
    path: "funcionarios/delete/:id",
    component: FuncionarioDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
