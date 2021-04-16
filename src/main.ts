let message: string = "hello wold"; //para tipagem de variavél

console.log(message);

let total: number; //para tipagem de variaveis numericas podendo ser com virgula
total = 10.5;

let isOpen: boolean;
isOpen = false;

//any, void, never

//any vai aceitar qualquer valor (string, boolean,number) *não aconselhavel

let stock: any = 89;
stock = "null";

//void geralmente usado para função que não retorna nada

//nesse caso setei a função com o tipo do retorno que quero
function showInformation(): string {
  return "cataline";
}
//aqui ele não me retorna nada e eu assinalo o void no metodo
function showInformation2(): void {
  console.log("ola");
}
//no caso de promises é só colocar o tipo de retorno dentro de <>
//function showInformation3(): Promise<string> {
//   console.log("ola");
//  }

//em casos de parametros é só colocar o tipo ao lado
function showInformation4(name: string): void {
  console.log("ola");
}

//never quase nunca usado
//usado para erros, exeçoes ou loops
function showInformation5(name: string): never {
  throw new Error("Error");
}

//array, tuple, enum

//Arrays= preciso passar o tipo dentro de <> para que ele saiba qual tipo de dados o array recebera e dara erro caso tente colocar uum diferente ex:
//mas essa maneira não é muito usada
let precos: Array<number>;
precos = [1, 2, 3, 4, 5, 6];

//maneira mais usada ex:
let valores: number[];
valores = [1, 2, 3, 4, 5, 6];

//Tuple
//Um array quando sabemos a quantidade de itens que teremos e o tipo de cada um
let itens: [number, string];
itens = [1, "hello"];

//Enum
//é um conjunto de chaves e valores ex:
enum Colors {
  white = "#fff",
  black = "#000",
}

//ex de uso: quero uma cor mas não lembro seu valor, então é só fazer assim:

let corWhite: Colors = Colors.black;
console.log(corWhite);

//Union
//para caso eu queira passar um valor numerico mas ele aceite por extenso
//*se aprlica para outros tipos de variaveis
let age: number | string;

age = 20;
age = "vinte";

//outro exemplo
//estou dizendo que ele aceitara qualquer um dos dois
function showPet(pet: "cat" | "dog") {
  console.log(pet);
}
showPet("dog");

//Aliases
//para não repetir codigo eu crio um tipo e passo em variaveis ou parametro de funções ex:

//uma função que recebe parametros iguais mas fazem coisas diferentes

type Produto = "café" | "leite" | "açucar";
function produtos(produto: Produto) {
  console.log(produto);
}

function produtos2(produto: Produto) {
  console.log(produto + " mais teste 2");
}

produtos("café")
produtos2("leite")

//Type inference
//não preciso definir os tipos pois ele sabe
let mensagem= "Hello"

//Type Assertion
//const inputName= document.querySelector("#name") as HTMLInputElement | null
//inputName.value