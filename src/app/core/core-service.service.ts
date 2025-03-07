import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreServiceService {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string,action:string= 'OK') {
    this._snackBar.open(message,action, {
      duration: 2500,
      verticalPosition: 'top'
    });
  }
}
