// import Resume1 from "./Components/ResumeTemp1";
import Resume2 from "./Components/ResumeTemp2";
import Datadb from "./Components/Datadb";
import { useState } from "react";
function App(){
  var [resumedata,setResumedata]=useState(Datadb);
  return(
    <>
    {
    resumedata.map((mapdata)=>
    <Resume2
    FirstName={mapdata.FirstName} LastName={mapdata.LastName} AddressLine1={mapdata.AddressLine1}AddressLineCountry={mapdata.AddressLineCountry} AddressLineState={mapdata.AddressLineState} AddressLineCity={mapdata.AddressLineCity} Email={mapdata.Email} Mobile={mapdata.Email} EmpStart1={mapdata.EmpStart1} EmpEnd1={mapdata.EmpEnd1} CompanyName1={mapdata.CompanyName1} Designation1={mapdata.Designation1} Description1={mapdata.Description1} EmpStart2={mapdata.EmpStart2} EmpEnd2={mapdata.EmpEnd2} CompanyName2={mapdata.CompanyName2} Designation2={mapdata.Designation2} Description2={mapdata.Description2} EmpStart3={mapdata.EmpStart3} EmpEnd3={mapdata.EmpEnd3} CompanyName3={mapdata.CompanyName3} Designation3={mapdata.Designation3} Description3={mapdata.Description3} Skill1={mapdata.Skill1} Skill2={mapdata.Skill2} Skill3={mapdata.Skill3}Skill4={mapdata.Skill4} Skill5={mapdata.Skill5} Skill6={mapdata.Skill6} Skill7={mapdata.Skill7} Skill8={mapdata.Skill8} Skill9={mapdata.Skill9} Skill10={mapdata.Skill10} EducationMarks1={mapdata.EducationMarks1}Education1={mapdata.Education1} EducationMarks2={mapdata.EducationMarks2} Education2={mapdata.Education2} EducationMarks3={mapdata.EducationMarks3} Education3={mapdata.Education3}  Hobby1={mapdata.Hobby1} Hobby2={mapdata.Hobby2} Hobby3={mapdata.Hobby3} Hobby4={mapdata.Hobby4} Hobby5={mapdata.Hobby5}
    ></Resume2>
    )
    }
    </>
    );
  }
export default App;