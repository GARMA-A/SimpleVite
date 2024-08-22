import { Link } from "react-router-dom";
import styles from "../Style/Homepage.module.css";
import Navbar from "../components/NavBar";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <Navbar/>
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">Start Now</Link>
      </section>
    </main>
  );
}
