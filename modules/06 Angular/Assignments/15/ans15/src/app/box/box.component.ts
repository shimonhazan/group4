import { Component,Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent{
  @Input() src:string;
  @Output() showBigPicture = new EventEmitter<string>();
  likeAmount:number;
  clicked:boolean;
  constructor() {
    this.likeAmount=0;
    this.clicked=false;
  }
  addlike(){
    this.likeAmount++;
  }
  imgClicked(){
    this.showBigPicture.emit(this.src)
    //console.log(this.src)
    this.clicked=true;
  }
}