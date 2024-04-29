import React from "react";
import "./TypeChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypeChallengeContainer = ({selectedParagraph, testInfo, onInputChange, words,characters,wpm, timeRemaining, timerStarted}) => {
    return(
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />

                {/* Characters Typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}
                />

                {/* Speed */}
                <ChallengeDetailsCard cardName="WPM" cardValue={wpm} />
            </div>

            {/* The Real Challenge */}
            <div className="typewriter-container">
            <TypingChallenge
                    testInfo={testInfo}
                    selectedParagraph={selectedParagraph}
                    onInputChange={onInputChange}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                />
            </div>

        </div>
    );
};

export default TypeChallengeContainer;