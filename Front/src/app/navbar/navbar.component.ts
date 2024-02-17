import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  showNavigationArrows = false;
	showNavigationIndicators = false;
  showOptionsCard:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToIndices(){
    this.router.navigate(['/indices']);
  }

  handleOptionClick(val:string){}

}
