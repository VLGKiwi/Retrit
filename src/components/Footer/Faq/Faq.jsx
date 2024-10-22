/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import style from './style.module.css';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger, Observer)
export const Faq = () => {

  useGSAP(() => {
    const titles = gsap.utils.toArray(`.${style.title}`);
    function open(par) {
        if (par.style.display == 'flex') {
          animating = true;
          gsap.fromTo(par, {
            x: 0,
						scaleX: 1,
            scaleY: 1,
            height: par.offsetHeight
          }, {
						scaleX: 0,
						scaleY: 0,
            x: 900,
            height: '0',
            duration: 1,
            opacity: 0,
            display: 'none',
            onComplete: () => animating = false
          })
        } else {
          animating = true;
          gsap.fromTo(par, {
            x: 900,
						scaleX: 0,
						scaleY: 0,
						height: '0'
          }, {
						scaleX: 1,
						scaleY: 1,
						x: 0,
						height: 'auto',
            duration: 1,
            opacity: 1,
            display: 'flex',
            onComplete: () => animating = false
          });
        }
      }

      let heightPar;
      let animating = false
      titles.forEach((title) => {
        title.addEventListener("click", function () {
          if (!animating) {
						open(title.nextSibling)
					}
        });
      });
    })

  return (
    <div className={style.faq}>
      <div>
        <h2 className={style.faq__title}>
          FAQ
        </h2>
        <div className={style.question__left}>
          <h3 className={style.title}>Зачем интервью?</h3>
          <p className={style.text}>Мы ценим комфорт каждого участника и до начала программы, нам важно познакомиться с каждым.</p>
        </div>
        <div className={style.question__right}>
          <h3 className={style.title}>Как будут кормить?</h3>
          <p className={style.text}>Составлению меню мы всегда уделяем особое внимание. В программе учтено полноценное питание.</p>
        </div>
        <div className={style.question__left}>
          <h3 className={style.title}>Как добраться до места ретрита?</h3>
          <p className={style.text}>Мы организуем трансфер, до программы и обратно. Он входит в стоимость. Встретимся в Москве, по адресу, который мы сообщим после регистрации на программу. И вернемся после в этот же адрес. Либо вы сможете добраться на автомобиле самостоятельно до места проведения.</p>
        </div>
        <div className={style.question__right}>
          <h3 className={style.title}>Что брать с собой?</h3>
          <p className={style.text}>За неделю до начала, организатор свяжется с вами и направит список рекомендованных вещей.</p>
        </div>
        <div className={style.question__left}>
          <h3 className={style.title}>Сколько будет человек в группе?</h3>
          <p className={style.text}>Минимальное количество человек - 8. Максимальное - 12.</p>
        </div>
        <div className={style.question__right}>
          <h3 className={style.title}>У меня остался  вопрос!</h3>
          <p className={style.text}>Вы можете в любое время связаться с организатором Юлией 8-996-966-51-68  Telegram: @klevtsevich</p>
        </div>
      </div>
    </div>
  )
}
