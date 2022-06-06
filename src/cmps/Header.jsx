import { Link } from 'react-router-dom'
export const Header = () => {

    return(
        <div className="header">
            <Link to={'/'} className="header-title">ADDRESSABLE</Link>
        </div>
    )
}