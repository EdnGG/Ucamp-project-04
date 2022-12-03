import React from "react";

const CardDescription = () => {
  return (
    <div>
      <div className="container__card-description">
        <h1 className="container__card-description-title">
          El amor hecho pasta
        </h1>
      </div>
      <div className="container__card-description-content">
        <p>
          En el centro histórico. A lado de uno de los monumentos más bellos de
          nuestra ciudad, te brindamos una cálida cena con las personas que más
          amas. Nos hemos destacado por crear una exquisita variedad de
          platillos italianos en Ciudad de México. Nuestros chefs de calidad
          internacional crean una experiencia gastronómica que permite que jamás
          olvides tu visita.
        </p>
      </div>
      <div className="mt-10">
        <div className="container__card-description-reviews">
          <div className="container__card-description-reviews-container">
            <dt class="text-base font-medium text-black-500">Nacimiento</dt>
            <dd class="mt-1 text-3xl ">2002</dd>
          </div>
          <div className="container__card-description-reviews-container">
            <dt class="text-base font-medium text-black-500">Rating</dt>
            <dd class="text-3xl font-extrabold ">★★★★★</dd>
          </div>
          <div className="container__card-description-reviews-container">
            <dt class="text-base font-medium text-white-500">Ubicación</dt>
            <dd class="text-3xl font-extrabold ">Ciudad de México</dd>
          </div>
          <div className="container__card-description-reviews-container">
            <dt class="text-base font-medium text-white-500">Raised</dt>
            <dd class="text-3xl font-extrabold ">$25M</dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
