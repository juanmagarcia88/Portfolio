import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  @ViewChild('menu') menu!: ElementRef;
  constructor(private router: Router) { }

  irASobreMi() {
    this.router.navigate(['/sobre-mi']);
  }

  irAContacto() {
    this.router.navigate(['/contacto']);
  }

  irARedesSociales() {
    this.router.navigate(['/redes']);
  }

  irAHabilidades() {
    this.router.navigate(['/habilidades']);
  }

  irAInicio() { this.router.navigate(['']); }

  desplegarMenu(event: any) {
    if(event.target.checked) {
      this.menu.nativeElement.classList.add('activo');
    } else {
      this.menu.nativeElement.classList.remove('activo');
    }
  }

}
