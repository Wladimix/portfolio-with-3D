const ElectricBorderCard = () => {
	return (
		<div className="relative p-0.5 rounded-3xl">
			<div className="relative w-full h-full">
				<div className="border border-[rgba(98,224,255,0.5)] rounded-3xl pr-1 pb-1 z-5 relative">
					<div
						className="relative w-full min-h-112.5 md:min-h-200 max-w-125 md:max-w-325 rounded-3xl"
						style={{
							background:
								"linear-gradient(-30deg, rgba(98,224,255,0.4), transparent, rgba(98,224,255,0.4)), linear-gradient(to bottom, #0e0e10, #0e0e10)",
						}}
					>
						<div
							className="hidden md:block absolute inset-0 rounded-3xl border-2 border-[#62e0ff] pointer-events-none z-10"
							style={{ filter: "blur(1px)" }}
						></div>
						<div
							className="hidden md:block absolute inset-0 rounded-3xl border-2 border-blue-50 pointer-events-none z-20"
							style={{ filter: "blur(4px)" }}
						></div>
						<div
							className="hidden md:block absolute inset-0 rounded-3xl opacity-100 mix-blend-overlay scale-110 pointer-events-none z-30"
							style={{
								filter: "blur(16px)",
								background:
									"linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)",
							}}
						></div>
						<div
							className="hidden md:block absolute inset-0 rounded-3xl opacity-50 mix-blend-overlay scale-110 pointer-events-none z-40"
							style={{
								filter: "blur(16px)",
								background:
									"linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)",
							}}
						></div>
						<div
							className="hidden md:block absolute inset-0 rounded-3xl filter blur-[32px] scale-110 opacity-30 z-0 pointer-events-none"
							style={{
								background:
									"linear-gradient(-30deg, #62e0ff, transparent, #52aeff, transparent, #fd5c79, transparent, #6d45ce)",
							}}
						></div>

						<div className="relative z-10 flex flex-col pointer-events-none">
							<div className="flex flex-col px-7 py-6 pb-3 h-full md:px-24 md:py-14 md:pb-6">
								<p className="text-[clamp(26px,5vw,72px)] md:text-[clamp(26px,5vw,72px)] font-medium leading-[1.3]">
									Обо мне
								</p>
							</div>

							<hr
								className="border-none h-px bg-current opacity-10"
								style={{
									maskImage:
										"linear-gradient(to right, transparent, black, transparent)",
									WebkitMaskImage:
										"linear-gradient(to right, transparent, black, transparent)",
								}}
							/>

							<div className="flex flex-col px-7 py-5 pt-3 md:px-24 md:py-10 md:pt-6">
								<p className="opacity-70 text-[clamp(15px,2.5vw,34px)] leading-[1.6] text-left md:text-justify">
									Привет! Я ищу работу на позицию разработчика
									в сфере JavaScript/TypeScript. Мне интересны
									как backend, так и frontend, так как я успел
									поработать в обоих направлениях (но для
									начала я бы хотел развиваться в одном из
									этих направлений). Также попробовал себя в
									качестве системного администратора, но всё
									же решил, что хочу развиваться именно как
									разработчик. Хочу попасть в коллектив, в
									котором ценится грамотно написанный и
									читаемый код. Мне будет интересно при
									необходимости выполнить тестовое задание и
									рассказать подробней о себе на
									собеседовании.
								</p>
							</div>
						</div>

						<div
							className="hidden md:block absolute inset-0 rounded-3xl border-2 border-[#62e0ff] pointer-events-none z-10"
							style={{ filter: "url(#turbulent-displace)" }}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElectricBorderCard;
