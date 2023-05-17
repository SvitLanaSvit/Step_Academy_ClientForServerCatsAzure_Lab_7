import { Component } from '@angular/core';
import { Cat } from '../cat';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css']
})
export class CreateCatComponent {
  cat: Cat = new Cat("", "");
  done: boolean = false;

  constructor(private http: HttpService){}

  submit(){
    this.http.createCat(this.cat).subscribe((data: any)=>{
      console.log(data);
      this.cat = data;
      this.done = true;
    })
  }
  clear(){
    this.cat = new Cat("","");
    this.done = false;
  }
}
