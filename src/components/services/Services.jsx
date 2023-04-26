import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front End</h3>
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
            <h3>Back End</h3>
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
            <h3>Web Development</h3>
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