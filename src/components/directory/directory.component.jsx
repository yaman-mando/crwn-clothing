﻿import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss"
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {connect} from "react-redux";
import {select_g_collection} from "../../redux/general.selectors";


const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector  ({
    sections: select_g_collection
});

export default connect(mapStateToProps)(Directory);