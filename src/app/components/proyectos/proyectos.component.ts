import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements AfterViewInit {
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('lightbox') lightbox!: ElementRef;
  lightboxImg!: HTMLImageElement;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement;
    const imgs = document.querySelectorAll<HTMLImageElement>('.galeria-imagenes img');
    const lightboxEl = document.getElementById('lightbox');

    imgs.forEach(img => {
      img.addEventListener('click', () => {
        this.lightboxImg.src = img.src;
        lightboxEl!.style.display = 'block';
      });
    });

    const cerrar = document.querySelector('.cerrar');
    cerrar?.addEventListener('click', () => {
      lightboxEl!.style.display = 'none';
    });

    lightboxEl?.addEventListener('click', (e: any) => {
      if (e.target === lightboxEl) {
        lightboxEl.style.display = 'none';
      }
    });
  }

  irASobreMi() { this.router.navigate(['/sobre-mi']); }
  irAContacto() { this.router.navigate(['/contacto']); }
  irARedesSociales() { this.router.navigate(['/redes']); }
  irAHabilidades() { this.router.navigate(['/habilidades']); }
  irAInicio() { this.router.navigate(['']); }

  desplegarMenu(event: any) {
    if (event.target.checked) {
      this.menu.nativeElement.classList.add('activo');
    } else {
      this.menu.nativeElement.classList.remove('activo');
    }
  }
}
