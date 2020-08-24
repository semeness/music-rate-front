import React from 'react';
import './index.scss';

type TPageProps = {
    children: any,
    title: string,
};

export default function Page({ title, children }: TPageProps) {
    return (
      <div className="p-h_m p-t_l">
        <h1 className="page__title btn">{title}</h1>
        <div className="p-t_xl">
          {children}
        </div>
      </div>
)
}
