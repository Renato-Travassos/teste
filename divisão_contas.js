//me perdoem,não consegui fazer este
const product1 = { id: 1, preco: [42, 8], nome: 'pedro' };
const product2 = { id: 2, preco: [42, 8], nome: 'joao' };
const product3 = { id: 3, preco: [42, 7], nome: 'maria' };
const array = [product1, product2, product3];
const valores = [];
let total_pessoas = array.length;

const t = array.map((element, index, arr) => {
  const quantia = element.preco.length;

  const atual = element.preco[0];
  const proximo = arr[index + 1]?.preco[0];

  if (proximo !== undefined && atual === proximo) {
    return parseInt((atual - (atual * 0.1)) / quantia);
  } else {
    return (atual + (atual * 0.1)) / quantia;
  }
});

console.log(t);
