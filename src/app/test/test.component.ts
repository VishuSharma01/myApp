import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;

  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    return this.childEvent.emit("Hey CodeEvolution");
  }

}
