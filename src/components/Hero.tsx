const Hero = () => {
    const isdark = localStorage.getItem('isdark');
    const bgImage = isdark ? "assets/images/diomand-blue-wp.jpg" : "assets/images/diomand-aqua-wp.jpg";
    return (
        <div className="h-[50vh] bg-cover bg-center mt-[2rem] p-[2rem]" style={{ backgroundImage: `url(${bgImage})` }}>
            <h3>Hero Section</h3>
        </div>

);
}

export default Hero;