import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
 superHeroes: Observable<any>;
 publisher=''; 
 constructor( private ds: DataService) { }

  ngOnInit() {
    this.superHeroes = this.ds.getHeroes();
  }

  segmentChanged(event){
    console.log(event.detail.value);
    this.publisher = event.datail.value;
  }
}
