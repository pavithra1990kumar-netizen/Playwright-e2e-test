class BillPay{
constructor(page){
    this.Billpaylink=page.getByRole('link',{name:'Bill Pay'})
    this.Payenme=page.locator('input[name="payee.name"]')
    this.Payeaddrs=page.locator('input[name="payee.address.street"]')
    this.Payecty=page.locator('input[name="payee.address.city"]')
    this.Payestat=page.locator('input[name="payee.address.state"]')
    this.Payezicd=page.locator('input[name="payee.address.zipCode"]')
    this.Payephnum=page.locator('input[name="payee.phoneNumber"]')
    this.Payeaccnum=page.locator('input[name="payee.accountNumber"]')
    this.Payevryacc=page.locator('input[name="verifyAccount"]')
    this.Payeamt=page.locator('input[name="amount"]')
    this.Payefrmacctdrpdwn=page.locator("//select[@name='fromAccountId']")
    this.Payesndpymtbuttn=page.getByRole('button',{name:'Send Payment'})
    this.PayeeResult=page.locator("//div[@id='billpayResult']")
    this.Billpayamt=page.locator("//span[@id='amount']")
    this.Billpayfrmacct=page.locator("//span[@id='fromAccountId']")
}
}
export default BillPay