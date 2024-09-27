import { Header } from './Header/Header';
import { IntroTitle } from './IntroTitle/IntroTitle';
import styles from './style.module.css'

export const Intro = () => {
	return (
		<section className={styles.intro}>
			<Header />
			<IntroTitle />
		</section>
	)
}
