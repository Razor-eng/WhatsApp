import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import moment from 'moment'
function Message({user, message}){
    const [userLoggedIn] = useAuthState(auth);
    const TypeOfMessage = user === userLoggedIn.email?Sender:Reciever;

    return (
        <Container>
            <TypeOfMessage>
                {message.message}
                <Timestamp>
                {message.timestamp ? moment(message.timestamp).format('LT'):''}
                </Timestamp>
            </TypeOfMessage>
        </Container>
    )
}

export default Message;

const Container = styled.div`
    
`;
const Timestamp = styled.div`
    font-size: 11px;
    position: absolute;
    right:0;
`;
const MessageElement = styled.p`
    width: fit-content;
    padding: 9px;
    border-radius: 8px;
    margin: 10px;
    min-width: 60px;
    padding-bottom: 20px;
    position: relative;
    text-align: right;
`;
const Sender = styled(MessageElement)`
    margin-left: auto;
    background-color: #dcf9c6;
`;
const Reciever = styled(MessageElement)`
    background-color: whitesmoke;
    text-align: left;
`;

