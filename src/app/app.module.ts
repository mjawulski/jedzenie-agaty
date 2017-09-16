import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MdListModule, MdToolbarModule, MdIconModule, MdChipsModule, MdCardModule, MdSidenavModule, MdButtonToggleModule, MdButtonModule, MdSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { FeedingTimesListComponent } from './feeding-times-list/feeding-times-list.component';
import { AddFeedingTimeComponent } from './add-feeding-time/add-feeding-time.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedingTimesListComponent,
    AddFeedingTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdChipsModule,
    MdCardModule,
    MdSidenavModule,
    MdButtonToggleModule,
    MdButtonModule,
    MdSelectModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [{provide: LOCALE_ID, useValue: "pl-PL"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
