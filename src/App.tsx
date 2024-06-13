import  CardTFM from '../src/Components/CardTFM';

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
];


function App() {
  
  return (

       <>
          <CardTFM  notifications={notifications} />
       </>
  );
}

export default App;
