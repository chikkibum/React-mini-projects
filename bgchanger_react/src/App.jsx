import { useState } from 'react'

const Button = (props) => {
  const handleClick = () => {
    props.setColor(props.color);
  };

  return (
    <>
      <button
        className='outline-none px-4 py-1 rounded-lg text-white shadow-lg'
        style={{ backgroundColor: props.color }}
        onClick={handleClick}
      >
        {props.color}
      </button>
    </>
  );
};

function App(props) {
  const [color, setColor] = useState('powderblue');

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed fle flex-wrap justify-center bottom-12 inset-x-0  px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <Button color='red' setColor={setColor} />
            <Button color='green' setColor={setColor} />
            <Button color='blue' setColor={setColor} />
            <Button color='yellow' setColor={setColor} />
            <Button color='purple' setColor={setColor} />
            <Button color='pink' setColor={setColor} />
            <Button color='magenta' setColor={setColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
