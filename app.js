function refresh() { setTimeout(function () { location.reload() }, 100); }
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
    {day:'2',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikram',classlink:'https://www.google.com',timestart:"16.0",timeend:"16.59"},
    {day:'3',slot: 'A', subjectname:'Data Structure and Alogorithim', subjectcode:'CSC302', faculityname:'Dr. Bhuvaneswari',classlink:'https://meet.google.com/lookup/azfowqghjr?authuser=0&hs=179',timestart:"12.0",timeend:"12.59"},
    {day:'3',slot: 'B', subjectname:'Computer Organization',          subjectcode:'CSC303', faculityname:'Ms. Aknksha',classlink:'https://meet.google.com/lookup/adojphcqxj?authuser=0&hs=179',timestart:"14.0",timeend:"14.59"},
    {day:'3',slot: 'C', subjectname:'Discrete Structure',             subjectcode:'CSC301', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/gxpv3dpjze?authuser=0&hs=179',timestart:"9.0",timeend:"9.59"},
    {day:'3',slot: 'D', subjectname:'Digital Systems Design', subjectcode:'CSC304', faculityname:'Mr. Satish',classlink:'https://meet.google.com/lookup/ez4rp2zydz?authuser=0&hs=179',timestart:"10.0",timeend:"10.59"},
    {day:'3',slot: 'E', subjectname:'Automata and Formal Languages', subjectcode:'CSC305', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/gxpv3dpjze?authuser=0&hs=179',timestart:"11.0",timeend:"11.59"},
    {day:'3',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikram',classlink:'https://www.google.com',timestart:"16.0",timeend:"16.59"},
    {day:'4',slot: 'A', subjectname:'Data Structure and Alogorithim', subjectcode:'CSC302', faculityname:'Dr. Bhuvaneswari',classlink:'https://meet.google.com/lookup/azfowqghjr?authuser=0&hs=179',timestart:"11.0",timeend:"11.59"},
    {day:'4',slot: 'B', subjectname:'Computer Organization',          subjectcode:'CSC303', faculityname:'Ms. Aknksha',classlink:'https://meet.google.com/lookup/adojphcqxj?authuser=0&hs=179',timestart:"12.0",timeend:"12.59"},
    {day:'4',slot: 'C', subjectname:'Discrete Structure',             subjectcode:'CSC301', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/gxpv3dpjze?authuser=0&hs=179',timestart:"14.0",timeend:"14.59"},
    {day:'4',slot: 'D', subjectname:'Digital Systems Design', subjectcode:'CSC304', faculityname:'Mr. Satish',classlink:'https://meet.google.com/lookup/ez4rp2zydz?authuser=0&hs=179',timestart:"9.0",timeend:"9.59"},
    {day:'4',slot: 'E', subjectname:'Automata and Formal Languages', subjectcode:'CSC305', faculityname:'Ms. Himani',classlink:'https://meet.google.com/lookup/delhw6nhkb?authuser=0&hs=179',timestart:"10.0",timeend:"10.59"},
    {day:'4',slot: 'H', subjectname:'Practicum-III', subjectcode:'CSC306', faculityname:'Dr. Vikram',classlink:'https://www.google.com',timestart:"16.0",timeend:"16.59"}
    



]
//$(".day").text("Today is : " + daylist[day] + ".");
function updateClock() {
    var now = new Date(); 
   // document.getElementById('tim').innerHTML = [now];
   $(".date").text(now);
    setTimeout(updateClock, 1000);
}
updateClock();
// $(".date").text(today);
if(day>=1 && day<=4)
{
for (let i = 0; i < classtable.length; i++) {
   
    if(hour<9)
    {
      
        $(".subject").addClass("subject1");
        $("Button").hide();


        function updatClock() {
            var n = new Date(); 
            var hr = n.getHours();
            var mi = n.getMinutes();
            var se = n.getSeconds();
           // document.getElementById('tim').innerHTML = [now];
          if(hr<9)
          {
           if((8-hr)!=0)
           {
           $(".subject").text("Class Will Start In:- "+ (8.0 - hr) + "hr:"+ (59- mi) +"min:"+(59-se)+"sec" );
           }
           else if((59-mi)!=0)
           {
            $(".subject").text("Class Will Start In:- "+ (59- mi) +"min:"+(59-se)+"sec" );
           }
           else{
            $(".subject").text("Class Will Start In:- "+ (59-se)+"sec" );
           }
          }
            setTimeout(updatClock, 1000);
        }
        updatClock();
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
        $(".btn").text("Join Class");
        if(classtable[i].slot=='H')
        {
            $("Button").hide(); 
            $(".note").text("Join Your Respective Group Link");
        }
        // if(classtable[i].slot!='H')
        // {
        //     $(".redirect").attr("content","5; url="+classtable[i].classlink);
        // }
        console.log("pass");
    }
    else if(hour>=17){
        $(".break").text("All Classes Over" );
       
        $("Button").hide(); 
        $(".break").addClass("break1");
        $(".redirect").hide();
        
    }
    else if((hour>=13 && hour<14) || (hour>=15 && hour<16))
    {
        $(".break").text("BREAK");
        // $("a").removeAttr("href");
        
        $("Button").hide();   
        $(".break").addClass("break1");
        // console.log("pass2");
        $(".redirect").hide();
    }
}
}
else
{
    $(".break").text("No Regular Classes Today");
    // $("a").removeAttr("href");
    
    $("Button").hide();   
    $(".break").addClass("break1");
    $(".redirect").hide();
    // console.log("pass3");
}

if((hour>=9 && hour<17) && (day>=1 &&day<=4))
{
    $(".reload").attr("content","4");
}
else
{
    $(".reload").attr("content","40");
}
