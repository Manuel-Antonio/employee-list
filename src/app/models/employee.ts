export class Employee {
    legojo?: number;
    name?: string;
    lastname?: string;
    sexo?: string;
    salary?: number;

    constructor(legojo: number, name: string, lastname: string, sexo: string, salary: number) {
    this.legojo = legojo;
    this.name = name;
    this.lastname = lastname;
    this.sexo = sexo;
    this.salary = salary;
    }
}