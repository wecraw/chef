import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { MerchComponent } from './merch/merch.component';

const routes: Routes = [
  { path: '', component: Home2Component },
  { path: 'home2', component: HomeComponent },
  { path: 'merch', component: MerchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
