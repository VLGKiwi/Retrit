import styles from './style.module.css'
import woman from '../../../assets/aboutUs/woman.png'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export const AboutUsTwo = () => {

	const two = useRef(null)
	const all = useRef(null)

	useGSAP(() => {
		const second = two.current
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

		tl.fromTo(second, {
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
			<section className={styles.aboutUs} ref={two}>
				<div className={styles.about__content}>
					<div className={styles.about__bottom}>
						<div className={styles.bottom__img}>
							<img src={woman} alt="" />
						</div>
						<div className={styles.bottom__text}>
							<p>
								На ретрите вместе прикоснемся к потребностям и сформируем запрос, через арт-терапевтические практики.<br />
								Посмотрим в сложности связанные с отношениями, здоровьем, работой и другими сферами жизни каждого, используя ассоциативно-метафорические карты и раскрутим колесо жизненного баланса.<br />
								Получим роскошный опыт групповой терапии, используя авторские техники эмоционально-образной терапии и гештальт подхода.<br />
								С интересом к каждому, конфиденциально, бережно.
								Я искренне верю, что отношения исцеляются отношениями. И человеку всегда нужен человек рядом.<br />
								<span className={styles.text__italic}>Всегда можно по-другому.</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
