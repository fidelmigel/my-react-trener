import { useState } from "react";
const Vote = () => {
  const [voteData, setVoteData] = useState({
    windows: 0,
    linux: 0,
    macOs: 0,
  });

  //DRY Dont repeat yourself
  // гарний принцип роботи не повторювати свій код
  const handleClickByOption = (option) => {
    //  switch (option) {
    //    case "windows":
    //     return setVoteData((prev) => ({
    //       ...prev,
    //       windows: prev.windows + 1,
    //    }));
    //  case "linux":
    //    return setVoteData((prev) => ({
    //     ...prev,
    //     linux: prev.linux + 1,
    //   }));
    // case "macOs":
    //   return setVoteData((prev) => ({
    //    ...prev,
    //    macOs: prev.macOs + 1,
    //  }));
    // default:
    //  break;
    // }
    // більш елегантний варіант
    setVoteData((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };
  return (
    <div>
      <ul>
        <li>windows: {voteData.windows}</li>
        <li>linux: {voteData.linux}</li>
        <li>macOs: {voteData.macOs}</li>
      </ul>
      <div>
        <button onClick={() => handleClickByOption("windows")}>windows</button>
        <button onClick={() => handleClickByOption("linux")}>linux</button>
        <button onClick={() => handleClickByOption("macOs")}>macOs</button>
      </div>
    </div>
  );
};

export default Vote;
