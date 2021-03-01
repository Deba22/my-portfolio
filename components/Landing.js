import animationDataHero from "../public/hero-image.json"
import Animation from '../components/Animation'
import styles from '../styles/Landing.module.css'

function Landing() {
  return (
    <section id="hero">
      <div className={styles.hero__inner}>
        <div className={styles.hero__inner__splitOne}>
          <span className={styles.hero__tagline}>Digital experiences that matter!</span>
          <h1 className={styles.hero__title}>
            I can help you build your next product.
          </h1>
          <h3 className={styles.hero__desc}>
            Have an exciting idea, but don't know where to begin? Now is the time to put all those crazy thoughts into action.
          </h3>
          <span className={styles.pitch}>Wanna hear my pitch?</span>
          <br></br>
          <button type="submit" className={styles.btn}>Sure, why not!</button>
        </div>
        <div className={styles.hero__inner__splitTwo}>
          <Animation animPath={animationDataHero} />
        </div>
      </div>
    </section>
  )
}

export default Landing
