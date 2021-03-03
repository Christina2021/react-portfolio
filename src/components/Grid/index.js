import React from "react";

export function Container({ classes, children }) {
    return <div className={`container ${classes}`}>{children}</div>;
}

export function Row({ children }) {
    return <div className={`row`}>{children}</div>;
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