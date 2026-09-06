import clsx from 'clsx'

import compulse1 from '../../assets/compulse1.webp'
import compulse2 from '../../assets/compulse2.webp'
import compulse3 from '../../assets/compulse3.webp'
import compulse4 from '../../assets/compulse4.webp'
import compulse5 from '../../assets/compulse5.webp'
import compulse6 from '../../assets/compulse6.webp'
import compulse7 from '../../assets/compulse7.webp'
import compulse8 from '../../assets/compulse8.webp'
import compulse9 from '../../assets/compulse9.webp'
import compulse10 from '../../assets/compulse10.webp'
import compulse11 from '../../assets/compulse11.webp'
import compulse12 from '../../assets/compulse12.webp'
import compulse13 from '../../assets/compulse13.webp'
import compulse14 from '../../assets/compulse14.webp'

import styles from './CompulsePage.module.css';

export function CompulsePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.title}>
            Compulse
          </h1>

          <h3 className={styles.subtitle}>Клиент</h3>

          <span>
            Крупная американская медиакомпания, у которой есть 5 ad-tech продуктов, разработанных разными командами в
            разное время для разных целей: внутренних специалистов по рекламным операциям, менеджеров дочерних
            агентств, маркетинговых команд крупных клиентов и сотрудников малого и среднего бизнеса.
          </span>

          <h3 className={styles.subtitle}>Задача</h3>

          <div>
            <p>
              Избавиться от UX-долга и создать единую систему дизайна для нескольких устаревших продуктов.
            </p>
            <p className={styles.text}>
              «Мы хотим, чтобы система была яркой и стильной».
            </p>
          </div>
        </div>

        <h3 className={styles.subtitle}>Легаси</h3>

        <div className={styles.slides}>
          <img src={compulse1} alt="Compulse1" className={styles.slide} />
          <img src={compulse2} alt="Compulse2" className={styles.slide} />
          <img src={compulse3} alt="Compulse3" className={styles.slide} />
          <img src={compulse4} alt="Compulse4" className={styles.slide} />
        </div>


        <div className={styles.description}>
          <h3 className={styles.subtitle}>Проблемы</h3>

          <ul>
            <li>
              Наличие 5 совершенно обособленных команд, занимающихся фронтенд-разработкой продуктов с практически
              идентичным ядром, — неприемлемо.
            </li>
            <li>
              Беспорядочные, несогласованные макеты усложняют процесс обучения для новых пользователей и создают
              негативное впечатление у клиентов, которые подумывают о переключении на продукт.
            </li>
          </ul>

          <h3 className={styles.subtitle}>Решение</h3>

          <div>
            <p>
              Собрав вместе менеджеров по продуктам, я смог определить ключевые сценарии для всех продуктов и разработать
              систему, которая учитывала бы их различные потребности.
            </p>

            <p className={styles.text}>
              В основе лежит одностраничный компонент, которому теперь соответствуют все 150 с лишним экранов всех продуктов.
            </p>
          </div>
        </div>

        <img src={compulse5} alt="Compulse5" className={clsx(styles.bigSlide, styles.gap)} />
        <img src={compulse6} alt="Compulse6" className={clsx(styles.bigSlide, styles.gap)} />
        <img src={compulse7} alt="Compulse7" className={styles.bigSlide} />
        <img src={compulse8} alt="Compulse8" className={styles.bigSlide} />
        <img src={compulse9} alt="Compulse9" className={styles.bigSlide} />
        <img src={compulse10} alt="Compulse10" className={styles.bigSlide} />
        <img src={compulse11} alt="Compulse11" className={styles.bigSlide} />
        <img src={compulse12} alt="Compulse12" className={styles.bigSlide} />
        <img src={compulse13} alt="Compulse13" className={styles.bigSlide} />
        <img src={compulse14} alt="Compulse14" className={styles.bigSlide} />
      </main>
    </div>
  )
}
