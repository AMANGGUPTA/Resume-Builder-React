import Resume1 from "./Components/ResumeTemp1";
function App(){
  let ResumeDetails={
    FirstName:"Aman",
    LastName:" Gupta",
    AddressLine1:"6215,Fathepuri Chandni Chowk",
    AddressLineCountry:"India",
    AddressLineState:"Delhi",
    AddressLineCity:"Old Delhi",
    Email:"amanguptaymail@gmail.com",
    Mobile:"7678222285",
    EmpStart1:"21/06/2021",
    EmpEnd1:"21/11/2021",
    CompanyName1:"Arisen Technology",
    Designation1:"Front-End Developer",
    Description1:"Raised 78,000 in early stage funding, created initial design concepts, and oversaw initial development. Currently oversee and maintain all front end code and server functionality",
    EmpStart2:"21/01/2022",
    EmpEnd2:"29/02/2023",
    CompanyName2:"NoPaperForms",
    Designation2:"Jr. Developer",
    Description2:"Raised 78,000 in early stage funding, created initial design concepts, and oversaw initial development. Currently oversee and maintain all front end code and server functionality",
    EmpStart3:"10/03/2023",
    EmpEnd3:"Present",
    CompanyName3:"Google",
    Designation3:"Front-End-Developer",
    Description3:"Raised 78,000 in early stage funding, created initial design concepts, and oversaw initial development. Currently oversee and maintain all front end code and server functionality",
    Skill1:"Web Development",  
    Skill2:"SQL",  
    Skill3:"CSS3",  
    Skill4:"Adobe Photoshop",  
    Skill5:"HTML5",  
    Skill6:"",  
    Skill7:"",  
    Skill8:"PostgreySQL",  
    Skill9:"Company Branding",  
    Skill10:"Responsive Web Design",  
    Education1:"10th Form A.S.V.J SE SEC SCHOOL",
    EducationMarks1:"7 CGPA",
    Education2:"12th Form A.S.V.J SE SEC SCHOOL",
    EducationMarks2:"57%",
    Education3:"BCA GGSIPU",
    EducationMarks3:"76%",
    Hobby1:"Reading",
    Hobby2:"Puzzle Game",
    Hobby3:"Gym",
    Hobby4:"Bike",
    Hobby5:"Chess",
  }
  return(
    <div>
    <Resume1 {...ResumeDetails}></Resume1> 
    </div>
    );
}

export default App;