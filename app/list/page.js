'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function List() {
  let contents = [
    { name: 'Tomatoes', price: 20 },
    { name: 'Pasta', price: 10 },
    { name: 'Coconut', price: 40 },
  ];
  const [count, setCount] = useState(contents.map(() => 0));

  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {contents.map((content, i) => {
        return (
          <div className='food' key={i}>
            <h4>상품번호 : {i}</h4>
            <Image src={`/images/food${i}.png`} width={'300'} height={'300'} className='food-img' />
            <h4>
              {content.name} ${content.price}
            </h4>
            <button
              onClick={() => {
                const copy = [...count];
                if (copy[i] !== 0) {
                  copy[i] = count[i] - 1;
                  setCount(copy);
                } else {
                }
              }}
            >
              -
            </button>
            <span> {count[i]} </span>
            <button
              onClick={() => {
                const copy = [...count];
                copy[i] = count[i] + 1;
                setCount(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
