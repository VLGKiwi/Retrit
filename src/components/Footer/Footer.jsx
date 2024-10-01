import { Faq } from "./Faq/Faq.jsx";
import style from './style.module.css'
import wa from '../../assets/Footer/whatsapp.svg'
import tg from '../../assets/Footer/tg.svg'

export const Footer = () => {
	return (
		<section className={style.footer}>
			<div className={style.footer__blur}>
				<Faq />
				<div className={style.footer__content}>
					<div className={style.content__text}>
						<p>КЛЕВЦЕВИЧ ЮЛИЯ АЛЕКСАНДРОВНА (ИП)</p>
					</div>
					<div className={style.content__text}>
						<p>ИНН: 222333023214</p>
					</div>
					<div className={style.content__text}>
						<p>Юридический адрес компании: шоссе Северное, Московская область, г. Раменское</p>
					</div>
					<div className={style.content__icons}>
						<div>
							<a href="#">
								<img src={tg} alt="url__telegram" />
							</a>
						</div>
						<div>
							<a href="#">
								<img src={wa} alt="url__whatsApp" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
