import React from "react";
// import { icons } from "react-icons";
import vg from "../assets/2.webp";
import vg1 from "../assets/aboutus.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Lorem ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            molestias libero perspiciatis dicta impedit ab?
          </p>
        </main>
      </div>
      <div className="home2" id="contact">
        <img src={vg} alt="Graphics" />
        <div className="text-container">
          <div className="home2-text">
            <div className="text">
              <h2> Tech Support 24x7</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                omnis quae aspernatur quibusdam eligendi magni. Expedita aliquam
                atque libero consequatur exercitationem deleniti quia commodi
                iure delectus, dicta ratione enim facilis nulla nostrum, iusto
                quis nisi sapiente veritatis rem, eum animi a repellendus.
                Tempora nam nostrum veritatis eaque aperiam laudantium placeat?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home3" id="about">
        <div className="home3-text">
          <h2>Who we are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            dolorum! Ut corrupti beatae soluta rem facere provident itaque porro
            saepe consequatur? Tempora voluptate ipsam fugit soluta?
            Repellendus, illum! Animi laborum aperiam quo ratione voluptates
            molestias aliquam necessitatibus repellendus. Tempora, consequatur!
            Quod nam ducimus, explicabo possimus qui, reiciendis vero
            recusandae, deserunt consectetur at sequi veniam aut quidem. Maxime
            dolore et ducimus fugit aut iusto sequi explicabo nisi laboriosam,
            suscipit quas, pariatur animi veritatis dolor ea rerum tempora
            labore mollitia harum fuga cum? Dolorem consequuntur deserunt veniam
            sit assumenda reprehenderit maxime harum ipsum, deleniti reiciendis
            at nesciunt, dolor quibusdam tempore? Quod, officiis.
          </p>
        </div>
        <img src={vg1} alt="Graphics" />
      </div>
      <div className="home4" id="brands">
        <div className="icons">
        <h2>BRANDS</h2>
        <article>
          <div className="icon" style={{ animationDelay: "0.3s" }}>
            <AiFillGoogleCircle /> <p>GOOGLE</p>
          </div>
          <div className="icon" style={{ animationDelay: "0.5s" }}>
            <AiFillAmazonCircle /> <p>AMAZON</p>
          </div>
          <div className="icon" style={{ animationDelay: "0.7s" }}>
            <AiFillYoutube /> <p>YOUTUBE</p>
          </div>
          <div className="icon" style={{ animationDelay: "0.9s" }}>
            <AiFillInstagram /> <p>INSTAGRAM</p>
          </div>
        </article>
        </div>
      </div>
    </>
  );
};

export default Home;
