import twitter from "../photos/twitter.png"
import facebook from "../photos/facebook.png"
import instagram from "../photos/instagram.png"
import github from "../photos/github.png"
export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/IvanPer30235369" target="_blank">
        <img src={twitter} />
      </a>
      <a href="https://www.facebook.com/BRUTALX/" target="_blank">
        <img src={facebook} />
      </a>
      <a href="https://www.instagram.com/peric_ivan/" target="_blank">
        <img src={instagram} />
      </a>
      <a href="https://github.com/pericivan" target="_blank">
        <img src={github} />
      </a>
    </div>
  )
}
