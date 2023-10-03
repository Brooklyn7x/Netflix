import { OPEN_AI_key } from "./constants";
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: OPEN_AI_key,
  dangerouslyAllowBrowser: true,
});

export default openai;
