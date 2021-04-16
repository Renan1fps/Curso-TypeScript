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

produtos("café");
produtos2("leite");

//Type inference
//não preciso definir os tipos pois ele sabe
let mensagem = "Hello";

//Type Assertion
//const inputName= document.querySelector("#name") as HTMLInputElement | null
//inputName.value

//--------------------------------------------------------------------------//
//>>>>>>Tipando objetos

//Interfaces
type UF = "SP" | "DF" | "PR";
interface User {
  name: string;
  address: { city: string; UF: UF };
  sayHello: () => void;
}

function showCity(user: User) {
  return user.address.city;
}

//>>>>>>Propriedades opcionais
//basta acrescenta a interrogação exemplo:

interface Loja {
  name: string;
  address?: {
    city: string;
    UF: UF;
  };
}

//mas se eu quiser usar esse propriedade em outro lugar é provavel que de erro pois ele pode estar vazio e não conseguimos compilar ex :

/*function showUf(loja: Loja){
  return loja.address.UF
}
*/

//o que podemos fazer para contornar isso é tratar o erro como ex baixo:

function showUf(loja: Loja) {
  return loja.address ? loja.address.UF : "Não existe UF";
}

// reduzindo ainda mais o codigo podemos ter o seguinte resultado

function showUf2(loja: Loja) {
  return loja.address?.city;
}
//ele está vendo se existe address, caso exista ele me retona a city caso não me retona undefined

//>>>>>>Readonly
//impede que depois de criado algo seja alterado bastando apenas colocar readonly

interface People {
  readonly name: string;
  age: number;
}

//sem readonly
let user: People = {
  name: "Renan",
  age: 21,
};

//user.name= "jose" não da erro

//com readonly

let user2: People = {
  name: "Renan",
  age: 21,
};

//user2.name="jdjd" dará erro

//>>>>>>Extends

interface Veiculo {
  rodas: number;
  acelerar: () => void;
  frear?: () => void;
}

interface Moto extends Veiculo {
  capacete: boolean;
  empinar: () => void;
}
//mto herdara de veiculo metodos e atributos

//>>>>>>Implements
//posso implementas varias interface separando por virgula
//*sou obrigado a implementar atributos e metodos depois de herdar a não ser que sejam opcionais
class Carro implements Veiculo {
  rodas: number;
  constructor(rodas: number) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log("acelerando");
  }
  frear() {
    console.log("freiando");
  }
}

//>>>>>>Pick e omit
/*Pick serve para pegar propriedades de uma interface ou outro tipo
e criar outro tipo de interface ex: */ 
interface Post{
  id: number
  title: string
  description: string
}

//quero pegar alguns elementos de post e criar um novo tipo ex:
type PostPreview= Pick<Post, "id" | "title">

let post: PostPreview
//post.id
//post.title

//Omit faz o inverso de Pick ( no caso ele omite o que eu passar e pega o restante)
type PostPreview2= Omit<Post, "id" | "title">

let post2: PostPreview2
//post2.description
