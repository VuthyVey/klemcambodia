import React from "react";  
import IndexHeader from "components/Headers/IndexHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import FeatureSection from "components/HomePage/FeatureSection.js";
import BusinessCreativeSection from "components/HomePage/BusinessCreativeSection.js"
import CreativeSkillSection from "components/HomePage/CreativeSkillSection.js"
import EventSection from "components/HomePage/EventSection";
// import DemoFooter from "components/Footers/DemoFooter"
class HomePage extends React.Component {
    render() {
        return <>
        <IndexNavbar />
        <IndexHeader />
        <FeatureSection backgroundColor="white"/>
        <BusinessCreativeSection backgroundColor="#002AD1" />
        <CreativeSkillSection backgroundColor="#FF5256"/>
        <EventSection backgroundColor="#FFDE3F"/>
        <DemoFooter />
       </>
    }
}

export default HomePage;