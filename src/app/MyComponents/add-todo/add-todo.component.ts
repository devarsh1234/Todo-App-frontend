        import {
            Component, EventEmitter,
            Input, OnInit, Output
        } from '@angular/core';
        import { FormGroup, FormControl, Validators } from '@angular/forms';
        import { ActivatedRoute, Router } from '@angular/router';
        import { Todo } from 'src/app/app.component';
        import { UserDataService } from 'src/app/user-data.service'
        import { CommonService } from 'src/app/common.service';
        import { NgToastService } from 'ng-angular-popup';
        @Component({
            selector: 'app-add-todo',
            templateUrl: './add-todo.component.html',
            styleUrls: ['./add-todo.component.css']
        })
        export class AddTodoComponent implements OnInit {
            @Input() todos!: Todo
            @Output() submitted = new EventEmitter<Todo>();
            data: any;
            public fetchData!: object;
            public update: boolean = false;
            public id!: Number;
            addForm = new FormGroup({
                title: new FormControl('', Validators.required),
                description: new FormControl('', Validators.required),
                startdate: new FormControl<Date | null>(null,Validators.required),
                enddate: new FormControl<Date | null>(null,Validators.required),
                status: new FormControl('', Validators.required)
            })


            input: any;

            constructor(private router: ActivatedRoute, private route: Router, private commonService: CommonService, private userdataService: UserDataService, private toast: NgToastService) {

            }


            ngOnInit(): void {
                this.input = this.commonService.input
                this.id = this.router.snapshot.params['id']
                console.log(this.id);
                if (this.id) {
                    this.userdataService.getParticular(this.id).subscribe(result => {
                        console.log("sss", result);
                        this.data = result;
                        console.log(result);
                        this.setForm(this.id);
                    });
                }
                this.getDate(this.date);
            }
            date: any = new Date();
            getDate(a: any) {
                let toDate: any = a.getDate();
                if (toDate < 10) {
                    toDate = "0" + toDate;
                }
                let month: any = a.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                let year: any = a.getFullYear();

                return year + "-" + month + "-" + toDate;
            }

            addTodo(formdata: any) {
                if (this.addForm.valid) {
                    console.log(formdata);
                    this.userdataService.addTodo(formdata).subscribe((result) => {
                        this.toast.success({ detail: "Success Message", summary: "Added Successfully", duration: 3000 })
                        console.log(result);
                        this.route.navigate(['']);
                    })
                }
                else {
                    this.addForm.markAllAsTouched();
                }
            }

            setForm(id: Number) {
                this.update = true;
                console.log(this.data)
                const index = this.data.findIndex((item: any) => {
                    return item.id == id
                })
                const fetchData = (this.data[index])
                let fdate = new Date(fetchData.enddate)
                let date_recieved = this.getDate(fdate)
                fetchData.enddate = date_recieved
                this.addForm.patchValue(fetchData);
                console.log(fetchData);
            }

            updateTodo(data: object) {
                data = this.addForm.value;
                this.userdataService.updateTodo(data, this.id).subscribe((result) => {
                    this.toast.success({ detail: "Update Message", summary: "Updated Successfully", duration: 3000 })
                    console.log(result);
                })
            }
        }