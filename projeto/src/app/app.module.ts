import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FaleComponent } from './components/fale/fale.component';
import { ElasComponent } from './components/elas/elas.component';
import { ElaComponent } from './components/ela/ela.component';
import { HomeComponent } from './components/home/home.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TabsComponent } from './components/tabs/tabs.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { AdaComponent } from './components/ada/ada.component';
import { ValentinaComponent } from './components/valentina/valentina.component';
import { AmeliaComponent } from './components/amelia/amelia.component';



@NgModule({
  declarations: [
    AppComponent,
    FaleComponent,
    ElasComponent,
    ElaComponent,
    HomeComponent,
    TabsComponent,
    AdaComponent,
    ValentinaComponent,
    AmeliaComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
