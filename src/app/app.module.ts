import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AeroportoComponent } from './component/aeroporto/aeroporto.component';

@NgModule({
  declarations: [
    AppComponent,
    AeroportoComponent
  ],
  imports: [
    BrowserModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function jwtOptionsFactory(authService: AuthService) {
  return {
    tokenGetter: () => {
      return authService.getToken();
    },
    whitelistedDomains: ['localhost:3000']
  };
}