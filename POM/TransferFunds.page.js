class TransferFunds{
    constructor(page){
        this.trsfrfudlink= page.getByRole('link',{name:'Transfer Funds'})
        this.trsfrheading=page.locator("//*[@id='showForm']/h1")
        this.amount=page.locator("//input[@id='amount']")
        this.fromaccnodropdown=page.locator("//select[@id='fromAccountId']")
        this.transferbutn=page.getByRole('button',{name:'Transfer'})
        this.trsfrmssg=page.locator("//div[@id='showResult']")
        this.trframt=page.locator("//span[@id='amountResult']")
        this.trsfrmact=page.locator("//span[@id='fromAccountIdResult']")
        this.trstoact=page.locator("//span[@id='toAccountIdResult']")
    }
}
export default TransferFunds