import styles from './style.module.css'
import hinkali from '../../../assets/aboutUs/hinkali.png'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export const AboutUsFour = () => {

	const four = useRef(null)
	const all = useRef(null)

	useGSAP(() => {

		const fourth = four.current
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

		tl.fromTo(fourth, {
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
			<section className={styles.aboutUs} ref={four}>
				<div className={styles.about__content}>
					<div className={styles.about__bottom}>
						<div className={styles.bottom__img}>
							<img src={hinkali} alt="" />
						</div>
						<div className={styles.bottom__text}>
							<p>
								Получим удовольствие от процесса и эмоции, которые будут еще долго всплывать в памяти приятными воспоминаниями.<br />
								Просто представь? На улице по-осеннему свежо, а ты распаренный/ая выходишь на улицу, погружаешься в теплый чан, а тело такое легкое-легкое, каждая клеточка прогрета и расслаблена. Никакого телефона, новостей, ответственности и из решений только - «выпить ли мне еще травяного чая?»<br />
								Добро пожаловать на полную перезагрузку!
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
