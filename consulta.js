class Consulta{
    constructor(id, data, animal, cliente, total){
        this.id = id;
        this.data = data;
        this.animal = animal;
        this.cliente = cliente;
        this.total = total;
    }
    getNomeDoDono (){
        return this.cliente.nome
    }
    getNomeDoAnimal (){
        return this.animal.nome
    }
}

const cliente1 = new Cliente("Rhuan Silva","6545687858",993712266);
const testeAnimal = new Animal(1, "Kira", "Vira Lata", "Natally");
const consulta1 = new Consulta(1, "11/03/2025", testeAnimal, cliente1, 100.00);

console.log(consulta1);
testeAnimal.getNomeDoAnimal();
cliente1.getNomeDoDono();