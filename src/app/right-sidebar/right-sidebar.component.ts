import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
})
export class RightSidebarComponent {
  menuItems = [
    { index: 0, title: 'الرئيسية' },
    { index: 1, title: 'منيو رقم 1', dropdown: true },
    { index: 2, title: 'منيو رقم 1', dropdown: true },
    { index: 3, title: 'منيو رقم 1' },
  ];

  subMenuItems = [
    { title: 'منيو ميني' },
    { title: 'منيو ميني' },
    { title: 'منيو ميني' },
    { title: 'منيو ميني' },
  ];
}
