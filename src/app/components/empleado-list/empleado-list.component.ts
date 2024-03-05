import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  radioBtnSelected : string = "Todos"
  empleadoList: Employee[] = [
    new Employee(1, 'Juan', 'Pérez', 'Masculino', 2500),
    new Employee(2, 'María', 'Gómez', 'Femenino', 2800),
    new Employee(3, 'Carlos', 'López', 'Masculino', 3000),
    new Employee(4, 'Laura', 'Martínez', 'Femenino', 2700),
    new Employee(5, 'Pedro', 'Sánchez', 'Masculino', 2600),
    new Employee(6, 'Ana', 'Rodríguez', 'Femenino', 2900),
    new Employee(7, 'Javier', 'Hernández', 'Masculino', 3100),
    new Employee(8, 'Sofía', 'Díaz', 'Femenino', 3200),
    new Employee(9, 'Diego', 'Fernández', 'Masculino', 2700),
    new Employee(10, 'Elena', 'García', 'Femenino', 3000)
  ];

  getRadioBtnSelected(option : string): void {
    this.radioBtnSelected = option;
  }

  quantityEmployeeAll() : number {
    if(this.empleadoList) {
      return this.empleadoList.length;
    }
    return 0;
  }
  quantityEmployeeListMale() : number {
    if(this.empleadoList) {
      return this.empleadoList.filter( x => x.sexo === "Masculino").length;
    }
    return 0;
    
  }
  quantityEmployeeListFemale() : number {
    if(this.empleadoList) {
      return this.empleadoList.filter( x => x.sexo === "Femenino").length;
    }
    return 0;
  }

}
