    import { Component, OnInit } from '@angular/core';
    import { DialogService } from 'src/app/dialog.service';
    import { UserDataService } from 'src/app/user-data.service'
    import { CommonService } from 'src/app/common.service';
    import { NgToastService } from 'ng-angular-popup';

    @Component({
      selector: 'app-dashboard',
      templateUrl: './dashboard.component.html',
      styleUrls: ['./dashboard.component.css']
    })
    export class DashboardComponent implements OnInit {
      data: any = [];


      constructor(private userdataService: UserDataService, private dialogService: DialogService, public commonService: CommonService, private toast: NgToastService) {
      }


      displayedColumns: string[] = ['title', 'description', 'startdate', 'enddate', 'status', 'action'];
      dataSource = this.data;
      ngOnInit(): void {


        this.userdataService.getTodoData().subscribe(userData => {
          this.data = userData;


          console.log(userData);
        });
      }

      toDelete(id: Number) {
        this.dialogService.openConfirmDialog("Are you sure you want to delete?")
          .afterClosed().subscribe(res => {
            console.log(res);
            if (res) {
              this.userdataService.deleteTodo(id).subscribe((result) => {
                this.toast.error({ detail: "Delete Message", summary: "Deleted Successfully", duration: 3000 })
                console.log(result);
                this.userdataService.getTodoData().subscribe(userData => {
                  this.data = userData;
                  console.log(userData);
                })
              });
            }
          });
      }
    }
