import DataBox from "../Common/dataBox";
import viewContact from '../Image/view-contact.png'
import sendMessage from '../Image/send-message.png';
import sendingEmail from '../Image/sending-email.png';
import chat from '../Image/chat-icon.png';
import privacySetting from '../Image/privacy-settings.png';
import spotLight from '../Image/spot-light.png';


const MainSection = () => {
    return (
        <div className="mainDataSection">
            <div className="memberShipPlan">
                Membership Plans
            </div>
            <div className="memberShipMessage">
                <div className="memberShipMessageBlock">
                    Upgrade your membership plan as per your requirements.
                    With a paid membership, you can easily connect
                    and find your special someone. Here are key benefits to connect with paid memberships
                </div>
            </div>
            <div className="boxData">
                <DataBox title={"View Contacts"} imageUrl={viewContact}
                         content={"View Mobile & Landline numbers.Call directly"}/>
                <DataBox title={"Send Message"} imageUrl={sendMessage}
                         content={"Send Personalized Messages, while expressing Interest."}/>
                <DataBox title={"Send Email"} imageUrl={sendingEmail}
                         content={"Send personalized emails with Photo, and send biodata"}/>
            </div>
            <div className="boxData">
                <DataBox title={"Chat"} imageUrl={chat}
                         content={"Chat Instantly with online member"}/>
                <DataBox title={"Privacy Settings"} imageUrl={privacySetting}
                         content={"Get Full control on profile to Customize your Privacy settings"}/>
                <DataBox title={"Spot Light"} imageUrl={spotLight}
                         content={"Profile is highlighted front of a search window and provide quick response"}/>
            </div>
            <div className="memberShipButtonSection">
                <button className="memberShipButton" type={"button"}> Browse Membership plans</button>
            </div>
        </div>
    )

}
export default MainSection;