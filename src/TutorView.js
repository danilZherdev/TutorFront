import { Component } from "react";
import logo512 from "./assets/logo512.png";


class TutorView extends Component {


    constructor(props) {
        super(props)

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
                        Rating: 4.5
                    </h4>
                </div>
                <div>
                    <h3
                        style={{
                            marginRight: 40,
                            marginLeft: 40
                        }}>
                        Жердев Данил</h3>
                    <h4
                        style={{
                            marginRight: 40,
                            marginLeft: 40
                        }}>
                        Стаж: 5 лет</h4>
                    <h4
                        style={{
                            marginRight: 40,
                            marginLeft: 40
                        }}
                    >Философия</h4>
                </div>
                <div>
                    <h3>Цена 3000 руб.час</h3>
                    <h4>Занят</h4>
                    <input type={'button'} value={'Связаться'} />
                </div>
            </div>
        )
    }
}
export default TutorView;