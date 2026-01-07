// Задача 6. Узагальнені типи (файл task-6.ts)
console.log("");
console.log("Задача 6. Узагальнені типи");

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement([1, 2, 3]); // 1
getFirstElement(["a", "b", "c"]); // "a"
getFirstElement([true, false, true]); // true
