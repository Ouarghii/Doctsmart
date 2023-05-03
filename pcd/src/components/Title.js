import React, { useState, useEffect } from 'react';

function Title() {
  const [text, setText] = useState('');
  const phrase = "Votre santé est notre raison d'être ,nous en faisons notre priorité absolue !";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(text => text + phrase[i]);
      i++;
      if (i === phrase.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <h1 className='titre'>{text}</h1>;
}
export default Title;