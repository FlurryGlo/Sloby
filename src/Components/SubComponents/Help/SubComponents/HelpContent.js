import React, {useContext} from 'react';
import { Link } from "react-router-dom"
import EmailIcon from '@material-ui/icons/Email';
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import {ThemeContext} from "../../../Context/ThemeContext";
function HelpContent(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <div data_theme={theme}>
           <div className="help-container">
            <div className="title-base">
                Help
            </div>

            <div className="underline"></div>

            <div className="subtitle-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, amet atque beatae blanditiis consectetur cumque deleniti dicta dolorem ea et fugiat harum id magnam minima modi mollitia nihil omnis quibusdam quidem reiciendis sequi suscipit tempore ullam veritatis voluptas voluptate voluptatibus? Alias blanditiis corporis, distinctio ducimus eius expedita facilis labore veniam.
            </div>

            <div className="options">
                <div>
                    <Link to="forum" className="off-link-dec">
                    <ForumIcon className="icons" color="secondary"/>
                    <div className="bold-text user-select-none">Forum</div>
                    </Link>
                </div>

                <div>
                    <Link to="email" className="off-link-dec">
                    <EmailIcon className="icons" color="secondary"/>
                    <div className="bold-text user-select-none">Email</div>
                    </Link>
                </div>

                <div>
                    <Link to="community" className="off-link-dec">
                        <PeopleIcon  className="icons" color="secondary"/>
                        <div className="bold-text user-select-none">Community</div>
                    </Link>
                </div>
            </div>

        </div>
        </div>

    );
}

export default HelpContent;