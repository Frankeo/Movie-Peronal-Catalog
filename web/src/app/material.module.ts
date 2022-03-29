import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  exports: [
    MatToolbarModule, 
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
})
export class MaterialModule { }
