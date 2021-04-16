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
function showInformation5(name: string):never {
   throw new Error("Error")
  }

  