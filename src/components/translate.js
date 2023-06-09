import { useState } from "react";
import styles from "../styles/text-davinci-003.css";
import serviceTranslate from "../services/service.translate";
import { useTranslation } from "react-i18next";

export default function Translate() {
  const { t } = useTranslation();
  const [questionInput, setquestionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await serviceTranslate.getDaVinci({ question: questionInput});
      /*const response = await fetch("/text-davinci-003/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionInput }),
      });*/

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setquestionInput("");
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
        <h3>Traductor español a ingles</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="gender"
            placeholder={t("escribe lo que quieres traducir")}
            value={questionInput}
            onChange={(e) => setquestionInput(e.target.value)}
          />
          <input type="submit" value="ver traduccion" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
    
  );
}