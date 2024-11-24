import { useEffect, useState } from "react";
import { TbArrowBigUp } from "react-icons/tb";
import useSound from "use-sound";

const ScrollTop = () => {
	const [show, setShow] = useState(false);
	const [ThemeSound] = useSound("/static/sounds/page-change.mp3");

	useEffect(() => {
		const handleWindowScroll = () => {
			if (window.scrollY > 50) setShow(true);
			else setShow(false);
		};

		window.addEventListener("scroll", handleWindowScroll);
		return () => window.removeEventListener("scroll", handleWindowScroll);
	}, []);

	const handleScrollTop = () => {
		window.scrollTo({ top: 0 });
		ThemeSound();
	};

	return (
		<div
			className={`fixed right-16 bottom-8 hidden flex-col gap-3 ${show ? "md:flex" : "md:hidden"}`}
		>
			<button
				aria-label="Voltar ao Topo"
				type="button"
				onClick={handleScrollTop}
				className="pushable"
			>
				<span className="shadow"></span>
				<span className="edge"></span>
				<span className="front">
					<TbArrowBigUp />
				</span>
			</button>
		</div>
	);
};

export default ScrollTop;
