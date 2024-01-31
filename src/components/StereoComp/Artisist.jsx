const Artisist = ({ handleArtistProOpen }) => {
  return (
    <div className="artist-bx" onClick={handleArtistProOpen}>
      <img src="images/pic3.png" alt="" />
      <div className="art-txt">Bella Shrumuda</div>
    </div>
  );
};

export default Artisist;
