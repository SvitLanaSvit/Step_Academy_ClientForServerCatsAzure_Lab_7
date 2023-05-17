import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {
  cat: Cat = new Cat("","");
  done: boolean = false;

  constructor(private http: HttpService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.cat = history.state.cat;
    console.log(this.cat);
  }

  submit(){
    this.http.editCat(this.cat).subscribe((data: any)=>{
      this.cat = data;
      this.done = true;
    })
  }
  clear(){
    this.cat = new Cat("","");
    this.done = false;
  }
}
