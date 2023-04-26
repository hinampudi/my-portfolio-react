import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Clients I Worked for</h5>
      <h2>Professional Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Staples</h3>
            <h2>April 2022 – Till Date</h2>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Tresbu Digital</h3>
            <h2>Jun 2017 - Apr 2021</h2>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Zestwings Technologies </h3>
            <h2>Jan 2016- May 2017</h2>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, labore?</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
