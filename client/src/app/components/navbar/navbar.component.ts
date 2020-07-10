import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myFunction(){
    var x = document.getElementById("dropdown-content");
    if (x.style.display === "inline-flex") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-flex";
    }
  }
  
}
