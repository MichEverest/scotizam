import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../core/services/sidevar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
  isCollapsed$: Observable<boolean>;

  constructor(private sidebarService: SidebarService) {
    this.isCollapsed$ = this.sidebarService.isCollapsed$;
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  logout() {
    console.log('Cerrando sesión...');
  }
}