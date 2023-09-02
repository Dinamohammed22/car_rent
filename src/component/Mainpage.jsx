import React, { Component } from "react";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, EffectCube } from "swiper/modules";
import "swiper/css";

import { NavLink } from "react-router-dom";
export default class Mainpage extends Component {
  render() {
    return (
      <div>
        <div className="Mainpage">
          {/* main container start */}
          <div className="container">
            {/* first section start */}
            <div className="first-section">
              <img
                className="gif-img"
                src={require("./images/Car rental (2).gif")}
                alt="jhj"
              />
              <div className="left">
                <h1>
                  <b>
                    شركة <span>بنان</span> لتأجير<br></br> السيارات
                  </b>
                </h1>
                <p>
                  نوفر لكم ارقي السيارات باسعار تنافسية و جودة عالية<br></br> قم
                  بحجز سيارتك الان معنا
                </p>
                <NavLink to="/Cars" className="btn-1">
                  استكشف الجديد
                </NavLink>
              </div>
            </div>
            {/* first section end*/}

            {/* second section swiper start */}
            <div className="container-sec">
              <h1>الاعلي مبيعا</h1>
              <div className="second-section">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, EffectCube]}
                  spaceBetween={300}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="swiper"
                >
                  {/*  1*/}
                  <SwiperSlide>
                    <div className="rectangle">
                      <img
                        src={require("./images/silver-metallic-color-sport-sedan-road-removebg-preview.png")}
                        className="imge-4"
                        alt="jhj"
                      />
                      <div className="box-words">
                        <h3 className="bmw">BMW</h3>
                        <h3 className="bmw">
                          Price:<span>20,000$</span>
                        </h3>
                        <div className="line-of-icons">
                          <div className="icon-set">
                            <img
                              src={require("./images/car-door (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 ابواب</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/gear-stick (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">ناقل حركة اوتوماتيكي</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/car-seat (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 مقاعد</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/travel-bag.png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">امتعة 2</h3>
                          </div>
                        </div>
                        <NavLink to="/Cars" className="rent-btn">
                          استأجرها الان
                        </NavLink>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/*  */}
                  {/* 2 */}
                  <SwiperSlide>
                    <div className="rectangle">
                      <img
                        src={require("./images/red-luxury-sedan-road-removebg-preview.png")}
                        className="imge-4"
                        alt="jhj"
                      />
                      <div className="box-words">
                        <h3 className="bmw">BMW</h3>
                        <h3 className="bmw">
                          Price:<span>20,000$</span>
                        </h3>
                        <div className="line-of-icons">
                          <div className="icon-set">
                            <img
                              src={require("./images/car-door (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 ابواب</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/gear-stick (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">ناقل حركة اوتوماتيكي</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/car-seat (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 مقاعد</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/travel-bag.png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">امتعة 2</h3>
                          </div>
                        </div>
                        <NavLink to="/Cars" className="rent-btn">
                          استأجرها الان
                        </NavLink>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/*  */}
                  {/*  */}
                  <SwiperSlide>
                    <div className="rectangle">
                      <img
                        src={require("./images/64384-removebg-preview.png")}
                        className="imge-4"
                        alt="jhj"
                      />
                      <div className="box-words">
                        <h3 className="bmw">BMW</h3>
                        <h3 className="bmw">
                          Price:<span>20,000$</span>
                        </h3>
                        <div className="line-of-icons">
                          <div className="icon-set">
                            <img
                              src={require("./images/car-door (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 ابواب</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/gear-stick (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">ناقل حركة اوتوماتيكي</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/car-seat (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 مقاعد</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/travel-bag.png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">امتعة 2</h3>
                          </div>
                        </div>
                        <NavLink to="/Cars" className="rent-btn">
                          استأجرها الان
                        </NavLink>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/*  */}
                  {/*  */}
                  <SwiperSlide>
                    <div className="rectangle">
                      <img
                        src={require("./images/64403-removebg-preview.png")}
                        className="imge-4"
                        alt="jhj"
                      />
                      <div className="box-words">
                        <h3 className="bmw">BMW</h3>
                        <h3 className="bmw">
                          Price:<span>20,000$</span>
                        </h3>
                        <div className="line-of-icons">
                          <div className="icon-set">
                            <img
                              src={require("./images/car-door (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 ابواب</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/gear-stick (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">ناقل حركة اوتوماتيكي</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/car-seat (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 مقاعد</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/travel-bag.png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">امتعة 2</h3>
                          </div>
                        </div>
                        <NavLink to="/Cars" className="rent-btn">
                          استأجرها الان
                        </NavLink>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/*  */}
                  {/*  */}
                  <SwiperSlide>
                    <div className="rectangle">
                      <img
                        src={require("./images/64401-removebg-preview.png")}
                        className="imge-4"
                        alt="jhj"
                      />
                      <div className="box-words">
                        <h3 className="bmw">BMW</h3>
                        <h3 className="bmw">
                          Price:<span>20,000$</span>
                        </h3>
                        <div className="line-of-icons">
                          <div className="icon-set">
                            <img
                              src={require("./images/car-door (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 ابواب</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/gear-stick (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">ناقل حركة اوتوماتيكي</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/car-seat (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 مقاعد</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/travel-bag.png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">امتعة 2</h3>
                          </div>
                        </div>
                        <NavLink to="/Cars" className="rent-btn">
                          استأجرها الان
                        </NavLink>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/*  */}
                  {/*  */}
                  <SwiperSlide>
                    <div className="rectangle">
                      <img
                        src={require("./images/67413-removebg-preview.png")}
                        className="imge-4"
                        alt="jhj"
                      />
                      <div className="box-words">
                        <h3 className="bmw">BMW</h3>
                        <h3 className="bmw">
                          Price:<span>20,000$</span>
                        </h3>
                        <div className="line-of-icons">
                          <div className="icon-set">
                            <img
                              src={require("./images/car-door (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 ابواب</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/gear-stick (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">ناقل حركة اوتوماتيكي</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/car-seat (1).png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">4 مقاعد</h3>
                          </div>
                          <div className="icon-set">
                            <img
                              src={require("./images/travel-bag.png")}
                              className="icon-2"
                              alt="jhj"
                            />
                            <h3 className="icon-words">امتعة 2</h3>
                          </div>
                        </div>
                        <NavLink to="/Cars" className="rent-btn">
                          استأجرها الان
                        </NavLink>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>{" "}
            </div>

            {/* second section swiper end */}

            {/* third section start*/}
            <div className="third-section">
              <h1>الشركات المتعاونة معنا</h1>
              <div className="all-col">
                {/* start col */}
                <div className="coll">
                  {/*  */}
                  <div className="g1">
                    <img
                      src={require("./images/BMW-Logo-500x281.png")}
                      className="bmw-icon"
                      alt="jhj"
                    />
                    {/* <h3>BMW</h3> */}
                  </div>
                  {/*  */}
                  <div className="g1">
                    <img
                      src={require("./images/Mercedes-Benz-Logo-500x311.png")}
                      className="bmw-icon"
                      alt="jhj"
                    />
                    {/* <h3>Mercedes</h3> */}
                  </div>
                  {/*  */}
                  <div className="g1">
                    <img
                      src={require("./images/Chevrolet-logo-500x281.png")}
                      className="bmw-icon"
                      alt="jhj"
                    />
                    {/* <h3>Chevrolet</h3> */}
                  </div>
                  {/*  */}
                </div>
                {/* end col */}
                {/* start col */}
                <div className="coll">
                  {/*  */}
                  <div className="g1">
                    <img
                      src={require("./images/Ford-Logo-500x281.png")}
                      className="bmw-icon"
                      alt="jhj"
                    />
                    {/* <h3>Toyota</h3> */}
                  </div>
                  {/*  */}
                  <div className="g1">
                    <img
                      src={require("./images/Tesla-logo-500x281.png")}
                      className="bmw-icon"
                      alt="jhj"
                    />
                    {/* <h3>Tesla</h3> */}
                  </div>
                  {/*  */}
                  <div className="g1">
                    <img
                      src={require("./images/Volkswagen-logo-500x281.png")}
                      className="bmw-icon"
                      alt="jhj"
                    />
                    {/* <h3>Ford</h3> */}
                  </div>
                  {/*  */}
                </div>
                {/* end col */}
                {/* start col */}
                <div className="coll">
                  {/*  */}
                  <div className="g1">
                    <img
                      src={require("./images/Honda-logo-500x281.png")}
                      className="bmw-icon"
                      alt="jhj"
                    />
                    {/* <h3>Honda</h3> */}
                  </div>
                  {/*  */}
                  <div className="g1">
                    <img
                      src={require("./images/Porsche-Logo-500x281.png")}
                      className="bmw-icon"
                      alt="jhj"
                    />
                    {/* <h3>Porsche</h3> */}
                  </div>
                  {/*  */}
                  <div className="g1">
                    <img
                      src={require("./images/Ferrari-logo-500x333.png")}
                      className="bmw-icon"
                      alt="jhj"
                    />
                    {/* <h3>Ferrari</h3> */}
                  </div>
                  {/*  */}
                </div>
                {/* end col */}
              </div>
            </div>
            {/* third section end */}
          </div>
          {/* main container end */}
        </div>
      </div>
    );
  }
}
