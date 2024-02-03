import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  failedLogin=false;
  //signUpForm: FormGroup;
  @ViewChild('login')login: any;
  @Output() redirectSignUp:EventEmitter<any>= new EventEmitter;

  constructor(private apiService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup ({
      'userId': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required])
     })
  }

  private modalService = inject(NgbModal);
	closeResult = '';

	open() {
		this.modalService.open(this.login, { size:'sm',ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

	redirectToSignUp(){
		this.redirectSignUp.emit();
	}

	onLogin(){

		this.apiService.login(this.loginForm?.value).subscribe({
			next: (res:any)=> {
				this.apiService.setUserDetails({fName:res.fName, lName: res.lName, user_id: res.user_id});
				this.apiService.setToken(res['Auth Token']);
				this.modalService.dismissAll('Save click');
			},
			error: (err)=> {
				this.failedLogin=true;
			  },
		});
	}

}
