
const Home = ({fishes}) => {
    return (
        <div>
            <header>
                <div className="hero-section">
                    <div className="welcome-box">
                        <h1><span>Welcome to </span>Reefiriki</h1>
                        <h2>All things fish and coral</h2>
                    </div>
                </div>
            </header>
            <div className="home">
                <div className="contaienr">
                    <div className="row">
                        <h2>Featured Fish</h2>
                        <br />
                        <ul className="fish-list">
                            {fishes.getFishes.map((fish) => (
                            <li key={fish.id}>
                                <a href={`/${fish.id}`} className="image-wrapper"><img src={fish.imageUrl} alt="Fish" /></a>
                                <p className="fish-name">{fish.name}</p>
                                <p><a href={`/${fish.id}`} className="btn more">Learn More</a></p>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home