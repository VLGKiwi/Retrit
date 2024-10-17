import style from './style.module.css'
import line from '../../assets/Form/Line.svg'

export const Form = () => {
	return (
		<section className={style.form}>
			<div className={style.form__content}>
				<h2>Оставить заявку</h2>
				<form method='post' action="send.php">
					<input type="text" name="fio" placeholder='ФИО' />
					<input type="number" name="phone" id="" placeholder='Телефон' />
					<input type="email" name="mail" id="" placeholder='Почта' />
					<input type="text" name="tg" placeholder='Телеграмм' />
					<input className={style.submit} type="submit" value="Отправить" />
					<input type="hidden" name="act" value="order" />
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
