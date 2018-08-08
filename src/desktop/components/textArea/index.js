import React from 'react';


export default function TextArea (props){
    return (
      <div className={`input-text-wrapper ${props.hidden && 'hidden'}`}>
        <div>
          <textarea
            {...props}
            placeholder={props.placeholder || props.label}
            className={props.theme}
          />
          {props.label && (
            <label className="textarea" htmlFor={props.name}>
              {props.label}
            </label>
          )}
        </div>
      </div>
    );
}
