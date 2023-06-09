import { Configuration, OpenAIApi } from "openai";

export const openaiConfig = {
  getOpenai: function () {
    const configuration = new Configuration({
      apiKey: "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",
    });

    if (!configuration.apiKey) {
      throw new Error("OpenAI API key not configured, please follow instructions in README.md");
    }

    return new OpenAIApi(configuration);
  }
};

