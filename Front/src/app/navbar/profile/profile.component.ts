import { Component, HostListener, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public isCollapsed = true;
  isLoggedIn:boolean=false;
  
  @ViewChild('login')login:LoginComponent | undefined;
  @ViewChild('signUp')signUp:LoginComponent | undefined;


  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.data$.subscribe((res)=>{
      this.isLoggedIn=res;
      console.log(res);
    })
  }

  showOptionsCard = false;

  toggleOptionsCard() {
    this.showOptionsCard = !this.showOptionsCard;
  }

  handleOptionClick(option: string) {
    alert('Clicked on: ' + option);
    this.toggleOptionsCard();
    // Add your logic here based on the clicked option
  }

  handleClick(event: any){
    if(event){
      this.showOptionsCard=false;
    }
    else{
      this.showOptionsCard=true;
    }
  }

  openLogin(){
    this.login?.open();
  }

  openSignUp(){
    this.signUp?.open();
  }

  logOut(){
    this.authService.logOut().subscribe((res)=>{
      this.authService.removeToken();
    })
  }
  
}
