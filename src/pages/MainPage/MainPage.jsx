import andrei from '../../assets/andrei.webp'

import styles from './MainPage.module.css';

export function MainPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.designer}>
          <img src={andrei} alt="Andrei Dronov" className={styles.photo} />
          <h2>Andrei Dronov</h2>
          <div>
            <p>Я UI/UX-дизайнер с 8-летним опытом работы в сфере разработки программного обеспечения и более чем 15-летним опытом работы в сфере дизайна.</p>
            <p className={styles.text}>Моя специализация — создание MVP и редизайн продуктов со сложной бизнес-логикой.</p>
          </div>
        </div>
        <div className={styles.projects}>Slides</div>
      </main>
    </div>
  )
}
