class Pokemon {
   constructor(id, name, type, moves, hp, weak, strong, img) {
       this.id = id;
       this.name = name;
       this.type = type;
       this.moves = moves;
       this.hp = hp;
       this.weak = weak;
       this.strong = strong;
       this.img = img;
   }


   attack(move, target) {
       console.log(`${this.name} has attacked ${target.name}`)
       let dmg = move.dmg


       if (target.weak.includes(move.type)) {
           console.log(`Weak to ${move.type}`)
           dmg *= 1.8
       } else if (target.strong.includes(move.type)) {
           console.log(`Strong to ${move.type}`)
           dmg *= 0.7
       }




       target.receive_dmg(dmg)
   }




   receive_dmg(dmg) {
       console.log(`${this.name} received ${dmg}`)
       if (dmg >= this.hp) {
           this.hp = 0
           console.log('Target has fainted')
       } else {
           this.hp -= dmg
       }


   }


   render_pkmn() {
       console.log('rendering pokemon')
       this.element = document.createElement('div')
       this.element.className = 'pk-card'


       this.title = document.createElement('h4')
       this.title.id = 'pk-title'
       this.title.textContent = this.name


       this.picture = document.createElement('img')
       this.picture.id = 'pic'
       this.picture.src = this.img


       this.moves_grid = document.createElement('div')
       this.moves_grid.id = 'moves_grid'




       for (let i = 0; i < this.moves.length -1; i++) {
           console.log('hi')
           console.log(this.moves[i])


           let x = document.createElement('div')
           x.id = 'move'
           x.textContent = `${this.moves[i].name}`
           this.moves_grid.appendChild(x)
       }




       //Appending components to card
       this.element.appendChild(this.title)
       this.element.appendChild(this.picture)
       this.element.appendChild(this.moves_grid)
       document.getElementById('pk-holder').appendChild(this.element)
   }
}


class Move {
   constructor(name, dmg, type, pp) {
       this.name = name;
       this.dmg = dmg;
       this.type = type;
       this.pp = pp;
   }


   use() {
       this.pp -= 3;
       return this.dmg;
   }
}


tndr_shck = new Move('Thunder Shock', 30, 'Electric', 10)
tack = new Move('Tackle', 10, 'Normal', 20)
wtr_gn = new Move('Water Gun', 25, 'Water', 15)


pikachu = new Pokemon(1, 'Pikachu', "Electric", [tack, tndr_shck], 23, ["Ground", "Rock"], ["Water", "Grass", "Fly"], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv_gXfVXXRdB5dtOiLaKI06RDfQQgv8wIqs2S7oX8o3jyy5E:https://fictionhorizon.com/wp-content/uploads/2021/01/does-pikachu-have-a-black-tail-mandella-effect-explained.jpg&s')
squirtle = new Pokemon(2, 'Squirtle', 'Water', [tack, wtr_gn], 30, ["Electric", "Grass"], ["Fire", "Rock", "Ground", "Ice"], 'https://static0.srcdn.com/wordpress/wp-content/uploads/Squirtle-Looking-Happy.jpg?w=1200&h=675&fit=crop')


console.log(pikachu.hp)


squirtle.attack(squirtle.moves[1], pikachu)
pikachu.attack(pikachu.moves[1], squirtle)


pikachu.render_pkmn()


console.log('Pikachu\'s hp:')
console.log(pikachu.hp)








