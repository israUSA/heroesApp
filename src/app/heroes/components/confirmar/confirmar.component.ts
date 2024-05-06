import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { iHeroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.css'
})
export class ConfirmarComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: iHeroe){}

  borrar(){
    this.dialogRef.close(true);

  }

  cerrar(){
    this.dialogRef.close();
  }

}
