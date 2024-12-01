import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAI2gCVPCELU-Usjwm2ArYhkGWpCcnp140");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export async function callGeminiAI(prompt: string) {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
}
