export class Auth {
    static login(method, password) {
        if (Auth.isAuthenticable(method)) {
            return method.auth(password);
        }
        return false;
    }

    static isAuthenticable(method) {
        return "auth" in method && method.auth instanceof Function;
    }
}