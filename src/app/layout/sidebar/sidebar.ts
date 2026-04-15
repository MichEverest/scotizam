import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}