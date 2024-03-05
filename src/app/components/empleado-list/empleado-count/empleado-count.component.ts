import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-empleado-count',
  templateUrl: './empleado-count.component.html',
  styleUrls: ['./empleado-count.component.css']
})
export class EmpleadoCountComponent {
  radioBtnSelected ?: string = "Todos";
  @Output() emitRadioBtnSelected = new EventEmitter<string>();
  @Input() all ?: number;
  @Input() female ?: number;
  @Input() male ?: number;
  
  constructor() {
    this.all = 0;
    this.female = 0;
    this.male = 0;
  }

  
  onRadioChange() : void {
    this.emitRadioBtnSelected?.emit(this.radioBtnSelected);
  }
}
