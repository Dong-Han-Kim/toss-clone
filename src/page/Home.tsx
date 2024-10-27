import style from './style/Home.module.css';

export default function Home() {
	return (
		<main id={style.home_main}>
			<section id={style.section1}>
				<div className={style.content_wrapper}>
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
		</main>
	);
}
