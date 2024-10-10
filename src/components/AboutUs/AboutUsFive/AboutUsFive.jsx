import styles from './style.module.css'
import yulia from '../../../assets/aboutUs/Yulia.png'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export const AboutUsFive = () => {

	const five = useRef(null)
	const all = useRef(null)

	useGSAP(() => {

		const fifth = five.current
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

		tl.fromTo(fifth, {
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
			<section className={styles.aboutUs} ref={five}>
				<div className={styles.about__content}>
					<div className={styles.about__top}>
						<div className={styles.top__text}>
							<h2>
								<span>Динамические практики</span><span className={styles.line__around}></span><span>Что это такое?</span>
							</h2>
							<p>
								Это путь к тишине, спокойствию и гармонии через активные движения телом, дыхание звучание.<br/>
								Динамические практики - это гармонизация себя, поиск внутренней опоры, успокоение ума. Это возможность соединиться с собой, начать слышать и чувствовать свое тело.<br/>
								Это инструмент эмоциональной гигиены, позволяющий максимально ярко прожить все эмоции, выплеснуть их в экологичной форме и избавиться от ненужных.
							</p>
						</div>
						<div className={styles.top__yulia}>
							<div><img src={yulia} alt="" /></div>
							<h2>Клевцевич Юлия</h2>
							<p>Организатор</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
