import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  isMenuOpen = false; // Controla a visibilidade do menu
  menuIcon = 'menu'; // Controla o ícone exibido no botão

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o valor booleano do controle de visibilidade
    this.menuIcon = this.isMenuOpen ? 'close' : 'menu'; // Muda o ícone do menu
  }
} 
