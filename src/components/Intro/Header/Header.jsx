import styles from './style.module.css'
import vk from '../../../assets/intro/vk.svg'
import tg from '../../../assets/intro/tg.svg'

export const Header = () => {
	return (
		<header className={styles.header}>
			<ul>
				<li className={styles.header__point}>
					<a href="#">
						о нас
					</a>
				</li>
				<li className={styles.header__point}>
					<a href="#">
						события
					</a>
				</li>
				<li className={styles.header__point}>
					<a href="#">
						команда
					</a>
				</li>
				<li className={styles.header__point}>
					<a href="#">
						магазин
					</a>
				</li>
				<li className={styles.header__point}>
					<a href="#">
						контакты
					</a>
				</li>
				<li>
					<div className={styles.header__img}>
						<a href="#">
							<img src={vk} alt="" />
						</a>
					</div>
				</li>
				<li>
					<div>
						<a href="#">
							<img src={tg} alt="" />
						</a>
					</div>
				</li>
			</ul>
		</header>
	)
}
