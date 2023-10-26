import React, {useState} from "react";
import Box from '@mui/material/Box';
import SelectField from "./selectField";
import MainSection from "./mainSection";
import MiddleSection from "./middleSection";
import HappySuccessStory from "./happySuccessStory";
import Footer from "./footer";
import AppContinueButton from "../Common/AppContinueButton";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../Firebase/firebase";
import {SignInSignUpModal} from "../Common/signInSignUpModal";

const HeaderSection = () => {
    const selectLookingFor = ["Male", "Female"]
    const selectReligion = ["Hindu", "Muslim", "Sikh", "Christian", "Parsi", "Jain"]
    const selectMotherTongue = ["English", "Hindi", "Gujarati"]
    const [age, setAge] = useState("18")
    const [showForm, setShowForm] = useState(false)
    const ageNumbers = []
    for (let i = 18; i <= 60; i++) {
        ageNumbers.push(i)
    }

    const [gender, setGender] = useState("Male")
    const [religion, setReligion] = useState("Hindu")
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleReligionChange = (e) => {
        setReligion(e.target.value)
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    const handleRegister = () => {
        setShowForm(true)
        console.log("handleRegister")
        createUserWithEmailAndPassword(auth, "ayushmathur82@gmail.com", "ayushMathur@12")
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("uesr :::: ", user)
                // ...
            }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("auth :::: ", auth, db)
            console.log("user Details :::: ", errorMessage, "errorCode", errorCode)
        });
    }

    const handleSignIn = () => {

    }

    return (
        <>
            <div className="headerSection">
                <div className="headerContent">
                    <div className="headerMessage">
                        Join us today & start your incrediable journey ...
                    </div>
                    <div className={"buttonSection"}>
                        <AppContinueButton className="loginButton"
                                           disableBtn={false}
                                           title="Login" onClick={"confirmOrder"}/>
                        <AppContinueButton className="registerButton"
                                           disableBtn={false}
                                           title="Register" onClick={"confirmOrder"}/>
                    </div>
                </div>
                {showForm && <SignInSignUpModal showModal={showForm} setShowModal={setShowForm}/>}
                <Box className="headerBox">
                    <div className="editNumberCrossIcon">
                        <div className="selectBoxSection">
                            <div className="selectBoxHeading">Looking For</div>
                            <SelectField label="Select Looking For"
                                         selectField={gender}
                                         items={selectLookingFor}
                                         onFieldChange={handleGenderChange}
                            />
                        </div>
                        <div className="selectBoxSection">
                            <div className="selectBoxHeading">Age From</div>
                            <SelectField label="Age From"
                                         selectField={age}
                                         items={ageNumbers}
                                         onFieldChange={handleAgeChange}
                            />
                        </div>
                        <div className="selectBoxSection">
                            <div className="selectBoxHeading">Age To</div>
                            <SelectField label="Age From"
                                         selectField={age}
                                         items={ageNumbers}
                                         onFieldChange={handleAgeChange}
                            />
                        </div>
                        <div className="selectBoxSection">
                            <div className="selectBoxHeading"> Religion</div>
                            <SelectField label="Religion"
                                         selectField={religion}
                                         items={selectReligion}
                                         onFieldChange={handleReligionChange}
                            />
                        </div>
                        <div className="selectBoxSection">
                            <div className="selectBoxHeading">Mother Tongue</div>
                            <SelectField label="Mother Tongue"
                                         items={selectMotherTongue}
                                         onFieldChange={handleGenderChange}
                            />
                        </div>
                        <button className="searchButton" type={"button"}> SEARCH NOW</button>
                    </div>
                    <div className={"buttonSectionWeb"}>
                        <AppContinueButton className="loginButton"
                                           disableBtn={false}
                                           title="Login" onClick={() => handleSignIn}/>
                        <AppContinueButton className="registerButton"
                                           disableBtn={false}
                                           title="Register" onClick={handleRegister}/>
                    </div>
                </Box>
            </div>
            <div className="mainSection">
                <MainSection/>
            </div>
            <div className="middleSection">
                <MiddleSection/>
            </div>
            <div className="happySuccessStoriesSection">
                <HappySuccessStory/>

            </div>
            <div className="aboutTruelyMarrySection">
                <div className="aboutTruelyMarry">
                    About TruelyMarry
                </div>
                <div className="truelyMarryPara">
                    TruelyMarry.com is the most trusted Indian Matrimonial website focusing mainly on the Indian
                    Community. It is a unique matrimonial site that brings you an option to find your soulmate based on
                    caste, location, profession, qualification, religion, and other important aspects. TruelyMarry is
                    always there to bring you the most reliable Indian matrimonial services and is among the exclusive
                    matrimonial portal to bring online and offline matrimonial services.<br/>
                    <br/>
                    This personalized approach for elite matrimonial services is what makes TruelyMarry the most
                    preferred Indian marriage site. Our team is available dedicatedly to fetch the most suitable
                    profiles for finding your perfect match. We have a responsive team to understand the customer
                    requirements and bring you profiles matching your interest and requirements.<br/>
                    <br/>
                    Our marriage bureau gives best matches from all over India that could match with the profiles of
                    your interest. If you’re looking for the best pair for a lifetime, we are there for you with free
                    matrimony website.

                </div>

            </div>
            <div className="footerSection">
                <Footer/>
            </div>
        </>
    )

}
export default HeaderSection;
