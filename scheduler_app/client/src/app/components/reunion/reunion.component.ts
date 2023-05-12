import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { map, timeout } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable, throwError, take} from 'rxjs';
import { waitForAsync } from '@angular/core/testing';
import { ReunionService } from 'src/app/services/reunion.service';



@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent {

  meetingForm: FormGroup;
  participants: string[] = [];
  disableCreateMeeting = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private reunionService: ReunionService) { }

  ngOnInit() {
    // Inicializa el formulario
    this.meetingForm = this.formBuilder.group({
      title: [''],
      description: [''],
      date: [''],
      time: [''],
      participants: ['']
    });

    this.meetingForm.valueChanges.subscribe((value) => {
      const title = value.title;
      const description = value.description;
      const date = value.date;
      const time = value.time;
      const participants = this.participants;
      
      // Comprueba si se han completado todos los campos y se ha agregado al menos un participante
      this.disableCreateMeeting = !title || !description || !date || !time || participants.length === 0;
    });
  };

  

  onSubmit() {
    const title = this.meetingForm.value.title;
    const description = this.meetingForm.value.description;
    const date = this.meetingForm.value.date;
    const time = this.meetingForm.value.time;
    const participants = this.participants;
    
    const meetingData = {
      "nombre": title,
      "descripcion": description,
      "fecha": date + 'T' + time,
      "participantes": participants
    };

    console.log(meetingData)
    this.reunionService.createMeeting(meetingData).subscribe(
      (response) => {
        console.log(response);
        alert('Exito')
        // Aquí puedes redirigir al usuario a la página de la reunión creada
      },
      (error) => {
        console.log(error);
        alert('Fracaso')
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );
  }

  addParticipant() {
    const participant = this.meetingForm.controls.participants.value;
    const nombre: string = participant;
    console.log(nombre);
    this.userExists(nombre).pipe(take(1)).subscribe((existe: boolean) => {
      console.log(existe)
      if (!existe) {
        alert("El participante no existe");
      } else {
        if (participant && !this.participants.includes(participant)) {
          this.participants.push(participant);
          this.meetingForm.controls.participants.setValue('');
        }
      }
    });
  }
  

  userExists(nombre: string): Observable<boolean> {
    return this.authService.userExists(nombre).pipe(
      catchError((error) => {
        console.log('Error al verificar la existencia del usuario:', error);
        return of(false);
      })
    );
  }
  
    
  

  disableDate(){
    return false;
  }

}
