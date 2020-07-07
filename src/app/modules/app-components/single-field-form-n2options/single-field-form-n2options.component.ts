import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-field-form-n2options',
  templateUrl: './single-field-form-n2options.component.html',
  styleUrls: ['./single-field-form-n2options.component.css']
})
export class SingleFieldFormN2optionsComponent implements OnInit {

  @Input('label') label;
  @Input('placeholder') plh;
  @Input('left-btn') lbtn;
  @Input('right-btn') rbtn;
  @Input('type') type;
  @Input('required') isreq:boolean;
  @Input('forward-btn') forward_btn;
  @Input('error-msg') footer;
  @Input('link') link;

  @Output('btn-pressed') btn_pressed: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onclick(event, val, btn) {
    event.preventDefault();
    
    //Detecta si se presiono la tecla de retorno
    //en lugar de un botón.
    if (event.explicitOriginalTarget.tagName == 'INPUT') {
      btn = 'return';
    }

    //Evitar la ejecución del flujo si el campo es
    //requerido y está vacío.
    if(!val && this.isreq && (btn == this.forward_btn || btn == 'return')) {
      //Muestra una alerta de error al usuario.
      //Descripción de las propiedades del objeto como parámetro:
      //1. icon = agrega un icono (success, error, warning, info y question)
      //2. title = título de la alerta.
      //3. text = descripción del mensaje/alerta.
      //4. footer = footer de la alerta.
      swal.fire({
        icon: 'error',
        title: '<strong> Error </strong>',
        text: `El campo ${this.label} es requerido.`,
        footer: this.footer
      });
      return;
    }

    //Navegamos al enlace correspondiente
    //dependiendo del valor de entrada de link.
    this.router.navigate([this.link]);

    this.btn_pressed.emit({
      value: val,
      btn: btn
    });

  }

}
