import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexSocketService {

  constructor(private socket: Socket) { 
  }

  public sendMessage(message: string): void {
    this.socket.emit('message', message);
  }

  public getMessage(): Observable<string> {
    return this.socket.fromEvent('message')
  }

  public disconnect(){
    this.socket.disconnect();
  } 
}
