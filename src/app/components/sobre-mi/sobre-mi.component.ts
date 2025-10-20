import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent implements AfterViewInit {
  @ViewChild('menu') menu!: ElementRef;
  constructor(private router: Router, private el: ElementRef) { }

  ngAfterViewInit() {
    const threshold = window.innerWidth <= 480 ? 0.4 : 0.8;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold });

    const elementos = this.el.nativeElement.querySelectorAll('.aprendizaje, .practicas, .proyectoCurso');
    elementos.forEach((el: HTMLElement) => observer.observe(el));
  }


  irAContacto() { this.router.navigate(['/contacto']); }
  irAHabilidades() { this.router.navigate(['/habilidades']); }
  irAProyectos() { this.router.navigate(['/proyectos']); }
  irARedesSociales() { this.router.navigate(['/redes']); }
  irAInicio() { this.router.navigate(['']); }

  desplegarMenu(event: any) {
    if (event.target.checked) {
      this.menu.nativeElement.classList.add('activo');
    } else {
      this.menu.nativeElement.classList.remove('activo');
    }
  }

}
