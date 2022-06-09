import React from "react";
import "./style.css";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description, read } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read"></div>
                  </div>
                  <div className="card-image">
                    <a href={read} className="card-tag subtle" target="blank">
                      <img
                        src={image}
                        alt="images"
                        className="card-media image-aj"
                      />
                    </a>
                  </div>
                  <div class="main">
                    <button class="btn">
                      {/* <span className="card-tag  subtle">{read} Read</span> */}
                      {/* <Link to={'/'} >Read</Link> */}
                      <a href={read} className="linkremove" target="blank">
                        Read
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
