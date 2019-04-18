import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pictures:string[];
  selectedImage:string;
  show:boolean;
  authors:string[];
  constructor(){
    this.pictures=[];
    this.authors=[];
    this.show=false;
    this.selectedImage="";
  }
  ngOnInit(){
    this.insertImagesToArray(20);
    this.insertAuthorsToArray();

  }

  insertImagesToArray(amount:number){
    for(let i=10; i<amount+10;i++){
      this.pictures.push(`https://picsum.photos/300/200?image=${i}`);
    }
  }
  insertAuthorsToArray(){
    for(let i=0; i<20;i++){
        this.authors[i]="david"+i
    }
  }

  onClickShow(src:string){
    this.show=true;
    this.selectedImage= src;
  }
}
