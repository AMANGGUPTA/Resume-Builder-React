import './ResumeTemp2.css'
function ResumeTemp2({FirstName, LastName,AddressLine1,AddressLineCountry, AddressLineState, AddressLineCity,Email,Mobile, EmpStart1,EmpEnd1,CompanyName1,Designation1,Description1,EmpStart2,EmpEnd2,CompanyName2,Designation2,Description2,EmpStart3,EmpEnd3,CompanyName3,Designation3,Description3,Skill1,Skill2,Skill3,Skill4,Skill5,Skill6,Skill7,Skill8,Skill9,Skill10,EducationMarks1,Education1,EducationMarks2,Education2,EducationMarks3,Education3, Hobby1, Hobby2, Hobby3, Hobby4, Hobby5}){
    return(

<div class="container">
  <div class="header">
    <div class="full-name">
      <span class="first-name">{FirstName}</span> 
      <span class="last-name">{LastName}</span>
    </div>
    <div class="contact-info">
      <span class="email">Email:</span>
      <span class="email-val">{Email}</span>
      <span class="separator"></span>
      <span class="phone">Phone: </span>
      <span class="phone-val">{Mobile}</span>
    </div>
    
    <div class="about">
      <span class="position">{Designation1}</span>
      <span class="desc">
       {Description1}
      </span>
    </div>
  </div>
   <div class="details">
    <div class="section">
      <div class="section__title">Experience</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">{Designation1}</div>
            <div class="addr">{Description1}</div>
            <div class="duration">{EmpStart1} - {EmpEnd1}</div>
          </div>
          <div class="right">
            <div class="name">{Designation1}</div>
            <div class="desc">{Designation1}</div>
          </div>
        </div>
                <div class="section__list-item">
          <div class="left">
            <div class="name">{Designation2}</div>
            <div class="addr">{Description2}</div>
            <div class="duration">{EmpStart2}- {EmpEnd2}</div>
          </div>
          <div class="right">
            <div class="name">{Designation2}</div>
            <div class="desc">{Designation2}</div>
          </div>
        </div>

      </div>
    </div>
    <div class="section">
      <div class="section__title">Education</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">{Education1}</div>
            <div class="addr">{EducationMarks1}</div>
            <div class="duration">{EducationMarks1}</div>
          </div>
          <div class="right">
            <div class="name">School</div>
            <div class="desc">School</div>
          </div>
        </div>
        <div class="section__list-item">
          <div class="left">
            <div class="name">{Education2}</div>
            <div class="addr">{EducationMarks2}</div>
            <div class="duration">{EducationMarks2}</div>
          </div>
          <div class="right">
            <div class="name">School</div>
            <div class="desc">School</div>
          </div>
        </div>

      </div>
      
  </div>
     <div class="section">
      <div class="section__title">Projects</div> 
       <div class="section__list">
         <div class="section__list-item">
           <div class="name">{Designation1}</div>
           <div class="text">{Description2}</div>
         </div>
         
         <div class="section__list-item">
                    <div class="name">{Designation3}</div>
           <div class="text">{Description3} <a href="/login">link</a>
           </div>
         </div>
       </div>
    </div>
     <div class="section">
       <div class="section__title">Skills</div>
       <div class="skills">
         <div class="skills__item">
           <div class="left"><div class="name">
             {Skill1}
             </div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         
       </div>
       <div class="skills__item">
           <div class="left"><div class="name">
             {Skill2}</div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div class="skills__item">
           <div class="left"><div class="name">
             {Skill3}</div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div class="skills__item">
           <div class="left"><div class="name">
             {Skill4}</div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div class="skills__item">
           <div class="left"><div class="name">
             {Skill5}</div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div class="skills__item">
           <div class="left"><div class="name">
             {Skill6}</div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div class="skills__item">
           <div class="left"><div class="name">
             {Skill7}</div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div class="skills__item">
           <div class="left"><div class="name">
             {Skill8}</div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div class="skills__item">
           <div class="left"><div class="name">
             {Skill9}</div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div class="skills__item">
           <div class="left"><div class="name">
             {Skill10}</div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
       </div>
     <div class="section">
     <div class="section__title">
       Interests
       </div>
       <div class="section__list">
         <div class="section__list-item">
           {Hobby1},{Hobby2},{Hobby3},{Hobby4},{Hobby5}
          </div>
       </div>
     </div>
     </div>
  </div>
)
}

export default ResumeTemp2;