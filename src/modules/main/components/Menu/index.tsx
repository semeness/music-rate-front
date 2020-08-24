import {Link, useRouteMatch} from "react-router-dom";
import React from "react";
import './style.scss';
import eat from 'img/eat.jpg';
import kind from 'img/kind.jpg';
import look from 'img/look.jpg';
import party from 'img/party.jpg';
import scared from 'img/scared.jpg';
import tired from 'img/tired.jpg';
import work from 'img/work.jpg';
import takingAPhoto from 'img/taking-a-photo.jpg';

type TPhotoData = {
    alt: string,
    src: string,
};

const activePhotoId = Math.floor(Math.random() * 4);
const leftPhotoList: TPhotoData[] = [{ src: eat, alt: 'eat' }, { src: kind, alt: 'kind' }, { src: look, alt: 'look' }, { src: party, alt: 'party' }];
const rightPhotoList: TPhotoData[] = [{ src: work, alt: 'work' }, { src: tired, alt: 'tired' }, { src: scared, alt: 'scared' }, {
    src: takingAPhoto,
    alt: 'taking a photo',
}];


function renderPhoto(photoList: TPhotoData[]) {
    const imgData = photoList[activePhotoId];

    return <img alt={imgData.alt} className="menu__photo" src={imgData.src} />;
}

export default function Menu() {
    const match = useRouteMatch();

    return (
      <div className="menu p-v_xs p-h_s">
        <div className="menu__photo-container">
          {renderPhoto(leftPhotoList)}
        </div>
        <ul className="menu__menu-items">
          <li className="menu__item">
            <Link className="menu__item-link" to="/">Home</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item-link" to="/about">About</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item-link" to="/chart">Chart</Link>
          </li>
        </ul>
        <div className="menu__photo-container">
          {renderPhoto(rightPhotoList)}
        </div>
      </div>
    )
}
