interface Props{
    subs: Array<{
        nick:string
        subMonths: number
        avatar: string
        description?: string 
    }>
    string: string
}

const List =  ( {subs, string}: Props ) => {

    const renderList = (): JSX.Element[] => {
        return subs.map( sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}/>
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0,100)}</p>
                <p>{string}</p>
              </li>
            )

        })
    }   
     return (

    <ul>
        {renderList()}
    </ul>

     )  
}

export default List 