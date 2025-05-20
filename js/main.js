//Les objects

const restaurant = {
  nom: "Chez Oli",
  ouvert: true,
  commandes: [
    {
      table: 1,
      client: "Olivier",
      plats: [
        { nom: "Burger", prix: 12.5 },
        { nom: "Frites", prix: 4 }
      ]
    },
    {
      table: 2,
      client: "Aurélio",
      plats: [
        { nom: "Salade César", prix: 9 },
        { nom: "Eau plate", prix: 2 }
      ]
    },
    {
      table: 1,
      client: "Olivier",
      plats: [
        { nom: "Café", prix: 2.5 }
      ]
    },
    {
      table: 3,
      client: "Charlotte",
      plats: [
        { nom: "Pâtes aux champignons", prix: 11 },
        { nom: "Verre de vin rouge", prix: 5 }
      ]
    },
    {
      table: 4,
      client: "Lorian",
      plats: [
        { nom: "Nuggets", prix: 6 },
        { nom: "Compote", prix: 3 },
        { nom: "Jus de pomme", prix: 2 }
      ]
    },
    {
      table: 5,
      client: "Hugo",
      plats: [
        { nom: "Purée carottes", prix: 4 },
        { nom: "Petit pot dessert", prix: 2.5 }
      ]
    },
    {
      table: 6,
      client: "Thomas",
      plats: [
        { nom: "Pizza Margherita", prix: 10 },
        { nom: "Bières artisanale", prix: 4.5 }
      ]
    },
    {
      table: 3,
      client: "Charlotte",
      plats: [
        { nom: "Tiramisu", prix: 5.5 }
      ]
    },
    {
      table: 7,
      client: "Aurélie",
      plats: [
        { nom: "Steak frites", prix: 14 },
        { nom: "Coca zéro", prix: 3 }
      ]
    }
  ]
};

// console.log(...restaurant.commandes[8].plats);
//Création de la liste des commandes groupées
let commandesGroupees = [];

restaurant.commandes.forEach((commande) => {
    // Cherche si une commande existe déjà avec la même table et le même client
    let commandeExistante = commandesGroupees.find(c => 
        c.table === commande.table && c.client === commande.client
    );

    if (commandeExistante) {
        // Si elle existe, on ajoute les plats à l'existante
        commandeExistante.plats.push(...commande.plats);
    } else {
        // Sinon, on ajoute une nouvelle commande dans le tableau groupé
        commandesGroupees.push({
            table: commande.table,
            client: commande.client,
            plats: [...commande.plats] // copie des plats
        });
    }
});


//Les elements html
const divDetails=document.querySelector('.detail');

const orderDetails=document.createElement('details');
const orderSummary=document.createElement('summary');

//Les variables
let priceByCommande=0;

// console.log(divDetails);


// console.log(restaurant.commandes[1].client);

// const divDetails = document.querySelector('.detail');

//Affichange commande groupée

console.log(commandesGroupees);

commandesGroupees.forEach((commande) => {
    let orderDetails = document.createElement('details');
    let orderSummary = document.createElement('summary');
    orderSummary.innerHTML = `🍽️ Table ${commande.table}`;
    orderDetails.append(orderSummary);

    let spanNom = document.createElement('span');
    spanNom.textContent = `🛂 Nom client : ${commande.client}`;
    orderDetails.append(spanNom);

    let total = 0;

    commande.plats.forEach((plat, index) => {
        let ligne = document.createElement('span');
        ligne.textContent = `${index + 1}. 🧆 Libellé : ${plat.nom} · 🏷️ Prix : ${plat.prix} €`;
        orderDetails.append(ligne);
        total += plat.prix;
    });

    let totalSpan = document.createElement('span');
    totalSpan.classList.add('totalPrice');
    totalSpan.textContent = `💶 Prix total à payer : ${total} €`;
    orderDetails.append(totalSpan);

    divDetails.append(orderDetails);
});






