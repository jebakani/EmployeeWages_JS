console.log("Welcome to EmployeeWages");
//UC1-Check Employee Present or Absent
const IS_PRESENT=1;
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_PRESENT)
{ 
    console.log("UC1-Employee Present");
}
else
{
    console.log("UC1-Employee Absent");
}
//UC2-Calculate Daily Wages
const IS_PART_TIMER=1;
const IS_FULL_TIMER=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
let empHrs=0;
//UC3-Refactor:Returning working hours using function
function getWorkHrs()
{
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIMER:
            empHrs = PART_TIME_HRS;
            break;
        case IS_FULL_TIMER:
            empHrs = FULL_TIME_HRS;
            break;
        default:
            break;
    }
   return empHrs;
}
let dailyWage=getWorkHrs()*WAGE_PER_HR;
console.log("UC3-Daily wages of the employee:"+dailyWage);
