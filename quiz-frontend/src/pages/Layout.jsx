import { Outlet } from "react-router";
import Navigation from "./Navigation";

export default function Layout() {
  return (
    <main className='container'>
        <header>
            <Navigation/>
        </header>
        <article>
            <Outlet/>
        </article>
        <footer>
            <p>Készítette: Bence</p>
        </footer>
    </main>
  );
}
