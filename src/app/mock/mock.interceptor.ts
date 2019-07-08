import { Injectable, Injector } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http'
import { Observable, of } from 'rxjs'
import * as MockServices from './services'
import { IReqestService } from 'app/core/http'
import { callbackify } from 'util'

@Injectable()
export class MockHttpRequestInterceptor implements HttpInterceptor {
  public services: {
    url: string
    method: any
    callback: () => any
  }[] = []

  constructor(private injector: Injector) {
    Object.values(MockServices)
      .map((x: any) => x.mockServices)
      .forEach((items: Map<IReqestService, () => any>) => {
        items.forEach((value, key) => {
          const url = [key.controller, key.action].filter(x => x).join('/')
          const method = key.method
          this.services.push({
            url,
            method,
            callback: value
          })
        })
      })
  }

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const mockService = this.services.find(
      x => request.url.includes(x.url) && request.method === x.method
    )

    if (mockService) {
      return of(new HttpResponse({ status: 200, body: mockService.callback() }))
    }

    return next.handle(request)
  }
}
