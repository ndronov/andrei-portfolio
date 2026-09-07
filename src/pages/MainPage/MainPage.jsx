import { Link } from 'react-router'

import andrei from '../../assets/andrei.webp'
import magnumBikes from '../../assets/magnumBikes.webp'
import compulse from '../../assets/compulse.webp'
import wagely from '../../assets/wagely.webp'
import tresor from '../../assets/tresor.webp'

import styles from './MainPage.module.css';

export function MainPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.designer}>
          <img src={andrei} alt="Andrei Dronov" className={styles.photo} />
          <h2>Andrei Dronov</h2>
          <div>
            <p>Я UI/UX-дизайнер с 8-летним опытом работы в сфере разработки программного обеспечения и более чем
              15-летним опытом работы в сфере дизайна.</p>
            <p className={styles.text}>Моя специализация — создание MVP и редизайн продуктов со сложной
              бизнес-логикой.</p>
          </div>
        </div>

        <div className={styles.projects}>
          <Link to="/magnum">
            <div>
              <img src={magnumBikes} alt="Magnum Bikes" className={styles.magnumBikes} />
              <h3 className={styles.label}>Magnum Bikes</h3>
            </div>
          </Link>

          <Link to="/compulse">
            <div>
              <img src={compulse} alt="Compulse" className={styles.compulse} />
              <h3 className={styles.label}>Compulse</h3>
            </div>
          </Link>

          <div className={styles.slides}>

            <Link to="/wagely">
              <div>
                <img src={wagely} alt="Wagely" className={styles.wagely} />
                <h3 className={styles.label}>Wagely</h3>
              </div>
            </Link>

            <Link to="/tresor">
              <div>
                <img src={tresor} alt="Tresor" className={styles.tresor} />
                <h3 className={styles.label}>Tresor</h3>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
