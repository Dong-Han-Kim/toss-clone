import { useEffect } from 'react';
import style from './style/nav.module.css';

export default function Navbar() {
	function navScrollHandler() {
		const topMenu = document.querySelector('.top_menu');
		if (topMenu) {
			topMenu.classList.toggle('on', window.scrollY > 0);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', navScrollHandler);
		return () => window.removeEventListener('scroll', navScrollHandler);
	}, []);

	return (
		<div id={style.top_menu}>
			<nav id={style.nav_wrapper}>
				<div className={style.logo}>
					<img src="/logo.svg" alt="logo" />
				</div>
				<ul className={style.nav_ul}>
					<li>
						<a href="#">회사 소개</a>
					</li>
					<li>
						<a href="#">공지사항</a>
					</li>
					<li>
						<a href="#">고객센터</a>
					</li>
					<li>
						<a href="#">자주 묻는 질문</a>
					</li>
					<li>
						<a href="#">토스인증서</a>
					</li>
					<li>
						<a href="#">채용</a>
					</li>
					<div className={style.lang_ul}>
						<li>
							<a href="#" className={style.lang_active}>
								KOR
							</a>
						</li>
						<span className={style.lang_divider}>|</span>
						<li>
							<a href="#">ENG</a>
						</li>
					</div>
				</ul>
			</nav>
		</div>
	);
}
