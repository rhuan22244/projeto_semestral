class Animal{
    constructor(id, nome, especie, cliente){
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.cliente = cliente;
    }
    getNomeDoDono (){
        return this.cliente.nome
    }
    
}
const cliente1 = new Cliente ("Rhuan Silva","6545687858",993712266);
const testeAnimal = new Animal(1, "Kira", "Vira Lata", "Natally", cliente1);

console.log(testeAnimal);
testeAnimal.getNomeDoDono();