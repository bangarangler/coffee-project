import React from "react"
import BackgroundImage from "gatsby-background-image"

const backgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

backgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default backgroundSection