import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
  showSidebarProductOptions:boolean=false;

  constructor(private router: Router, private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  navigateToIndices(){
    this.closeDiseBar();
    this.router.navigate(['/indices']);
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }

  navigateTo(routeName:string){
    this.router.navigate([`/${routeName}`]);
  }

  handleOptionClick(val:string){}

  handleClick(event: any){
    if(event){
      this.showOptionsCard=false;
    }
    else{
      this.showOptionsCard=true;
    }
  }

  openSideBar(){
    const element = this.elementRef.nativeElement.querySelector('.sidebar');
    element.style.display = 'flex';
  }

  closeDiseBar(){
    const element = this.elementRef.nativeElement.querySelector('.sidebar');
    element.style.display = 'none';
  }

  hideShowPdtOption(){
    this.showSidebarProductOptions=!this.showSidebarProductOptions;
    const element = this.elementRef.nativeElement.querySelector('.productSubMenu');
    if(this.showSidebarProductOptions){
      element.style.display = 'block';
    }
    else{
      element.style.display = 'none';
    }
  }
}
