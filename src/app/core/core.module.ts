import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { requestInterceptor } from './auth/request.interceptor';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [ 
        HeaderComponent,
        FooterComponent 
    ],
    exports: [ 
        HeaderComponent,
        FooterComponent 
    ],
    imports: [ 
        CommonModule,
        RouterModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: requestInterceptor,
            multi: true
        }

    ]
})
export class CoreModule { }