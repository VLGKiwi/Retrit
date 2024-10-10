import styles from './style.module.css'
import Elena from '../../../assets/aboutUs/Elena.png'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export const AboutUsOne = () => {

	const one = useRef(null)
	const all = useRef(null)

	useGSAP(() => {
		const first = one.current;
		const section = all.current;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				scrub: 2,
				start: 'top top',
				end: '+=250%',
				pin: true
			}
		});

		tl.fromTo(first, {
			scaleX: 1,
			scaleY: 1
		}, {
			scaleX: 0,
			scaleY: 0,
			duration: 3
		});
	})

	return (
		<div className={styles.section} ref={all}>
			<section className={styles.aboutUs} ref={one}>
				<div className={styles.about__content}>
					<div className={styles.about__top}>
						<div className={styles.top__text}>
							<p>
								Я сертифицированный психотерапевт в Европейском ассоциации психотерапии и в общероссийской профессиональной психотерапевтической лиге. <br/>
								В своей практике я совмещаю эмоционально-образную терапию, гештальт подход, арт-терапию и работу с ассоциативно-метафорические картами. <br/>
								Это позволяет прикасаться к чувственной части личности, опираясь на образы и метафоры. <br/>
								Приглашаю вместе прожить совместную психотерапевтическую историю, где каждый сможет перезагрузить свое эмоциональное состояние и поддержать свое психологическое благополучие, где «можно все» и можно по-другому, где найдется место и бережное отношение к чувствам и переживаниям каждого.
							</p>
						</div>
						<div className={styles.top__elena}>
							<h2>Елена Панькова</h2>
							<div><img src={Elena} alt="" /></div>
							<p>Педагог-психолог, Эмоционально-образный терапевт и гештальт практик, эксперт по зависимостям, ведущая групп, автор подкаста «можно по-другому»</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
