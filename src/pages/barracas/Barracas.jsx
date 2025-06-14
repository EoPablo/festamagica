import styles from './Barracas.module.css';
import FaqComponent from '../../components/faq/FaqComponent';
import hot from '../../imgs/hot.png';
import pizza from '../../imgs/pizzaatt.png';
import pastel from '../../imgs/pastelatt.png';
import nuggets from '../../imgs/nuggets.png';
import fritas from '../../imgs/fritas.jpeg';
import hamb from '../../imgs/bf02.jpg';
import carneLouca from '../../imgs/bf04.jpg';
import crepe from '../../imgs/bf03.jpg';
import cascata from '../../imgs/casca.jpg';


const barracas = [
  { id: 1, title: "Mini Hot - Dog",  image: hot },
  { id: 2, title: "Mini Pizza", image: pizza },
  { id: 3, title: "Mini Pastéis", image: pastel },
  { id: 4, title: "Nuggets", image: nuggets },
  { id: 5, title: "Batata Frita", image: fritas },
  { id: 6, title: "Hambúrguer", image: hamb },
  { id: 7, title: "Carne Louca",  image: carneLouca },
  { id: 8, title: "Crepe", image: crepe },
  { id: 9, title: "Cascata de Chocolate", image: cascata },
];

const Barracas = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>Barraq<span>uinhas</span></h1>
      </div>

      <div className={styles.container}>
        {barracas.map(barraca => (
          <div key={barraca.id} className={styles.item}>
            <img 
              src={barraca.image} 
              alt={`Imagem de uma barraca de ${barraca.title}`} 
            />
            <h3>{barraca.title}</h3>
            <p>{barraca.description}</p>
          </div>
        ))}
      </div>

      <FaqComponent />
    </section>
  );
};

export default Barracas;
