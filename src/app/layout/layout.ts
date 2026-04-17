import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SidebarService } from '../core/services/sidevar.service';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, Navbar, Sidebar],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class Layout {
  isCollapsed$: Observable<boolean>;

  constructor(private sidebarService: SidebarService) {
    this.isCollapsed$ = this.sidebarService.isCollapsed$;
  }
}