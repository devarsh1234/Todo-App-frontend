    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http'
    @Injectable({
      providedIn: 'root'
    })
    export class UserDataService {

      constructor(private http: HttpClient) { }
      getTodoData() {
        let apiurl = "http://localhost:8081"
        return this.http.get(apiurl)
      }
      getParticular(id:Number){
         let apiurl = `http://localhost:8081/${id}`
         return this.http.get(apiurl)
      }
      addTodo(data: object) {
        let apiurl = "http://localhost:8081/add"
        return this.http.post(apiurl, data)
      }

      deleteTodo(id: Number) {
        let apiurl = `http://localhost:8081/delete/${id}`
        return this.http.delete(apiurl);
      }
      updateTodo(data: object, id: Number) {
        let apiurl = `http://localhost:8081/update/${id}`
        return this.http.put(apiurl, data)
      }
      getCount() {
        let apiurl = "http://localhost:8081/add"
        return this.http.get(apiurl)
      }
    }
