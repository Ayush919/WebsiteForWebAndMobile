import successStoryOne from '../Image/successStoryOne.jpeg'
import successStoryTwo from '../Image/successStorytwo.jpeg'
import successStoryThree from '../Image/successStorythree.jpeg'
import successStoryFour from '../Image/successStoryfour.jpeg'

const HappySuccessStory = () => {
    return (
        <>
            <div className="happySuccessStories">
                Happy Success Stories
            </div>
            <div className="happySuccessStoriesImage">
                <div className="successImageBlock">
                    <img src={successStoryOne} alt={""} className="successImage"/>
                    <p className="successImageMessage">
                        We were matched by Truelymarry.
                        I also try with other Matrimonial sites but no one works like...
                    </p>
                </div>
                <div className="successImageBlock">
                    <img src={successStoryTwo} alt={""} className="successImage"/>
                    <p className="successImageMessage">
                        Yes, We were matched by Truelymarry and
                        I found the best marriage bureau, and wanted to say...
                    </p>
                </div>
                <div className="successImageBlock">
                    <img src={successStoryThree} alt={""} className="successImage"/>
                    <p className="successImageMessage">
                        I Remember when My relationship manager
                        told me Shivangi liked your profile and she wanted to...
                    </p>
                </div>
                <div className="successImageBlock">
                    <img src={successStoryFour} alt={""} className="successImage"/>
                    <p className="successImageMessage">
                        Thankyou TruelyMarry.com
                        For finding my life partner. My parents Liked aditi profile on...
                    </p>
                </div>
            </div>
        </>
    )

}
export default HappySuccessStory