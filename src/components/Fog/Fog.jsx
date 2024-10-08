import { useGSAP } from '@gsap/react';
import cloud from '../../assets/cloud.png'
import './Fog.css'
import { useRef } from 'react';
import gsap from 'gsap';

export const Fog = () => {

	const first = useRef(null)
	const second = useRef(null)
	const third = useRef(null)

	useGSAP(() => {
		const cloudOne = first.current
		const cloudTwo = second.current
		const cloudThree = third.current

		gsap.to(cloudOne, {
			x: -3000,
			duration: 20,
			ease: 'none',
			repeat: -1
		})

		gsap.to(cloudTwo, {
			x: -3000,
			duration: 20,
			ease: 'none',
			repeat: -1,
			delay: 5
		})

		gsap.to(cloudThree, {
			x: -3000,
			duration: 20,
			ease: 'none',
			repeat: -1,
			delay: 10
		})

	})

	return (
		<>
			<div className='fog fog__first' id='fog' ref={first}><img src={cloud} alt="" /></div>
			<div className='fog fog__second' id='fog' ref={second}><img src={cloud} alt="" /></div>
			<div className='fog fog__third' id='fog' ref={third}><img src={cloud} alt="" /></div>
		</>
	)
}
