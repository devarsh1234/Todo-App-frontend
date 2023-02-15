    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component'
    import { DashboardComponent } from './MyComponents/dashboard/dashboard.component'
    import { PagenotfoundComponent } from './MyComponents/pagenotfound/pagenotfound.component'
    const routes: Routes = [
      { path: "update/:id", component: AddTodoComponent },
      { path: "add", component: AddTodoComponent },
      { path: "", component: DashboardComponent },
      { path: "**", pathMatch: "full", component: PagenotfoundComponent }
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
