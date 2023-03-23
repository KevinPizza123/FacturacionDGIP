import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormapagoComponent } from './formapago/formapago.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

const routes: Routes = [
  { path: 'tarjeta', component: TarjetaComponent },
  { path: 'pagos', component: FormapagoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
