const TitleHeader = ({ title, className, id }) => {
	return (
		<div
			id={id}
			className={`${className} font-semibold md:text-5xl text-3xl text-center scroll-mt-24`}
		>
			{title}
		</div>
	);
};

export default TitleHeader;
