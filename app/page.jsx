"use client"
import React,{useState, useEffect} from "react";

export default function Home() {
  const [version, setVersion] = useState([]);
  const [main, setMain] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    fetch("https://back-end-499-git-main-sceneryviews-projects.vercel.app/api/allversion")
      .then((response) => response.json())
      .then((data) => {
        setVersion(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="home">
      <div className="audi-large-picturebackgroud">
        <div className="audi-pic">
          <div className="image-bg-scale">
            <div className="image-bg">
              <img src="https://www.audi.co.th/content/dam/nemo/sea/th/teaser-new-home-full-width/2023/11/1920x1080-RSeGT_2021_2354.jpg?imwidth=1920" />
            </div>
            <div className="shawon-image"></div>
          </div>
        </div>
        <div className="audi-text">
          <div className="text-in-img">
            <div className="text-space">
              <div className="text-position">
                <div className="main-text">
                  <span>Pure energy and progressive performance</span>
                </div>
                <div className="small-text">
                  <span> Audi RS e-tron GT. </span>
                </div>
                <div className="button-discover">
                  <a href="/AudiRS">Discover now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nm-id-content">
        <div className="audi-model-band">
          <div className="block mt-[260px] mx-[12%]">
            {version.map((version) => (
              <div key={version.id}>
                <div className="my-[100px]">
                  <div className="flex my-[260px]mr-[12%] ">
                    <div className="koCGRD-image">
                      <picture>
                        <img src={version.avatar} />
                      </picture>
                    </div>
                    <div className="koCGRD-position">
                      <div className="koCGRD-text">
                        <h2>{version.main}</h2>
                      </div>
                      <h4 className="small-koCGRD">
                        <p>{version.text}</p>
                      </h4>
                      <div className="button-discover-koCGRD">
                        <a href={`${version.link}`}>Discover now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="Audi-A5-Coupe-edition">
            <div className="koCGRD">
              <div className="koCGRD-image">
                <picture>
                  <img
                    src="https://www.audi.co.th/content/dam/nemo/sea/th/teaser-new-home-full-width/2024/02/883x883-a5-coup%C3%A9-edition-one.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div className="koCGRD-position">
                <div className="koCGRD-text">
                  <h2>Audi A5 Coupé edition one</h2>
                </div>
                <h4 className="small-koCGRD">
                  <p>The Best of Black Edition.</p>
                </h4>
                <div className="button-discover-koCGRD">
                  <a href="/AudiA5">Discover now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="Audi-A5-Coupe-edition">
            <div className="koCGRD">
              <div className="koCGRD-image">
                <picture>
                  <img
                    src="https://www.audi.co.th/content/dam/nemo/sea/th/teaser-new-home-full-width/2024/02/883x883-tt-coup%C3%A9-final-icon-black.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div className="koCGRD-position">
                <div className="koCGRD-text">
                  <h2>Audi TT Coupé Final Icon Black</h2>
                </div>
                <div className="small-koCGRD">
                  <p>Timeless classic.</p>
                </div>
                <div className="button-discover-koCGRD">
                  <a href="/AudiTT">Discover now</a>
                </div>
              </div>
            </div>
          </div> */}
          <div className="sc-pRFjI-jRlZfa">
            <div className="container-1">
              <div className="price-list">
                <div className="price-list-eUzcwe">
                  <span>Price List</span>
                </div>
                <div className="price-list-p">
                  <p>Explore your selection of Audi and Audi Sport models.</p>
                </div>
              </div>
              <div className="sc-fzqLLg">
                <a
                  href="https://www.audi.co.th/dam/nemo/sea/th/pdf/Audi_Price_List.pdf"
                  target="_blank"
                >
                  <span>Discover now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="13"
                    viewBox="0 0 24 13"
                    className="sc-fznZeY dBQqbg"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1px"
                      fill="none"
                      d="M1.5,1l5.485,5.504l-5.48,5.496"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="gAOiPW"></div>
          <div className="parallaxTeaser">
            <div className="parallaxTeeaser-sc">
              <picture>
                <img
                  src="https://www.audi.co.th/content/dam/nemo/misc/new-home-3-0/3840x4000_parallax.jpg?imwidth=1920"
                  alt=""
                />
              </picture>
              <div className="hrrwQB">
                <div className="aVKVm">
                  <h2>Audi Reviews</h2>
                  <p>Keep updated with our video content.</p>
                  <div className="cPhlSY">
                    <div className="dhdGi">
                      <a href="https://www.youtube.com/c/AudiThailandOfficial">
                        <span>Discover now</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="13"
                          viewBox="0 0 8 13"
                        >
                          <path
                            stroke="currentColor"
                            strokeWidth="1px"
                            fill="none"
                            d="M1.5,1l5.485,5.504l-5.48,5.496"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faHNxu"></div>
          <div className="youmay">
            <div className="nm-model-offer">
              <p>You may also want to know</p>
            </div>
            <ul className="nm-model-offer-ul">
              <ul className="nm-model-offer-li">
                <li>
                  <div className="box1">
                    <div className="box11">
                      <a href="">
                        <img
                          src="https://www.audi.co.th/content/dam/nemo/sea/th/883x496-about-audi-thailand.jpg?width=579"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="nm-model-offer-item-1">
                      <p>About Audi Thailand</p>
                      <a href="#">Learn more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box2">
                    <div className="box22">
                      <a href="#">
                        <img
                          src="https://www.audi.co.th/content/dam/nemo/sea/th/teaser-new-home-full-width/2020/offer-teaser/tt-coupe-883x496.jpg?width=579"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="nm-model-offer-item-2">
                      <p>
                        Find your local Audi Partner and discover your desired
                        Audi live.
                      </p>
                      <a href="#">Locate a Dealer</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box3">
                    <div className="box33">
                      <a href="">
                        <img
                          src="https://www.audi.co.th/content/dam/nemo/sea/th/teaser-new-home-full-width/2020/offer-teaser/audi-thailand-news-441x247.jpg?width=880"
                          width={579}
                          height={325}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="nm-model-offer-item-3">
                      <p>Audi Thailand News</p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
