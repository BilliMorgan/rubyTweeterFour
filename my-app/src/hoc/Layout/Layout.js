import React from "react";
import Tweet from "../../components/Tweet/Tweet"

const layout = () => (
  <div>
    <div>Menu</div>
    <div>Home</div>
    <main>
      <Tweet />
      <div>Tweets render feild</div>
    </main>
  </div>
);

export default layout;
