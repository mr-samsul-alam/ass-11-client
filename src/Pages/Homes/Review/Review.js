import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderImg1 from "./../../../Images/Review/pic1.png";
import sliderImg2 from "./../../../Images/Review/pic2.png";
import sliderImg3 from "./../../../Images/Review/pic3.png";
import sliderImg4 from "./../../../Images/Review/pic4.png";
import "./Review.css";

const Review = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="my-5">
      <div className="title">
        <h4 className="sub-heading">Our Customers Review</h4> 
      </div>
      <div className="review_slider">
        <div className="container">
          <div className="row">
            <Carousel responsive={responsive}>
              <div className="review">
                <div class="box">
                  <img src={sliderImg1} alt="" />
                  <h3 className="color-pink">john deo</h3>
                  <p>
                    Thank you so much for your kind words. We are delighted that you have found the experience effortless and easy as our aim is to make the process of organising a journey such as this as enjoyable as possible for you. It has been a pleasure assisting you with your plans for what is sure to be a wonderful and exciting trip. Best wishes, Dan
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg2} alt="" />
                  <h3 className="color-pink">john deo</h3>
                  <p>
                    Thank you so much for your kind words. We are delighted that you have found the experience effortless and easy as our aim is to make the process of organising a journey such as this as enjoyable as possible for you. It has been a pleasure assisting you with your plans for what is sure to be a wonderful and exciting trip. Best wishes, Dan
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg3} alt="" />
                  <h3 className="color-pink">john deo</h3>
                  <p>
                    Thank you so much for your kind words. We are delighted that you have found the experience effortless and easy as our aim is to make the process of organising a journey such as this as enjoyable as possible for you. It has been a pleasure assisting you with your plans for what is sure to be a wonderful and exciting trip. Best wishes, Dan
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg4} alt="" />
                  <h3 className="color-pink">john deo</h3>
                  <p>
                    Thank you so much for your kind words.We are delighted that you have found the experience effortless and easy as our aim is to make the process of organising a journey such as this as enjoyable as possible for you.It has been a pleasure assisting you with your plans for what is sure to be a wonderful and exciting trip.Best wishes, Dan </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg2} alt="" />
                  <h3 className="color-pink">john deo</h3>
                  <p>
                    Thank you so much for your kind words. We are delighted that you have found the experience effortless and easy as our aim is to make the process of organising a journey such as this as enjoyable as possible for you. It has been a pleasure assisting you with your plans for what is sure to be a wonderful and exciting trip. Best wishes, Dan
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg4} alt="" />
                  <h3 className="color-pink">john deo</h3>
                  <p>
                    Thank you so much for your kind words. We are delighted that you have found the experience effortless and easy as our aim is to make the process of organising a journey such as this as enjoyable as possible for you. It has been a pleasure assisting you with your plans for what is sure to be a wonderful and exciting trip. Best wishes, Dan
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg4} alt="" />
                  <h3 className="color-pink">john deo</h3>
                  <p>
                    Thank you so much for your kind words. We are delighted that you have found the experience effortless and easy as our aim is to make the process of organising a journey such as this as enjoyable as possible for you. It has been a pleasure assisting you with your plans for what is sure to be a wonderful and exciting trip. Best wishes, Dan
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
