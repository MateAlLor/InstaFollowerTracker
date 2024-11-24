class App {
    constructor(interfaz){
        this.interfaz = interfaz

        this.actualFollowers = [];
        this.oldFollowers = [];

        this.newFollowers = [];
        this.leftFollowers = [];
    }

    buscar_left_followers(){
        let found = false
        
        for (let i = 0; i < this.oldFollowers.length; i++){
          const old_user = this.oldFollowers[i];
          found = false
          for (let i = 0; i < this.actualFollowers.length; i++){
            const new_user = this.actualFollowers[i];
            if (new_user.id === old_user.id){
              found = true
              break
            }
          }
      
          if (!found){
            this.leftFollowers.push(old_user)
          }

        }

    }

    buscar_new_followers(){
        let found = false

        // Buscar new followers
        for (let i = 0; i < this.actualFollowers.length; i++){
          const new_user = this.actualFollowers[i];
          found = false
          for (let i = 0; i < this.oldFollowers.length; i++){
            const old_user = this.oldFollowers[i];
            if (new_user.id === old_user.id){
              found = true
              break
            }
          }
      
          if (!found){
            this.newFollowers.push(new_user)
          }
        }
      }
}

export default App