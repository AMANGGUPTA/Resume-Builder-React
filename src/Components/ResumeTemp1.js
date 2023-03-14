import './ResumeTemp1.css'

function Resume1({FirstName, LastName,AddressLine1,AddressLineCountry, AddressLineState, AddressLineCity,Email,Mobile, EmpStart1,EmpEnd1,CompanyName1,Designation1,Description1,EmpStart2,EmpEnd2,CompanyName2,Designation2,Description2,EmpStart3,EmpEnd3,CompanyName3,Designation3,Description3,Skill1,Skill2,Skill3,Skill4,Skill5,Skill6,Skill7,Skill8,Skill9,Skill10,EducationMarks1,Education1,EducationMarks2,Education2,EducationMarks3,Education3, Hobby1, Hobby2, Hobby3, Hobby4, Hobby5}){

  let Condskill1,Condskill2,Condskill3,Condskill4,Condskill5,Condskill6,Condskill7,Condskill8,Condskill9,Condskill10;

if(Skill1 != ''){
  Condskill1=<li>{Skill1}</li>;
}
if(Skill2 != ''){
  Condskill2=<li>{Skill2}</li>;
}
if(Skill3 != ''){
  Condskill3=<li>{Skill3}</li>;
}
if(Skill4 != ''){
  Condskill4=<li>{Skill4}</li>;
}
if(Skill5 != ''){
  Condskill5=<li>{Skill5}</li>;
}
if(Skill6 != ''){
  Condskill6=<li>{Skill6}</li>;
}
if(Skill7 != ''){
  Condskill7=<li>{Skill7}</li>;
}
if(Skill8 != ''){
  Condskill8=<li>{Skill8}</li>;
}
if(Skill9 != ''){
  Condskill9=<li>{Skill9}</li>;
}
if(Skill10 != ''){
  Condskill10=<li>{Skill10}</li>;
}

  return(
        <div>
            <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic|Open+Sans:300,400,500,700|Waiting+for+the+Sunrise|Shadows+Into+Light' rel='stylesheet' type='text/css'></link>
<div class="wrapper clearfix">
  <div class="left">

    <div class="name-hero">

      <div class="me-img"></div>

      <div class="name-text">

        <h1>{FirstName}{LastName}</h1>
        <p>{AddressLine1} , {AddressLineCountry}</p>
        <p>{AddressLineState} {AddressLineCity}</p>
        <p>{Email}</p>
        <p>{Mobile}</p>
      </div>
    </div>
  </div>
  <div class="right">

    <div class="inner">
      <section>
        <h1>Employment Status</h1>
        <p>{EmpStart1} - {EmpEnd1} <em> {CompanyName1} | {Designation1} </em></p>
        <p>{Description1}</p>
        <p>{EmpStart2} - {EmpEnd2} <em> {CompanyName2} | {Designation2} </em></p>
        <p>{Description2}</p>
        <p>{EmpStart3} - {EmpEnd3} <em> {CompanyName3} | {Designation3} </em></p>
        <p>{Description3}</p>
      </section>
      <section>
        <h1>Technical Skills</h1>
        <ul class="skill-set">
          {Condskill1}
          {Condskill2}
          {Condskill3}
          {Condskill4}
          {Condskill5}
          {Condskill6}
          {Condskill7}
          {Condskill8}
          {Condskill9}
          {Condskill10}
        </ul>
      </section>
      <section>
        <h1>Education</h1>
        <p><em>{Education1}</em></p>
        <p>Percentage/CGPA: {EducationMarks1}</p>
        <p><em>{Education2}</em></p>
        <p>Percentage/CGPA: {EducationMarks2}</p>
        <p><em>{Education3}</em></p>
        <p>Percentage/CGPA: {EducationMarks3}</p>
    
      </section>
      <section>
        <h1>Personal Interests</h1>
        <ul class="skill-set">
          <li>{Hobby1}</li>
          <li>{Hobby2}</li>
          <li>{Hobby3}</li>
          <li>{Hobby4}</li>
          <li>{Hobby5}</li>
          
        </ul>
      </section>
      <section>
        <div class="handmade">
          <p>handmade by <em>Aman Gupta</em></p>
        </div>
      </section>
    </div>

  </div>

</div>
        </div>
    )
}
export default Resume1;