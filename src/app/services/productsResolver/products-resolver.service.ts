import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductService } from '../product/product.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolverService implements Resolve<any> {
  constructor(private product: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    rstate: RouterStateSnapshot
  ): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.product.getProducts().pipe(
      catchError((error) => {
        return of('No data');
      })
    );
  }
}
