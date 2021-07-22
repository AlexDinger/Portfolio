import React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

const timeout = 300;

const styles = {
  entering: {
    position: "absolute",
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
};

const Transition = ({ children, location }) => {
  return (
    <TransitionGroup>
      <ReactTransition key={location.pathname} timeout={timeout}>
        {(status) => <div style={styles[status]}>{children}</div>}
      </ReactTransition>
    </TransitionGroup>
  );
};

export default Transition;
