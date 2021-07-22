import { Container, InputContainer } from "./styles";

function Input({ maxWidth, marginBot, label, icon: Icon, ...rest }) {
    return (
        <Container>
            <div>{label}</div>
            <InputContainer maxWidth={maxWidth} marginBot={marginBot}>
                {Icon && <Icon />}
                <input {...rest} />
            </InputContainer>
        </Container>
    );
}

export default Input;