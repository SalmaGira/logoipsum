import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagContentComponent } from './pag-content/pag-content.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { StatContentComponent } from './stat-content/stat-content.component';
import { TableContentComponent } from './table-content/table-content.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    NavbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainPageComponent,
    StatContentComponent,
    SearchContentComponent,
    TableContentComponent,
    PagContentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
