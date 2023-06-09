import { useState } from "react";
import styles from "../styles/text-davinci-003.css";
import serviceDavinci003 from "../services/service.createImage";

export default function CreateImage() {
  const [imageInput, setImageInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await serviceDavinci003.getDaVinci({ animal: imageInput });
      /*const response = await fetch("/text-davinci-003/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageInput }),
      });*/

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setImageInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="../img/pets.png" />

      <main className={styles.main}>
        <img src="../img/pets.png" className="img-pets" alt=""/>
        <h3>generador de imagenes</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="image"
            placeholder="¿Que image es?"
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
          />
          <input type="submit" value="Genrear imagen" />
        </form>
        <div>
          <img src={result} alt="generada"/>
        </div>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}