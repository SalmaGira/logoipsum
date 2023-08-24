import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pag-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pag-content.component.html',
  styleUrls: ['./pag-content.component.css'],
})
export class PagContentComponent {
  pages = [5, 4, 3, 2, 1];
}
