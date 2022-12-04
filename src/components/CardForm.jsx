import React from "react";

const CardForm = () => {
  return (
    <div>
      <div className="container__card-form">
        <h2 className="container__card-form-title">Reserva con nosotros</h2>
      </div>
      <div className="container__card-form-content">
        <p className="mt-3 text-lg">
          A partir de tu contacto, nos comunicaremos contigo para revisar fechas
          y disponibilidad de horarios.
        </p>
        <dd>
          <p>Centro Histórico</p>
          <p>Ciudad de México, MX 12345</p>
        </dd>
        <div className="mt-20">
          <dt className="sr-only">Phone number</dt>
          <dd className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="container__card-form-content-icon flex-shrink-0 h-6 w-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span className="ml-3">+1 (555) 123-45678910</span>
          </dd>
        </div>
        <div className="mt-3">
          <dt className="sr-only">Email</dt>
          <dd className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="container__card-form-content-icon flex-shrink-0 h-6 w-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="ml-3">contacto@lamiafamiglia.com</span>
          </dd>
        </div>
        <div className="mt-20">
          <dt className="sr-only">Dirección</dt>
          <dd>
            <p>2021. UCamp. Todos los derechos reservados.</p>
            <p>Esta es una aplicación ficticia para fines académicos.</p>
          </dd>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
