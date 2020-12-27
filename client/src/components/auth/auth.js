class Auth {
    constructor() {
        this.authenticated = false;
    }
    login() {
        this.authenticated = true;
        localStorage.setItem('authProtection', this.authenticated);
    }
    logout() {
        this.authenticated = false;
        localStorage.setItem('authProtection', this.authenticated);
    }
    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();