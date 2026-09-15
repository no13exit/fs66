import axios from "axios";
import { GoogleGenAI } from "@google/genai";

function getProducts() {
  //Если будет чтение из файла НЕ ЗАБУДЬТЕ про async-await
  // Под наше блюдо например борщ более
  // актуальный набор продуктов
  // например свекла, говядина, лук
  const products = [
    { name: "Молоко", count: 2.0, price: 1.5, expDate: "2024-07-01" },
    { name: "Хлеб", count: 0.5, price: 0.8, expDate: "2024-06-15" },
    { name: "Яйца", count: 12, price: 2.5, expDate: "2024-07-10" },
    { name: "Сыр", count: 0.3, price: 3.0, expDate: "2024-07-20" },
    { name: "Свекла", count: 1.0, price: 0.5, expDate: "2024-07-05" },
    { name: "Говядина", count: 0.5, price: 5.0, expDate: "2024-07-03" },
    { name: "Лук", count: 0.2, price: 0.3, expDate: "2024-07-02" }, 
    {name: "Картофель", count: 1.0, price: 0.4, expDate: "2024-07-04" },
    {name: "Морковь", count: 0.5, price: 0.6, expDate: "2024-07-06" },
    {name: "Капуста", count: 0.8, price: 0.7, expDate: "2024-07-07" },
    {name: "Помидоры", count: 0.5, price: 1.0, expDate: "2024-07-08" } 
  ];
  return products;
}

function createBasePromptByRole(user) {
  if (user.role === "ADMIN") {
    return `
        Ты - квалифицированный повар, определяющий инградиенты
        блюда по названию блюда. 
        Тебе дается название желаемого и список
        продуктов, имеющихся в холодильнике. 
        Твоя задача - на основе этих данных составить рекомендации
        для владельца холодильника, какие недостающие продукты надо 
        закупить, чтобы владелец мог приготовить желаемое блюдо.
        Правила:
            -возвращай только список продуктов, которые нужно закупить.
            -не возвращай продукты, не имеющие отношения к данному блюду.
            -не возвращай продукты, которые уже есть в холодильнике.        
        `;
  } else {
    return `
        Ты - квалифицированный повар, определяющий инградиенты
        блюда по названию блюда. 
        Тебе дается название желаемого и список
        продуктов, имеющихся в холодильнике. 
        Твоя задача - на основе этих данных составить рекомендации
        для владельца холодильника, какие продукты надо 
        использовать из имеющихся в холодильнике, чтобы владелец мог 
        приготовить желаемое блюдо.
        Правила:
            -возвращай только список продуктов, которые нужно использовать
            из числа имеющихся в холодильнике.
            -не возвращай продукты, не имеющие отношения к данному блюду.
            -не возвращай продукты, которых нет в холодильнике.          
        `;
  }
}

// TODO
function createPrompt(basePrompt, dishTitle, availableProducts) {
  return `
        ${basePrompt}

        Название блюда: ${dishTitle}.
        Продукты в холодильнике:
        ${JSON.stringify(availableProducts)}
    `;
}

async function askAi(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text;
}

async function main() {
  const user = {
    name: "John",
    role: "USER",
  };

  const admin = {
    name: "Bill",
    role: "ADMIN",
  };

  const authenticatedUser = admin;
  const unAuthenticatedUser = user; // Change to user or admin to test different roles

  // Алгоритм работы приложения:
  // 1. Получить все продукты из БД холодильника в принципе
  const availableProducts = getProducts();

  // 2. Написать базовый промпт зависящий от роли (реомендуем либо
  // имеющиеся в холодильнике продукты для приготовления, либо
  // список того что нужно закупить)
  // const basePrompt = createBasePromptByRole(authenticatedUser);
  const basePrompt = createBasePromptByRole(unAuthenticatedUser);

  //3. Составляем промпт для ИИ для рекомендаций по конкретному
  // блюду (уже с учетом роли пользователя)
//   const prompt = createPrompt(basePrompt, "яичница", availableProducts);
//   const prompt = createPrompt(basePrompt, "паста", availableProducts);
//   const prompt = createPrompt(basePrompt, "салат", availableProducts);
  const prompt = createPrompt(basePrompt, "борщ", availableProducts);

  //4. Отправим промпт искуственному интелекту и получим от него ответ
  const aiResponse = await askAi(prompt);

  //5. Выведем ответ в консоль.
  console.log(aiResponse);
}

main();

// В рамках дз попробуйте реализовать п.3-п.5
