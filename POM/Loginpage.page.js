class Loginpage{
    constructor(page){
        this.username=page.locator('input[name="username"]')
        this.password=page.locator('input[name="password"]')
        this.LoginButton=page.getByRole('button',{name:'Log In'})
    }
}
export default Loginpage