import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  @ViewChild('menu') menu!: ElementRef;
  constructor(private router: Router) { }

  irASobreMi() {
    this.router.navigate(['/sobre-mi']);
  }

  irAContacto() {
    this.router.navigate(['/contacto']);
  }

  irAHabilidades() {
    this.router.navigate(['/habilidades']);
  }

  irAProyectos() {
    this.router.navigate(['/proyectos']);
  }

  irARedesSociales() {
    this.router.navigate(['/redes']);
  }

  desplegarMenu(event: any) {
    if (event.target.checked) {
      this.menu.nativeElement.classList.add('activo');
    } else {
      this.menu.nativeElement.classList.remove('activo');
    }
  }

}
