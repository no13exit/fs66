// Программа запрашивает наименование продуктов в вашем холодильнике
// и их количество. После ввода всех продуктов, программа выводит список и
// продуктов с их количеством и сохраняет данные в видее JSON в
// файл в корне проекта.
// readline.createInterface() используется для создания интерфейса
// чтения данных из стандартного ввода (stdin) и записи данных в
// стандартный вывод (stdout).

// JSON.stringify(fridge, null, 2 ) используется для преобразования
// объекта JavaScript в строку JSON,
// где null означает, что не используется функция замены replacer,
// а 2 указывает на количество пробелов для отступа в формате JSON.

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

async function runFridgeApp() {
  const filePath = path.resolve("fridge.csv");
  const fridge = await loadFridge(filePath);
  const rl = readline.createInterface({ input, output });
  //can keep stopwords outside the loop to avoid creating a new array on each iteration
  const stopWords = ["exit", "выход", "стоп", "stop"];


  console.log("Программа для учета продуктов в холодильнике.");
  //adding print to show contents
  if (fridge.length > 0) {printFridge(fridge)}; 

  console.log(
    "Введите продукты в холодильнике. Для завершения введите 'exit', 'stop', 'выход' или 'стоп'.",
  );

  while (true) {
    const name = await rl.question("Введите наименование продукта: ");
    const trimmedName = name.trim();

    if (stopWords.includes(trimmedName.toLowerCase())) {
      break;
    }

    if (trimmedName === "") {
      // Проверка на пустую строку
      // if (!trimmedName)
      console.log(
        "Наименование продукта не может быть пустым. Попробуйте снова.",
      );
      continue;
    }

    const countInput = await rl.question(
      `Введите количество продукта "${trimmedName}": `,
    );

    const count = Number(countInput.trim());

    if (Number.isNaN(count) || count < 0) {
      console.log("Введите корректное неотрицательное число.");
      continue;
    }


    // adding variable to see if product exists in fridge and get its index to update or delete it
    const productIndex = fridge.findIndex(
      (product) => product.name.toLowerCase() === trimmedName.toLowerCase(),
    );

    if (count === 0) {
      if (productIndex !== -1) {
        const deletedProduct = fridge.splice(productIndex, 1);

        console.log("Продукт удалён:", deletedProduct[0]);
        printFridge(fridge);
        await saveFridge(fridge, filePath);
      } else {
        console.log(`Продукта "${trimmedName}" нет в списке.`);
      }

      continue;
    }

    if (productIndex === -1) {
      const newProduct = {
        name: trimmedName,
        count,
      };

      fridge.push(newProduct);
      console.log("Продукт добавлен:", newProduct);
      printFridge(fridge);
      await saveFridge(fridge, filePath);
    } else {
      fridge[productIndex].count = count;
      console.log("Количество продукта изменено:", fridge[productIndex]);
      printFridge(fridge);
      await saveFridge(fridge, filePath);
    }
  }

  rl.close();
  console.log("Работа программы завершена.");
  printFridge(fridge);

  //no need since we are autosaving always
  //   const filePath = path.resolve("fridge.csv");
  //   const csvData = convertToCsv(fridge);

  //   try {
  //     await writeFile(filePath, csvData, "utf-8");

  //     console.log(`Данные о продуктах сохранены в файл: ${filePath}`);
  //     printFridge(fridge);
  //     await saveFridge(fridge, filePath);
  //   } catch (error) {
  //     console.error("Ошибка при сохранении файла:", error.message);
  //   }
}

//print function

function printFridge(fridge) {
  if (fridge.length === 0) {
    console.log("Список продуктов пуст.");
    return;
  }

  console.log("Список продуктов в холодильнике:");
  console.table(fridge);
}

//convert to csv function

function convertToCsv(fridge) {
  const header = "name,count";

  const rows = fridge.map((product) => {
    return `${product.name},${product.count}`;
  });

  return [header, ...rows].join("\n");
}

//save to file function
async function saveFridge(fridge, filePath) {
  const csvData = convertToCsv(fridge);
  await writeFile(filePath, csvData, "utf-8");

  console.log(`Файл обновлён: ${filePath}`);
}

async function loadFridge(filePath) {
  try {
    const fileData = await readFile(filePath, "utf-8");

    if (fileData.trim() === "") {
      return [];
    }

    const lines = fileData.trim().split(/\r?\n/);
    lines.shift(); // Убираем строку заголовка

    return lines.map((line) => {
      const separatorIndex = line.lastIndexOf(",");
      const name = line.slice(0, separatorIndex);
      const count = Number(line.slice(separatorIndex + 1));

      return { name, count };
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      return []; // Если файла ещё не существует, возвращаем пустой массив
    }

    throw error;
  }
}

runFridgeApp();
