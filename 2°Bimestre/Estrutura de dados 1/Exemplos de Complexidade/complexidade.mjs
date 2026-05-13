/* O(1), porque a operação de acesso ao primerio elemento do array é feita em tempo constante, independente do tamannho do array */


let array = Array.from({length: 100000},  () => Math.random())

// function exemple01(array) {
//     const inicio = performance.now();
//     if (array.lenght == 0) return null;
//     const elemento = array[3];
//     const fim = performance.now();


//     const memoriaPilhaMB = (array.length * 4) / (1024 * 1024)
//     let memoriaTotalMB = "N/A"
//     if (typeof process !== "undefined" && process.memoryUsage) {
//         memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024
//     }
//     console.clear()


//     console.log("----- Analise de complexidade Iterativa O(1) -----")
//     console.log(`Tamanho da entrada: ${array.length}`)
//     console.log(`Resultado: ${elemento}`)
//     console.log(`Tempo de execução: ${fim - inicio}  ms`)
//     console.log(`Memoria estimada da pilha de chamadas: ${memoriaPilhaMB}mb`)
//     console.log(`Memória total usada pelo processo: ${typeof memoriaTotalMB === "number" ? memoriaTotalMB.toFixed(6) + 'mb' : memoriaTotalMB}`)
// }

// exemple01(array);

// /* O(log n), porque a cadas iteração o valor de i é multiplicado por 2 o que significa que o numero de iterações necessárias para que i atinja "n" é logaritmico em relação a "n"*/

// function exempleLogN(n) {
//     let i = 1
//     while (i < n) {
//         console.log(i);
//         i *= 2;
//     }

    
// }

// exempleLogN(10)

// O(n), porque a função percorre todos os elementos do array uma vez realizano uma operação constante para cada elemento


function exempleOn(array) {
    const inicio = performance.now();
    if (array.lenght == 0) return null;
    const elemento = array[3];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i])

    }


    const fim = performance.now();


    const memoriaPilhaMB = (array.length * 4) / (1024 * 1024)
    let memoriaTotalMB = "N/A"
    if (typeof process !== "undefined" && process.memoryUsage) {
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024
    }
    console.clear()


    console.log("----- Analise de complexidade Iterativa O(1) -----")
    console.log(`Tamanho da entrada: ${array.length}`)
    console.log(`Resultado: ${elemento}`)
    console.log(`Tempo de execução: ${fim - inicio}  ms`)
    console.log(`Memoria estimada da pilha de chamadas: ${memoriaPilhaMB}mb`)
    console.log(`Memória total usada pelo processo: ${typeof memoriaTotalMB === "number" ? memoriaTotalMB.toFixed(6) + 'mb' : memoriaTotalMB}`)


}

// exempleOn(array)

array = [1, 5, 3, 2, 4, 6, 7]

function exempleNlogN(array){
    array.sort((a,b) => a-b)

    for(let i = 0; i<array.length; i++){
        console.log(array[i])
    }
}

exempleNlogN(array)