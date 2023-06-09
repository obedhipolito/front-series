import { Configuration, OpenAIApi } from "openai";

class ServiceDavinci003 {

  async getDaVinci(data) {
    const configuration = new Configuration({
        apiKey: "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",
      });
    const openai = new OpenAIApi(configuration);
    console.log(configuration);
    console.log(data.serie);
    if (!configuration.apiKey) {
        /*
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        */
        return {
            status:500,
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        };
      }
    
      const serie = data.serie || '';
      if (serie.trim().length === 0) {
        /*
        res.status(400).json({
          error: {
            message: "Please enter a valid serie",
          }
        });
        */
        return {
            status:400,
            error: {
                message: "Please enter a valid serie",
            }
        };
      }

      const platform = data.platform || '';
      if (platform.trim().length === 0) {
        /*
        res.status(400).json({
          error: {
            message: "Please enter a valid serie",
          }
        });
        */
        return {
            status:400,
            error: {
                message: "Please enter a valid serie",
            }
        };
      }
    
      try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: this.generatePrompt(serie, platform),
          temperature: 0.6,
        });
        // res.status(200).json({ result: completion.data.choices[0].text });
        return {
            status: 200,
            result: completion.data.choices[0].text,
            prompt: this.generatePrompt(serie, platform)
        }
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          // res.status(error.response.status).json(error.response.data);
          return {
            status: error.response.data
          }
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          /*
          res.status(500).json({
            error: {
              message: 'An error occurred during your request.',
            }
          });
          */
         return {
            status: 500,
            error: {
                message: 'An error occurred during your request.',
            }
         }
        }
      }
    return ;
  }

    generatePrompt(serie, platform) {
      const capitalizedName = serie[0].toUpperCase() + platform.slice(1).toLowerCase();
      return `
      Suggest me three series in this "${platform}" in this gender "${capitalizedName}"
  
      The format of your answer should be like this: "name 1, name 2, name 3"`;
    }
}

export default new ServiceDavinci003();