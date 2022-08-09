import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SafePipe } from './pipes/safe.pipe';
import { StringifyArrayPipe } from './pipes/stringify-array.pipe';



@NgModule({
  declarations: [
    // components

    HeaderComponent,
    FooterComponent,

    // pipes

    SafePipe,
    StringifyArrayPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    // components

    HeaderComponent,
    FooterComponent,

    // pipes

    SafePipe,
    StringifyArrayPipe
  ]
})
export class SharedModule { }
