import type { Dispatch, FormEvent, SetStateAction } from "react";
import { API_CHAT } from "@/constants/routes";
import axios from "axios";

export class Chat {
  public static async submit(e: FormEvent<HTMLFormElement>, message: string, setLoading: Dispatch<SetStateAction<boolean>>, setMessage: Dispatch<SetStateAction<string>>) {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post(API_CHAT, { query: message });
      console.log("✅ Response:", response.data);
      setMessage("");
    } catch (err: unknown) {
      console.error(`❌ [component] Error POST ${API_CHAT}:`, err);
    } finally {
      setLoading(false);
    }
  }
}