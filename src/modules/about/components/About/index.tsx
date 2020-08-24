import React from "react";
import './index.scss';
import sittin from 'img/sittin.jpg';
import lookin from "img/lookin.jpg";
import Page from "modules/common/components/Page";

export default function About() {
  return (
    <Page title="About">
      <div className="about__info-block">
        <div className="about__img-container">
          <img alt="sittin" className="about__img" src={sittin} />
        </div>
        <div className="about__text-container p-h_xxl">
          <p className="about__text c_gray7">
            Трекер был создан для отслеживания настроения Елены Калачиковой.
            Елена является крайне нестабильным существом, которое по сей день вызывает интерес у ученых всего мира.
            Помимо этого проекта так же планируется ряд проектов, связанных с отслеживанием состояния Елены.
          </p>
          <p className="about__text p-v_xl">
            Работа проводилась в строгой тайне, потому что все подобные проекты находятся под строгим запретом.
            Создатели предыдущих проектов, были репрессированы, их дальнейшая судьба не известна.
          </p>
          <p className="about__text">
            Поскольку работа производится в тяжелых условиях, любые пожертвования от вас будут приятны и высоко оценены.
            Компания - производитель не ответственность за корректность данных.
            Все данные тщательно проверяются и записываются исключительно по состоянию исследуемой.
          </p>
        </div>
        <div className="about__img-container">
          <img alt="lookin" className="about__img" src={lookin} />
        </div>
      </div>
    </Page>
);
}
