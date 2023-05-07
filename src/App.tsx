import styles from "./home.module.css";
import { useState } from "react";
import { IData } from "./interfaces";
import { data } from "./constants";

function App(): JSX.Element {
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value);
  };

  const handlerSumbit = (): void => {
    setTitle("");
    if (!title?.length) return;
    const newData = {
      title: title,
      id: new Date().getTime(),
      description: "description",
    };

    setArr([...arr, newData]);
  };

  const deleteItem = (id: number): void => {
    const newData = arr.filter((c) => c.id != id);
    setArr(newData);
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>
        Todo{" "}
        <span className={styles.span}>
          <i className="fa-solid fa-file-signature"></i>
        </span>
      </h1>
      <input
        placeholder="Enter Todo"
        className={styles.input}
        value={title}
        onChange={changeHandler}
      />
      <button className={styles.button} onClick={handlerSumbit}>
        Add Todo
      </button>

      <div className={styles.card}>
        {arr.map((c) => (
          <div key={c.id} className={styles.cardItem}>
            <p>{c.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => deleteItem(c.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
