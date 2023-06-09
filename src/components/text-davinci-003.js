import { useState } from "react";
import styles from "../styles/text-davinci-003.css";
import serviceDavinci003 from "../services/service.davinci-003";
import { useTranslation } from "react-i18next";

export function Textdavinci003({save}) {
  const { t } = useTranslation();
  const [serieInput, setserieInput] = useState("");
  const [platform, setPlatform] = useState("");
  const [result, setResult] = useState();

  
  const savePrompt = (modelo, prompt, result) =>{
    save(modelo, prompt, result);
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await serviceDavinci003.getDaVinci({ serie: serieInput, platform: platform });
      /*const response = await fetch("/text-davinci-003/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ serie: serieInput }),
      });*/

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      savePrompt("text-davinci-003", data.prompt, data.result);
      setserieInput("");
      setPlatform("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
        <title>OpenAI Davinci</title>

      <main className={styles.main}>
        <h3>{t("Series recommender")}</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="gender"
            placeholder={t("What is your favorite gender?")}
            value={serieInput}
            onChange={(e) => setserieInput(e.target.value)}
            required
          />
          <input
            className="form-input"
            type="text"
            name="platform"
            placeholder={t("¿que plataforma usas?")}
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            required
          />
          <input type="submit" value={t("See recommendation")} />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
    
  );
}

export default Textdavinci003;