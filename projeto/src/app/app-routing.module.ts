import { PathLocationStrategy } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatPaginatedTabHeader } from '@angular/material/tabs/paginated-tab-header';
import { Routes, RouterModule, ɵangular_packages_router_router_h } from '@angular/router';
import { ElasComponent } from './components/elas/elas.component';
import { FaleComponent } from './components/fale/fale.component';
import { HomeComponent } from './components/home/home.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {path:'',
    component: TabsComponent,
    children: [
      {path: '',
        component: HomeComponent,},

       { path:'elas',
      component: ElasComponent,},
      { path:'fale',
      component: FaleComponent,},

    ]},
  ]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
