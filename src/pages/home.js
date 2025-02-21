// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser, loginUser } from "../firebase";
import 'bootstrap/dist/css/bootstrap.css'
import './Landing.css'
import Navbar from '../components/Navbar'
import Homejpg from '../assets/home.jpg';

const home = () => {


    return(
        <>
        <Navbar />
      <div className="row top-section align-items-center container-fluid p-0">
        <div className="col-md-6 d-flex justify-content-center flex-column p-4">
          <h1>What is security awareness training?</h1>
          <p>
          Security awareness training is the process of educating individuals to recognize, understand, and respond to cyber threats effectively. It plays a crucial role in strengthening an organization’s overall security posture by equipping employees, stakeholders, and even customers with the knowledge and skills necessary to safeguard sensitive information. The primary objective of security awareness training is to prevent or minimize security incidents by reducing human cyber risk, as human error remains one of the leading causes of data breaches and cyberattacks. <br/> This training covers a wide range of topics, including phishing scams, password security, malware threats, social engineering tactics, safe browsing practices, and data protection regulations. By fostering a culture of security awareness, organizations can empower their workforce to detect suspicious activities, avoid falling victim to cybercriminals, and adhere to best security practices.
          </p>
        </div>
        <div className="col-md-6 text-center p-4">
          <img src={Homejpg} alt="Cybersecurity Awareness" className="img-fluid rounded" />
        </div>
      </div>

{/* Bottom Page */}

<div className="row bottom-section d-flex align-items-center justify-content-center text-center bg-light container-fluid p-0">
        <div className="col-12 p-4">
          <h2>What is the purpose of cybersecurity awareness training?</h2>
          <p>
            Cybercriminals are constantly evolving and devising new methods to exploit vulnerabilities to steal valuable data from businesses. Additionally, they look to exploit human behavior and emotions. It is no surprise social engineering attacks like phishing, spear phishing, business email compromise (BEC), etc., are so successful. <br/>Well-educated and trained employees can quickly identify these threats, which can significantly reduce the risk of cybersecurity incidents and help prevent data breaches. Security awareness training not only helps stop threat actors in their tracks, but also promotes an organizational culture that is focused on heightened security.<br/>Cybersecurity awareness training is a necessity for the survival of your organization.
          </p>
        </div>
      </div>
        </>
    );

}

export default home;