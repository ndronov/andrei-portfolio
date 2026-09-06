import clsx from 'clsx'

import wagely1 from '../../assets/wagely1.webp'
import wagely2 from '../../assets/wagely2.webp'
import wagely3 from '../../assets/wagely3.webp'
import wagely4 from '../../assets/wagely4.webp'
import wagely5 from '../../assets/wagely5.webp'

import styles from './WagelyPage.module.css';

export function WagelyPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.title}>
            Wagely
          </h1>

          <h3 className={styles.subtitle}>Клиент</h3>

          <div>
            <p>
              Индонезийский стартап, выдающий “займы до зарплаты”, сформулировал свою миссию следующим образом:
            </p>
            <p className={styles.text}>
              «Предоставить устойчивое решение для всех сотрудников, чтобы разорвать порочный круг долгов, вызванных
              комиссиями за овердрафт, кредитами под высокие проценты или займами до зарплаты, и сыграть ведущую роль
              в обеспечении финансового благополучия работников с низким и средним уровнем дохода в Азии».
            </p>
          </div>

          <h3 className={styles.subtitle}>Задача</h3>

          <span>
            Навести порядок и добавить человечности PDL-приложению.
          </span>
        </div>

        <h3 className={styles.subtitle}>Легаси</h3>

        <img src={wagely1} alt="Wagely1" className={styles.slide} />

        <div className={styles.description}>
          <h3 className={styles.subtitle}>Проблемы</h3>

          <ul>
            <li>
              Цвета недостаточно контрастные.
            </li>
            <li>
              Poppins — слишком часто используемый шрифт с низкой читабельностью в маленьком кегле.
            </li>
            <li>
              Иконки Google Material Icons используются слишком часто, и пользовательские иконки им не соответствуют.
            </li>
            <li>
              Оптимизация для быстрого доступа к деньгам противоречит заявленной миссии.
            </li>
            <li>
              Использование ползунка для определения суммы аванса вместо ввода точной суммы побуждает выбирать суммы,
              превышающие необходимые.
            </li>
            <li>
              Категории расходов добавлены в последнюю очередь.
            </li>
            <li>
              Образовательные материалы, опрос о финансовом состоянии и рекомендации практически не видны.
            </li>
            <li>
              Использование панели навигации подразумевает, что все разделы одинаково важны и используются с
              одинаковой частотой, но это не так.
            </li>
            <li>
              В целом макеты выглядят неаккуратно, что не очень хорошо для продукта, который должен излучать
              спокойствие и ясность.
            </li>
          </ul>
        </div>

        <h3 className={styles.subtitle}>Решение</h3>

        <img src={wagely2} alt="Wagely2" className={clsx(styles.bigSlide, styles.gap)} />

        <div className={styles.verticalSlideWithText}>
          <img src={wagely3} alt="Wagely3" className={styles.verticalSlide} />

          <div>
            <p>
              Потраченная сумма так же доступна сразу, как и оставшаяся. Это подталкивает к более взвешенному принятию
              финансовых решений.
            </p>
            <p className={styles.text}>
              Доступ к деньгам и история снятия средств теперь одинаково важны на главном экране.
            </p>
            <p className={styles.text}>
              Постоянное ненавязчивое напоминание о важных дополнительных функциях.
            </p>
            <p className={styles.text}>
              Более человечный шрифт и продуманное использование цветовой гаммы делают интерфейс более дружелюбным и
              спокойным.
            </p>
          </div>
        </div>

        <div className={styles.verticalSlideWithText}>
          <img src={wagely4} alt="Wagely4" className={styles.verticalSlide} />

          <div>
            <p>
              Распределение расходов по категориям — важный элемент планирования. Мы даем пользователям возможность проанализировать регулярные и экстренные платежи на предстоящий месяц, чтобы принимать более взвешенные финансовые решения.

            </p>
            <p className={styles.text}>
              Детальная классификация также позволяет давать более точные рекомендации и проводить более качественную аналитику.

            </p>
            <p className={styles.text}>
              Прямые переводы в различные сервисные компании удобны и снижают вероятность незапланированных трат.
            </p>
          </div>
        </div>

        <img src={wagely5} alt="Wagely5" className={clsx(styles.bigSlide, styles.gap)} />
      </main>
    </div>
  )
}
