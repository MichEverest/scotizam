import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SidebarService } from '../../core/services/sidevar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit {
  pageTitle: string = 'Dashboard';
  
  isCollapsed$: Observable<boolean>;

  constructor(
    private router: Router,
    private sidebarService: SidebarService
  ) {
    this.isCollapsed$ = this.sidebarService.isCollapsed$;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
  }

  ngOnInit(): void {
    this.updateTitle();
  }

  updateTitle() {
    const url = this.router.url;
    if (url.includes('/admin')) { this.pageTitle = 'Panel Principal'; }
    else if (url.includes('/cotizaciones')) { this.pageTitle = 'Cotizaciones'; }
    else if (url.includes('/clientes')) { this.pageTitle = 'Gestión de Clientes'; }
    else if (url.includes('/productos')) { this.pageTitle = 'Catálogo de Productos'; }
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}