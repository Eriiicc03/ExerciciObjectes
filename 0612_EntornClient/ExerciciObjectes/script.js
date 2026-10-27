// Exercici 1: Crear i estructurar objectes
const producte = {
  id: 1,
  nom: "aigua",
  preu: 2,
  "detalls de l'enviament": "Carrer Barcelo",
};
console.log("Exercici 1");
console.log("producte", producte);
// Exercici 2: Accés segur i valors per defecte
const client = {
  id: 402,
  perfil: {
    nom: "Carles",
    contacte: {
      email: "carles@correu.com",
    },
  },
};

const idiomaClient = client.perfil?.idioma ?? "ca";
console.log("Exercici 2");
console.log("telefon:", client.perfil.contacte?.telefon);
console.log("Idioma client sense definir: ", client.perfil?.idioma);
console.log("Idioma client: ", idiomaClient);

// Exercici 3: Modificació dinàmica i clons superficials
console.log("Exercici 3");
producte.estoc = 50;
delete producte["detalls de l'enviament"];
const copia = { ...producte };

console.log("Afegim estoc i eliminem detalls: ", producte);
console.log("Copia: ", copia);

// Exercici 4: Recorregut d'objecte

// Exercici 5: Immutabilitat (freeze vs seal)

// Exercici 6: Destructuring

// Exercici 7: Còpia profunda
