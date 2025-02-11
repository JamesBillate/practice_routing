import { useLocation } from "react-router-dom"

import "./Contact.css"

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)
  
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")
  
  return (
    <div className="contact">
      <h2>Hey {name}, Contact Us</h2>
      <p>We value your feedback and inquiries. If you have any questions, story tips, or collaboration opportunities, feel free to reach out to us.</p>
      <ul>
        <li>Email: contact@mario-news.com</li>
        <li>Phone: +1 (555) 123-4567</li>
        <li>Address: 123 News Avenue, New York, NY, USA</li>
      </ul>
      <p>Follow us on social media to stay updated with the latest news:</p>
      <ul>
        <li>Twitter: @MarioNews</li>
        <li>Facebook: facebook.com/MarioNews</li>
        <li>Instagram: @MarioNewsOfficial</li>
      </ul>
      <p>Thank you for choosing Mario News as your trusted news source!</p>
    </div>
  )
}
