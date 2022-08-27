import DataBox from "../Common/dataBox";
import setting from "../Image/setting.png";
import thumb from "../Image/thumb.png";
import handShake from "../Image/handShake.png";

const MiddleSection = () => {
    return (
        <>
            <div className="headerMiddleSection">
                <div className="headingMiddleSection">
                    Personalized Matchmaking Service
                </div>
                <div className="middleSectionImage">
                    <div className="imageSection">
                        <div className="middleSectionBox">
                            <DataBox title={"Define your preferences"} imageUrl={setting}
                                     content={"Connect and understand you and your partner preferences in depth."}/>
                            <DataBox title={"Handpicked profiles"} imageUrl={thumb}
                                     content={"Shortlist profile matching your preferences criteria."}/>
                            <DataBox title={"Connect"} imageUrl={handShake}
                                     content={"Reach out to preferred matches on your behalf & explore mutual interest."}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}
export default MiddleSection;