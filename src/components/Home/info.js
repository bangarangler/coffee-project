import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title.js"

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem nihil debitis reprehenderit ducimus praesentium Quos quasi
              cupiditate velit laborum nulla Placeat dolorem laudantium sunt
              facere beatae quos? Qui doloremque tenetur facilis facilis
              sapiente quos possimus. Possimus quibusdam amet Amet unde iure
              voluptate corporis reprehenderit. Explicabo animi architecto
              reiciendis vero at, nihil? Officiis facilis ab tempore eius
              perferendis accusamus! Rem autem nostrum pariatur est soluta.
              Perferendis tempora impedit cupiditate Lorem eveniet dicta elit
              minus maxime? Ea placeat ab molestiae impedit voluptatum voluptas,
              sunt Maiores omnis temporibus reprehenderit iste iure facere Vel
              delectus placeat neque necessitatibus fuga repudiandae fugiat
              Itaque?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
