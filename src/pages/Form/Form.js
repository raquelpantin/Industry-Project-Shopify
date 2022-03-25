import react, { useState } from "react";
import Page1 from "../page1";
import Page2 from "../page2";
import Page3 from "../page3";
import Page4 from "../page4";
import Page5 from "../page5";
import Page6 from "../page6";
//all pages need imported here

function Form() {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <Page1 />;
    } else if (page === 1) {
      return <Page2 />;
    } else if (page === 2) {
      return <Page3 />;
    } else if (page === 3) {
      return <Page4 />;
    } else if (page === 4) {
      return <Page5 />;
    } else {
      return <Page6 />;
    }
  };

  return (
    <div className="form">
      <div className="form__progressbar"></div>
      <div className="form__container">
        <div className="form__page-contents"></div>

        <div>{PageDisplay()}</div>
        {page === 5 ? (
          <button>View More Marketing Apps</button>
        ) : (
          <>
            <button
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Back
            </button>
            <button
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
