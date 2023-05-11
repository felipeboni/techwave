import "@/styles/globals.css";
import NavBar from "./layout/navbar"
import TopBar from "./layout/topbar"

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-full">
      <NavBar {...pageProps}/>
      <TopBar/>

      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
