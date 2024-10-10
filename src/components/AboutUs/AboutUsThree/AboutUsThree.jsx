import styles from './style.module.css'
import daria from '../../../assets/aboutUs/daria.png'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export const AboutUsThree = () => {

	const three = useRef(null)
	const all = useRef(null)

	useGSAP(() => {

		const third = three.current
		const section = all.current

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				scrub: 2,
				start: 'top top',
				end: '+=250%',
				pin: true
			}
		})

		tl.fromTo(third, {
			scaleX: 1,
			scaleY: 1
		}, {
			scaleX: 0,
			scaleY: 0,
			duration: 4
		})
	})

	return (
		<div className={styles.section} ref={all}>
			<section className={styles.aboutUs} ref={three}>
				<div className={styles.about__content}>
					<div className={styles.about__top}>
						<div className={styles.top__text}>
							<h2>
								О бане
							</h2>
							<p>
								Приглашаю погрузиться в мир мягкого пара, приятных ароматов и полного расслабления!  <br/>
								Очистим наше тело через глубокий прогрев в парной, активное воздействие веничками, с помощью процедур с применением природных абсорбентов - веществ, которые заберут все плохое в энергетическом и физическом плане. <br/>
								Оздоровимся, вдыхая ароматы горных трав и аромамасел. <br/>
								Очистим мысли через полное расслабление, отключимся от внешнего мира, наладим контакт со своим телом.
							</p>
						</div>
						<div className={styles.top__daria}>
							<h2>Игорцова Дарья</h2>
							<div><img src={daria} alt="" className={styles.daria} /></div>
							<p>Массажист, пармастер</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
