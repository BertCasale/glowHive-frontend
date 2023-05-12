import "./Home.css";
import Logo from "../assets/GlowHiveLogo.png";

export default function Home() {
  return (<div className="Home">
    <img src={Logo} alt="GlowHive" width="600px"/>
    <h1>GlowHive</h1>
    <h2>Glow with confidence, inside and out</h2>
  </div>)
}