console.log("Welcome to EmployeeWages");
//UC1-Check Employee Present or Absent
const IS_PRESENT=1;
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_PRESENT)
{ 
    console.log("UC1-Employee Present");
    return ;
}
else
{
    console.log("UC1-Employee Absent");
}