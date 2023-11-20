import React,{Component} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Assets from "../../assets/img";

class CardSwiper extends Component{
  render(){
    return(
        <Swiper
        slidesPerView={3}
        spaceBetween={15}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section>
          <div className="card">
            <div className="card-content">
              <div className="image">
                <img src={Assets.card1} alt="" />
              </div>
              <div className="name">
                <h4 className="myfont4">Harry Styles</h4>
                  <h6 className="myfont3 color-font">Web Developer</h6>
                  <h6 className="myfont3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In euismod ipsum et dui rhoncus auctor.
                  </h6>
              </div>
            </div>
          </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
          <div className="card">
            <div className="card-content">
              <div className="image">
                <img src={Assets.card2} alt="" />
              </div>
              <div className="name">
                <h4 className="myfont4">Niall Horan</h4>
                  <h6 className="myfont3 color-font">Web Developer</h6>
                  <h6 className="myfont3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In euismod ipsum et dui rhoncus auctor.
                  </h6>
              </div>
            </div>
          </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
          <div className="card">
            <div className="card-content">
              <div className="image">
                <img src={Assets.card3} alt="" />
              </div>
              <div className="name">
                <h4 className="myfont4">Louis Tomlinson</h4>
                  <h6 className="myfont3 color-font">Web Developer</h6>
                  <h6 className="myfont3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In euismod ipsum et dui rhoncus auctor.
                  </h6>
              </div>
            </div>
          </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
          <div className="card">
            <div className="card-content">
              <div className="image">
                <img src={Assets.card1} alt="" />
              </div>
              <div className="name">
                <h4 className="myfont4">Harry Styles</h4>
                  <h6 className="myfont3 color-font">Web Developer</h6>
                  <h6 className="myfont3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In euismod ipsum et dui rhoncus auctor.
                  </h6>
              </div>
            </div>
          </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
          <div className="card">
            <div className="card-content">
              <div className="image">
                <img src={Assets.card2} alt="" />
              </div>
              <div className="name">
                <h4 className="myfont4">Niall Horan</h4>
                  <h6 className="myfont3 color-font">Web Developer</h6>
                  <h6 className="myfont3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In euismod ipsum et dui rhoncus auctor.
                  </h6>
              </div>
            </div>
          </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
          <div className="card">
            <div className="card-content">
              <div className="image">
                <img src={Assets.card3} alt="" />
              </div>
              <div className="name">
                <h4 className="myfont4">Louis Tomlinson</h4>
                  <h6 className="myfont3 color-font">Web Developer</h6>
                  <h6 className="myfont3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In euismod ipsum et dui rhoncus auctor.
                  </h6>
              </div>
            </div>
          </div>
          </section>
        </SwiperSlide>
      </Swiper>
    )
  }

}
export default CardSwiper;