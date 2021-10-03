import {useEffect} from 'react'
import Select from 'react-select'

function SelectUser({allUsers, loading, onChange}) {

    let options = []

    useEffect(() => {
        if (loading === "loaded") {

            Object.keys(allUsers).map(key => {
        
                options.push(
                    {
                        label: <div>
                                <img className="avatar" alt={allUsers[key].name} src={allUsers[key].avatarURL}/>
                                <span>{allUsers[key].name}</span>
                               </div>,
                        value: key
                    }
                );

                return true;
            })
        }
    
    })

    return (
        <Select options={options} onChange={onChange}/>
    )
}

export default SelectUser;