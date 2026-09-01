import axios from 'axios';
import { GoogleGenAI } from "@google/genai";

async function askAi(prompt) {
  const genAi = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
  });

  const response = await genAi.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt,
    // as we need to locate specific part of the text, we need to set the temperature to 0
    config: {
        temperature: 0
    }
  });

  return response.text;
}

async function main() {
  const prompt =
    "Напиши что такое REST API и как его использовать в JavaScript. Какие есть коды ответа сервера (200, 201, 404, 500) и что они означают. Приведи примеры использования методов GET, POST, PUT, DELETE и PATCH в JavaScript.";

  const aiResponse = await askAi(prompt);
  console.log("AI Response:", aiResponse);
  return aiResponse;
}

const data = await main();    
console.log(data);


console.log(typeof data);

// how many times REST is mentioned in the text?

console.log('"REST" mentioned');
let grep = data.split("REST").length - 1;
console.log(grep);

// how many times PUT is mentioned in the text?
console.log('"PUT" mentioned');

grep = data.split("PUT").length - 1;
console.log(grep);

// how many times GET is mentioned in the text?
console.log('"GET" mentioned');

grep = data.split("GET").length - 1;
console.log(grep);

// how many times POST is mentioned in the text?
console.log('"POST" mentioned');

grep = data.split("POST").length - 1;
console.log(grep);

// how many times DELETE is mentioned in the text?
console.log('"DELETE" mentioned');
grep = data.split("DELETE").length - 1;
console.log(grep);

// exract part about error codes "5.  **Status Codes** — ответ сервера (200 — ОК, 201 — Создано, 404 — Не найдено, 500 — Ошибка сервера)."


const paragraphs = data.split(/\r?\n/);



//print all paragraphs with their index to locate the part about error codes, commented later
// for (let i = 0; i < paragraphs.length; i++) {
//   const paragraph = paragraphs[i];
//   console.log(i);
//   console.log(paragraph);
// }


// unstable output due to tue AI responses not being deterministic
grep = paragraphs.slice(12,20);
console.log(grep);


// 1. Просто режем весь текст по заголовкам "### "
const sections = data.split('### ');

// 2. Ищем кусок, который начинается со слов "Коды ответа"
const statusCodesSection = sections.find(section => 
  section.trim().startsWith("Коды ответа")
);

console.log("--- ВЫРЕЗАННЫЙ БЛОК ---");
console.log("### " + statusCodesSection); // Возвращаем заголовок на место