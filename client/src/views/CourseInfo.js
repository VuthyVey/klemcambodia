import React from "react";  
import IndexHeader from "components/Headers/IndexHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import VideoTrailerSection from "components/CourseInfo/VideoTrailerSection";
import CourseDescriptonSection from "components/CourseInfo/CourseDescriptionSection";
import InstructorProfileSection from "components/CourseInfo/InstructorProfileSection";

// import DemoFooter from "components/Footers/DemoFooter"

class CourseInfo extends React.Component {
    render() {
        const courseTitle = "Creative freelance perfect project proposal";
        
        const courseData = {
            title: courseTitle,
            instructor: {
                fullName: "Elon Musk",
                portraitPicURL: "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
            },
            trailerURL: "https://www.youtube.com/watch?v=fT8mhoScU1w",
            description: "The best picture is your next picture. If you start to believe that you've already shot your best picture or you start patting yourself on the back at any level, you might as well hang it up.",
            lessonsList: [{title: "Introduction to Project Proposal", link: "https://www.youtube.com/watch?v=iBMfg4WkKL8", order: 1},{title: "Key ideas", link: "https://www.youtube.com/watch?v=DAMbnO11g_I", order: 2}, {title: "Strategies ", link: "https://www.youtube.com/watch?v=HSjurG77_zg", order: 3}, {title: "Thing to avoid", link: "https://www.youtube.com/watch?v=_hxiw9D2giw", order: 4},{title: "Delivering ", link: "https://www.youtube.com/watch?v=DAMbnO11g_I", order: 5}]
        }
        
        return <>
        <IndexNavbar />
        <VideoTrailerSection backgroundColor="grey" courseData={courseData}/>
        <CourseDescriptonSection backgroundColor="white" courseData={courseData}/>
        {/* <InstructorProfileSection backgroundColor="white" courseData={courseData}/> */}
        <DemoFooter />
       </>
    }
}

export default CourseInfo;