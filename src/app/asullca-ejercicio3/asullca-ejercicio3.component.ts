import { Component } from '@angular/core';


@Component({
  selector: 'app-asullca-ejercicio3',
  templateUrl: './asullca-ejercicio3.component.html',
  styleUrls: ['./asullca-ejercicio3.component.css']
})
export class AsullcaEjercicio3Component {
  birthYear: number | null = null;
  result: boolean | null = null;
  resultMessage: string = '';

  // Maneja el evento de entrada para actualizar la propiedad `birthYear`
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.birthYear = Number(input.value);
  }

  // Maneja el envío del formulario
  checkDNI(event: Event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    if (this.birthYear !== null) {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.birthYear;
      this.result = age >= 18;
      this.resultMessage = this.result
        ? 'Debes sacar tu DNI.'
        : 'No necesitas sacar tu DNI aún.';
    }
  }
}
