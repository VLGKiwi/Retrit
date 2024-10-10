import styles from './style.module.css'
import Elena from '../../assets/aboutUs/Elena.png'
import woman from '../../assets/aboutUs/woman.png'
import hinkali from '../../assets/aboutUs/hinkali.png'
import daria from '../../assets/aboutUs/daria.png'
import yulia from '../../assets/aboutUs/Yulia.png'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export const AboutUs = () => {

	const one = useRef(null)
	const two = useRef(null)
	const three = useRef(null)
	const four = useRef(null)
	const five = useRef(null)
	const all = useRef(null)

	useGSAP(() => {
		const first = one.current
		const second = two.current
		const third = three.current
		const fourth = four.current
		const fifth = five.current
		const section = all.current

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				scrub: 5,
				start: 'top top',
				end: '+=250%',
				pin: true
			}
		})

		tl.fromTo(first, {
			scaleX: 1,
			scaleY: 1
		}, {
			scaleX: 0,
			scaleY: 0,
			duration: 3
		}).fromTo(second, {
			scaleX: 0,
			scaleY: 0
		}, {
			scaleX: 1,
			scaleY: 1,
			duration: 4
		}).fromTo(second, {
			scaleX: 1,
			scaleY: 1
		}, {
			scaleX: 0,
			scaleY: 0,
			duration: 4
		}).fromTo(third, {
			scaleX: 0,
			scaleY: 0
		}, {
			scaleX: 1,
			scaleY: 1,
			duration: 4
		}).fromTo(third, {
			scaleX: 1,
			scaleY: 1
		}, {
			scaleX: 0,
			scaleY: 0,
			duration: 4
		}).fromTo(fourth, {
			scaleX: 0,
			scaleY: 0
		}, {
			scaleX: 1,
			scaleY: 1,
			duration: 4
		}).fromTo(third, {
			scaleX: 1,
			scaleY: 1
		}, {
			scaleX: 0,
			scaleY: 0,
			duration: 4
		}).fromTo(fifth, {
			scaleX: 0,
			scaleY: 0
		}, {
			scaleX: 1,
			scaleY: 1,
			duration: 4
		}).fromTo(fifth, {
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
