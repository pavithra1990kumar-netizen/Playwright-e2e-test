class OpenNewAccount{
    constructor(page){
        this.OpenNewAccountlink= page.getByRole('link',{name:'Open New Account'})
        this.AccountTypedropdwn=page.locator('select#type')
        this.OpenNewAccountBtn=page.getByRole('button',{name:'Open New Account'})
        this.newAcctNum=page.locator('a#newAccountId')
        this.Accopnmssg=page.locator('div#openAccountResult h1')
        //this.Accid=page.locator('a#newAccountId')
        //this.Accid=page.getByRole('link',{name:'newAccountId'})
        this.AccDetails=page.locator('//*[@id="accountId"] ')
    }

}
export default OpenNewAccount
