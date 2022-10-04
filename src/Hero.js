const hero = (
    <section id="hero" class="bg-dark text-light text-center text-sm-start py-5">
        <div class="container">
            <div class="d-sm-flex align-items-center justify-content-center">
                <div class="py-3">
                    <h1 class="display-5">Learn <span class="text-info">Bootstrap</span></h1>
                    <p class="py-1 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laborum quia dicta nobis accusantium, voluptatibus, esse quam ipsa aut unde molestias eum illo id harum obcaecati, fugiat quos at amet!</p>
                    <button class="btn btn-info">Get Started</button>
                </div>
                <img src="https://nourhomsi.net/learn-bootstrap/img/hero-img.svg" class="d-none d-sm-block img-fluid w-50"></img>

            </div>
        </div>
    </section>
)

const Hero = () => {
    return hero;
}

export default Hero;