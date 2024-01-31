import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const TagFriends = ({ handleCloseTagFrdClick, data, onFriendCheck }) => {
  const [userInput, setUserInput] = useState("");
  const [temporarilyCheckedFriends, setTemporarilyCheckedFriends] = useState(
    []
  );

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleCheckboxChange = (img) => {
    const index = temporarilyCheckedFriends.indexOf(img);
    if (index > -1) {
      const updatedFriends = [...temporarilyCheckedFriends];
      updatedFriends.splice(index, 1);
      setTemporarilyCheckedFriends(updatedFriends);
    } else {
      setTemporarilyCheckedFriends([...temporarilyCheckedFriends, img]);
    }
    onFriendCheck(img);
  };

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem("checkedFriends"));
    if (storedFriends) {
      setTemporarilyCheckedFriends(storedFriends);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "checkedFriends",
      JSON.stringify(temporarilyCheckedFriends)
    );
  }, [temporarilyCheckedFriends]);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(userInput.toLowerCase())
  );

  return (
    <div className="postFormModal-container">
      <div className="tag-friends-container">
        <div className="tag-close-box">
          <AiOutlineArrowLeft
            className="cls-post"
            onClick={handleCloseTagFrdClick}
          />
          <div className="tag-head">Tag Friends</div>
        </div>
        <div className="body-cont-tag">
          <div className="search-done-box">
            <div className="search-icon-bx">
              <BiSearch />
              <input
                type="text"
                className="tags-inp"
                placeholder="Search for friends"
                onChange={handleInputChange}
              />
            </div>
            <div className="done-txt" onClick={handleCloseTagFrdClick}>
              Done
            </div>
          </div>
          <div className="sug-txt">Suggestions</div>
          <div className="suggestion-list">
            {userInput.length >= 1
              ? filteredData.map((item, index) => (
                  <div className="sugg-friend-cont" key={index}>
                    <div className="sugg-frd-prof">
                      <img src={item.img} alt="" />
                      <div className="pro-tag-nm">{item.name}</div>
                    </div>
                    <div className="check-box-tag">
                      <input
                        type="checkbox"
                        className="tag-check-bx"
                        onChange={() => handleCheckboxChange(item.img)}
                        checked={temporarilyCheckedFriends.includes(item.img)}
                      />
                    </div>
                  </div>
                ))
              : data.map((item, index) => (
                  <div className="sugg-friend-cont" key={index}>
                    <div className="sugg-frd-prof">
                      <img src={item.img} alt="" />
                      <div className="pro-tag-nm">{item.name}</div>
                    </div>
                    <div className="check-box-tag">
                      <input
                        type="checkbox"
                        className="tag-check-bx"
                        onChange={() => handleCheckboxChange(item.img)}
                        checked={temporarilyCheckedFriends.includes(item.img)}
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagFriends;
