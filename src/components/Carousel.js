
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Carousel({ data }) {
	const [list, setList] = useState([]);
	const [current, setCurrent] = useState(0);
	const sliderRef = useRef();

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCurrent(current > list.length - 2 ? 0 : current + 1);
	// 		handleClick(current > list.length - 2 ? 0 : current + 1);
	// 	}, 5000);

	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, [current, list?.length]);

	const handleClick = (i) => {
		if (current === list?.length - 1) {
			sliderRef.current.slickGoTo(current + 1);
			setCurrent(i);
		} else {
			sliderRef.current.slickGoTo(i);
			setCurrent(i);
		}
	};

	useEffect(() => {
		setList(data);
	}, [data]);

	function NextArrow({ onClick }) {
		return (
			<div className={`next-arrow-wrapper arrow-wrapper`} onClick={onClick}>
				<ArrowForwardIosIcon className="next-arrow arrow" />
			</div>
		);
	}

	function PrevArrow({ onClick }) {
		return (
			<div className={`prev-arrow-wrapper arrow-wrapper`} onClick={onClick}>
				<ArrowBackIosIcon className="prev-arrow arrow" />
			</div>
		);
	}

	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: 0,
		slidesToShow: 3,
		speed: 500,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		dots: true,
		afterChange: (current) => setCurrent(current),
		appendDots: (dots) => {
			return (
				<div className="flex justify-center gap-3 px-4 pt-4">
					<div className={"mx-auto flex justify-center"}>
						{list?.map((_, i) => (
							<button
								className={""}
								key={i}
								onClick={() => handleClick(i)}
							/>
						))}
					</div>
				</div>
			);
		},
	};

	return (
		<div className={"slick-carousel-wrapper"}>
			<Slider {...settings} ref={sliderRef}>
				{list?.map((data, i) => (
					<div key={i} className={""}>
						<SlickCard data={data} />
					</div>
				))}
			</Slider>
		</div>
	);
}

function SlickCard({ data }) {
    return (
        <div className="slick-card">
			{data.name}
        </div>
    );
}