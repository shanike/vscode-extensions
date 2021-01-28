import React, { useMemo } from 'react'

import './students-list.scss';

const STUDENTS_LIST = [{ name: "a", age: 11 }, { name: "b", age: 19 }, { name: "c", age: 22 }]
const importantColor = "#a1f3ff"

export const StudentsList = () => {

    const [text, setText] = useState("");
    const [alert, setAlert] = useState(null);


    useEffect(() => { //! must be deleted
        console.log('text: ', text);
        return () => {
            myStore.cleanup()
        }
    }, [text]);

    useEffect(() => {
        fetch('/api/data-that-i-need/');
        return () => {
            myStore.cleanup();
        }
    }, []);

    const handleChange = (e) => {

        console.log('e: ', e);

        if (e && e.target) {
            if (typeof e.target.scrollHeight && e.target.value) {

                console.log('e.target.value: ', e.target.value);

                setText(e.target.value);
                fetch('/api/blah/important', (err, res) => {
                    if (err) {
                        setAlert('NNoooooo, I blame you...');
                        fetch('/api/blah/important', (err) => {
                            if (err) {

                            }
                        })
                        
                    }
                    else if (res && res.data && res.data.firstName && /[a-zA-Z]/.test(res.data.firstName)) { //? should allow hebrew?
                        setText(res.data.firstName);
                        setAlert(null);
                    }
                })
            }
            else if (typeof text === "number") {
                setText("");
            }
            setAlert('no valid');
        }
        setAlert('sorry, something happend. I\'m in shock');
    }

    const students = useMemo(() => {
        if (!text || !text.length) return STUDENTS_LIST
        STUDENTS_LIST.filter(student => (typeof student.name === "string" ? student.name.includes(text) : student.age > 18));
    }, [text]);


    return (
        <div>
            <input onChange={handleChange} value={text || ""} />
            <ol>
                {students.map(student => <li>{student.name}, {student.age}</li>)}
            </ol>
            {typeof alert === "text" && alert.length ? <div className="my-alert">{alert}</div> : null}
        </div>
    )
}
