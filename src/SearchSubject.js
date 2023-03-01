import { Component } from "react";

const defaultSubjects = [
    'Math',
    'Physic',
    'Hello',
    'Danil',
    'Other',
    'Math',
    'Physic',
    'Hello',
    'Danil',
    'Other',
    'Math',
    'Physic',
    'Hello',
    'Danil',
    'Other',
    'Math',
    'Physic',
    'Hello',
    'Danil',
    'Other'
];

class SearchSubject extends Component {


    constructor(props) {
        super(props)
        this.state = {
            foundSubjects: []
        }
    }

    openSubjectList() {
        this.props.props.history.push('/subject')
    }

    updateState(found) {
        console.log('Search subject this is ', this)
        this.setState({
            foundSubjects: found
        });
    }

    search(e) {
        const text = e.target.value;
        console.log('Search text is ', text)
        const found = defaultSubjects.filter(s => s.toLowerCase().includes(text.toLowerCase()));
        console.log('Found is ', found);
        this.updateState(found)
    }

    render() {
        return (
            <div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderColor: "red",
                    borderWidth: 5,
                    borderRadius: 10
                }}>
                    <input
                        type={'text'}
                        placeholder='Введите название предмета'
                        style={{
                            width: '80%',
                            height: '5vh'
                        }}
                        onChange={(e) => this.search(e)}
                    />
                    <input
                        type={'button'}
                        value='Поиск'
                        style={{ width: '20%' }}
                    />
                </div>
                <div>
                    {
                        this.state.foundSubjects.map((s) => {
                            return (
                                <h2>{s}</h2>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default SearchSubject;