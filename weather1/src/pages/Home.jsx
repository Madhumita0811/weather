
import { useState } from 'react';
import { Box, styled } from "@mui/material";
import Leaves from "../assets/images/cloud.png";
import Page from "../components/Page";
import Information from "../components/Information";

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: '70%',
    border: '2px solid #CCCCCC', // Light gray border
    borderRadius: '20px', // Rounded corners
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
});

const Image = styled(Box)({
    backgroundImage: `url(${Leaves})`,
    width: '27%',
    height: '100%', // Adjusted height to fill entire container height
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px',
    transition: 'transform 0.3s ease-in-out', // Transition for transform property
    '&:hover': {
        transform: 'scale(1.1)', // Scale up on hover
    }
});

const ContentBox = styled(Box)({
    flex: '1', // Take remaining space of parent flex container
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
});

const InformationWrapper = styled(Box)({
    backgroundColor: '#E0E0E0', // Light gray background color
    borderRadius: '20px', // Rounded corners
    padding: '20px',
    marginTop: '20px', // Add margin to separate from Page component
    animation: 'fadeIn 0.5s ease', // Fade-in animation
    '@keyframes fadeIn': { // Keyframes for fade-in animation
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
});

const Home = () => {
    const [result, setResult] = useState({});

    return (
        <Component>
            <Image />
            <ContentBox>
                <Page setResult={setResult} />
                <InformationWrapper>
                    <Information result={result} />
                </InformationWrapper>
            </ContentBox>
        </Component>
    );
};

export default Home;

