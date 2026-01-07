// Задача 7. Типізація Promise (файл task-7.ts)
console.log("");
console.log("Задача 7. Типізація Promise");

const getMessage = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
};

getMessage().then((result) => console.log(result));
