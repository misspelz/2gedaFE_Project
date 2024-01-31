import { AiOutlineArrowLeft } from "react-icons/ai";
// import QuickPickCol from "../../components/StereoComp/QuickPickCol";
import { useEffect } from "react";
import ArtisitSong from "../../components/StereoComp/ArtisitSong";
import MusicStero from "../../components/StereoComp/MusicStero";

const ArtistProfile = ({ handleArtistProClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="quik-container-box">
      <div className="profile-dot-bx flex red-wid">
        <div className="prof-back flex">
          <AiOutlineArrowLeft onClick={handleArtistProClose} />
          <div className="head-line bus-dir">Artist profile</div>
        </div>
      </div>
      <div className="artists-pro-bx flex">
        <div className="left-artist-pro">
          <div className="artisit-nm">Bella Shrmuda</div>
          <div className="artist-bio-info">
            Bella Shrmuda is an emerging indie pop sensation known for his
            captivating lyrics and soulful melodies. With a unique blend of
            nostalgia and modernity, his music speaks to the heart.
          </div>
        </div>
        <div className="right-artist-pro">
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-130bbc4da03b307b220e2c53a3486dfd-lq"
            alt=""
          />
        </div>
      </div>
      <div className="view-all-tic-bx">
        <div className="product-ind">Today’s big hits</div>
        <div className="view-ll pup">View all songs</div>
      </div>
      <div className="song-main-row">
        <ArtisitSong />
        <ArtisitSong />
        <ArtisitSong />
        <ArtisitSong />
      </div>
      <div className="take-easy">
        <div className="head-line">Albums</div>
        <div className="music-das-row">
          <MusicStero rem={"rem"} />
          <MusicStero rem={"rem"} />
          <MusicStero rem={"rem"} />
          <MusicStero rem={"rem"} />
          <MusicStero rem={"rem"} />
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
