import tresor1 from '../../assets/tresor1.webp'
import tresor2 from '../../assets/tresor2.webp'
import tresor3 from '../../assets/tresor3.webp'
import tresor4 from '../../assets/tresor4.webp'
import tresor5 from '../../assets/tresor5.webp'
import tresor6 from '../../assets/tresor6.webp'
import tresor7 from '../../assets/tresor7.webp'
import tresor8 from '../../assets/tresor8.webp'
import tresor9 from '../../assets/tresor9.webp'
import tresor10 from '../../assets/tresor10.webp'
import tresor11 from '../../assets/tresor11.webp'
import tresor12 from '../../assets/tresor12.webp'

import styles from './TresorPage.module.css';

export function TresorPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.title}>
            Tresor
          </h1>

          <h3 className={styles.subtitle}>Клиент</h3>

          <span>
            Безымянный стартап на ранней стадии развития, который стремится использовать смарт-контракты для
            демократизации инвестиций в бриллианты и предметы роскоши.
          </span>

          <h3 className={styles.subtitle}>Задача</h3>

          <span>
            Сделать инвестиции в частичное владение материальными активами увлекательным занятием.
          </span>

          <h3 className={styles.subtitle}>Проблемы</h3>

          <ul>
            <li>
              Розничные инвесторы-миллениалы практически не интересуются материальными активами.
            </li>
            <li>
              Большинство розничных инвесторов по-прежнему скептически относятся к проектам Web3.
            </li>
          </ul>

          <h3 className={styles.subtitle}>Решение</h3>

          <div>
            <p>
              Превратите предметы роскоши из чего-то «скучного, недостижимого, не для меня» в нечто более доступное
              и увлекательное.
            </p>

            <p className={styles.text}>
              Чтобы прийти к понятиям «сокровище», а затем и «приключение», пришлось немного покопаться в истории.
            </p>

            <p className={styles.text}>
              Следующим шагом стало использование языка, понятного целевой аудитории на всех континентах и независимо
              от происхождения, — видеоигр.
            </p>

            <p className={styles.text}>
              Поэтому я многое позаимствовал из игровых интерфейсов и коллекционных карточных игр.
            </p>
          </div>
        </div>

        <div className={styles.slides}>
          <img src={tresor1} alt="Tresor1" className={styles.slide} />
          <img src={tresor2} alt="Tresor2" className={styles.slide} />
          <img src={tresor3} alt="Tresor3" className={styles.slide} />
          <img src={tresor4} alt="Tresor4" className={styles.slide} />
        </div>

        <img src={tresor5} alt="Tresor5" className={styles.slide5} />

        <div className={styles.description}>
          <h3 className={styles.subtitle}>Вдохновение</h3>

          <div>
            <p>
              Эстетика фэнтези, стимпанка и бульварной литературы легко находит отражение в ювелирных украшениях
              высокого класса.
            </p>
            <p className={styles.text}>
              Это составляет эмоциональную основу приложения. И позволяет задействовать мышление коллекционера, а не
              инвестора.
            </p>
          </div>
        </div>

        <img src={tresor6} alt="Tresor6" className={styles.slide6} />

        <div className={styles.description}>
          <p>
            Средства на инвестиционном счете легко вывести, что невыгодно для компании.
          </p>
          <p className={styles.text}>
            Средства, вложенные в акции определенных активов, заблокированы в соответствии с условиями соответствующего
            смарт-контракта. Поэтому я стараюсь сделать владение виртуальным активом более эмоционально насыщенным.
          </p>
        </div>

        <div className={styles.verticalSlides}>
          <img src={tresor7} alt="Tresor7" className={styles.verticalSlide} />
          <img src={tresor8} alt="Tresor8" className={styles.verticalSlide} />
        </div>

        <div className={styles.description}>
          <p>
            Один из способов получения предметов — лутбоксы.
          </p>
          <p className={styles.text}>
            Я представил многоуровневую систему «редкости» или «качества» с цветовой кодировкой, позаимствованную из
            Diablo и WoW и существующую практически без изменений на протяжении десятилетий в десятках популярных игр.
          </p>
        </div>

        <img src={tresor9} alt="Tresor9" className={styles.slide9} />

        <img src={tresor10} alt="Tresor10" className={styles.slide10} />

        <img src={tresor11} alt="Tresor11" className={styles.slide11} />

        <img src={tresor12} alt="Tresor12" className={styles.slide12} />
      </main>
    </div>
  )
}
