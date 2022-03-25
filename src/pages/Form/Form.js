import react, { useState } from "react";
import Page1 from "../Page1/Page1";
import PageGoal from "../PageGoal/PageGoal";
import Page2 from "../Page2/page2";
import Page3 from "../Page3/page3";

import Page6 from "../Page6/Page6";
import "./Form.scss";
//all pages need imported here

function Form() {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <Page2 />;
    } else if (page === 1) {
      return <Page1 />;
    } else if (page === 2) {
      return <Page3 />;
    } else if (page === 3) {
      return <PageGoal />;
    } else {
      return <Page6 />;
    }
  };

  return (
    <div className="form">
      <div className="form__progressbar"></div>
      <div className="form__container">
        <div className="form__page-contents"></div>

        <div className="button-container">{PageDisplay()}</div>
        {page === 4 ? (
          <button className="marketing">View More Marketing Apps</button>
        ) : (
          <>
            <button
              className="back"
              disabled={page == 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Back
            </button>
            <button
              className="proceed"
              disabled={page == 5}
              onClick={() => {
                setPage((currentPage) => currentPage + 1);
              }}
            >
              Proceed
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Form;
