import React from "react";
import GoogleMapsPos from "./GoogleMapsPos";

function About() {
  return (
    <main className="about">
      <h2 className="about--header">О нас</h2>
      <div className="about--content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi et
          sapiente iure provident in quam maxime laudantium recusandae nihil
          temporibus corrupti aliquam fugit voluptates amet nisi officia,
          laboriosam aspernatur fuga id necessitatibus perspiciatis eos facere.
          Autem molestiae dignissimos veritatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          doloribus! Libero cupiditate fugit tempore, voluptate debitis, nobis
          molestiae inventore doloremque temporibus accusamus quis quod unde
          vitae, ratione sint illo. Similique, quam! Error impedit quam
          suscipit!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
          dicta architecto? Numquam veritatis sequi velit fugit. Blanditiis
          excepturi sunt molestiae.
        </p>
      </div>
      <GoogleMapsPos />
    </main>
  );
}

export default About;
