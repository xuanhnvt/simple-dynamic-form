import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatChipsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatTabsModule,
  MatSliderModule,
  MatProgressBarModule,
  MatStepperModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

const MAT_MODULES = [MatListModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatChipsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatTabsModule,
  MatSliderModule,
  MatProgressBarModule,
  MatStepperModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    [...MAT_MODULES],
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
