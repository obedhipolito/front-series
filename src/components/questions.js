import { useState } from "react";
import styles from "../styles/text-davinci-003.css";
import serviceQuestions from "../services/service.questions";
import { useTranslation } from "react-i18next";

export default function Question() {
  const { t } = useTranslation();
  const [questionInput, setquestionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await serviceQuestions.getDaVinci({ question: questionInput});
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
        <h3>{t("Preguntas y respuestas")}</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="gender"
            placeholder={t("¿cual es tu pregunta sobre una question?")}
            value={questionInput}
            onChange={(e) => setquestionInput(e.target.value)}
          />
          <input type="submit" value={t("ver respuesta")} />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
    
  );
}