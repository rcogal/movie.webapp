import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    FormsModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
