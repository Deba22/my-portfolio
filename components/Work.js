import React from 'react'

function Work() {
    const styleWeb = {
        display: 'block',
        transform: `translate(${0}px, ${0}px)`,
        opacity: 1
    };
    const styleMobile = {
        display: 'none',
        transform: `translate(${0}px, ${50}px)`,
        opacity: 0
    };
    const styleImage = {
        transform: `translate(${0}px, ${0}px)`
    };
    return (
        <section id="work">
            <div class="work__container">
                <div class="work-header">
                    <h3 class="work-heading">What I've done?</h3>
                    <div class="work-radio">
                        <span class="work-option">
                            <input type="radio" name="workType" value="code" id="workTypeCode" checked="checked" />
                            <label for="workTypeCode">Web Apps</label>
                        </span>
                        <span class="work-option">
                            <input type="radio" name="workType" value="design" id="workTypeDesign" />
                            <label for="workTypeDesign">Mobile Apps</label>
                        </span>
                    </div>
                </div>
                <div class="projects" id="projects" style={styleWeb}>
                    <div class="project">
                        <div class="project-images">
                            <img alt="amazon screenshot" loading="lazy" class="big" src="images/amazon.00b1ee4aae56d4ccd0607c7828fa1ab6.webp" style={styleImage} />
                            <img alt="amazon mobile screenshot" loading="lazy" class="small" src="images/amazon-small.a648a4e261b1ec33c21f69c0f9063aa8.webp" style={styleImage} />
                        </div>
                        <div class="project-details">
                            <h4>Amazon-ish</h4>
                            <p class="project-desc">Amazon redesign with a modern UI, complete E-Commerce functionality including Payment Processing (Stripe API) and User Authentication (Firebase).</p>
                            <p class="stack"><b>Tech Stack: </b>React Router, Payment Processing with Stripe API, Firebase, Framer Motion</p>
                            <div class="buttons">
                                <a rel="noreferrer" target="_blank" href="https://amazon-ish.vercel.app" class="button">Live Preview</a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/santdas36/amazon-ish" class="buttonText">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div class="project">
                        <div class="project-images">
                            <img alt="tmdb screenshot" loading="lazy" class="big" src="images/tmdb.487ae9dd26c3f72c98e8338766eb7c69.webp" style={styleImage} />
                            <img alt="tmdb mobile screenshot" loading="lazy" class="small" src="images/tmdb-small.f5969f9b77fdfc4d135bffa8210bccf7.webp" style={styleImage} />
                        </div>
                        <div class="project-details">
                            <h4>TMDb-ish</h4>
                            <p class="project-desc">A compact single page application to browse and search for your favorite Movies and TV Shows. API provided by themoviedb.org </p>
                            <p class="stack"><b>Tech Stack: </b>ReactJs, Axios, Single Page Application</p>
                            <div class="buttons">
                                <a rel="noreferrer" target="_blank" href="https://tmdb-ish.vercel.app" class="button">Live Preview</a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/santdas36/tmdb-ish" class="buttonText">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div class="project">
                        <div class="project-images">
                            <img alt="spotify screenshot" loading="lazy" class="big" src="images/spotify.a7c9f4381c6bb80475411bb5d00147ec.webp" style={styleImage} />
                            <img alt="spotify mobile screenshot" loading="lazy" class="small" src="images/spotify-small.8af8c646fb53f6a3e0b954dba265800e.webp" style={styleImage} />
                        </div>
                        <div class="project-details">
                            <h4>Spotify-ish</h4>
                            <p class="project-desc">A Spotify - based Web Player, built with ReactJs, which uses the offical Spotify API to obtain user's details, playlists and control play state.</p>
                            <p class="stack"><b>Tech Stack: </b>ReactJs, Third Party Authentication, Spotify API</p>
                            <div class="buttons">
                                <a rel="noreferrer" target="_blank" href="https://spotify-ish.vercel.app" class="button">Live Preview</a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/santdas36/spotify-ish" class="buttonText">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div class="view-more">
                        <a href="https://github.com/Deba22" rel="noreferrer" target="_blank" class="button">
                            View More
                        </a>
                    </div>
                </div>
                <div class="designs" id="designs" style={styleMobile}>
                </div>
            </div>
        </section>
    )
}

export default Work
