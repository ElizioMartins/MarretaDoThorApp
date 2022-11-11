import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarretaDoThorComponent } from 'marreta-lib';

const routes: Routes = [
  {
    path: '', component: MarretaDoThorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
