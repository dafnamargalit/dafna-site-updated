import Mailchimp from 'react-mailchimp-form';
import styled from "styled-components";
import { theme } from "theme";
import { IconClose } from "/icons/index";
import AP from '/letters/A-P.svg';
import AY from '/letters/A-Y.svg';
import D from '/letters/D.svg';
import F from '/letters/F.svg';
import N from '/letters/N.svg';
import Image from 'next/image';

export default function Modal(props) {
    return (
        <Container {...props}>
            <ModalBody>
                <WrapClose onClick={props.onClose}>
                    <CloseIcon />
                </WrapClose>
                <LettersWrap>
                    <Letters src={D} alt="D" />
                    <Letters src={AY} alt="A" />
                    <Letters src={F} alt="F" />
                    <Letters src={N} alt="N" />
                    <Letters src={AP} alt="A" />
                </LettersWrap>
                <ModalContent>
                    Join my mailing list!
                    <StyledMailchimp
                        action={'https://rocks.us7.list-manage.com/subscribe/post?u=f45ec644e1aa2a4677f388187&amp;id=9914a1fb1f&amp;f_id=001adbe4f0'}
                        fields={[
                        {
                            name: 'EMAIL',
                            placeholder: 'Email',
                            type: 'email',
                            required: true
                        },
                        {
                            name: 'FNAME',
                            placeholder: 'First Name',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'LNAME',
                            placeholder: 'Last Name',
                            type: 'text',
                            required: true
                        }
                        ]}
                        messages = {
                        {
                        sending: "Sending...",
                        success: "Thank you for subscribing!",
                        error: "An unexpected internal error has occurred.",
                        empty: "Please enter your email.",
                        duplicate: "You have already subscribed with this email address",
                        button: "Subscribe"
                        }
                        }
                    />
                </ModalContent>
            </ModalBody>`
        </Container>
    );
}

const Container = styled.div`
    background-color: ${theme.COLOR.MODAL_OPACITY};
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 10000;
    justify-content: center;
    align-items: center;
    display: ${props => props.show ? 'flex' : 'none'};
`;

const ModalBody = styled.div`
    display: flex;
    background-color: ${theme.COLOR.TEAL};
    height: 50vh;
    width: 50vh;
    border-radius: 10px;
    flex-direction: column;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    width: 100%;
    height: 100%;
`;
const WrapClose = styled.div`
    margin: 15px;
    top: 0;
    right: 0;
`;

const CloseIcon = styled(IconClose)`
  width: 16px;
  height: 16px;
  stroke: ${theme.COLOR.LIGHT_PINK};
  fill: ${theme.COLOR.LIGHT_PINK};
      &:hover {
        cursor: pointer;
    }
`;

const StyledMailchimp = styled(Mailchimp)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
    width: 70%;
input{
    margin: 1em;
    border: none;
    border-radius: .25em;
    padding: .25em .5em;
    font-size: large;
}
button{
    background-color: ${theme.COLOR.PALE_PINK_HOVER};
    padding: 1em 2em;
    border-radius: .5em;
    border: none;
    margin: 1em;
    font-size: large;
}

button:hover{
    background-color:  ${theme.COLOR.PALE_PINK};
    cursor: pointer;
}
`;


const Letters = styled(Image)`
    width: 40px;
    height: 50px;
`;

const LettersWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 3px;
`;