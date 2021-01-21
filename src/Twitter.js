import React, { useEffect, useState, memo } from 'react';

//usando memo e esta callback como segunda propriedade temos o "Shouldcompoenetupdate"
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
};

function Twitter(props) {
  const { loading } = props;

  const [tweet, setTweet] = useState('title');

  //com array vazio executa apenas uma vez "DidMount"
  useEffect(() => {
    const { posts, loading } = props;
    console.log('ComponentDidMount', posts);
    console.log('ComponentDidMount:loading', loading);
  }, []);

  //Quando passado argumento vai funcionar como o "DidUpdate"
  useEffect(() => {
    console.log('componentDidUpdate', loading);
  }, [loading]);

  //O return dentro do effect, faz a fonção do "componentWillUnmount"
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: fui removido');
    };
  }, []);

  const handleTweet = () => {
    setTweet('Tweet Atualizado');
  };

  console.log('tweet atualizado', tweet);
  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
    </div>
  );
}

export default memo(Twitter, areEqual);
