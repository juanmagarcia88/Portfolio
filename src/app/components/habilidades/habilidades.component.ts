import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  @ViewChild('menu') menu!: ElementRef;

  modalAbierto = false;
  modalTitulo = '';
  modalDescripcion = '';

  constructor(private router: Router) {}

  irASobreMi() { this.router.navigate(['/sobre-mi']); }
  irAContacto() { this.router.navigate(['/contacto']); }
  irAProyectos() { this.router.navigate(['/proyectos']); }
  irARedesSociales() { this.router.navigate(['/redes']); }
  irAInicio() { this.router.navigate(['']); }

  abrirModal(titulo: string, descripcion: string) {
    this.modalTitulo = titulo;
    this.modalDescripcion = descripcion;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  desplegarMenu(event: any) {
    if(event.target.checked) {
      this.menu.nativeElement.classList.add('activo');
    } else {
      this.menu.nativeElement.classList.remove('activo');
    }
  }

}
