import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-copy-user-id-modal',
  templateUrl: './copy-user-id-modal.component.html',
  styleUrls: ['./copy-user-id-modal.component.css']
})
export class CopyUserIdModalComponent implements OnInit {

  @Input() showPopup: boolean = false;
  @Input() message: string = 'Text copied to clipboard!';
  @ViewChild('copy')copyUserId: any;
  userId: any='7a53d57c-e9e3-44df-aaa0-3a22d7925a36';

  private modalService = inject(NgbModal);

  constructor() { }

  ngOnInit(): void {
  }

  openCopy(res :any)
  {
    this.userId=res;
    this.modalService.open(this.copyUserId, { size:'md',ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				//this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				//this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }

  copyUserid(input: { select: () => void; }){
    input.select();
    document.execCommand('copy');
  }

}
