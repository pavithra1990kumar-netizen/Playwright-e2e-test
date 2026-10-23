class AccountsOverview{
    constructor(page){
        this.Accoviwlink=page.locator("//a[text()='Accounts Overview']")
        this.Accovrviwheading=page.locator('//*[@id="showOverview"]/h1')
    }
    async hasAccountNumber(accountNo) {
    return await this.page
        .locator(`#accountTable a:text-is("${accountNo}")`)
        .isVisible();
}
}
export default AccountsOverview