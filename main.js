
// let entries = [];//empty array to push values in after
// const entriesWrapper = document.querySelector('#entries');

// // this function below is creating an li and putting the user input inside
// function addNewEntry(newEntry){

//     entriesWrapper.removeChild(entriesWrapper.firstElementChild);

//   const listItem =  document.createElement('li');
//   const listValue = document.createTextNode(newEntry.tofixed(1));
//   listItem.appendChild(listValue);
//   entriesWrapper.appendChild(listItem);
// }
// console.log(addNewEntry);

// function handleSubmit(event){
//     event.preventDefault();
//     const entry = Number(document.querySelector('#entry').value);//convert string to number
//     console.log(handleSubmit);
//     if(!entry) return; //to break out of this function
//     document.querySelector('.form').reset();//clears the form after every entry
   
//     console.log(entries.push (entry));
//     addNewEntry(entry); //pass in the value of entry
   
// }
// entries.push(entry);
// const form = document.querySelector('.form').addEventListener('submit', handleSubmit);

const goal = 25;
let entries = []//this is a global variable, it can be accessed anywhere in our program
const entriesWrapper = document.querySelector('#entries')
document.querySelector('#target').innerText = goal;

function addNewEntry(newEntry) {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild)//each list items (firstElementChild)
  const listItem = document.createElement('li')
  const listValue = document.createTextNode(newEntry.toFixed(1))
  listItem.appendChild(listValue)
  entriesWrapper.appendChild(listItem)
  entriesWrapper.appendChild(listItem)
}
//this function will reduce our array values into ONE single value
function reducer(total, currentValue) {
  return total + currentValue
}
//this functions gets all of the entries use the reducer and then update our values 
function calcTotal() {
  const totalValue = entries.reduce(reducer).toFixed(1)//this gives us the single value, we can store it in a const
                                                      //the toFixed method allows us to round to one decimal place
  document.getElementById('total').innerText = totalValue
  document.getElementById('progressTotal').innerText = totalValue
}

function calcAverage(){
  const average = (entries.reduce(reducer) / entries.length).toFixed(1);//we need to put the equation in brakets or else the method toFixed would be applied to the entries.length rahter than the total sum
  document.getElementById('average').innerText = average;

}

function weeklyHigh(){
  const high = Math.max(...entries);//...spread operator extracts all of the values inside the entries array
  document.getElementById('high').innerText = high;
}

function calGoal(){
  const totalValue = entries.reduce(reducer).toFixed(1);
  const completedPercentage = totalValue / (goal / 100);
  const progressCircle = document.querySelector('#progressCircle');
  if (completedPercentage > 100) completedPercentage === 100; //this resets the progress circle to 100
  progressCircle.style.background = `conic-gradient(#09ad61 ${completedPercentage}%, #2d3740 ${completedPercentage}% 100%)`;//conic-gradient needs two values
}
  

function handleSubmit(event) {
  event.preventDefault()
  const entry = Number(document.querySelector('#entry').value)
  console.log(entry)

  if (!entry) return
  entries.push(entry)
  document.querySelector('form').reset()
  addNewEntry(entry)
  calcTotal();
  calcAverage();
  weeklyHigh();
  calGoal();
}

const form = document
  .querySelector('form')
  .addEventListener('submit', handleSubmit)


