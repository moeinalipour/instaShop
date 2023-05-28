import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'


export default function NavbarMenu() {



}


export function NavbarMenuIcon() {

    return (
        <span className="menu-icon">
            <FontAwesomeIcon icon={faBars} />
        </span>

    );
}