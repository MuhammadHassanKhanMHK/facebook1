
import React from 'react';
import './App.css';
import FacebookCard from './FacebookCard';
import sampleImage from './sample image.jpg';
import sampleImage2 from './123.jpg';
import sampleImage3 from './456.jpg';
import sampleImage4 from './789.jpg';


function App() {
  const user = {
    name: 'Hassan Khan',
    avatarUrl: sampleImage, 
  };

  return (
    <div className="">
      {/* <FacebookCard
        user={user}
        time="10 hr"
        imageUrl={sampleImage}
        postText="Captured a picture of Photographer."
      /> */}
      <FacebookCard
        user={user}
        time="4 hr"
        imageUrl={sampleImage2}
        postText="Have A Good Day!!!"
      />
      <FacebookCard
        user={user}
        time="15 hr"
        imageUrl={sampleImage3}
        postText="Grapes on Tree."
      />
      <FacebookCard
        user={user}
        time="14 hr"
        imageUrl={sampleImage4}
        postText="Creative Idea."
      />
    </div>
  );
}

export default App;