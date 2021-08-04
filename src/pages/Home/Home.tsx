import React from 'react';

interface Props {
}

const Home = (props: Props) => {
  const add = () => {
    console.log('add');
  };
  return (
    <div role="article">
      <div role="presentation" onClick={add} onKeyDown={add}>
        Home
      </div>
    </div>
  );
};

export default Home;
