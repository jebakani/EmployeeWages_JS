console.log("Welcome to EmployeeWages");
//UC1-Check Employee Present or Absent
const IS_PRESENT = 1;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_PRESENT) {
    console.log("UC1-Employee Present");
}
else {
    console.log("UC1-Employee Absent");
}
//UC2-Calculate Daily Wages
const IS_PART_TIMER = 1;
const IS_FULL_TIMER = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
let empHrs = 0;
//UC3-Refactor:Returning working hours using function
function getWorkHrs(empCheck) {
    empHrs = 0;
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
empCheck = Math.floor(Math.random() * 10) % 3;
let dailyWage = getWorkHrs(empCheck) * WAGE_PER_HR;
console.log("UC3-Daily wages of the employee:" + dailyWage);

//UC4-Calculating monthly wages of employee for 20 days
const TOTAl_WORKING_DAYS = 20;
let monthlyWage = 0;
empHrs = 0;
for (i = 1; i <= TOTAl_WORKING_DAYS; i++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkHrs(empCheck);
}
monthlyWage = empHrs * WAGE_PER_HR;
console.log("UC4-Calculating total Wages of the employee:" + monthlyWage);

const MAX_WORKING_HRS = 160;
let totalWorkingHrs = 0;
let totalWorkingDays = 0;
//creating the array to store daily wages
let dailyEmployeeWageArray = new Array();
//create the map to store the value
let EmployeeWageMap = new Map();
let EmployeeHrMap = new Map();
while (totalWorkingDays <= TOTAl_WORKING_DAYS && totalWorkingHrs <= MAX_WORKING_HRS) {
    totalWorkingDays += 1;
    empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkHrs(empCheck);
    totalWorkingHrs += empHrs;
    //set the value in tha map
    EmployeeWageMap.set(totalWorkingDays, CalculateEmployeeWages(empHrs));
    EmployeeHrMap.set(totalWorkingDays, empHrs);
    //push the element in the stack order
    dailyEmployeeWageArray.push(CalculateEmployeeWages(empHrs));
}
let totalWages = CalculateEmployeeWages(totalWorkingHrs);
console.log("UC5- Total wages:" + totalWages + " for " + totalWorkingDays + " days and " + totalWorkingHrs + " hrs");

//UC6-storing daily wages in array
//function to calculate wages
function CalculateEmployeeWages(empHrs) {
    return empHrs * WAGE_PER_HR;
}

totalWages = 0;
//UC7-A Calculate total employee wages using for each
function CalculateTotal(empWages) {
    totalWages += empWages;
}

dailyEmployeeWageArray.forEach(CalculateTotal);
console.log("UC7A- Total wages:" + totalWages + " for " + totalWorkingDays + " days and " + totalWorkingHrs + " hrs");

//Using reduce function
function TotalWagesCalculate(totalWages, dailyWage) {
    return totalWages + dailyWage;
}
console.log("UC7 A-Employe wages wit reduce:" + dailyEmployeeWageArray.reduce(TotalWagesCalculate, 0));

//UC7-B Display day along with wages using map function
let dailyCounter = 0;
function MapDayWithWages(dailyWage) {
    dailyCounter += 1;
    return dailyCounter + " = " + dailyWage;
}
let mapDayWithWagesArray = dailyEmployeeWageArray.map(MapDayWithWages);
console.log("UC7 B-Daily wages with day :");
console.log(mapDayWithWagesArray);
//UC7-C Filter thefull time elmployee
function FullTimeEmpWage(dailyWage) {
    return (dailyWage.includes('160'));
}

let fullTimeWageArray = mapDayWithWagesArray.filter(FullTimeEmpWage);
console.log("UC7-C Daily wages for full time elmployee :");
console.log(fullTimeWageArray);

//UC7-D Find first occurance of full time wage
let firstOccurrence = mapDayWithWagesArray.find(FullTimeEmpWage);
console.log("UC7-D First Occurrence full time elmployee : ");
console.log('Day :' + firstOccurrence);

//UC7-E Check if every employee is full time 
console.log("UC7-D:Employee is full time every day :" + fullTimeWageArray.every(FullTimeEmpWage));

//UC7-F Checking the partime employee
function PartTimeEmployeeWages(dailyWage) {
    return (dailyWage.includes('80'));
}
//UC7-F Check any part time employee  is available
console.log("UC7-F:Is part time employee available:" + mapDayWithWagesArray.some(PartTimeEmployeeWages));
//function to ca
function NoOfDaysWorked(totalNumberOfDays, dailyWage) {
    if (dailyWage > 0) {
        return totalNumberOfDays + 1;
    }
    return totalNumberOfDays;
}
//UC7-G total number of days worked
console.log("UC7-G:total number of days worked : " + dailyEmployeeWageArray.reduce(NoOfDaysWorked, 0));

//UC8-Storing the days and wages using dictionary
console.log("employe wage at each day:\n", EmployeeWageMap);
console.log("UC8-Total wages:" + Array.from(EmployeeWageMap.values()).reduce(TotalWagesCalculate, 0));

{
    //UC9-Arrow function
    //calculating the total hours or salary
    const findTotal = (totalValue, dailyWage) => {
        return totalValue + dailyWage;
    }
    let totalHours = Array.from(EmployeeHrMap.values()).reduce(findTotal, 0);
    let totalSalary = dailyEmployeeWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
    console.log("UC9-Total working hours:" + totalHours + " And total salary : " + totalSalary);
    //UC9-B Separting the working hrs
    //store each key value in the separate array
    let fultimeWorkArray = new Array();
    let partTimeWorkArray = new Array();
    let leaveArray = new Array();
    //arrow function to calculate the hrs and store in separate array
    EmployeeHrMap.forEach((value, key, map) => {
        if (value == 8) fultimeWorkArray.push(key);
        else if (value == 4) partTimeWorkArray.push(key);
        else leaveArray.push(key);
    });
    //printing the array
    console.log("Fulltime work days:" + fultimeWorkArray.join("\t"));
    console.log("Parttime work days:" + partTimeWorkArray.join("\t"));
    console.log("leave days        :" + leaveArray.join("\t"));
}
//UC10-Storing Days Hrs and Wages in object
{
 let totalDays=0;
 let totalHrs=0;
 let empDayHrsAndArr =new Array();
 while(totalHrs < MAX_WORKING_HRS && totalDays< TOTAl_WORKING_DAYS)
 {
     totalDays++;
     let empCheck = Math.floor(Math.random() * 10) % 3;
     let empHrs = getWorkHrs(empCheck);
     totalHrs += empHrs;
     empDayHrsAndArr.push({
         dayNum:totalDays,
         dailyHours:empHrs,
         dailyWage:CalculateEmployeeWages(empHrs),
         toString(){
             return '\nDay:'+this.dayNum+" => working hrs:"+this.dailyHours+" => Wages: "+this.dailyWage
         },
     });
 }
 console.log("UC10- Displaying the data stored in the object:"+empDayHrsAndArr);

    //UC11 - a 
    let totalWage = empDayHrsAndArr.filter(dailyHrWage => dailyHrWage.dailyWage > 0).reduce((totalWages, dailyHrWage) => totalWages += dailyHrWage.dailyWage, 0);
    let totalWorkingHours = empDayHrsAndArr.filter(dailyHrWage => dailyHrWage.dailyHours > 0).reduce((totalHrs, dailyHrWage) => totalHrs += dailyHrWage.dailyHours, 0);
    console.log("UC11-A- Total salary: " + totalWage);
    console.log("UC11-A- Total hours worked:" + totalWorkingHours);

     console.log("\nUC11-B-Full time employee");
    //UC11-B Displaying the full time working days using foreach
    empDayHrsAndArr.filter(dailyHrWage => dailyHrWage.dailyHours == 8).forEach(dailyHrs => process.stdout.write(dailyHrs.toString()));

    //UC11-C Displaying the part time employee using map 
    let partTimeEmployeeArr= empDayHrsAndArr.filter(pEmployeeArr=>pEmployeeArr.dailyHours==4).map(pEmployeeArr=>pEmployeeArr.toString());
    console.log("\n\nUC11-C : Part time employee array:"+partTimeEmployeeArr);
    //UC11-D - No Working days
    let noWorkingdayArr= empDayHrsAndArr.filter(pEmployeeArr=>pEmployeeArr.dailyHours==0).map(pEmployeeArr=>pEmployeeArr.dayNum);
    console.log("UC11-D -Days of leave:",noWorkingdayArr.join(","));
}
{
class EmployeeDetail {
    //properties  
    id;
    salary;
    name;
    //Extend gender and start date
    gender;
    startDate;

    //Constructor
    //passing as parameter
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
 //getter setter
    get name() {
        return this.name;
    }
    set name(_name) {
        this.name = _name;
    }
    toString()
    {
        return 'id :'+this.id+'\t name:'+this.name+'\t salary :'+this.salary+"\t gender:"+this.gender+"\t startDate:"+this.startDate;
    }
}
let employeePayRoll=new EmployeeDetail(1,"mark",3000);
console.log(employeePayRoll.toString());
employeePayRoll=new EmployeeDetail(2,"john",50000,'Male',new Date(2012,07,28));
console.log(employeePayRoll.toString());
}