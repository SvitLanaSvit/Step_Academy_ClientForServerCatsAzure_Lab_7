import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.css']
})
export class ListCatsComponent implements OnInit {
  cats: Cat[] = [];

  constructor(private http: HttpService, private router: Router){}
  ngOnInit(): void {
    this.http.getCats().subscribe((data: any)=>{
      console.log(data);
      this.cats = data;
    })
  }

  editCat(cat: Cat){
    console.log(cat);
    this.router.navigate(["/editCat"], {state: {cat: cat}});
  }
  deleteCat(id: string, key: string){
    if(!id || !key){
      console.error('Cannot delete null object');
      return;
    }

    const confirmDelete = confirm(`Are you sure you want to delete cat with ID ${id} and Name ${key}?`);
    if(confirmDelete){
      this.http.deleteCat(id, key).subscribe((data: any)=>{
        let deleteIndex: number = this.cats.findIndex(elem=>elem.id === id && elem.name === key);
        if(deleteIndex !== -1){
          this.cats.splice(deleteIndex, 1);
        }
      })
    }
  }
}
