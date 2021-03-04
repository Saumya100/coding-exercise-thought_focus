import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SampleDataService } from '../services/sample-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: any; 
  constructor(private sampleService: SampleDataService) { }

  ngOnInit() {
    this.getSampleData();
  }

  getSampleData(){
    this.sampleService.getSampleData().subscribe(
      (result: any) =>{
        console.log(result);
        this.list = result.data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
