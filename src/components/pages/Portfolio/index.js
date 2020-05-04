import React from 'react';
import "./Portfolio.css";



function Projects() {
    return (
        
        <div className="container" id="portfolio">
        <div className="row1">
            <div className="col-md-12">
                <div className="row2">
                    <div className="col-md-12">
                        <h2>PORTFOLIO</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <img className="preview" src="images/preview.jpg" alt="covid app preview"/>
                    <div className="dropdown-one">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" area-haspopup="true" aria-expanded="false">COVID-19 PATIENT
                            DB</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item"
                                href="https://github.com/lturner19/COVID-19_Patient_db">Repository</a>
                            <a className="dropdown-item" href="https://secure-sands-03885.herokuapp.com/">Webpage</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <img className="preview" src="/images/opening_page.jpg" alt="Casa-Cocktail preview"/>
                    <div className="dropdown-one">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CASA
                            COCKTAILS</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item"
                                href="https://github.com/lturner19/Casa-Cocktail">Repository</a>
                            <a className="dropdown-item" href="https://rimaodolski.github.io/Casa-Cocktail/">Webpage</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end of row --> */}

            <div className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <img className="preview" src="/images/Start_quiz.jpg" alt="code quiz"/>
                    <div className="dropdown-one">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">HISTOLOGY
                            QUIZ</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item"
                                href="https://github.com/lturner19/Histology_Quiz">Repository</a>
                            <a className="dropdown-item" href="https://lturner19.github.io/Histology_Quiz/">Webpage</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <img className="preview" src="/images/weather_dashboard.jpg" alt="weather dashboard"/>
                    <div className="dropdown-one">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">WEATHER
                            DASHBOARD</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item"
                                href="https://github.com/lturner19/weather_dashboard">Repository</a>
                            <a className="dropdown-item"
                                href="https://lturner19.github.io/weather_dashboard/">Webpage</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end of row --> */}

            <div className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <img className="preview" src="/images/pw_generator.jpg" alt="password generator"/>
                    <div className="dropdown-one">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PASSWORD
                            GENERATOR</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item"
                                href="https://github.com/lturner19/Random-Password-Generator">Repository</a>
                            <a className="dropdown-item"
                                href="https://lturner19.github.io/Random-Password-Generator/">Webpage</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <img className="preview" src="/images/scheduler_preview.jpg" alt="day planner"/>
                    <div className="dropdown-one">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DAY
                            PLANNER</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item"
                                href="https://github.com/lturner19/jQuery_DayPlanner">Repository</a>
                            <a className="dropdown-item"
                                href="https://lturner19.github.io/jQuery_DayPlanner/">Webpage</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end of row --> */}

            <div className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <img className="preview" src="/images/eat_burger_preview.jpg" alt="Happy Burger"/>
                    <div className="dropdown-one">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Happy
                            Burger</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="https://github.com/lturner19/Happy_Burger">Repository</a>
                            <a className="dropdown-item" href="https://secure-sands-03885.herokuapp.com/">Webpage</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <img className="preview" src="/images/generated_team.jpg" alt="team roster"/>
                    <div className="dropdown-one">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TEAM
                            ROSTER</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="https://github.com/lturner19/Team-Roster">Repository</a>
                            <a className="dropdown-item" href=" https://lturner19.github.io/Team-Roster/">Webpage</a>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
      
    </div>
    )
}

export default Projects;