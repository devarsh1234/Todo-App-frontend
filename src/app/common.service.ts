    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http'
    @Injectable({
      providedIn: 'root'
    })
    export class CommonService {
      url = "http://localhost:4200"
      public title = ''

      constructor(private http: HttpClient) { }
      public input = [
        { name: "Completed", id: 0 },
        { name: "Todo", id: 1 },
        { name: "Inprogress", id: 2 }
      ]

    }
