import clsx from 'clsx'

import magnum1 from '../../assets/magnum1.webp'
import magnum2 from '../../assets/magnum2.webp'
import magnum3 from '../../assets/magnum3.webp'
import magnum4 from '../../assets/magnum4.webp'
import magnum5 from '../../assets/magnum5.webp'
import magnum6 from '../../assets/magnum6.webp'
import magnum7 from '../../assets/magnum7.webp'
import magnum8 from '../../assets/magnum8.webp'
import magnum9 from '../../assets/magnum9.webp'
import magnum10 from '../../assets/magnum10.webp'
import magnum11 from '../../assets/magnum11.webp'
import magnum12 from '../../assets/magnum12.webp'
import magnum13 from '../../assets/magnum13.webp'
import magnum14 from '../../assets/magnum14.webp'
import magnum15 from '../../assets/magnum15.webp'
import magnum16 from '../../assets/magnum16.webp'
import magnum17 from '../../assets/magnum17.webp'
import magnum18 from '../../assets/magnum18.webp'

import styles from './MagnumPage.module.css';

export function MagnumPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.title}>
            Magnum Bikes
          </h1>

          <h3 className={styles.subtitle}>Клиент</h3>

          <div>
            <p>
              Американский производитель элитных электровелосипедов.
            </p>
            <p className={styles.text}>
              У клиента нет ярко выраженной визуальной идентичности, но есть четко сформулированная миссия. Компания
              стремится к тому, чтобы люди больше взаимодействовали с окружающей средой и местными сообществами, а
              также придерживались принципов экологичности.
            </p>
          </div>
        </div>

        <img src={magnum1} alt="Magnum1" className={styles.slide1} />

        <div className={styles.description}>
          <h3 className={styles.subtitle}>Задача</h3>

          <div>
            <p>
              Разработать приложение для электровелосипеда.
            </p>
            <p className={styles.text}>
              Приложение должно быть дополнением к бортовому компьютеру велосипеда:
            </p>
          </div>

          <ul>
            <li>
              отображать скорость, уровень заряда, расстояние, пройденное за поездку, и выходную мощность;
            </li>
            <li>
              предоставлять доступ к функциям и настройкам велосипеда;
            </li>
            <li>
              рассчитывать расход калорий и компенсировать выбросы CO2;
            </li>
            <li>
              давать возможность ставить личные цели;
            </li>
            <li>
              позволять отслеживать и сохранять поездки;
            </li>
            <li>
              иметь социальные и навигационные функции, чтобы побуждать владельцев чаще пользоваться велосипедом;
            </li>
            <li>
              подчеркивать высокотехнологичность продукта, но при этом быть простым и понятным в использовании;
            </li>
            <li>
              приносить пользу владельцам велосипедов Magnum, других электровелосипедов, а также классических и
              спортивных велосипедов.
            </li>
          </ul>
        </div>

        <h3 className={styles.subtitle}>Решение</h3>

        <img src={magnum2} alt="Magnum2" className={clsx(styles.bigSlide, styles.gap)} />

        <div className={styles.columns}>
          <img src={magnum3} alt="Magnum3" className={styles.column} />

          <div className={styles.column}>
            <p>
              Соревновательность и стремление к самосовершенствованию — основа всех приложений, связанных с фитнесом.
            </p>
            <p className={styles.text}>
              Главный экран — хорошее место для того, чтобы напомнить пользователю о его личных достижениях и текущих
              событиях.
            </p>
            <p className={styles.text}>
              Я постарался создать интерфейс, в котором есть и «Спорт», и «Город», и «Технологии». Но при этом он не
              бросается в глаза и сохраняет свою массовую привлекательность.
            </p>
          </div>
        </div>

        <div className={styles.columns}>
          <img src={magnum4} alt="Magnum4" className={styles.column} />

          <img src={magnum5} alt="Magnum5" className={styles.column} />

          <div className={styles.column}>
            <p>
              Функция «Маячок друзей» позволяет пользователям быстро находить компанию для общения.
            </p>
            <p className={styles.text}>
              Она способствует формированию чувства общности и поощряет общение в офлайн-режиме.
            </p>
            <p className={styles.text}>
              Это простой способ принести пользу всем пользователям приложения и усилить сетевой эффект.
            </p>
          </div>
        </div>

        <div className={styles.columns}>
          <img src={magnum6} alt="Magnum6" className={styles.column} />

          <img src={magnum7} alt="Magnum7" className={styles.column} />

          <div className={styles.column}>
            <p>
              В навигационном модуле пользователи могут планировать свои поездки, используя маршруты, составленные
              сообществом, а также интересные локации, достопримечательности и скрытые жемчужины.
            </p>
            <p className={styles.text}>
              Это побуждает пользователей исследовать окрестности и чаще кататься на велосипеде.
            </p>
            <p className={styles.text}>
              Кроме того, приложение позиционируется как универсальный помощник для велосипедистов.
            </p>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <p>
              Режим AOD Tracking оптимизирован для обеспечения высокой видимости и читаемости, а также низкого
              энергопотребления.
            </p>
            <p className={styles.text}>
              Он в полной мере использует преимущества доступа к бортовому компьютеру велосипеда и данным GPS.
            </p>
            <p className={styles.text}>
              Основные функции велосипеда легко доступны.
            </p>
          </div>

          <img src={magnum8} alt="Magnum8" className={styles.column} />

          <img src={magnum9} alt="Magnum9" className={styles.column} />
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <p>
              Благодаря доступу к данным GPS приложение может давать подсказки по навигации.
            </p>
            <p className={styles.text}>
              Если заставить пользователей переключаться на какое-то приложение с картами, это сведет на нет весь смысл режима Always On Display.
            </p>
          </div>

          <img src={magnum10} alt="Magnum10" className={styles.column} />

          <img src={magnum11} alt="Magnum11" className={styles.column} />
        </div>

        <div className={styles.columns}>
          <img src={magnum12} alt="Magnum12" className={styles.column} />

          <div className={styles.column}>
            Модуль сообщества предоставляет множество функций:

            <ul>
              <li>пользователи могут делиться своими поездками и статистикой;</li>
              <li>соревноваться с друзьями;</li>
              <li>делиться маршрутами и локациями;</li>
              <li> организовывать велосипедные туры, гонки и спонсируемые мероприятия и участвовать в них;</li>
              <li>делиться фотографиями и оставлять комментарии.</li>
            </ul>

            Это приложение не претендует на то, чтобы составить конкуренцию уже существующим социальным сетям. Оно
            предназначено для небольших групп друзей и коллег, а также для развития местных сообществ единомышленников.
          </div>
        </div>

        <div className={styles.columns}>
          <img src={magnum13} alt="Magnum13" className={styles.column} />
          <img src={magnum14} alt="Magnum14" className={styles.column} />
          <img src={magnum15} alt="Magnum15" className={styles.column} />
        </div>

        <div className={styles.columns}>
          <img src={magnum16} alt="Magnum16" className={styles.column} />
          <img src={magnum17} alt="Magnum17" className={styles.column} />
          <img src={magnum18} alt="Magnum18" className={styles.column} />
        </div>

      </main>
    </div>
  )
}
