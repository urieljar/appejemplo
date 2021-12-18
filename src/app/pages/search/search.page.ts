import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
albums:any[];
textoBuscar="";
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getAlbums().subscribe(
      res => {
        console.log(res);
        this.albums = res;
      }
    );
  }

  onSearchChange( event ){
    console.log(event);
    this.textoBuscar = event.detail.value;
    console.log(this.textoBuscar);

  }

}
