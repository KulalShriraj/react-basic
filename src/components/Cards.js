import React from 'react';
import Carditem from './Carditem';
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Carditem

                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the amazon jungle"
                            label="adventure"
                            path='/services'

                        />

                        <Carditem

                            src="images/img-2.jpg"
                            text="travel throgh the Islands of bali in a private cruise"
                            label="luxury"
                            path='/services'

                        />

                    </ul>



                    <ul className='cards__items'>
                        <Carditem

                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the amazon jungle"
                            label="adventure"
                            path='/services'

                        />

                        <Carditem

                            src="images/img-2.jpg"
                            text="travel throgh the Islands of bali in a private cruise"
                            label="luxury"
                            path='/services'

                        />

<Carditem

src="images/img-2.jpg"
text="travel throgh the Islands of bali in a private cruise"
label="luxury"
path='/services'

/>


                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Cards;
