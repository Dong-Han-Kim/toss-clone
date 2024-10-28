import { useEffect, useRef, useState } from 'react';
import style from './style/Home.module.css';

export default function Home() {
	const contentRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (contentRef.current) {
				setIsVisible(true);
			}
		}, 300);
		return () => clearTimeout(timer);
	}, []);
	return (
		<main id={style.home_main}>
			<section id={style.section1}>
				<div className={`${style.content_wrapper}  ${isVisible ? style.on : ''}`} ref={contentRef}>
					<div className={style.text_wrapper}>
						<p>금융의 모든 것</p>
						<p>토스에서 쉽고 간편하게</p>
					</div>
					<div>
						<a href="">
							<img src="https://static.toss.im/png-icons/timeline/applekorea.png" alt="app store" /> App
							Store
						</a>
						<a href="">
							<img src="https://static.toss.im/png-icons/timeline/googleplay.png" /> Google Play
						</a>
					</div>
				</div>
				<div className={style.arrow}>
					<img src="/arrow.svg" />
				</div>
			</section>
			<section id={style.section2}>
				<div className={style.sub_txt_wrap}>
					<p>내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.</p>
					<p>이제껏 경험 못 했던 쉽고 편리한 금융 서비스,</p>
					<p>토스와 함께라면 당신의 일상이 새로워질 거예요.</p>
				</div>
			</section>
			<section></section>
		</main>
	);
}
