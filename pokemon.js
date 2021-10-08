/* Nombre de la class en mayuscula */
class Pokemon {

    #name=' ';
    #type=' ';
    #evolutions=[];

    []
    constructor(name, type, evolutions){
        this.name=name;
        this.type=type;
        this.evolutions=evolutions;

    }

set name(name){
    this.#name=name;
}

set type(){
    this.#type=type
}

set evolutions(evolutions){
    this.#evolutions=evolutions;
}

    attack(){
        return `${this.name}, esta atacando`;
    }

    evolve(evolution=0){
        //Valida que existe el elemento 
        const EVOLVE=this.evolutions[evolution] || ``;
        let message =`No puedo evolucionar`;

        if(EVOLVE){
            message=`${this.namee}esta evolucionando a ${EVOLVE}`;
            this.name=EVOLVE;
        }

        return message;

    }

}

class TypeFire extends Pokemon{
    constructor(name, evolutions){
        super(name,`fire`, evolutions);
    }
    mesaage(){
        return`Holla, soy ${this.name} y soy de tipo fuego`;

    }
}

const carmander=new TypeFire(`Carmander`,[`Carmeleon, Carizar`]);

console.log(carmander.message());



const Carmander=new Pokemon(`Carmander`, `Fire`,[`Carmeleon`, `Carizar`]);

const Squirt=new Pokemon(`Squirt`, `Water`,[`Waterloo`, `Blazze`]);

console.log((`${Carmander.#name} es de tipo ${Carmander.type}`));
console.log(Carmander.attack());
console.log(Carmander.evolve(0));
console.log((`${Carmander.#name} es de tipo ${Carmander.type}`));
Carmander.name=``;
console.log(`${Carmander.name}`);

console.log((`${Squirt.#name} es de tipo ${Squirt.type}`));
console.log(Squirt.attack());
console.log(Squirt.evolve(0));
console.log((`${Squirt.#name} es de tipo ${Squirt.type}`));
