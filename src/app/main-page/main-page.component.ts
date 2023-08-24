import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatContentComponent } from '../stat-content/stat-content.component';
import { SearchContentComponent } from '../search-content/search-content.component';
import { TableContentComponent } from '../table-content/table-content.component';
import { PagContentComponent } from '../pag-content/pag-content.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    StatContentComponent,
    SearchContentComponent,
    TableContentComponent,
    PagContentComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {}
