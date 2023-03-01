import { Component } from "react";
import TutorView from "./TutorView";

class TutorsView extends Component {


    constructor(props) {
        super(props)
        this.state = {
            tutors: [
                {
                    id: 1,
                    name: 'Hello'
                },
                {
                    id: 1,
                    name: 'Hello'
                },
                {
                    id: 1,
                    name: 'Hello'
                },
                {
                    id: 1,
                    name: 'Hello'
                }
            ]
        }
    }



    render() {
        return (
            //common
            <div>
                {
                    this.state.tutors.map(tutor => {
                        return (
                            <TutorView />
                        )
                    })
                }
            </div>
        )
    }
}
export default TutorsView;