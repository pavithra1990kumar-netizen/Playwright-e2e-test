class Registration{
    //Parametrized constructor with page fixture
constructor(page){
    this.FirstNametxtfield=page.locator('[id="customer.firstName"]')
    this.LastNametxtfield=page.locator('[id="customer.lastName"]')
    this.Addresstxtfield=page.locator('[id="customer.address.street"]')
    this.Citytxtfield=page.locator('[id="customer.address.city"]')
    this.Statetxtfield=page.locator('[id="customer.address.state"]')
    this.ZipCodetxtfield=page.locator('[id="customer.address.zipCode"]')
    this.Phonenumtxtfield=page.locator('[id="customer.phoneNumber"]')
    this.SSNtxtfield=page.locator('[id="customer.ssn"]')
    this.usernametxtfield=page.locator('[id="customer.username"]')
    this.passwordtxtfield=page.locator('[id="customer.password"]')
    this.confirmpwdtxtfield=page.locator('[id="repeatedPassword"]')
    this.Registerbutton=page.getByRole('button',{name:'Register'})
    this.successmssg=page.locator('#rightPanel')
    this.Userregistermssg=page.locator('#rightPanel p')
}
}
export default Registration