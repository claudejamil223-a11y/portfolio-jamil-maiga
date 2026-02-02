
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_OWNER, PROJECTS, EXPERIENCES, EDUCATION } from "../constants.tsx";
import { Message } from "../types";

// Initialize AI client only if API Key is present
const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === "undefined" || apiKey.length < 10) {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

const SYSTEM_INSTRUCTION = `
You are the personal AI Assistant for ${PORTFOLIO_OWNER.name}. 
Your goal is to answer recruiters' and visitors' questions professionally in English.
Background Information:
- Current Goal: Seeking an Assistant Engineer Internship (May 2026) and a Gap Year Program (Sept 2026).
- Profession/Identity: Engineer-Manager candidate (Centrale Casablanca & ESSEC).
- Education: ${JSON.stringify(EDUCATION)}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Key Projects: ${JSON.stringify(PROJECTS)}
- Profile Summary: ${PORTFOLIO_OWNER.bio}
Guidelines:
- Be concise, professional, and confident.
- Highlight the unique "Engineer-Manager" dual competence.
- If asked about availability, confirm May 2026 for the internship and Sept 2026 for the gap year.
- If you don't know something, suggest they contact Jamil via the contact form or LinkedIn.
`;

export const getGeminiChatResponse = async (userMessage: string, history: Message[] = []) => {
  const ai = getAIClient();
  
  if (!ai) {
    return "The AI assistant is currently not configured (missing API Key). Please contact Jamil via the contact form or LinkedIn.";
  }

  try {
    const contents = history
      .filter((m, i) => !(i === 0 && m.role === 'model'))
      .map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
    
    contents.push({ role: 'user', parts: [{ text: userMessage }] });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please reach out to Jamil directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a technical issue. Please reach out to Jamil directly via LinkedIn.";
  }
};
