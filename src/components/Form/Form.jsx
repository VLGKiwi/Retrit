import style from './style.module.css'
import line from '../../assets/Form/Line.svg'

export const Form = () => {
	return (
		<section className={style.form}>
			<div className={style.form__content}>
				<h2>Оставить заявку</h2>
				<form action="">
					<input type="text" placeholder='ФИО' />
					<input type="number" name="" id="" placeholder='Телефон' />
					<input type="email" name="" id="" placeholder='Почта' />
					<input type="text" placeholder='Телеграмм' />
					<input type="submit" value="Отправить" />
				</form>
				<div>
					<div>
						<img src={line} alt="" />
					</div>
					<p className={style.under__line}>Оплатить пакет</p>
				</div>
				<div>
					<div>
						<img src={line} alt="" />
					</div>
					<p className={style.under__line}>Пройти интервью-знакомство</p>
				</div>
			</div>
		</section>
	)
}
