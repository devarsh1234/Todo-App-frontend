    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { ReactiveFormsModule } from '@angular/forms'
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
    import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
    import { HttpClientModule } from '@angular/common/http';
    import { PagenotfoundComponent } from './MyComponents/pagenotfound/pagenotfound.component';
    import { MatConfirmDialogComponent } from './MyComponents/mat-confirm-dialog/mat-confirm-dialog.component';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { MatDialogModule } from '@angular/material/dialog'
    import { MatIconModule } from '@angular/material/icon'
    import { MatTableModule } from '@angular/material/table'
    import { MatButtonModule } from '@angular/material/button';
    import { DdMmYyyyDatePipe } from './dd-mm-yyyy-date.pipe';
    import { RouterModule, Routes } from '@angular/router';
    import { MatSelectModule } from '@angular/material/select'
    import { MatFormFieldModule } from '@angular/material/form-field';
    import { MatInputModule } from '@angular/material/input'
    import { MatDatepickerModule } from '@angular/material/datepicker';
    import { MatNativeDateModule } from '@angular/material/core';
    import { NgToastModule } from 'ng-angular-popup';
    const routes: Routes = [
      { path: '', component: AddTodoComponent },
    ];
    @NgModule({
      declarations: [
        AppComponent,
        AddTodoComponent,
        DashboardComponent,
        PagenotfoundComponent,
        MatConfirmDialogComponent,
        DdMmYyyyDatePipe
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatTableModule,
        MatButtonModule,
        RouterModule.forRoot(routes),
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgToastModule



      ],
      providers: [],
      entryComponents: [MatConfirmDialogComponent],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
