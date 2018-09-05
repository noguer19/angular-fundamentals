import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em {float: right; color: #E05C65; padding-left: 10px;}
    `]
})
export class LoginComponent {
    username: string
    password: string
    mouseoverLogin: boolean

    constructor(private authService: AuthService, private route: Router) {

    }

    login(formValues) { 
       this.authService.loginUser(formValues.userName, formValues.password)
       this.route.navigate(['events'])
    }

    cancel() {
        this.route.navigate(['events'])
    }
}