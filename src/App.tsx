import styles from "./App.module.scss";

const MENU = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
];

export function App() {
  return (
    <div className={styles.layout}>
      <img src="./Naruto.jpg" alt="1" width={150} height={200} />

      {MENU.map((item) => (
        <span key={item.link}>{item.name}</span>
      ))}

      <h1>The first component</h1>
      <div>Hello everybody!</div>
      <button>Click</button>
    </div>
  );
}
