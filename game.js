let caixa = document.querySelector('#caixa_game');
let cubos = [];

largura = 12000;  
altura = 12000;  
calculo = Math.floor(altura / 50) * Math.floor(largura / 50); 
 
caixa.style.width = largura + 'px';
caixa.style.height = altura + 'px';

for (i = 0; i < calculo; i++) {
  let quadrado = document.createElement('div');
  quadrado.classList.add('cubo');
  quadrado.addEventListener("click", (evt) => {
    evt.target.classList.toggle('marcado');
  }); 
  caixa.appendChild(quadrado);
  cubos.push(quadrado);
}

let isRunning = false;
let intervalId = null;

function startOrReset() {
  let texto = document.querySelector('#botao_game');
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    texto.innerHTML = "<h3> start</h3>";
  } else {
    isRunning = true;
    texto.innerHTML = "<h3> stop</h3>";
    intervalId = setInterval(updateCubos, 200);
  }
}

function updateCubos() {
  let proximosEstados = [];

  for (let i = 0; i < cubos.length; i++) {
    const cubo = cubos[i];
    const vizinhos = contarVizinhos(i);

    if (cubo.classList.contains('marcado')) {
      if (vizinhos < 2 || vizinhos > 3) {
        proximosEstados[i] = false;  
      } else {
        proximosEstados[i] = true; 
      }
    } else {
      if (vizinhos === 3) {
        proximosEstados[i] = true;  
      } else {
        proximosEstados[i] = false;  
      }
    }
  }

  for (let i = 0; i < cubos.length; i++) {
    const cubo = cubos[i];
    const proximoEstado = proximosEstados[i];

    if (proximoEstado) {
      cubo.classList.add('marcado');
    } else {
      cubo.classList.remove('marcado');
    }
  }
}

function contarVizinhos(index) {
  const rowSize = Math.floor(largura / 50);
  const rowIndex = Math.floor(index / rowSize);
  const colIndex = index % rowSize;
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;

      const neighborRowIndex = rowIndex + i;
      const neighborColIndex = colIndex + j;

      if (neighborRowIndex >= 0 && neighborRowIndex < Math.floor(altura / 50) &&
          neighborColIndex >= 0 && neighborColIndex < rowSize) {
        const neighborIndex = neighborRowIndex * rowSize + neighborColIndex;
        const neighborCubo = cubos[neighborIndex];

        if (neighborCubo.classList.contains('marcado')) {
          count++;
        }
      }
    }
  }

  return count;
}