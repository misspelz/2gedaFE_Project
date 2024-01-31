import { useEffect } from "react";
import MainLayout from "../../Layout/MainLayout";
import ListenStereoCard from "../../components/StereoComp/ListenStereoCard";
import StereoAdvert from "../../components/StereoComp/stereoAdvert";

const NonAuthStero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home-container">
        <MainLayout>
          <div className="main-containe bus-box-con stereo-bxbxb">
            <div className="left-side-container buss-all-container ster-con-bxbx">
              <>
                <>
                  <div className="prof-back flex">
                    <div className="head-line bus-dir str-reo">Stereo</div>
                  </div>

                  <div className="welcom-stero-container">
                    <div className="welcome-stereo-txt">
                      <div className="welcom-str-main">
                        Welcome to 2geda stereo
                      </div>
                      <div className="more-welc-str">
                        Explore and discover new music features for you.
                      </div>
                    </div>
                    <div className="artist-lister-btn-box">
                      <button className="lis-art-btn">Listener</button>
                      <button className="lis-art-btn">Artist</button>
                    </div>
                  </div>

                  <div className="select-what-display w-dis"></div>
                  <div className="stereo-quick-container">
                    <div className="head-line">Listen to trending songs</div>
                    <div className="music-das-row">
                      <div className="quik-row-bx">
                        <ListenStereoCard />
                        <ListenStereoCard />
                        <ListenStereoCard />
                        <ListenStereoCard />
                        <ListenStereoCard />
                        <ListenStereoCard />
                        <ListenStereoCard />
                        <ListenStereoCard />
                      </div>
                    </div>

                    <div className="take-easy">
                      <div className="head-line">Special picks for you</div>
                      <div className="music-das-row">
                        <div className="quik-row-bx">
                          <StereoAdvert />
                          <StereoAdvert />
                          <StereoAdvert />
                          <StereoAdvert />
                          <StereoAdvert />
                          <StereoAdvert />
                          <StereoAdvert />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </>
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default NonAuthStero;
