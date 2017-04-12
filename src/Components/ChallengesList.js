/*HomePage's child component, ChallengesList, iterates over and displays those
challenges as links to each challenge's page. */

import React from 'react';
import {Link} from 'react-router';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const ChallengesList = (props) => {
  return (
    <ListGroup>
  {/* iteration */}
      {props.challenges.map((challenge, i) => {
        return (
           <ListGroupItem key={i}>
             <Link to={`/rooms/${challenge.id}`}>
               {challenge.title}
             </Link>
           </ListGroupItem>
          )
      })}
    </ListGroup>
  )
}

export default ChallengesList;

/*Here, we use the Link component imported from React Router so that when a user
 clicks on the link to rooms/1, for example, our app will render the component
  that we mapped to the rooms/:id route, which is Room.

The Room component is where the magic happens, and we'll
 jump into that now.
*/
