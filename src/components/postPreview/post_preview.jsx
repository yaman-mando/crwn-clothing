import React from "react";
import './post_preview.style.scss'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {createStructuredSelector} from "reselect";
import {select_g_collection} from "../../redux/general.selectors";
import {connect} from "react-redux";


const PostPreview= ({posts}) => {
    const {name,email,phone,website,company} = posts;
   return(
    <div className='row'>
        <div className='user-page'>
            <Card className="yaman" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{email}</Card.Subtitle>
                    <Card.Text>{phone}</Card.Text>
                    <Card.Text>{website}</Card.Text>
                    <Card.Text>
                        {company.catchPhrase}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
   )
};

const mapStateToProps = createStructuredSelector  ({
    posts: select_g_collection
});

export default connect(mapStateToProps)(PostPreview);