import  CardTFM from '../src/Components/CardTFM';

const notifications = [
  {
    title: "Your call has been Teste.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "You have a new messagedfafad!",
    description: "1 hour ago",
  },
];



const options = [
  {
    name: "Next JS",
  },
  {
    name: "Vue",
  },
  {
    name: "Angular ",
  },
];


let  description = "Descrição Opicional!!"  

function App() {
  
  return (

       <>

          <CardTFM  titleCard="Card_1" notifications={notifications}  selectOptions={options} description={description} />
          <CardTFM  titleCard="Card_2" notifications={notifications}  selectOptions={options}/>
       
       </>
  );
}


export default App;
