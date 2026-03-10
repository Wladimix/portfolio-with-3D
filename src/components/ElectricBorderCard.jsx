const ElectricBorderCard = () => {
	return (
		<div className="electric-card">
			<div className="electric-card-inner">
				<div className="electric-card-border">
					<div className="electric-card-main">
						<div className="electric-glow-layer-1"></div>
						<div className="electric-glow-layer-2"></div>
						<div className="electric-overlay-1"></div>
						<div className="electric-overlay-2"></div>
						<div className="electric-background-glow"></div>

						<div className="electric-card-content">
							<div className="electric-card-header">
								<p className="electric-card-title">
									Обо мне
								</p>
							</div>

							<hr className="electric-card-divider" />

							<div className="electric-card-body">
								<p className="electric-card-description">
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

						<div className="electric-card-border-animated"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElectricBorderCard;
