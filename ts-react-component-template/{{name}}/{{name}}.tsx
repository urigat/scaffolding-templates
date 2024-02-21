// @ts-ignore
import { style } from './Hero.module.css';
// @ts-ignore
import React from 'react';

export const {{name}} = () => {
  return (
    // className={style}
    // <div className="{{name}}">{{name}}</div>
    <div className={`{{name}} ${style}`}>{{name}}</div>
  )
}
