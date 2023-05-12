import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent {

  meetingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Inicializa el formulario
    this.meetingForm = this.formBuilder.group({
      title: [''],
      date: [''],
      time: [''],
      participants: ['']
    });
  }

  onSubmit() {
    // Aquí puedes enviar los datos del formulario al servidor
  }

  disableDate(){
    return false;
  }

}
