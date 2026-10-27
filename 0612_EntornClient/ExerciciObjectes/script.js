// Exercici 1: Crear i estructurar objectes
const producte = {
  id: 1,
  nom: "aigua",
  preu: 2,
  "detalls de l'enviament": "Carrer Barcelo",
  informacio: {
    origen: "Espanya",
  },
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
//modifiquem la copia
copia.preu = 13;
copia.informacio.origen = "França";
console.log("Copia amb preu modificat: ", copia);
console.log("Original: ", producte);
//si canvio una propietat primitiva de la copia (com el preu) l'original no canvia, perque l'spread copia el valor
//si canvio una cosa d'un objecte de dins (com informacio.origen) l'original tambe canvia, perque l'spread nomes copia la referencia d'aquest objecte i els dos apunten al mateix
//per aixo es diu copia superficial, nomes copia el primer nivell

// Exercici 4: Recorregut d'objecte
const notes = {
  matematiques: 8.5,
  programacio: 9.0,
  sistemes: 6.5,
  idiomes: 7.2,
};

console.log("Exercici 4");
const moduls = Object.keys(notes);
console.log("Moduls: ", moduls);

for (const [asignatura, nota] of Object.entries(notes)) {
  console.log(`Mòdul: ${asignatura} -> Nota: ${nota}`);
}

const llistaNotes = Object.values(notes);
const suma = llistaNotes.reduce((total, nota) => total + nota, 0);
const mitjana = suma / llistaNotes.length;
console.log("Mitjana: ", mitjana);
// Exercici 5: Immutabilitat (freeze vs seal)
console.log("Exercici 5");
const configuracio = {
  url: "aulavirtual.iesthosicodina.cat",
  port: 443,
};
Object.freeze(configuracio);

configuracio.port = 555;
configuracio.url = "youtube.com";

console.log(configuracio);

const usuariSessio = {
  username: "eric",
  estat: "actiu",
};
Object.seal(usuariSessio);

usuariSessio.estat = "inactiu";
usuariSessio.idioma = "catala";
delete usuariSessio.username;
console.log(usuariSessio);
// Exercici 6: Destructuring
console.log("Exercici 6");

const empresa = {
  nom: "TechSolutions",
  ubicacio: { ciutat: "Girona", codiPostal: "17001" },
  directors: ["Laura", "Albert"],
};

const {
  ubicacio: { ciutat },
} = empresa;

console.log(ciutat);

const { nom: nomEmpresa } = empresa;

console.log(nomEmpresa);

const { nom: nomDeEmpresa, ...detalls } = empresa;

console.log(nomDeEmpresa);
console.log(detalls);

// Exercici 7: Còpia profunda
console.log("Exercici 7");

const joc = {
  titol: "Zelda",
  dades: {
    horesJugades: 45,
    inventari: ["Espasa", "Escut"],
  },
};

const jocClon = structuredClone(joc);

jocClon.dades.inventari.push("Arc");

console.log("Original", joc);
console.log("Clon", jocClon);
//JSON.parse(JSON.stringify()) passa l'objecte a text i despres el torna a crear, pero JSON nomes guarda dades simples
//si l'objecte te funcions es perden, perque JSON no les pot guardar i les ignora sense avisar
//si te un Date es converteix en un string, i al tornar-lo a crear ja no es una data sino un text
