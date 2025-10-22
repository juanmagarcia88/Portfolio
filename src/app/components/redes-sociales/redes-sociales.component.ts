import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [],
  templateUrl: './redes-sociales.component.html',
  styleUrl: './redes-sociales.component.css'
})
export class RedesSocialesComponent {
  @ViewChild('menu') menu!: ElementRef;
  constructor(private router: Router) { }

  irASobreMi() {
    this.router.navigate(['/sobre-mi']);
  }

  irAContacto() {
    this.router.navigate(['/contacto']);
  }

  irAProyectos() {
    this.router.navigate(['/proyectos']);
  }

  irAHabilidades() {
    this.router.navigate(['/habilidades']);
  }

  irAInicio() { this.router.navigate(['']); }

  desplegarMenu(event: any) {
    if (event.target.checked) {
      this.menu.nativeElement.classList.add('activo');
    } else {
      this.menu.nativeElement.classList.remove('activo');
    }
  }

}
