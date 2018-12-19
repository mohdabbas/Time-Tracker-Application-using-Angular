import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openSideNav(){
    this.toggleSideNav.emit();
  }

}
