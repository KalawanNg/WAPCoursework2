import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import locationData from "../../data/data.json"

export default function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {locationData.map(data => (
                    <div style={{ margin: '15px' }}>
                        <MDBCard style={{ maxWidth: '390px', display: 'flex' }}>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>{data.title}</MDBCardTitle>
                                <MDBCardText>
                                    {data.description}
                                </MDBCardText>
                                <MDBBtn href={`https://www.google.com/maps?${data.location}`}>Show In GoogleMap</MDBBtn>
                            </MDBCardBody>
                            <div className="rounded-2 overflow-hidden">
                                <div className="gmap_canvas">
                                    <iframe
                                        width="100%"
                                        height="320"
                                        id="gmap_canvas"
                                        src={`https://maps.google.com/maps?q=${data.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                        frameborder="0"
                                        marginheight="10"
                                        marginwidth="10"
                                        title="Google Map"
                                    ></iframe>
                                </div>
                            </div>
                        </MDBCard>
                    </div>
                ))}
            </div>
        </div>
    );
}
