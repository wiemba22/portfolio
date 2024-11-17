import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import PDFViewer from "./pdf";
const Certif = ({ title = "", more = [], img = "", description = "" }) => {
  const [state, setState] = useState({
    isPaneOpen: false,
  });

  return (
    <section >
      <div className=" relative  w-[320px] phone:w-[350px]  h-[610px] phone:h-[500px] bg-black flex flex-col items-center gap-4 justify-start pt-8 border-solid border-primary border-2 border-  rounded-lg text-white ">
        <h3 className="font-pops text-xl font-semibold">{title}</h3>
        <img src={img} alt="" className="w-1/3 h-1/4 " />
        <p className="font-pops font-light text-base px-7">{description}</p>
        <button
          onClick={() => setState({ isPaneOpen: true })}
          className="text-primary underline absolute bottom-7"
        >
          View Certificates
        </button>
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={state.isPaneOpen}
          from="bottom"
          width="100%"
          aria-modal="true"
          tabindex="-1"
          role="dialog"
          title={title}
          onRequestClose={() => {
            setState({ isPaneOpen: false });
          }}
        >
          <div className="w-full flex lg:flex-row flex-col items-center justify-center lg:gap-4 gap-4 flex-wrap hidden md:flex  ">
            {more.map((p, index) => (
              <div key={index}>
                <PDFViewer
                  path={p.path}
                  className="w-1-2 h-1/2 "
                />

              </div>
            ))}
          </div>
          <div className="w-full flex lg:flex-row flex-col items-start justify-center  gap-8 flex-wrap  md:hidden  ">
            {more.map((p, index) => (
              <div key={index}>
                <a
                  href={p.path}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl font-pops underline md:hidden font-bold"
                >
                  +{p.id}
                </a>

              </div>
            ))}
          </div>

        </SlidingPane>
      </div>
    </section>
  );
};
export default Certif;
