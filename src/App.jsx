import "./App.css";

function App() {
  return (
    <>
      <header>
        <a className="logo" href="#">
          <img src="../public/logo.svg" width={157} height={40} alt="logo" />
          {/* <h3>RouteX</h3> */}
        </a>
        <ul className="list">
          <li>
            <a className="nov" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nov" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="nov" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="nov" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="nov" href="#">
              Blog
            </a>
          </li>
        </ul>
        <div className="chat">
          <img src="../public/chat.svg" width={55} alt="" />
         <div> <p>Need help?</p>
          <h4>(307) 555-0133</h4></div>
        </div>
      </header>
      <main>
        <h1 className="dece">
          Journey With Confidence <span>Migrate</span> With Us
        </h1>
        <p className="loremm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          rcus nunc. Duis egestas ac ante sed tincidunt.
        </p>
        <button className="btn">Learn More  <img src="../public/st.svg" width={12} alt="" /></button>
      </main>
      <div className="page">
        <div className="page1">
          <div className="blok1"></div>
          <div className="blok2"></div>
          <div className="blok3">
        <div id="blokpl">
        <h1 className="blus">10 +</h1>
            <p className="years">years of experiences</p>
        </div>
          </div>
          <div className="blok4"></div>
        </div>
        <div className="page2">
          <p className="usnam">About Us<img src="../public/mess.svg" width={12} alt="" /></p>
          <h2 className="into">Unknown Wanderlust Your Journey into</h2>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac ante sed tincidunt.
          </p>
          <div className="ich">
            <div className="in"> <b className="safe"><img src="../public/ok.svg" width={12} alt="" />Safety Guides</b>
              <p className="lorem">
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit
              </p></div>
            <div className="in"> <b className="safe"><img src="../public/ok.svg" width={12} alt="" />Safety Guides</b>
              <p className="lorem">
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit
              </p></div>
          </div>
          <button className="btn">Read More<img src="../public/st.svg" width={12} alt="" /></button>
        </div>
      </div>
    </>
  );
}

export default App;
