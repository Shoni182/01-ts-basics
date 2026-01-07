// Задача 2. Інтерфейси (файл task-2.ts)
console.log("");
console.log("Задача 2. Інтерфейси");

interface Product {
  readonly id: number;
  title: string;
  desctiprion?: string;
}

const product: Product = {
  id: 1,
  title: "Tablet",
  desctiprion: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
