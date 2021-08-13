/**
 * Responsible for creating a typing effect, uses data attributes from HTML to create a typing effect and go trough
 * an array of words. Once a word has been typed, it will be deleted before the next word is being displayed.
 *
 * @author Konrad Sokolowski
 */
import React from "react";

class TypeWriter extends React.Component {

    static defaultProps = {
        words: [""]
    }

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isDeleting: false,
            loopNum: 0,
            typingSpeed: 150
        }
    }

    //Execute handleType when the component has successfully mounted
    componentDidMount() {
        this.handleType();
    }

    handleType = () => {
        const {words} = this.props;
        const {isDeleting, loopNum, text, typingSpeed} = this.state;
        const current = loopNum % words.length;
        const fullText = words[current];

        this.setState({
            //When deleting remove characters, when not deleting add characters
            text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
            //Increase speed by half when deleting
            typingSpeed: isDeleting ? 75 : 150
        });

        //When the word is completely typed
        if (!isDeleting && text === fullText) {
            //Create a pause at the end of the typing of the word
            setTimeout(() => this.setState({isDeleting: true}), 500);
        } else if (isDeleting && text === '') {
            this.setState({
                isDeleting: false,
                //Move to the next word
                loopNum: loopNum + 1
            });
        }

        setTimeout(this.handleType, typingSpeed);
    };

    render() {
        return (
            <span className="txt">{this.state.text}</span>
        );
    }
}

export default TypeWriter;