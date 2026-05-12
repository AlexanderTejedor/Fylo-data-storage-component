import "./App.css";
import logo from "./assets/logo.svg";
import logoDocument from "./assets/icon-document.svg";
import logoFolder from "./assets/icon-folder.svg";
import logoUpload from "./assets/icon-upload.svg";

function App() {
  return (
    <article className="">
      <section>
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
        <section>
          <figure>
            <img src={logoDocument} alt="document icon" />
          </figure>
          <figure>
            <img src={logoFolder} alt="Folder icon" />
          </figure>
          <figure>
            <img src={logoUpload} alt="Upload icon" />
          </figure>
        </section>
      </section>
      <section>
        <p>
          You've used <span>815 GB</span> of your storage
        </p>
        <div className=""></div>
        <div>
          <span>0 GB</span>
          <span>1000 GB</span>
        </div>
        <section>
          <p>
            <span>185</span> GB LEFT
          </p>
        </section>
      </section>
    </article>
  );
}

export default App;
