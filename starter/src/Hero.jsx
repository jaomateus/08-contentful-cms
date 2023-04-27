import heroImg from './assets/hero.svg'

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex animi
						saepe molestiae sapiente obcaecati ullam dolor! Ea dolore quae in
						labore cumque perspiciatis, deserunt, delectus sed nobis et, saepe
						dicta.
					</p>
				</div>
                <div className="img-container">
                    <img src={heroImg} alt="woman ands the  browser" className='image' />
                </div>
			</div>
		</section>
	);
};

export default Hero;
