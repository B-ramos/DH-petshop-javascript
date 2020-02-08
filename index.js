let pets = [
    {
        nome: "Thor",
        tipo: "cachorro",
        raca: "Pastor Alemão",
        idade: [5, "anos"],
        genero: "M",
        vacinado: true,
        servicos: ["Banho", "Tosa"]
    },
    {
        nome: "Thanos",
        tipo: "cachorro",
        raca: "Pitbull",
        idade: [10, "anos"],
        genero: "M",
        vacinado: true,
        servicos: ["Banho", "Tosa"]
    },
    {
        nome: "Gamora",
        tipo: "cachorro",
        raca: "labrador",
        idade: [2, "meses"],
        genero: "F",
        vacinado: false,
        servicos: ["tosa"]
    },
    {
        nome: "Romanoff",
        tipo: "cachorro",
        raca: "vira lata",
        idade: [2, "anos"],
        genero: "F",
        vacinado: false,
        servicos: []
    }
];

const listarPets = pets => {

    for (let pet of pets) {
        console.log(`
        Nome do Animal: ${pet.nome}
        Descrição: ${pet.tipo}
        Raça: ${pet.raca}            
        Idade: ${pet.idade}
        ${pet.genero === "M" ? "Genero: Macho" : "Genero: Femea"}
        ${pet.vacinado == true ? "Está vacinado" : "Não está vacinado"}
        Serviços realizados: ${pet.servicos}`
        )
    }
};

const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(` ${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`${pet.nome} ja está vacinado!`);
    }
};

const separarPetsVacinados = pets => {

    let vacinados = pets.filter(pet => pet.vacinado).length;
    let naoVacinados = pets.filter(pet => !pet.vacinado).length;

    console.log(`
    Temos ${vacinados} pets vacinados.
    Temos ${naoVacinados} pets não vacinados.`);
};

const campanhaDeVacinacao = pets => {

    let contador = 0;
    let arrayForamVacinados = [];

    while (contador < pets.length) {
        if (!pets[contador].vacinado) {
            vacinarPet(pets[contador]);
            arrayForamVacinados.push(pets[contador].nome);
        }
        contador++;
    }
    console.log(`Total de pets vacinados: ${arrayForamVacinados.length}`);
};

const validarDados = novoPet => {

    return (
        novoPet.nome &&
        novoPet.tipo &&
        novoPet.raca &&
        novoPet.idade &&
        novoPet.genero);
};

const adicionarPet = novoPet => {

    if (typeof (novoPet) == "object" && validarDados(novoPet)) {

        novoPet.nome = String(novoPet.nome);
        novoPet.idade = parseInt(novoPet.idade);

        if (!novoPet.servico) {
            novoPet.servico = [];
        }
        pets.push(novoPet);
        console.log(`${novoPet.nome} foi adicionado a lista de pets! `);
    } else {
        console.log(`Por favor verificar os dados do pet!`);
    }
};

const darBanhoPet = pet => {
    pet.servicos.push("banho");
    console.log(`${pet.nome} está de banho tomado`);
};

const tosarPet = pet => {
    pet.servicos.push("tosa");
    console.log(`${pet.nome} está tosado`);
};

const apararUnhaPet = pet => {
    pet.servicos.push("corte de unha");
    console.log(`${pet.nome} Está de unhas cortadas`);
};

const atenderPet = (pet, ...servico) => {

    console.log(pet.nome + " seja bem vindo!");

    for (s of servico) {
        s(pet);
    }

    const pagar = () => {
        console.log(`Pagamento realizado com sucesso!`);
    }
    pagar();
    console.log(`volte sempre ${pet.nome}`);
};

const buscarPet = nomePet => {

    let nomeEncontrado = pets.filter(pet => pet.nome == nomePet)

    if(nomeEncontrado.length > 0){
        return nomeEncontrado;
    }else{
        return `Nome não encontrado!`;        
    }
    
}
//console.log(buscarPet("Thor"))
//atenderPet(pets[0], tosarPet, darBanhoPet);
//adicionarPet({nome: "Zica", tipo: "cachorro", raca: "labrador", idade: "3", genero: "M" });
//vacinarPet(pets[1]);
//separarPetsVacinados(pets);
//campanhaDeVacinacao(pets);
// listarPets(pets);


