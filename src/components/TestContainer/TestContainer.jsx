import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypeChallengeContainer from "../TypingChallengeContainer/TypeChallengeContainer";

const TestContainer = ({ selectedParagraph, testInfo, onInputChange, words, characters, wpm, timeRemaining, timerStarted, startAgain, }) => {

    return (
        <div className="test-container">
            {timeRemaining > 0 ?(
            <div data-aos="fade-up" className="typing-challenge-cont">
                <TypeChallengeContainer
                    selectedParagraph={selectedParagraph}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                    words={words}
                    characters={characters}
                    wpm={wpm}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                />
            </div>
            ) : (
                <div className="try-again-cont">
                    <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
                </div>
            )}

        </div>
    );
};

export default TestContainer;