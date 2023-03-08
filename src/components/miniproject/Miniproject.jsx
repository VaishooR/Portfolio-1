import React from 'react';
import './Miniproject.css';



export default function Miniproject() {
  return (
    <div className="portfolio" id="proj">
      <h2>My <span>Mini</span> Projects</h2>
      <div className="project-cards">
        
        {/* row-2 */}
        <div className="card">
          <img src="assets/projects/purple.png" alt="" />
          <h3>Landing Page</h3>
          <p>Bootstrap</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/1.Bootstrap-Purple-Website-Project-1" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://aquamarine-travesseiro-1fdf00.netlify.app" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div>
        <div className="card">
          <img src="assets/projects/expand.png" alt="" />
          <h3>Expand Cards</h3>
          <p>Html & Css</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/Project-1-Expanding-Cards/tree/main/1.%20Project-1" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://hilarious-arithmetic-03c119.netlify.app" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div>
        <div className="card">
          <img src="assets/projects/music1.png" alt="" />
          <h3>Music App</h3>
          <p>Javascript</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/P6-Mini-Music-Player" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://venerable-malasada-117cfd.netlify.app" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div>
        <div className="card">
          <img src="assets/projects/page.png" alt="" />
          <h3>Pagination</h3>
          <p>Javascript</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/HTML-CSS-JS-Projects/tree/main/08.%20Pagination" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://willowy-crepe-daf9a1.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div>
        {/* row-3 */}
        <div className="card">
          <img src="assets/projects/portorange.png" alt="" />
          <h3>Portfolio</h3>
          <p>React</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/1.Amazon-Clone" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://vaishoo-frontend-portfolio.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div>
        <div className="card">
          <img src="assets/projects/flag.png" alt="" />
          <h3>Flags API</h3>
          <p>Javascript</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/HTML-CSS-JS-Projects/tree/main/05.%20Flags%20-%20restcountries%20api" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://elaborate-sable-6ed9a1.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div>
        
        
        <div className="card">
          <img src="assets/projects/cal1.png" alt="" />
          <h3>Calculator</h3>
          <p>Javascript</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/P5--White-Calculator" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://superlative-dieffenbachia-495697.netlify.app" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div>
        {/* row-4 */}
        <div className="card">
          <img src="assets/projects/shopping.png" alt="" />
          <h3>Simple Shopping Cart</h3>
          <p>React</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/Practice-React-Shopping-cart" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://unique-narwhal-a1079c.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div>
        
        
        <div className="card">
          <img src="assets/projects/joke.png" alt="" />
          <h3>Jokes API</h3>
          <p>Javascript</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/Day-25-jokes-api/tree/main/Jokes%20Api" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://random-jokes-day25-task.netlify.app" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div>
        {/* row-5 */}
        
        <div className="card">
          <img src="assets/projects/photos.png" alt="" />
          <h3>Photography API</h3>
          <p>Javascript</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/Day-25-photography-api" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://photography-api-day25-task.netlify.app" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div>
        
      </div>
    </div>
  )
}
