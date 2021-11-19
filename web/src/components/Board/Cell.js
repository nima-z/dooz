import React, { Fragment, memo } from "react";
import { Transition } from "react-transition-group";

import styles from "./Cell.module.css";

const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Cell({ player, sound, transportToUp, isTurn, image }) {
  if (sound) sound();

  return (
    <Fragment>
      <td
        className={styles.cell}
        onClick={isTurn && !player ? transportToUp : null}
      >
        <div className={styles.holder}>
          <Transition in={player} timeout={duration}>
            {(state) => {
              console.log(state);
              return (
                <img
                  src={image}
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                />
              );
            }}
          </Transition>
        </div>
      </td>
    </Fragment>
  );
}

function propsAreEqual(prev) {
  return prev.player ? true : false;
}

export default memo(Cell, propsAreEqual);
