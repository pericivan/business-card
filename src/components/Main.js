
import shinji from "../photos/shinji_ikari.webp"
import email from "../photos/email.png"
import linkedin from "../photos/linkedin.png"

export default function Main() {
  return (
    <div className="main-content">
      <img width="100%" alt="nema slike" src={shinji} />
      <h1 className="name">Ivan Perić</h1>
      <h4 className="title">Electronics Engineer</h4>
      <h5 className="email">pericivan139@gmail.com</h5>
      <a href="mailto: pericivan139@gmail.com">
        <button className="email-btn">
          <img src={email} />
          Email
        </button>
      </a>
      <a href="https://www.linkedin.com/in/ivan-peric/" target="_blank">
        <button className="linkedin-btn">
          <img src={linkedin} />
          Linkedin
        </button>
      </a>
    </div>

  )
}