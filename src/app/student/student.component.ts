import { Component } from '@angular/core';
import type { StudentList } from '../models/student.model'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  students:StudentList=[
    {name:'Manuel', last_name:'Florez', age:29, city:'Cartagena', course:'Angular', active:true},
    {name:'Adriana', last_name:'Matos', age:19, city:'Cartagena', course:'UX/UI', active:true},
    {name:'Josue', last_name:'Perez', age:29, city:'Barranquilla', course:'Angular', active:true},
    {name:'Leonor', last_name:'Berol', age:17, city:'Cartagena', course:'UX/UI', active:false},
    {name:'Francisco', last_name:'Villadiego', age:30, city:'Cartagena', course:'Angular', active:true},
    {name:'Lucas', last_name:'Dangond', age:35, city:'Valledupar', course:'React', active:true},
    {name:'Leonardo', last_name:'Giordano', age:29, city:'Medellin', course:'React', active:true},
    {name:'Ana', last_name:'Sanchez', age:20, city:'Cucuta', course:'React', active:false},
  ]
}
