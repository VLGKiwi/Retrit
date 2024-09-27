import styles from './style.module.css'

export const IntroTitle = () => {
	return (
		<div className={styles.intro__title}>
			<h1 className={styles.title__content}>
				<span className={styles.content__mojno}>можно</span>
				<span className={styles.content__podrg}>по-другому</span>
				<span className={styles.content__retrit}>Ретрит -<br/>перезагрузка.</span>
			</h1>
		</div>
	)
}
