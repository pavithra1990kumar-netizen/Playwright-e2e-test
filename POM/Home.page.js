class Home{
    constructor(page){
        this.Registerlnk= page.getByRole('link',{name:"Register"})
    }
}
export default Home