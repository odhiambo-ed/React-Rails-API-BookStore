import React from 'react'

const Footer = () => {
  return (
      <div>
          <footer className="bg-dark text-center text-white">
              <div className="container p-4 pb-0">
                  <section className="mb-4">

                      <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/odhiambo_ed" role="button"
                      ><i className="fab fa-twitter"></i
                      ></a>

                      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/edward-odhiambo/" role="button"
                      ><i className="fab fa-linkedin-in"></i
                      ></a>

                      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/white3d" role="button"
                      ><i className="fab fa-github"></i
                      ></a>
                  </section>
              </div>

              <div className="text-center p-3">
                  © 2022 Copyright:
                  <a className="text-white text-decoration-none text-uppercase" href="https://edwardodhiambo.com/"> EdwardOdhiambo.com</a>
              </div>
          </footer>
    </div>
  )
}

export default Footer