import styles from './style.module.css'

export const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.about__content}>
				<div className={styles.content}>
					<p>5 дней / 4 ночи</p>
				</div>
				<div className={styles.content}>
					<p>4 динамические практики</p>
				</div>
				<div className={styles.content}>
					<p>19 часов групповой терапии</p>
				</div>
				<div className={styles.content}>
					<p>Банный день с паром, чаном и чаем</p>
				</div>
			</div>
		</section>
	)
}
