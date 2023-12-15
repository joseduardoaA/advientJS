function findFirstRepeated(gifts) {
    const regalos = []
   for (const numero of gifts) {
   if(regalos.includes(numero)) return numero
   regalos.push(numero)
   }
    return -1;  // Si no se repite
  }

  const giftIds = [2, 1, 3, 5, 3, 2]
  const firstRepeatedId = findFirstRepeated(giftIds)
  console.log(firstRepeatedId) // 3
  // Aunque el 2 y el 3 se repiten
  // el 3 aparece primero por segunda vez
  
  const giftIds2 = [1, 2, 3, 4]
  const firstRepeatedId2 = findFirstRepeated(giftIds2)
  console.log(firstRepeatedId2) // -1
  // Es -1 ya que no se repite ningún número
  
  const giftIds3 = [5, 1, 5, 1]
  const firstRepeatedId3 = findFirstRepeated(giftIds3)
  console.log(firstRepeatedId3) // 5



  
  /* 
  Este código define una función llamada findFirstRepeated que busca el primer elemento repetido en un array llamado gifts. Utiliza un bucle for...of para recorrer cada elemento del array.
  
  Se crea un array vacío llamado regalos para almacenar los elementos que se han encontrado durante el recorrido.
  En cada iteración, verifica si el elemento actual (numeros) ya está presente en el array regalos utilizando el método includes.
  Si el elemento ya está en regalos, la función devuelve ese elemento, ya que es la primera repetición encontrada.
  Si no se encuentra ninguna repetición después de recorrer todo el array, la función devuelve -1.
  En resumen, esta función encuentra y devuelve el primer elemento repetido en el array gifts, o devuelve -1 si no hay repeticiones.
  
  
  En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
  
  Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
  
  ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
  
  En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
  */
  
  function findFirstRepeated(gifts) {
    const previousGifts = []
    for( const gift of gifts) {
     if (previousGifts.includes(gift)) {
      return gift
     }
     previousGifts.push(gift)
    }
    return -1 
  }



  function decode(mensaje) {
    const stack = [];
    let result = '';
  
    for (const char of mensaje) {
      if (char === '(') {
        stack.push(result);
        result = '';
      } else if (char === ')') {
        result = stack.pop() + result.split('').reverse().join('');
      } else {
        result += char;
      }
    }
  
    return result;
  }
  