import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  @ViewChild('signUp')signUp: any;
  @Output() redirectLogin:EventEmitter<any>= new EventEmitter;

  constructor(private apiService: AuthenticationService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup ({
      'firstName':new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'lastName':new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(6)]),
     })
  }

  private modalService = inject(NgbModal);
	closeResult = '';

	open() {
		this.modalService.open(this.signUp, { size:'sm',ariaLabelledBy: 'modal-basic-title' }).result.then(
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

	redirectToLogin(){
		this.redirectLogin.emit();
	}

	onSignUp(){
		this.apiService.signUp(this.signUpForm?.value).subscribe((res)=>{
			console.log(res)
		},
		(err)=>{
			console.log(err)
		});
	}

}
