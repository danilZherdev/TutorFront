import { Component } from "react";
import logo512 from "./assets/logo512.png";
import axios from "axios";

class TutorView extends Component {


    constructor(props) {
        super(props)
    }

    submitAction() {
        let config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        }

        axios.get('/studentService/start-deal?serviceId=1', config)
            .then((response => response.data))
            .then((data) => this.setState({ services: data }))
            .catch(error => alert(error));
    }



    render() {
        return (
            //common
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 10,
                    marginLeft: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // border: '1.5px solid rgba(0, 0, 0, 0.10)',
                    // borderColor: "black"


                }}>
                {/*avatar with rating */}
                <div>
                    <img
                        style={{
                            height: 150,
                            width: 150,
                            marginLeft: 20

                        }}
                        src={logo512} />
                    <h4
                        style={{
                            marginRight: 40,
                            marginLeft: 40
                        }}>
                        Rating: {this.props.rating}
                    </h4>
                </div>
                <div>
                    <h3
                        style={{
                            marginRight: 40,
                            marginLeft: 40
                        }}>
                        {this.props.fio}</h3>
                    <h4
                        style={{
                            marginRight: 40,
                            marginLeft: 40
                        }}>
                        Стаж: {this.props.expirience} лет</h4>
                    <h4
                        style={{
                            marginRight: 40,
                            marginLeft: 40
                        }}
                    >{this.props.subject}</h4>
                </div>
                <div>
                    <h3>Цена {this.props.price} руб.час</h3>
                    <h4>{this.props.isBusy === true ? "Занято" : "Свободен"}</h4>
                    <input type={'button'} value='Оплатить' onClick={() => this.submitAction()} />
                </div>
            </div>
        )
    }
}

export default TutorView;