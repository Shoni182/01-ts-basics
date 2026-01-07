// Задача 6. Узагальнені типи (файл task-6.ts)
console.log("");
console.log("Задача 6. Узагальнені типи");

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<string>(["a", "b", "c"]); // "a"
getFirstElement<boolean>([true, false, true]); // true
