import styles from "./App.module.scss";

const isAuth = true; /*or true*/

export function App() {
  return (
    <div className={styles.layout}>
      <img src="./Naruto.jpg" alt="1" width={150} height={200} />

      {isAuth ? "Авторизирован" : "Войдите в систему"}

      <h1>The first component</h1>
      <div>Hello everybody!</div>
      <button>Click</button>
    </div>
  );
}
