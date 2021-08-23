var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
console.log("Current Time : "+hour  + " : " + minute + " : " + second );
var currenttime = hour+"."+minute;

var classtable=[
    {day:'1',slot: 'A', subjectname:'Data Structure and Alogorithim', subjectcode:'CSC302', faculityname:'Dr. Bhuvaneswari',classlink:'https://meet.google.com/lookup/azfowqghjr?authuser=0&hs=179',timestart:"9.0",timeend:"9.59"},
    {day:'1',slot: 'B', subjectname:'Computer Organization',          subjectcode:'CSC303', faculityname:'Ms. Aknksha',classlink:'https://meet.google.com/lookup/adojphcqxj?authuser=0&hs=179',timestart:"10.0",timeend:"10.59"},
    {day:'1',slot: 'C', subjectname:'Discrete Structure',             subjectcode:'CSC301', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/gxpv3dpjze?authuser=0&hs=179',timestart:"11.0",timeend:"11.59"},
    {day:'1',slot: 'D', subjectname:'Digital Systems Design', subjectcode:'CSC304', faculityname:'Mr. Satish',classlink:'https://meet.google.com/lookup/ez4rp2zydz?authuser=0&hs=179',timestart:"12.0",timeend:"12.59"},
    {day:'1',slot: 'E', subjectname:'Automata and Formal Languages', subjectcode:'CSC305', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/delhw6nhkb?authuser=0&hs=179',timestart:"14.0",timeend:"14.59"},
    {day:'1',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikram',classlink:'https://www.google.com',timestart:"16.0",timeend:"16.59"},
    {day:'2',slot: 'A', subjectname:'Data Structure and Alogorithim', subjectcode:'CSC302', faculityname:'Dr. Bhuvaneswari',classlink:'https://meet.google.com/lookup/azfowqghjr?authuser=0&hs=179',timestart:"14.0",timeend:"14.59"},
    {day:'2',slot: 'B', subjectname:'Computer Organization',          subjectcode:'CSC303', faculityname:'Ms. Aknksha',classlink:'https://meet.google.com/lookup/adojphcqxj?authuser=0&hs=179',timestart:"9.0",timeend:"9.59"},
    {day:'2',slot: 'C', subjectname:'Discrete Structure',             subjectcode:'CSC301', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/gxpv3dpjze?authuser=0&hs=179',timestart:"10.0",timeend:"10.59"},
    {day:'2',slot: 'D', subjectname:'Digital Systems Design', subjectcode:'CSC304', faculityname:'Mr. Satish',classlink:'https://meet.google.com/lookup/ez4rp2zydz?authuser=0&hs=179',timestart:"11.0",timeend:"11.59"},
    {day:'2',slot: 'E', subjectname:'Automata and Formal Languages', subjectcode:'CSC305', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/delhw6nhkb?authuser=0&hs=179',timestart:"12.0",timeend:"12.59"},
    {day:'2',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikram',classlink:'https://www.google.com',timestart:"16:0",timeend:"16.59"},
    {day:'3',slot: 'A', subjectname:'Data Structure and Alogorithim', subjectcode:'CSC302', faculityname:'Dr. Bhuvaneswari',classlink:'https://meet.google.com/lookup/azfowqghjr?authuser=0&hs=179',timestart:"12.0",timeend:"12.59"},
    {day:'3',slot: 'B', subjectname:'Computer Organization',          subjectcode:'CSC303', faculityname:'Ms. Aknksha',classlink:'https://meet.google.com/lookup/adojphcqxj?authuser=0&hs=179',timestart:"14.0",timeend:"14.59"},
    {day:'3',slot: 'C', subjectname:'Discrete Structure',             subjectcode:'CSC301', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/gxpv3dpjze?authuser=0&hs=179',timestart:"9.0",timeend:"9.59"},
    {day:'3',slot: 'D', subjectname:'Digital Systems Design', subjectcode:'CSC304', faculityname:'Mr. Satish',classlink:'https://meet.google.com/lookup/ez4rp2zydz?authuser=0&hs=179',timestart:"10.0",timeend:"10.59"},
    {day:'3',slot: 'E', subjectname:'Automata and Formal Languages', subjectcode:'CSC305', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/gxpv3dpjze?authuser=0&hs=179',timestart:"11.0",timeend:"11.59"},
    {day:'3',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikram',classlink:'https://www.google.com',timestart:"16:0",timeend:"16.59"},
    {day:'4',slot: 'A', subjectname:'Data Structure and Alogorithim', subjectcode:'CSC302', faculityname:'Dr. Bhuvaneswari',classlink:'https://meet.google.com/lookup/azfowqghjr?authuser=0&hs=179',timestart:"11.0",timeend:"11.59"},
    {day:'4',slot: 'B', subjectname:'Computer Organization',          subjectcode:'CSC303', faculityname:'Ms. Aknksha',classlink:'https://meet.google.com/lookup/adojphcqxj?authuser=0&hs=179',timestart:"12.0",timeend:"12.59"},
    {day:'4',slot: 'C', subjectname:'Discrete Structure',             subjectcode:'CSC301', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/gxpv3dpjze?authuser=0&hs=179',timestart:"14.0",timeend:"14.59"},
    {day:'4',slot: 'D', subjectname:'Digital Systems Design', subjectcode:'CSC304', faculityname:'Mr. Satish',classlink:'https://meet.google.com/lookup/ez4rp2zydz?authuser=0&hs=179',timestart:"9.0",timeend:"9.59"},
    {day:'4',slot: 'E', subjectname:'Automata and Formal Languages', subjectcode:'CSC305', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/delhw6nhkb?authuser=0&hs=179',timestart:"10.0",timeend:"10.59"},
    {day:'4',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikram',classlink:'https://www.google.com',timestart:"16.0",timeend:"16.59"}
    



]
//$(".day").text("Today is : " + daylist[day] + ".");
 $(".date").text(today);
if(day>=1 && day<=4)
{
for (let i = 0; i < classtable.length; i++) {
   
    if(hour<9)
    {
        $(".subject").text("Class will start in"+ 9 - hour + "hour"+ 60 - minute +"minutes" );
    }
    else if (
      (currenttime >= classtable[i].timestart)  &&
      (currenttime <= classtable[i].timeend) &&
        day == classtable[i].day
    )
    {
        $(".subject").text(classtable[i].subjectcode +" : "+classtable[i].subjectname );
        $("a").attr("href", classtable[i].classlink);
        $(".facultyname").text("Faculty:- "+classtable[i].faculityname);   
        $(".slot").text("Slot:- " + classtable[i].slot);
        $(".subject").addClass("subject1");
        $(".facultyname").addClass("facultyname1");   
        $(".slot").addClass("slot1");
        console.log("pass");
    }
    else if(hour>=17){
        $(".break").text("All class over" );
       
        $("Button").hide(); 
        $(".break").addClass("break1");
        
    }
    else if((hour>=13 && hour<14) || (hour>=15 && hour<16))
    {
        $(".break").text("BREAK");
        // $("a").removeAttr("href");
        
        $("Button").hide();   
        $(".break").addClass("break1");
        // console.log("pass2");
    }
}
}
else
{
    $(".break").text("BREAK");
    // $("a").removeAttr("href");
    
    $("Button").hide();   
    $(".break").addClass("break1");
    // console.log("pass3");
}



