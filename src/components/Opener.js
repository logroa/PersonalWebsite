/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { bool, node } from "prop-types";
import { useTransition, animated } from "react-spring";
import moment from 'moment';

import './Opener.css'

const visibleStyle = { height: "auto", opacity: 1, overflow: "visible" };
const hiddenStyle = { opacity: 0, height: 0, overflow: "hidden" };

const hideArrow = { visibility: "hidden" };
const seeArrow = { visibility: "visible" };

function getElementHeight(ref) {
  return ref.current ? ref.current.getBoundingClientRect().height : 0;
}

/** The children of this component will slide down on mount and will slide up on unmount */
const SlideToggleContent = ({ isVisible, children, forceSlideIn }) => {
  const isVisibleOnMount = useRef(isVisible && !forceSlideIn);
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  const transitions = useTransition(isVisible, null, {
    enter: () => async (next, cancel) => {
      const height = getElementHeight(innerRef);

      cancel();

      await next({ height, opacity: 1, overflow: "hidden" });
      await next(visibleStyle);
    },
    leave: () => async (next, cancel) => {
      const height = getElementHeight(containerRef);

      cancel();

      await next({ height, overflow: "hidden" });
      await next(hiddenStyle);

      isVisibleOnMount.current = false;
    },
    from: isVisibleOnMount.current ? visibleStyle : hiddenStyle,
    unique: true
  });

  return transitions.map(({ item: show, props: springProps, key }) => {
    if (show) {
      return (
        <animated.div ref={containerRef} key={key} style={springProps}>
          <div ref={innerRef}>{children}</div>
        </animated.div>
      );
    }

    return null;
  });
};

SlideToggleContent.defaultProps = {
  forceSlideIn: false
};

SlideToggleContent.propTypes = {
  /** Should the component mount it's childeren and slide down */
  isVisible: bool.isRequired,
  /** Makes sure the component always slides in on mount. Otherwise it will be immediately visible if isVisible is true on mount */
  forceSlideIn: bool,
  /** The slidable content elements */
  children: node.isRequired
};

const Opener = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div id="opener">
            <SlideToggleContent isVisible={isVisible}>
                <div id="togcont">
                    <div id="frontbox">
                        <div id="time"><b>{moment().format('h:mm a')}</b></div>
                        <div id="date">{moment().format('dddd, MMMM Do YYYY')}</div>

                        <br/><br/>

                        <div id="intro">Hey, my name's Logan.  Everyone just calls me my last name though.  Roach is pretty catchy
                        and it's a bug's name, so that can be kind of fun.  Sorry if the white on white is hard to read.</div>

                        <br/><br/><br/><br/><br/><br/><br/><br/>

                        <div>
                            <button id="closeup" onClick={() => setIsVisible(!isVisible)}>
                                <i class=" ar fas fa-chevron-up" ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </SlideToggleContent>
            <div id="downbut">
                <button id="downopen" onClick={() => setIsVisible(!isVisible)}>
                    <i class=" ar fas fa-chevron-down" ></i>
                </button>
            </div>
        </div>
    );
}

export default Opener;