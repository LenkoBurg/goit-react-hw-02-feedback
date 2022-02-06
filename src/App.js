import { Component } from "react";
import Container from "./components/Container/Container";
import Feedback from "./components/FeedbackOptions/Feedback";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";
import './App.css';

class App extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    
    stateUpdate = event => {
        this.setState(prevState => ({
            [event.target.name]: prevState[event.target.name] + 1,
        }))
    }

     countTotalFeedback = () => {
        return (Object.values(this.state).reduce((acc, item) => acc + item));
    };
 

    countPositiveFeedbackPercentage = () => {
        return (parseInt(this.state.good / this.countTotalFeedback() * 100));
    };

    render() {
        return (
            <Container>
                <Section title="Please leave feedback">
                    <Feedback
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.stateUpdate}>
                    </Feedback>
                </Section>
                 <Section title="Statistics">
          {!this.countTotalFeedback()
            ?
            <Notification message="No feedback given"></Notification>
            :
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}>
            </Statistics>
          }
        </Section>
             </Container>
        )
    }
  

}



export default App