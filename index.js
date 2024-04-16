listOfStudents = ["Simanga", "Sizwe", "Nthabiseng", "Gontse", "Nomcebo"]
console.log({listOfStudents});
console.log(listOfStudents.length);

listOfStudents.push("Tendo")
console.log({listOfStudents})

listOfStudents.splice(0, 1)
console.log({listOfStudents})

listOfStudents.forEach(item =>{
    console.log(item);
    
});
