import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { HomeComponent } from './pages/home/home.component';
import { LocalizacaoComponent } from './pages/localizacao/localizacao.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'empresa', component:EmpresaComponent},
  {path: 'servicos', component:ServicosComponent},
  {path: 'localizacao', component:LocalizacaoComponent},
  {path: 'contato', component:ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
