import React from "react";
import './styles.css';

export function Container({ classes, children }) {
    return <div className={`container ${classes}`}>{children}</div>;
}

export function Row({ classes, children }) {
    return <div className={`row ${classes}`}>{children}</div>;
}

export function Col({ size, classes, children }) {
    return (
      <div
        className={`${size
          .split(" ")
          .map(size => "col-" + size)
          .join(" ")} ${classes}`}
      >
        {children}
      </div>
    );
  }