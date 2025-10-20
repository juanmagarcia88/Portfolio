import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  @ViewChild('menu') menu!: ElementRef;
  constructor(private router: Router) { }

  form = {
    nombre: '',
    reply_to: '',
    mensaje: ''
  };

  emailEnviado = false;
  emailError = false;

  enviarEmail(form: any) {
    if (form.invalid) return;

    emailjs.send(
      'service_k9xcj3v',
      'template_xrypqjb',
      {
        name: this.form.nombre,
        reply_to: this.form.reply_to,
        message: this.form.mensaje
      },
      'tcPecGhIAn89RTGnt'
    )
      .then(() => {
        this.emailEnviado = true;
        this.emailError = false;
        this.form = { nombre: '', reply_to: '', mensaje: '' };
        form.resetForm();
      })
      .catch(error => {
        console.error('Error al enviar correo:', error);
        this.emailError = true;
        this.emailEnviado = false;
      });
  }

  irASobreMi() { this.router.navigate(['/sobre-mi']); }
  irAHabilidades() { this.router.navigate(['/habilidades']); }
  irAProyectos() { this.router.navigate(['/proyectos']); }
  irARedesSociales() { this.router.navigate(['/redes']); }
  irAInicio() { this.router.navigate(['']); }

  desplegarMenu(event: any) {
    if(event.target.checked) {
      this.menu.nativeElement.classList.add('activo');
    } else {
      this.menu.nativeElement.classList.remove('activo');
    }
  }

}
