import React from 'react'
import carve1 from '../Image_Components/layered-peaks-haikei.png'
import logo from '../Image_Components/Logo.png'

const Footer = () => {
  return (
    <>
      <div data-footer-carve>
        <img src={carve1} alt="" />
      </div>
      <div data-footer-main>
        <div data-footer-form>
          <div data-footer-logo>
            <img src={logo} alt="" />
            <div>
              <h3>Tournament</h3>
              <h3>Laboretory</h3>
            </div>
          </div>
          <div data-footer-form-comp>
            <h3>Send Quary</h3>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button data-footer-quary className="btn">Send</button>
          </div>
        </div>
        <div data-footer-manu>
          <div data-footer-links>
            <div data-footer-link>
              <h3>Features</h3>
              <div>
                <ul>
                  <li>Sports</li>
                  <li>E-Sports</li>
                  <li>Hackathone</li>
                  <li>Quiz</li>
                  <li>Coding</li>
                </ul>
              </div>
            </div>

            <div data-footer-link>
              <h4>Host a Event <i class="bi bi-arrow-down-right"></i></h4>
              <h4>Join a Event <i class="bi bi-arrow-down-right"></i></h4>
            </div>

            <div data-footer-link>
              <h3>Links</h3>
              <div>
                <ul>
                  <li>About Us </li>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Buy Me A Coffee</li>
                </ul>
              </div>
            </div>
          </div>

          <div data-footer-social-links>
            <h3>Stay Connected</h3>
            <div data-footer-social>
              <ul>
                <li><i class="bi bi-youtube"></i></li>
                <li><i class="bi bi-discord"></i></li>
                <li><i class="bi bi-twitter"></i></li>
                <li><i class="bi bi-linkedin"></i></li>
                <li><i class="bi bi-envelope-at-fill"></i></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer