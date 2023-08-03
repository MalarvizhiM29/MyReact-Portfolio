import React from "react";
import "./Myskills.css";

const Myskills = () => {
  return (
    <>
      <div className="myskill">
        <div className="myskill-container">
          <h1 className="myskill-title">My Skills</h1>
          <div className="container-skill">
            <div className="card">
              <h2>Frontend</h2>
              <ul>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" />
                </li>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" />
                </li>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/128/541/541509.png" />
                </li>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/128/3459/3459528.png" />
                </li>
              </ul>
            </div>

            <div className="card">
              <h2>Backend</h2>
              <ul>
                <li>
                  <i class="fa-brands fa-node fa-3x"></i>
                </li>
                <li>
                  <img src="https://moldoweb.com/wp-content/uploads/2022/03/6202fcdee5ee8636a145a41b_1234.png" />
                </li>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/128/1199/1199128.png" />
                </li>
                <li>
                  <img src="https://juststickers.in/wp-content/uploads/2019/07/mongodb.png" />
                </li>
              </ul>
            </div>

            <div className="card">
              <h2>Tools</h2>
              <ul>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/128/4494/4494740.png" />
                </li>
                <li>
                  <img src="https://www.vhv.rs/dpng/d/571-5718602_transparent-ubuntu-logo-png-logo-postman-icon-png.png" />
                </li>
                <li>
                  <img src="https://juststickers.in/wp-content/uploads/2019/07/visual-studio-code.png" />
                </li>
                <li>
                  <img src="https://juststickers.in/wp-content/uploads/2021/02/figma.png" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myskills;
