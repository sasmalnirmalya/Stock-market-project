import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { CacheService } from '../Services/cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService: CacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //return next.handle(request);
    if (request.method !== 'GET' || request.url !== 'https://fmpcloud.io/api/v3/stock/list?apikey=75d50292cad61f6ffdb1b26a7d670506') {
      return next.handle(request);
    }

    const cachedResponse = this.cacheService.getItem(request.url);
    if (cachedResponse) {
      return of(new HttpResponse({ body: cachedResponse }));
    }

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const items = event.body as any[];
          let filteredItems= items.filter((item: { exchangeShortName: string; }) => item.exchangeShortName === 'NSE')
          this.cacheService.setItem(request.url, filteredItems);
        }
      })
    );
  }
}
