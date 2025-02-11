import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Main() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="main-container">
        <div className="left-main">
          <h3 className="slide-left">DI RAFFAELE SACCO</h3>
          <h1 className="zoom-in">CHEST E' MERAVIGLIA</h1>
          <p className="fade-in">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quas quod commodi odit voluptatem. Culpa, molestias amet, laboriosam
            blanditiis officia similique saepe impedit ratione modi voluptatum
            provident, vel numquam assumenda.
          </p>
        </div>
        <div className="right-main"></div>
      </div>
      <div className="btn-main-container"></div>
      <div className="btn-container">
        <button onClick={() => navigate("/menu")} className="slide-up">
          SCOPRI IL NOSTRO MENU
        </button>
      </div>
      <div className="container">
        <div className="row">
          <motion.div
            className="col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <h2>Il nostro impasto</h2>
            <p>
              La nostra pizza sfoggia un impasto morbido e leggero, realizzato
              con l'eccellenza della farina Caputo. Gustoso, fragrante, e
              irresistibile.
            </p>
          </motion.div>

          <motion.div
            className="col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2>Prodotti tradizionali</h2>
            <p>
              Le nostre radici sono profondamente legate alla tradizione. Ogni
              piatto è preparato seguendo ricette tramandate di generazione in
              generazione.
            </p>
          </motion.div>

          <motion.div
            className="col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Metodo napoletano</h2>
            <p>
              Napoli è la culla della pizza, e noi siamo orgogliosi di portare
              la sua tradizione nel mondo. Ogni pizza è un viaggio nel cuore
              della città partenopea.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="big-container">
        <motion.div
          className="col-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://ischiasafari.it/assets/Uploads/_resampled/CroppedFocusedImageWzE2MDAsMTIwMCwieCIsMTg0XQ/Errico-Porzio-IschiaSafari2.jpg"
            alt="foto di raffaele"
          />
        </motion.div>
        <motion.div
          className="col-right"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h4>RAFFAELE SACCO</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
            dignissimos adipisci expedita facere tempore ipsa aut, velit earum
            vitae porro eaque minus libero. Ab corrupti, a maiores magni aut
            rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            obcaecati est eum voluptate reiciendis, dolores a soluta, sed
            quisquam molestias suscipit fugiat corrupti dicta esse beatae sit,
            hic quos. Architecto? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nobis, quos recusandae? Nisi voluptas provident
            eos obcaecati vitae ducimus, voluptatibus nulla, tempore quo
            inventore quam, autem minima. Temporibus ratione maxime facere?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            asperiores enim id quo exercitationem, blanditiis dolorem minus
            voluptas, ullam numquam recusandae accusamus molestiae esse amet
            adipisci praesentium pariatur nemo fuga!Lorem
          </p>
        </motion.div>
      </div>
    </main>
  );
}
export default Main;
