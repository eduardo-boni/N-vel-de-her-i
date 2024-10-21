let nome = "João";
let quantDeXp = 50000;
let nivel = "";

switch (true) {
    case (quantDeXp < 1000):
        nivel = "Ferro";
        break;
    case (quantDeXp >= 1001) && (quantDeXp <= 2000):
        nivel = "Bronze";
        break;
    case (quantDeXp >= 2001) && (quantDeXp <= 5000):
        nivel = "Prata";
        break;
    case (quantDeXp >= 5001) && (quantDeXp <= 7000):
        nivel = "Ouro";
        break;
    case (quantDeXp >= 7001) && (quantDeXp <= 8000):
        nivel = "Platina";
        break;
    case (quantDeXp > 8001) && (quantDeXp < 9000):
        nivel = "Ascendente"; 
        break;
    case (quantDeXp > 9001) && (quantDeXp >= 10000):
        nivel = "Imortal"; 
        break;
        case quantDeXp >= 10001:
            nivel = "Radiante"; 
            break;
    }
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)