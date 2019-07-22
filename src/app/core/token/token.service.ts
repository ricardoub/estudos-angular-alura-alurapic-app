import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    hasToken() {
        return !!this.gettoken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    gettoken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}