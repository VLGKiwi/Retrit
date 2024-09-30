import styles from './style.module.css'

export const Service = () => {
	return (
		<section className={styles.service}>
			<div className={styles.mesto__sila}>
				<h2 className={styles.sila__title}>
					Назовем это секретным местом силы ;)
				</h2>
				<p className={styles.sila__text}>
					Вы будете рамещены в комфортных комнатах уютного дома в пределах Московской области.
				</p>
			</div>
			<div className={styles.pakets}>
				<div className={styles.paket__content}>
					<h3 className={styles.content__title}>
						/ Пакет 1
					</h3>
					<ul className={styles.content__plus}>
						<li>Проживание</li>
						<li>Групповая терапия</li>
						<li>Утренние динамические практики</li>
						<li>Банный день</li>
						<li>Проживание</li>
						<li>Питание</li>
						<li>Подарки от организаторов</li>
					</ul>
					<div>
						<p className={styles.content__price}>90.000 руб</p>
						<p className={styles.content__price}>70.000 руб (До 06.10)</p>
						<p className={styles.content__price}>Забронировать место 20.000 руб \</p>
					</div>
				</div>
				<div className={styles.paket__content}>
					<h3 className={styles.content__title}>
						/ Пакет 2
					</h3>
					<ul className={styles.content__plus}>
						<li>Проживание</li>
						<li>Групповая терапия</li>
						<li>Утренние динамические практики</li>
						<li>Банный день</li>
						<li>Проживание</li>
						<li>Питание</li>
						<li>Подарки от организаторов</li>
						<li>2 персональные сессии</li>
						<li>Месяц сопровождения психотерапевта после ретрита</li>
						<li>Одноместное размещение</li>
					</ul>
					<div>
						<p className={styles.content__price}>150.000 руб</p>
						<p className={styles.content__price}>130.000 руб (До 06.10)</p>
						<p className={styles.content__price}>Забронировать место 40.000 руб \</p>
					</div>
				</div>
			</div>
		</section>
	)
}
