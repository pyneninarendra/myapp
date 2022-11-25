import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts:any=[]
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAllData()
    .subscribe(
      (res:any)=>{
        console.log(res);
        this.allProducts = res
      },
      (err:any)=>{
        console.log('err:',err);
      })
  }

}
