import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from './cat';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getCats(){
    return this.http.get("https://localhost:7098/api/Cats");
  }

  createCat(cat: Cat){
    return this.http.post("https://localhost:7098/api/Cats", cat);
  }

  editCat(cat: Cat){
    return this.http.put("https://localhost:7098/api/Cats", cat);
  }

  deleteCat(id: string, name: string){
    return this.http.delete(`https://localhost:7098/api/Cats?id=${id}&name=${name}`)
  }
}
